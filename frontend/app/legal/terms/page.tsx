"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="pt-24 pb-16 px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-[var(--blue-darkest)] mb-8">Terms of Service</h1>
                <div className="bg-white p-8 rounded-xl shadow-sm space-y-6 text-gray-700">
                    <p>Last updated: January 2026</p>
                    <h2 className="text-xl font-bold text-[var(--blue-darkest)]">1. Acceptance of Terms</h2>
                    <p>By accessing or using Veda Scholars services, you agree to be bound by these Terms of Service.</p>

                    <h2 className="text-xl font-bold text-[var(--blue-darkest)]">2. Services</h2>
                    <p>Veda Scholars provides educational counselling and placement services. We do not guarantee admission to any specific university nor job placement, although we strive to maximize your chances.</p>

                    <h2 className="text-xl font-bold text-[var(--blue-darkest)]">3. User Responsibilities</h2>
                    <p>You agree to provide accurate and complete information during the application process. False information may lead to termination of services.</p>

                    <h2 className="text-xl font-bold text-[var(--blue-darkest)]">4. Limitation of Liability</h2>
                    <p>Veda Scholars shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
