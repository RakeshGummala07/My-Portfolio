import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import AnimatedThemeToggler from "./AnimatedThemeToggler";

const navItems = [
  { title: "Myfolio", href: "/" },
  { title: "Projects", href: "/projects" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [hovered, setHovered] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  // Close the mobile menu with the Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const linkClass = ({ isActive }) =>
    `relative rounded-md px-1 font-mono text-sm text-neutral-900 transition-colors md:text-base dark:text-neutral-100 ${
      isActive ? "font-bold underline underline-offset-4" : ""
    }`;

  return (
    <>
      <motion.nav
        aria-label="Main"
        animate={{
          boxShadow: scrolled
            ? "0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)"
            : "none",
          maxWidth: scrolled ? "75%" : "100%",
          y: scrolled ? 10 : 0,
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderRadius: scrolled ? "24px" : "0px",
          borderBottom: scrolled
            ? "none"
            : "1px solid rgba(128, 128, 128, 0.2)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
        className={`inset-x-0 top-0 z-50 flex items-center justify-between px-3 sticky ${
          scrolled
            ? "mx-auto bg-white/10 py-1 backdrop-blur-md dark:bg-black/10"
            : "py-2"
        }`}
      >
        {/* Logo appears once the page is scrolled */}
        <Link
          to="/"
          aria-label="Home"
          aria-hidden={!scrolled}
          tabIndex={scrolled ? 0 : -1}
          style={{ visibility: scrolled ? "visible" : "hidden" }}
          className="rounded-full"
        >
          <img
            src="/assets/logo.jpg"
            alt=""
            className="size-7 rounded-full object-cover"
          />
        </Link>

        <div className="flex items-center gap-3">
          <AnimatedThemeToggler />

          {/* Hamburger (mobile) */}
          <button
            type="button"
            className="flex h-8 w-8 flex-col items-center justify-center space-y-1 md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span
              className={`block h-0.5 w-5 bg-neutral-900 transition-transform duration-300 dark:bg-neutral-100 ${isOpen ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-neutral-900 transition-opacity duration-300 dark:bg-neutral-100 ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-neutral-900 transition-transform duration-300 dark:bg-neutral-100 ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </button>

          {/* Desktop links */}
          <div className="hidden items-center gap-3 md:flex">
            {navItems.map((item, idx) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                className={linkClass}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                {hovered === idx && (
                  <motion.span
                    layoutId="hovered-span"
                    className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                  />
                )}
                <span className="relative z-10">{item.title}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu lives outside <nav>: a backdrop-filter on the nav would
          otherwise turn "fixed" into "positioned inside the nav". */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 flex items-center justify-center bg-neutral-100 dark:bg-neutral-900"
            onClick={() => setIsOpen(false)}
          >
            <button
              type="button"
              aria-label="Close menu"
              className="absolute top-4 right-4 rounded-full p-2 text-2xl text-neutral-900 dark:text-neutral-100"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="flex flex-col items-center justify-center space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `font-mono text-2xl text-neutral-900 transition-colors hover:text-neutral-600 dark:text-neutral-100 dark:hover:text-neutral-400 ${
                      isActive ? "font-bold underline underline-offset-4" : ""
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}