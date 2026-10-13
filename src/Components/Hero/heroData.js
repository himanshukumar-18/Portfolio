import { portfolioStats } from "../../portfolioStats";

export const heroData = {
    // ==========================
    // Basic Information
    // ==========================
    greeting: "HEY, I'M",

    name: "HIMANSHU",

    role: "FULL STACK DEVELOPER",

    description:
        "I build full-stack web applications using Python, Django, and Django REST Framework, along with React for responsive, user-friendly frontends. I work with REST APIs, PostgreSQL, and modern deployment tools to develop scalable applications, while exploring AI integration to build smarter digital solutions.",

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
            href: "https://drive.google.com/file/d/1UzSSnVp65gbS6qeQGiIp5418xK82fAbI/view?usp=sharing",
            variant: "secondary",
            icon: "↓",
            download: true,         // ← HeroButtons now reads this
        },
    ],

    // ==========================
    // Core Tech Stack (trimmed to core 8)
    // ==========================
    techStack: [
        "Html",
        "Css",
        "JavaScript",
        "React",
        "Python",
        "OOP's",
        "Django",
        "rest api",
        "jwt",
        "auth",
        "postgresql",
        "sql",
        "Redis",
        "Clerk",
        "system design",
        "Ai integration",
        "langchain",
        "langgraph",
        "ci/cd",
        "docker",
        "git/github"
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