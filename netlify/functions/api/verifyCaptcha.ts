import { Handler } from "@netlify/functions";
import { verifyRecaptcha } from "../../../server/verify-recaptcha.mjs";

const handler: Handler = async (request) => {
    const reqBody: { recaptcha: string } | null = JSON.parse(request.body ?? "null");
    return await verifyRecaptcha(reqBody);
}
export default handler;