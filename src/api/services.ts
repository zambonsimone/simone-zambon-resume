import { AxiosError } from "axios";
import { sendMail, verifyRecaptcha } from "./endpoints";
import { EMAIL_MESSAGES, ErrorCodes, ERRORS, RECAPTCHA_MESSAGES } from "./messages";
import { ErrorResponse, FormDataDto, SuccessResponse } from "./models";

export async function testRecaptcha(recaptcha: string) {
    try {
        const response = await verifyRecaptcha(recaptcha);
        const { isError } = response;
        const isInvalidReCaptchaInput = isError && response.code === ERRORS.ERR_INVALID_RECAPTCHA_INPUT;
        if (isInvalidReCaptchaInput) {
            return new ErrorResponse({ 
                code: response.code, 
                message: RECAPTCHA_MESSAGES.RECAPTCHA_VERIFICATION_FAILED, 
                statusCode: 200 
            })
        }
        return new SuccessResponse({ message: RECAPTCHA_MESSAGES.RECAPTCHA_VERIFICATION_SUCCESS })
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
        return new SuccessResponse({ message: EMAIL_MESSAGES.EMAIL_SENDING_FAILED })
    }
    catch (err) {
        const { code, status: statusCode } = err as AxiosError;
        return new ErrorResponse({ 
            code: code as ErrorCodes, 
            statusCode, 
            message : EMAIL_MESSAGES.EMAIL_SENDING_FAILED
        })
    }
}