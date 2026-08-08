import { motion } from "framer-motion";

import { footerBrand } from "./footerData";

const FooterBrand = () => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 30,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: 0.5,
            }}
            whileHover={{
                y: -4,
                rotate: -1,
            }}
            className="
                relative

                overflow-hidden

                bg-[var(--bg-card)]

                border-[3px]
                border-[var(--border-primary)]

                shadow-[8px_8px_0px_var(--border-primary)]

                transition-all
                duration-200

                hover:shadow-[12px_12px_0px_var(--border-primary)]
            "
        >
            {/* Accent Bar */}
            <div
                className="
                    h-3

                    bg-[var(--accent-yellow)]

                    border-b-[3px]
                    border-[var(--border-primary)]
                "
            />

            <div className="p-6">

                {/* Logo */}
                <div
                    className="
                        inline-flex
                        items-center
                        justify-center

                        w-14
                        h-14

                        bg-[var(--accent-primary)]

                        border-[3px]
                        border-[var(--border-primary)]

                        shadow-[4px_4px_0px_var(--border-primary)]

                        text-xl
                        font-black

                        text-white
                    "
                >
                    HK
                </div>

                {/* Name */}
                <h3
                    className="
                        mt-5

                        text-2xl
                        lg:text-3xl

                        font-black

                        uppercase

                        leading-none

                        text-[var(--text-primary)]
                    "
                >
                    {footerBrand.name}
                </h3>

                {/* Role */}
                <p
                    className="
                        mt-2

                        text-sm

                        font-bold

                        uppercase

                        tracking-[0.18em]

                        text-[var(--accent-primary)]
                    "
                >
                    {footerBrand.role}
                </p>

                {/* Description */}
                <p
                    className="
                        mt-5

                        text-[15px]

                        leading-7

                        text-[var(--text-secondary)]
                    "
                >
                    {footerBrand.description}
                </p>

                {/* Status */}
                <div
                    className="
                        mt-6

                        inline-flex
                        items-center

                        gap-3

                        px-4
                        py-2

                        bg-[var(--accent-green)]

                        border-[3px]
                        border-[var(--border-primary)]

                        shadow-[4px_4px_0px_var(--border-primary)]
                    "
                >
                    <span
                        className="
                            w-3
                            h-3

                            rounded-full

                            bg-white
                        "
                    />

                    <span
                        className="
                            text-xs

                            font-black

                            uppercase

                            tracking-[0.15em]

                            text-[var(--border-primary)]
                        "
                    >
                        Available for Work
                    </span>
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

                    bg-[var(--accent-blue)]

                    border-[3px]
                    border-[var(--border-primary)]
                "
            />
        </motion.div>
    );
};

export default FooterBrand;