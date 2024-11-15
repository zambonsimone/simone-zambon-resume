import axios from "axios";
import { ErrorResponse, FormDataDto, SuccessResponse } from "./models";

const basePath = process.env.REACT_APP_BASE_PATH;
const options = { 
    headers: { 'Content-Type': 'application/json' }
};

export async function verifyRecaptcha(recaptcha: string): Promise<SuccessResponse | ErrorResponse> {
    const response = await axios.post<SuccessResponse | ErrorResponse>(`${basePath}verify-recaptcha`, 
        { recaptcha },
        options
    )
    return response.data;
}

export async function sendMail(formData: FormDataDto): Promise<SuccessResponse | ErrorResponse> {
    const response = await axios.post<SuccessResponse | ErrorResponse>(`${basePath}send-mail`, 
        formData,
        options
    );
    console.log(response);
    return response.data;
}