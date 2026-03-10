import { motion } from "framer-motion";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="
          flex flex-col md:flex-row
          items-center justify-between
          gap-6
          py-4
        ">
                    {/* LEFT — BRAND */}
                    <div className="text-lg font-semibold text-[var(--text-primary)]">
                        <a 
                            href="#Home" 
                            className="hover:text-[var(--accent-primary)] transition-colors"
                            aria-label="Go to home"
                        >
                            Himanshu<span className="text-[var(--accent-primary)]">.</span>
                        </a>
                    </div>

                    {/* CENTER — COPYRIGHT */}
                    <p className="text-sm text-[var(--text-muted)] text-center">
                        © {currentYear} Himanshu Kumar. All rights reserved.
                    </p>

                    {/* RIGHT — SOCIAL */}
                    <div className="flex items-center gap-4">
                        <motion.a
                            href="https://github.com/himanshukumar-18"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="
                text-[var(--text-muted)]
                hover:text-[var(--accent-primary)]
                transition-colors
              "
                        >
                            <i className="fa-brands fa-github text-lg" aria-hidden="true" />
                        </motion.a>

                        <motion.a
                            href="https://www.linkedin.com/in/himanshu-kumar-8b5845313/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="
                text-[var(--text-muted)]
                hover:text-[var(--accent-primary)]
                transition-colors
              "
                        >
                            <i className="fa-brands fa-linkedin-in text-lg" aria-hidden="true" />
                        </motion.a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

