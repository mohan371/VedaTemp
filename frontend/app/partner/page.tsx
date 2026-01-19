"use client";



import Link from "next/link";
import { CheckCircle, Users, Globe, Building2, TrendingUp, Handshake } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function PartnerPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-[var(--blue-darkest)] via-[var(--blue-dark)] to-[var(--blue-medium-dark)] overflow-hidden pt-20">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center bg-fixed"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in text-white">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
                                <Handshake className="w-5 h-5 text-[var(--gold)]" />
                                <span className="text-[var(--gold)] font-semibold text-sm tracking-wide">For Universities & Employers</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Expand Your <span className="text-[var(--gold)]">Global Reach</span> With Veda Scholars
                            </h1>
                            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
                                Join our network of 50+ universities and 200+ employers. We connect exceptional talent with world-class opportunities through seamless visa processing and recruitment solutions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/get-in-touch">
                                    <Button
                                        variant="primary"
                                        className="bg-[var(--gold)] text-[var(--blue-darkest)] border-none hover:bg-white font-bold text-lg px-8 py-4 w-full sm:w-auto shadow-lg hover:shadow-[0_0_20px_var(--gold-glow-medium)]"
                                    >
                                        Become a Partner
                                    </Button>
                                </Link>
                                <Link href="/get-in-touch?type=recruit">
                                    <Button
                                        variant="outline"
                                        className="border-white text-white hover:bg-white hover:text-[var(--blue-darkest)] text-lg px-8 py-4 w-full sm:w-auto"
                                    >
                                        Hire Talent
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-[500px] hidden lg:block animate-fade-in-delay">
                            {/* Abstract visual representation of connecting nodes */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--gold)]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
                            <div className="relative h-full w-full bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className="p-4 bg-white/10 rounded-xl">
                                        <Building2 className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[var(--gold)] font-bold text-4xl">500+</p>
                                        <p className="text-white/60">Successful Placements</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        "Verified Candidate Profiles",
                                        "Zero-Hassle Visa Support",
                                        "Dedicated Account Manager",
                                        "Global Brand Exposure"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-white">
                                            <div className="w-8 h-8 rounded-full bg-[var(--gold)]/20 flex items-center justify-center">
                                                <CheckCircle className="w-5 h-5 text-[var(--gold)]" />
                                            </div>
                                            <span className="text-lg">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[var(--blue-darkest)] mb-4">Why Partner With Us?</h2>
                        <p className="text-[var(--blue-medium)] max-w-2xl mx-auto">We bridge the gap between education and employment, creating mutually beneficial ecosystems for universities and corporations.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Users,
                                title: "Access Top Talent",
                                desc: "Pre-screened, motivated graduates ready to contribute from day one.",
                                for: "Employers"
                            },
                            {
                                icon: Globe,
                                title: "Global Diversity",
                                desc: "Enhance your campus or workforce with diverse cultural perspectives.",
                                for: "Universities"
                            },
                            {
                                icon: TrendingUp,
                                title: "Boost Employability",
                                desc: "Increase your institution's placement rates and student satisfaction.",
                                for: "Universities"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[var(--gold)]/30 hover:shadow-xl transition-all group">
                                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-[var(--gold)] group-hover:scale-110 transition-transform">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <span className="inline-block px-3 py-1 rounded-full bg-[var(--blue-darkest)]/5 text-[var(--blue-darkest)] text-xs font-bold mb-4 uppercase tracking-wider">
                                    For {item.for}
                                </span>
                                <h3 className="text-xl font-bold text-[var(--blue-darkest)] mb-3">{item.title}</h3>
                                <p className="text-[var(--blue-medium)] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
