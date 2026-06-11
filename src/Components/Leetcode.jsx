import { motion } from "framer-motion";

const stats = [
    {
        value: "150+",
        label: "Problems Solved",
    },
    {
        value: "50+",
        label: "Easy",
    },
    {
        value: "80+",
        label: "Medium",
    },
    {
        value: "20+",
        label: "Hard",
    },
];

const topics = [
    "Arrays",
    "Strings",
    "Binary Search",
    "Linked Lists",
    "Trees",
    "BST",
    "Dynamic Programming",
];

const Leetcode = () => {
    return (
        <section
            id="Leetcode"
            className="relative py-28 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-[var(--bg-secondary)]" />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
                {/* Header */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <span className="uppercase tracking-[0.35em] text-xs text-[var(--text-muted)]">
                        Problem Solving
                    </span>

                    <h2 className="mt-4 text-4xl md:text-6xl font-extrabold text-[var(--text-primary)]">
                        LeetCode &
                        <span className="text-[var(--accent-primary)]">
                            {" "}DSA Journey
                        </span>
                    </h2>

                    <p className="mt-6 text-lg text-[var(--text-secondary)]">
                        I regularly practice Data Structures and Algorithms
                        to strengthen problem-solving skills, write optimized
                        code, and prepare for technical interviews.
                    </p>
                </motion.div>

                {/* Stats */}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">
                    {stats.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.1,
                            }}
                            whileHover={{
                                y: -6,
                            }}
                            className="
                rounded-3xl
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                p-6
                text-center
              "
                        >
                            <h3 className="text-3xl font-bold text-white">
                                {item.value}
                            </h3>

                            <p className="mt-2 text-sm text-[var(--text-muted)]">
                                {item.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Main Card */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="
            mt-16
            rounded-3xl
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            p-8 md:p-10
          "
                >
                    <div className="flex flex-col lg:flex-row gap-10 justify-between">
                        {/* Left */}

                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white">
                                Coding Profile
                            </h3>

                            <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
                                Consistently solving coding challenges on LeetCode
                                to improve algorithmic thinking, problem-solving,
                                and coding efficiency.
                            </p>

                            <a
                                href="https://leetcode.com/u/himanshukumar0918/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                  inline-flex
                  items-center
                  gap-2
                  mt-6
                  px-6
                  py-3
                  rounded-xl
                  bg-[var(--accent-primary)]
                  text-white
                  font-medium
                  hover:scale-105
                  transition-all
                "
                            >
                                View LeetCode Profile
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>

                        {/* Right */}

                        <div className="flex-1">
                            <h4 className="text-white font-semibold mb-4">
                                Key Topics
                            </h4>

                            <div className="flex flex-wrap gap-3">
                                {topics.map((topic, index) => (
                                    <motion.span
                                        key={index}
                                        whileHover={{
                                            y: -4,
                                        }}
                                        className="
                      px-4 py-2
                      rounded-full
                      bg-white/5
                      border border-white/10
                      text-[var(--text-secondary)]
                    "
                                    >
                                        {topic}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Quote */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-14"
                >
                    <p className="italic text-[var(--text-muted)]">
                        "Great software is built not only with technologies,
                        but with strong problem-solving skills."
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Leetcode;