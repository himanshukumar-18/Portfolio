import { motion } from "framer-motion";
import { storyCards } from "./aboutData";

const AboutStory = () => {
    return (
        <div className="space-y-8">
            {storyCards.map((item, index) => {
                const Icon = item.icon;

                return (
                    <motion.article
                        key={item.id}
                        initial={{
                            opacity: 0,
                            x: 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        transition={{
                            duration: 0.55,
                            delay: index * 0.12,
                        }}
                        whileHover={{
                            y: -5,
                            rotate: -1,
                        }}
                        className="
                            group
                            relative

                            bg-[var(--bg-card)]

                            border-[3px]
                            border-[var(--border-primary)]

                            shadow-[6px_6px_0px_var(--border-primary)]

                            p-6
                            lg:p-7

                            transition-all
                            duration-200
                        "
                    >
                        {/* Accent Corner */}
                        <div
                            className="absolute top-0 right-0 w-5 h-5 border-l-[3px] border-b-[3px] border-[var(--border-primary)]"
                            style={{ background: item.color }}
                            aria-hidden="true"
                        />

                        {/* Header */}
                        <div className="flex items-center gap-4">

                            <div
                                className="
                                    w-14
                                    h-14
                                    shrink-0

                                    flex
                                    items-center
                                    justify-center

                                    border-[3px]
                                    border-[var(--border-primary)]

                                    shadow-[4px_4px_0px_var(--border-primary)]
                                "
                                style={{ background: item.color }}
                                aria-hidden="true"
                            >
                                <Icon
                                    size={24}
                                    strokeWidth={2.8}
                                    className="text-[var(--text-primary)]"
                                />
                            </div>

                            <div>
                                <p
                                    className="
                                        text-xs
                                        uppercase
                                        tracking-[0.25em]
                                        text-[var(--text-muted)]
                                    "
                                >
                                    0{index + 1}
                                </p>

                                <h3
                                    className="
                                        mt-1

                                        text-xl
                                        sm:text-2xl

                                        font-black

                                        uppercase

                                        text-[var(--text-primary)]
                                    "
                                >
                                    {item.title}
                                </h3>
                            </div>

                        </div>

                        {/* Description */}
                        <p
                            className="
                                mt-6

                                leading-8

                                text-sm
                                md:text-base

                                text-[var(--text-secondary)]
                            "
                        >
                            {item.description}
                        </p>
                    </motion.article>
                );
            })}
        </div>
    );
};

export default AboutStory;