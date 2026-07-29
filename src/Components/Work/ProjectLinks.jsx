import { motion } from "framer-motion";

const ProjectLinks = ({ project }) => {
    return (
        <div
            className="
                flex
                flex-col
                sm:flex-row

                gap-4
            "
        >
            {/* Live Demo */}
            {project.live ? (
                <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                        y: -3,
                    }}
                    whileTap={{
                        scale: 0.97,
                    }}
                    className="
                        flex-1

                        flex
                        items-center
                        justify-center
                        gap-3

                        px-5
                        py-3

                        bg-[var(--accent-primary)]

                        border-[3px]
                        border-[var(--border-primary)]

                        shadow-[5px_5px_0px_var(--border-primary)]
                        hover:shadow-[7px_7px_0px_var(--border-primary)]

                        font-black
                        uppercase
                        tracking-[0.15em]

                        text-white

                        transition-all
                        duration-200
                    "
                >
                    Live Demo
                </motion.a>
            ) : (
                <div
                    className="
                        flex-1

                        flex
                        items-center
                        justify-center
                        gap-3

                        px-5
                        py-3

                        bg-[var(--bg-primary)]

                        border-[3px]
                        border-[var(--border-primary)]

                        text-[var(--text-muted)]

                        font-black
                        uppercase
                        tracking-[0.15em]

                        cursor-not-allowed
                    "
                >
                    Private
                </div>
            )}

            {/* GitHub */}
            {project.github ? (
                <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                        y: -3,
                    }}
                    whileTap={{
                        scale: 0.97,
                    }}
                    className="
                        flex-1

                        flex
                        items-center
                        justify-center
                        gap-3

                        px-5
                        py-3

                        bg-[var(--bg-card)]

                        border-[3px]
                        border-[var(--border-primary)]

                        shadow-[5px_5px_0px_var(--border-primary)]
                        hover:bg-[var(--accent-yellow)]
                        hover:shadow-[7px_7px_0px_var(--border-primary)]

                        font-black
                        uppercase
                        tracking-[0.15em]

                        text-[var(--text-primary)]

                        transition-all
                        duration-200
                    "
                >
                    Source Code
                </motion.a>
            ) : (
                <div
                    className="
                        flex-1

                        flex
                        items-center
                        justify-center
                        gap-3

                        px-5
                        py-3

                        bg-[var(--bg-primary)]

                        border-[3px]
                        border-[var(--border-primary)]

                        text-[var(--text-muted)]

                        font-black
                        uppercase
                        tracking-[0.15em]

                        cursor-not-allowed
                    "
                >
                    Private Repo
                </div>
            )}
        </div>
    );
};

export default ProjectLinks;