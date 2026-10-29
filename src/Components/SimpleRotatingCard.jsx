import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Backend & Full-Stack Developer",
  "Java & Spring Boot Developer",
  "Microservices Builder",
  "React Developer",
  "Problem Solver",
  "Open to SDE & IT Support roles",
];

export default function RotatingBlurTitle({ className = "" }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative flex min-h-6 items-center justify-center ${className}`}
      aria-live="off"
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={roles[index]}
          initial={{ opacity: 0, filter: "blur(12px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          className="relative px-2 text-center text-xs font-bold text-neutral-800 sm:text-sm dark:text-white"
        >
          {roles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
