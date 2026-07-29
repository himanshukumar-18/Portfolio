import { motion } from "framer-motion";
import { projectCategories } from "./workData";

const ProjectTabs = ({ activeTab, setActiveTab }) => {
    return (
        <div
            className="
                flex
                justify-center
                mb-16
            "
        >
            <div
                className="
                    inline-flex
                    flex-wrap
                    justify-center
                    gap-3

                    p-2

                    bg-[var(--bg-card)]

                    border-[3px]
                    border-[var(--border-primary)]

                    shadow-[8px_8px_0px_var(--border-primary)]
                "
            >
                {projectCategories.map((tab) => {
                    const active = activeTab === tab.id;

                    return (
                        <motion.button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            whileHover={{
                                y: -3,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 350,
                                damping: 18,
                            }}
                            className={`
                                relative

                                px-6
                                md:px-8

                                py-3

                                border-[3px]
                                border-[var(--border-primary)]

                                font-black
                                uppercase

                                tracking-[0.18em]

                                text-sm

                                transition-all
                                duration-200

                                ${active
                                    ? `
                                            bg-[var(--accent-primary)]
                                            text-white
                                            shadow-[5px_5px_0px_var(--border-primary)]
                                        `
                                    : `
                                            bg-[var(--bg-primary)]
                                            text-[var(--text-primary)]
                                            hover:bg-[var(--accent-yellow)]
                                            hover:shadow-[5px_5px_0px_var(--border-primary)]
                                        `
                                }
                            `}
                        >
                            {tab.label}

                            {active && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="
                                        absolute
                                        -bottom-[3px]
                                        left-0
                                        right-0

                                        h-[5px]

                                        bg-[var(--accent-yellow)]

                                        border-t-[3px]
                                        border-[var(--border-primary)]
                                    "
                                    transition={{
                                        type: "spring",
                                        stiffness: 350,
                                        damping: 30,
                                    }}
                                />
                            )}
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectTabs;