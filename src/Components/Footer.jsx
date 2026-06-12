import { motion } from "framer-motion";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="
        relative
        overflow-hidden
        border-t border-white/10
        bg-[var(--bg-secondary)]
      "
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-soft)]/20 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16">

                {/* TOP */}
                <div className="grid md:grid-cols-3 gap-10">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-white">
                            Himanshu
                            <span className="text-[var(--accent-primary)]">.</span>
                        </h2>

                        <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
                            Full Stack Developer focused on building modern,
                            scalable, and high-performance web applications
                            with clean architecture and exceptional user experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-5">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-3">
                            {[
                                "Home",
                                "About",
                                "Education",
                                "Skills",
                                "Work",
                                "Contact",
                            ].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item}`}
                                    className="
                    text-[var(--text-secondary)]
                    hover:text-[var(--accent-primary)]
                    transition-colors
                  "
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-5">
                            Let's Connect
                        </h3>

                        <p className="text-[var(--text-secondary)] mb-4">
                            Available for freelance projects,
                            internships, and full-time opportunities.
                        </p>

                        <a
                            href="mailto:rajh5343@gmail.com"
                            className="
                inline-flex
                items-center
                gap-2
                px-5 py-3
                rounded-xl
                bg-[var(--accent-primary)]
                text-white
                font-medium
                hover:scale-105
                transition-all
              "
                        >
                            Say Hello
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-10 h-px bg-white/10" />

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    <p className="text-sm text-[var(--text-muted)]">
                        © {currentYear} Himanshu Kumar. Crafted with React,
                        Tailwind CSS & lots of coffee ☕
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-5">

                        <motion.a
                            whileHover={{ y: -4 }}
                            href="https://github.com/himanshukumar-18"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                w-11 h-11
                flex items-center justify-center
                rounded-full
                bg-white/5
                border border-white/10
                text-white
                hover:border-[var(--accent-primary)]
                hover:text-[var(--accent-primary)]
                transition-all
              "
                        >
                            <i className="fa-brands fa-github"></i>
                        </motion.a>

                        <motion.a
                            whileHover={{ y: -4 }}
                            href="https://www.linkedin.com/in/himanshu-kumar-8b5845313/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                w-11 h-11
                flex items-center justify-center
                rounded-full
                bg-white/5
                border border-white/10
                text-white
                hover:border-[var(--accent-primary)]
                hover:text-[var(--accent-primary)]
                transition-all
              "
                        >
                            <i className="fa-brands fa-linkedin-in"></i>
                        </motion.a>

                        <motion.a
                            whileHover={{ y: -4 }}
                            href="mailto:rajh5343@gmail.com"
                            className="
                w-11 h-11
                flex items-center justify-center
                rounded-full
                bg-white/5
                border border-white/10
                text-white
                hover:border-[var(--accent-primary)]
                hover:text-[var(--accent-primary)]
                transition-all
              "
                        >
                            <i className="fa-solid fa-envelope"></i>
                        </motion.a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;