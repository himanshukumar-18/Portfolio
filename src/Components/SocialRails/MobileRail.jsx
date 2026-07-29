import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { socials, socialRail } from "./socialData";
import SocialButton from "./SocialButton";
import { Share2, X } from "lucide-react";

const MobileRail = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen((prev) => !prev);

    const closeMenu = () => setOpen(false);

    return (
        <div
            className={`
                fixed
                ${socialRail.mobile.bottom}
                ${socialRail.mobile.left}

                z-50
                lg:hidden
            `}
        >
            <div className="relative flex flex-col items-center">

                {/* Expanded Social Buttons */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                y: 20,
                            }}
                            transition={{
                                duration: 0.25,
                            }}
                            className="
                                absolute
                                bottom-20

                                flex
                                flex-col
                                gap-4
                            "
                        >
                            {socials.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.8,
                                        y: 15,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        y: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.8,
                                    }}
                                    transition={{
                                        delay: index * 0.06,
                                    }}
                                >
                                    <SocialButton
                                        item={item}
                                        mobile
                                        onClick={closeMenu}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Toggle Button */}
                <motion.button
                    onClick={toggleMenu}
                    aria-label={
                        open
                            ? "Close social menu"
                            : "Open social menu"
                    }
                    aria-expanded={open}
                    whileHover={{
                        y: -4,
                        rotate: -3,
                    }}
                    whileTap={{
                        scale: 0.95,
                    }}
                    className="
                        relative

                        w-14
                        h-14

                        flex
                        flex-col
                        items-center
                        justify-center

                        bg-[var(--accent-yellow)]

                        border-[3px]
                        border-[var(--border-primary)]

                        shadow-[6px_6px_0px_var(--border-primary)]

                        transition-all
                        duration-200
                    "
                >
                    <AnimatePresence mode="wait">
                        {open ? (
                            <motion.div
                                key="close"
                                initial={{
                                    rotate: -90,
                                    opacity: 0,
                                }}
                                animate={{
                                    rotate: 0,
                                    opacity: 1,
                                }}
                                exit={{
                                    rotate: 90,
                                    opacity: 0,
                                }}
                                transition={{
                                    duration: 0.2,
                                }}
                            >
                                <X
                                    size={22}
                                    strokeWidth={3}
                                    className="text-[var(--text-primary)]"
                                />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="share"
                                initial={{
                                    rotate: 90,
                                    opacity: 0,
                                }}
                                animate={{
                                    rotate: 0,
                                    opacity: 1,
                                }}
                                exit={{
                                    rotate: -90,
                                    opacity: 0,
                                }}
                                transition={{
                                    duration: 0.2,
                                }}
                                className="
                                    flex
                                    flex-col
                                    items-center
                                    gap-1
                                "
                            >
                                <Share2
                                    size={20}
                                    strokeWidth={3}
                                    className="text-[var(--text-primary)]"
                                />

                                <span
                                    className="
                                        text-[9px]
                                        font-black
                                        tracking-[0.18em]
                                        uppercase
                                        text-[var(--text-primary)]
                                    "
                                >
                                    SHARE
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>
        </div>
    );
};

export default MobileRail;