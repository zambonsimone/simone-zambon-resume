import axios from "axios";
import { ErrorResponse, FormDataDto, ICaptchaChallenge, ICaptchaUserAnswer, SuccessResponse } from "./models";

const options = { 
    headers: { 'Content-Type': 'application/json' }
};

export async function verifyRecaptcha(recaptcha: string): Promise<SuccessResponse | ErrorResponse> {
    const response = await axios.post<SuccessResponse | ErrorResponse>(`/api/verify-recaptcha`, 
        { recaptcha },
        options
    )
    return response.data;
}

export async function getCaptchaQuestion(): Promise<SuccessResponse<ICaptchaChallenge> | ErrorResponse> {
    const response = await axios.get<SuccessResponse<ICaptchaChallenge> | ErrorResponse>(`/api/get-captcha-challenge`);
    return response.data;
}

export async function verifyCaptcha(solution: ICaptchaUserAnswer): Promise<SuccessResponse<boolean> | ErrorResponse> {
    const response = await axios.post<SuccessResponse<boolean> | ErrorResponse>(`/api/verify-captcha`, solution);
    return response.data;
}

export async function sendMail(formData: FormDataDto): Promise<SuccessResponse | ErrorResponse> {
    const response = await axios.post<SuccessResponse | ErrorResponse>(`/api/send-mail`, 
        formData,
        options
    );
    console.log(response);
    return response.data;
}