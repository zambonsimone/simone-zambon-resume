import { Handler } from "@netlify/functions";
import { sendMail } from "../../../server/mail.mjs";

const handler: Handler = async (request) => {
    const reqBody: FormData | null = JSON.parse(request.body ?? "null");
    return await sendMail(reqBody);
}
export default handler;