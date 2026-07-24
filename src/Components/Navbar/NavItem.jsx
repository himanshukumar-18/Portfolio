import { motion } from "framer-motion";

const NavItem = ({ item, active, onClick }) => {
    const isActive = active === item.href;

    return (
        <motion.li
            whileHover={{
                y: -3,
                rotate: -2,
            }}
            whileTap={{
                scale: 0.97,
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 18,
            }}
            className="list-none"
        >
            <button
                onClick={() => onClick(item.href)}
                className={`
          relative
          px-5
          py-2.5
          border-[3px]
          border-[var(--border-primary)]
          rounded-[4px]
          uppercase
          font-bold
          tracking-widest
          text-[13px]
          transition-all
          duration-200
          select-none

          ${isActive
                        ? `
                bg-[var(--accent-black)]
                text-white
                shadow-[6px_6px_0px_#111]
              `
                        : `
                bg-[var(--bg-card)]
                text-[var(--text-primary)]
                shadow-[4px_4px_0px_#111]
                hover:bg-[var(--accent-yellow)]
                hover:shadow-[8px_8px_0px_#111]
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