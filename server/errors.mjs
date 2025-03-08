import { MESSAGES } from "./messages.mjs"

export const ERRORS = {
    ERR_BAD_REQUEST: {
        code: "ERR_BAD_REQUEST",
        message: MESSAGES.INVALID_DATA,
        statusCode: 400
    },
    ERR_INTERNAL_SERVER: {
        code: "ERR_INTERNAL_SERVER",
        message: MESSAGES.INTERNAL_SERVER_ERROR,
        statusCode: 500
    }
}