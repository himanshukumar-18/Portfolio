import { motion } from "framer-motion";

const Logo = ({ handleScrollTo }) => {
    return (
        <motion.button
            onClick={() => handleScrollTo("#Home")}
            whileHover={{
                y: -3,
                rotate: -2,
            }}
            whileTap={{
                scale: 0.97,
            }}
            transition={{
                type: "spring",
                stiffness: 350,
                damping: 18,
            }}
            className="flex items-center gap-4 group"
        >
            {/* HK Badge */}
            <div
                className="
          w-14
          h-14
          flex
          items-center
          justify-center
          bg-[var(--accent-yellow)]
          border-[3px]
          border-[var(--border-primary)]
          shadow-[5px_5px_0px_#111]
          transition-all
          duration-200
          group-hover:shadow-[8px_8px_0px_#111]
        "
            >
                <span
                    className="
            text-xl
            font-black
            uppercase
            text-[var(--accent-black)]
            tracking-wider
          "
                >
                    HK
                </span>
            </div>

            {/* Name */}
            <div className="hidden sm:flex flex-col items-start leading-none">
                <h2
                    className="
            text-lg
            font-black
            uppercase
            tracking-[0.15em]
            text-[var(--text-primary)]
          "
                >
                    Himanshu Kumar
                </h2>

                <span
                    className="
            mt-1
            px-2
            py-1
            text-[10px]
            font-bold
            uppercase
            tracking-[0.25em]
            border-2
            border-[var(--border-primary)]
            bg-[var(--bg-tertiary)]
            text-[var(--text-secondary)]
          "
                >
                    FULL STACK DEVELOPER
                </span>
            </div>
        </motion.button>
    );
};

export default Logo;