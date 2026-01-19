"use client";


import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import { useParams } from "next/navigation";

export default function ArticlePage() {
    const params = useParams();
    // In a real app, we would fetch data based on params.slug
    // For static export/demo, we'll show a generic high-quality template

    const title = params.slug
        ? (params.slug as string).split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : "Article Not Found";

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Image */}
            <div className="relative h-[60vh] min-h-[400px] w-full mt-16">
                <Image
                    src="https://source.unsplash.com/random/1600x900?university,student"
                    alt="Article Cover"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue-darkest)] via-[var(--blue-darkest)]/50 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-12 lg:p-16">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/resources" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Resources
                        </Link>

                        <div className="flex gap-4 mb-4">
                            <span className="px-3 py-1 bg-[var(--gold)] text-[var(--blue-darkest)] text-xs font-bold uppercase tracking-wider rounded-sm">
                                Education
                            </span>
                            <span className="px-3 py-1 bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-sm backdrop-blur-sm">
                                5 Min Read
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            {title}
                        </h1>

                        <div className="flex items-center gap-6 text-white/80 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-[var(--gold)] flex items-center justify-center text-[var(--blue-darkest)] font-bold">
                                    VS
                                </div>
                                <span>Veda Editorial</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Jan 18, 2026</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <article className="max-w-4xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-[1fr_250px] gap-12">

                    {/* Main Text */}
                    <div className="prose prose-lg prose-blue max-w-none">
                        <p className="lead text-xl text-gray-600 mb-8 font-medium">
                            Navigating the landscape of international education can be daunting. In this comprehensive guide, we break down everything you need to know about secure your future abroad.
                        </p>

                        <h2 className="text-2xl font-bold text-[var(--blue-darkest)] mt-8 mb-4">1. Understanding the Requirements</h2>
                        <p className="text-gray-700 mb-6">
                            The first step in your journey is understanding the specific requirements of your chosen destination. Whether it&apos;s the UK, USA, or Canada, each country has its own set of academic and visa prerequisites. Veda Scholars ensures you are 100% prepared with our checklist-based approach.
                        </p>

                        <h2 className="text-2xl font-bold text-[var(--blue-darkest)] mt-8 mb-4">2. Financial Planning</h2>
                        <p className="text-gray-700 mb-6">
                            Tuition fees are just one part of the equation. Living expenses, health insurance, and travel costs must all be factored in. We help you explore scholarship opportunities and budget effectively to ensure a stress-free experience.
                        </p>

                        <blockquote className="border-l-4 border-[var(--gold)] pl-6 py-2 my-8 italic text-gray-700 bg-gray-50 rounded-r-lg">
                            &quot;The guidance I received from Veda Scholars was instrumental in securing my scholarship. I couldn&apos;t have done it without them.&quot;
                        </blockquote>

                        <h2 className="text-2xl font-bold text-[var(--blue-darkest)] mt-8 mb-4">3. Post-Study Work Opportunities</h2>
                        <p className="text-gray-700 mb-6">
                            One of the biggest advantages of studying abroad is the global career exposure. Countries like the UK (Graduate Route) and Canada (PGWP) offer excellent post-study work rights. Our placement team helps you connect with employers early in your course.
                        </p>

                        <div className="bg-[var(--blue-darkest)] text-white p-8 rounded-xl mt-12 mb-8 text-center">
                            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
                            <p className="mb-6 text-white/80">Book a free consultation with our experts today and get a personalized roadmap.</p>
                            <Button href="/book-counselling" variant="primary" className="bg-[var(--gold)] text-[var(--blue-darkest)] hover:bg-white border-none font-bold">
                                Book Free Counselling
                            </Button>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8 hidden md:block">
                        <div className="sticky top-24">
                            <div className="mb-8">
                                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Share this article</h4>
                                <div className="flex gap-2">
                                    <button className="p-2 rounded-full border border-gray-200 hover:bg-[var(--blue-darkest)] hover:text-white transition-colors"><Facebook className="w-4 h-4" /></button>
                                    <button className="p-2 rounded-full border border-gray-200 hover:bg-[var(--blue-darkest)] hover:text-white transition-colors"><Twitter className="w-4 h-4" /></button>
                                    <button className="p-2 rounded-full border border-gray-200 hover:bg-[var(--blue-darkest)] hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></button>
                                    <button className="p-2 rounded-full border border-gray-200 hover:bg-[var(--blue-darkest)] hover:text-white transition-colors"><Share2 className="w-4 h-4" /></button>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h4 className="font-bold text-[var(--blue-darkest)] mb-4">Related Topics</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Study Abroad', 'Visa', 'Immigration', 'Career', 'Scholarships'].map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 bg-white border border-gray-200 rounded text-gray-600 cursor-pointer hover:border-[var(--gold)]">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>

                </div>
            </article>

            <Footer />
        </main>
    );
}
