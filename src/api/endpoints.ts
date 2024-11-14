import axios from "axios";
import { ErrorResponse, FormDataDto, SuccessResponse } from "./models";

export async function verifyRecaptcha(recaptcha: string): Promise<SuccessResponse | ErrorResponse> {
    const response = await axios.post<SuccessResponse | ErrorResponse>("/api/verify-recaptcha", { recaptcha })
    return response.data;
}

export async function sendMail(formData: FormDataDto): Promise<SuccessResponse | ErrorResponse> {
    const response = await axios.post<SuccessResponse | ErrorResponse>("/api/send", formData);
    return response.data;
}