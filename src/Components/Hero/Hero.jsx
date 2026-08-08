import { motion } from "framer-motion";

import HeroContent from "./HeroContent";
import HeroIllustration from "./HeroIllustration/HeroIllustration";
import HeroStats from "./HeroStats";

const Hero = () => {
    return (
        <section
            id="Home"
            className="
                relative
                overflow-hidden
                bg-[var(--bg-primary)]
                pt-24
                lg:pt-28
            "
        >
            {/* Grid paper texture — same as Hero */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(var(--border-primary) 1px, transparent 1px),
                        linear-gradient(90deg, var(--border-primary) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Main Container */}
            <div
                className="
                    relative

                    max-w-7xl
                    mx-auto

                    px-5
                    sm:px-6
                    lg:px-8

                    min-h-[calc(100vh-90px)]

                    flex
                    items-center

                    py-12
                    md:py-16
                    lg:py-20
                "
            >
                <div
                    className="
                        grid
                        grid-cols-1
                        lg:grid-cols-2

                        gap-14
                        lg:gap-20
                        xl:gap-24

                        items-center
                        w-full
                    "
                >
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                            ease: "easeOut",
                        }}
                        className="
                            flex
                            flex-col
                            justify-center
                        "
                    >
                        <HeroContent />

                        <HeroStats />
                    </motion.div>

                    {/* Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: "easeOut",
                        }}
                        className="
                            relative

                            flex
                            justify-center
                            items-center
                        "
                    >
                        <HeroIllustration />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    y: [0, 10, 0],
                }}
                transition={{
                    delay: 1.5,
                    duration: 2,
                    repeat: Infinity,
                }}
                className="
                    absolute
                    bottom-8
                    left-1/2
                    -translate-x-1/2

                    hidden
                    lg:flex

                    flex-col
                    items-center
                    gap-2
                "
            >
                <span
                    className="
                        text-xs
                        font-bold
                        tracking-[0.3em]
                        uppercase

                        text-[var(--text-secondary)]
                    "
                >
                    Scroll
                </span>

                <div
                    className="
                        relative

                        w-[3px]
                        h-10

                        overflow-hidden

                        bg-[var(--border-primary)]
                    "
                >
                    <motion.div
                        animate={{
                            y: [-10, 40],
                        }}
                        transition={{
                            duration: 1.6,
                            repeat: Infinity,
                        }}
                        className="
                            absolute
                            top-0
                            left-0

                            w-full
                            h-3

                            bg-[var(--accent-primary)]
                        "
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;