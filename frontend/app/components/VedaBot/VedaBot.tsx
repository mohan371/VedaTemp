"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, Briefcase, GraduationCap, ChevronRight, Loader2 } from "lucide-react";
import { INITIAL_MESSAGE, analyzeInput, handleAction, BotMessage } from "./botLogic";
import Link from "next/link";
import { useRouter } from "next/navigation";
// Removed Apollo imports
// const SUBMIT_CONTACT = ... (removed)

const VedaBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<BotMessage[]>([INITIAL_MESSAGE]);
    const [inputText, setInputText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    // Form State
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    const [formLoading, setFormLoading] = useState(false);

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormLoading(true);
        try {
            // Simulate network request
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Success Message from Bot
            setMessages((prev) => [...prev, {
                id: Date.now().toString(),
                text: "Thanks! We've received your details and will contact you shortly.",
                sender: "bot",
                type: "text"
            }]);
            // Reset Form
            setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });

        } catch (err) {
            console.error(err);
            setMessages((prev) => [...prev, {
                id: Date.now().toString(),
                text: "Oops, something went wrong submitting your details. Please try again.",
                sender: "bot",
                type: "text"
            }]);
        } finally {
            setFormLoading(false);
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSendMessage = () => {
        if (!inputText.trim()) return;

        const userMsg: BotMessage = {
            id: Date.now().toString(),
            text: inputText,
            sender: "user",
        };

        setMessages((prev) => [...prev, userMsg]);
        setInputText("");
        setIsTyping(true);

        // Analyze input and reply
        setTimeout(() => {
            const botResponse = analyzeInput(userMsg.text);
            setMessages((prev) => [...prev, botResponse]);
            setIsTyping(false);
        }, 800);
    };

    const handleOptionClick = (option: { label: string; action: string; value?: string }) => {
        const userMsg: BotMessage = {
            id: Date.now().toString(),
            text: option.label,
            sender: "user",
        };
        setMessages((prev) => [...prev, userMsg]);
        setIsTyping(true);

        if (option.action === "NAVIGATE" && option.value) {
            router.push(option.value);
            setIsTyping(false);
            return;
        }

        setTimeout(() => {
            const botResponse = handleAction(option.action, option.value);
            setMessages((prev) => [...prev, botResponse]);
            setIsTyping(false);
        }, 600);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] font-sans">
            {/* Chat Window */}
            <div
                className={`fixed sm:absolute bottom-24 sm:bottom-20 right-4 sm:right-0 left-4 sm:left-auto w-auto sm:w-[380px] h-[600px] max-h-[70vh] sm:max-h-none bg-gray-900 border border-[var(--gold)]/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
                    }`}
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-4 border-b border-white/10 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center border border-[var(--gold)]">
                            <Bot className="w-6 h-6 text-[var(--gold)]" />
                        </div>
                        <div>
                            <h3 className="text-white font-bold">VedaBot</h3>
                            <p className="text-xs text-green-400 flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Online
                            </p>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white p-1">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/40 backdrop-blur-sm scrollbar-thin scrollbar-thumb-gray-700">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`max-w-[85%] p-3 rounded-2xl ${msg.sender === "user"
                                    ? "bg-[var(--gold)] text-gray-900 rounded-tr-none"
                                    : "bg-gray-800 text-gray-200 border border-white/10 rounded-tl-none"
                                    }`}
                            >
                                <p className="text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>

                                {/* Options */}
                                {msg.type === "options" && msg.options && (
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {msg.options.map((opt, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => handleOptionClick(opt)}
                                                className="bg-gray-700/50 hover:bg-[var(--gold)]/20 hover:text-[var(--gold)] border border-[var(--gold)]/30 text-xs px-3 py-2 rounded-full transition-all"
                                            >
                                                {opt.label}
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {/* Job List Card Data */}
                                {msg.type === "job-list" && msg.data && (
                                    <div className="mt-3 space-y-2">
                                        {msg.data.slice(0, 3).map((job: any) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
                                            <div key={job.id} className="bg-gray-900/50 p-3 rounded border border-white/5 flex items-center gap-3">
                                                <div className="bg-blue-500/20 p-2 rounded">
                                                    <Briefcase className="w-4 h-4 text-blue-400" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-white text-xs font-bold truncate">{job.title}</h4>
                                                    <p className="text-gray-400 text-[10px]">{job.company} • {job.location}</p>
                                                </div>
                                                <Link href="/jobs/search" className="p-1 hover:bg-white/10 rounded">
                                                    <ChevronRight className="w-4 h-4 text-gray-400" />
                                                </Link>
                                            </div>
                                        ))}
                                        <Link href="/jobs/search" className="block text-center text-[var(--gold)] text-xs mt-2 hover:underline">
                                            View all jobs
                                        </Link>
                                    </div>
                                )}

                                {/* University List Card Data */}
                                {msg.type === "uni-list" && msg.data && (
                                    <div className="mt-3 space-y-2">
                                        {msg.data.slice(0, 3).map((uni: any) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
                                            <div key={uni.id} className="bg-gray-900/50 p-3 rounded border border-white/5 flex items-center gap-3">
                                                <div className="bg-purple-500/20 p-2 rounded">
                                                    <GraduationCap className="w-4 h-4 text-purple-400" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-white text-xs font-bold truncate">{uni.name}</h4>
                                                    <p className="text-gray-400 text-[10px]">{uni.country}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Lead Gen Form */}
                                {msg.type === "form" && (
                                    <form onSubmit={handleFormSubmit} className="mt-3 bg-gray-900/50 p-3 rounded border border-white/5 space-y-2">
                                        <input
                                            placeholder="Name"
                                            className="w-full bg-black/20 border border-white/10 rounded px-2 py-1 text-xs text-white"
                                            value={formData.firstName}
                                            onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                                            required
                                        />
                                        <input
                                            placeholder="Email"
                                            type="email"
                                            className="w-full bg-black/20 border border-white/10 rounded px-2 py-1 text-xs text-white"
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            required
                                        />
                                        <input
                                            placeholder="Phone"
                                            className="w-full bg-black/20 border border-white/10 rounded px-2 py-1 text-xs text-white"
                                            value={formData.phone}
                                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                            required
                                        />
                                        <textarea
                                            placeholder="How can we help?"
                                            className="w-full bg-black/20 border border-white/10 rounded px-2 py-1 text-xs text-white resize-none"
                                            rows={2}
                                            value={formData.message}
                                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                                        />
                                        <button
                                            type="submit"
                                            disabled={formLoading}
                                            className="w-full bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-gray-900 text-xs font-bold py-1.5 rounded flex justify-center items-center gap-1"
                                        >
                                            {formLoading ? <Loader2 className="w-3 h-3 animate-spin" /> : "Submit Request"}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-gray-800 text-gray-400 p-3 rounded-2xl rounded-tl-none border border-white/10 flex gap-1">
                                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-100"></span>
                                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-200"></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-3 bg-gray-900 border-t border-white/10 flex gap-2">
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                        placeholder="Type a message..."
                        className="flex-1 bg-gray-800 text-white rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--gold)] border border-white/5 placeholder-gray-500"
                    />
                    <button
                        onClick={handleSendMessage}
                        disabled={!inputText.trim()}
                        className="w-10 h-10 rounded-full bg-[var(--gold)] hover:bg-[var(--gold-hover)] flex items-center justify-center text-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Send className="w-4 h-4 ml-0.5" />
                    </button>
                </div>
            </div>

            {/* Float Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-[var(--gold)] hover:bg-[var(--gold-hover)] rounded-full shadow-[0_0_20px_var(--gold-glow)] flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 group relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full"></div>
                {isOpen ? (
                    <X className="w-8 h-8 text-gray-900 relative z-10" />
                ) : (
                    <MessageSquare className="w-8 h-8 text-gray-900 relative z-10" />
                )}

                {/* Notification Badge */}
                {!isOpen && (
                    <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-gray-900 animate-ping"></span>
                )}
            </button>
        </div>
    );
};

export default VedaBot;
