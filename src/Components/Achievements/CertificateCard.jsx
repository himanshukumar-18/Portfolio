import { motion } from "framer-motion";
import {
    Award,
    Calendar,
    ExternalLink,
    FileText,
} from "lucide-react";

import SkillsCovered from "./SkillsCovered";

const CertificateCard = ({
    certificate,
    index,
}) => {
    return (
        <motion.article
            initial={{
                opacity: 0,
                y: 50,
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
                duration: 0.6,
                delay: index * 0.08,
            }}
            whileHover={{
                y: -8,
                rotate: -1,
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
                    background: certificate.accent,
                }}
            />

            {/* Header */}
            <div
                className="
                    p-6

                    flex
                    items-start
                    justify-between

                    gap-4

                    border-b-[3px]
                    border-dashed
                    border-[var(--border-primary)]
                "
            >
                <div>
                    <div
                        className="
                            flex
                            items-center
                            gap-2

                            text-xs

                            font-black

                            uppercase

                            tracking-[0.2em]

                            text-[var(--text-secondary)]
                        "
                    >
                        <Award size={16} />

                        Certificate
                    </div>

                    <h3
                        className="
                            mt-3

                            text-2xl

                            font-black

                            uppercase

                            leading-tight

                            text-[var(--text-primary)]
                        "
                    >
                        {certificate.title}
                    </h3>

                    <p
                        className="
                            mt-2

                            text-[15px]

                            text-[var(--text-secondary)]
                        "
                    >
                        {certificate.issuer}
                    </p>
                </div>

                {certificate.featured && (
                    <div
                        className="
                            px-3
                            py-1

                            bg-[var(--accent-yellow)]

                            border-[3px]
                            border-[var(--border-primary)]

                            shadow-[3px_3px_0px_var(--border-primary)]

                            text-xs

                            font-black

                            uppercase
                        "
                    >
                        Featured
                    </div>
                )}
            </div>

            {/* Certificate Preview */}
            <div
                className="
                    relative

                    aspect-[16/10]

                    overflow-hidden

                    border-b-[3px]
                    border-dashed
                    border-[var(--border-primary)]

                    bg-[var(--bg-primary)]
                "
            >
                <motion.img
                    src={certificate.image}
                    alt={certificate.title}
                    whileHover={{
                        scale: 1.05,
                    }}
                    transition={{
                        duration: 0.35,
                    }}
                    className="
                        w-full
                        h-full

                        object-cover
                    "
                />
            </div>

            {/* Content */}
            <div
                className="
                    p-6

                    flex
                    flex-col
                    flex-1
                "
            >
                {/* Year */}
                <div
                    className="
                        flex
                        items-center
                        gap-2

                        text-sm

                        font-bold

                        text-[var(--text-secondary)]
                    "
                >
                    <Calendar size={17} />

                    {certificate.year}
                </div>

                {/* Description */}
                <p
                    className="
                        mt-5

                        leading-7

                        text-[15px]

                        text-[var(--text-secondary)]
                    "
                >
                    {certificate.description}
                </p>

                {/* Skills */}
                <div className="mt-8">
                    <SkillsCovered
                        skills={certificate.skills}
                    />
                </div>

                {/* Footer */}
                <div
                    className="
                        mt-8
                        pt-6

                        border-t-[3px]
                        border-dashed
                        border-[var(--border-primary)]
                    "
                >
                    <motion.a
                        href={certificate.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                            y: -3,
                        }}
                        whileTap={{
                            scale: 0.97,
                        }}
                        className="
                            inline-flex

                            items-center
                            justify-center

                            gap-3

                            px-6
                            py-3

                            bg-[var(--accent-primary)]

                            border-[3px]
                            border-[var(--border-primary)]

                            shadow-[5px_5px_0px_var(--border-primary)]
                            hover:shadow-[7px_7px_0px_var(--border-primary)]

                            font-black

                            uppercase

                            tracking-[0.15em]

                            text-white

                            transition-all
                            duration-200
                        "
                    >
                        <FileText
                            size={18}
                            strokeWidth={2.5}
                        />

                        View Certificate

                        <ExternalLink
                            size={18}
                            strokeWidth={2.5}
                        />
                    </motion.a>
                </div>
            </div>

            {/* Decorative Corner */}
            <div
                className="
                    absolute

                    right-5
                    bottom-5

                    w-5
                    h-5

                    rotate-45

                    border-[3px]
                    border-[var(--border-primary)]
                "
                style={{
                    background: certificate.accent,
                }}
            />
        </motion.article>
    );
};

export default CertificateCard;