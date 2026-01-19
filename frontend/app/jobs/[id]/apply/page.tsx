"use client";

import { useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, ArrowLeft } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Button from "../../../components/Button";

// Apollo imports removed

// Schema
const applySchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number is required"),
    resumeUrl: z.string().min(1, "Resume is required"),
});

type ApplyFormData = z.infer<typeof applySchema>;

export default function ApplyJobPage() {
    const params = useParams();
    const router = useRouter();
    const searchParams = useSearchParams();


    const [isSuccess, setIsSuccess] = useState(false);

    // Retrieve external job details from URL params (fallback for JSearch jobs)
    const externalTitle = searchParams.get("title");
    const externalCompany = searchParams.get("company");
    const externalLocation = searchParams.get("location");

    const [applying, setApplying] = useState(false);
    const [applyError, setApplyError] = useState<Error | null>(null);

    const {
        register,
        handleSubmit,
        setValue, // Added setValue
        formState: { errors },
    } = useForm({
        resolver: zodResolver(applySchema),
    });

    const jobTitle = externalTitle;
    const jobCompany = externalCompany;

    const onSubmit = async (data: ApplyFormData) => {
        setApplying(true);
        try {
            // Simulate network request
            await new Promise(resolve => setTimeout(resolve, 1500));
            setIsSuccess(true);
        } catch (err) {
            console.error("Application Error:", err);
            setApplyError(err as Error);
        } finally {
            setApplying(false);
        }
    };



    if (!jobTitle) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <p className="text-red-500 text-lg mb-4">Job details not found.</p>
                <Button variant="outline" onClick={() => router.back()}>
                    Go Back
                </Button>
            </div>
        );
    }

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[var(--blue-darkest)] via-[var(--blue-dark)] to-[var(--blue-medium-dark)] flex flex-col items-center justify-center p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

                {/* Success Card */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl max-w-lg w-full text-center relative z-10 animate-fade-in-up">

                    {/* Animated Checkmark */}
                    <div className="w-24 h-24 bg-gradient-to-tr from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/30 animate-scale-in">
                        <svg className="w-12 h-12 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                                className="animate-draw-check"
                            />
                        </svg>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                        Application Sent!
                    </h2>

                    <p className="text-lg text-white/80 mb-8 leading-relaxed">
                        You&apos;ve successfully applied for the <br />
                        <span className="text-[var(--gold)] font-semibold">{jobTitle}</span> role at <span className="text-white font-semibold">{jobCompany}</span>.
                    </p>

                    <div className="space-y-4">
                        <Button
                            variant="primary"
                            className="w-full py-4 text-lg font-bold shadow-xl shadow-[var(--gold)]/20"
                            onClick={() => router.push("/jobs/search")}
                        >
                            Back to Jobs
                        </Button>

                        <button
                            onClick={() => router.push("/jobs/search")}
                            className="text-white/60 hover:text-white text-sm font-medium transition-colors"
                        >
                            Back to Job Search
                        </button>
                    </div>
                </div>

                {/* CSS for animations */}
                <style jsx global>{`
                    @keyframes scale-in {
                        0% { transform: scale(0); opacity: 0; }
                        50% { transform: scale(1.1); }
                        100% { transform: scale(1); opacity: 1; }
                    }
                    @keyframes fade-in-up {
                        0% { transform: translateY(20px); opacity: 0; }
                        100% { transform: translateY(0); opacity: 1; }
                    }
                    @keyframes draw-check {
                        0% { stroke-dasharray: 100; stroke-dashoffset: 100; }
                        100% { stroke-dashoffset: 0; }
                    }
                    .animate-scale-in {
                        animation: scale-in 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                    }
                    .animate-fade-in-up {
                        animation: fade-in-up 0.8s ease-out forwards;
                    }
                    .animate-draw-check {
                        stroke-dasharray: 100;
                        stroke-dashoffset: 100;
                        animation: draw-check 1s ease-out 0.4s forwards;
                    }
                `}</style>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
                <button
                    onClick={() => router.back()}
                    className="flex items-center text-gray-500 hover:text-[var(--gold)] transition-colors mb-6"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Job Details
                </button>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-8 border-b border-gray-100 bg-gray-50/50">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Apply for {jobTitle}</h1>
                        <p className="text-gray-600">{jobCompany}</p>
                    </div>

                    <div className="p-8">
                        {applyError && (
                            <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 text-sm">
                                {applyError.message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    {...register("name")}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent outline-none transition-all"
                                    placeholder="John Doe"
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    {...register("email")}
                                    type="email"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    {...register("phone")}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent outline-none transition-all"
                                    placeholder="+1 234 567 890"
                                />
                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Upload Resume (PDF)</label>
                                <input
                                    type="file"
                                    accept="application/pdf"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            const reader = new FileReader();
                                            reader.onloadend = () => {
                                                const base64String = reader.result as string;
                                                setValue("resumeUrl", base64String);
                                            };
                                            reader.readAsDataURL(file);
                                        }
                                    }}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[var(--gold)] file:text-[var(--blue-darkest)] hover:file:bg-[var(--gold-hover)]"
                                />
                                {/* Hidden input to actually store the Base64 string for the form submission */}
                                <input
                                    type="hidden"
                                    {...register("resumeUrl")}
                                />
                                {errors.resumeUrl && <p className="text-red-500 text-xs mt-1">{errors.resumeUrl.message}</p>}
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={applying}
                                    className="w-full py-3 bg-[var(--gold)] hover:bg-[var(--gold-hover)] text-gray-900 font-bold rounded-lg transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {applying ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        "Submit Application"
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
