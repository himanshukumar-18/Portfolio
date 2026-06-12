import { motion } from "framer-motion";
import HireFrom from "./HireFrom";
import profile from "../images/profile.jpg";

const Contact = () => {
    return (
        <section
            id="Contact"
            className="relative w-full py-24 md:py-32 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-[var(--bg-secondary)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-6"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
                        >
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            Available for Work
                        </motion.div>

                        <span className="block mt-6 uppercase tracking-[0.35em] text-xs text-[var(--text-muted)]">
                            LET'S WORK TOGETHER
                        </span>

                        <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] leading-tight">
                            Let's Build Something
                            <br />
                            <span className="text-[var(--accent-primary)]">
                                Great Together
                            </span>
                        </h2>

                        <p className="mt-6 text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl">
                            I'm currently available for full-time opportunities,
                            freelance projects, and collaborations. If you're looking
                            for a developer who focuses on performance, scalability,
                            clean code, and user experience, I'd love to hear about
                            your project.
                        </p>

                        {/* Contact Cards */}
                        <div className="mt-8 grid sm:grid-cols-2 gap-4">

                            <a
                                href="tel:+916201030273"
                                className="
                  rounded-2xl
                  bg-white/5
                  border border-white/10
                  backdrop-blur-xl
                  p-4
                  hover:border-[var(--accent-primary)]
                  transition-all duration-300
                "
                            >
                                <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest">
                                    Phone
                                </p>
                                <p className="mt-2 text-white font-medium">
                                    +91 6201030273
                                </p>
                            </a>

                            <a
                                href="mailto:rajh5343@gmail.com"
                                className="
                  rounded-2xl
                  bg-white/5
                  border border-white/10
                  backdrop-blur-xl
                  p-4
                  hover:border-[var(--accent-primary)]
                  transition-all duration-300
                "
                            >
                                <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest">
                                    Email
                                </p>
                                <p className="mt-2 text-white font-medium break-all">
                                    rajh5343@gmail.com
                                </p>
                            </a>

                        </div>

                        <p className="mt-5 text-sm text-[var(--text-muted)]">
                            Usually responds within 24 hours.
                        </p>

                        {/* Form */}
                        <div
                            className="
                mt-10
                rounded-3xl
                bg-white/5
                backdrop-blur-2xl
                border border-white/10
                p-6 md:p-8
                shadow-[0_30px_80px_rgba(0,0,0,0.6)]
              "
                        >
                            <HireFrom />
                        </div>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                        className="lg:col-span-6 hidden lg:block"
                    >
                        <div
                            className="
                relative
                h-[580px]
                rounded-3xl
                overflow-hidden
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                shadow-[0_30px_80px_rgba(0,0,0,0.6)]
              "
                        >
                            <img
                                src={profile}
                                alt="Himanshu Kumar"
                                className="
                  w-full h-full object-cover
                  grayscale
                  hover:grayscale-0
                  scale-105
                  transition-all duration-700
                "
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                            <div className="absolute bottom-8 left-8 right-8">
                                <div
                                    className="
                    rounded-2xl
                    bg-black/30
                    backdrop-blur-xl
                    border border-white/10
                    p-5
                  "
                                >
                                    <p className="text-sm text-[var(--text-muted)]">
                                        Full Stack Developer
                                    </p>

                                    <h3 className="mt-2 text-2xl font-bold text-white">
                                        Himanshu Kumar
                                    </h3>

                                    <p className="mt-3 text-sm text-[var(--text-secondary)]">
                                        Building modern, scalable, and high-performance web
                                        applications with React, Node.js, Django, and AI
                                        technologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;