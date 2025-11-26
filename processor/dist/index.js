import { PrismaClient } from "./generated/prisma/client.js";
import { Kafka } from "kafkajs";
const client = new PrismaClient();
const kafka = new Kafka({
    clientId: 'outbox-processor',
    brokers: ['localhost:9092']
});
const TOPIC_NAME = "spark-events";
async function main() {
    const producer = kafka.producer();
    await producer.connect();
    while (1) {
        const pendingRows = await client.sparkRunOutbox.findMany({
            where: {},
            take: 10 // limit it to 10
        });
        // I need to publish on kafka 
        producer.send({
            topic: TOPIC_NAME,
            messages: pendingRows.map(r => {
                return {
                    value: r.sparkRunId
                };
            })
        });
        await client.sparkRunOutbox.deleteMany({
            where: {
                id: {
                    in: pendingRows.map(x => x.id)
                }
            }
        });
    }
}
main();
//# sourceMappingURL=index.js.map