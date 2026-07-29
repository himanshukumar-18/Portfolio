import { useState } from "react";
import { motion } from "framer-motion";
import {
    Copy,
    Check,
    ExternalLink,
} from "lucide-react";

import { contactInfo } from "./contactData";

const ContactInfo = () => {
    const [copied, setCopied] = useState("");

    const handleCopy = async (text) => {
        try {
            await navigator.clipboard.writeText(text);

            setCopied(text);

            setTimeout(() => {
                setCopied("");
            }, 2000);
        } catch (error) {
            console.error("Copy failed:", error);
        }
    };

    return (
        <section className="mt-16">
            {/* Heading */}

            <div className="mb-10">
                <h3
                    className="
                        text-3xl
                        md:text-4xl

                        font-black

                        uppercase

                        text-[var(--text-primary)]
                    "
                >
                    Contact Information
                </h3>

                <p
                    className="
                        mt-3

                        leading-7

                        text-[var(--text-secondary)]
                    "
                >
                    Feel free to reach out using any of the contact methods
                    below. I'm always happy to discuss new opportunities,
                    collaborations, or answer your questions.
                </p>
            </div>

            {/* Cards */}

            <div
                className="
                    grid

                    grid-cols-1
                    sm:grid-cols-2

                    gap-6
                "
            >
                {contactInfo.map((item, index) => {
                    const isCopied = copied === item.copy;

                    return (
                        <motion.article
                            key={item.id}
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
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08,
                            }}
                            whileHover={{
                                y: -6,
                                rotate: -1,
                            }}
                            className="
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
                            {/* Accent */}

                            <div
                                className="
                                    h-3

                                    bg-[var(--accent-primary)]

                                    border-b-[3px]
                                    border-[var(--border-primary)]
                                "
                            />

                            <div className="p-6">

                                {/* Header */}

                                <div
                                    className="
                                        flex
                                        items-start
                                        justify-between

                                        gap-5
                                    "
                                >
                                    <div className="flex-1">

                                        <p
                                            className="
                                                text-xs

                                                font-black

                                                uppercase

                                                tracking-[0.2em]

                                                text-[var(--text-muted)]
                                            "
                                        >
                                            {item.title}
                                        </p>

                                        <h4
                                            className="
                                                mt-3

                                                text-lg
                                                md:text-xl

                                                font-black

                                                break-words

                                                leading-snug

                                                text-[var(--text-primary)]
                                            "
                                        >
                                            {item.value}
                                        </h4>

                                    </div>

                                    {item.copy && (
                                        <motion.button
                                            whileHover={{
                                                rotate: -6,
                                                y: -2,
                                            }}
                                            whileTap={{
                                                scale: 0.95,
                                            }}
                                            onClick={() =>
                                                handleCopy(item.copy)
                                            }
                                            className="
                                                w-12
                                                h-12

                                                shrink-0

                                                flex
                                                items-center
                                                justify-center

                                                bg-[var(--accent-yellow)]

                                                border-[3px]
                                                border-[var(--border-primary)]

                                                shadow-[4px_4px_0px_var(--border-primary)]

                                                transition-all
                                            "
                                        >
                                            {isCopied ? (
                                                <Check
                                                    size={20}
                                                    className="text-[var(--accent-green)]"
                                                />
                                            ) : (
                                                <Copy
                                                    size={18}
                                                    className="text-[var(--border-primary)]"
                                                />
                                            )}
                                        </motion.button>
                                    )}
                                </div>

                                {/* Action */}

                                {item.href && (
                                    <motion.a
                                        href={item.href}
                                        whileHover={{
                                            x: 4,
                                        }}
                                        className="
                                            inline-flex

                                            items-center

                                            gap-2

                                            mt-8

                                            text-sm

                                            font-black

                                            uppercase

                                            tracking-[0.15em]

                                            text-[var(--accent-primary)]
                                        "
                                    >
                                        Open

                                        <ExternalLink
                                            size={16}
                                            strokeWidth={2.5}
                                        />
                                    </motion.a>
                                )}
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

                                    bg-[var(--accent-blue)]

                                    border-[3px]
                                    border-[var(--border-primary)]
                                "
                            />
                        </motion.article>
                    );
                })}
            </div>
        </section>
    );
};

export default ContactInfo;