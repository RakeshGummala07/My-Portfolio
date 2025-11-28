import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import AnimatedThemeToggler from "./AnimatedThemeToggler";

export default function Navbar() {
  const navItems = [
    { title: "Myfolio", href: "/" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
  ];

  const [hovered, setHovered] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        animate={{
          boxShadow: scrolled
            ? "0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28, 33, 0.08)"
            : "none",
          maxWidth: scrolled ? "85%" : "100%",
          y: scrolled ? 10 : 0,
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderRadius: scrolled ? "24px" : "0px",
          transition: { type: "spring", stiffness: 400, damping: 40 },
          borderBottom: scrolled
            ? "none"
            : "1px solid rgba(128, 128, 128, 0.2)",
        }}
        className={`flex sticky top-0 inset-x-0 px-3 items-center justify-between z-50 ${scrolled ? "mx-auto backdrop-blur-md bg-white/10 dark:bg-black/10 py-1" : "py-2"} ${scrolled ? "max-w-[80%]" : "max-w-4xl"}`}
      >
        {/* Logo (shows only when scrolled) */}
        <p className={`transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <Link to="/">
            <img
              src="/icons/logo.jpg"
              alt="logo"
              className="size-7 rounded-full"
            />
          </Link>
        </p>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              className="text-sm md:text-base relative px-1 text-neutral-900 dark:text-neutral-100 font-mono"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === idx && (
                <motion.span
                  layoutId="nav-hover"
                  className="absolute inset-0 bg-neutral-100/80 dark:bg-neutral-800/80 rounded-md"
                />
              )}
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <AnimatedThemeToggler />
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`block w-5 h-0.5 bg-neutral-900 dark:bg-neutral-100 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-neutral-900 dark:bg-neutral-100 transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-neutral-900 dark:bg-neutral-100 transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-60 bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <motion.ul
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="flex flex-col items-center justify-center space-y-6 h-full font-mono text-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.href}
                  className="text-neutral-900 dark:text-neutral-100 hover:scale-105 transition-transform"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </>
  );
}