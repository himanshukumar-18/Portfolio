import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const socials = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/himanshu-kumar-8b5845313/",
        icon: "fa-brands fa-linkedin-in",
    },
    {
        name: "GitHub",
        href: "https://github.com/himanshukumar-18",
        icon: "fa-brands fa-github",
    },
];

const SocialRail = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* DESKTOP RAIL */}
            <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex" aria-label="Social media links">
                <div className="flex flex-col gap-4">
                    {socials.map((item, index) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={item.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.5 }}
                            whileHover={{ x: 6 }}
                            className="
                w-11 h-11
                flex items-center justify-center
                rounded-full
                bg-white/5
                backdrop-blur-xl
                border border-white/20
                text-white/70
                hover:text-[var(--accent-primary)]
                hover:border-[var(--accent-primary)]
                hover:shadow-[0_0_20px_var(--accent-soft)]
                transition-all
              "
                        >
                            <i className={`${item.icon} text-sm`} aria-hidden="true" />
                        </motion.a>
                    ))}

                    <motion.div 
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="mx-auto mt-2 w-px h-20 bg-white/20 origin-top"
                    />
                </div>
            </div>

            {/* MOBILE FLOATING BUTTON */}
            <div className="fixed bottom-6 left-6 z-50 md:hidden">
                <div className="relative">

                    {/* EXPANDED LINKS */}
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                className="absolute bottom-14 left-0 flex flex-col gap-3"
                            >
                                {socials.map((item, index) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={item.name}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="
                      w-11 h-11
                      flex items-center justify-center
                      rounded-full
                      bg-white/10
                      backdrop-blur-xl
                      border border-white/20
                      text-white
                      hover:text-[var(--accent-primary)]
                      hover:border-[var(--accent-primary)]
                      transition-all
                    "
                                    >
                                        <i className={`${item.icon} text-sm`} aria-hidden="true" />
                                    </motion.a>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* THREE DOT BUTTON */}
                    <motion.button
                        onClick={() => setOpen(!open)}
                        aria-label={open ? "Close social links" : "Open social links"}
                        aria-expanded={open}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="
              w-12 h-12
              flex items-center justify-center
              rounded-full
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              text-white
              hover:text-[var(--accent-primary)]
              hover:border-[var(--accent-primary)]
              transition-all
            "
                    >
                        <span className="flex flex-col gap-1.5" aria-hidden="true">
                            <span className={`w-1.5 h-1.5 rounded-full bg-white transition-colors ${open ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`w-1.5 h-1.5 rounded-full bg-white transition-colors ${open ? 'opacity-0' : ''}`} />
                            <span className={`w-1.5 h-1.5 rounded-full bg-white transition-colors ${open ? '-rotate-45 -translate-y-2' : ''}`} />
                        </span>
                    </motion.button>
                </div>
            </div>
        </>
    );
};

export default SocialRail;

