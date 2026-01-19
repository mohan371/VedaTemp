"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Quote, PlayCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const STORIES = [
    { name: "Anjali Rao", uni: "University of Manchester", course: "MSc Data Science", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400", quote: "Veda Scholars made my dream of studying in the UK a reality. Their visa guidance was spot on.", role: "Data Scientist at Barclays" },
    { name: "Rahul Verma", uni: "University of Toronto", course: "MBA", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400", quote: "I was confused between Canada and Australia. The counselling team helped me analyze my career goals.", role: "Product Manager at Shopify" },
    { name: "Sarah Khan", uni: "TU Berlin", course: "MSc Engineering", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400", quote: "Zero tuition fees in Germany sounded too good to be true, but Veda helped me navigate the blocked account process easily.", role: "Automotive Engineer at BMW" },
    { name: "David Chen", uni: "University of Melbourne", course: "Bachelors in Finance", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400", quote: "The pre-departure briefing was a life saver. I knew exactly what to expect when I landed.", role: "Financial Analyst" },
];

export default function StudentStoriesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="bg-[var(--blue-darkest)] text-white py-24 px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Wall of Success</h1>
                <p className="text-xl text-white/70 max-w-2xl mx-auto">
                    Join 500+ students who have transformed their lives with Veda Scholars.
                </p>
            </section>

            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {STORIES.map((story, idx) => (
                        <div key={idx} className="bg-gray-50 p-8 rounded-3xl flex flex-col md:flex-row gap-6 relative group hover:bg-[var(--blue-darkest)] hover:text-white transition-colors duration-300">
                            <Quote className="absolute top-8 right-8 text-[var(--gold)]/20 w-16 h-16 group-hover:text-[var(--gold)]/10" />
                            <div className="relative w-24 h-24 flex-shrink-0">
                                <Image src={story.image} alt={story.name} fill className="object-cover rounded-full border-4 border-white group-hover:border-[var(--gold)]" unoptimized />
                            </div>
                            <div>
                                <p className="text-lg italic text-gray-600 mb-6 group-hover:text-white/90">&quot;{story.quote}&quot;</p>
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--blue-darkest)] group-hover:text-white">{story.name}</h3>
                                    <p className="text-[var(--gold)] text-sm font-semibold mb-1">{story.role}</p>
                                    <p className="text-xs text-gray-400 group-hover:text-white/60">{story.course} • {story.uni}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Video Testimonials Section (Placeholder for now) */}
            <section className="py-20 px-4 bg-[var(--blue-darkest)] text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12">Watch Their Journey</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="aspect-video bg-white/10 rounded-xl flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all group">
                                <PlayCircle className="w-16 h-16 text-[var(--gold)] group-hover:scale-110 transition-transform" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
