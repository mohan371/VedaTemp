"use client";



import Link from "next/link";
import { CheckCircle, Users, Globe, Building2, TrendingUp, Handshake, Star } from "lucide-react";
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
                                <span className="text-[var(--gold)] font-semibold text-sm tracking-wide">For Universities & Recruiters</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Global Handling <br />
                                <span className="text-[var(--gold)]">Expertise Powered by AI</span>
                            </h1>
                            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
                                Veda Scholars is an internationally registered Overseas Recruitment Agency & HR Solutions Provider with a strong global footprint across India, Dubai (UAE), and the United Kingdom.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/get-in-touch" className="w-full sm:w-auto">
                                    <Button
                                        variant="primary"
                                        className="bg-[var(--gold)] text-[var(--blue-darkest)] border-none hover:bg-white font-bold text-lg px-8 py-4 w-full shadow-lg hover:shadow-[0_0_20px_var(--gold-glow-medium)]"
                                    >
                                        Become a Partner
                                    </Button>
                                </Link>
                                <Link href="/get-in-touch?type=recruit" className="w-full sm:w-auto">
                                    <Button
                                        variant="outline"
                                        className="border-white text-white hover:bg-white hover:text-[var(--blue-darkest)] text-lg px-8 py-4 w-full"
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
                                        "Verified Talent",
                                        "Trained Workforce",
                                        "Trusted Partnership",
                                        "Global Hiring Expertise"
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

            {/* Why Choose Us Section */}
            <section className="py-12 md:py-24 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[var(--blue-darkest)] mb-6">Why Choose Us</h2>
                        <p className="text-[var(--blue-medium)] max-w-3xl mx-auto text-lg leading-relaxed italic">
                            &quot;Your workforce challenges become our operational responsibility, supported by skilled talent, continuous development, compliance assurance, and AI-enabled efficiency.&quot;
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Globe,
                                title: "Global Presence",
                                desc: "Global presence with local expertise across India, UK, and UAE."
                            },
                            {
                                icon: TrendingUp,
                                title: "Fast Delivery",
                                desc: "Fast and efficient talent delivery to meet urgent workforce needs."
                            },
                            {
                                icon: CheckCircle,
                                title: "Fully Compliant",
                                desc: "Fully compliant hiring & payroll process identifying reduced operational burden."
                            },
                            {
                                icon: Users,
                                title: "Workforce Development",
                                desc: "Continuous workforce development and upskilling programs."
                            },
                            {
                                icon: Handshake,
                                title: "Dedicated Support",
                                desc: "Dedicated account manager support for personalized service."
                            },
                            {
                                icon: Building2,
                                title: "Replacement Assurance",
                                desc: "Replacement assurance and retention focus for peace of mind."
                            },
                            {
                                icon: Star, // Need to import Star or remove if not available, using CheckCircle as fallback if needed or add to import
                                title: "AI-Driven Systems",
                                desc: "AI-Driven, High-Technology Recruitment Systems for precision matching."
                            },
                            {
                                icon: Users,
                                title: "Bulk Hiring",
                                desc: "Bulk Hiring Capability and End-to-End Workforce Management."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[var(--gold)]/30 hover:shadow-xl transition-all group h-full">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-[var(--gold)] group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-[var(--blue-darkest)] mb-2">{item.title}</h3>
                                <p className="text-[var(--blue-medium)] text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
