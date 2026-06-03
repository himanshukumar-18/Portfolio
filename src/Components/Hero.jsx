import { motion, useScroll, useTransform } from "framer-motion";
import bg from "../images/hero-bg.jpg"; // dark, minimal background
import TypingText from "../Components/HeadingText";

const cv = "https://drive.google.com/file/d/1q2fvZg5nP8m5MdRRBocu0rinCKnu3xka/view?usp=sharing"

const Hero = () => {
    const { scrollY } = useScroll();

    // Cinematic motion mapping
    const bgScale = useTransform(scrollY, [0, 400], [1.15, 1]);
    const bgY = useTransform(scrollY, [0, 400], [0, 80]);

    const contentY = useTransform(scrollY, [0, 300], [0, -50]);
    const contentOpacity = useTransform(scrollY, [0, 250], [1, 0.85]);

    return (
        <section
            className=" relative
    min-h-screen
    overflow-hidden
    flex
    items-center
    justify-center

    pt-32
    sm:pt-36
    md:pt-24
    lg:pt-20

    pb-16
    px-4
    sm:px-6
    lg:px-8"
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
            </motion.div >

    {/* 🌑 DEPTH OVERLAYS */ }
    < div className = "absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 backdrop-blur-md" />

{/* 🌈 AMBIENT GRADIENT (SUBTLE LIFE) */ }
<motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
    className="absolute inset-0 bg-gradient-to-tr from-[#f9004d]/10 via-transparent to-transparent"
/>

{/* 🎯 CONTENT */ }
<motion.div
    style={{ y: contentY, opacity: contentOpacity }}
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    className="relative z-10 max-w-4xl w-full px-4 sm:px-6"
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
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-6 flex justify-center"
            >
                <div
                    className="
      px-5 py-2
      rounded-full
      bg-green-500/10
      border border-green-500/20
      backdrop-blur-xl
      flex items-center gap-2
      shadow-[0_0_25px_rgba(34,197,94,0.15)]
    "
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
                    </span>

                    <span className="text-sm text-green-300 font-medium">
                        Available for Freelance & Full-Time Opportunities
                    </span>
                </div>
            </motion.div>
            <TypingText />
        </motion.span>

        {/* HEADLINE */}
        <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.9 }}
            className="
              mt-6
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              font-extrabold
              leading-tight
              text-[var(--text-primary)]
            "
        >
            Crafting Modern<br />
            <span className="text-[var(--accent-primary)]">
                Digital Experiences.
            </span>
        </motion.h1>

        {/* SUBLINE */}
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="
              mt-6
              text-base sm:text-lg
              text-[var(--text-secondary)]
            "
        >
            Hi, I’m{" "}
            <span className="text-white font-medium">
                Himanshu Kumar
            </span>{" "}
            - a Full Stack Developer focused on building responsive, scalable, and high-performance web applications.
        </motion.p>
    </div>

    {/* CTA BUTTONS */}
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
    >
        {/* View Projects */}
        <a
            href="#Work"
            className="
      group
      px-8 py-3
      rounded-2xl
      bg-[var(--accent-primary)]
      text-white
      font-medium
      shadow-[0_0_30px_rgba(249,0,77,0.35)]
      hover:scale-105
      hover:shadow-[0_0_45px_rgba(249,0,77,0.55)]
      transition-all duration-300
    "
        >
            <span className="flex items-center gap-2">
                View Projects
                <span className="group-hover:translate-x-1 transition-transform">
                    →
                </span>
            </span>
        </a>

        {/* Download CV */}
        <a
            href={cv} // import your CV file
            target="_blank"
            rel="noopener noreferrer"
            className="
      px-8 py-3
      rounded-2xl
      bg-white/5
      backdrop-blur-xl
      border border-white/10
      text-white
      font-medium
      hover:bg-white/10
      hover:border-white/20
      hover:scale-105
      transition-all duration-300
    "
        >
            Download CV
        </a>
    </motion.div>

    <motion.div
        initial="hidden"
        animate="visible"
        variants={{
            hidden: {},
            visible: {
                transition: {
                    staggerChildren: 0.15,
                    delayChildren: 1,
                },
            },
        }}
        className="mt-10 flex items-center justify-center gap-8 text-center flex-wrap"
    >
        {[
            { value: "10+", label: "Projects Built" },
            { value: "3+", label: "Client Works" },
            { value: "Open", label: "For Hiring" },
        ].map((item, index) => (
            <motion.div
                key={index}
                variants={{
                    hidden: {
                        opacity: 0,
                        y: 30,
                        scale: 0.9,
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                    },
                }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                }}
                whileHover={{
                    y: -5,
                    scale: 1.05,
                }}
                className="
        min-w-[100px]
        px-4 py-3
        rounded-2xl
        bg-white/5
        backdrop-blur-lg
        border border-white/10
        hover:border-[var(--accent-primary)]
        transition-all duration-300
      "
            >
                <h3 className="text-2xl font-bold text-white">
                    {item.value}
                </h3>

                <p className="text-sm text-[var(--text-muted)] mt-1">
                    {item.label}
                </p>
            </motion.div>
        ))}
    </motion.div>
</motion.div>

{/* ⬇️ SCROLL INDICATOR */ }
<motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 1.5 }}
    className="absolute bottom-8 left-1/2 -translate-x-1/2"
>
    <div className="w-7 h-12 border border-white/20 rounded-full flex justify-center">
        <div className="w-1.5 h-3 bg-[var(--accent-primary)] rounded-full mt-2" />
    </div>
</motion.div>
        </section >
    );
};

export default Hero;
