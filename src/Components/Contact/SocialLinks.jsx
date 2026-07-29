import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { contactSocials } from "./contactData";

const SocialLinks = () => {
    return (
        <section className="mt-20">
            {/* Header */}
            <div className="text-center">
                <span
                    className="
                        text-xs
                        font-black
                        uppercase
                        tracking-[0.25em]
                        text-[var(--text-muted)]
                    "
                >
                    CONNECT ONLINE
                </span>

                <h3
                    className="
                        mt-4

                        text-3xl
                        md:text-4xl

                        font-black

                        uppercase

                        text-[var(--text-primary)]
                    "
                >
                    Find Me On Social Media
                </h3>

                <p
                    className="
                        mt-4

                        max-w-2xl
                        mx-auto

                        leading-7

                        text-[var(--text-secondary)]
                    "
                >
                    Follow my journey, explore my projects, and connect with me
                    across different platforms.
                </p>
            </div>

            {/* Social Grid */}
            <div
                className="
                    mt-12

                    grid

                    grid-cols-2
                    lg:grid-cols-4

                    gap-6
                "
            >
                {contactSocials.map((social, index) => (
                    <motion.a
                        key={social.id}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{
                            opacity: 0,
                            y: 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.45,
                            delay: index * 0.08,
                        }}
                        whileHover={{
                            y: -8,
                            rotate: -1,
                        }}
                        whileTap={{
                            scale: 0.97,
                        }}
                        className="
                            group
                            relative

                            overflow-hidden

                            bg-[var(--bg-card)]

                            border-[3px]
                            border-[var(--border-primary)]

                            shadow-[8px_8px_0px_var(--border-primary)]
                            hover:shadow-[12px_12px_0px_var(--border-primary)]

                            transition-all
                            duration-200
                        "
                    >
                        {/* Accent Strip */}
                        <div
                            className="h-3 border-b-[3px] border-[var(--border-primary)]"
                            style={{
                                background: social.accent,
                            }}
                        />

                        <div className="p-6">

                            {/* Icon — social.icon is a Font Awesome class string */}
                            <div
                                className="
                                    flex
                                    items-center
                                    justify-center

                                    w-16
                                    h-16

                                    mb-8

                                    border-[3px]
                                    border-[var(--border-primary)]

                                    shadow-[4px_4px_0px_var(--border-primary)]
                                "
                                style={{
                                    background: social.accent,
                                }}
                            >
                                {/* Render Font Awesome icon via <i> class string */}
                                <i
                                    className={`${social.icon} text-[var(--border-primary)]`}
                                    style={{ fontSize: "1.6rem" }}
                                    aria-hidden="true"
                                />
                            </div>

                            {/* Name */}
                            <h4
                                className="
                                    text-xl

                                    font-black

                                    uppercase

                                    text-[var(--text-primary)]
                                "
                            >
                                {social.name}
                            </h4>

                            <p
                                className="
                                    mt-2

                                    text-sm

                                    text-[var(--text-secondary)]
                                "
                            >
                                Connect on {social.name}
                            </p>

                            {/* Footer */}
                            <div
                                className="
                                    mt-8
                                    pt-5

                                    flex
                                    items-center
                                    justify-between

                                    border-t-[3px]
                                    border-dashed
                                    border-[var(--border-primary)]
                                "
                            >
                                <span
                                    className="
                                        text-xs

                                        font-black

                                        uppercase

                                        tracking-[0.18em]

                                        text-[var(--text-muted)]
                                    "
                                >
                                    Visit
                                </span>

                                <ArrowUpRight
                                    size={20}
                                    strokeWidth={2.5}
                                    className="
                                        transition-transform
                                        duration-200
                                        group-hover:translate-x-1
                                        group-hover:-translate-y-1
                                    "
                                />
                            </div>
                        </div>

                        {/* Decorative Corner */}
                        <div
                            className="
                                absolute

                                right-5
                                bottom-5

                                w-4
                                h-4

                                rotate-45

                                border-[3px]
                                border-[var(--border-primary)]
                            "
                            style={{
                                background: social.accent,
                            }}
                        />
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default SocialLinks;