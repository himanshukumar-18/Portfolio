import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";

const links = [
  { name: "Home", href: "#Home" },
  { name: "About", href: "#About" },
  { name: "Education", href: "#Education" },
  { name: "Skills", href: "#Skills" },
  { name: "Work", href: "#Work" },
  { name: "Achievements", href: "#Achievements" },
  { name: "LeetCode", href: "#Leetcode" },
  { name: "Contact", href: "#Contact" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#Home");

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) =>
        document.querySelector(link.href)
      );

      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          setActive(`#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTo = (href) => {
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setOpen(false);
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
        }}
        className="
          fixed
          top-0
          left-0
          right-0
          h-[3px]
          bg-[var(--accent-primary)]
          origin-left
          z-[999]
          shadow-[0_0_15px_#f9004d]
        "
      />

      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
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
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("#Home");
              }}
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

            {/* Desktop Menu */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-8">
                {links.map((item) => (
                  <li
                    key={item.href}
                    className="relative"
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollTo(item.href);
                      }}
                      className={`
                        text-sm
                        font-medium
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
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                        className="
                          absolute
                          left-0
                          right-0
                          -bottom-3
                          h-[2px]
                          rounded-full
                          bg-[var(--accent-primary)]
                          shadow-[0_0_12px_#f9004d]
                        "
                      />
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleScrollTo("#Contact")}
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
                  shadow-[0_0_25px_rgba(249,0,77,.25)]
                "
              >
                Let's Talk
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setOpen(!open)}
                className="
                  lg:hidden
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
              transition={{
                duration: 0.25,
              }}
              className="
                lg:hidden
                mt-4
                rounded-2xl
                backdrop-blur-xl
                bg-black/30
                border border-white/10
                shadow-[0_10px_40px_rgba(0,0,0,.4)]
              "
            >
              <ul className="p-6 space-y-5">
                {links.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollTo(item.href);
                      }}
                      className={`
                        block
                        transition-colors
                        ${active === item.href
                          ? "text-[var(--accent-primary)]"
                          : "text-[var(--text-secondary)]"
                        }
                      `}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="p-6 pt-0">
                <button
                  onClick={() => handleScrollTo("#Contact")}
                  className="
                    w-full
                    py-3
                    rounded-xl
                    bg-[var(--accent-primary)]
                    text-white
                    font-medium
                  "
                >
                  Let's Talk
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Nav;