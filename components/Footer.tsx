import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-bg-secondary py-12 border-t border-white/5">
            {/* 8% margin logic */}
            <div className="w-full max-w-[84%] mx-auto text-center">
                <h3 className="text-2xl font-bold text-white mb-2 font-heading">Muhammad Nadeem</h3>
                <p className="text-text-secondary mb-8">Innovating at the edge of Generative AI.</p>

                <div className="flex justify-center gap-6 mb-8">
                    <Link
                        href="https://www.linkedin.com/in/muhammad-nadeem-ai-ml-engineer/"
                        target="_blank"
                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:bg-accent-cyan hover:text-black transition-all"
                    >
                        <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link
                        href="https://github.com/NadeemMughal"
                        target="_blank"
                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:bg-accent-cyan hover:text-black transition-all"
                    >
                        <Github className="w-5 h-5" />
                    </Link>
                    <Link
                        href="https://discord.gg/yPpKbPDW"
                        target="_blank"
                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:bg-[#5865F2] hover:text-white transition-all"
                    >
                        <div className="w-5 h-5">
                            <svg viewBox="0 0 127.14 96.36" className="fill-current">
                                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22c.63-23.28-3.67-46.94-18.9-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5.08-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                            </svg>
                        </div>
                    </Link>
                </div>

                <div className="text-sm text-text-secondary">
                    &copy; Copyright <strong><span>Nadeem</span></strong>. All Rights Reserved
                </div>
            </div>
        </footer>
    );
}
