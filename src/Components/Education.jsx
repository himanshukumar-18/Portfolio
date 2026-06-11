import { motion } from "framer-motion";

const educationData = [
    {
        year: "2025 - 2028",
        title: "Bachelor of Computer Applications (BCA)",
        institute: "Jharkhand Rai University, Ranchi",
        description:
            "Currently pursuing a Bachelor's degree in Computer Applications with a focus on software development, programming fundamentals, databases, and modern web technologies.",
    },
    {
        year: "2024 - 2025",
        title: "Full Stack Web Development",
        institute: "Arena Animation, Hazaribagh",
        description:
            "Completed professional training in modern web development covering HTML, CSS, JavaScript, React, Node.js, databases, and real-world project development.",
    },
];

const Education = () => {
    return (
        <section
            id="Education"
            className="relative py-28 bg-[var(--bg-primary)] overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="
            absolute top-20 left-1/2 -translate-x-1/2
            w-[400px] h-[400px]
            rounded-full
            bg-[var(--accent-soft)]
            blur-[150px]
          "
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center"
                >
                    <span
                        className="
              uppercase
              tracking-[0.35em]
              text-xs
              text-[var(--text-muted)]
            "
                    >
                        Education
                    </span>

                    <h2
                        className="
              mt-4
              text-4xl md:text-6xl
              font-extrabold
              text-[var(--text-primary)]
            "
                    >
                        Learning &
                        <span className="text-[var(--accent-primary)]">
                            {" "}Growth
                        </span>
                    </h2>

                    <p
                        className="
              mt-6
              max-w-2xl
              mx-auto
              text-[var(--text-secondary)]
              text-lg
            "
                    >
                        My academic journey and professional training that helped me
                        build a strong foundation in software development and modern web technologies.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative mt-20">
                    {/* Vertical Line */}
                    <div
                        className="
              absolute left-4 md:left-1/2
              top-0
              bottom-0
              w-px
              bg-white/10
            "
                    />

                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 50,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                            }}
                            className={`
                relative flex items-center mb-14
                ${index % 2 === 0
                                    ? "md:justify-start"
                                    : "md:justify-end"
                                }
              `}
                        >
                            {/* Timeline Dot */}
                            <div
                                className="
                  absolute
                  left-4
                  md:left-1/2
                  -translate-x-1/2
                  w-4 h-4
                  rounded-full
                  bg-[var(--accent-primary)]
                  shadow-[0_0_20px_rgba(249,0,77,0.8)]
                "
                            />

                            {/* Card */}
                            <motion.div
                                whileHover={{
                                    y: -6,
                                }}
                                className="
                  ml-12 md:ml-0
                  w-full md:w-[45%]
                  rounded-3xl
                  p-7
                  bg-[var(--glass-bg)]
                  backdrop-blur-xl
                  border border-[var(--glass-border)]
                  shadow-[var(--glass-shadow)]
                "
                            >
                                <span
                                    className="
                    inline-block
                    px-4 py-1
                    rounded-full
                    bg-[var(--accent-soft)]
                    text-[var(--accent-primary)]
                    text-sm
                    font-medium
                  "
                                >
                                    {item.year}
                                </span>

                                <h3
                                    className="
                    mt-5
                    text-xl
                    font-bold
                    text-[var(--text-primary)]
                  "
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className="
                    mt-2
                    text-[var(--accent-primary)]
                    font-medium
                  "
                                >
                                    {item.institute}
                                </p>

                                <p
                                    className="
                    mt-4
                    leading-relaxed
                    text-[var(--text-secondary)]
                  "
                                >
                                    {item.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;