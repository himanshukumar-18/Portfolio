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
        items: ["Node.js", "Express.js", "REST API", "Python", "Django"],
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
        items: ["MongoDB", "MySQL", "PostgreSQL"],
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
        items: ["Git", "GitHub", "GitLab", "Postman"],
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
            {/* Background */}
            <div className="absolute inset-0 bg-[var(--bg-primary)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

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
                    <p className="mt-6 text-lg text-[var(--tex  t-secondary)]">
                        A collection of technologies, frameworks, and tools I use to transform ideas into production-ready applications.
                    </p>
                </motion.div>

                {/* SKILLS GRID */}
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
  key={index}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.7,
    delay: index * 0.12,
  }}
  whileHover={{
    y: -12,
    scale: 1.02,
  }}
  className="
    relative
    overflow-hidden
    rounded-3xl
    bg-white/5
    backdrop-blur-2xl
    border border-white/10
    p-6
    group
  "
>
  {/* Animated Border Beam */}
  <motion.div
    animate={{
      x: ["-100%", "250%"],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      top-0
      left-0
      h-[2px]
      w-24
      bg-[var(--accent-primary)]
      blur-[1px]
    "
  />

  {/* Hover Glow */}
  <div
    className="
      absolute
      inset-0
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-500
      bg-[radial-gradient(circle_at_top,var(--accent-primary),transparent_60%)]
      blur-3xl
    "
  />

  {/* Floating Icon */}
  <motion.div
    whileHover={{
      rotate: 8,
      scale: 1.15,
    }}
    className="
      relative
      text-[var(--accent-primary)]
      mb-6
    "
  >
    {skill.icon}
  </motion.div>

  {/* Title */}
  <h3
    className="
      relative
      text-xl
      font-semibold
      text-[var(--text-primary)]
      mb-5
    "
  >
    {skill.title}
  </h3>

  {/* Skills */}
  <ul className="relative space-y-3">
    {skill.items.map((item, i) => (
      <motion.li
        key={i}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: i * 0.08,
        }}
        className="
          flex
          items-center
          gap-3
          text-[var(--text-secondary)]
        "
      >
        <motion.span
          animate={{
            scale: [1, 1.4, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            delay: i * 0.2,
          }}
          className="
            w-2
            h-2
            rounded-full
            bg-[var(--accent-primary)]
          "
        />

        {item}
      </motion.li>
    ))}
  </ul>

  {/* Bottom Animated Line */}
  <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: "100%" }}
    transition={{
      duration: 1.2,
      delay: 0.3,
    }}
    className="
      absolute
      bottom-0
      left-0
      h-[1px]
      bg-[var(--accent-primary)]
    "
  />
</motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

