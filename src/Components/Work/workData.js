import {
    FolderKanban,
    Users,
    Clock3,
} from "lucide-react";

import { portfolioStats } from "../../portfolioStats";

import thumbnail from "../../images/thumbnail.png";
import tasteCateringImg from "../../images/taste-catering.png";
import udyanPublicSchool from "../../images/udyan-school.png";

/* ===============================
   SECTION CONTENT
================================ */

export const workSection = {
    badge: "Portfolio",

    heading: [
        "SELECTED",
        "WORK",
    ],

    description:
        "A collection of personal projects and client work that showcase my problem-solving approach, full-stack skills, and ability to ship production-ready applications.",
};

/* ===============================
   STATS — use central source of truth
================================ */

export const workStats = [
    {
        id: 1,
        value: portfolioStats.projects,
        label: "Projects",
        icon: FolderKanban,
        accent: "var(--accent-yellow)",
    },
    {
        id: 2,
        value: portfolioStats.clients,
        label: "Clients",
        icon: Users,
        accent: "var(--accent-primary)",
    },
    {
        id: 3,
        value: portfolioStats.yearsLearning,
        label: "Years Learning",
        icon: Clock3,
        accent: "var(--accent-blue)",
    },
];

/* ===============================
   PROJECT CATEGORIES
================================ */

export const projectCategories = [
    {
        id: "personal",
        label: "Personal",
    },
    {
        id: "client",
        label: "Client Work",
    },
];

/* ===============================
   PERSONAL PROJECTS
================================ */

export const personalProjects = [
    {
        id: 1,

        category: "personal",

        title: "SkillForge",

        shortTitle: "Learning Platform",

        image: thumbnail,

        featured: true,

        live: "https://skill-fore.vercel.app/",

        github:
            "https://github.com/himanshukumar-18/SkillFore",

        problem:
            "Students learning new skills lack a structured way to track their progress and stay consistent over time, leading to abandoned learning paths.",

        solution:
            "Built a full-stack learning platform with user authentication, personalized dashboards, and progress tracking so learners can set goals and monitor their improvement.",

        role:
            "Designed and developed the complete full-stack application — frontend, backend API, database schema, and deployment.",

        highlights: [
            "JWT Authentication",
            "User Dashboard",
            "Progress Tracking",
            "Responsive UI",
        ],

        technologies: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "JWT",
        ],
    },
];

/* ===============================
   CLIENT PROJECTS
================================ */

export const clientProjects = [
    {
        id: 2,

        category: "client",

        featured: false,

        title: "THE TASTE CATERING",

        shortTitle: "Business Website",

        image: tasteCateringImg,

        problem:
            "The catering business had no online presence, making it difficult for potential customers to discover their services, view the menu, or make inquiries.",

        solution:
            "Built a professional business website with a menu showcase, service details, image gallery, and a contact section to help the business reach customers online.",

        role: "Full Stack Developer",

        technologies: [
            "React",
            "Node.js",
            "MongoDB",
            "Express",
            "Tailwind CSS",
        ],

        live: "https://thetastecatering.com",
        github: "",  // Private client repository
    },

    {
        id: 3,

        category: "client",

        featured: false,

        title: "UDYAN PUBLIC SCHOOL",

        shortTitle: "School Website",

        image: udyanPublicSchool,

        live: "https://www.udayanpublicschool.org/",

        github: "",  // Private client repository

        role: "Frontend Developer",

        problem:
            "The school needed a modern, responsive website so that students, parents, and visitors could easily access information about admissions, events, and facilities on any device.",

        solution:
            "Built a fully responsive multi-page website with clean navigation, optimized layouts for mobile and desktop, and an improved user experience that reduced friction for visitors.",

        technologies: [
            "React",
            "Tailwind CSS",
            "JavaScript",
        ],

        highlights: [
            "Responsive Design",
            "Mobile Optimized",
            "Improved Navigation",
            "Modern UI",
        ],
    },
];

/* ===============================
   FOOTER
================================ */

export const workFooter = {
    badge: "Let's Build",

    title: "Have an idea in mind?",

    subtitle:
        "I'm always excited to work on meaningful projects, collaborate with great people, and continue learning through real-world development.",

    button: "Start a Conversation",
};

/* ===============================
   EXPORT ALL PROJECTS
================================ */

export const allProjects = [
    ...personalProjects,
    ...clientProjects,
];