import axios from "axios";
import { ErrorResponse, FormDataDto, ICaptchaChallenge, ICaptchaUserAnswer } from "./models";

const options = {
    headers: { 'Content-Type': 'application/json' }
};

export async function getCaptchaQuestion(): Promise<ICaptchaChallenge | ErrorResponse> {
    const response = await axios.get<ICaptchaChallenge | ErrorResponse>(`/api/get-captcha-challenge`);
    return response.data;
}

export async function verifyCaptcha(solution: ICaptchaUserAnswer): Promise<boolean | ErrorResponse> {
    const response = await axios.post<boolean | ErrorResponse>(`/api/verify-captcha`, solution);
    return response.data;
}

export async function sendMail(formData: FormDataDto): Promise<void | ErrorResponse> {
    const response = await axios.post<void | ErrorResponse>(`/api/send-mail`,
        formData,
        options
    );
    return response.data;
}