import { motion } from "framer-motion";

const colorVariants = {
    yellow: "bg-[var(--accent-yellow)] text-[var(--accent-black)]",
    blue: "bg-[var(--accent-blue)] text-white",
    pink: "bg-[var(--accent-primary)] text-white",
    green: "bg-[var(--accent-green)] text-[var(--accent-black)]",
    white: "bg-[var(--bg-card)] text-[var(--accent-black)]",
};

const HeroBadge = ({
    title,
    color = "yellow",
    className = "",
}) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: 0.8,
                rotate: -8,
            }}
            animate={{
                opacity: 1,
                scale: 1,
                rotate: -3,
                y: [0, -6, 0],
            }}
            transition={{
                opacity: {
                    duration: 0.5,
                },
                scale: {
                    duration: 0.5,
                },
                rotate: {
                    duration: 0.5,
                },
                y: {
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                },
            }}
            whileHover={{
                y: -10,
                rotate: 0,
                scale: 1.05,
            }}
            whileTap={{
                scale: 0.96,
            }}
            className={`
        inline-flex
        items-center
        justify-center
        px-5
        py-3
        border-[3px]
        border-[var(--border-primary)]
        shadow-[6px_6px_0px_#111]
        font-black
        uppercase
        tracking-widest
        text-sm
        select-none
        cursor-default
        transition-all
        duration-200
        ${colorVariants[color]}
        ${className}
      `}
        >
            {title}
        </motion.div>
    );
};

export default HeroBadge;