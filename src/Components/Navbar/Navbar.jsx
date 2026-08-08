import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Logo from "./Logo";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";
import { navLinks, ctaButton } from "./navData";

const Navbar = () => {
  const [active, setActive] = useState("#Home");
  const [open, setOpen] = useState(false);

  // ── Scroll spy: track which section is in view ──────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

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

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Navigation: dispatch smoothScrollTo event so the inertia engine handles it ─
  const handleScrollTo = (href) => {
    const section = document.querySelector(href);

    if (section) {
      const offsetTop =
        section.getBoundingClientRect().top + window.scrollY - 75;

      window.dispatchEvent(
        new CustomEvent("smoothScrollTo", { detail: { y: offsetTop } })
      );
    }

    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className="
        fixed
        top-3
        sm:top-4
        left-0
        w-full
        z-50
        px-3
        sm:px-4
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          bg-[var(--bg-card)]
          border-[3px]
          border-black
          shadow-[5px_5px_0px_#111]
          rounded-[4px]
        "
      >
        <div className="flex items-center justify-between gap-4 lg:gap-6 px-3.5 sm:px-5 py-2 sm:py-2.5">

          {/* Logo */}
          <Logo handleScrollTo={handleScrollTo} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:block" aria-label="Main navigation">
            <ul className="flex items-center gap-1.5 xl:gap-2">
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
          <div className="flex items-center gap-3 shrink-0">

            {/* CTA */}
            <motion.button
              whileHover={{
                y: -2,
                rotate: -1,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={() =>
                handleScrollTo(ctaButton.href)
              }
              className="
                hidden
                md:inline-flex
                items-center
                justify-center
                gap-1.5
                px-4
                xl:px-5
                h-9
                uppercase
                font-black
                tracking-wider
                bg-[var(--accent-primary)]
                text-white
                border-[2.5px]
                border-black
                shadow-[3px_3px_0px_#111]
                hover:shadow-[5px_5px_0px_#111]
                transition-all
                duration-150
                text-xs
                whitespace-nowrap
                cursor-pointer
              "
            >
              {ctaButton.title}
              <span aria-hidden="true">→</span>
            </motion.button>

            {/* Mobile Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="
                lg:hidden
                w-10
                h-10
                flex
                items-center
                justify-center
                border-[2.5px]
                border-black
                bg-[var(--accent-yellow)]
                shadow-[3px_3px_0px_#111]
                text-lg
                font-black
                cursor-pointer
                shrink-0
              "
            >
              <span aria-hidden="true">{open ? "✕" : "☰"}</span>
            </motion.button>

          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu">
          <MobileMenu
            open={open}
            links={navLinks}
            active={active}
            handleScrollTo={handleScrollTo}
            setOpen={setOpen}
          />
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;