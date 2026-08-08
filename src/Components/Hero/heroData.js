import { portfolioStats } from "../../portfolioStats";

export const heroData = {
    // ==========================
    // Basic Information
    // ==========================
    greeting: "HEY, I'M",

    name: "HIMANSHU",

    role: "FULL STACK DEVELOPER",

    description:
        "I design and build full-stack web applications — from responsive React frontends to Node.js and Django backends. I've shipped production projects for real clients and I'm actively exploring AI integration in my development workflow.",

    // ==========================
    // Availability
    // ==========================
    availability: {
        title: "AVAILABLE",
        subtitle: "FOR FREELANCE & FULL-TIME",
        status: true,
    },

    // ==========================
    // CTA Buttons
    // ==========================
    buttons: [
        {
            id: 1,
            title: "VIEW MY WORK",
            href: "#Work",          // ← was "#projects" — section ID is "Work"
            variant: "primary",
            icon: "→",
        },
        {
            id: 2,
            title: "DOWNLOAD CV",
            href: "/resume.pdf",
            variant: "secondary",
            icon: "↓",
            download: true,         // ← HeroButtons now reads this
        },
    ],

    // ==========================
    // Core Tech Stack (trimmed to core 8)
    // ==========================
    techStack: [
        "Node.js",
        "Django",
        "Rest Api",
        "MongoDB",
        "PostgreSQL",
        "Docker",
        "LangChain",
        "LangGraph",
        "Git",
        "GitHub"
    ],

    // ==========================
    // Quick Stats — use central source of truth
    // ==========================
    stats: [
        {
            value: portfolioStats.projects,
            label: "Projects",
        },
        {
            value: portfolioStats.clients,
            label: "Clients",
        },
        {
            value: portfolioStats.technologies,
            label: "Technologies",
        },
    ],

    // ==========================
    // Workspace Sticky Notes
    // ==========================
    workspaceNotes: [
        "AI",
        "MERN",
        "DJANGO",
        "DOCKER",
        "API",
        "JWT",
        "REST",
        "SQL",
    ],

    // ==========================
    // SEO
    // ==========================
    seo: {
        title: "Himanshu Kumar | Full Stack Developer",
        description:
            "Portfolio of Himanshu Kumar — Full Stack Developer specializing in React, Node.js, Django, and AI-integrated web applications.",
    },
};