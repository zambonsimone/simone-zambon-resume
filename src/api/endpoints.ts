import axios from "axios";
import { ErrorResponse, FormDataDto, SuccessResponse } from "./models";

const basePath = process.env.REACT_APP_BASE_PATH;

export async function verifyRecaptcha(recaptcha: string): Promise<SuccessResponse | ErrorResponse> {
    const response = await axios.post<SuccessResponse | ErrorResponse>(
        `${basePath}/verify-recaptcha`, 
        { recaptcha }
    )
    return response.data;
}

export async function sendMail(formData: FormDataDto): Promise<SuccessResponse | ErrorResponse> {
    const response = await axios.post<SuccessResponse | ErrorResponse>(
        `${basePath}/send`, 
        formData
    );
    return response.data;
}