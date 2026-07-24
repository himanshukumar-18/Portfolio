import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 450);
        };

        window.addEventListener("scroll", onScroll, {
            passive: true,
        });

        return () =>
            window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{
                        opacity: 0,
                        y: 40,
                        scale: 0.85,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                    }}
                    exit={{
                        opacity: 0,
                        y: 40,
                        scale: 0.85,
                    }}
                    transition={{
                        duration: 0.25,
                    }}
                    whileHover={{
                        y: -5,
                        rotate: -3,
                    }}
                    whileTap={{
                        scale: 0.92,
                    }}
                    onClick={scrollToTop}
                    aria-label="Back To Top"
                    className="
                        fixed
                        bottom-6
                        right-6
                        z-[999]

                        flex
                        items-center
                        justify-center

                        w-14
                        h-14

                        bg-[var(--accent-yellow)]

                        border-[3px]
                        border-[var(--border-primary)]

                        shadow-[6px_6px_0px_var(--border-primary)]

                        transition-all
                        duration-200
                    "
                >
                    <ArrowUp
                        size={24}
                        strokeWidth={3}
                        className="text-[var(--text-primary)]"
                    />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;