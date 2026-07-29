import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const educationData = [
    {
        id: "01",
        year: "2025 — 2028",
        status: "IN PROGRESS",
        statusColor: "bg-[var(--accent-green)]",
        accentColor: "bg-[var(--accent-blue)]",
        borderColor: "border-[var(--border-primary)]",
        shadowColor: "shadow-[8px_8px_0px_var(--border-primary)]",
        hoverShadow: "hover:shadow-[12px_12px_0px_var(--border-primary)]",
        degree: "BACHELOR OF COMPUTER APPLICATIONS",
        shortDegree: "BCA",
        institute: "Jharkhand Rai University",
        location: "Ranchi, Jharkhand",
        description:
            "Pursuing a Bachelor's degree focused on software development, data structures, algorithms, databases, and modern web technologies. Building a rock-solid CS foundation alongside real-world projects.",
        highlights: ["Software Development", "Data Structures", "Databases", "Web Technologies"],
        icon: "🎓",
    },
    {
        id: "02",
        year: "2023 — 2025",
        status: "COMPLETED",
        statusColor: "bg-[var(--accent-primary)]",
        accentColor: "bg-[var(--accent-yellow)]",
        borderColor: "border-[var(--border-primary)]",
        shadowColor: "shadow-[8px_8px_0px_var(--border-primary)]",
        hoverShadow: "hover:shadow-[12px_12px_0px_var(--border-primary)]",

        degree: "HIGHER SECONDARY EDUCATION (CLASS XII)",
        shortDegree: "INTERMEDIATE",

        institute: "Barhi +2 High School",
        location: "Hazaribagh, Jharkhand",

        description:
            "Completed Higher Secondary Education with a focus on building a strong academic foundation, improving analytical thinking, and developing problem-solving skills that sparked my interest in technology and software development.",

        highlights: [
            "Higher Secondary",
            "Academic Foundation",
            "Problem Solving",
            "Technology Interest"
        ],

        icon: "🎓",
    },
    {
        id: "03",
        year: "2021 — 2023",
        status: "COMPLETED",
        statusColor: "bg-[var(--accent-primary)]",
        accentColor: "bg-[var(--accent-blue)]",
        borderColor: "border-[var(--border-primary)]",
        shadowColor: "shadow-[8px_8px_0px_var(--border-primary)]",
        hoverShadow: "hover:shadow-[12px_12px_0px_var(--border-primary)]",

        degree: "SECONDARY EDUCATION (CLASS X)",
        shortDegree: "MATRICULATION",

        institute: "Vivekananda Central School",
        location: "Hazaribagh, Jharkhand",

        description:
            "Completed Secondary Education while building a strong academic foundation in mathematics, science, and analytical thinking. This stage developed my curiosity for technology and laid the groundwork for my future learning journey.",

        highlights: [
            "Secondary Education",
            "Mathematics",
            "Science",
            "Analytical Thinking"
        ],

        icon: "📘",
    },
];

/* ─────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────── */
const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.18 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
};

const tagVariants = {
    hidden: { opacity: 0, x: -12 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, delay: i * 0.07, ease: "easeOut" },
    }),
};

/* ─────────────────────────────────────────────
   DECORATIVE SHAPES (Brutalist background)
───────────────────────────────────────────── */
const BrutalistShapes = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* top-right square sticker */}
        <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 0.18, rotate: 15 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute -top-8 right-10 w-24 h-24 border-[4px] border-[var(--border-primary)] bg-[var(--accent-yellow)]"
        />
        {/* middle-left circle outline */}
        <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 0.12, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="absolute top-1/2 -left-12 w-36 h-36 rounded-full border-[4px] border-[var(--border-primary)]"
        />
        {/* bottom-right diamond */}
        <motion.div
            initial={{ opacity: 0, rotate: 30 }}
            whileInView={{ opacity: 0.15, rotate: 45 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="absolute bottom-16 right-1/4 w-16 h-16 border-[4px] border-[var(--border-primary)] bg-[var(--accent-blue)]"
        />
        {/* bottom-left dot cluster */}
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute bottom-10 left-16 w-20 h-20 border-[4px] border-[var(--border-primary)] bg-[var(--accent-primary)] rotate-12"
        />
    </div>
);

/* ─────────────────────────────────────────────
   SECTION HEADER
───────────────────────────────────────────── */
const EducationHeader = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-20 lg:mb-28"
        >
            {/* Sticker label — same style as AboutHeader */}
            <motion.div
                whileHover={{ rotate: -3, y: -3 }}
                transition={{ type: "spring", stiffness: 280 }}
                className="
                    inline-block
                    px-5 py-2
                    bg-[var(--accent-yellow)]
                    border-[3px] border-[var(--border-primary)]
                    shadow-[5px_5px_0px_var(--border-primary)]
                    text-xs md:text-sm
                    font-black uppercase
                    tracking-[0.2em]
                    mb-8
                "
            >
                Education
            </motion.div>

            {/* Big ALL-CAPS heading */}
            <h2 className="font-black uppercase leading-[0.9] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
                <span className="block text-[var(--text-primary)]">WHERE I</span>
                <span className="block text-[var(--accent-primary)] mt-2">LEARNED</span>
                <span className="block text-[var(--text-primary)] mt-2">TO BUILD</span>
            </h2>

            {/* Animated underline divider */}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 140 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="h-[4px] bg-[var(--border-primary)] mx-auto mt-10"
            />

            <p className="mt-8 text-[var(--text-secondary)] text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                Every milestone in my education strengthened my technical foundation, sharpened my thinking, and prepared me for building real-world software.
            </p>
        </motion.div>
    );
};

/* ─────────────────────────────────────────────
   SINGLE EDUCATION CARD
───────────────────────────────────────────── */
const EducationCard = ({ item, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.article
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className={`
                group
                relative
                bg-[var(--bg-secondary)]
                border-[3px] border-[var(--border-primary)]
                ${item.shadowColor}
                ${item.hoverShadow}
                transition-shadow duration-300
                p-6 sm:p-8 lg:p-10
                w-full
            `}
        >
            {/* ── Card header row ── */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">

                {/* Left: ID + Year */}
                <div className="flex items-center gap-4">
                    {/* Large number — brutalist index */}
                    <span
                        className="
                            font-black text-4xl sm:text-5xl
                            text-[var(--border-light)]
                            select-none leading-none
                        "
                    >
                        {item.id}
                    </span>

                    {/* Year tag */}
                    <div
                        className="
                            px-3 py-1
                            border-[2px] border-[var(--border-primary)]
                            bg-[var(--bg-tertiary)]
                            font-bold text-xs tracking-widest uppercase
                            text-[var(--text-secondary)]
                        "
                    >
                        {item.year}
                    </div>
                </div>

                {/* Right: Status badge */}
                <div className="flex items-center gap-2">
                    <span
                        className={`
                            inline-flex items-center gap-2
                            px-3 py-1
                            ${item.statusColor}
                            border-[2px] border-[var(--border-primary)]
                            font-black text-[10px] sm:text-xs tracking-[0.18em] uppercase
                            text-white
                        `}
                    >
                        {item.status === "IN PROGRESS" && (
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        )}
                        {item.status}
                    </span>
                </div>
            </div>

            {/* ── Accent bar + Degree ── */}
            <div className="flex items-stretch gap-5 mb-6">
                {/* Thick left accent bar */}
                <div className={`w-[5px] shrink-0 ${item.accentColor} border-[2px] border-[var(--border-primary)]`} />

                <div>
                    {/* Icon + short degree */}
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl" role="img" aria-label="education icon">
                            {item.icon}
                        </span>
                        <span className="font-black text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
                            {item.shortDegree}
                        </span>
                    </div>

                    {/* Full degree title */}
                    <h3 className="font-black uppercase text-xl sm:text-2xl lg:text-3xl leading-tight text-[var(--text-primary)]">
                        {item.degree}
                    </h3>
                </div>
            </div>

            {/* ── Institute ── */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
                <span
                    className="
                        px-4 py-1.5
                        bg-[var(--text-primary)]
                        text-[var(--bg-secondary)]
                        font-bold text-sm uppercase tracking-wider
                    "
                >
                    {item.institute}
                </span>
                <span className="text-[var(--text-muted)] text-sm font-medium">
                    — {item.location}
                </span>
            </div>

            {/* ── Description ── */}
            <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-7 max-w-3xl">
                {item.description}
            </p>

            {/* ── Highlight tags ── */}
            <motion.div
                className="flex flex-wrap gap-2.5"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {item.highlights.map((tag, i) => (
                    <motion.span
                        key={tag}
                        custom={i}
                        variants={tagVariants}
                        className="
                            px-3 py-1
                            border-[2px] border-[var(--border-primary)]
                            bg-[var(--bg-tertiary)]
                            font-bold text-xs uppercase tracking-wider
                            text-[var(--text-primary)]
                            transition-all duration-200
                            group-hover:bg-[var(--accent-yellow)]
                            cursor-default
                        "
                    >
                        {tag}
                    </motion.span>
                ))}
            </motion.div>

            {/* ── Corner decoration ── */}
            <div
                className="
                    absolute bottom-4 right-4
                    w-8 h-8
                    border-r-[3px] border-b-[3px] border-[var(--border-light)]
                    opacity-30
                "
            />
        </motion.article>
    );
};

/* ─────────────────────────────────────────────
   CONNECTING DIVIDER between cards
───────────────────────────────────────────── */
const ConnectorLine = () => (
    <div className="flex items-center justify-center gap-4 py-2">
        <div className="h-[2px] flex-1 bg-[var(--border-light)]" />
        <motion.div
            whileHover={{ rotate: 180, scale: 1.2 }}
            transition={{ duration: 0.3 }}
            className="
                w-8 h-8 shrink-0
                border-[3px] border-[var(--border-primary)]
                bg-[var(--accent-primary)]
                rotate-45
                cursor-pointer
            "
        />
        <div className="h-[2px] flex-1 bg-[var(--border-light)]" />
    </div>
);


/* ─────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────── */
const Education = () => {
    return (
        <section
            id="Education"
            className="relative py-24 lg:py-32 bg-[var(--bg-primary)] overflow-hidden"
        >
            {/* Decorative brutalist shapes */}
            <BrutalistShapes />

            {/* Grid paper texture — same as Hero */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(var(--border-primary) 1px, transparent 1px),
                        linear-gradient(90deg, var(--border-primary) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
                {/* Header */}
                <EducationHeader />

                {/* Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="flex flex-col gap-0"
                >
                    {educationData.map((item, index) => (
                        <div key={item.id}>
                            <EducationCard item={item} index={index} />
                            {index < educationData.length - 1 && (
                                <ConnectorLine />
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Education;