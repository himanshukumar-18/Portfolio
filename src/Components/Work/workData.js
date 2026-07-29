import {
    FolderKanban,
    Users,
    Clock3,
} from "lucide-react";

import thumbnail from "../../images/thumbnail.png";
import tasteCateringImg from "../../images/taste-catering.png";
import udyanPublicSchool from "../../images/udyan-school.png"

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
        "A collection of personal projects and client work that showcase my learning, problem-solving, and full stack development experience.",
};

/* ===============================
   STATS
================================ */

export const workStats = [
    {
        id: 1,
        value: "04+",
        label: "Projects",
        icon: FolderKanban,
        accent: "var(--accent-yellow)",
    },
    {
        id: 2,
        value: "03+",
        label: "Clients",
        icon: Users,
        accent: "var(--accent-primary)",
    },
    {
        id: 3,
        value: "1+",
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
            "Students often struggle to track their learning progress and stay motivated while building new skills.",

        solution:
            "Built a modern learning platform with authentication, dashboards, progress tracking, and a responsive user interface.",

        role:
            "Designed and developed the complete full stack application.",

        highlights: [
            "Authentication",
            "Dashboard",
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
        id: 1,
        title: "THE TASTE CATERING",
        shortTitle: "Business Website",

        image: tasteCateringImg,   // ✅ Required

        problem:
            "...",

        solution:
            "...",

        role: "Full Stack Developer",

        technologies: [
            "React",
            "Node.js",
            "MongoDB",
            "Express",
            "Tailwind CSS",
        ],

        live: "https://thetastecatering.com",
        github: "",
    },

    {
        id: 3,

        category: "client",

        featured: false,

        title: "UDAYAN PUBLIC SCHOOL",

        shortTitle: "School Website",

        image: udyanPublicSchool, // Import this image at the top

        live: "https://www.udayanpublicschool.org/",

        github: "", // Private repository

        role: "Frontend Developer",

        problem:
            "The school needed a modern, responsive website that would make it easier for students, parents, and visitors to access information on any device.",

        solution:
            "Built responsive pages with a clean user interface, improved navigation, and optimized the website for desktop, tablet, and mobile users to provide a better browsing experience.",

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
    }
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