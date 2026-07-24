import { motion } from "framer-motion";

import Monitor from "./Monitor";
import Laptop from "./Laptop";
import Desk from "./Desk";
import Coffee from "./Coffee";
import Plant from "./Plant";
import StickyNote from "./StickyNote";
import Developer from "./Developer";
import Doodles from "./Doodles";

const HeroIllustration = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
            }}
            className="relative flex items-center justify-center w-full"
        >
            {/* Floating Workspace */}
            <motion.svg
                viewBox="0 0 600 460"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[650px] h-auto"
                animate={{
                    y: [0, -8, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                {/* ========================= */}
                {/* Background Doodles */}
                {/* ========================= */}
                <Doodles />

                {/* ========================= */}
                {/* Sticky Notes */}
                {/* ========================= */}
                <StickyNote />

                {/* ========================= */}
                {/* Monitor */}
                {/* ========================= */}
                <Monitor />

                {/* ========================= */}
                {/* Coffee */}
                {/* ========================= */}
                <Coffee />

                {/* ========================= */}
                {/* Plant */}
                {/* ========================= */}
                <Plant />

                {/* ========================= */}
                {/* Developer */}
                {/* ========================= */}
                <Developer />

                {/* ========================= */}
                {/* Laptop */}
                {/* ========================= */}
                <Laptop />

                {/* ========================= */}
                {/* Desk */}
                {/* ========================= */}
                <Desk />
            </motion.svg>

            {/* Decorative Background Blob */}
            <motion.div
                className="
          absolute
          -z-10
          w-[520px]
          h-[520px]
          rounded-full
          bg-[var(--bg-tertiary)]
          border-[3px]
          border-[var(--border-primary)]
        "
                animate={{
                    rotate: [0, 4, 0, -4, 0],
                    scale: [1, 1.03, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Floating Accent Shapes */}
            <motion.div
                className="
          absolute
          top-6
          right-10
          w-6
          h-6
          bg-[var(--accent-primary)]
          border-[3px]
          border-[var(--border-primary)]
        "
                animate={{
                    y: [0, -12, 0],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                }}
            />

            <motion.div
                className="
          absolute
          bottom-10
          left-6
          w-8
          h-8
          rounded-full
          bg-[var(--accent-yellow)]
          border-[3px]
          border-[var(--border-primary)]
        "
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                }}
            />

            <motion.div
                className="
          absolute
          top-20
          left-2
          w-5
          h-5
          rotate-45
          bg-[var(--accent-blue)]
          border-[3px]
          border-[var(--border-primary)]
        "
                animate={{
                    rotate: [45, 225, 405],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                }}
            />
        </motion.div>
    );
};

export default HeroIllustration;