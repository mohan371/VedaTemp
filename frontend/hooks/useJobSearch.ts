import { useState, useCallback } from 'react';

export interface Job {
    id: string;
    title: string;
    companyName: string;
    location: string;
    applyLink: string;
    logoUrl?: string;
    postedAt: string;
    description?: string;
    source: 'JSearch' | 'Adzuna' | 'Mock';
}

export const useJobSearch = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [source, setSource] = useState<string | null>(null);

    const fetchJobs = useCallback(async (query: string) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/jobs?query=${encodeURIComponent(query)}`);

            if (!response.ok) {
                throw new Error('Failed to fetch jobs');
            }

            const data = await response.json();
            setJobs(data.jobs);
            setSource(data.source);
        } catch (err) {
            setError((err as Error).message || 'Something went wrong');
            setJobs([]);
        } finally {
            setLoading(false);
        }
    }, []);

    return { jobs, loading, error, source, fetchJobs };
};
