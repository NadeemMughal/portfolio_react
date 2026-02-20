import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Nadeem - AI/ML Engineer & Agentic Systems Architect",
  description: "Portfolio of Muhammad Nadeem - AI/ML Engineer specializing in Generative AI, Voice Agents, and Agentic Systems.",
  keywords: ["AI", "Machine Learning", "Generative AI", "Voice Agents", "Chatbots", "Nadeem"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-bg-primary text-text-primary selection:bg-accent-cyan selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
