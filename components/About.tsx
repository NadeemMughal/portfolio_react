"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-bg-primary">
            {/* 8% margin logic */}
            <div className="w-full max-w-[84%] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">
                        About Me
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Turning complexity into autonomous efficiency.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 bg-bg-secondary/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm h-full flex flex-col justify-center"
                    >
                        <h3 className="text-2xl font-bold text-accent-cyan mb-4">
                            AI/ML Engineer & Agentic Systems Architect.
                        </h3>
                        <p className="text-text-secondary leading-relaxed mb-6 italic">
                            I architect and deploy production-grade Agentic AI solutions — autonomous systems that think, act, and
                            adapt in real-time.
                        </p>
                        <p className="text-text-secondary leading-relaxed mb-8">
                            My expertise spans the full Generative AI stack: from LLM fine-tuning to multi-agent orchestration and
                            contextual reasoning. I've built 15+ Voice Agents and managed 50+ Chatbots in production, optimizing for latency, cost, and
                            human-like interaction.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-accent-cyan shrink-0 mt-1" />
                                        <span className="text-text-secondary"><strong className="text-white">Voice AI:</strong> Retell AI, ElevenLabs, Vapi, Deepgram, OpenAI</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-accent-cyan shrink-0 mt-1" />
                                        <span className="text-text-secondary"><strong className="text-white">Agents:</strong> LangChain, LangGraph, CrewAI, AutoGen</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-accent-cyan shrink-0 mt-1" />
                                        <span className="text-text-secondary"><strong className="text-white">Cloud:</strong> AWS, Digital Ocean, GCP</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-accent-cyan shrink-0 mt-1" />
                                        <span className="text-text-secondary"><strong className="text-white">Automation:</strong> n8n, Make.com, Custom APIs</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Static Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 relative group w-full h-full flex items-center justify-center"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-accent-cyan/10 group-hover:shadow-accent-cyan/20 transition-all duration-500 w-full max-w-md">
                            <Image
                                src="/img/My_Image.png"
                                alt="Muhammad Nadeem"
                                width={500}
                                height={600}
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
