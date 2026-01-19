"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UniHero from "./components/UniHero";
import Button from "../components/Button";

// Dynamic imports for better performance
const UniSteps = dynamic(() => import("./components/UniSteps"));
const UniServices = dynamic(() => import("./components/UniServices"));
const UniFAQ = dynamic(() => import("./components/UniFAQ"));
const BrochureModal = dynamic(() => import("../components/BrochureModal"), {
    ssr: false,
});

export default function UniversitiesPage() {
    const [isBrochureOpen, setIsBrochureOpen] = useState(false);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <UniHero />
            {/* <UniLogos /> */}
            <UniSteps />
            <UniServices />

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-[var(--blue-darkest)] via-[var(--blue-dark)] to-[var(--blue-medium-dark)] relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--gold)]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Ready to boost your international student employability?
                    </h2>
                    <p className="text-base md:text-lg text-white/80 mb-10">
                        Join 50+ universities already using Veda Scholars to support their international graduates.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/get-in-touch">
                            <Button variant="primary" className="bg-[var(--gold)] text-[var(--blue-darkest)] hover:bg-white hover:text-[var(--blue-darkest)] border-none font-bold text-lg px-10 py-4 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                                Partner With Us
                            </Button>
                        </Link>
                        <Button
                            variant="outline"
                            className="font-bold text-lg px-10 py-4 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--blue-darkest)] transition-colors"
                            onClick={() => setIsBrochureOpen(true)}
                        >
                            View Brochure
                        </Button>
                    </div>
                </div>
            </section>

            <UniFAQ />

            <Footer />

            <BrochureModal
                isOpen={isBrochureOpen}
                onClose={() => setIsBrochureOpen(false)}
                title="University Brochure"
                pdfUrl="/brochures/Veda-Scholars-University-Brochure.pdf"
                downloadFileName="Veda-Scholars-University-Brochure.pdf"
                footerText="Prepare your international graduates for success"
            />
        </main>
    );
}
