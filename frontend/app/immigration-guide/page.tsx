"use client";



import Link from "next/link";
import { Plane, FileCheck, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function ImmigrationGuidePage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero */}
            <section className="bg-gradient-to-r from-[var(--blue-darkest)] to-[var(--blue-medium-dark)] text-white py-24 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-[var(--gold)] text-sm font-semibold mb-6">
                            Updated for 2026
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Simplify Your <span className="text-[var(--gold)]">Visa Journey</span>
                        </h1>
                        <p className="text-xl text-white/80 mb-8 leading-relaxed">
                            Comprehensive guides for student visas, post-study work permits, and permanent residency pathways for top study destinations.
                        </p>
                        <Button href="/book-counselling" variant="primary" className="bg-[var(--gold)] text-[var(--blue-darkest)] hover:bg-white border-none font-bold text-lg px-8 py-4">
                            Get Expert Visa Help
                        </Button>
                    </div>
                    <div className="hidden md:flex justify-center">
                        <div className="relative w-80 h-80 bg-white/5 rounded-full backdrop-blur-3xl animate-pulse">
                            <Plane className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-white/20" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Guides Grid */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { country: "United Kingdom", title: "Student (Tier 4) & Graduate Route", icon: "🇬🇧", color: "bg-red-50 text-red-700" },
                            { country: "Canada", title: "Study Permit & PGWP Updates", icon: "🇨🇦", color: "bg-red-50 text-red-700" },
                            { country: "USA", title: "F-1 Visa step-by-step Guide", icon: "🇺🇸", color: "bg-blue-50 text-blue-700" },
                            { country: "Australia", title: "Subclass 500 & GTE Requirements", icon: "🇦🇺", color: "bg-blue-50 text-blue-700" },
                            { country: "Germany", title: "Student Visa & Blocked Account", icon: "🇩🇪", color: "bg-yellow-50 text-yellow-700" },
                            { country: "Ireland", title: "Study Visa & Third Level Graduate Scheme", icon: "🇮🇪", color: "bg-green-50 text-green-700" },
                        ].map((guide, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                                <div className="text-4xl mb-6">{guide.icon}</div>
                                <h3 className="text-2xl font-bold text-[var(--blue-darkest)] mb-2">{guide.country}</h3>
                                <p className="text-gray-600 mb-6 font-medium">{guide.title}</p>
                                <ul className="space-y-3 mb-8 text-sm text-gray-500">
                                    <li className="flex items-center gap-2"><FileCheck className="w-4 h-4 text-green-500" /> Document Checklist</li>
                                    <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-orange-500" /> Processing Times</li>
                                    <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[var(--blue-medium)]" /> Success Tips</li>
                                </ul>
                                <Link href={`/resources/${guide.country.toLowerCase()}-visa-guide`} className="inline-flex items-center text-[var(--blue-darkest)] font-bold group-hover:text-[var(--gold)] transition-colors">
                                    Read Guide <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
