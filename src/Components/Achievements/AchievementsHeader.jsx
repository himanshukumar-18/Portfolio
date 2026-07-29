import { motion } from "framer-motion";
import { achievementsHeader } from "./achievementsData";

const AchievementsHeader = () => {
    return (
        <motion.header
            initial={{
                opacity: 0,
                y: 40,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.3,
            }}
            transition={{
                duration: 0.6,
            }}
            className="
                flex
                flex-col
                items-center

                text-center

                max-w-4xl
                mx-auto
            "
        >
            {/* Badge */}
            <div
                className="
                    inline-flex
                    items-center

                    px-5
                    py-2

                    bg-[var(--accent-yellow)]

                    border-[3px]
                    border-[var(--border-primary)]

                    shadow-[5px_5px_0px_var(--border-primary)]

                    -rotate-2
                "
            >
                <span
                    className="
                        text-xs
                        md:text-sm

                        font-black

                        uppercase

                        tracking-[0.25em]

                        text-[var(--border-primary)]
                    "
                >
                    {achievementsHeader.badge}
                </span>
            </div>

            {/* Title */}
            <h2
                className="
                    mt-8

                    text-4xl
                    sm:text-5xl
                    lg:text-6xl

                    font-black

                    uppercase

                    leading-[0.95]

                    text-[var(--text-primary)]
                "
            >
                {achievementsHeader.title}
            </h2>

            {/* Decorative Divider */}
            <div
                className="
                    flex
                    items-center
                    justify-center

                    gap-3

                    mt-8
                "
            >
                <div
                    className="
                        w-16
                        h-[4px]

                        bg-[var(--border-primary)]
                    "
                />

                <div
                    className="
                        w-5
                        h-5

                        rotate-45

                        bg-[var(--accent-primary)]

                        border-[3px]
                        border-[var(--border-primary)]
                    "
                />

                <div
                    className="
                        w-16
                        h-[4px]

                        bg-[var(--border-primary)]
                    "
                />
            </div>

            {/* Description */}
            <p
                className="
                    mt-8

                    max-w-3xl

                    text-base
                    md:text-lg

                    leading-8

                    text-[var(--text-secondary)]
                "
            >
                {achievementsHeader.description}
            </p>
        </motion.header>
    );
};

export default AchievementsHeader;