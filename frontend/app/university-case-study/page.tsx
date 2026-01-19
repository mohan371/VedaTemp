"use client";


import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CASE_STUDIES = [
    {
        uni: "University of Greenwich",
        title: "Increasing South Asian Enrollment by 40%",
        desc: "How structured recruitment drives and local presence transformed intake numbers.",
        stats: ["40% Intake Growth", "98% Visa Success", "Zero Dropouts"],
        img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800"
    },
    {
        uni: "University of Wollongong",
        title: "Streamlining Visa Compliance for High-Risk Regions",
        desc: "Implementing a 3-layer document verification system to ensure genuine student acquisition.",
        stats: ["100% GTE Clearance", "3-Day Processing Time", "Reduced Admin Load"],
        img: "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&q=80&w=800"
    }
];

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <section className="bg-[var(--blue-darkest)] text-white py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Institutional Success Stories</h1>
                    <p className="text-xl text-white/70 max-w-3xl">
                        See how leading universities partner with Veda Scholars to achieve their recruitment and diversity goals.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="space-y-16">
                    {CASE_STUDIES.map((study, idx) => (
                        <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 grid md:grid-cols-2">
                            <div className="relative h-64 md:h-auto">
                                <Image src={study.img} alt={study.uni} fill className="object-cover" unoptimized />
                                <div className="absolute inset-0 bg-gradient-to-r from-[var(--blue-darkest)]/80 to-transparent md:hidden"></div>
                                <div className="absolute bottom-6 left-6 text-white md:hidden">
                                    <h3 className="text-2xl font-bold">{study.uni}</h3>
                                </div>
                            </div>
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <h3 className="text-sm font-bold text-[var(--gold)] uppercase tracking-wider mb-2 hidden md:block">{study.uni}</h3>
                                <h2 className="text-2xl md:text-3xl font-bold text-[var(--blue-darkest)] mb-4">{study.title}</h2>
                                <p className="text-gray-600 mb-8">{study.desc}</p>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 border-t border-gray-100 pt-8">
                                    {study.stats.map((stat, i) => (
                                        <div key={i}>
                                            <div className="flex items-center gap-2 mb-1">
                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                            </div>
                                            <p className="font-bold text-[var(--blue-darkest)]">{stat}</p>
                                        </div>
                                    ))}
                                </div>

                                <Link href={`/resources/case-study-${idx + 1}`} className="inline-block">
                                    <button className="px-6 py-3 rounded-lg border-2 border-[var(--blue-darkest)] text-[var(--blue-darkest)] font-bold hover:bg-[var(--blue-darkest)] hover:text-white transition-all">
                                        Read Full Case Study
                                    </button>
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
