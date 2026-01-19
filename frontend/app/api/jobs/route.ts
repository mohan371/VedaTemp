import { NextResponse } from 'next/server';

// ==========================================
// TYPES & INTERFACES
// ==========================================
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

// ==========================================
// CONFIGURATION
// ==========================================
const JSEARCH_KEY = process.env.JSEARCH_API_KEY || 'REPLACE_WITH_JSEARCH_KEY';
const ADZUNA_APP_ID = process.env.ADZUNA_APP_ID || 'REPLACE_WITH_ADZUNA_APP_ID';
const ADZUNA_APP_KEY = process.env.ADZUNA_APP_KEY || 'REPLACE_WITH_ADZUNA_APP_KEY';

// ==========================================
// NORMALIZATION HELPERS
// ==========================================

// Normalize JSearch Data
const normalizeJSearch = (data: any): Job[] => { // eslint-disable-line @typescript-eslint/no-explicit-any
    if (!data?.data) return [];

    return data.data.map((job: any) => ({ // eslint-disable-line @typescript-eslint/no-explicit-any
        id: job.job_id,
        title: job.job_title,
        companyName: job.employer_name,
        location: `${job.job_city || ''}, ${job.job_country || ''}`,
        applyLink: job.job_apply_link,
        logoUrl: job.employer_logo,
        postedAt: job.job_posted_at_datetime_utc,
        description: job.job_description,
        source: 'JSearch'
    }));
};

// Normalize Adzuna Data
const normalizeAdzuna = (data: any): Job[] => { // eslint-disable-line @typescript-eslint/no-explicit-any
    if (!data?.results) return [];

    return data.results.map((job: any) => ({ // eslint-disable-line @typescript-eslint/no-explicit-any
        id: String(job.id),
        title: job.title,
        companyName: job.company?.display_name || 'Unknown Company',
        location: job.location?.display_name || 'Unknown Location',
        applyLink: job.redirect_url,
        logoUrl: undefined, // Adzuna often doesn't provide logos
        postedAt: job.created,
        description: job.description,
        source: 'Adzuna'
    }));
};

// ==========================================
// API HANDLER
// ==========================================
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query') || 'Developer';

    console.log(`[JobEngine] Starting search for: "${query}"`);

    // ---------------------------------------------------------
    // ATTEMPT 1: JSearch (Primary Engine)
    // ---------------------------------------------------------
    try {
        console.log('[JobEngine] Attempting JSearch...');

        const response = await fetch(`https://jsearch.p.rapidapi.com/search?query=${query}&num_pages=1`, {
            headers: {
                'X-RapidAPI-Key': JSEARCH_KEY,
                'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
            }
        });

        if (response.ok) {
            const data = await response.json();
            const normalizedJobs = normalizeJSearch(data);

            if (normalizedJobs.length > 0) {
                console.log(`[JobEngine] Success! JSearch returned ${normalizedJobs.length} jobs.`);
                return NextResponse.json({ jobs: normalizedJobs, source: 'JSearch' });
            }
        } else {
            console.warn(`[JobEngine] JSearch failed with status: ${response.status}`);
        }
    } catch (error) {
        console.error('[JobEngine] JSearch Error:', error);
    }

    // ---------------------------------------------------------
    // ATTEMPT 2: Adzuna (Backup Battery)
    // ---------------------------------------------------------
    try {
        console.log('[JobEngine] Switching to Adzuna (Fallback)...');

        // Adzuna requires country code (e.g., 'us', 'gb', 'in')
        // For demo, defaulting to 'us' or 'in' based on preference
        const country = 'in';
        const url = `https://api.adzuna.com/v1/api/jobs/${country}/search/1?app_id=${ADZUNA_APP_ID}&app_key=${ADZUNA_APP_KEY}&what=${query}`;

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            const normalizedJobs = normalizeAdzuna(data);

            if (normalizedJobs.length > 0) {
                console.log(`[JobEngine] Success! Adzuna returned ${normalizedJobs.length} jobs.`);
                return NextResponse.json({ jobs: normalizedJobs, source: 'Adzuna' });
            }
        } else {
            console.warn(`[JobEngine] Adzuna failed with status: ${response.status}`);
        }
    } catch (error) {
        console.error('[JobEngine] Adzuna Error:', error);
    }

    // ---------------------------------------------------------
    // FALLBACK: Mock Data (Last Resort)
    // ---------------------------------------------------------
    console.log('[JobEngine] All APIs failed. Returning Mock Data.');
    const mockJobs: Job[] = [
        {
            id: 'mock-1',
            title: 'Frontend Developer (Mock)',
            companyName: 'Tech Corp',
            location: 'Remote',
            applyLink: '#',
            postedAt: new Date().toISOString(),
            description: 'This is a mock job because API quotas are exceeded.',
            source: 'Mock'
        },
        {
            id: 'mock-2',
            title: 'Backend Engineer (Mock)',
            companyName: 'Data Systems',
            location: 'New York, NY',
            applyLink: '#',
            postedAt: new Date().toISOString(),
            description: 'This is a mock job because API quotas are exceeded.',
            source: 'Mock'
        }
    ];

    return NextResponse.json({ jobs: mockJobs, source: 'Mock' });
}
