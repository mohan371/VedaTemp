"use client";

import Link from "next/link";
import { ArrowRight, Compass, Users, Lightbulb, Calendar } from "lucide-react";

export default function CareerCounseling() {
    return (
        <section className="py-20 bg-[var(--blue-darkest)] relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[var(--gold)]/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Content */}
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 text-[var(--gold)] text-sm font-semibold">
                            <Compass className="w-4 h-4" />
                            <span>Expert Career Guidance</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                            Confused about your <br />
                            <span className="text-[var(--gold)]">Career Path?</span>
                        </h2>

                        <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                            Don&apos;t leave your future to chance. Get personalized guidance from industry leaders and top mentors who have walked the path you&apos;re on.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { icon: Users, title: "1-on-1 Mentorship", desc: "Private sessions with experts" },
                                { icon: Lightbulb, title: "Clarity & Vision", desc: "Define your actionable goals" },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
                                    <item.icon className="w-8 h-8 text-[var(--gold)] mb-3" />
                                    <h3 className="text-white font-bold mb-1">{item.title}</h3>
                                    <p className="text-sm text-gray-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/get-in-touch">
                                <button className="w-full sm:w-auto px-8 py-4 bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-[var(--blue-darkest)] font-bold rounded-xl shadow-lg shadow-[var(--gold)]/20 flex items-center justify-center gap-2 transition-all transform hover:scale-105">
                                    <Calendar className="w-5 h-5" />
                                    Book Free Session
                                </button>
                            </Link>
                            <Link href="/about-us">
                                <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all">
                                    Meet Our Mentors
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative animate-fade-in-delay">
                        {/* Main Visual Card */}
                        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative overflow-hidden">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--gold)]/20 rounded-full blur-[50px] pointer-events-none" />

                            <div className="space-y-6 relative z-10">
                                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Free Consultation</h3>
                                        <p className="text-[var(--gold)] font-medium">Limited Slots Available</p>
                                    </div>
                                    <div className="h-12 w-12 rounded-full bg-[var(--gold)] flex items-center justify-center text-[var(--blue-darkest)] font-bold text-xl">
                                        Free
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        "Profile Evaluation",
                                        "University Shortlisting",
                                        "Career Roadmap Design",
                                        "Scholarship Assistance"
                                    ].map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 text-gray-200">
                                            <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                                    <p className="text-sm text-gray-400 mb-2">Join 500+ students who found their path</p>
                                    <div className="flex justify-center -space-x-2">
                                        {/* Hardcoded avatars for visual impact */}
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className={`w-8 h-8 rounded-full border-2 border-[var(--blue-darkest)] bg-gray-600 flex items-center justify-center text-[10px] text-white overflow-hidden`}>
                                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="user" className="w-full h-full bg-white/10" />
                                            </div>
                                        ))}
                                        <div className="w-8 h-8 rounded-full border-2 border-[var(--blue-darkest)] bg-[var(--gold)] flex items-center justify-center text-[10px] font-bold text-black">
                                            +5k
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
