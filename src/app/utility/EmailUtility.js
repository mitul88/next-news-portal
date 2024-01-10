import nodemailer from "nodemailer";

export async function sendEmail (EmailTo, EmailText, EmailSubject) {
    let Transport = nodemailer.createTransport({
        host:"mail.teamrabbil.com",
        port:25,
        secure: false,
        auth: {
            user: "info@teamrabbil.com",
            pass: "~sR4[bhaC[Qs"
        },
        tls: {rejectUnauthorized: false}
    })

    let MailOption={
        from: "Next js news portal <info@teamrabbil.com>",
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText
    }

    return Transport.sendMail(MailOption)
}