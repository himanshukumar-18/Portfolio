import { motion } from "framer-motion";
import { footerSocials } from "./footerData";

const FooterSocials = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="
                h-full

                bg-[var(--bg-card)]

                border-[3px]
                border-[var(--border-primary)]

                shadow-[8px_8px_0px_var(--border-primary)]

                overflow-hidden
            "
        >
            {/* Accent */}
            <div
                className="
                    h-3

                    bg-[var(--accent-primary)]

                    border-b-[3px]
                    border-[var(--border-primary)]
                "
            />

            <div className="p-6 h-full flex flex-col">

                {/* Heading */}

                <h3
                    className="
                        text-2xl

                        font-black

                        uppercase

                        text-[var(--text-primary)]
                    "
                >
                    Connect
                </h3>

                <p
                    className="
                        mt-2

                        text-sm
                        leading-6

                        text-[var(--text-secondary)]
                    "
                >
                    Follow my work and let's stay connected.
                </p>

                {/* Social List */}

                <div className="mt-8 flex flex-col gap-3">

                    {footerSocials.map((social, index) => (
                        <motion.a
                            key={social.id}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{
                                opacity: 0,
                                x: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.08,
                            }}
                            whileHover={{
                                x: 6,
                            }}
                            className="
                                group

                                flex
                                items-center
                                justify-between

                                px-4
                                py-3

                                bg-[var(--bg-primary)]

                                border-[3px]
                                border-[var(--border-primary)]

                                shadow-[4px_4px_0px_var(--border-primary)]
                                hover:shadow-[6px_6px_0px_var(--border-primary)]

                                transition-all
                                duration-200
                            "
                        >
                            <div className="flex items-center gap-4">

                                {/* Icon */}

                                <div
                                    className="
                                        w-9
                                        h-9

                                        flex
                                        items-center
                                        justify-center

                                        border-[3px]
                                        border-[var(--border-primary)]
                                    "
                                    style={{
                                        background: social.accent,
                                    }}
                                >
                                    <i
                                        className={`${social.icon} text-sm text-[var(--border-primary)]`}
                                    />
                                </div>

                                {/* Name */}

                                <span
                                    className="
                                        text-sm

                                        font-black

                                        uppercase

                                        tracking-[0.08em]

                                        text-[var(--text-primary)]
                                    "
                                >
                                    {social.name}
                                </span>
                            </div>

                            {/* Dot */}

                            <div
                                className="
                                    w-3
                                    h-3

                                    rotate-45

                                    border-2
                                    border-[var(--border-primary)]

                                    transition-transform
                                    duration-200

                                    group-hover:rotate-90
                                "
                                style={{
                                    background: social.accent,
                                }}
                            />
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default FooterSocials;