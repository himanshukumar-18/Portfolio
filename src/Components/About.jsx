import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profile from "../images/profile.jpeg";

const About = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            id: 0,
            label: "Main skills",
            content: (
                <div className="mainSkill h-[200px]">
                    <h3 className="font-bold text-[#717173]">Front-end</h3>
                    <p className="mb-3 text-[#7e7e7e]">
                        <span>HTML</span>, <span>CSS</span>, <span>JAVASCRIPT</span>, <span>REACT</span>, <span>TAILWIND CSS</span>
                    </p>

                    <h3 className="font-bold text-[#717173]">
                        Back-end
                    </h3>
                    <p className="mb-3 text-[#7e7e7e]">
                        <span>NODE JS</span>, <span>EXPRESS JS</span>, <span>API</span>, <span>NPM</span>, <span>PYTHON</span>
                    </p>

                    <h3 className="font-bold text-[#717173]">Database</h3>
                    <p className="text-[#7e7e7e] mb-3">
                        <span>MONGODB</span>, <span>MYSQL</span>
                    </p>


                    <h3 className="font-bold text-[#717173]">Version Control</h3>
                    <p className="text-[#7e7e7e]">
                        <span>GIT</span>, <span>GITHUB</span>
                    </p>
                </div>
            ),
        },

        {
            id: 1,
            label: "Education & Certification",
            content: (
                <div className="education h-[200px]">
                    <h3 className="font-bold text-[#717173]">Bachelor Degree (BCA)</h3>
                    <p className="mb-3 text-[#7e7e7e]">
                        Jharkhand Rai University Ranchi (2025 - 2028)
                    </p>

                    <h3 className="font-bold text-[#717173]">Web Development Course</h3>
                    <p className="mb-3 text-[#7e7e7e]">
                        Arena Animation Hazaribag (6 month's With Certificate)
                    </p>

                    <h3 className="font-bold text-[#717173]">
                        Higher Secoundry Education
                    </h3>
                    <p className="mb-3 text-[#7e7e7e]">
                        Barhi Inter Collage Barhi 57% (JAC 2022 - 2024)
                    </p>

                    <h3 className="font-bold text-[#717173]">Secoundry Education</h3>
                    <p className="mb-3 text-[#7e7e7e]">
                        Vivekananda Central School Hazaribag 60% (CBSE 2010 - 2022)
                    </p>
                </div>
            ),
        },

        {
            id: 2,
            label: "Experience",
            content: (
                <div className="exp h-[200px]">
                    <p>
                        I developed hands-on experience in making websites through freelance. This are link to check out [<a className="font-semibold text-[#717173] underline hover:text-[#f9004d] duration-200" href="https://skillsnation.in/" target="blank_">SkillNation.in</a> , <a className="font-semibold underline text-[#717173] hover:text-[#f9004d] duration-200" href="https://udayanpublicschool.org/" target="blank_">UdyanPublicSchool.in</a>]
                    </p>
                </div>
            ),
        },
    ];

    return (
        <>
            <section
                id="About"
                className="relative w-full py-24 overflow-hidden"
            >
                {/* Ambient background */}
                <div className="absolute inset-0 bg-[var(--bg-secondary)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                        {/* LEFT – IMAGE */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className="lg:col-span-5"
                        >
                            <div
                                className="
            relative
            rounded-3xl overflow-hidden
            bg-white/5
            border border-white/10
            backdrop-blur-xl
            shadow-[0_30px_80px_rgba(0,0,0,0.6)]
          "
                            >
                                <img
                                    src={profile}
                                    alt="Himanshu Kumar"
                                    className="w-full h-[420px] sm:h-[520px] object-cover grayscale hover:grayscale-0 transition duration-700"
                                />
                            </div>
                        </motion.div>

                        {/* RIGHT – CONTENT */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className="lg:col-span-7"
                        >
                            {/* Heading */}
                            <span className="uppercase tracking-[0.35em] text-xs text-[var(--text-muted)]">
                                About Me
                            </span>

                            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[var(--text-primary)]">
                                Designing & building <br />
                                <span className="text-[var(--accent-primary)]">
                                    thoughtful web products
                                </span>
                            </h2>

                            <p className="mt-6 text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                                I’m a Full Stack Developer focused on creating fast, scalable, and
                                maintainable web applications. I care deeply about clean architecture,
                                performance, and user experience — not just making things work, but
                                making them feel right.
                            </p>

                            {/* TABS */}
                            <div className="mt-10">
                                <div className="
    relative
    flex items-center
    gap-12
    border-b border-white/10
    pb-4
  ">
                                    {tabs.map((tab, index) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(index)}
                                            className={`
          relative
          flex items-center
          h-auto
          px-1
          text-sm
          font-medium
          tracking-wide
          transition-colors duration-300
          ${activeTab === index
                                                    ? "text-[var(--accent-primary)]"
                                                    : "text-[var(--text-muted)] hover:text-white"
                                                }
        `}
                                        >
                                            {tab.label}
                                            {activeTab === index && (
                                                <motion.span
                                                    layoutId="aboutTab"
                                                    className="
              absolute
              left-1/2
              -bottom-2
              w-8
              h-[2px]
              bg-[var(--accent-primary)]
              rounded-full
              -translate-x-1/2
            "
                                                />
                                            )}
                                        </button>
                                    ))}
                                </div>

                                {/* TAB CONTENT */}
                                <div className="
    mt-8
    rounded-2xl
    bg-white/5
    backdrop-blur-xl
    border border-white/10
    p-6
    text-[var(--text-secondary)]
    shadow-lg
  ">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {tabs[activeTab].content}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About