import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

function getChallengeList() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, "captcha-challenges.json");
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData).challenges;
}

export function getCorrectAnswerByChallengeUid(uid) {
    const challenges = getChallengeList();
    return challenges.find(elem => elem.uid === uid).text;
}

export function getRandomChallenge() {
    const challenges = getChallengeList();
    const randomIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomIndex];
    return challenge;
}