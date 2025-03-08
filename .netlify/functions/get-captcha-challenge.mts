import { getCaptchaChallenge } from "../../server/captcha/get-captcha-challenge.mjs";

export default () => {
    const response = getCaptchaChallenge();
    return new Response(JSON.stringify(response), {
        status: response.statusCode,
        headers: {
            'Content-Type': 'application/json',
        },
    })
}
