import cors from "cors";
import express from "express";
import { getCaptchaChallenge } from "./captcha/get-captcha-challenge.mjs";
import { verifyCaptcha } from "./captcha/verify-captcha.mjs";
import { logger, sendMail } from "./send-mail.mjs";

const app = express();
app.use(cors());
app.use(express.json({ limit: "100mb" }));

app.post("/api/send-mail", async (req, res) => {
  logger(req.body);
  const resp = await sendMail(req.body);
  console.log(resp.message);
  return res.status(resp.statusCode).send(resp.response);
});

app.get("/api/get-captcha-challenge", async (req, res) => {
  const resp = await getCaptchaChallenge();
  return res.status(resp.statusCode).send(resp.response);
})

app.post("/api/verify-captcha", async (req, res) => {
  const resp = await verifyCaptcha(req.body);
  return res.status(resp.statusCode).send(resp.response);
})

const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`Server running on port ${port}`));
