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
                <div className="space-y-4">
                    <div>
                        <h3 className="font-bold text-[var(--accent-primary)] text-sm uppercase tracking-wide">Front-end</h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"].map((skill) => (
                                <span key={skill} className="px-3 py-1 text-xs rounded-full bg-white/10 text-[var(--text-secondary)]">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-[var(--accent-primary)] text-sm uppercase tracking-wide">Back-end</h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {["Node.js","API", "Python(basic)"].map((skill) => (
                                <span key={skill} className="px-3 py-1 text-xs rounded-full bg-white/10 text-[var(--text-secondary)]">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-[var(--accent-primary)] text-sm uppercase tracking-wide">Database</h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {["MongoDB", "MySQL"].map((skill) => (
                                <span key={skill} className="px-3 py-1 text-xs rounded-full bg-white/10 text-[var(--text-secondary)]">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-[var(--accent-primary)] text-sm uppercase tracking-wide">Version Control</h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {["Git", "GitHub"].map((skill) => (
                                <span key={skill} className="px-3 py-1 text-xs rounded-full bg-white/10 text-[var(--text-secondary)]">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ),
        },

        {
            id: 1,
            label: "Education",
            content: (
                <div className="space-y-5">
                    <div className="border-l-2 border-[var(--accent-primary)] pl-4">
                        <h3 className="font-bold text-[var(--text-primary)]">Bachelor Degree (BCA)</h3>
                        <p className="text-sm text-[var(--text-muted)] mt-1">
                            Jharkhand Rai University Ranchi (2025 - 2028)
                        </p>
                    </div>

                    <div className="border-l-2 border-[var(--accent-primary)] pl-4">
                        <h3 className="font-bold text-[var(--text-primary)]">Web Development Course</h3>
                        <p className="text-sm text-[var(--text-muted)] mt-1">
                            Arena Animation Hazaribag (6 months With Certificate)
                        </p>
                    </div>

                    <div className="border-l-2 border-[var(--accent-primary)] pl-4">
                        <h3 className="font-bold text-[var(--text-primary)]">Higher Secondary Education</h3>
                        <p className="text-sm text-[var(--text-muted)] mt-1">
                            Barhi Inter College Barhi 57% (JAC 2022 - 2024)
                        </p>
                    </div>

                    <div className="border-l-2 border-[var(--accent-primary)] pl-4">
                        <h3 className="font-bold text-[var(--text-primary)]">Secondary Education</h3>
                        <p className="text-sm text-[var(--text-muted)] mt-1">
                            Vivekananda Central School Hazaribag 60% (CBSE 2010 - 2022)
                        </p>
                    </div>
                </div>
            ),
        },

        {
            id: 2,
            label: "Experience",
            content: (
                <div className="space-y-4">
                    <p className="text-[var(--text-secondary)]">
                        I developed hands-on experience in making websites through freelance work. Here are some projects I have worked on:
                    </p>
                    
                    <div className="space-y-3 pt-2">
                        <a 
                            href="https://thetastecatering.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
                        >
                            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)]" />
                            thetastecatering.com
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>

                        <a 
                            href="https://skillsnation.in/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
                        >
                            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)]" />
                            SkillNation.in
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                        
                        <a 
                            href="https://udayanpublicschool.org/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
                        >
                            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)]" />
                            UdyanPublicSchool.in
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>
            ),
        },
    ];

    return (
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
                            I am a Full Stack Developer focused on creating fast, scalable, and
                            maintainable web applications. I care deeply about clean architecture,
                            performance, and user experience — not just making things work, but
                            making them feel right.
                        </p>

                        {/* TABS */}
                        <div className="mt-10">
                            <div 
                                className="
    relative
    flex items-center
    gap-8
    border-b border-white/10
    pb-4
  "
                                role="tablist"
                            >
                                {tabs.map((tab, index) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(index)}
                                        role="tab"
                                        aria-selected={activeTab === index}
                                        aria-controls={`tabpanel-${tab.id}`}
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
                            <div
                                className="
    mt-8
    rounded-2xl
    bg-white/5
    backdrop-blur-xl
    border border-white/10
    p-6
    text-[var(--text-secondary)]
    shadow-lg
  "
                                role="tabpanel"
                                id={`tabpanel-${tabs[activeTab].id}`}
                            >
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

    )
}

export default About

