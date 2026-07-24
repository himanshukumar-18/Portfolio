import { motion } from "framer-motion";

const SocialButton = ({
    item,
    mobile = false,
    onClick,
}) => {
    return (
        <motion.a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            title={item.name}
            onClick={onClick}
            initial={{
                opacity: 0,
                x: mobile ? 0 : -25,
                y: mobile ? 15 : 0,
            }}
            animate={{
                opacity: 1,
                x: 0,
                y: 0,
            }}
            transition={{
                duration: 0.3,
                delay: item.delay,
            }}
            whileHover={{
                x: mobile ? 0 : 5,
                y: -3,
                rotate: -2,
                backgroundColor: item.bg,
                color: item.color,
            }}
            whileTap={{
                scale: 0.95,
            }}
            className={`
                group
                relative
                flex
                items-center
                justify-center

                ${mobile
                    ? "w-13 h-13 sm:w-14 sm:h-14"
                    : "w-11 h-11 xl:w-12 xl:h-12"
                }

                bg-[var(--bg-card)]

                border-[3px]
                border-[var(--border-primary)]

                shadow-[4px_4px_0px_var(--border-primary)]

                text-[var(--text-primary)]

                transition-all
                duration-200

                overflow-hidden
            `}
        >
            {/* Background Fill */}
            <motion.div
                className="absolute inset-0 -z-10"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.2 }}
                style={{
                    background: item.bg,
                    transformOrigin: "bottom",
                }}
            />

            {/* Icon */}
            <i
                className={`${item.icon} text-base xl:text-lg transition-transform duration-200 group-hover:scale-110`}
                aria-hidden="true"
            />

            {/* Tooltip */}
            {!mobile && (
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -8,
                    }}
                    whileHover={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 0.2,
                    }}
                    className="
                        pointer-events-none

                        absolute
                        left-[calc(100%+10px)]

                        whitespace-nowrap

                        bg-[var(--bg-card)]

                        border-[3px]
                        border-[var(--border-primary)]

                        shadow-[4px_4px_0px_var(--border-primary)]

                        px-2.5
                        py-1.5

                        text-[10px]
                        font-black
                        uppercase
                        tracking-[0.18em]

                        text-[var(--text-primary)]
                    "
                >
                    {item.name}
                </motion.div>
            )}
        </motion.a>
    );
};

export default SocialButton;