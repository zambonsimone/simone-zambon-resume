import { ErrorResponse, SuccessResponse } from "../responses.mjs";
import { getCorrectAnswerByChallengeUid } from "./utils.mjs";

export async function verifyCaptcha(userAnswerObj) {
    if (!userAnswerObj?.answer || !userAnswerObj?.uid) {
        return new ErrorResponse({
            code: "ERR_BAD_REQUEST",
            message: "Invalid data",
            statusCode: 400,
        })
    }
    const userAnswer = userAnswerObj.answer.toLowerCase();
    const correctAnswer = getCorrectAnswerByChallengeUid(userAnswerObj.uid).toLowerCase();
    const isAnswerCorrect = userAnswer === correctAnswer;
    const message = isAnswerCorrect ? "Captcha verified successfully!" : "Captcha validation failed"
    return new SuccessResponse({ message, response: isAnswerCorrect })
}