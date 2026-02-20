"use client";

import Image from "next/image";

const techIcons = [
    { name: "Twilio", src: "/img/twilio_logo.png" },
    { name: "OpenAI", src: "/img/open_ai_logo.png" },
    { name: "n8n", src: "/img/n8n_logo.svg" },
    { name: "Make", src: "/img/make_logo.png" },
    { name: "Python", src: "/img/Python_logo.svg" },
    { name: "Zapier", src: "/img/zapier_logo.png" },
    { name: "Retell AI", src: "/img/retellai_logo.svg" },
    { name: "Synthflow", src: "/img/synthflow_logo.svg" },
    { name: "HubSpot", src: "/img/hubspot-removebg.png" },
    { name: "HighLevel", src: "/img/highlevel_logo.png" },
    { name: "Google", src: "/img/google_logo.png" },
    { name: "Claude AI", src: "/img/claude-ai.webp" },
];

export default function TechCarousel() {
    return (
        <section className="py-20 bg-bg-secondary w-full overflow-hidden">
            <div className="flex w-max animate-scroll">
                {[...techIcons, ...techIcons].map((icon, index) => (
                    <div
                        key={`${icon.name}-${index}`}
                        className="w-40 sm:w-60 h-24 flex items-center justify-center mx-4 sm:mx-8 transition-all opacity-80 hover:opacity-100 hover:scale-110 duration-300 bg-white rounded-lg p-2"
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={icon.src}
                                alt={icon.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
