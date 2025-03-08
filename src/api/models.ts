import { HttpStatusCode } from "axios";
import { ErrorCodes } from "./errors";

export interface IAttachment {
    name: string;
    content: string | ArrayBuffer;
}
export type FormDataDto = { [key: string]: string | IAttachment } 


abstract class Response {
    statusCode?: HttpStatusCode;
    message: string;

    constructor({ statusCode, message }: Response) {
        this.statusCode = statusCode;
        this.message = message;
    }
}

export class ErrorResponse extends Response {
    code: ErrorCodes;
    isError: true;

    constructor({ code, statusCode, message }: Pick<ErrorResponse, "code" |  "statusCode" | "message">) {
        super({ statusCode, message });
        this.code = code;
        this.isError = true;
    }
}

export class SuccessResponse<T = unknown> extends Response {
    response?: T;
    isError: false;

    constructor({ message, response }: Pick<SuccessResponse<T>, "message" | "response">) {
        super({ statusCode: HttpStatusCode.Ok, message });
        this.response = response;
        this.isError = false;
    }
}

export interface ICaptchaUserAnswer {
    uid: string;
    answer: string;
}

export interface ICaptchaChallenge {
    uid: string;
    data: string;
}