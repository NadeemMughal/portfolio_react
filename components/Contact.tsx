"use client";

import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import Script from "next/script";
import { useState } from "react";
import Link from "next/link"; // Ensure Link is imported

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        challenge: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", phone: "", challenge: "" });
            } else {
                setSubmitStatus("error");
            }
        } catch {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 relative bg-bg-primary">
            {/* 8% margin logic */}
            <div className="w-full max-w-[84%] mx-auto">
                <div className="text-center mb-16">
                    <span className="text-accent-cyan font-bold tracking-wider text-sm uppercase">Get In Touch</span>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mt-2 mb-4 text-white">
                        Contact Me
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Ready to build the future? Let's talk.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                    {/* Left Column: Calendar & Info */}
                    <div className="space-y-8 flex flex-col h-full">
                        <div className="bg-bg-secondary p-8 rounded-2xl border border-white/5 text-center flex-1 flex flex-col justify-center items-center shadow-lg hover:border-accent-cyan/20 transition-all">
                            <h3 className="text-2xl font-bold text-white mb-2 font-heading">Book a Consultation</h3>
                            <p className="text-text-secondary mb-8 max-w-sm mx-auto">Schedule a direct meeting to discuss your AI needs.</p>

                            {/* Google Calendar Scheduling Button */}
                            <div className="relative z-10">
                                <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet" />
                                <Script
                                    src="https://calendar.google.com/calendar/scheduling-button-script.js"
                                    async
                                    onLoad={() => {
                                        // @ts-ignore
                                        if (window.calendar) {
                                            // @ts-ignore
                                            window.calendar.schedulingButton.load({
                                                url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3xis7L2KexQ46X981l_3eZ-LkAq-bSvWLcjFTVGPOlao_8KZYEsijJ4yoDNRGnTS92rm0dVNs9?gv=true',
                                                color: '#039BE5',
                                                label: 'Book an appointment',
                                                target: document.getElementById('calendar-button-target'),
                                            });
                                        }
                                    }}
                                />
                                <div id="calendar-button-target" />
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {/* Contact Cards... keeping existing ones or refining? User asked for "Original Discord Icon" */}

                            <div className="bg-bg-secondary p-6 rounded-2xl border border-white/5 text-center hover:border-accent-cyan/30 transition-all group">
                                <Mail className="w-8 h-8 text-accent-cyan mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                <h4 className="font-bold text-white mb-1">Email</h4>
                                <p className="text-text-secondary text-sm">sales.nadeem10@gmail.com</p>
                            </div>

                            {/* Discord Card */}
                            <div className="bg-bg-secondary p-6 rounded-2xl border border-white/5 text-center hover:border-[#5865F2]/50 transition-all group">
                                {/* Custom Discord SVG */}
                                <div className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform">
                                    <svg viewBox="0 0 127.14 96.36" className="fill-[#5865F2]">
                                        <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22c.63-23.28-3.67-46.94-18.9-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5.08-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-white mb-1">Discord</h4>
                                <Link href="https://discord.gg/yPpKbPDW" target="_blank" className="text-text-secondary text-sm hover:text-[#5865F2]">
                                    Join Community
                                </Link>
                            </div>

                            <div className="bg-bg-secondary p-6 rounded-2xl border border-white/5 text-center hover:border-accent-cyan/30 transition-all sm:col-span-2">
                                <Phone className="w-8 h-8 text-accent-cyan mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                <h4 className="font-bold text-white mb-1">Phone / WhatsApp</h4>
                                <p className="text-text-secondary text-sm">+92 333 8122531</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-bg-secondary p-8 rounded-2xl border border-white/5 h-full flex flex-col shadow-lg">
                        <h3 className="text-2xl font-bold text-white mb-6 font-heading border-b border-white/10 pb-4">
                            Send a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-2">Phone (Optional)</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>

                            <div className="flex-1">
                                <label htmlFor="challenge" className="block text-sm font-medium text-text-secondary mb-2">What challenge are you facing?</label>
                                <textarea
                                    id="challenge"
                                    name="challenge"
                                    required
                                    rows={4}
                                    value={formData.challenge}
                                    onChange={handleChange}
                                    className="w-full h-full min-h-[120px] bg-bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors resize-none"
                                    placeholder="Tell me about your project or problem..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-accent-cyan text-black font-bold py-4 rounded-lg hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(0,242,255,0.2)] hover:shadow-[0_0_25px_rgba(0,242,255,0.4)]"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" /> Send Message
                                    </>
                                )}
                            </button>

                            {submitStatus === "success" && (
                                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm text-center">
                                    Message sent successfully! I'll get back to you soon.
                                </div>
                            )}

                            {submitStatus === "error" && (
                                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center">
                                    Failed to send message. Please try again or email directly.
                                </div>
                            )}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
