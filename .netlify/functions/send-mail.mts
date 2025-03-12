import { buildMailDataLogMsg, sendMail } from "../../server/send-mail.mjs";

export default async (request: Request) => {
    const reqBody: FormData = await request.json();
    console.log(buildMailDataLogMsg(reqBody));
    const result = await sendMail(reqBody);
    return new Response(JSON.stringify(result.response), {
        status: result.statusCode,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}
