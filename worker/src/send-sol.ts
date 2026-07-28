import { Public } from "@prisma/client/runtime/client";
import { Connection, Keypair, LAMPORTS_PER_SOL, sendAndConfirmTransaction, SystemProgram, PublicKey } from "@solana/web3.js";
import { Transaction } from "@solana/web3.js";
export async function sendSol(amount: string, address: string) {

    const connection = new Connection("mainnet-beta");

    Keypair.fromSecretKey(base58.decode((process.env.SOL_PRIVATE_KEY ?? "")));

    const transaction = new Transaction().add(
        SystemProgram.transfer({
            fromPubkey: Keypair.PublicKey,
            toPubkey: new PublicKey(address),
            lamports: parseFloat(amount) * LAMPORTS_PER_SOL,
        })
    );

    await sendAndConfirmTransaction(connection, transferTransaction, [fromKeypair]);

    console.log("Sol Sent !!!!")
}