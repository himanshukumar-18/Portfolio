import {
    User,
    Code2,
    Target,
    Layers3,
    BrainCircuit,
    BriefcaseBusiness,
    BookOpen,
    Laptop,
    Palette,
    Server,
    Database,
    Rocket,
    Atom,
    FileCode2,
    GitBranch,
    Container,
    Cloud,
    ShieldCheck,
    Globe,
    Workflow,
    Boxes,
    Cpu,
} from "lucide-react";

import { portfolioStats } from "../../portfolioStats";

/* ===========================
   HEADER
=========================== */

export const aboutHeader = {
    badge: "About Me",

    heading: [
        "NOT JUST A",
        "DEVELOPER.",
        "I BUILD DIGITAL",
        "PRODUCTS.",
    ],

    description:
        "I'm a Full Stack Developer from Hazaribagh, Jharkhand. I specialize in building React frontends, Node.js and Django backends, and connecting them with real databases. Currently exploring AI integration with LangChain to build smarter applications.",
};

/* ===========================
   PROFILE CARD
=========================== */

export const profileCard = {
    name: "Himanshu Kumar",

    role: "Full Stack Developer",

    location: "Hazaribagh, Jharkhand, India",

    availability: "Available for Full-Time & Freelance",

    sticker: "Available",

    imageAlt: "Himanshu Kumar — Full Stack Developer",
};

/* ===========================
   STORY
=========================== */

export const storyCards = [
    {
        id: 1,
        icon: User,
        title: "Who I Am",
        color: "var(--accent-yellow)",

        description:
            "A self-taught Full Stack Developer from Jharkhand who started coding in 2024. I've shipped 3 production projects — including two live client websites — while pursuing my BCA degree.",
    },

    {
        id: 2,
        icon: Code2,
        title: "What I Build",
        color: "var(--accent-blue)",

        description:
            "Full-stack web applications using React, Node.js, Express, Django, MongoDB, and PostgreSQL. From REST APIs to responsive UIs, I own the entire stack.",
    },

    {
        id: 3,
        icon: Target,
        title: "My Goal",
        color: "var(--accent-primary)",

        description:
            "To join a product team where I can solve real problems, grow through collaboration, and contribute to software that creates measurable value for users.",
    },
];

/* ===========================
   STATS
=========================== */

export const aboutStats = [
    {
        id: 1,
        icon: Layers3,
        title: "Full Stack",
        subtitle: "React • Node • Django",
        color: "var(--accent-yellow)",
    },

    {
        id: 2,
        icon: BrainCircuit,
        title: "AI Learning",
        subtitle: "LLMs • LangChain",
        color: "var(--accent-blue)",
    },

    {
        id: 3,
        icon: BriefcaseBusiness,
        title: portfolioStats.projects,
        subtitle: "Live Projects",
        color: "var(--accent-primary)",
    },

    {
        id: 4,
        icon: BookOpen,
        title: "Learning",
        subtitle: "Every Day",
        color: "var(--accent-green)",
    },
];

/* ===========================
   JOURNEY
=========================== */

export const journey = [
    {
        id: 1,
        step: "2024 — START",
        icon: Laptop,
        title: "First Line of Code",
        color: "var(--accent-yellow)",

        description:
            "Wrote my first HTML page and fell into the rabbit hole. Started with freeCodeCamp and YouTube, then enrolled in Arena Animation's Full Stack program.",
    },

    {
        id: 2,
        step: "2024",
        icon: Palette,
        title: "Frontend Development",
        color: "var(--accent-primary)",

        description:
            "Mastered HTML, CSS, JavaScript, React, and Tailwind CSS. Built my first portfolio and multiple UI projects to solidify component-based thinking.",
    },

    {
        id: 3,
        step: "2024–2025",
        icon: Server,
        title: "Backend & APIs",
        color: "var(--accent-blue)",

        description:
            "Built REST APIs with Node.js, Express, and Django. Learned JWT authentication, database design, and deployed apps on Vercel and Render.",
    },

    {
        id: 4,
        step: "2025",
        icon: Database,
        title: "Client Projects",
        color: "var(--accent-green)",

        description:
            "Delivered 2+ live client websites — a catering business site and a school website — gaining experience with real requirements and real stakeholders.",
    },

    {
        id: 5,
        step: "NOW",
        icon: Rocket,
        title: "AI Integration & Growth",
        color: "var(--accent-primary)",

        description:
            "Pursuing BCA at Jharkhand Rai University, exploring LangChain and LangGraph for AI-powered applications, and actively seeking my first full-time role.",
    },
];

/* ===========================
   TECH STACK
=========================== */

export const techStack = [
    {
        name: "React",
        category: "Frontend",
        icon: Atom,
        color: "var(--accent-blue)",
    },

    {
        name: "JavaScript",
        category: "Language",
        icon: FileCode2,
        color: "var(--accent-yellow)",
    },

    {
        name: "Node.js",
        category: "Backend",
        icon: Server,
        color: "var(--accent-green)",
    },

    {
        name: "Django",
        category: "Backend",
        icon: Globe,
        color: "var(--accent-primary)",
    },

    {
        name: "PostgreSQL",
        category: "Database",
        icon: Database,
        color: "var(--accent-blue)",
    },

    {
        name: "Git",
        category: "Version Control",
        icon: GitBranch,
        color: "var(--accent-yellow)",
    },

    {
        name: "Docker",
        category: "DevOps",
        icon: Container,
        color: "var(--accent-primary)",
    },

    {
        name: "REST API",
        category: "API",
        icon: ShieldCheck,
        color: "var(--accent-green)",
    },

    {
        name: "Cloud",
        category: "Deployment",
        icon: Cloud,
        color: "var(--accent-blue)",
    },

    {
        name: "AI / LLM",
        category: "Exploring",
        icon: BrainCircuit,
        color: "var(--accent-yellow)",
    },
];

/* ===========================
   CURRENTLY LEARNING
=========================== */

export const learningNow = [
    {
        title: "LangChain",
        subtitle: "LLM Applications",
        icon: BrainCircuit,
        color: "var(--accent-yellow)",
        status: "Learning",
    },

    {
        title: "LangGraph",
        subtitle: "AI Workflows",
        icon: Workflow,
        color: "var(--accent-primary)",
        status: "Exploring",
    },

    {
        title: "System Design",
        subtitle: "Scalable Architecture",
        icon: Boxes,
        color: "var(--accent-blue)",
        status: "Studying",
    },

    {
        title: "Docker",
        subtitle: "Containers & CI/CD",
        icon: Container,
        color: "var(--accent-green)",
        status: "Practicing",
    },

    {
        title: "AI Integration",
        subtitle: "Real Projects",
        icon: Cpu,
        color: "var(--accent-yellow)",
        status: "Building",
    },

    {
        title: "DSA",
        subtitle: "Problem Solving",
        icon: BookOpen,
        color: "var(--accent-primary)",
        status: "Daily",
    },
];

/* ===========================
   QUOTE BANNER
=========================== */

export const quoteBanner = {
    badge: "My Philosophy",

    quote: [
        "I DON'T JUST",
        "WRITE CODE.",
        "I BUILD",
        "SOLUTIONS.",
    ],

    description:
        "Every project is an opportunity to learn, improve, and create something useful. My goal is to build clean, scalable, and user-friendly software while growing into a senior full-stack engineer.",

    footerTitle: "Let's Build Something Great.",

    buttonText: "Get In Touch",
};