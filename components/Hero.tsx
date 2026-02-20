"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import * as THREE from "three";
// @ts-expect-error - vanta types not available
import NET from "vanta/dist/vanta.net.min";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    const vantaRef = useRef<HTMLDivElement>(null);
    const [vantaEffect, setVantaEffect] = useState<any>(null);

    useEffect(() => {
        if (!vantaEffect && vantaRef.current) {
            setVantaEffect(
                NET({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0x00f2ff,
                    backgroundColor: 0x050505,
                    points: 10.0,
                    maxDistance: 22.0,
                    spacing: 18.0,
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
            <div ref={vantaRef} className="absolute inset-0 z-0 opacity-40" />

            {/* 
         Margins: 
         - Mobile: w-full px-4 (Maximize video size)
         - Tablet (md): max-w-[80%] (10% left/right)
         - Desktop (lg): max-w-[84%] (8% left/right)
      */}
            <div className="relative z-10 w-full px-4 md:px-0 md:max-w-[80%] lg:max-w-[84%] mx-auto h-full flex items-center justify-center">
                {/*
          Layout:
          - Mobile/Tablet: Flex Column, Video order-1 (Top), Text order-2 (Bottom)
          - Desktop (lg): Grid, Text Left (order-1), Video Right (order-2)
        */}
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center">

                    {/* Right Content - Video Area (Mobile: Order 1) */}
                    <div className="order-1 lg:order-2 w-full flex justify-center lg:justify-end relative mb-8 lg:mb-0">
                        {/* Decorative glowing element */}
                        <div className="absolute inset-0 bg-accent-cyan/10 blur-[100px] rounded-full pointer-events-none" />

                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-accent-cyan/10 bg-black/40 backdrop-blur-md group hover:border-accent-cyan/30 transition-colors duration-500">
                            {/* 
                  Video Element:
                  Enabled autoplay as requested. 
                  Note: 'muted' is required for autoplay in most browsers.
               */}
                            <video
                                src="/videos/hero_intro.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay while loading or if video fails */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                                {/* Optional: Add play button overlay here if needed */}
                            </div>
                        </div>
                    </div>

                    {/* Left Content Area (Mobile: Order 2) */}
                    <div className="order-2 lg:order-1 flex flex-col justify-center text-center lg:text-left w-full">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-gray-400 leading-[1.1] tracking-tight drop-shadow-2xl whitespace-nowrap lg:whitespace-normal">
                            Building the Future of<br className="hidden lg:block" /> Agentic AI Systems
                        </h2>
                        <div className="space-y-4 mb-8">
                            <p className="text-2xl md:text-3xl text-accent-cyan font-bold tracking-wide">
                                Full Stack AI Engineer
                            </p>
                            <p className="text-lg md:text-xl text-text-secondary font-light tracking-wider">
                                Voice Automation Expert · Generative AI Architect
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mt-4">
                            <Link
                                href="#featured-work"
                                className="group px-8 py-4 rounded-full bg-accent-cyan text-black font-bold hover:bg-cyan-300 transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,242,255,0.3)] flex items-center gap-2"
                            >
                                View Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="#contact"
                                className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all hover:scale-105 backdrop-blur-sm"
                            >
                                Book Consultation
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
