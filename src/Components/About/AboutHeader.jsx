import { motion } from "framer-motion";

const AboutHeader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center mb-20"
        >
            {/* Sticker */}
            <motion.div
                whileHover={{
                    rotate: -3,
                    y: -3,
                }}
                transition={{
                    type: "spring",
                    stiffness: 250,
                }}
                className="
                    inline-block
                    px-5
                    py-2

                    bg-[var(--accent-yellow)]

                    border-[3px]
                    border-[var(--border-primary)]

                    shadow-[5px_5px_0px_var(--border-primary)]

                    text-xs
                    md:text-sm

                    font-black
                    uppercase

                    tracking-[0.2em]

                    mb-8
                "
            >
                About Me
            </motion.div>

            {/* Heading */}
            <h2
                className="
                    font-black
                    uppercase

                    leading-[0.9]

                    text-5xl
                    sm:text-6xl
                    lg:text-7xl
                "
            >
                <span className="block text-[var(--text-primary)]">
                    NOT JUST A
                </span>

                <span className="block text-[var(--accent-primary)] mt-2">
                    DEVELOPER.
                </span>

                <span className="block text-[var(--text-primary)] mt-4">
                    I BUILD DIGITAL
                </span>

                <span className="block text-[var(--accent-blue)]">
                    PRODUCTS.
                </span>
            </h2>

            {/* Divider */}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 140 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.5,
                    delay: 0.3,
                }}
                className="
                    h-[4px]
                    bg-[var(--border-primary)]
                    mx-auto
                    mt-10
                "
            />
        </motion.div>
    );
};

export default AboutHeader;