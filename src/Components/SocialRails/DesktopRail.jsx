import { motion } from "framer-motion";
import { socials, socialRail } from "./socialData";
import SocialButton from "./SocialButton";

const DesktopRail = () => {
    return (
        <aside
            aria-label="Social Media Links"
            className={`
                fixed
                left-2
                xl:left-4

                top-1/2
                -translate-y-1/2

                z-30

                hidden
                lg:flex
            `}
        >
            <div className="flex flex-col items-center">

                {/* FOLLOW */}
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="
                        mb-4

                        text-[9px]

                        font-black

                        tracking-[0.35em]

                        uppercase

                        text-[var(--text-secondary)]

                        [writing-mode:vertical-rl]
                        rotate-180

                        select-none
                    "
                >
                    FOLLOW
                </motion.span>

                {/* Social Buttons */}
                <div className="flex flex-col gap-3">
                    {socials.map((item) => (
                        <SocialButton
                            key={item.id}
                            item={item}
                            compact
                        />
                    ))}
                </div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.3 }}
                    className="
                        mt-5

                        w-[2px]
                        h-16

                        bg-[var(--border-primary)]

                        origin-top
                    "
                />

                {/* Status */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        delay: 0.8,
                        type: "spring",
                    }}
                    className="
                        mt-2

                        w-3
                        h-3

                        bg-[var(--accent-green)]

                        border-2
                        border-[var(--border-primary)]

                        shadow-[2px_2px_0_var(--border-primary)]
                    "
                />
            </div>
        </aside>
    );
};

export default DesktopRail;