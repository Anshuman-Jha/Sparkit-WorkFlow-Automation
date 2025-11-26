import { Kafka } from "kafkajs";

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

    // need to subscribe to the topic => whatever events comes inside this topic
    await consumer.subscribe({ topic: TOPIC_NAME, fromBeginning: true });

    await consumer.run({
        autoCommit: false, // by default it is true we set it to false

        // every time message comes we log that message/event
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                partition,
                offset: message.offset, // id of the message
                value: message.value?.toString()
            })

            await new Promise(r => setTimeout(r, 500));

            console.log("processing done !!!");

            // Commit the next offset (current offset + 1) as Kafka offsets are exclusive
            await consumer.commitOffsets([{
                topic: TOPIC_NAME,
                partition: partition,
                offset: (parseInt(message.offset) + 1).toString()
            }])

        },

    })

}

main().catch((error) => {
    console.error('Error in main:', error);
    process.exit(1);
})