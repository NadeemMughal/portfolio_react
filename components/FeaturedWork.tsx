"use client";

import { Headset, Bot, TrendingUp, Sliders, Sparkles, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const works = [
    {
        icon: <Headset className="w-8 h-8 text-accent-cyan" />,
        title: "SaaS Voice Agent Platform",
        desc: "End-to-end voice automation platform using Retell AI, n8n, & Supabase. 10+ agents live, reducing manual workload by 70%.",
        repo: "https://github.com/NadeemMughal/Calling-Agent-Multi-Client-SAAS-for-Agency",
        demo: "#", // will trigger modal
        colSpan: "md:col-span-2",
        rowSpan: "md:row-span-2",
    },
    {
        icon: <Bot className="w-8 h-8 text-accent-cyan" />,
        title: "UK Chatbot Network",
        desc: "Managed 50+ production chatbots (LangChain/LangGraph). Reduced support tickets & improved CSAT.",
        repo: "https://github.com/NadeemMughal/Chatbot-Agency-Clients-Lead-Qualification",
        demo: "#",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1",
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-accent-cyan" />,
        title: "GenAI Data Insights",
        desc: "Automated reporting & narratives using LLMs. Transforming raw data into actionable insights.",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1",
    },
    {
        icon: <Sliders className="w-8 h-8 text-accent-cyan" />,
        title: "Domain LLM Tuning",
        desc: "LoRA/QLoRA fine-tuning for specialized business contexts. Optimizing latency, cost, and quality.",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1",
    },
    {
        icon: <Sparkles className="w-8 h-8 text-accent-cyan" />,
        title: "More Coming Soon",
        desc: "Stay tuned for exciting new innovations in Agentic AI.",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1",
    },
];

export default function FeaturedWork() {
    const handleDemoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        alert("📧 For live demos, please contact: muhammadnadeem51200@gmail.com");
    };

    return (
        <section id="featured-work" className="py-24 bg-bg-secondary/30">
            {/* 8% margin logic */}
            <div className="w-full max-w-[84%] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">
                        Featured Work
                    </h2>
                    <p className="text-text-secondary text-lg">
                        High-impact solutions delivering real business value.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">
                    {works.map((work, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`p-6 rounded-2xl bg-bg-secondary border border-white/5 hover:border-accent-cyan/30 transition-all duration-300 group ${work.colSpan} ${work.rowSpan} flex flex-col justify-between`}
                        >
                            <div>
                                <div className="mb-4 bg-white/5 w-14 h-14 rounded-full flex items-center justify-center group-hover:bg-accent-cyan/10 transition-colors">
                                    {work.icon}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">{work.title}</h4>
                                <p className="text-text-secondary text-sm leading-relaxed">{work.desc}</p>
                            </div>

                            {(work.repo || work.demo) && (
                                <div className="flex gap-3 mt-6">
                                    {work.repo && (
                                        <Link
                                            href={work.repo}
                                            target="_blank"
                                            className="text-xs flex items-center gap-1 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
                                        >
                                            <Github className="w-3.5 h-3.5" /> Repo
                                        </Link>
                                    )}
                                    {work.demo && (
                                        <Link
                                            href={work.demo}
                                            onClick={work.demo === '#' ? handleDemoClick : undefined}
                                            className="text-xs flex items-center gap-1 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
                                        >
                                            <ExternalLink className="w-3.5 h-3.5" /> Demo
                                        </Link>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
