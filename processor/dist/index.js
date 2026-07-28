import { prismaClient } from "./db/index.js";
import { Kafka } from "kafkajs";
const kafka = new Kafka({
    clientId: 'outbox-processor',
    brokers: ['localhost:9092']
});
const TOPIC_NAME = "spark-events";
async function main() {
    const producer = kafka.producer();
    await producer.connect();
    while (1) {
        const pendingRows = await prismaClient.sparkRunOutbox.findMany({
            where: {},
            take: 10 // limit it to 10
        });
        // console.log(pendingRows);
        if (pendingRows.length > 0) {
            console.log(`[Producer] Found ${pendingRows.length} messages. Publishing...`);
            // I need to publish on kafka 
            producer.send({
                topic: TOPIC_NAME,
                messages: pendingRows.map(r => {
                    return {
                        value: JSON.stringify({
                            sparkRunId: r.sparkRunId,
                            stage: 0
                        })
                    };
                })
            });
            await prismaClient.sparkRunOutbox.deleteMany({
                where: {
                    id: {
                        in: pendingRows.map(x => x.id)
                    }
                }
            });
            console.log(`[Producer] Successfully processed and deleted ${pendingRows.length} messages.`);
        }
        else {
            console.log(`[Producer] No new messages found. Sleeping...`);
        }
        await new Promise(r => setTimeout(r, 5000));
    }
}
main().catch((error) => {
    console.error('Error in main:', error);
    process.exit(1);
});
//# sourceMappingURL=index.js.map