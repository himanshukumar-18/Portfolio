import { motion } from "framer-motion";
import { workStats } from "./workData";

const WorkStats = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.2,
            }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.12,
                    },
                },
            }}
            className="
                grid
                grid-cols-2
                lg:grid-cols-3

                gap-5
                lg:gap-6

                mb-20
            "
        >
            {workStats.map((item) => {
                const Icon = item.icon;

                return (
                    <motion.article
                        key={item.id}
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 40,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                            },
                        }}
                        whileHover={{
                            y: -8,
                            rotate: -1.5,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 18,
                        }}
                        className="
                            group
                            relative

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
                        {/* Accent Strip */}
                        <div
                            className="h-3 border-b-[3px] border-[var(--border-primary)]"
                            style={{
                                background: item.accent,
                            }}
                        />

                        <div className="p-6">

                            {/* Icon */}
                            <div
                                className="
                                    flex
                                    items-center
                                    justify-center

                                    w-14
                                    h-14

                                    mb-6

                                    border-[3px]
                                    border-[var(--border-primary)]

                                    shadow-[4px_4px_0px_var(--border-primary)]

                                    bg-[var(--bg-primary)]
                                "
                                style={{
                                    background: item.accent,
                                }}
                            >
                                <Icon
                                    size={26}
                                    strokeWidth={2.5}
                                    className="text-[var(--border-primary)]"
                                />
                            </div>

                            {/* Value */}
                            <h3
                                className="
                                    text-4xl
                                    lg:text-5xl

                                    font-black

                                    leading-none

                                    text-[var(--text-primary)]
                                "
                            >
                                {item.value}
                            </h3>

                            {/* Label */}
                            <p
                                className="
                                    mt-3

                                    text-sm

                                    font-black

                                    uppercase

                                    tracking-[0.18em]

                                    text-[var(--text-secondary)]
                                "
                            >
                                {item.label}
                            </p>

                            {/* Decorative Square */}
                            <div
                                className="
                                    absolute

                                    right-5
                                    bottom-5

                                    w-4
                                    h-4

                                    rotate-45

                                    border-[3px]
                                    border-[var(--border-primary)]
                                "
                                style={{
                                    background: item.accent,
                                }}
                            />
                        </div>
                    </motion.article>
                );
            })}
        </motion.div>
    );
};

export default WorkStats;