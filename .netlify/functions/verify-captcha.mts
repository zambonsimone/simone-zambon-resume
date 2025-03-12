import { verifyCaptcha } from "../../server/captcha/verify-captcha.mjs";

interface ICaptchaUserAnswer {
    answer: string;
    uid: string;
}
export default async (request: Request) => {
    const reqBody: ICaptchaUserAnswer = await request.json();
    const result = await verifyCaptcha(reqBody);
    return new Response(JSON.stringify(result.response), {
        status: result.statusCode,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}
