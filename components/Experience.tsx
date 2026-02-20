"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
    return (
        <section id="resume" className="py-24 bg-bg-secondary/30">
            {/* 8% margin logic */}
            <div className="w-full max-w-[84%] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">
                        Resume & Experience
                    </h2>
                    <p className="text-text-secondary text-lg">
                        A timeline of my professional journey.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Experience Column */}
                    <div className="space-y-12">
                        <h3 className="text-2xl font-bold text-accent-cyan mb-8 flex items-center gap-3">
                            <Briefcase className="w-6 h-6" /> Professional Impact
                        </h3>

                        <div className="relative pl-8 border-l border-white/10 space-y-12">
                            <div className="relative">
                                <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-accent-cyan shadow-[0_0_10px_#00f2ff]" />
                                <h4 className="text-xl font-bold text-white">Enterprise Voice AI & Agentic Systems Architect</h4>
                                <p className="text-sm text-accent-cyan mt-1 mb-4">Jan 2025 - Present | High-Growth SaaS Platform</p>
                                <ul className="space-y-3 text-text-secondary text-sm list-disc pl-4">
                                    <li><strong>Scale & Impact:</strong> Architected autonomous Voice AI infrastructure handling <strong>5,000+ weekly calls</strong>, reducing human support workload by <strong>40%</strong>.</li>
                                    <li><strong>Platform Engineering:</strong> Built a multi-tenant SaaS Voice Agent platform (n8n, Supabase, Retell AI), cutting onboarding from 3 days to 2 hours.</li>
                                    <li><strong>Performance:</strong> Managed 50+ production chatbots with 99.9% uptime and &lt;1.5s latency.</li>
                                    <li><strong>Revenue:</strong> Deployed AI sales agents qualifying $50k+ in pipeline opportunities.</li>
                                </ul>
                            </div>

                            <div className="relative">
                                <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-bg-secondary border-2 border-accent-cyan" />
                                <h4 className="text-xl font-bold text-white">Generative AI R&D Engineer (Internship)</h4>
                                <p className="text-sm text-accent-cyan mt-1 mb-4">Nov 2024 - Dec 2024 | AI Innovation Lab</p>
                                <ul className="space-y-3 text-text-secondary text-sm list-disc pl-4">
                                    <li><strong>R&D Success:</strong> Prototyped RAG pipeline improving accuracy by <strong>35%</strong>.</li>
                                    <li><strong>Data Pipeline:</strong> Processed 10,000+ documents for domain-specific fine-tuning.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Education & Skills Column */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold text-accent-cyan mb-8 flex items-center gap-3">
                                <GraduationCap className="w-6 h-6" /> Education
                            </h3>
                            <div className="bg-bg-secondary p-6 rounded-xl border border-white/5">
                                <h4 className="text-lg font-bold text-white">BS Data Science</h4>
                                <p className="text-accent-cyan text-sm">2020 - 2024</p>
                                <p className="text-text-secondary text-sm mt-2">GIFT University, Lahore, Pakistan</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-accent-cyan mb-8">Technical Arsenal</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { cat: "AI/ML", tools: "Python, PyTorch, LangChain, CrewAI" },
                                    { cat: "Voice", tools: "Retell AI, ElevenLabs, Vapi, Deepgram" },
                                    { cat: "Cloud", tools: "AWS, Digital Ocean, GCP" },
                                    { cat: "Auto", tools: "n8n, Make.com, Custom APIs" },
                                    { cat: "Dev", tools: "Next.js, TypeScript, Tailwind, Python" }
                                ].map((stack, i) => (
                                    <div key={i} className="bg-bg-secondary/50 p-4 rounded-lg border border-white/5">
                                        <span className="text-accent-cyan font-semibold text-sm block mb-1">{stack.cat}</span>
                                        <span className="text-text-secondary text-xs">{stack.tools}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
