import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const SkillsCovered = ({ skills = [] }) => {
    return (
        <div>
            {/* Heading */}
            <div className="flex items-center gap-2 mb-4">
                <Code2
                    size={18}
                    strokeWidth={2.5}
                    className="text-[var(--accent-primary)]"
                />

                <h4
                    className="
                        text-sm
                        font-black
                        uppercase
                        tracking-[0.18em]
                        text-[var(--text-primary)]
                    "
                >
                    Skills Covered
                </h4>
            </div>

            {/* Skill Chips */}
            <div
                className="
                    flex
                    flex-wrap
                    gap-3
                "
            >
                {skills.map((skill, index) => (
                    <motion.span
                        key={skill}
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            delay: index * 0.04,
                        }}
                        whileHover={{
                            y: -3,
                            rotate: -2,
                        }}
                        whileTap={{
                            scale: 0.96,
                        }}
                        className="
                            group
                            relative

                            overflow-hidden

                            px-3
                            py-2

                            bg-[var(--bg-primary)]

                            border-[3px]
                            border-[var(--border-primary)]

                            shadow-[4px_4px_0px_var(--border-primary)]
                            hover:shadow-[6px_6px_0px_var(--border-primary)]

                            transition-all
                            duration-200

                            text-xs
                            sm:text-sm

                            font-black
                        "
                    >
                        {/* Hover Fill */}
                        <motion.div
                            initial={{
                                scaleX: 0,
                            }}
                            whileHover={{
                                scaleX: 1,
                            }}
                            transition={{
                                duration: 0.2,
                            }}
                            className="
                                absolute
                                inset-0

                                origin-left

                                bg-[var(--accent-yellow)]

                                -z-10
                            "
                        />

                        <span
                            className="
                                relative
                                z-10

                                group-hover:text-[var(--border-primary)]
                            "
                        >
                            {skill}
                        </span>
                    </motion.span>
                ))}
            </div>
        </div>
    );
};

export default SkillsCovered;