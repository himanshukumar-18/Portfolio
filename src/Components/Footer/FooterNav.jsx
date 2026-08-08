import { motion } from "framer-motion";
import { footerNavigation } from "./footerData";

const FooterNav = () => {
    return (
        <motion.nav
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="
                bg-[var(--bg-card)]
                border-[3px]
                border-[var(--border-primary)]
                shadow-[8px_8px_0px_var(--border-primary)]
                overflow-hidden
                h-full
            "
        >
            {/* Accent */}
            <div
                className="
                    h-3
                    bg-[var(--accent-blue)]
                    border-b-[3px]
                    border-[var(--border-primary)]
                "
            />

            <div className="p-6 h-full flex flex-col">

                <h3
                    className="
                        text-2xl
                        font-black
                        uppercase
                        text-[var(--text-primary)]
                    "
                >
                    Quick Links
                </h3>

                <p
                    className="
                        mt-2
                        text-sm
                        leading-6
                        text-[var(--text-secondary)]
                    "
                >
                    Navigate through my portfolio.
                </p>

                {/* Navigation */}

                <div
                    className="
                        mt-8

                        grid
                        grid-cols-1
                        sm:grid-cols-2

                        gap-3
                    "
                >
                    {footerNavigation.map((item, index) => (
                        <motion.a
                            key={item.id}
                            href={item.href}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.05,
                            }}
                            whileHover={{
                                y: -3,
                                rotate: -1,
                            }}
                            whileTap={{
                                scale: 0.98,
                            }}
                            className="
                                group

                                flex
                                items-center
                                justify-between

                                min-h-[54px]

                                px-4

                                bg-[var(--bg-primary)]

                                border-[3px]
                                border-[var(--border-primary)]

                                shadow-[4px_4px_0px_var(--border-primary)]
                                hover:shadow-[6px_6px_0px_var(--border-primary)]

                                transition-all
                                duration-200
                            "
                        >
                            <span
                                className="
                                    flex-1

                                    text-[13px]
                                    lg:text-sm

                                    font-black

                                    uppercase

                                    tracking-[0.08em]

                                    truncate

                                    text-[var(--text-primary)]
                                "
                            >
                                {item.label}
                            </span>

                            <span
                                className="
                                    ml-3

                                    text-base

                                    font-black

                                    text-[var(--accent-primary)]

                                    transition-transform
                                    duration-200

                                    group-hover:translate-x-1
                                "
                            >
                                →
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
};

export default FooterNav;