export const RECAPTCHA_MESSAGES = {
    RECAPTCHA_VERIFICATION_FAILED: "Recaptcha verification failed, retry",
    RECAPTCHA_VERIFICATION_SUCCESS: "Recaptca verified successfully!"
};
export const EMAIL_MESSAGES = {
    EMAIL_SENDING_FAILED: "Email sending failed, retry",
    EMAIL_SENDING_SUCCESS: "Email sent successfully!"
};
const RECAPTCHA_ERRORS = {
    ERR_INVALID_RECAPTCHA_INPUT: "ERR_INVALID_RECAPTCHA_INPUT",
}
export const ERRORS = {
    ...RECAPTCHA_ERRORS
} as const;
export type ErrorCodes = keyof typeof ERRORS;
