import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";

const links = [
  { name: "Home", href: "#Home" },
  { name: "About", href: "#About" },
  { name: "Education", href: "#Education" },
  { name: "Skills", href: "#Skills" },
  { name: "Work", href: "#Work" },
  { name: "Contact", href: "#Contact" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#Home");

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const sections = links.map((link) =>
      document.querySelector(link.href)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Scroll Progress */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
        }}
        className="
fixed
top-0
left-0
right-0
h-[2px]
bg-[var(--accent-primary)]
origin-left
z-[999]
"
      />
      <motion.header
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
      fixed
      top-4
      left-0
      w-full
      z-50
      px-4
    "
      >
        <div
          className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        rounded-2xl
        backdrop-blur-xl
        bg-black/20
        border border-white/10
        shadow-[0_8px_40px_rgba(0,0,0,.35)]
      "
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#Home"
              className="
            text-xl
            font-semibold
            text-[var(--text-primary)]
          "
            >
              Himanshu
              <span className="text-[var(--accent-primary)]">
                .
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8">
                {links.map((item) => (
                  <li
                    key={item.href}
                    className="relative"
                  >
                    <a
                      href={item.href}
                      className={`
                    text-sm
                    transition-all
                    duration-300
                    ${active === item.href
                          ? "text-[var(--accent-primary)]"
                          : "text-[var(--text-secondary)] hover:text-white"
                        }
                  `}
                    >
                      {item.name}
                    </a>

                    {active === item.href && (
                      <motion.span
                        layoutId="activeLink"
                        className="
                      absolute
                      left-0
                      -bottom-2
                      h-[2px]
                      w-full
                      bg-[var(--accent-primary)]
                    "
                      />
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <a
                href="mailto:rajh5343@gmail.com?subject=Let's Work Together"
                className="
              hidden md:flex
              items-center
              gap-2
              px-5 py-2.5
              rounded-xl
              bg-[var(--accent-primary)]
              text-white
              text-sm
              font-medium
              hover:scale-105
              transition-all
              duration-300
            "
              >
                Let's Talk
              </a>

              {/* Mobile Button */}
              <button
                onClick={() => setOpen(!open)}
                className="
              md:hidden
              text-white
              text-xl
            "
              >
                <i
                  className={
                    open
                      ? "fa-solid fa-xmark"
                      : "fa-solid fa-bars"
                  }
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              className="
            md:hidden
            mt-4
            rounded-2xl
            backdrop-blur-xl
            bg-black/30
            border border-white/10
          "
            >
              <ul className="p-6 space-y-5">
                {links.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="
                    text-[var(--text-secondary)]
                    hover:text-[var(--accent-primary)]
                  "
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="p-6 pt-0">
                <a
                  href="mailto:rajh5343@gmail.com"
                  className="
                flex
                justify-center
                py-3
                rounded-xl
                bg-[var(--accent-primary)]
                text-white
              "
                >
                  Let's Talk
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}

export default Nav;
