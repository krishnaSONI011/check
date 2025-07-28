"use server";
import nodemailer from "nodemailer";

type ContactDetails = {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type EmailType = "contact" | "jobApplication";

const password = process.env.EMAIL_PASSWORD;
const host = process.env.EMAIL_HOST;
const user = process.env.EMAIL_USERNAME_FROM;
const port = parseInt(process.env.EMAIL_SERVER_PORT as string, 10);
const mailTo = process.env.EMAIL_TO;

export default async function sendEmail(
  data: ContactDetails | FormData,
  emailType: EmailType
) {
  console.log(data);
  try {
    const transporter = nodemailer.createTransport({
      port,
      host,
      secure: true,
      auth: {
        user,
        pass: password,
      },
    });

    let mailText = "";
    let subject = "";
    const attachments: any[] = [];

    if (emailType === "contact") {
      const contactData = data as ContactDetails;
      mailText = `First Name: ${contactData.fname}
Last Name: ${contactData.lname}
Email Address: ${contactData.email}
Phone: ${contactData.phone}
Subject: ${contactData.subject}
Message:
${contactData.message}`;
      subject = contactData.subject;
    } else if (emailType === "jobApplication") {
      const formData = data as FormData;
      const jobData = {
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        email: formData.get("email") as string,
        phoneNumber: formData.get("phoneNumber") as string,
        applyingFor: formData.get("applyingFor") as string,
      };

      mailText = `First Name: ${jobData.firstName}
Last Name: ${jobData.lastName}
Email Address: ${jobData.email}
Phone: ${jobData.phoneNumber}
Applying for: ${jobData.applyingFor}`;

      subject = `Job Application: ${jobData.applyingFor}`;

      const resumeFile = formData.get("resume") as File;
      if (resumeFile) {
        const buffer = Buffer.from(await resumeFile.arrayBuffer());
        attachments.push({
          filename: resumeFile.name,
          content: buffer,
        });
      }
    }

    const info = await transporter.sendMail({
      from: process.env.EMAIL_HOST_FROM,
      to: mailTo,
      subject,
      text: mailText,
      attachments,
    });

    console.log("Message sent:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}
