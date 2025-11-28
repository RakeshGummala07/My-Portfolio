import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import AnimatedThemeToggler from "./AnimatedThemeToggler";

export default function Navbar() {
  const navItems = [
    {
      title: "Myfolio",
      href: "/",
    },

    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];

  const [hovered, setHovered] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });
  return (
    <>
      <motion.nav
        animate={{
          boxShadow: scrolled
            ? "0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28, 33, 0.08)"
            : "none",
          maxWidth: scrolled ? "75%" : "100%",
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
        <p
          style={{
            visibility: scrolled ? "visible" : "hidden",
            opacity: scrolled ? 1 : 0,
            transition: { duration: 0.5 },
          }}
          className=" text-neutral-900 dark:text-neutral-100 rounded-full"
        >
          <Link to="/"><img src="/icons/logo.jpg" alt="logo" className="size-7 rounded-full"/></Link>
        </p>

        <div className="flex items-center gap-3 rounded-2xl">
          <AnimatedThemeToggler />
          {/* Hamburger Menu Button for Mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block w-5 h-0.5 bg-neutral-900 dark:bg-neutral-100 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-neutral-900 dark:bg-neutral-100 transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-neutral-900 dark:bg-neutral-100 transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </button>
          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-3">
            {navItems.map((items, idx) => (
              <Link
                key={idx}
                to={items.href}
                className="text-sm md:text-base relative px-1 text-neutral-900 dark:text-neutral-100 transition-colors rounded-4xl font-mono"
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                {hovered === idx && (
                  <motion.span
                    layoutId="hovered-span"
                    className="h-full w-full absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md transition ease-in duration-300"
                  />
                )}
                <span className="relative z-10 font-san">{items.title}</span>
              </Link>
            ))}
          </div>
        </div>
        {/* Mobile */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="flex flex-col items-center justify-center space-y-3 "
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((items, idx) => (
                <Link
                  key={idx}
                  to={items.href}
                  className="text-xl text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors hover:scale-50 font-mono"
                  onClick={() => setIsOpen(false)}
                >
                  {items.title}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
