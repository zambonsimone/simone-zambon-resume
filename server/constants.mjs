import dotenv from "dotenv";

const isProduction = process.env.NODE_ENV == "production";
dotenv.config({
    path: isProduction ? "./.env.production" : "./.env.development"
});
export const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
export const EMAIL_USERNAME = process.env.EMAIL_USERNAME;
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD; 
export const SEND_EMAIL_TO = "zambon.simone@yahoo.it";
