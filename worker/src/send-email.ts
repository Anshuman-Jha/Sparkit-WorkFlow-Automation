require('dotenv').config()
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: process.env.SMTP_ENDPOINT,
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USERNAME,
        password: process.env.SMTP_PASSWORD
    }
});

export async function sendEmail(to: string, body: string) {

    await transport.sendMail({
        from: "dalunatic7dean@gmail.com",
        sender: "dalunatic7dean@gmail.com",
        to: "johnreigns739@gmail.com",
        subject: "Hello from Spark_It !!!",
        text: body
    });



}