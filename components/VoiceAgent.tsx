"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function VoiceAgent() {
    const [isRecording, setIsRecording] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const mediaRecorder = useRef<MediaRecorder | null>(null);
    const chunks = useRef<Blob[]>([]);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder.current = new MediaRecorder(stream);

            mediaRecorder.current.ondataavailable = (e) => {
                if (e.data.size > 0) chunks.current.push(e.data);
            };

            mediaRecorder.current.onstop = async () => {
                const audioBlob = new Blob(chunks.current, { type: 'audio/webm' });
                chunks.current = [];
                await sendAudio(audioBlob);
            };

            mediaRecorder.current.start();
            setIsRecording(true);
        } catch (err) {
            console.error("Mic access denied", err);
            alert("Please enable microphone access.");
        }
    };

    const stopRecording = () => {
        if (mediaRecorder.current && isRecording) {
            mediaRecorder.current.stop();
            setIsRecording(false);
        }
    };

    const sendAudio = async (audioBlob: Blob) => {
        const formData = new FormData();
        formData.append("audio", audioBlob);

        try {
            setIsPlaying(true);
            const res = await fetch("/api/voice", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) throw new Error("Voice API failed");

            const audioBlobRes = await res.blob();
            const audioUrl = URL.createObjectURL(audioBlobRes);
            const audio = new Audio(audioUrl);

            audio.onended = () => setIsPlaying(false);
            audio.play();
        } catch (err) {
            console.error(err);
            setIsPlaying(false);
            alert("Failed to process voice.");
        }
    };

    const handleClick = () => {
        if (isPlaying) return;
        if (isRecording) {
            stopRecording();
        } else {
            startRecording();
        }
    };

    return (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
            <motion.button
                onClick={handleClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex items-center gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/20 transition-all overflow-hidden"
            >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Orb Icon */}
                <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-[#00DAFF] to-[#0047FF] shadow-[0_0_15px_#00DAFF] flex items-center justify-center overflow-hidden">
                    {isPlaying ? (
                        <div className="w-full h-full flex items-center justify-center gap-[2px]">
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ height: ["20%", "80%", "20%"] }}
                                    transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.2 }}
                                    className="w-1 bg-white rounded-full"
                                />
                            ))}
                        </div>
                    ) : isRecording ? (
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-3 h-3 bg-white rounded-full"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-tr from-blue-400 to-indigo-600 opacity-80" />
                    )}
                </div>

                {/* Text */}
                <span className="text-white font-medium text-sm tracking-wide pr-1">
                    {isRecording ? "Listening..." : isPlaying ? "Agent Speaking..." : "Talk to an agent"}
                </span>
            </motion.button>
        </div>
    );
}
