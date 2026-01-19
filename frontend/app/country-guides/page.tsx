"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, GraduationCap, DollarSign, Sun, ArrowRight, Building } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const COUNTRIES = [
    { name: "United Kingdom", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800", universities: "150+", cost: "£12k - £25k", stayBack: "2 Years" },
    { name: "USA", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=800", universities: "4000+", cost: "$20k - $50k", stayBack: "1-3 Years" },
    { name: "Canada", image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80&w=800", universities: "100+", cost: "CAD 15k - 35k", stayBack: "Up to 3 Years" },
    { name: "Australia", image: "https://images.unsplash.com/photo-1523482580672-01e6f06378c5?auto=format&fit=crop&q=80&w=800", universities: "43", cost: "AUD 20k - 45k", stayBack: "2-4 Years" },
    { name: "Germany", image: "https://images.unsplash.com/photo-1467269204594-9661b133375b?auto=format&fit=crop&q=80&w=800", universities: "380+", cost: "Zero - €3k", stayBack: "18 Months" },
    { name: "New Zealand", image: "https://images.unsplash.com/photo-1507699622177-f888f107cd66?auto=format&fit=crop&q=80&w=800", universities: "8", cost: "NZD 22k - 35k", stayBack: "3 Years" },
];

export default function CountryGuidesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="bg-[var(--blue-darkest)] text-white py-24 px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Explore Destinations</h1>
                <p className="text-xl text-white/70 max-w-2xl mx-auto">
                    Find the perfect country for your academic and career ambitions. detailed guides on lifestyle, costs, and top universities.
                </p>
            </section>

            <section className="py-16 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {COUNTRIES.map((country, idx) => (
                        <div key={idx} className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 bg-white">
                            <div className="relative h-56 overflow-hidden">
                                <Image src={country.image} alt={country.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" unoptimized />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue-darkest)]/80 to-transparent"></div>
                                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">{country.name}</h3>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-3">
                                    <span className="flex items-center text-gray-500"><Building className="w-4 h-4 mr-2 text-[var(--gold)]" /> Universities</span>
                                    <span className="font-semibold text-[var(--blue-darkest)]">{country.universities}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-3">
                                    <span className="flex items-center text-gray-500"><DollarSign className="w-4 h-4 mr-2 text-[var(--gold)]" /> Avg. Tuition</span>
                                    <span className="font-semibold text-[var(--blue-darkest)]">{country.cost}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-3">
                                    <span className="flex items-center text-gray-500"><Sun className="w-4 h-4 mr-2 text-[var(--gold)]" /> Post-Study Work</span>
                                    <span className="font-semibold text-[var(--blue-darkest)]">{country.stayBack}</span>
                                </div>

                                <Link href={`/resources/${country.name.toLowerCase().replace(' ', '-')}-guide`} className="block mt-4">
                                    <button className="w-full py-3 rounded-lg bg-[var(--blue-darkest)] text-white font-semibold hover:bg-[var(--gold)] hover:text-[var(--blue-darkest)] transition-colors flex items-center justify-center">
                                        View Full Guide <ArrowRight className="w-4 h-4 ml-2" />
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
