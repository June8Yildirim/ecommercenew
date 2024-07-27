import { createTransport } from "nodemailer";

export const sendEmail = async (subject, to, message) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_TRAP_HOST,
    port: process.env.MAIL_TRAP_PORT,
    auth: {
      user: process.env.MAIL_TRAP_USER,
      pass: process.env.MAIL_TRAP_PASS,
    },
  });
  await transporter.sendMail({ to, subject, text: message }, callback);
};
