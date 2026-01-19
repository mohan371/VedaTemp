"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


// Utilizing local assets found in public/events
const EVENTS = [
    {
        id: 1,
        title: "Global Education Fair 2026",
        date: "Feb 15, 2026",
        time: "10:00 AM - 5:00 PM",
        location: "Hyatt Regency, Mumbai",
        type: "Offline",
        image: "/events/global_education_fair_2025.jpg",
        category: "Fair",
        description: "Meet representatives from 50+ top universities from UK, USA, and Canada direct. Spot admissions and scholarship assessments."
    },
    {
        id: 2,
        title: "Study Abroad 101: Webinar",
        date: "Jan 28, 2026",
        time: "6:00 PM IST",
        location: "Zoom (Online)",
        type: "Online",
        image: "/events/study_abroad_fair.png",
        category: "Webinar",
        description: "A complete beginner's guide to international education. Learn about timelines, costs, and requirements."
    },
    {
        id: 3,
        title: "Alumni Networking Night",
        date: "Mar 05, 2026",
        time: "7:00 PM Onwards",
        location: "Veda HQ, Bangalore",
        type: "Offline",
        image: "/events/networking_night.png",
        category: "Networking",
        description: "Connect with Veda alumni now working at Google, Microsoft, and Amazon. Drinks and dinner included."
    },
    {
        id: 4,
        title: "Career & CV Workshop",
        date: "Feb 10, 2026",
        time: "4:00 PM IST",
        location: "Microsoft Teams (Online)",
        type: "Online",
        image: "/events/career_workshop.png",
        category: "Workshop",
        description: "Expert session on crafting an ATS-friendly resume for international job markets."
    }
];

export default function EventsPage() {
    const [filter, setFilter] = useState("All");

    const filteredEvents = filter === "All" ? EVENTS : EVENTS.filter(e => e.type === filter);

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero */}
            <section className="bg-[var(--blue-darkest)] text-white py-24 px-4 relative overflow-hidden">
                {/* Abstract background shapes */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Upcoming <span className="text-[var(--gold)]">Events</span></h1>
                    <p className="text-xl text-white/70 max-w-2xl mb-8">
                        Join our webinars, fairs, and workshops to fast-track your study abroad journey.
                    </p>

                    {/* Search/Filter Bar */}
                    <div className="bg-white p-2 rounded-xl shadow-lg inline-flex flex-col sm:flex-row gap-2">
                        {["All", "Online", "Offline"].map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilter(type)}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all ${filter === type
                                    ? "bg-[var(--blue-darkest)] text-white shadow-md"
                                    : "text-gray-600 hover:bg-gray-100"
                                    }`}
                            >
                                {type} Events
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Events Grid */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {filteredEvents.map((event) => (
                        <div key={event.id} className="group bg-white rounded-3xl overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100 flex flex-col md:flex-row h-full">
                            {/* Image Side */}
                            <div className="relative h-64 md:h-auto md:w-2/5 overflow-hidden">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    unoptimized
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-[var(--blue-darkest)]">
                                    {event.category}
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="p-8 flex flex-col justify-between flex-1 relative">
                                {/* Top Border Accent */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--gold)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div>
                                    <div className="flex gap-4 mb-4 text-xs font-semibold text-gray-500 uppercase tracking-widest">
                                        <span className="flex items-center gap-1 text-[var(--gold)]"><Calendar className="w-4 h-4" /> {event.date}</span>
                                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {event.time}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-[var(--blue-darkest)] mb-3 group-hover:text-[var(--blue-medium)] transition-colors">{event.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">{event.description}</p>
                                </div>

                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <MapPin className="w-4 h-4 text-[var(--blue-medium)]" />
                                        {event.location}
                                    </div>
                                    <Link href={`/get-in-touch?event=${event.id}`}>
                                        <button className="w-10 h-10 rounded-full bg-[var(--blue-darkest)] text-white flex items-center justify-center group-hover:bg-[var(--gold)] group-hover:text-[var(--blue-darkest)] transition-colors shadow-md">
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
