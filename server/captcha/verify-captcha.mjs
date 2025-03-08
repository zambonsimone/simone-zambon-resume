import { ERRORS } from "../errors.mjs";
import { MESSAGES } from "../messages.mjs";
import { ErrorResponse, SuccessResponse } from "../responses.mjs";
import { getCorrectAnswerByChallengeUid } from "./utils.mjs";

export async function verifyCaptcha(userAnswerObj) {
    if (!userAnswerObj?.answer || !userAnswerObj?.uid) {
        return new ErrorResponse(ERRORS.ERR_BAD_REQUEST)
    }
    const userAnswer = userAnswerObj.answer.toLowerCase();
    const result = getCorrectAnswerByChallengeUid(userAnswerObj.uid).toLowerCase();
    if (result.error) return new ErrorResponse(result.error);
    const isAnswerCorrect = userAnswer === result;
    const message = isAnswerCorrect ? MESSAGES.CAPTCHA_VALIDATION_OK : MESSAGES.CAPTCHA_VALIDATION_FAIL;
    return new SuccessResponse({ message, response: isAnswerCorrect })
}