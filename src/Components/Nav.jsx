import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cv from "../pdf/Cv.pdf";
import cer from "../pdf/ArenaCert.pdf";

const links = [
  { name: "Home", href: "#Home" },
  { name: "About", href: "#About" },
  { name: "Work", href: "#Work" },
  { name: "Certificate", href: cer, external: true },
  { name: "Contact", href: "#Contact" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-4 left-0 w-full z-50"
    >
      {/* Floating Glass Bar */}
      <div
        className="
          mx-auto max-w-7xl
          px-5 sm:px-6 py-3
          flex items-center justify-between
          rounded-2xl
          backdrop-blur-xl
          bg-[var(--glass-bg)]
          border border-[var(--glass-border)]
          shadow-[var(--glass-shadow)]
        "
      >
        {/* LOGO */}
        <a
          href="#Home"
          className="
            text-[var(--text-primary)]
            font-semibold text-base sm:text-lg
            tracking-wide
            hover:text-[var(--accent-primary)]
            transition-colors
          "
          aria-label="Himanshu Kumar - Home"
        >
          Himanshu<span className="text-[var(--accent-primary)]">.</span>
        </a>

        {/* DESKTOP LINKS */}
        <nav className="hidden md:flex" aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            {links.map((item, i) => (
              <li key={i} className="relative group">
                <a
                  href={item.href}
                  target={item.external ? "_blank" : "_self"}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="
                    text-sm
                    text-[var(--text-secondary)]
                    transition-colors duration-300
                    group-hover:text-[var(--text-primary)]
                  "
                >
                  {item.name}
                </a>

                {/* Minimal active dot */}
                <span
                  className="
                    absolute left-1/2 -bottom-2
                    h-1 w-1 rounded-full
                    bg-[var(--accent-primary)]
                    opacity-0 group-hover:opacity-100
                    -translate-x-1/2
                    transition-opacity
                  "
                />
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-4">
          {/* Social Icons */}
          <a
            href="https://github.com/himanshukumar-18"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="
              text-[var(--text-muted)]
              hover:text-[var(--text-primary)]
              hover:text-[var(--accent-primary)]
              transition-colors
            "
          >
            <i className="fa-brands fa-github text-lg" aria-hidden="true" />
          </a>

          <a
            href="https://www.linkedin.com/in/himanshu-kumar-8b5845313/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="
              text-[var(--text-muted)]
              hover:text-[var(--text-primary)]
              hover:text-[var(--accent-primary)]
              transition-colors
            "
          >
            <i className="fa-brands fa-linkedin-in text-lg" aria-hidden="true" />
          </a>

          {/* CV BUTTON */}
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download CV"
            className="
              px-5 py-2
              rounded-xl text-sm
              text-[var(--btn-text)]
              bg-[var(--btn-bg)]
              border border-[var(--glass-border)]
              backdrop-blur-lg
              hover:bg-[var(--btn-hover)]
              hover:border-[var(--accent-primary)]
              hover:shadow-[var(--accent-glow)]
              transition-all duration-300
            "
          >
            CV
          </a>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden
            text-[var(--text-primary)]
            text-xl
            p-2
            hover:text-[var(--accent-primary)]
            transition-colors
          "
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <i className={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"} aria-hidden="true" />
        </button>
      </div>

      {/* MOBILE GLASS MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              md:hidden
              mt-3 mx-4
              rounded-2xl
              backdrop-blur-xl
              bg-[var(--glass-bg)]
              border border-[var(--glass-border)]
              shadow-[var(--glass-shadow)]
            "
          >
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col p-6 gap-5">
                {links.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : "_self"}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      onClick={handleLinkClick}
                      className="
                        text-sm
                        text-[var(--text-secondary)]
                        hover:text-[var(--accent-primary)]
                        transition-colors
                      "
                    >
                      {item.name}
                    </a>
                  </li>
                ))}

                <a
                  href={cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="
                    mt-2 py-3 text-center
                    rounded-xl
                    bg-[var(--accent-primary)]
                    text-white
                    hover:opacity-90
                    transition
                  "
                >
                  Download CV
                </a>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Nav;

