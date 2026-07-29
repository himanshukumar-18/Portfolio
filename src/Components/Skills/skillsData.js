import {
    Code2,
    Server,
    Database,
    BrainCircuit,
    Container,
    Wrench,
} from "lucide-react";

export const skillsSection = {
    badge: "My Toolbox",

    heading: [
        "TECHNOLOGIES",
        "I WORK WITH",
    ],

    description:
        "A collection of technologies, frameworks, and tools I use to build responsive, scalable, and modern Ai based web applications while continuously improving my development skills.",
};

export const skillCategories = [
    {
        id: 1,
        title: "Frontend",

        icon: Code2,

        accent: "var(--accent-yellow)",

        description:
            "Building responsive, accessible, and modern user interfaces.",

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "React",
            "Redux Toolkit",
            "Tailwind CSS",
            "Framer Motion",
        ],
    },

    {
        id: 2,

        title: "Backend",

        icon: Server,

        accent: "var(--accent-primary)",

        description:
            "Developing secure APIs and scalable backend applications.",

        technologies: [
            "Node.js",
            "Express.js",
            "Python",
            "Django",
            "REST API",
            "JWT Authentication",
        ],
    },

    {
        id: 3,

        title: "Database",

        icon: Database,

        accent: "var(--accent-blue)",

        description:
            "Designing and managing structured and NoSQL databases.",

        technologies: [
            "MongoDB",
            "PostgreSQL",
            "MySQL",
        ],
    },

    {
        id: 4,

        title: "AI & LLM",

        icon: BrainCircuit,

        accent: "var(--accent-green)",

        description:
            "Learning modern AI tools and integrating LLM-powered features.",

        technologies: [
            "OpenAI API",
            "LangChain",
            "LangGraph",
        ],
    },

    {
        id: 5,

        title: "DevOps",

        icon: Container,

        accent: "var(--accent-yellow)",

        description:
            "Containerization, deployment, and version control workflows.",

        technologies: [
            "CI/CD (Basic)",
            "Docker",
            "Git",
            "GitHub",
            "Vercel",
            "Render",
        ],
    },

    {
        id: 6,

        title: "Tools",

        icon: Wrench,

        accent: "var(--accent-primary)",

        description:
            "Daily development tools for designing, testing, and collaboration.",

        technologies: [
            "VS Code",
            "Postman",
            "npm",
            "Linux",
        ],
    },
];

export const skillsFooter = {
    title: "ALWAYS LEARNING.",

    subtitle:
        "Technology evolves every day, and so do I. I enjoy learning new tools, improving my skills, and building better software with every project.",
};