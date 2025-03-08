import { AxiosError } from "axios";
import { getCaptchaQuestion, sendMail, verifyCaptcha } from "./endpoints";
import { ErrorCodes } from "./errors";
import { ErrorResponse, FormDataDto, ICaptchaChallenge, ICaptchaUserAnswer, SuccessResponse } from "./models";

export async function testCaptcha(solution: ICaptchaUserAnswer) {
    try {
        const result = await verifyCaptcha(solution);
        if (result.isError === true) return new ErrorResponse(result);
        return new SuccessResponse<boolean>({ 
            message: result.message, 
            response: result.response 
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
        const result = await getCaptchaQuestion();
        if (result.isError === true) return new ErrorResponse(result);
        return new SuccessResponse<ICaptchaChallenge>({ 
            message: result.message, 
            response: result.response 
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

export async function sendFormDataAsMail(formData: FormDataDto) {
    try {
        const result = await sendMail(formData);
        if (result.isError) return new ErrorResponse(result);
        return new SuccessResponse({ message: result.message })
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