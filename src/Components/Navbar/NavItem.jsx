import { motion } from "framer-motion";

const NavItem = ({ item, active, onClick }) => {
    const isActive = active === item.href;

    return (
        <motion.li
            whileHover={{
                y: -2,
            }}
            whileTap={{
                scale: 0.96,
            }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
            }}
            className="list-none shrink-0"
        >
            <button
                onClick={() => onClick(item.href)}
                aria-current={isActive ? "page" : undefined}
                className={`
                    relative
                    inline-flex
                    items-center
                    justify-center
                    px-3
                    xl:px-3.5
                    py-1.5
                    h-9
                    border-[2.5px]
                    border-black
                    rounded-[4px]
                    uppercase
                    font-black
                    tracking-wider
                    text-xs
                    whitespace-nowrap
                    transition-all
                    duration-150
                    select-none
                    cursor-pointer

                    ${isActive
                        ? `
                            bg-black
                            text-white
                            shadow-[3px_3px_0px_#111]
                          `
                        : `
                            bg-[var(--bg-card)]
                            text-[var(--text-primary)]
                            shadow-[2px_2px_0px_#111]
                            hover:bg-[var(--accent-yellow)]
                            hover:shadow-[4px_4px_0px_#111]
                          `
                    }
                `}
            >
                {item.name}
            </button>
        </motion.li>
    );
};

export default NavItem;