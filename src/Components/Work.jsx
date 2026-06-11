import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Projectcard from "./Projectcard";

import thumbnail from "../images/thumbnail.png";

// ================= PERSONAL PROJECTS =================

const personalProjects = [
    {
        title: "SkillForge",
        image: thumbnail,
        live: "https://skill-fore.vercel.app/",
        github: "https://github.com/himanshukumar-18/SkillFore",

        problem:
            "Traditional learning platforms lack personalized progress tracking and skill development monitoring.",

        role:
            "Built a full-stack learning platform with authentication, dashboards, progress analytics, and responsive UI.",

        tech: [
            "React",
            "Node.js",
            "MongoDB",
            "Express",
            "Tailwind CSS",
            "JWT",
        ],

        improvement:
            "Added real-time analytics, responsive design, and scalable architecture.",
    },
];

// ================= FREELANCE PROJECTS =================

const freelanceProjects = [
    {
        title: "The Taste Catering",
        link: "https://thetastecatering.com/",
        description:
            "Developed and maintained a full-stack catering management platform with an admin dashboard for managing service packages, gallery updates, and website content. Implemented an inquiry system that automatically sends customer messages directly to the business owner via email, enabling seamless communication and lead management. Regularly optimized performance, updated content, and enhanced the user experience across desktop and mobile devices.",
    },

    {
        title: "Skills Nation",
        link: "https://skillsnation.in/",
        description:
            "Developed the frontend of an educational platform based on the client's Figma design, focusing on creating a clean, modern, and responsive user interface. Implemented pixel-perfect layouts, optimized user experience across devices, and ensured smooth navigation with attention to performance and design consistency.",
    },

    {
        title: "Udayan Public School",
        link: "https://www.udayanpublicschool.org/",
        description:
            "Developed the frontend of a school website based on the client's requirements and design specifications. Created responsive layouts, improved navigation, and ensured a user-friendly experience across desktop, tablet, and mobile devices.",
    },
];

const Work = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") setActiveIndex(null);
        };

        window.addEventListener("keydown", handleEscape);

        return () =>
            window.removeEventListener("keydown", handleEscape);
    }, []);

    return (
        <section
            id="Work"
            className="relative py-28 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-[var(--bg-secondary)]" />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
                {/* ================= HEADER ================= */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <span className="uppercase tracking-[0.35em] text-xs text-[var(--text-muted)]">
                        Portfolio
                    </span>

                    <h2 className="mt-4 text-4xl md:text-6xl font-extrabold text-[var(--text-primary)]">
                        Selected{" "}
                        <span className="text-[var(--accent-primary)]">
                            Projects
                        </span>
                    </h2>

                    <p className="mt-6 text-lg text-[var(--text-secondary)]">
                        A collection of personal and client projects showcasing
                        problem-solving, modern development practices, and real-world
                        experience.
                    </p>
                </motion.div>

                {/* ================= STATS ================= */}

                <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
                    {[
                        { value: "10+", label: "Projects" },
                        { value: "3+", label: "Clients" },
                        { value: "100%", label: "Dedication" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="
                rounded-2xl
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                py-6
                text-center
              "
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                {item.value}
                            </h3>

                            <p className="mt-2 text-sm text-[var(--text-muted)]">
                                {item.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* ================= PERSONAL PROJECTS ================= */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24"
                >
                    <h3 className="text-3xl font-bold text-[var(--text-primary)]">
                        🚀 Personal Projects
                    </h3>

                    <p className="mt-2 text-[var(--text-secondary)]">
                        Projects built to solve real-world problems and explore modern
                        technologies.
                    </p>

                    <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {personalProjects.map((project, index) => (
                            <Projectcard
                                key={index}
                                project={project}
                                isOpen={activeIndex === index}
                                onOpen={() => setActiveIndex(index)}
                                onClose={() => setActiveIndex(null)}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* ================= FREELANCE PROJECTS ================= */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-28"
                >
                    <h3 className="text-3xl font-bold text-[var(--text-primary)]">
                        💼 Freelance Client Work
                    </h3>

                    <p className="mt-2 text-[var(--text-secondary)]">
                        Websites and solutions delivered for businesses and educational
                        organizations.
                    </p>

                    <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {freelanceProjects.map((project, index) => (
                            <motion.a
                                key={index}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                }}
                                className="
                  block
                  rounded-3xl
                  bg-white/5
                  border border-white/10
                  backdrop-blur-xl
                  p-6
                  transition-all
                  duration-300
                  hover:border-[var(--accent-primary)]
                "
                            >
                                <h4 className="text-xl font-semibold text-white">
                                    {project.title}
                                </h4>

                                <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                                    {project.description}
                                </p>

                                <div className="mt-6 text-[var(--accent-primary)] font-medium">
                                    Visit Website →
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Work;