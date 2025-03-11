export function ErrorResponse({ code, statusCode, message }) {
    this.code = code;
    this.statusCode = statusCode;
    this.message = message;
    this.response = {
        isError: true,
        code,
        message,
        statusCode
    }
}

export function SuccessResponse({ message, response }) {
    this.message = message;
    this.response = response;
    this.statusCode = 200;
}