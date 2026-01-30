import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({ project, isOpen, onOpen, onClose }) => {
    return (
        <>
            {/* CARD */}
            <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                onClick={onOpen}
                className="
          cursor-pointer
          rounded-3xl
          overflow-hidden
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          shadow-[0_30px_80px_rgba(0,0,0,0.5)]
        "
            >
                {/* IMAGE */}
                <div className="relative h-[220px]">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                        {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--text-muted)]">
                        Click to view details
                    </p>
                </div>
            </motion.div>

            {/* MODAL */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="
              fixed inset-0 z-50
              bg-black/70 backdrop-blur-md
              flex items-center justify-center
              px-6
            "
                        onClick={onClose}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="
                max-w-2xl w-full
                bg-[var(--bg-secondary)]
                border border-white/10
                rounded-3xl
                p-8
                shadow-[0_40px_120px_rgba(0,0,0,0.7)]
                relative
              "
                        >
                            {/* CLOSE */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-white/60 hover:text-white"
                            >
                                ✕
                            </button>

                            <h3 className="text-2xl font-bold text-white">
                                {project.title}
                            </h3>

                            <div className="mt-6 space-y-4 text-sm text-white/80">
                                <div>
                                    <strong className="text-[var(--accent-primary)]">Problem:</strong>
                                    <p>{project.problem}</p>
                                </div>

                                <div>
                                    <strong className="text-[var(--accent-primary)]">My Role:</strong>
                                    <p>{project.role}</p>
                                </div>

                                <div>
                                    <strong className="text-[var(--accent-primary)]">Tech Stack:</strong>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 rounded-full bg-white/10 text-xs"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <strong className="text-[var(--accent-primary)]">
                                        Improvements:
                                    </strong>
                                    <p>{project.improvement}</p>
                                </div>
                            </div>

                            {/* LINKS */}
                            <div className="mt-8 flex gap-6">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    className="text-[var(--accent-primary)] hover:underline"
                                >
                                    Live Demo →
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="text-white/70 hover:text-white"
                                >
                                    GitHub →
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectCard;
