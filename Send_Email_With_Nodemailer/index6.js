import dotenv from 'dotenv';
import { log } from 'node:console';
import nodemailer from 'nodemailer'; // better import style

dotenv.config();

const mailServer = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.FROM_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

log('email send start');

mailServer.sendMail(
  {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: 'New Email with Attachment',
    text: 'Hi Amila, this email includes an attachment.',
    attachments: [
      {
        filename: 'test.webp', // the file name user will see
        path: './test.webp', // path to your file
      },
      // You can add more files like:
      // { filename: 'image.png', path: './public/image.png' }
    ],
  },
  (error, info) => {
    if (error) {
      log('❌ Cannot send the email:', error.message);
    } else {
      log('✅ Email sent successfully:', info.response);
    }
  }
);

log('email send end');
