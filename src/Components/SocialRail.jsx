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
    {
        name: "WhatsApp",
        href: "https://wa.me/916201030273",
        icon: "fa-brands fa-whatsapp",
    },
];

const SocialRail = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* DESKTOP RAIL */}
            <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex">
                <div className="flex flex-col gap-4">
                    {socials.map((item, index) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            aria-label={item.name}
                            whileHover={{ x: 6 }}
                            transition={{ duration: 0.2 }}
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
                transition
              "
                        >
                            <i className={`${item.icon} text-sm`} />
                        </motion.a>
                    ))}

                    <div className="mx-auto mt-2 w-px h-20 bg-white/20" />
                </div>
            </div>

            {/* MOBILE FLOATING BUTTON */}
            <div className="fixed bottom-6 left-6 z-50 md:hidden">
                <div className="relative">

                    {/* EXPANDED LINKS */}
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute bottom-14 left-0 flex flex-col gap-3"
                            >
                                {socials.map((item, index) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        target="_blank"
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
                    "
                                    >
                                        <i className={`${item.icon} text-sm`} />
                                    </motion.a>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* THREE DOT BUTTON */}
                    <button
                        onClick={() => setOpen(!open)}
                        aria-label="Social links"
                        className="
              w-12 h-12
              flex items-center justify-center
              rounded-full
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              text-white
            "
                    >
                        <span className="flex flex-col gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-white" />
                            <span className="w-1.5 h-1.5 rounded-full bg-white" />
                            <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default SocialRail;
