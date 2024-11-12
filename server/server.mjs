import cors from "cors";
import express from "express";
import { sendMail } from "./mail.mjs";
import { verifyRecaptcha } from "./verify-recaptcha.mjs";

const app = express();
app.use(cors());
app.use(express.json({ limit: "100mb" }));

app.post("/api/send", async (req,res) => {
  const resp = await sendMail(req.body);
  console.log(resp.message);
  return res.status(res.statusCode).send(resp);
});

app.post("/api/verify-recaptcha", async (req,res) => {
  const resp = await verifyRecaptcha(req.body.recaptcha);
  console.log(resp.message);
  return res.status(res.statusCode).send(resp);
})

const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`Server running on port ${port}`));
