import { HttpStatusCode } from "axios";
import { ErrorCodes } from "./errors";

export interface IAttachment {
    name: string;
    content: string | ArrayBuffer;
}
export type FormDataDto = { [key: string]: string | IAttachment }


abstract class Response {
    statusCode?: HttpStatusCode;

    constructor({ statusCode }: Response) {
        this.statusCode = statusCode;
    }
}

export class ErrorResponse extends Response {
    code: ErrorCodes;
    isError: true;
    message: string;

    constructor({ code, statusCode, message }: Pick<ErrorResponse, "code" | "statusCode" | "message">) {
        super({ statusCode });
        this.message = message;
        this.code = code;
        this.isError = true;
    }
}

export class SuccessResponse<T = unknown> extends Response {
    response?: T;
    isError: false;
    message?: string;

    constructor({ message, response }: Pick<SuccessResponse<T>, "message" | "response">) {
        super({ statusCode: HttpStatusCode.Ok });
        this.response = response;
        this.message = message;
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