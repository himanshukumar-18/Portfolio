import {
    Briefcase,
    Building2,
    CalendarClock,
    Clock3,
    Send,
} from "lucide-react";

/* ======================================================
   HEADER
====================================================== */

export const contactHeader = {
    badge: "Let's Connect",

    title: "LET'S BUILD SOMETHING AMAZING",

    description:
        "Whether you're looking for a Full Stack Developer, need help with a project, or simply want to connect, I'd love to hear from you.",
};

/* ======================================================
   AVAILABILITY
====================================================== */

export const availability = {
    status: "Available for Work",

    responseTime: "Within 24 Hours",

    location: "Hazaribagh, Jharkhand, India",

    workMode: [
        "Full-Time",
        "Freelance",
        "Remote",
    ],
};

/* ======================================================
   CONTACT INFO
====================================================== */

export const contactInfo = [
    {
        id: 1,
        title: "Email",
        value: "rajh5343@gmail.com",
        href: "mailto:rajh5343@gmail.com",
        copy: "rajh5343@gmail.com",
    },
    {
        id: 2,
        title: "Phone",
        value: "+91 6201030273",
        href: "tel:+916201030273",
        copy: "+916201030273",
    },
    {
        id: 3,
        title: "Location",
        value: "Hazaribagh, Jharkhand, India",
    },
    {
        id: 4,
        title: "Timezone",
        value: "IST (UTC +05:30)",
    },
];

/* ======================================================
   FORM OPTIONS
====================================================== */

export const projectTypes = [
    {
        value: "Portfolio Website",
        icon: Briefcase,
    },
    {
        value: "Business Website",
        icon: Building2,
    },
    {
        value: "Frontend Development",
        icon: Briefcase,
    },
    {
        value: "Backend Development",
        icon: Briefcase,
    },
    {
        value: "Full Stack Development",
        icon: Briefcase,
    },
    {
        value: "API Development",
        icon: Briefcase,
    },
    {
        value: "Bug Fix",
        icon: Briefcase,
    },
    {
        value: "Other",
        icon: Briefcase,
    },
];

export const budgetOptions = [
    "Below ₹20,000",
    "₹20,000 – ₹50,000",
    "₹50,000 – ₹1,00,000",
    "Above ₹1,00,000",
    "Let's Discuss",
];

export const timelineOptions = [
    {
        value: "ASAP",
        icon: Clock3,
    },
    {
        value: "1 Week",
        icon: CalendarClock,
    },
    {
        value: "2 Weeks",
        icon: CalendarClock,
    },
    {
        value: "1 Month",
        icon: CalendarClock,
    },
    {
        value: "Flexible",
        icon: CalendarClock,
    },
];

/* ======================================================
   WHATSAPP
====================================================== */

export const whatsappConfig = {
    phone: "916201030273",

    buttonText: "Send via WhatsApp",

    intro:
        "Hello Himanshu,\n\nI visited your portfolio and would like to discuss a project with you.",

    closing:
        "Looking forward to your response.\n\nThank you!",
};

/* ======================================================
   SOCIAL LINKS
====================================================== */

export const contactSocials = [
    {
        id: 1,
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/himanshu-kumar-8b5845313/",
        icon: "fa-brands fa-linkedin-in",
        accent: "var(--accent-blue)",
    },
    {
        id: 2,
        name: "GitHub",
        href: "https://github.com/himanshukumar-18",
        icon: "fa-brands fa-github",
        accent: "var(--accent-green)",
    },
    {
        id: 3,
        name: "Instagram",
        href: "https://www.instagram.com/himanshucodes.ai/",
        icon: "fa-brands fa-instagram",
        accent: "var(--accent-primary)",
    },
    {
        id: 4,
        name: "YouTube",
        href: "https://www.youtube.com/channel/UCrwrS_DH8Ny3FWzNk-7V6Ow",
        icon: "fa-brands fa-youtube",
        accent: "var(--accent-yellow)",
    },
];

/* ======================================================
   FOOTER CTA
====================================================== */

export const contactFooter = {
    badge: "Let's Build",

    title: "READY TO START YOUR NEXT PROJECT?",

    description:
        "I'm always excited to work on meaningful projects, solve real-world problems, and collaborate with great people. Let's create something impactful together.",

    buttonText: "Start a Conversation",

    buttonIcon: Send,
};