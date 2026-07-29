import { motion } from "framer-motion";
import { workSection } from "./workData";

const WorkHeader = () => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 40,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.3,
            }}
            transition={{
                duration: 0.7,
            }}
            className="
                max-w-4xl
                mx-auto
                text-center
                mb-16
                lg:mb-20
            "
        >
            {/* Badge */}
            <motion.div
                whileHover={{
                    rotate: -2,
                    y: -4,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                }}
                className="
                    inline-flex
                    items-center
                    gap-2

                    px-5
                    py-2.5

                    bg-[var(--accent-primary)]

                    border-[3px]
                    border-[var(--border-primary)]

                    shadow-[6px_6px_0px_var(--border-primary)]

                    text-xs
                    sm:text-sm

                    font-black
                    uppercase

                    tracking-[0.25em]

                    mb-8
                "
            >
                <span className="w-2.5 h-2.5 bg-[var(--accent-yellow)] border-2 border-[var(--border-primary)]" />

                {workSection.badge}
            </motion.div>

            {/* Heading */}
            <h2
                className="
                    flex
                    flex-col

                    text-4xl
                    sm:text-5xl
                    lg:text-6xl

                    font-black

                    uppercase

                    leading-[0.92]

                    tracking-tight

                    text-[var(--text-primary)]
                "
            >
                {workSection.heading.map((line, index) => (
                    <motion.span
                        key={line}
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.12,
                            duration: 0.45,
                        }}
                    >
                        {line}
                    </motion.span>
                ))}
            </h2>

            {/* Decorative Divider */}
            <motion.div
                initial={{
                    width: 0,
                }}
                whileInView={{
                    width: "140px",
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 0.8,
                    delay: 0.3,
                }}
                className="
                    h-[6px]

                    mx-auto
                    my-8

                    bg-[var(--accent-yellow)]

                    border-[3px]
                    border-[var(--border-primary)]

                    shadow-[4px_4px_0px_var(--border-primary)]
                "
            />

            {/* Description */}
            <motion.p
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    delay: 0.45,
                    duration: 0.6,
                }}
                className="
                    max-w-3xl
                    mx-auto

                    text-base
                    sm:text-lg

                    leading-8

                    text-[var(--text-secondary)]
                "
            >
                {workSection.description}
            </motion.p>
        </motion.div>
    );
};

export default WorkHeader;