import { motion } from "framer-motion";
import { skillsSection } from "./skillsData";

const SkillsHeader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
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
                    justify-center

                    px-5
                    py-2.5

                    bg-[var(--accent-yellow)]

                    border-[3px]
                    border-[var(--border-primary)]

                    shadow-[5px_5px_0px_var(--border-primary)]

                    text-xs
                    sm:text-sm

                    font-black
                    uppercase

                    tracking-[0.25em]

                    mb-8
                "
            >
                {skillsSection.badge}
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

                    leading-[0.95]

                    tracking-tight

                    text-[var(--text-primary)]
                "
            >
                {skillsSection.heading.map((line, index) => (
                    <motion.span
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
                            delay: index * 0.12,
                            duration: 0.5,
                        }}
                    >
                        {line}
                    </motion.span>
                ))}
            </h2>

            {/* Divider */}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "120px" }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    delay: 0.4,
                }}
                className="
                    h-1

                    mx-auto
                    my-8

                    bg-[var(--accent-primary)]

                    border
                    border-[var(--border-primary)]

                    shadow-[3px_3px_0px_var(--border-primary)]
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
                viewport={{ once: true }}
                transition={{
                    delay: 0.5,
                    duration: 0.6,
                }}
                className="
                    max-w-2xl
                    mx-auto

                    text-base
                    sm:text-lg

                    leading-8

                    text-[var(--text-secondary)]
                "
            >
                {skillsSection.description}
            </motion.p>
        </motion.div>
    );
};

export default SkillsHeader;