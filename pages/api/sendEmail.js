import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

// pages/api/sendEmail.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    console.log(req.body);
    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "elvie95@ethereal.email",
        pass: "VBNYnMWX6JVBrw71Hv",
      },
    });

    const mailOptions = {
      from: "elvie95@ethereal.email",
      to: "elvie95@ethereal.email",
      // cc: email, (uncomment this line if you want to send a copy to the sender)
      subject: `Message from ${name} (${email})`,
      text: message,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Error sending email" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

// export async function POST(request) {
//   const { email, name, message } = await request.json();

//   const transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     auth: {
//       user: "elvie95@ethereal.email",
//       pass: "VBNYnMWX6JVBrw71Hv",
//     },
//   });

//   const mailOptions = {
//     from: "elvie95@ethereal.email",
//     to: "elvie95@ethereal.email",
//     // cc: email, (uncomment this line if you want to send a copy to the sender)
//     subject: `Message from ${name} (${email})`,
//     text: message,
//   };
//   const sendMailPromise = () =>
//     new Promise() <
//     string >
//     ((resolve, reject) => {
//       transporter.sendMail(mailOptions, function (err) {
//         if (!err) {
//           resolve("Email sent");
//         } else {
//           console.log("error");
//         }
//       });
//     });

//   try {
//     await sendMailPromise();
//     return NextResponse.json({ message: "Email sent" });
//     console.log("error");
//   } catch (err) {
//     console.log("error");

//     return NextResponse.json({ error: err }, { status: 500 });
//   }
// }
