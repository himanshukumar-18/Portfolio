import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 500);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
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
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToTop}
                    className="
            fixed bottom-6 right-6 z-50
            w-12 h-12
            flex items-center justify-center
            rounded-full
            bg-[var(--accent-primary)]
            text-white
            shadow-[var(--accent-glow)]
            hover:shadow-[0_0_30px_var(--accent-primary)]
            transition-all duration-300
          "
                    aria-label="Back to top"
                >
                    {/* Arrow Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 15l7-7 7 7"
                        />
                    </svg>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;

