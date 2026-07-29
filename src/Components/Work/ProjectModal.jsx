import { AnimatePresence, motion } from "framer-motion";
import {
    X,
    ExternalLink,
    User,
    Lightbulb,
} from "lucide-react";

import ProjectPreview from "./ProjectPreview";
import TechStack from "./TechStack";

const ProjectModal = ({
    project,
    open,
    onClose,
}) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="
                        fixed
                        inset-0
                        z-[999]

                        flex
                        items-center
                        justify-center

                        bg-black/70
                        backdrop-blur-sm

                        p-4
                    "
                >
                    <motion.div
                        initial={{
                            scale: 0.9,
                            opacity: 0,
                            y: 40,
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            scale: 0.95,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                        onClick={(e) => e.stopPropagation()}
                        className="
                            relative

                            w-full
                            max-w-6xl

                            max-h-[90vh]

                            overflow-y-auto

                            bg-[var(--bg-card)]

                            border-[4px]
                            border-[var(--border-primary)]

                            shadow-[14px_14px_0px_var(--border-primary)]
                        "
                    >
                        {/* Top Bar */}
                        <div
                            className="
                                flex
                                items-center
                                justify-between

                                px-6
                                py-4

                                bg-[var(--accent-yellow)]

                                border-b-[4px]
                                border-[var(--border-primary)]
                            "
                        >
                            <h2
                                className="
                                    text-xl
                                    md:text-2xl

                                    font-black

                                    uppercase
                                "
                            >
                                {project.title}
                            </h2>

                            <button
                                onClick={onClose}
                                className="
                                    w-12
                                    h-12

                                    flex
                                    items-center
                                    justify-center

                                    bg-[var(--bg-card)]

                                    border-[3px]
                                    border-[var(--border-primary)]

                                    shadow-[4px_4px_0px_var(--border-primary)]

                                    hover:bg-[var(--accent-primary)]

                                    transition-all
                                "
                            >
                                <X size={22} />
                            </button>
                        </div>

                        {/* Body */}
                        <div
                            className="
                                grid
                                lg:grid-cols-2

                                gap-10

                                p-8
                            "
                        >
                            {/* Left */}
                            <div>
                                <ProjectPreview
                                    project={project}
                                />
                            </div>

                            {/* Right */}
                            <div
                                className="
                                    flex
                                    flex-col
                                    gap-8
                                "
                            >
                                <section>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Lightbulb size={18} />
                                        <h3 className="font-black uppercase">
                                            Problem
                                        </h3>
                                    </div>

                                    <p className="text-[var(--text-secondary)] leading-7">
                                        {project.problem}
                                    </p>
                                </section>

                                <section>
                                    <div className="flex items-center gap-2 mb-3">
                                        <User size={18} />
                                        <h3 className="font-black uppercase">
                                            My Role
                                        </h3>
                                    </div>

                                    <p className="text-[var(--text-secondary)] leading-7">
                                        {project.role}
                                    </p>
                                </section>

                                {project.solution && (
                                    <section>
                                        <h3 className="font-black uppercase mb-3">
                                            Solution
                                        </h3>

                                        <p className="text-[var(--text-secondary)] leading-7">
                                            {project.solution}
                                        </p>
                                    </section>
                                )}

                                {project.highlights?.length > 0 && (
                                    <section>
                                        <h3 className="font-black uppercase mb-4">
                                            Highlights
                                        </h3>

                                        <ul className="space-y-2">
                                            {project.highlights.map((item) => (
                                                <li
                                                    key={item}
                                                    className="flex gap-3"
                                                >
                                                    <span>✓</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                )}

                                <TechStack
                                    technologies={project.technologies}
                                />

                                <div className="flex flex-wrap gap-4 pt-4">
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="
                                                flex
                                                items-center
                                                gap-2

                                                px-6
                                                py-3

                                                bg-[var(--accent-primary)]

                                                border-[3px]
                                                border-[var(--border-primary)]

                                                shadow-[5px_5px_0px_var(--border-primary)]

                                                font-black
                                                uppercase
                                            "
                                        >
                                            <ExternalLink size={18} />
                                            Live Demo
                                        </a>
                                    )}

                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="
                                                flex
                                                items-center
                                                gap-2

                                                px-6
                                                py-3

                                                bg-[var(--bg-primary)]

                                                border-[3px]
                                                border-[var(--border-primary)]

                                                shadow-[5px_5px_0px_var(--border-primary)]

                                                font-black
                                                uppercase
                                            "
                                        >
                                            
                                            Source Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;