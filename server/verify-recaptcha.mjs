import axios from "axios";
import { RECAPTCHA_SECRET_KEY } from "./constants.mjs";
import { ErrorResponse, SuccessResponse } from "./responses.mjs";


const ERR_INVALID_RECAPTCHA = "ERR_INVALID_RECAPTCHA_INPUT";
const MESSAGES = {
    RECAPTCHA_VERIFICATION_FAILED: "Recaptcha verification failed, retry",
    RECAPTCHA_VERIFICATION_SUCCESS: "Recaptca verified successfully!"
};

export async function verifyRecaptcha(recaptcha) {
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptcha}`;
    console.log(RECAPTCHA_SECRET_KEY);
    try {
        const response = await axios.post(url);
        const isError = !response.data.success;
        if (isError) {
            return new ErrorResponse({ 
                code: ERR_INVALID_RECAPTCHA, 
                message: MESSAGES.RECAPTCHA_VERIFICATION_FAILED,
                statusCode: 200  
            })
        }
        return new SuccessResponse({ message: MESSAGES.RECAPTCHA_VERIFICATION_SUCCESS });
    } catch (err) {
        const { message, code, status: statusCode } = err;
        return new ErrorResponse({ message, code, statusCode })
    }
}