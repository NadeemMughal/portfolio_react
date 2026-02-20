import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, phone, challenge } = await req.json();

        if (!name || !email || !challenge) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Configure Nodemailer Transporter
        // NOTE: You need to set GMAIL_USER and GMAIL_PASS in your .env.local file
        // GMAIL_PASS should be an "App Password" if you have 2FA enabled.
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: "sales.nadeem10@gmail.com",
            subject: `New Portfolio Inquiry from ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        
        Challenge/Message:
        ${challenge}
      `,
            html: `
        <h3>New Portfolio Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <br/>
        <p><strong>Challenge/Message:</strong></p>
        <p>${challenge.replace(/\n/g, '<br>')}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Email Error:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
