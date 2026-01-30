import { motion, useScroll, useTransform } from "framer-motion";
import bg from "../images/hero-bg.jpg"; // dark, minimal background
import Heading from "../Components/HeadingText"

const Hero = () => {
    const { scrollY } = useScroll();

    // Cinematic motion mapping
    const bgScale = useTransform(scrollY, [0, 400], [1.15, 1]);
    const bgY = useTransform(scrollY, [0, 400], [0, 80]);

    const contentY = useTransform(scrollY, [0, 300], [0, -50]);
    const contentOpacity = useTransform(scrollY, [0, 250], [1, 0.85]);

    return (
        <section
            className="relative min-h-screen overflow-hidden flex items-center justify-center"
        >
            {/* 🎥 BACKGROUND IMAGE (SLOW CINEMATIC DRIFT) */}
            <motion.div
                style={{ scale: bgScale, y: bgY }}
                className="absolute inset-0"
            >
                <img
                    src={bg}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* 🌑 DEPTH OVERLAYS */}
            <div className="absolute inset-0 bg-black/75" />
            <div className="absolute inset-0 backdrop-blur-md" />

            {/* 🌈 AMBIENT GRADIENT (SUBTLE LIFE) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 bg-gradient-to-tr from-[#f9004d]/10 via-transparent to-transparent"
            />

            {/* 🎯 CONTENT */}
            <motion.div
                style={{ y: contentY, opacity: contentOpacity }}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 max-w-4xl w-full px-6"
            >
                {/* 🧊 GLASS FOCUS CARD */}
                <div
                    className="
            text-center
            rounded-3xl
            bg-white/5
            backdrop-blur-2xl
            border border-white/10
            p-10 md:p-14
            shadow-[0_30px_80px_rgba(0,0,0,0.55)]
          "
                >
                    {/* ROLE */}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25 }}
                        className="
              block
              uppercase
              tracking-[0.4em]
              text-xs
              text-[var(--text-muted)]
            "
                    >
                        <Heading />
                    </motion.span>

                    {/* HEADLINE */}
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.9 }}
                        className="
              mt-6
              text-4xl sm:text-5xl md:text-6xl
              font-extrabold
              leading-tight
              text-[var(--text-primary)]
            "
                    >
                        I build calm, scalable <br />
                        <span className="text-[var(--accent-primary)]">
                            digital experiences.
                        </span>
                    </motion.h1>

                    {/* SUBLINE */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="
              mt-6
              text-lg
              text-[var(--text-secondary)]
            "
                    >
                        Hi, I’m{" "}
                        <span className="text-white font-medium">
                            Himanshu Kumar
                        </span>{" "}
                        — focused on performance, clarity, and detail.
                    </motion.p>
                </div>
            </motion.div>

            {/* ⬇️ SCROLL INDICATOR */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="absolute bottom-10 text-white/50 text-sm tracking-widest"
            >
                Scroll
            </motion.div>
        </section>
    );
};

export default Hero;
