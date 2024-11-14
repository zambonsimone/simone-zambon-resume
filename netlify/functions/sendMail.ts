import { Handler } from "@netlify/functions";
import { sendMail } from "../../server/mail.mjs";

const handler: Handler = async (request) => {
    console.log("request")
    if (!request.body) {
        return {
            statusCode: 400,
            body: JSON.stringify({ isError: true, message: "Failed to send email: Error 400 Bad request" })
        }
    }
    const reqBody: FormData = JSON.parse(request.body);
    const { isError, message } = await sendMail(reqBody);
    return {
        statusCode: isError ? 500 : 200,
        body: JSON.stringify({ isError, message })
    }
}

export default handler;