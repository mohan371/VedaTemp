"use client";

import React from "react";

import Link from "next/link";
import { Briefcase, MapPin, ArrowRight, Heart, Users, Zap } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

const OPENINGS = [
    {
        id: 1,
        role: "Senior Education Counsellor",
        location: "Mumbai, India (Hybrid)",
        type: "Full-time",
        dept: "Counselling"
    },
    {
        id: 2,
        role: "Digital Marketing Manager",
        location: "Remote",
        type: "Full-time",
        dept: "Marketing"
    },
    {
        id: 3,
        role: "Student Success Associate",
        location: "London, UK (On-site)",
        type: "Part-time",
        dept: "Operations"
    }
];

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero */}
            <section className="bg-[var(--blue-darkest)] text-white py-24 px-4 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--gold)]/5 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">Build the Future of EdTech</h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
                        We&apos;re on a mission to democratize global education. Join a team of dreamers, doers, and changemakers.
                    </p>
                    <Button href="#openings" variant="primary" className="bg-white text-[var(--blue-darkest)] hover:bg-[var(--gold)] border-none px-8 py-4 font-bold text-lg">
                        View Open Positions
                    </Button>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Heart, title: "Student First", desc: "Every decision we make starts with 'How does this help the student?'" },
                        { icon: Zap, title: "Move Fast", desc: "We innovate rapidly and aren't afraid to break things to make them better." },
                        { icon: Users, title: "Inclusive Growth", desc: "We believe in growing together. Your success is our success." }
                    ].map((val, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-center">
                            <div className="w-16 h-16 bg-[var(--blue-darkest)]/5 rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--blue-darkest)]">
                                <val.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--blue-darkest)] mb-3">{val.title}</h3>
                            <p className="text-gray-600">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Campus Ambassador */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto bg-gradient-to-r from-[var(--gold)] to-yellow-500 rounded-3xl p-8 md:p-16 overflow-hidden relative">
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-[var(--blue-darkest)]">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Campus Ambassador Programme</h2>
                            <p className="text-lg mb-8 font-medium">
                                Are you a student leader? Represent Veda Scholars on your campus, earn rewards, and get exclusive career mentorship.
                            </p>
                            <Button href="/get-in-touch?subject=Ambassador" variant="outline" className="border-[var(--blue-darkest)] text-[var(--blue-darkest)] hover:bg-[var(--blue-darkest)] hover:text-white border-2">
                                Apply Now
                            </Button>
                        </div>
                        <div className="hidden md:flex justify-end">
                            {/* Abstract Shapes */}
                            <div className="w-64 h-64 bg-white/20 backdrop-blur-lg rounded-full animate-pulse border-2 border-white/30 flex items-center justify-center">
                                <Users className="w-24 h-24 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Openings */}
            <section id="openings" className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-[var(--blue-darkest)] mb-10 text-center">Current Openings</h2>
                    <div className="space-y-4">
                        {OPENINGS.map((job) => (
                            <div key={job.id} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[var(--gold)] hover:shadow-md transition-all flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--blue-darkest)]">{job.role}</h3>
                                    <div className="flex gap-4 text-sm text-gray-500 mt-2">
                                        <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.dept}</span>
                                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                                    </div>
                                </div>
                                <Link href={`/get-in-touch?job=${job.id}`}>
                                    <Button variant="outline" className="border-[var(--blue-medium)] text-[var(--blue-medium)] hover:text-[var(--blue-darkest)] hover:border-[var(--blue-darkest)] min-w-[120px]">
                                        Apply <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
