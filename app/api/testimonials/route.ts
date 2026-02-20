import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

const dataFilePath = path.join(process.cwd(), "data", "testimonials.json");

export async function GET() {
    try {
        const fileData = fs.readFileSync(dataFilePath, "utf8");
        const testimonials = JSON.parse(fileData);
        return NextResponse.json(testimonials);
    } catch (error) {
        return NextResponse.json({ error: "Failed to load data" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, role, text, action, id } = body;

        let testimonials = [];
        if (fs.existsSync(dataFilePath)) {
            testimonials = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
        }

        if (action === "create") {
            const newTestimonial = {
                id: Date.now().toString(),
                name,
                role,
                text,
                approved: false // Pending approval by default
            };
            testimonials.push(newTestimonial);

            // Notify Admin via Email
            try {
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
                    subject: `New Testimonial Submitted - Action Required`,
                    html: `
              <h3>New Testimonial Pending Approval</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Role:</strong> ${role}</p>
              <p><strong>Feedback:</strong> ${text}</p>
              <br/>
              <p>Go to <a href="${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/admin">Admin Dashboard</a> to approve or delete.</p>
            `,
                };

                // We don't await this to keep the API response fast, just trigger it
                if (process.env.GMAIL_USER && process.env.GMAIL_PASS) {
                    transporter.sendMail(mailOptions).catch(err => console.error("Email notify failed", err));
                }
            } catch (err) {
                console.warn("Notification system error", err);
            }

        } else if (action === "approve") {
            testimonials = testimonials.map((t: any) => t.id === id ? { ...t, approved: true } : t);
        } else if (action === "reject") {
            testimonials = testimonials.map((t: any) => t.id === id ? { ...t, approved: false } : t);
        } else if (action === "delete") {
            testimonials = testimonials.filter((t: any) => t.id !== id);
        }

        fs.writeFileSync(dataFilePath, JSON.stringify(testimonials, null, 2));

        return NextResponse.json({ success: true, testimonials });
    } catch (error) {
        return NextResponse.json({ error: "Failed to update data" }, { status: 500 });
    }
}
