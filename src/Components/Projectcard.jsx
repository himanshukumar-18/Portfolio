import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({ project, isOpen, onOpen, onClose }) => {
    return (
        <>
            {/* CARD */}
            <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={onOpen}
                className="
          cursor-pointer
          rounded-3xl
          overflow-hidden
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          shadow-[0_30px_80px_rgba(0,0,0,0.5)]
          group
        "
            >
                {/* IMAGE */}
                <div className="relative h-[220px] overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                    
                    {/* Tech tags overlay */}
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm text-white/90"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
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
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
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
                            {/* CLOSE BUTTON */}
                            <button
                                onClick={onClose}
                                className="absolute z-10 top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-all"
                                aria-label="Close modal"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* PROJECT IMAGE */}
                            <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] to-transparent" />
                            </div>

                            <h3 id="modal-title" className="text-2xl font-bold text-[var(--text-primary)]">
                                {project.title}
                            </h3>

                            <div className="mt-6 space-y-4 text-sm text-[var(--text-secondary)]">
                                <div>
                                    <strong className="text-[var(--accent-primary)]">Problem:</strong>
                                    <p className="mt-1">{project.problem}</p>
                                </div>

                                <div>
                                    <strong className="text-[var(--accent-primary)]">My Role:</strong>
                                    <p className="mt-1">{project.role}</p>
                                </div>

                                <div>
                                    <strong className="text-[var(--accent-primary)]">Tech Stack:</strong>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 rounded-full bg-[var(--accent-soft)] text-[var(--accent-primary)] text-xs font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <strong className="text-[var(--accent-primary)]">
                                        Improvements:
                                    </strong>
                                    <p className="mt-1">{project.improvement}</p>
                                </div>
                            </div>

                            {/* LINKS */}
                            <div className="mt-8 flex gap-6">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-[var(--accent-primary)] hover:underline"
                                >
                                    Live Demo 
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-[var(--text-muted)] hover:text-white transition-colors"
                                >
                                    GitHub 
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
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

