import { AnimatePresence, motion } from "framer-motion";

const MobileMenu = ({
    open,
    links,
    active,
    handleScrollTo,
    setOpen,
}) => {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -25, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -25, scale: 0.96 }}
                    transition={{
                        duration: 0.25,
                        ease: "easeOut",
                    }}
                    className="
            lg:hidden
            mt-4
            bg-[var(--bg-card)]
            overflow-hidden
          "
                >
                    {/* Header */}
                    <div
                        className="
              px-6
              py-3
              border-b-[3px]
              border-[var(--border-primary)]
              bg-[var(--accent-yellow)]
            "
                    >
                        <h3
                            className="
                uppercase
                font-black
                tracking-[0.2em]
                text-lg
                text-[var(--accent-black)]
              "
                        >
                            Navigation
                        </h3>
                    </div>

                    {/* Links */}
                    <ul className="flex flex-col">
                        {links.map((item, index) => {
                            const isActive = active === item.href;

                            return (
                                <motion.li
                                    key={item.href}
                                    initial={{ opacity: 0, x: -15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: index * 0.05,
                                    }}
                                >
                                    <button
                                        onClick={() => {
                                            handleScrollTo(item.href);
                                            setOpen(false);
                                        }}
                                        className={`
                      w-full
                      flex
                      items-center
                      justify-between
                      px-6
                      py-3
                      border-b-[3px]
                      last:border-b-0
                      border-[var(--border-primary)]
                      uppercase
                      tracking-widest
                      font-bold
                      transition-all
                      duration-200

                      ${isActive
                                                ? "bg-[var(--accent-black)] text-white"
                                                : "bg-[var(--bg-card)] text-[var(--text-primary)] hover:bg-[var(--accent-yellow)]"
                                            }
                    `}
                                    >
                                        <span>{item.name}</span>

                                        <motion.span
                                            whileHover={{ x: 4 }}
                                            className="text-lg"
                                        >
                                            →
                                        </motion.span>
                                    </button>
                                </motion.li>
                            );
                        })}
                    </ul>

                    {/* Footer CTA */}
                    <div className="p-5 bg-[var(--bg-tertiary)]">
                        <motion.button
                            whileHover={{
                                y: -3,
                                rotate: -1,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                            onClick={() => {
                                handleScrollTo("#Contact");
                                setOpen(false);
                            }}
                            className="
                w-full
                py-4
                uppercase
                tracking-widest
                font-black
                border-[3px]
                border-[var(--border-primary)]
                bg-[var(--accent-primary)]
                text-white
                rounded-[4px]
                shadow-[6px_6px_0px_#111]
                transition-all
              "
                        >
                            Let's Talk →
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;