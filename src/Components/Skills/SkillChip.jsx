import { motion } from "framer-motion";

const SkillChip = ({ skill, accent }) => {
    return (
        <motion.div
            whileHover={{
                y: -4,
                rotate: -2,
                scale: 1.04,
            }}
            whileTap={{
                scale: 0.96,
            }}
            transition={{
                type: "spring",
                stiffness: 350,
                damping: 18,
            }}
            className="
                group
                relative

                flex
                items-center
                justify-center

                px-4
                py-2.5

                bg-[var(--bg-card)]

                border-[3px]
                border-[var(--border-primary)]

                shadow-[4px_4px_0px_var(--border-primary)]

                text-sm
                font-bold

                text-[var(--text-primary)]

                cursor-default

                transition-all
                duration-200

                overflow-hidden
            "
        >
            {/* Background Fill */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.25 }}
                className="
                    absolute
                    inset-0
                    origin-left
                    -z-10
                "
                style={{
                    background: accent,
                }}
            />

            {/* Skill Name */}
            <span
                className="
                    relative
                    z-10

                    transition-colors
                    duration-200

                    group-hover:text-[var(--border-primary)]
                "
            >
                {skill}
            </span>
        </motion.div>
    );
};

export default SkillChip;