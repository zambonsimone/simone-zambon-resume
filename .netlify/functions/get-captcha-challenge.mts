import { getCaptchaChallenge } from "../../server/captcha/get-captcha-challenge.mjs";

export default () => {
    const result = getCaptchaChallenge();
    return new Response(JSON.stringify(result.response), {
        status: result.statusCode,
        headers: {
            'Content-Type': 'application/json',
        },
    })
}
