import {
    Award,
    BookOpen,
    Code2,
    GraduationCap,
} from "lucide-react";

// Certificate Images
import arenaCertificateImg from "../../images/arena.jpg";
import internship_1 from "../../images/inter_1.jpg"


/* ======================================================
   SECTION HEADER
====================================================== */

export const achievementsHeader = {
    badge: "Achievements",
    title: "CERTIFICATIONS & LEARNING",
    description:
        "Every course, project, and certification has helped me improve my development skills. I enjoy learning modern technologies and applying them to real-world projects.",
};

/* ======================================================
   STATS
====================================================== */

export const achievementStats = [
    {
        id: 1,
        icon: Award,
        value: "01",
        label: "Certificate",
        accent: "var(--accent-primary)",
    },
    {
        id: 2,
        icon: Code2,
        value: "15+",
        label: "Technologies",
        accent: "var(--accent-yellow)",
    },
    {
        id: 3,
        icon: GraduationCap,
        value: "2023",
        label: "Learning Started",
        accent: "var(--accent-blue)",
    },
    {
        id: 4,
        icon: BookOpen,
        value: "∞",
        label: "Learning Mindset",
        accent: "var(--accent-green)",
    }
];

/* ======================================================
   CERTIFICATES
====================================================== */

export const certificates = [
    {
        id: 1,

        featured: true,

        title: "Full Stack Web Development",

        issuer: "Arena Animation",

        year: "2023 – 2025",

        image: arenaCertificateImg,

        pdf: "https://drive.google.com/file/d/1IjQ7GtZykmXTut2XgvxPIVXTER1hc4pA/view?usp=sharing",

        description:
            "Completed an intensive Full Stack Web Development program covering frontend, backend, databases, deployment, and real-world application development.",

        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST API",
            "Git",
            "GitHub",
        ],

        credential: "Completed",

        accent: "var(--accent-yellow)",
    },

    {
        id: 1,

        featured: true,

        title: "Web Development Internship",

        issuer: "Zaalima Development Private Limited",

        year: "April 2026 – June 2026",

        image: internship_1,

        pdf: "https://drive.google.com/file/d/18RQ3jvOLlcKb4PoXparuzaOIkxcB3p_p/view?usp=sharing",

        description:
            "Completed a two-month Web Development Internship, collaborating with a team to develop secure authentication features using Node.js, Express.js, MongoDB, JWT, and REST APIs. Gained practical experience with backend development, Git-based collaboration, and clean coding practices.",

        skills: [
            "JavaScript",
            "React",
            "Git",
            "GitHub",
            "Problem Solving",
            "Node.js",
            "Express.js",
            "Jwt",
        ],

        credential: "Completed",

        duration: "25 Apr 2026 – 25 Jun 2026",

        domain: "Web Development",

        certificateId: "ad6e7737562856a2564",

        employeeId: "d3746297b07005c5988",

        accent: "var(--accent-green)",
    }
];

/* ======================================================
   QUOTE
====================================================== */

export const achievementQuote = {
    text:
        "Learning never stops. Every project, every challenge, and every mistake helps me become a better developer.",
    author: "Himanshu Kumar",
};

/* ======================================================
   FOOTER CTA
====================================================== */

export const achievementFooter = {
    badge: "Keep Learning",
    title: "Always Improving My Skills",
    description:
        "I'm continuously exploring modern technologies, building real-world projects, and improving my development skills every day.",
    button: "Let's Connect",
};