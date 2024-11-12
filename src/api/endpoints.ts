import axios from "axios";
import { FormDataDto, IResponseDataDto } from "./models";

export async function verifyRecaptcha(recaptcha: string): Promise<IResponseDataDto> {
    const { data } = await axios.post<IResponseDataDto>("/api/verify-recaptcha", { recaptcha });
    return data;
}

export async function sendMail(formData: FormDataDto) {
    axios.post("/api/send", formData);
}