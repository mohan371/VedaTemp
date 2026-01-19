"use client";

import React, { useState } from "react";
import { Search, ChevronDown, ChevronUp, MessageCircle, Mail, Phone } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

const FAQS = [
    {
        category: "General",
        items: [
            { q: "What services does Veda Scholars provide?", a: "We provide end-to-end support for international education, including university applications, visa processing, and post-study job placement assistance." },
            { q: "Is the initial consultation free?", a: "Yes, our first counselling session is completely complimentary." }
        ]
    },
    {
        category: "Visa & Immigration",
        items: [
            { q: "Do you guarantee a visa?", a: "While no one can guarantee a visa decision (as it's up to the embassy), our success rate is over 98% due to our rigorous documentation checks." },
            { q: "Which countries do you cover?", a: "We currently focus on UK, USA, Canada, Australia, Germany, UAE, and Singapore." }
        ]
    },
    {
        category: "Placements",
        items: [
            { q: "How does the job placement assistance work?", a: "We partner with companies willing to sponsor visas. Once you graduate, we connect you with these employers and help you prepare for interviews." }
        ]
    }
];

export default function SupportPage() {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggle = (idx: string) => setOpenIndex(openIndex === idx ? null : idx);

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <section className="bg-[var(--blue-darkest)] text-white py-24 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">How can we help you?</h1>
                <div className="max-w-2xl mx-auto relative">
                    <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search for answers..."
                        className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-[var(--gold)]/30"
                    />
                </div>
            </section>

            <section className="py-16 px-4 max-w-4xl mx-auto">
                {FAQS.map((section, sIdx) => (
                    <div key={sIdx} className="mb-12">
                        <h2 className="text-2xl font-bold text-[var(--blue-darkest)] mb-6 border-b border-gray-200 pb-2">{section.category}</h2>
                        <div className="space-y-4">
                            {section.items.map((item, i) => {
                                const key = `${sIdx}-${i}`;
                                return (
                                    <div key={key} className="bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all">
                                        <button onClick={() => toggle(key)} className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none">
                                            <span className="font-semibold text-[var(--blue-darkest)]">{item.q}</span>
                                            {openIndex === key ? <ChevronUp className="w-5 h-5 text-[var(--gold)]" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                                        </button>
                                        {openIndex === key && (
                                            <div className="px-6 pb-6 text-gray-600 animate-fade-in">
                                                {item.a}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </section>

            <section className="bg-white py-16 px-4 text-center border-t border-gray-100">
                <h2 className="text-2xl font-bold text-[var(--blue-darkest)] mb-8">Still have questions?</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="p-6 rounded-xl bg-gray-50">
                        <Mail className="w-8 h-8 text-[var(--gold)] mx-auto mb-4" />
                        <h3 className="font-semibold mb-2">Email Us</h3>
                        <a href="mailto:support@vedascholars.com" className="text-[var(--blue-medium)] hover:underline">support@vedascholars.com</a>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50">
                        <Phone className="w-8 h-8 text-[var(--gold)] mx-auto mb-4" />
                        <h3 className="font-semibold mb-2">Call Us</h3>
                        <p className="text-[var(--blue-medium)]">+91 7708722334</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50">
                        <MessageCircle className="w-8 h-8 text-[var(--gold)] mx-auto mb-4" />
                        <h3 className="font-semibold mb-2">Live Chat</h3>
                        <Button variant="outline" href="/get-in-touch" className="text-xs px-4 py-2 mt-2">Start Chat</Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
