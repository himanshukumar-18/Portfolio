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
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                        duration: 0.2,
                        ease: "easeOut",
                    }}
                    className="
                        lg:hidden
                        border-t-[3px]
                        border-black
                        bg-[var(--bg-card)]
                        overflow-hidden
                    "
                >
                    {/* Header */}
                    <div
                        className="
                            px-5
                            py-2
                            border-b-[2px]
                            border-black
                            bg-[var(--accent-yellow)]
                        "
                    >
                        <span
                            className="
                                uppercase
                                font-black
                                tracking-[0.18em]
                                text-xs
                                text-black
                            "
                        >
                            Navigation
                        </span>
                    </div>

                    {/* Links */}
                    <ul className="flex flex-col">
                        {links.map((item, index) => {
                            const isActive = active === item.href;

                            return (
                                <motion.li
                                    key={item.href}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: index * 0.03,
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
                                            px-5
                                            py-3
                                            border-b-[2px]
                                            last:border-b-0
                                            border-black
                                            uppercase
                                            tracking-wider
                                            font-black
                                            text-xs
                                            transition-all
                                            duration-150
                                            cursor-pointer

                                            ${isActive
                                                ? "bg-black text-white"
                                                : "bg-[var(--bg-card)] text-[var(--text-primary)] hover:bg-[var(--accent-yellow)]"
                                            }
                                        `}
                                    >
                                        <span>{item.name}</span>

                                        <span className="text-sm font-bold">
                                            →
                                        </span>
                                    </button>
                                </motion.li>
                            );
                        })}
                    </ul>

                    {/* Footer CTA */}
                    <div className="p-4 bg-[var(--bg-tertiary)] border-t-[2.5px] border-black">
                        <motion.button
                            whileHover={{
                                y: -2,
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
                                py-3
                                uppercase
                                tracking-widest
                                font-black
                                text-xs
                                border-[2.5px]
                                border-black
                                bg-[var(--accent-primary)]
                                text-white
                                rounded-[4px]
                                shadow-[4px_4px_0px_#111]
                                transition-all
                                cursor-pointer
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