import { SuccessResponse } from "../responses.mjs";
import { getRandomChallenge } from "./utils.mjs";

export function getCaptchaChallenge() {
    const { uid, data } = getRandomChallenge();
    return new SuccessResponse({ response: { uid, data } })
}