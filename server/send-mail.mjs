import fs from "fs";
import nodemailer from "nodemailer";
import { EMAIL_PASSWORD, EMAIL_USERNAME, SEND_EMAIL_TO } from "./constants.mjs";
import { ERRORS } from "./errors.mjs";
import { MESSAGES } from "./messages.mjs";
import { ErrorResponse, SuccessResponse } from "./responses.mjs";

export const buildMailDataLogMsg = (req) => {
    return `
    *****
        DATE:
        ${new Date().toISOString()}
        BODY:
        ${JSON.stringify(req)}\n
        `;
}

export const logger = (req) => {
    const logMessage = buildMailDataLogMsg(req);
    fs.appendFile('server/log.txt', logMessage, (err) => {
        if (err) {
            console.error('Error on log updating:', err);
        }
    });
};

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: EMAIL_USERNAME,
      pass: EMAIL_PASSWORD
    }
});

function buildMailSubject(fullname) {
    return `Hi Simone${fullname ? `, this is ${fullname}` : ""}. I'd like to contact you.`;
}

function buildMailHTML(formData) {
    const { email, fullname, message } = formData;
    const htmlName = fullname ? `<p><b>Name:</b>&nbsp;${fullname}</p>` : "";
    const htmlEmail = `<p><b>Email:</b>&nbsp;${email}</p>`;
    const htmlMessage =  message ? `<br/><br/><p>${message}</p>` : "";
    return htmlName + htmlEmail + htmlMessage
}

export async function sendMail(formData) {
    if (!formData) {
        return new ErrorResponse(ERRORS.ERR_BAD_REQUEST)
    }
    const html = buildMailHTML(formData);
    const subject = buildMailSubject(formData.fullname);
    const attachments = formData.attachment ? [{
        filename: formData.attachment.name,
        content: formData.attachment.content, 
        encoding: "base64"
    }] : [];
    const to = [SEND_EMAIL_TO]
    if (formData.emailCopy) to.push(formData.emailCopy)
    const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: to.join(","),
        subject,
        html,
        attachments
    };
    try {
        await transporter.sendMail(mailOptions);
        return new SuccessResponse({ message: MESSAGES.EMAIL_SENDING_SUCCESS });
    }
    catch (err) {
        console.log(err);
        const { code, responseCode, message } = err;
        return new ErrorResponse({ code, message, statusCode: responseCode  })
    }
};