import { motion } from "framer-motion";
import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import { heroData } from "./heroData";

const HeroContent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
            }}
            className="
                flex
                flex-col
                items-start
                justify-center
                max-w-3xl
            "
        >
            {/* Availability Badge */}
            <HeroBadge
                title={`${heroData.availability.title} ${heroData.availability.subtitle}`}
                color="yellow"
            />

            {/* Greeting */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="
                    mt-8
                    text-base
                    md:text-lg
                    uppercase
                    tracking-[0.35em]
                    font-bold
                    text-[var(--text-secondary)]
                "
            >
                {heroData.greeting}
            </motion.p>

            {/* Name — responsive sizes prevent horizontal overflow on small screens */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.25,
                    duration: 0.7,
                }}
                className="
                    mt-3
                    text-[clamp(3rem,12vw,8rem)]
                    leading-none
                    uppercase
                    font-black
                    tracking-tight
                    text-[var(--text-primary)]
                    break-words
                "
            >
                {heroData.name}
            </motion.h1>

            {/* Role */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="
                    mt-6
                    text-lg
                    md:text-2xl
                    lg:text-3xl
                    uppercase
                    font-black
                    tracking-[0.12em]
                    text-[var(--accent-primary)]
                "
                aria-label="Role: Full Stack Developer"
            >
                {heroData.role}
            </motion.p>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="
                    mt-8
                    max-w-2xl
                    text-base
                    md:text-lg
                    leading-8
                    text-[var(--text-secondary)]
                "
            >
                {heroData.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
            >
                <HeroButtons />
            </motion.div>

            {/* Core Tech Stack — trimmed to 8 items, won't overflow on mobile */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="
                    mt-12
                    flex
                    flex-wrap
                    gap-2
                    sm:gap-3
                "
            >
                {heroData.techStack.map((tech) => (
                    <span
                        key={tech}
                        className="
                            px-3
                            sm:px-4
                            py-2
                            border-[3px]
                            border-[var(--border-primary)]
                            bg-[var(--bg-card)]
                            shadow-[4px_4px_0px_var(--border-primary)]
                            text-xs
                            sm:text-sm
                            font-bold
                            uppercase
                            tracking-wider
                        "
                    >
                        {tech}
                    </span>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;