import { useCallback, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { IAttachment } from "../../../api/models";
import { useSendMail } from "../../../hooks/useSendMail";
import { Form, FormModel } from "../../common/form/Form";
import { Captcha } from "../../common/form/input/captcha/Captcha";
import { HtmlSanitizer } from "../../common/html-sanitizer/HtmlSanitizer";
import { Plus } from "../../symbols/Symbols";
import { CharsCounter } from "./CharsCounter";
import { MESSAGE_MAX_CHARS } from "./constants";
import style from "./ContactMe.module.scss";
import { schema } from "./ContactMeFormModel";
import { CONTACT_ME_FORM } from "./labels";

const {
    FULLNAME,
    ATTACHMENT,
    EMAIL,
    EMAIL_COPY,
    MESSAGE,
    PHONE_NUMBER,
    PHONE_PREFIX,
    PRIVACY,
    SUBMIT,
} = CONTACT_ME_FORM;

export const ContactMeForm: React.FC = () => {
    const [messageCharsCount, setMessageCharsCount] = useState(0);
    const [attachment, setAttachment] = useState<IAttachment>();
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const { sendMail, isLoading: isLoadingSendMail, confirmMessage } = useSendMail();
    const { t } = useTranslation("contacts");

    const onMessageChange = useCallback((value: string) => {
        setMessageCharsCount(value.length);
    }, [])

    const onFileChange = useCallback((value: FileList) => {
        const file = value[0];
        const reader = new FileReader();
        reader.addEventListener("load", (event: ProgressEvent<FileReader>) => {
            setAttachment({
                content: (event.target.result as string).split(",")[1],
                name: file.name,
            });
        });
        reader.readAsDataURL(file);
    }, [])

    const onSubmit: SubmitHandler<FormModel> = useCallback(async (formData: FormModel) => {
        const phoneNumber = formData?.phoneNumber ? `+${formData.phoneNumber}` : undefined;
        sendMail({ ...formData, phoneNumber, attachment });
    }, [attachment, sendMail]);

    return (
        <Form
            validationSchema={schema}
            className={style.contactMeForm}
            onSubmit={onSubmit}
            title={t("FORM_TITLE")}
        >
            {(Field, SubmitBtn) => {
                return (
                    <>
                        <Field
                            name="fullname"
                            placeholder={t(FULLNAME.PLACEHOLDER)}
                            label={t(FULLNAME.LABEL)}
                            type="text"
                        />
                        <Field
                            name="email"
                            inputMode="email"
                            placeholder={t(EMAIL.PLACEHOLDER)}
                            label={t(EMAIL.LABEL)}
                            type="text"
                        />
                        <Field
                            name="emailCopy"
                            inputMode="email"
                            placeholder={t(EMAIL_COPY.PLACEHOLDER)}
                            label={t(EMAIL_COPY.LABEL)}
                            type="text"
                        />
                        <div className={style.phoneDataRow}>
                            <Field
                                name="phonePrefix"
                                placeholder={t(PHONE_PREFIX.PLACEHOLDER)}
                                maxlength={7}
                                label={t(PHONE_PREFIX.LABEL)}
                                type="text"
                                inputMode="numeric"
                                className={style.fieldContainer}
                                appendBefore={<Plus />}
                            />
                            <Field
                                name="phoneNumber"
                                inputMode="tel"
                                placeholder={t(PHONE_NUMBER.PLACEHOLDER)}
                                label={t(PHONE_NUMBER.LABEL)}
                                type="number"
                                className={style.fieldContainer}
                            />
                        </div>
                        <Field
                            name="attachment"
                            placeholder={t(ATTACHMENT.PLACEHOLDER)}
                            label={t(ATTACHMENT.LABEL)}
                            type="file"
                            onChange={onFileChange}
                        />
                        <Field
                            name="message"
                            placeholder={t(MESSAGE.PLACEHOLDER)}
                            label={(
                                <>
                                    {t(MESSAGE.LABEL)}
                                    <CharsCounter charsCount={messageCharsCount} maxCharsCount={MESSAGE_MAX_CHARS} />
                                </>
                            )}
                            type="textarea"
                            className={style.messageFieldContainer}
                            onChange={onMessageChange}
                        />
                        <Field
                            name="privacy"
                            label={<HtmlSanitizer htmlString={t(PRIVACY.LABEL)} className={style.privacyLabel} />}
                            type="checkbox"
                        />
                        <Captcha onVerify={(value) => setCaptchaVerified(value)} />
                        <div className={style.submitRow}>
                            <SubmitBtn label={t(SUBMIT.LABEL)} loading={isLoadingSendMail} disabled={!captchaVerified} />
                            {confirmMessage && (
                                <span className={[style.confirmMessage, style[confirmMessage.status]].join(" ")}>
                                    {confirmMessage.text}
                                </span>
                            )}
                        </div>


                    </>
                )
            }}
        </Form>
    )
}