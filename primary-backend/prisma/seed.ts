import { prismaClient } from "../src/db/index"

async function main() {

    await prismaClient.availableTriggers.create({
        data: {
            id: "webhook",
            name: "webhook",
            image: "https://share.google/images/hSo2eSdfKwfRAW70X",
        }
    })

    await prismaClient.availableAction.create({
        data: {
            id: "send-sol",
            name: "send solana",
            image: "https://share.google/images/0zruITEpc7B5tEvCB"
        }
    })

    await prismaClient.availableAction.create({
        data: {
            id: "email",
            name: "send email",
            image: "https://share.google/images/8qbTKU08DLkAFdvHm"
        }
    })

}
main().catch((e) => {
    console.error('Error in main:', e);
    process.exit(1);
});