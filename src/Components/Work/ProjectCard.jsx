import { motion } from "framer-motion";
import ProjectPreview from "./ProjectPreview";
import TechStack from "./TechStack";
import ProjectLinks from "./ProjectLinks";

const ProjectCard = ({ project, index }) => {
    return (
        <motion.article
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.6,
                delay: index * 0.08,
            }}
            whileHover={{
                y: -8,
                rotate: -1,
            }}
            className="
                group
                relative

                flex
                flex-col

                overflow-hidden

                bg-[var(--bg-card)]

                border-[3px]
                border-[var(--border-primary)]

                shadow-[8px_8px_0px_var(--border-primary)]
                hover:shadow-[12px_12px_0px_var(--border-primary)]

                transition-all
                duration-200
            "
        >
            {/* Accent Bar */}
            <div className="h-3 bg-[var(--accent-primary)] border-b-[3px] border-[var(--border-primary)]" />

            {/* Header */}
            <div
                className="
                    flex
                    items-center
                    justify-between

                    p-6

                    border-b-[3px]
                    border-dashed
                    border-[var(--border-primary)]
                "
            >
                <div>
                    <p
                        className="
                            text-xs

                            font-black

                            uppercase

                            tracking-[0.25em]

                            text-[var(--text-secondary)]
                        "
                    >
                        PROJECT {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3
                        className="
                            mt-2

                            text-2xl

                            font-black

                            uppercase

                            text-[var(--text-primary)]
                        "
                    >
                        {project.title}
                    </h3>

                    <p
                        className="
                            mt-1

                            text-sm

                            text-[var(--text-secondary)]
                        "
                    >
                        {project.shortTitle}
                    </p>
                </div>

                {project.featured && (
                    <span
                        className="
                            px-3
                            py-1

                            bg-[var(--accent-yellow)]

                            border-[3px]
                            border-[var(--border-primary)]

                            text-xs
                            font-black
                            uppercase

                            shadow-[3px_3px_0px_var(--border-primary)]
                        "
                    >
                        Featured
                    </span>
                )}
            </div>

            {/* Browser Preview */}
            <ProjectPreview project={project} />

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">

                {/* Problem */}
                <div className="mb-6">
                    <h4
                        className="
                            text-sm

                            font-black

                            uppercase

                            tracking-[0.15em]

                            mb-2
                        "
                    >
                        Problem
                    </h4>

                    <p
                        className="
                            text-sm

                            leading-7

                            text-[var(--text-secondary)]
                        "
                    >
                        {project.problem}
                    </p>
                </div>

                {/* Role */}
                <div className="mb-6">
                    <h4
                        className="
                            text-sm

                            font-black

                            uppercase

                            tracking-[0.15em]

                            mb-2
                        "
                    >
                        My Role
                    </h4>

                    <p
                        className="
                            text-sm

                            text-[var(--text-secondary)]
                        "
                    >
                        {project.role}
                    </p>
                </div>

                {/* Tech */}
                <TechStack
                    technologies={project.technologies}
                />

                {/* Links */}
                <div className="mt-auto pt-8">
                    <ProjectLinks
                        project={project}
                    />
                </div>
            </div>

            {/* Decorative Corner */}
            <div
                className="
                    absolute

                    right-5
                    bottom-5

                    w-5
                    h-5

                    rotate-45

                    bg-[var(--accent-yellow)]

                    border-[3px]
                    border-[var(--border-primary)]
                "
            />
        </motion.article>
    );
};

export default ProjectCard;