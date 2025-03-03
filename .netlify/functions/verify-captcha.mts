import { verifyCaptcha } from "../../server/captcha/verify-captcha.mjs";

interface ICaptchaUserAnswer {
    answer: string;
    uid: string;
}
export default async (request: Request) => {
    const reqBody: ICaptchaUserAnswer = await request.json();
    const response = await verifyCaptcha(reqBody);
    console.log(response);
    return new Response(JSON.stringify(response), {
        status: response.statusCode,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}
