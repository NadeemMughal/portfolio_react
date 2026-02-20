"use client";

import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function AvatarVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-accent-cyan/10 group">
            <video
                ref={videoRef}
                loop
                muted={isMuted}
                playsInline
                className="w-full h-auto object-cover"
                poster="/img/My_Image.png"
            // Add your video source here
            // src="/videos/avatar_intro.mp4" 
            />

            {/* Overlay Controls */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                {!isPlaying && (
                    <button
                        onClick={togglePlay}
                        className="w-16 h-16 rounded-full bg-accent-cyan/90 flex items-center justify-center text-black hover:scale-110 transition-transform cursor-pointer"
                    >
                        <Play className="w-8 h-8 fill-black" />
                    </button>
                )}
            </div>

            <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                    onClick={toggleMute}
                    className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
            </div>

            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-white text-xs border border-white/10">
                AI Generated Avatar
            </div>
        </div>
    );
}
