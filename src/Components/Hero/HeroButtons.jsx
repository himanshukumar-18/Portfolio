import { motion } from "framer-motion";
import { heroData } from "./heroData";

const HeroButtons = () => {
    return (
        <div className="flex flex-wrap items-center gap-5 mt-10">
            {heroData.buttons.map((button) => {
                const isPrimary = button.variant === "primary";

                const commonClasses = `
          inline-flex
          items-center
          justify-center
          gap-3
          px-8
          py-4
          uppercase
          font-black
          tracking-wider
          text-sm
          border-[3px]
          border-[var(--border-primary)]
          transition-all
          duration-200
          shadow-[6px_6px_0px_#111]
          select-none
        `;

                const primaryClasses = `
          bg-[var(--accent-yellow)]
          text-[var(--accent-black)]
          hover:shadow-[10px_10px_0px_#111]
        `;

                const secondaryClasses = `
          bg-[var(--accent-blue)]
          text-white
          hover:shadow-[10px_10px_0px_#111]
        `;

                const content = (
                    <>
                        <span>{button.title}</span>

                        <motion.span
                            whileHover={{ x: 4 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                            }}
                            className="text-base"
                        >
                            {button.icon}
                        </motion.span>
                    </>
                );

                if (button.external) {
                    return (
                        <motion.a
                            key={button.id}
                            href={button.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{
                                y: -4,
                                rotate: -2,
                            }}
                            whileTap={{
                                scale: 0.96,
                            }}
                            className={`${commonClasses} ${isPrimary
                                    ? primaryClasses
                                    : secondaryClasses
                                }`}
                        >
                            {content}
                        </motion.a>
                    );
                }

                return (
                    <motion.a
                        key={button.id}
                        href={button.href}
                        whileHover={{
                            y: -4,
                            rotate: -2,
                        }}
                        whileTap={{
                            scale: 0.96,
                        }}
                        className={`${commonClasses} ${isPrimary
                                ? primaryClasses
                                : secondaryClasses
                            }`}
                    >
                        {content}
                    </motion.a>
                );
            })}
        </div>
    );
};

export default HeroButtons;