import { motion } from "framer-motion";
import profile from "../images/profile.jpg";

const About = () => {

    return (
        <section
            id="About"
            className="relative w-full py-24 overflow-hidden"
        >
            {/* Ambient background */}
            <div className="absolute inset-0 bg-[var(--bg-secondary)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

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
                            Turning Ideas Into <br />
                            <span className="text-[var(--accent-primary)]">
                                Powerful Digital Products
                            </span>
                        </h2>

                        <p className="mt-6 text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                            I'm a Full Stack Developer passionate about building modern, scalable,
                            and high-performance web applications that deliver real value to users
                            and businesses. I specialize in creating responsive front-end
                            experiences with React and developing secure, efficient back-end
                            systems using Node.js, Express.js, Python, Django and databases like MongoDB, PostgreSql and MySQL. <br /><br />

                            I enjoy transforming ideas into fully functional digital products,
                            focusing on clean code, intuitive user experiences, and long-term
                            maintainability. Through freelance projects and continuous learning,
                            I have gained hands-on experience in developing business websites,
                            RESTful APIs, and full-stack applications.<br /><br />

                            My goal is to contribute to innovative projects, collaborate with
                            talented teams, and continuously improve my technical and problem-solving
                            skills while building software that makes a meaningful impact.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>

    )
}

export default About

