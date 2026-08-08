import { motion } from "framer-motion";

const Logo = ({ handleScrollTo }) => {
    return (
        <motion.button
            onClick={() => handleScrollTo("#Home")}
            whileHover={{
                y: -2,
                rotate: -1,
            }}
            whileTap={{
                scale: 0.97,
            }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
            }}
            aria-label="Himanshu Kumar — Back to top"
            className="flex items-center gap-3 group shrink-0 text-left cursor-pointer"
        >
            {/* HK Badge */}
            <div
                className="
                    w-11
                    h-11
                    flex
                    items-center
                    justify-center
                    bg-[var(--accent-yellow)]
                    border-[2.5px]
                    border-black
                    shadow-[3px_3px_0px_#111]
                    transition-all
                    duration-200
                    group-hover:shadow-[5px_5px_0px_#111]
                    shrink-0
                "
                aria-hidden="true"
            >
                <span
                    className="
                        text-base
                        font-black
                        uppercase
                        text-black
                        tracking-wider
                        leading-none
                    "
                >
                    HK
                </span>
            </div>

            {/* Name */}
            <div className="hidden sm:flex flex-col items-start leading-none justify-center">
                <span
                    className="
                        text-sm
                        md:text-base
                        font-black
                        uppercase
                        tracking-[0.12em]
                        text-[var(--text-primary)]
                        whitespace-nowrap
                    "
                >
                    Himanshu Kumar
                </span>

                <span
                    className="
                        mt-1
                        px-1.5
                        py-0.5
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        border-[1.5px]
                        border-black
                        bg-[var(--bg-tertiary)]
                        text-[var(--text-secondary)]
                        whitespace-nowrap
                    "
                >
                    FULL STACK DEVELOPER
                </span>
            </div>
        </motion.button>
    );
};

export default Logo;