"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, GraduationCap, FileText, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Mock Data
const RESOURCES = [
    { type: "Blog", title: "Top 5 Universities in UK for Data Science", category: "Education", readTime: "5 min read" },
    { type: "Student Story", title: "How Anjali Secured a Job at Microsoft London", category: "Success Story", readTime: "8 min read" },
    { type: "Guide", title: "Complete Immigration Guide for Canada 2025", category: "Immigration", readTime: "15 min read" },
    { type: "Case Study", title: "Helping University of Manchester Boost Placements", category: "Institutional", readTime: "10 min read" },
    { type: "Blog", title: "Living in Berlin: A Student's Survival Guide", category: "Lifestyle", readTime: "6 min read" },
    { type: "Guide", title: "Employer Handbook: Hiring International Graduates", category: "Business", readTime: "12 min read" }
];

export default function ResourcesPage() {
    const [activeTab, setActiveTab] = useState("All");

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="bg-[var(--blue-darkest)] text-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Knowledge Hub</h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Expert insights, success stories, and comprehensive guides to navigate your international education journey.
                    </p>
                </div>
            </section>

            <section className="py-12 px-4 border-b border-gray-100 sticky top-16 bg-white z-20">
                <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto pb-2 sm:pb-0 justify-center">
                    {["All", "Blogs", "Guides", "Student Stories", "Case Studies"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${activeTab === tab
                                ? "bg-[var(--blue-darkest)] text-white"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </section>

            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {RESOURCES.filter(r => activeTab === "All" || (activeTab === "Guides" && (r.type === "Guide" || r.type === "Immigration Guide")) || activeTab.includes(r.type)).map((item, idx) => (
                        <div key={idx} className="bg-white rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col">
                            <div className="h-48 bg-[var(--blue-medium-dark)]/10 flex items-center justify-center group-hover:bg-[var(--blue-darkest)] transition-colors duration-500">
                                {item.type.includes("Student") ? <GraduationCap className="w-12 h-12 text-[var(--blue-darkest)] group-hover:text-[var(--gold)]" /> :
                                    item.type.includes("Guide") ? <FileText className="w-12 h-12 text-[var(--blue-darkest)] group-hover:text-[var(--gold)]" /> :
                                        <BookOpen className="w-12 h-12 text-[var(--blue-darkest)] group-hover:text-[var(--gold)]" />}
                            </div>
                            <div className="p-8 flex-grow flex flex-col">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--gold)]">{item.category}</span>
                                    <span className="text-xs text-gray-400">{item.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold text-[var(--blue-darkest)] mb-4 flex-grow">{item.title}</h3>
                                <Link
                                    href={`/resources/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                                    className="inline-flex items-center text-[var(--blue-medium)] hover:text-[var(--blue-darkest)] font-semibold transition-colors mt-auto"
                                >
                                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
