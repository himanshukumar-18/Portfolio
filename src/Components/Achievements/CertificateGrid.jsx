import { motion } from "framer-motion";

import { certificates } from "./achievementsData";
import CertificateCard from "./CertificateCard";

const CertificateGrid = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.15,
            }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.12,
                    },
                },
            }}
            className="
                mt-20

                grid

                grid-cols-1
                lg:grid-cols-2

                gap-8
                xl:gap-10

                items-stretch
            "
        >
            {certificates.map((certificate, index) => (
                <CertificateCard
                    key={certificate.id}
                    certificate={certificate}
                    index={index}
                />
            ))}

            {/* Coming Soon Card */}
            <motion.article
                variants={{
                    hidden: {
                        opacity: 0,
                        y: 40,
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                    },
                }}
                whileHover={{
                    y: -6,
                    rotate: -1,
                }}
                className="
                    relative

                    flex
                    flex-col
                    items-center
                    justify-center

                    min-h-[520px]

                    border-[3px]
                    border-dashed
                    border-[var(--border-primary)]

                    bg-[var(--bg-primary)]

                    shadow-[8px_8px_0px_var(--border-primary)]

                    overflow-hidden
                "
            >
                {/* Decorative Shapes */}
                <div
                    className="
                        absolute

                        top-8
                        right-8

                        w-5
                        h-5

                        rotate-45

                        bg-[var(--accent-yellow)]

                        border-[3px]
                        border-[var(--border-primary)]
                    "
                />

                <div
                    className="
                        absolute

                        bottom-8
                        left-8

                        w-5
                        h-5

                        rounded-full

                        bg-[var(--accent-blue)]

                        border-[3px]
                        border-[var(--border-primary)]
                    "
                />

                <span
                    className="
                        text-7xl

                        mb-6
                    "
                >
                    🚀
                </span>

                <h3
                    className="
                        text-3xl

                        font-black

                        uppercase

                        text-center

                        text-[var(--text-primary)]
                    "
                >
                    More
                    <br />
                    Coming Soon
                </h3>

                <p
                    className="
                        mt-5

                        max-w-xs

                        text-center

                        leading-7

                        text-[var(--text-secondary)]
                    "
                >
                    I'm continuously learning new technologies and
                    earning certifications to improve my skills.
                </p>

                <div
                    className="
                        mt-8

                        px-5
                        py-3

                        bg-[var(--accent-yellow)]

                        border-[3px]
                        border-[var(--border-primary)]

                        shadow-[5px_5px_0px_var(--border-primary)]

                        font-black

                        uppercase

                        tracking-[0.18em]
                    "
                >
                    Learning...
                </div>
            </motion.article>
        </motion.div>
    );
};

export default CertificateGrid;