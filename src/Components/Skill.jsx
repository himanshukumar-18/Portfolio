import { motion } from "framer-motion";

const skills = [
    {
        title: "Front-end",
        accent: "from-pink-500 to-rose-500",
        items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
        icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7">
                <path
                    d="M4 5h16v14H4z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
                <path
                    d="M4 9h16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
            </svg>
        ),
    },
    {
        title: "Back-end",
        accent: "from-violet-500 to-indigo-500",
        items: ["Node.js", "Express.js", "REST API"],
        icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7">
                <path
                    d="M12 2v20M2 12h20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
            </svg>
        ),
    },
    {
        title: "Database",
        accent: "from-emerald-500 to-teal-500",
        items: ["MongoDB", "MySQL"],
        icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7">
                <ellipse
                    cx="12"
                    cy="6"
                    rx="8"
                    ry="3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                />
                <path
                    d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                />
            </svg>
        ),
    },
    {
        title: "Version Control",
        accent: "from-cyan-500 to-sky-500",
        items: ["Git", "GitHub"],
        icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7">
                <path
                    d="M6 3v18M6 12h12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
            </svg>
        ),
    },
];

const Skills = () => {
    return (
        <section className="relative w-full py-32">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* SECTION HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <span className="uppercase tracking-[0.35em] text-xs text-[var(--text-muted)]">
                        Expertise
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[var(--text-primary)]">
                        Skills & Technologies
                    </h2>
                    <p className="mt-6 text-[var(--text-secondary)]">
                        Tools and technologies I use to build scalable,
                        performant, and maintainable web applications.
                    </p>
                </motion.div>

                {/* SKILLS GRID */}
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6 }}
                            className="
                relative
                rounded-3xl
                bg-white/5
                backdrop-blur-2xl
                border border-white/10
                p-6
                shadow-[0_30px_80px_rgba(0,0,0,0.5)]
                overflow-hidden
              "
                        >
                            {/* GRADIENT GLOW */}
                            <div
                                className={`
                  absolute -top-24 -right-24 w-48 h-48
                  bg-gradient-to-br ${skill.accent}
                  opacity-20 blur-3xl
                `}
                            />

                            {/* ICON */}
                            <div className="relative text-[var(--accent-primary)]">
                                {skill.icon}
                            </div>

                            {/* TITLE */}
                            <h3 className="relative mt-4 text-lg font-semibold text-[var(--text-primary)]">
                                {skill.title}
                            </h3>

                            {/* SKILL LIST */}
                            <ul className="relative mt-4 space-y-2 text-sm text-[var(--text-secondary)]">
                                {skill.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
