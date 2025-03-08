import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { FormDataDto } from "../api/models";
import { sendFormDataAsMail } from "../api/services";

interface ISendMailConfirmMessage {
    text: string, 
    status: "error" | "success"
}

export function useSendMail() {
    const [isLoading, setIsLoading] = useState(false);
    const [confirmMessage, setConfirmMessage] = useState<ISendMailConfirmMessage>();
    const {t} = useTranslation("messages");

    const sendMail = useCallback(async (formData: FormDataDto) => {
        setIsLoading(true);
        const { message, isError } = await sendFormDataAsMail(formData);
        setIsLoading(false);
        setConfirmMessage({ text: t(message), status: isError ? "error" : "success" });
    },[t])

    return {
        sendMail,
        isLoading,
        confirmMessage
    }
}