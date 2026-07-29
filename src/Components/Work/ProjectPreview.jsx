import { motion } from "framer-motion";
import {
    Globe,
    Monitor,
    ExternalLink,
} from "lucide-react";

const ProjectPreview = ({ project }) => {
    return (
        <motion.div
            whileHover={{
                scale: 1.02,
            }}
            transition={{
                duration: 0.25,
            }}
            className="
                relative

                overflow-hidden

                border-b-[3px]
                border-dashed
                border-[var(--border-primary)]

                bg-[var(--bg-primary)]
            "
        >
            {/* Browser Header */}
            <div
                className="
                    flex
                    items-center
                    justify-between

                    px-5
                    py-3

                    bg-[var(--accent-yellow)]

                    border-b-[3px]
                    border-[var(--border-primary)]
                "
            >
                {/* Browser Dots */}
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[var(--accent-primary)] border-2 border-[var(--border-primary)]" />
                    <span className="w-3 h-3 rounded-full bg-[var(--accent-blue)] border-2 border-[var(--border-primary)]" />
                    <span className="w-3 h-3 rounded-full bg-[var(--accent-green)] border-2 border-[var(--border-primary)]" />
                </div>

                {/* URL */}
                <div
                    className="
                        hidden
                        sm:flex

                        items-center
                        gap-2

                        px-3
                        py-1

                        bg-[var(--bg-card)]

                        border-[2px]
                        border-[var(--border-primary)]

                        text-xs
                        font-bold

                        shadow-[3px_3px_0px_var(--border-primary)]
                    "
                >
                    <Globe size={14} />

                    <span className="truncate max-w-[180px]">
                        {project.live
                            ? new URL(project.live).hostname
                            : "localhost"}
                    </span>
                </div>

                {/* Browser Icon */}
                <Monitor
                    size={20}
                    strokeWidth={2.5}
                />
            </div>

            {/* Screenshot */}
            <div
                className="
                    relative

                    aspect-[16/10]

                    overflow-hidden

                    bg-[var(--bg-secondary)]
                "
            >
                {project.image ? (
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        whileHover={{
                            scale: 1.08,
                        }}
                        transition={{
                            duration: 0.45,
                        }}
                        className="
                            w-full
                            h-full

                            object-cover
                        "
                    />
                ) : (
                    <div
                        className="
                            absolute
                            inset-0

                            flex
                            flex-col
                            items-center
                            justify-center

                            gap-4
                        "
                    >
                        <Monitor
                            size={70}
                            strokeWidth={1.8}
                            className="text-[var(--text-muted)]"
                        />

                        <span
                            className="
                                text-sm

                                font-black

                                uppercase

                                tracking-[0.2em]

                                text-[var(--text-secondary)]
                            "
                        >
                            Project Preview
                        </span>
                    </div>
                )}

                {/* Overlay */}
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    whileHover={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.25,
                    }}
                    className="
                        absolute
                        inset-0

                        flex
                        items-center
                        justify-center

                        bg-black/45
                        backdrop-blur-[2px]
                    "
                >
                    <motion.div
                        whileHover={{
                            scale: 1.08,
                        }}
                        className="
                            flex
                            items-center
                            gap-3

                            px-5
                            py-3

                            bg-[var(--accent-primary)]

                            border-[3px]
                            border-[var(--border-primary)]

                            shadow-[5px_5px_0px_var(--border-primary)]

                            text-white

                            font-black
                            uppercase
                            tracking-[0.15em]
                        "
                    >
                        Preview

                        <ExternalLink
                            size={18}
                            strokeWidth={2.5}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ProjectPreview;