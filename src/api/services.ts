import { AxiosError } from "axios";
import { getCaptchaQuestion, sendMail, verifyCaptcha } from "./endpoints";
import { ErrorCodes } from "./errors";
import { MESSAGES } from "./messages";
import { ErrorResponse, FormDataDto, ICaptchaChallenge, ICaptchaUserAnswer, SuccessResponse } from "./models";

export async function testCaptcha(solution: ICaptchaUserAnswer) {
    try {
        const response = await verifyCaptcha(solution);
        return new SuccessResponse<boolean>({
            message: response === true ? MESSAGES.CAPTCHA_VALID : MESSAGES.CAPTCHA_NOT_VALID,
            response: response as boolean
        })
    }
    catch (err) {
        const { code, status: statusCode, message } = err as AxiosError;
        return new ErrorResponse({
            code: code as ErrorCodes,
            statusCode,
            message
        })
    }
}

export async function getCaptchaChallenge() {
    try {
        const response = await getCaptchaQuestion();
        return new SuccessResponse<ICaptchaChallenge>({ response: response as ICaptchaChallenge })
    }
    catch (err) {
        const { code, status: statusCode, message } = err as AxiosError;
        return new ErrorResponse({
            code: code as ErrorCodes,
            statusCode,
            message
        })
    }
}

export async function sendFormDataAsMail(formData: FormDataDto) {
    try {
        await sendMail(formData);
        return new SuccessResponse<void>({ message: MESSAGES.EMAIL_SENT })
    }
    catch (err) {
        const { code, status: statusCode, message } = err as AxiosError;
        return new ErrorResponse({
            code: code as ErrorCodes,
            statusCode,
            message
        })
    }
}