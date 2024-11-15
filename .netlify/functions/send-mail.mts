import { buildMailDataLogMsg, sendMail } from "../../server/send-mail.mjs";

export default async (request: Request) => {
    const reqBody: FormData = await request.json();
    console.log(buildMailDataLogMsg(reqBody));
    const response = await sendMail(reqBody);
    return new Response(JSON.stringify(response), {
        status: response.statusCode,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}
