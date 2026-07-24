// src/components/About/aboutData.js

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
    CheckCircle2,
} from "lucide-react";

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
        "I'm a passionate Full Stack Developer who enjoys building clean, responsive, and user-friendly web applications. I love learning new technologies and solving real-world problems through code.",
};

/* ===========================
   PROFILE CARD
=========================== */

export const profileCard = {
    name: "Himanshu Kumar",

    role: "Full Stack Developer",

    location: "India",

    availability: "Available for Full-Time & Freelance",

    sticker: "Available",

    imageAlt: "Himanshu Kumar",
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
            "I'm a passionate Full Stack Developer who enjoys learning modern technologies, solving real-world problems, and continuously improving my skills.",
    },

    {
        id: 2,
        icon: Code2,
        title: "What I Build",
        color: "var(--accent-blue)",

        description:
            "I build responsive websites, REST APIs, dashboards, and full-stack applications using React, Node.js, Django, PostgreSQL, Docker, and modern development tools.",
    },

    {
        id: 3,
        icon: Target,
        title: "My Goal",
        color: "var(--accent-primary)",

        description:
            "My goal is to grow as a software developer, contribute to meaningful products, collaborate with talented teams, and build software that creates value.",
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
        title: "Projects",
        subtitle: "Freelance & Personal",
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
        step: "STEP 01",
        icon: Laptop,
        title: "Started Programming",
        color: "var(--accent-yellow)",

        description:
            "Started learning programming fundamentals and web development.",
    },

    {
        id: 2,
        step: "STEP 02",
        icon: Palette,
        title: "Frontend Development",
        color: "var(--accent-primary)",

        description:
            "Learned HTML, CSS, JavaScript, React, and Tailwind CSS.",
    },

    {
        id: 3,
        step: "STEP 03",
        icon: Server,
        title: "Backend Development",
        color: "var(--accent-blue)",

        description:
            "Built REST APIs using Node.js, Express.js, Python, and Django.",
    },

    {
        id: 4,
        step: "STEP 04",
        icon: Database,
        title: "Databases & DevOps",
        color: "var(--accent-green)",

        description:
            "Worked with MongoDB, PostgreSQL, Docker, Git, and deployment.",
    },

    {
        id: 5,
        step: "TODAY",
        icon: Rocket,
        title: "Building Real Projects",
        color: "var(--accent-primary)",

        description:
            "Building portfolio projects, freelance work, and learning every day.",
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
        category: "Learning",
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
        subtitle: "Containers",
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
   QUOTE
=========================== */

export const quoteBanner = {
    badge: "Final Note",

    quote: [
        "I DON'T JUST",
        "WRITE CODE.",
        "I BUILD",
        "SOLUTIONS.",
    ],

    description:
        "Every project is an opportunity to learn, improve, and create something useful. My goal is to build clean, scalable, and user-friendly software while growing as a Full Stack Developer.",

    footerTitle: "Let's Build Something Great.",

    footerText: "Thanks for Visiting",

    buttonText: "Get In Touch",
};