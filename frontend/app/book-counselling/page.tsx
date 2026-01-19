"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Clock, Video, User, Mail, Phone, MessageSquare, CheckCircle } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useNotification } from "../components/NotificationProvider";

// Validation Schema
const bookingSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Valid phone number is required"),
    topic: z.string().min(1, "Please select a topic"),
    date: z.string().min(1, "Please select a preferred date"),
    message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookCounsellingPage() {
    const { showNotification } = useNotification();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<BookingFormData>({
        resolver: zodResolver(bookingSchema),
    });

    const onSubmit = async (data: BookingFormData) => {
        setIsSubmitting(true);
        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setIsSuccess(true);
            showNotification("success", "Booking request sent successfully!");
            reset();
        } catch (error) {
            showNotification("error", "Failed to book session. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <main className="min-h-screen bg-white">
                <Navbar />
                <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 text-center animate-fade-in">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-[var(--blue-darkest)] mb-4">Request Received!</h1>
                    <p className="text-[var(--blue-medium)] max-w-md mb-8">
                        Thank you for booking a counselling session. Our team will contact you shortly to confirm the time and share the meeting link.
                    </p>
                    <div className="flex gap-4">
                        <Button href="/" variant="outline">Return Home</Button>
                        <button
                            onClick={() => setIsSuccess(false)}
                            className="text-[var(--gold)] hover:underline font-medium"
                        >
                            Book Another Session
                        </button>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="pt-24 pb-12 px-4 bg-[var(--blue-darkest)] text-white text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Book Your Free Counselling</h1>
                <p className="text-white/70 max-w-2xl mx-auto">
                    Take the first step towards your global career. Speak with our experts to understand your options, visa processes, and university choices.
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12 -mt-8">
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Info Side */}
                    <div className="md:col-span-1 space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full">
                            <h3 className="text-xl font-bold text-[var(--blue-darkest)] mb-6">Session Details</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center shrink-0">
                                        <Clock className="w-5 h-5 text-[var(--gold)]" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[var(--blue-darkest)]">Duration</h4>
                                        <p className="text-sm text-gray-500">30 - 45 Minutes</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center shrink-0">
                                        <Video className="w-5 h-5 text-[var(--gold)]" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[var(--blue-darkest)]">Format</h4>
                                        <p className="text-sm text-gray-500">Online via Google Meet / Zoom</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center shrink-0">
                                        <User className="w-5 h-5 text-[var(--gold)]" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[var(--blue-darkest)]">Expertise</h4>
                                        <p className="text-sm text-gray-500">VISA Certified Counsellors</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <p className="text-xs text-gray-400">
                                    &quot;The counselling session was an eye-opener. I got a clear roadmap for my Masters in UK.&quot;
                                </p>
                                <p className="text-sm font-semibold mt-2 text-[var(--blue-darkest)]">- Priya S., Alumni</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="md:col-span-2">
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                            <input
                                                {...register("name")}
                                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] outline-none transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                            <input
                                                {...register("email")}
                                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] outline-none transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Phone */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Phone Number</label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                            <input
                                                {...register("phone")}
                                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] outline-none transition-all"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                        {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                                    </div>

                                    {/* Date */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Preferred Date</label>
                                        <div className="relative">
                                            <input
                                                type="date"
                                                {...register("date")}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] outline-none transition-all"
                                            />
                                        </div>
                                        {errors.date && <p className="text-red-500 text-xs">{errors.date.message}</p>}
                                    </div>
                                </div>

                                {/* Topic */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">What would you like to discuss?</label>
                                    <select
                                        {...register("topic")}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] outline-none transition-all bg-white"
                                    >
                                        <option value="">Select a topic...</option>
                                        <option value="study-abroad">Study Abroad Opportunities</option>
                                        <option value="visa-assistance">Visa Assistance</option>
                                        <option value="job-search">International Job Search</option>
                                        <option value="career-counselling">General Career Counselling</option>
                                    </select>
                                    {errors.topic && <p className="text-red-500 text-xs">{errors.topic.message}</p>}
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Additional Message (Optional)</label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                        <textarea
                                            {...register("message")}
                                            rows={4}
                                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] outline-none transition-all resize-none"
                                            placeholder="Tell us a bit about your background or specific questions..."
                                        />
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Button
                                        variant="primary"
                                        className="w-full bg-[var(--blue-darkest)] text-white hover:bg-[var(--gold)] hover:text-black hover:scale-[1.01] transition-all py-4 font-bold text-lg shadow-lg"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Sending Request..." : "Confirm Booking"}
                                    </Button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
