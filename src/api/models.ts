export interface IResponseDataDto {
    isError: boolean;
    message: string;
}
export interface IAttachment {
    name: string;
    content: string | ArrayBuffer;
}
export type FormDataDto = { [key: string]: string | IAttachment }