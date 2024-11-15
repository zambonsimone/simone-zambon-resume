import { Handler } from "@netlify/functions";
import { verifyRecaptcha } from "../../server/verify-recaptcha.mjs";

const handler: Handler = async (request) => {
    console.log("verify-recaptcha request received");
    const reqBody: { recaptcha: string } | null = JSON.parse(request.body ?? "null");
    const response = await verifyRecaptcha(reqBody);
    console.log(response);
    return response;
}
export default handler;