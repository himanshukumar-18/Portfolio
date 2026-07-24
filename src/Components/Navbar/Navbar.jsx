import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Logo from "./Logo";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";
import { navLinks, ctaButton } from "./navData";

const Navbar = () => {
  const [active, setActive] = useState("#Home");
  const [open, setOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      navLinks.forEach((item) => {
        const section = document.querySelector(item.href);

        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          setActive(item.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (href) => {
    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="
          fixed
          top-5
          left-0
          w-full
          z-50
          px-4
        "
      >
        <div
          className="
            max-w-8xl
            mx-auto
            md:p-0
            bg-[var(--bg-card)]
            border-[3px]
            border-[var(--border-primary)]
            shadow-[6px_6px_0px_#111]
            rounded-[4px]
          "
        >
          <div className="flex items-center justify-between gap-6 px-8 py-4">

            {/* Logo */}
            <Logo handleScrollTo={handleScrollTo} />

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-2.5">
                {navLinks.map((item) => (
                  <NavItem
                    key={item.id}
                    item={item}
                    active={active}
                    onClick={handleScrollTo}
                  />
                ))}
              </ul>
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-4 shrink-0">

              {/* CTA */}
              <motion.button
                whileHover={{
                  y: -3,
                  rotate: -2,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() =>
                  handleScrollTo(ctaButton.href)
                }
                className="
                  hidden
                  md:flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  uppercase
                  font-black
                  tracking-widest
                  bg-[var(--accent-primary)]
                  text-white
                  border-[3px]
                  border-black
                  shadow-[5px_5px_0px_#111]
                  transition-all
                  duration-200
                "
              >
                {ctaButton.title}
                <span>→</span>
              </motion.button>

              {/* Mobile Toggle Button */}
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setOpen(!open)}
                className="
                  lg:hidden
                  w-12
                  h-12
                  flex
                  items-center
                  justify-center
                  border-[3px]
                  border-black
                  bg-[var(--accent-yellow)]
                  shadow-[4px_4px_0px_#111]
                  text-xl
                  font-black
                "
              >
                {open ? "✕" : "☰"}
              </motion.button>

            </div>
          </div>

          {/* Mobile Menu */}
          <MobileMenu
            open={open}
            links={navLinks}
            active={active}
            handleScrollTo={handleScrollTo}
            setOpen={setOpen}
          />
        </div>
      </motion.header>
    </>
  );
};

export default Navbar;