import { Kafka } from "kafkajs";
import { prismaClient } from "./db/client.js"
import type { JsonObject } from "@prisma/client/runtime/client";
import { parse } from "./parser.js";
import { sendEmail } from "./send-email.js";
import { sendSol } from "./send-sol.js";

const TOPIC_NAME = "spark-events";

const kafka = new Kafka({
    clientId: 'outbox-processor',
    brokers: ['localhost:9092']
});

async function main() {
    // initialize kafka consumer
    const consumer = kafka.consumer({
        groupId: 'main-worker',
        sessionTimeout: 60000, // 60 seconds
        heartbeatInterval: 19000, // 19 seconds (should be < 1/3 of sessionTimeout)
        maxInFlightRequests: 1, // Process one message at a time
        retry: {
            retries: 8,
            initialRetryTime: 100,
            multiplier: 2,
            maxRetryTime: 30000
        }
    });
    await consumer.connect();

    const producer = kafka.producer();
    await producer.connect();

    // need to subscribe to the topic => whatever events comes inside this topic
    await consumer.subscribe({ topic: TOPIC_NAME, fromBeginning: true });

    await consumer.run({
        autoCommit: false, // by default it is true we set it to false

        // every time message comes perform operation insde function
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                partition,
                offset: message.offset, // id of the message
                value: message.value?.toString()
            })

            if (!message.value?.toString()) {
                return;
            }

            const parsedValue = JSON.parse(message.value?.toString());
            const sparkRunId = parsedValue.sparkRunId;
            const stage = parsedValue.stage;

            // for my sparkRun find the Associated spark => include :{ spark
            // for that spark find Associated actions => include: { actions
            // for that action find the Associated type => type: true i.e  return type of AvailableActions 
            const sparkRunDetails = await prismaClient.sparkRun.findFirst({
                where: {
                    id: sparkRunId,
                },
                include: {
                    spark: {
                        include: {
                            actions: {
                                include: {
                                    type: true
                                }
                            }
                        }
                    },
                }

            });
            // finding action whose sortingOrder qual to current val of stage => true => currentAction else false 
            const currentAction = sparkRunDetails?.spark.actions.find(x => x.sortingOrder === stage);

            if (!currentAction) {
                console.log("Current Action not found !!!!");
                return;
            }

            console.log(currentAction);

            if (currentAction.type.id === "email") {

                const sparkRunMetadata = sparkRunDetails?.metadata; // {comment: {email: "man "}}
                const body = parse((currentAction.metadata as JsonObject)?.body as string, sparkRunMetadata); // you just received...
                const to = parse((currentAction.metadata as JsonObject)?.email as string, sparkRunMetadata);// {comment.email}  

                console.log(`Sending out an Email to ${to} body is ${body}`);

                await sendEmail(to, body);
            }

            if (currentAction.type.id === "send-sol") {

                const sparkRunMetadata = sparkRunDetails?.metadata; // {comment: {email: "man "}}
                const amount = parse((currentAction.metadata as JsonObject)?.amount as string, sparkRunMetadata); // you just received...
                const address = parse((currentAction.metadata as JsonObject)?.address as string, sparkRunMetadata);

                console.log(`Sending out SOL of ${amount} to ${address}`);

                await sendSol(amount, address);
            }

            await new Promise(r => setTimeout(r, 500));

            const sparkId = message.value?.toString();
            const lastStage = (sparkRunDetails?.spark.actions?.length || 1) - 1; // order starts from 0 => total actions - 1 => final action order 

            // if not last stage then need to push next stage in kafka
            if (lastStage !== stage) { // if this not last stage i.e already declared i.e stage then we need to publish 
                console.log("Pushing back to Queue")
                await producer.send({
                    topic: TOPIC_NAME,
                    messages: [{
                        value: JSON.stringify({
                            stage: stage + 1,
                            sparkRunId
                        })
                    }]
                });

            }

            console.log("processing done !!!");

            // Commit the next offset (current offset + 1) as Kafka offsets are exclusive
            await consumer.commitOffsets([{
                topic: TOPIC_NAME,
                partition: partition,
                offset: (parseInt(message.offset) + 1).toString()
            }])

        },

    })

};

main().catch((error) => {
    console.error('Error in main:', error);
    process.exit(1);
})

// send a ury to get back SparkId
// send a query to get back the actons asscoiated to sparkId
// find the Available Actions i.e type of that Action 
// metadata parsing and extracting useful information 