import { Handler } from "@netlify/functions";
import { verifyRecaptcha } from "../../server/verify-recaptcha.mjs";

const handler: Handler = async (request) => {
    if (!request.body) {
        return {
            statusCode: 400,
            body: JSON.stringify({ isError: true, message: "Error on recaptcha verification - Error 400" })
        }
    }
    const reqBody: { recaptcha: string } = JSON.parse(request.body); 
    const { isError, message } = await verifyRecaptcha(reqBody.recaptcha);
    return {
        statusCode: isError ? 500 : 200,
        body: JSON.stringify({ isError, message })
    }
}

export default handler;