import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';
import { Loader2 } from 'lucide-react';

interface JobCardProps {
    id: string | number;
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    postedAt: string;
    description?: string; // Add description prop
    logo?: string;
    applyLink?: string;
    matchScore?: number;
    isApplied?: boolean;
}

export default function JobCard({ id, title, company, location, type, salary, postedAt, description, logo, applyLink, matchScore, isApplied }: JobCardProps) {
    const router = useRouter();

    const handleViewDetails = (e: React.MouseEvent) => {
        e.stopPropagation();

        // Check if it's a MongoDB ID (24 hex chars)
        const isMongoId = id.toString().match(/^[0-9a-fA-F]{24}$/);

        if (isMongoId) {
            router.push(`/jobs/${id}`);
        } else {
            // It's an external ID, use route with params
            const params = new URLSearchParams();
            params.set('title', title);
            params.set('company', company);
            if (location) params.set('location', location);
            if (description) params.set('description', description.slice(0, 1500)); // Limit length
            if (salary) params.set('salary', salary);
            if (postedAt) params.set('postedAt', postedAt);

            router.push(`/jobs/${id}?${params.toString()}`);
        }
    };

    const handleApply = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (isApplied) return;

        const params = new URLSearchParams();
        params.set('title', title);
        params.set('company', company);
        if (location) params.set('location', location);

        router.push(`/jobs/${id}/apply?${params.toString()}`);
    };

    return (
        <div
            onClick={handleViewDetails}
            className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[var(--gold)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden"
        >
            {/* Match Score Badge */}
            {matchScore !== undefined && matchScore > 0 && (
                <div className={`absolute top-0 right-0 px-3 py-1 rounded-bl-xl text-xs font-bold ${matchScore >= 70 ? 'bg-green-100 text-green-700' :
                    matchScore >= 40 ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-600'
                    }`}>
                    {matchScore}% Match
                </div>
            )}

            {/* Applied Badge */}
            {isApplied && (
                <div className="absolute top-0 right-24 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-b-lg">
                    Applied
                </div>
            )}

            <div className="flex items-start gap-4">
                {/* Company Logo */}
                <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-xl font-bold text-[var(--gold)] shrink-0 group-hover:bg-[var(--gold)] group-hover:text-gray-900 transition-colors duration-300">
                    {logo ? (
                        <img src={logo} alt={company} className="w-full h-full object-cover rounded-xl" />
                    ) : (
                        company.charAt(0)
                    )}
                </div>

                <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[var(--gold)] transition-colors pr-20">{title}</h3>
                            <p className="text-gray-600 font-medium">{company}</p>
                        </div>
                        <span className="px-3 py-1 bg-[var(--gold)]/10 text-[var(--gold)] text-xs font-semibold rounded-full uppercase tracking-wide border border-[var(--gold)]/20">
                            {type}
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-gray-500 mb-6">
                        <div className="flex items-center gap-1.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {location}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {salary}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {postedAt}
                        </div>
                    </div>

                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                            variant="outline"
                            className="flex-1 py-2 text-sm"
                            onClick={handleViewDetails}
                        >
                            View Details
                        </Button>
                        <Button
                            variant={isApplied ? "outline" : "primary"}
                            className={`flex-1 py-2 text-sm ${isApplied ? 'cursor-not-allowed opacity-50' : ''}`}
                            onClick={handleApply}
                            disabled={isApplied}
                        >
                            {isApplied ? 'Applied' : 'Apply Now'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
