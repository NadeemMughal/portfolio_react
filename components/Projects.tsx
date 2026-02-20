"use client";

import Image from "next/image";
import Link from "next/link";
import { Code2, Database, BarChart3, Twitter, Activity, Network } from "lucide-react";

const projects = [
    {
        icon: <Code2 className="w-10 h-10 text-accent-cyan" />,
        title: "ChatBot-LLama3.2",
        desc: "Local Chatbot using Llama 3.2 running on personal hardware.",
        video: "/projects/llama3-demo.mp4",
        docs: "/projects/llama3-docs.pdf"
    },
    {
        icon: <Database className="w-10 h-10 text-accent-cyan" />,
        title: "RAG ChatBot",
        desc: "Retrieval Augmented Generation with Llama 3.2 & FAISS.",
        video: "/projects/rag-tracking-demo.mp4",
        docs: "/projects/rag-docs.pdf"
    },
    {
        icon: <BarChart3 className="w-10 h-10 text-accent-cyan" />,
        title: "Data Viz Tool",
        desc: "Automated Analysis Web App using Streamlit.",
        live: "https://nadeemtool-viztool.streamlit.app/",
        docs: "/projects/dv-tool-docs.pdf"
    },
    {
        icon: <Twitter className="w-10 h-10 text-accent-cyan" />,
        title: "Sentiment Analysis",
        desc: "Real-time tweet classification using Pre-Trained Models.",
        live: "https://nadeemsentimentanalysis.streamlit.app/",
        docs: "/projects/twitter-sentiment-docs.pdf"
    },
    {
        icon: <Activity className="w-10 h-10 text-accent-cyan" />,
        title: "Covid Classification",
        desc: "Automated Covid-19 infection detection system.",
        video: "/projects/covid-classification.mp4",
        docs: "/projects/covid-docs.docx"
    },
    {
        icon: <Network className="w-10 h-10 text-accent-cyan" />,
        title: "Live Tweet Analysis",
        desc: "Real-time scraping and sentiment detection.",
        live: "https://custom-dataset-sentiment-analysis.streamlit.app/",
        docs: "/projects/live-tweet-docs.pdf"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative">
            {/* 8% margin logic */}
            <div className="w-full max-w-[84%] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">
                        Technical Archive
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Explore my earlier work in Data Science, NLP, and Computer Vision.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group p-6 rounded-2xl bg-bg-secondary border border-white/5 hover:border-accent-cyan/30 transition-all duration-300 flex flex-col justify-between h-full"
                        >
                            <div>
                                <div className="mb-4 text-accent-cyan group-hover:scale-110 transition-transform duration-300">
                                    {project.icon}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                                    {project.title}
                                </h4>
                                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                                    {project.desc}
                                </p>
                            </div>

                            <div className="flex gap-3 mt-auto">
                                {project.live && (
                                    <Link href={project.live} target="_blank" className="text-xs px-3 py-1.5 rounded-md bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 hover:bg-accent-cyan hover:text-black transition-all">
                                        Live App
                                    </Link>
                                )}
                                {project.video && (
                                    <Link href={project.video} className="text-xs px-3 py-1.5 rounded-md bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 hover:bg-accent-cyan hover:text-black transition-all">
                                        Video
                                    </Link>
                                )}
                                <Link href={project.docs} className="text-xs px-3 py-1.5 rounded-md bg-white/5 text-text-secondary border border-white/10 hover:bg-white/10 hover:text-white transition-all">
                                    Docs
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
