import { verifyRecaptcha } from "../../server/verify-recaptcha.mjs";

export default async (request: Request) => {
    const reqBody: { recaptcha: string } = await request.json();
    const response = await verifyRecaptcha(reqBody.recaptcha);
    console.log(response);
    return new Response(JSON.stringify(response), {
        status: response.statusCode,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}
