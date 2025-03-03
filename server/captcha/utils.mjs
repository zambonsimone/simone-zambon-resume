import fs from "fs";
import path from "path";

function getChallengeList() {
    const filePath = path.join(process.cwd(), "server/captcha/captcha-challenges.json");
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