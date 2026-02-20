
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
    try {
        const { message, history } = await req.json();

        if (!message) return NextResponse.json({ error: "Message required" }, { status: 400 });

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are an AI assistant for Muhammad Nadeem's portfolio. You represent Nadeem, an AI/ML Engineer. Be professional, concise, and helpful. Use his resume content to answer questions."
                },
                ...history.slice(-5), // Keep last 5 messages for context
                { role: "user", content: message }
            ],
        });

        return NextResponse.json({ reply: completion.choices[0].message.content });
    } catch (error) {
        console.error("Chat Error:", error);
        return NextResponse.json({ error: "Failed to generate response" }, { status: 500 });
    }
}
