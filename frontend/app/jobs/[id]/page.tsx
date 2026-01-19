"use client";


import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Loader2, MapPin, Briefcase, DollarSign, Calendar, ArrowLeft } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

// Apollo imports removed
// GET_JOB query removed

export default function JobDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const searchParams = useSearchParams();
    const { id } = params;

    // Fallback data from URL
    const fallbackJob = {
        id: id as string,
        title: searchParams.get("title"),
        company: searchParams.get("company"),
        location: searchParams.get("location"),
        type: searchParams.get("type") || "Full-time",
        description: searchParams.get("description"),
        experienceRequired: "Not specified",
        salary: searchParams.get("salary"),
        createdAt: searchParams.get("postedAt") || new Date().toISOString()
    };

    const job = fallbackJob.title ? fallbackJob : null;

    if (!job) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <p className="text-red-500 text-lg mb-4">Job not found or error loading details.</p>
                <Button variant="outline" onClick={() => router.back()}>
                    Go Back
                </Button>
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
                    Back to Jobs
                </button>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Header */}
                    <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                                <div className="text-xl text-gray-600 font-medium mb-4">{job.company}</div>

                                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-1.5">
                                        <MapPin className="w-4 h-4" />
                                        {job.location}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Briefcase className="w-4 h-4" />
                                        {job.type || "Full-time"}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <DollarSign className="w-4 h-4" />
                                        {job.salary || "Not specified"}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4" />
                                        Posted {new Date(job.createdAt).toLocaleDateString()}
                                    </div>
                                </div>
                            </div>

                            <div className="flex-shrink-0">
                                <Button
                                    variant="primary"
                                    className="px-8 py-3 bg-[var(--gold)] text-gray-900 font-bold hover:bg-[var(--gold-hover)]"
                                    onClick={() => {
                                        const params = new URLSearchParams();
                                        params.set('title', job.title || '');
                                        params.set('company', job.company || '');
                                        params.set('location', job.location || '');
                                        router.push(`/jobs/${job.id}/apply?${params.toString()}`);
                                    }}
                                >
                                    Apply Now
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 space-y-8">
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Job Description</h2>
                            <div className="prose max-w-none text-gray-600 whitespace-pre-line">
                                {job.description}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Requirements</h2>
                            <div className="prose max-w-none text-gray-600 whitespace-pre-line">
                                {job.experienceRequired}
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
