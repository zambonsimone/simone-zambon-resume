export function ErrorResponse({ code, statusCode, message }) {
    this.code = code;
    this.statusCode = statusCode;
    this.message = message;
    this.isError = true;
}

export function SuccessResponse({ message, response }) {
    this.message = message;
    this.response = response;
    this.isError = false;
    this.statusCode = 200;
}