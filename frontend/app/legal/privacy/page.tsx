"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="pt-24 pb-16 px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-[var(--blue-darkest)] mb-8">Privacy Policy</h1>
                <div className="bg-white p-8 rounded-xl shadow-sm space-y-6 text-gray-700">
                    <p>Last updated: January 2026</p>
                    <h2 className="text-xl font-bold text-[var(--blue-darkest)]">1. Introduction</h2>
                    <p>Veda Scholars (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website and services.</p>

                    <h2 className="text-xl font-bold text-[var(--blue-darkest)]">2. Information We Collect</h2>
                    <p>We collect information that you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include your name, email address, phone number, and educational background.</p>

                    <h2 className="text-xl font-bold text-[var(--blue-darkest)]">3. How We Use Your Information</h2>
                    <p>We use your information to provide, maintain, and improve our services, including facilitating university applications and job placements. We do not sell your personal data to third parties.</p>

                    <h2 className="text-xl font-bold text-[var(--blue-darkest)]">4. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us at info@vedascholars.com.</p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
