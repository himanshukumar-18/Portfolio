import { motion } from "framer-motion";
import { heroData } from "./heroData";

const HeroStats = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                delay: 0.9,
            }}
            className="
                mt-10
                grid
                grid-cols-3
                gap-3
                sm:gap-4
                w-full
                max-w-lg
            "
        >
            {heroData.stats.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 1 + index * 0.15,
                    }}
                    whileHover={{
                        y: -8,
                        rotate: index % 2 === 0 ? -2 : 2,
                        transition: { duration: 0.2 },
                    }}
                    className="
                        relative
                        overflow-hidden
                        bg-[var(--bg-card)]
                        border-[3px]
                        border-[var(--border-primary)]
                        shadow-[6px_6px_0px_var(--border-primary)]
                        px-3
                        sm:px-6
                        py-4
                        sm:py-5
                        flex
                        flex-col
                        items-center
                        justify-center
                        text-center
                    "
                >
                    {/* Decorative Corner */}
                    <div
                        className="
                            absolute
                            top-0
                            right-0
                            w-4
                            h-4
                            sm:w-5
                            sm:h-5
                            bg-[var(--accent-yellow)]
                            border-l-[3px]
                            border-b-[3px]
                            border-[var(--border-primary)]
                        "
                        aria-hidden="true"
                    />

                    {/* Value */}
                    <span
                        className="
                            text-2xl
                            sm:text-3xl
                            md:text-4xl
                            font-black
                            uppercase
                            text-[var(--accent-primary)]
                            leading-none
                        "
                        aria-label={`${stat.value} ${stat.label}`}
                    >
                        {stat.value}
                    </span>

                    {/* Divider */}
                    <div
                        className="
                            my-2
                            sm:my-3
                            w-8
                            sm:w-10
                            h-[3px]
                            bg-[var(--border-primary)]
                        "
                        aria-hidden="true"
                    />

                    {/* Label */}
                    <span
                        className="
                            text-[10px]
                            sm:text-xs
                            uppercase
                            tracking-[0.15em]
                            sm:tracking-[0.2em]
                            font-bold
                            text-[var(--text-secondary)]
                        "
                    >
                        {stat.label}
                    </span>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default HeroStats;