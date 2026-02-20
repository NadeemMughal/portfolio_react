"use client";

import { Quote, Plus, Loader2, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
    id: string;
    name: string;
    role: string;
    text: string;
    approved: boolean;
}

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", role: "", text: "" });
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    useEffect(() => {
        fetch("/api/testimonials")
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setTestimonials(data.filter((t: Testimonial) => t.approved));
                }
            });
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        try {
            await fetch("/api/testimonials", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, action: "create" })
            });
            setStatus("success");
            setTimeout(() => {
                setIsModalOpen(false);
                setStatus("idle");
                setFormData({ name: "", role: "", text: "" });
            }, 2000);
        } catch {
            alert("Failed to submit.");
            setStatus("idle");
        }
    };

    return (
        <section id="testimonials" className="py-24 bg-bg-primary relative border-t border-white/5">
            {/* 8% margin logic: max-w-[84%] */}
            <div className="w-full max-w-[90%] lg:max-w-[84%] mx-auto overflow-hidden">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 px-4">
                    <div className="text-center md:text-left w-full">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">
                            Client Success
                        </h2>
                        <p className="text-text-secondary text-lg">
                            What others say about working with me.
                        </p>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-2 px-6 py-2 rounded-full border border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan hover:text-black transition-all text-sm whitespace-nowrap"
                    >
                        <Plus className="w-4 h-4" /> Add Testimonial
                    </button>
                </div>

                {/* Scrolling Container */}
                <div className="relative w-full overflow-hidden mask-linear-fade">
                    <div className="flex w-max gap-8 animate-scroll hover:pause">
                        {[...testimonials, ...testimonials].map((item, idx) => (
                            <div
                                key={`${item.id}-${idx}`}
                                className="w-[350px] md:w-[450px] flex-shrink-0 bg-bg-secondary p-8 rounded-2xl border border-white/5 relative hover:border-accent-cyan/30 transition-all group hover:-translate-y-2 duration-300"
                            >
                                <Quote className="w-10 h-10 text-accent-cyan/20 absolute top-6 right-6 group-hover:text-accent-cyan/40 transition-colors" />

                                <p className="text-text-secondary mb-6 leading-relaxed relative z-10 italic line-clamp-4">
                                    "{item.text}"
                                </p>

                                <div>
                                    <h4 className="text-white font-bold text-lg">{item.name}</h4>
                                    <p className="text-accent-cyan text-sm">{item.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Gradient Masks for smooth fade out at edges */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />
                </div>
            </div>

            {/* Submission Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-bg-secondary w-full max-w-md p-8 rounded-2xl border border-white/10"
                        >
                            {/* Form Content (same as before) */}
                            {status === "success" ? (
                                <div className="text-center py-12">
                                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-white">Submitted!</h3>
                                    <p className="text-text-secondary mt-2">Thank you for your feedback. It will be visible after approval.</p>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-2xl font-bold text-white mb-6">Write a Testimonial</h3>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <input
                                            className="w-full bg-bg-primary border border-white/10 rounded-lg p-3 text-white focus:border-accent-cyan outline-none"
                                            placeholder="Your Name"
                                            required
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        />
                                        <input
                                            className="w-full bg-bg-primary border border-white/10 rounded-lg p-3 text-white focus:border-accent-cyan outline-none"
                                            placeholder="Your Role / Company"
                                            required
                                            value={formData.role}
                                            onChange={e => setFormData({ ...formData, role: e.target.value })}
                                        />
                                        <textarea
                                            className="w-full bg-bg-primary border border-white/10 rounded-lg p-3 text-white focus:border-accent-cyan outline-none h-32 resize-none"
                                            placeholder="Your Feedback..."
                                            required
                                            value={formData.text}
                                            onChange={e => setFormData({ ...formData, text: e.target.value })}
                                        />
                                        <div className="flex gap-4 pt-4">
                                            <button
                                                type="button"
                                                onClick={() => setIsModalOpen(false)}
                                                className="flex-1 px-4 py-2 rounded-lg border border-white/10 text-white hover:bg-white/5"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={status === "submitting"}
                                                className="flex-1 px-4 py-2 rounded-lg bg-accent-cyan text-black font-bold hover:bg-cyan-400 disabled:opacity-50"
                                            >
                                                {status === "submitting" ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : "Submit"}
                                            </button>
                                        </div>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
