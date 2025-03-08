import fs from "fs";
import path from "path";
import { ERRORS } from "../errors.mjs";

function getChallengeList() {
    const filePath = path.join(process.cwd(), "server/captcha/captcha-challenges.json");
    try {
        const rawData = fs.readFileSync(filePath);
        return JSON.parse(rawData).challenges;
    } catch (err) {
        return {
            err,
            error: ERRORS.ERR_INTERNAL_SERVER
        }
    }
}

export function getCorrectAnswerByChallengeUid(uid) {
    const result = getChallengeList();
    if (result.error) return result;
    return result.find(elem => elem.uid === uid).text;
}

export function getRandomChallenge() {
    const result = getChallengeList();
    if (result.error) return result;
    const randomIndex = Math.floor(Math.random() * result.length);
    const challenge = result[randomIndex];
    return challenge;
}