"use client";

import { useState, useEffect } from "react";
import { Trash2, CheckCircle, XCircle } from "lucide-react";

export default function AdminPage() {
    const [testimonials, setTestimonials] = useState<any[]>([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");

    // Super basic auth for demonstration - in prod use NextAuth or similar
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "nadeem123") { // hardcoded for demo
            setIsAuthenticated(true);
            fetchData();
        } else {
            alert("Incorrect password");
        }
    };

    const fetchData = () => {
        fetch("/api/testimonials")
            .then(res => res.json())
            .then(setTestimonials);
    };

    const handleAction = async (id: string, action: "approve" | "reject" | "delete") => {
        await fetch("/api/testimonials", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, action })
        });
        fetchData();
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-bg-primary flex items-center justify-center">
                <form onSubmit={handleLogin} className="bg-bg-secondary p-8 rounded-2xl border border-white/10 max-w-sm w-full text-center">
                    <h1 className="text-2xl font-bold text-white mb-6">Admin Login</h1>
                    <input
                        type="password"
                        className="w-full bg-bg-primary border border-white/10 rounded-lg p-3 text-white mb-4 focus:border-accent-cyan outline-none"
                        placeholder="Enter Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className="w-full bg-accent-cyan text-black font-bold py-3 rounded-lg hover:bg-cyan-400">Access Dashboard</button>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-bg-primary p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-white mb-8">Testimonials Manager</h1>

                <div className="grid gap-6">
                    {testimonials.map((t) => (
                        <div key={t.id} className="bg-bg-secondary p-6 rounded-xl border border-white/10 flex justify-between items-center gap-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="font-bold text-white text-lg">{t.name}</h3>
                                    <span className={`text-xs px-2 py-0.5 rounded ${t.approved ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"}`}>
                                        {t.approved ? "Approved" : "Pending"}
                                    </span>
                                </div>
                                <p className="text-accent-cyan text-sm mb-2">{t.role}</p>
                                <p className="text-text-secondary italic">"{t.text}"</p>
                            </div>

                            <div className="flex gap-2">
                                {t.approved ? (
                                    <button
                                        onClick={() => handleAction(t.id, "reject")}
                                        className="p-2 bg-yellow-500/10 text-yellow-400 rounded-lg hover:bg-yellow-500 hover:text-black transition-all"
                                        title="Hide from UI"
                                    >
                                        <XCircle className="w-5 h-5" />
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => handleAction(t.id, "approve")}
                                        className="p-2 bg-green-500/10 text-green-400 rounded-lg hover:bg-green-500 hover:text-white transition-all"
                                        title="Approve & Show"
                                    >
                                        <CheckCircle className="w-5 h-5" />
                                    </button>
                                )}
                                <button
                                    onClick={() => handleAction(t.id, "delete")}
                                    className="p-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition-all"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
