import { AnimatePresence, motion } from "framer-motion";

import {
    personalProjects,
    clientProjects,
} from "./workData";

import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ activeTab }) => {
    const projects =
        activeTab === "personal"
            ? personalProjects
            : clientProjects;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={activeTab}
                initial={{
                    opacity: 0,
                    y: 30,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                exit={{
                    opacity: 0,
                    y: -30,
                }}
                transition={{
                    duration: 0.35,
                    ease: "easeOut",
                }}
                className="
                    grid

                    grid-cols-1
                    lg:grid-cols-2

                    gap-8
                    xl:gap-10

                    items-stretch
                "
            >
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                    />
                ))}
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectGrid;