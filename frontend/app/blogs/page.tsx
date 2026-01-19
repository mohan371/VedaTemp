"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BLOGS = [
    { title: "Top 5 Universities in UK for Data Science", date: "Jan 12, 2026", author: "Veda Editorial", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800", desc: "A comprehensive ranking based on research output, employability, and student satisfaction." },
    { title: "Living in Berlin: A Student's Survival Guide", date: "Jan 08, 2026", author: "Sarah Khan", img: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&q=80&w=800", desc: "Tips on finding accommodation, navigating public transport, and managing expenses in Germany's capital." },
    { title: "Post-Study Work Visas: 2026 Updates", date: "Jan 05, 2026", author: "Immigration Team", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800", desc: "Key changes to the Graduate Route in UK and PGWP in Canada that every student needs to know." },
    { title: "How to Ace Your IELTS Speaking Test", date: "Dec 28, 2025", author: "English Prep", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800", desc: "Expert strategies and practice topics to help you score Band 8.0 and above." },
    { title: "MBA vs MIM: Which is Right for You?", date: "Dec 15, 2025", author: "Career Desk", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800", desc: "Analyzing the ROI, entry requirements, and career trajectories for both management degrees." },
    { title: "5 Hidden Scholarships You Missed", date: "Dec 10, 2025", author: "Veda Editorial", img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=800", desc: "Explore lesser-known funding opportunities that can cover up to 100% of your tuition." },
];

export default function BlogsPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <section className="bg-[var(--blue-darkest)] text-white py-24 px-4 header-gradient">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Veda Insights</h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Latest news, expert advice, and deep dives into the world of international education.
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOGS.map((blog, idx) => (
                        <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
                            <div className="relative h-48 overflow-hidden">
                                <Image src={blog.img} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex gap-4 text-xs text-gray-500 mb-3">
                                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {blog.date}</span>
                                    <span className="flex items-center text-[var(--gold)]"><User className="w-3 h-3 mr-1" /> {blog.author}</span>
                                </div>
                                <h3 className="text-xl font-bold text-[var(--blue-darkest)] mb-3 group-hover:text-[var(--blue-medium)] transition-colors">{blog.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 flex-grow">{blog.desc}</p>
                                <Link href={`/resources/${blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="mt-auto inline-flex items-center text-[var(--blue-darkest)] font-bold text-sm hover:text-[var(--gold)] transition-colors">
                                    Read More <ArrowRight className="w-4 h-4 ml-1" />
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
