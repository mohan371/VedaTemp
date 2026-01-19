

export type BotMessage = {
    id: string;
    text: string;
    sender: "bot" | "user";
    type?: "text" | "options" | "job-list" | "uni-list" | "form";
    options?: { label: string; action: string; value?: string }[];
    data?: any[]; // eslint-disable-line @typescript-eslint/no-explicit-any
};

export const INITIAL_MESSAGE: BotMessage = {
    id: "init-1",
    text: "Hi there! I'm VedaBot 🤖. How can I help you today?",
    sender: "bot",
    type: "options",
    options: [
        { label: "Find Jobs 💼", action: "SHOW_JOB_OPTIONS" },
        { label: "University Guide 🎓", action: "SHOW_UNI_OPTIONS" },
        { label: "Contact Support 📞", action: "SHOW_LEAD_FORM" },
    ],
};

// Simulated Database for simplified search
const JOBS_DB = [
    { id: 1, title: "Software Engineer", company: "TechCorp", location: "Remote" },
    { id: 2, title: "Marketing Manager", company: "BrandInc", location: "New York" },
    { id: 3, title: "Data Analyst", company: "DataViz", location: "London" },
    { id: 4, title: "React Developer", company: "WebSolutions", location: "Remote" },
];

const UNIS_DB = [
    { id: 1, name: "Harvard University", country: "USA" },
    { id: 2, name: "University of Oxford", country: "UK" },
    { id: 3, name: "University of Toronto", country: "Canada" },
    { id: 4, name: "Stanford University", country: "USA" },
];

export const analyzeInput = (input: string): BotMessage => {
    const text = input.toLowerCase();

    // 1. Job Search Intent
    if (text.includes("job") || text.includes("work") || text.includes("hiring")) {
        return {
            id: Date.now().toString(),
            text: "I can help with that! What kind of role are you looking for?",
            sender: "bot",
            type: "options",
            options: [
                { label: "Software / IT", action: "SEARCH_JOBS", value: "software" },
                { label: "Marketing", action: "SEARCH_JOBS", value: "marketing" },
                { label: "Browse All Jobs", action: "NAVIGATE", value: "/jobs/search" },
            ],
        };
    }

    // 2. University Search Intent
    if (text.includes("university") || text.includes("college") || text.includes("study")) {
        return {
            id: Date.now().toString(),
            text: "Exciting! Where are you planning to study?",
            sender: "bot",
            type: "options",
            options: [
                { label: "USA 🇺🇸", action: "SEARCH_UNIS", value: "usa" },
                { label: "UK 🇬🇧", action: "SEARCH_UNIS", value: "uk" },
                { label: "Canada 🇨🇦", action: "SEARCH_UNIS", value: "canada" },
                { label: "View All Universities", action: "NAVIGATE", value: "/universities" },
            ],
        };
    }

    // 3. Navigation Shortcuts
    if (text.includes("profile") || text.includes("account")) {
        return {
            id: Date.now().toString(),
            text: "Here is a link to your profile:",
            sender: "bot",
            type: "options",
            options: [
                { label: "Go to Profile", action: "NAVIGATE", value: "/profile" }
            ]
        };
    }

    // 4. Support / Contact
    if (text.includes("help") || text.includes("support") || text.includes("contact")) {
        return {
            id: Date.now().toString(),
            text: "Please fill out this form so we can connect you with the right team.",
            sender: "bot",
            type: "form",
        };
    }

    // Default Fallback
    return {
        id: Date.now().toString(),
        text: "I'm not sure I understood that. Could you try choosing an option?",
        sender: "bot",
        type: "options",
        options: [
            { label: "Find Jobs", action: "SHOW_JOB_OPTIONS" },
            { label: "Universities", action: "SHOW_UNI_OPTIONS" },
            { label: "Contact Us", action: "SHOW_LEAD_FORM" },
        ],
    };
};

export const handleAction = (action: string, value?: string): BotMessage => {
    switch (action) {
        case "SHOW_JOB_OPTIONS":
            return {
                id: Date.now().toString(),
                text: "Great! Pick a category or tell me what you're looking for.",
                sender: "bot",
                type: "options",
                options: [
                    { label: "Developer", action: "SEARCH_JOBS", value: "developer" },
                    { label: "Designer", action: "SEARCH_JOBS", value: "designer" },
                    { label: "Browse Page", action: "NAVIGATE", value: "/jobs/search" },
                ],
            };

        case "SEARCH_JOBS":
            const query = value?.toLowerCase() || "";
            // Simple filter simulation
            const jobs = JOBS_DB.filter(j =>
                j.title.toLowerCase().includes(query) ||
                j.location.toLowerCase().includes(query)
            );

            return {
                id: Date.now().toString(),
                text: `I found ${jobs.length} jobs matching "${value}".`,
                sender: "bot",
                type: "job-list",
                data: jobs.length > 0 ? jobs : [],
                options: [{ label: "Search Again", action: "SHOW_JOB_OPTIONS" }]
            };

        case "SHOW_UNI_OPTIONS":
            return {
                id: Date.now().toString(),
                text: "Which destination interests you?",
                sender: "bot",
                type: "options",
                options: [
                    { label: "USA", action: "SEARCH_UNIS", value: "usa" },
                    { label: "UK", action: "SEARCH_UNIS", value: "uk" },
                    { label: "Canada", action: "SEARCH_UNIS", value: "canada" },
                    { label: "View All", action: "NAVIGATE", value: "/universities" },
                ],
            };

        case "SEARCH_UNIS":
            const country = value?.toLowerCase() || "";
            const unis = UNIS_DB.filter(u => u.country.toLowerCase() === country);

            return {
                id: Date.now().toString(),
                text: `Here are some top universities in ${value?.toUpperCase()}.`,
                sender: "bot",
                type: "uni-list",
                data: unis,
                options: [{ label: "Check another country", action: "SHOW_UNI_OPTIONS" }]
            };

        case "SHOW_SUPPORT":
        case "SHOW_LEAD_FORM":
            return {
                id: Date.now().toString(),
                text: "Please fill out this form below:",
                sender: "bot",
                type: "form",
            };

        default:
            return {
                id: Date.now().toString(),
                text: "My system is updating... Try again later!",
                sender: "bot",
            };
    }
};
