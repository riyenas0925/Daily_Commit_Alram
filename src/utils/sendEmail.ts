import {createTransport} from 'nodemailer';

export const sendEmail = async(title: string, text: string) => {
    let transporter = createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASS
        }
    });

    let info = await transporter.sendMail({
        from: 'Daily Commit Alram <' + process.env.USER_ID + '>',
        to: process.env.NODEMAILER_USER,
        subject: title,
        text: text
    });

    return info;
}