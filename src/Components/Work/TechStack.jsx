import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

const TechStack = ({ technologies = [] }) => {
    return (
        <div className="mt-2">
            {/* Heading */}
            <div className="flex items-center gap-2 mb-4">
                <Cpu
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
                    Tech Stack
                </h4>
            </div>

            {/* Technologies */}
            <div
                className="
                    flex
                    flex-wrap
                    gap-3
                "
            >
                {technologies.map((tech, index) => (
                    <motion.span
                        key={tech}
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.05,
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

                            px-3
                            py-2

                            bg-[var(--bg-primary)]

                            border-[3px]
                            border-[var(--border-primary)]

                            shadow-[4px_4px_0px_var(--border-primary)]
                            hover:shadow-[6px_6px_0px_var(--border-primary)]

                            text-xs
                            md:text-sm

                            font-black

                            transition-all
                            duration-200

                            overflow-hidden
                        "
                    >
                        {/* Hover Fill */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.2 }}
                            className="
                                absolute
                                inset-0
                                origin-left
                                -z-10

                                bg-[var(--accent-yellow)]
                            "
                        />

                        <span
                            className="
                                relative
                                z-10

                                group-hover:text-[var(--border-primary)]
                            "
                        >
                            {tech}
                        </span>
                    </motion.span>
                ))}
            </div>
        </div>
    );
};

export default TechStack;