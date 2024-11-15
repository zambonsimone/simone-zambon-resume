import { Handler } from "@netlify/functions";
import { buildMailDataLogMsg, sendMail } from "../../server/mail.mjs";

const handler: Handler = async (request) => {
    const reqBody: FormData | null = JSON.parse(request.body ?? "null");
    console.log(buildMailDataLogMsg(reqBody))
    return await sendMail(reqBody);
}
export default handler;