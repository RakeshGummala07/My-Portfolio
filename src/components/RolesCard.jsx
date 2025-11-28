import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Problem Solver",
  "Being creative with code",
];

export default function RolesCard({ className = "" }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <AnimatePresence mode="wait">
        <motion.h1
          key={roles[index]}
          initial={{ opacity: 0, filter: "blur(12px) " }}
          animate={{ opacity: 1, filter: "blur(0px) " }}
          exit={{ opacity: 0, filter: "blur(12px) " }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          className="text-[12px] font-bold relative text-white drop-shadow-[0 0 25px rgba(255,255,255,0.45)]"
        >
          {roles[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
