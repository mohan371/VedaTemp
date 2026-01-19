"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Briefcase, Users, FileText, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function EmployerHandbookPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="bg-[var(--blue-darkest)] text-white py-24 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">The Ultimate Guide to Hiring International Talent</h1>
                        <p className="text-xl text-white/80 mb-8 leading-relaxed">
                            Everything employers need to know about sponsorship, compliance, and the benefits of a diverse global workforce.
                        </p>
                        <Button href="/book-counselling?type=employer" variant="primary" className="bg-[var(--gold)] text-[var(--blue-darkest)] hover:bg-white border-none font-bold px-8 py-4">
                            Partner with Veda
                        </Button>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative w-72 h-96 bg-white rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden border border-gray-200">
                            <div className="absolute top-0 left-0 right-0 h-4 bg-[var(--gold)]"></div>
                            <div className="p-8 flex flex-col h-full bg-gray-50">
                                <div className="w-16 h-16 bg-[var(--blue-darkest)] rounded-full mb-6 flex items-center justify-center text-white">
                                    <Briefcase className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-[var(--blue-darkest)] mb-2">Employer Handbook</h3>
                                <p className="text-sm text-gray-500 mb-8">2026 Edition</p>
                                <div className="mt-auto space-y-2">
                                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                                    <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-[var(--blue-darkest)] mb-4">What's Inside?</h2>
                    <p className="text-gray-600">A practical toolkit for HR leaders and Recruiters.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        { title: "Visa Sponsorship Demystified", desc: "Clear explanation of Skilled Worker visas (UK), H1B (USA), and more.", icon: FileText },
                        { title: "Compliance Checklists", desc: "Step-by-step guides to right-to-work checks and sponsor duties.", icon: CheckCircle },
                        { title: "Cultural Onboarding", desc: "Best practices for integrating international hires into your teams.", icon: Users },
                        { title: "Cost Benefit Analysis", desc: "Data on retention rates and ROI of hiring global talent.", icon: Briefcase }
                    ].map((item, idx) => (
                        <div key={idx} className="flex gap-4 p-6 rounded-xl border border-gray-100 hover:border-[var(--gold)]/50 transition-colors">
                            <div className="flex-shrink-0 w-12 h-12 bg-[var(--blue-darkest)]/5 rounded-full flex items-center justify-center text-[var(--blue-darkest)]">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[var(--blue-darkest)] mb-2">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href="/resources/employer-handbook-2026-pdf" className="inline-flex items-center px-8 py-4 bg-[var(--blue-darkest)] text-white rounded-xl font-bold hover:bg-[var(--gold)] hover:text-[var(--blue-darkest)] transition-all shadow-lg hover:shadow-xl">
                        <Download className="w-5 h-5 mr-2" /> Download Handbook (PDF)
                    </Link>
                    <p className="text-sm text-gray-400 mt-4">Free for registered partners</p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
