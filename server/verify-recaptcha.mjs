import axios from "axios";
import { RECAPTCHA_SECRET_KEY } from "./constants.mjs";

const VERIFICATION_MSG = {
    SUCCESS: "Recaptcha verified!",
    ERROR: "Recaptcha verification failed, retry"
}

export async function verifyRecaptcha(recaptcha) {
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptcha}`;
    try {
        const response = await axios.post(url);
        const isError = !response.data.success;
        return { 
            isError, 
            message: isError ? VERIFICATION_MSG.ERROR : VERIFICATION_MSG.SUCCESS
        };
    } catch (err) {
        console.log(err);
        return { isError: true, message: `Error on recaptcha verification - Error: ${err.code}`};
    }
}