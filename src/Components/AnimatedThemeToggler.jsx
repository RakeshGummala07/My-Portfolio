import React, { useCallback, useRef } from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";
import { useTheme } from "../context/ThemeContext.jsx";

export const AnimatedThemeToggler = ({ className = "", duration = 800 }) => {
  const { isDark, toggleTheme: contextToggle } = useTheme();
  const buttonRef = useRef(null);

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return;

    // Get button position
    const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;

    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.zIndex = "9999";
    overlay.style.pointerEvents = "none";

    // 🟦 Ripple color = current theme background (since theme toggles before animation)
    overlay.style.backgroundColor = isDark ? "red" : "blue";

    // 🟦 Start ripple large → contract inward
    overlay.style.clipPath = `circle(${maxRadius}px at ${x}px ${y}px)`;
    overlay.style.transition = `clip-path ${duration}ms ease-in-out`;

    document.body.appendChild(overlay);

    // Toggle theme BEFORE animation
    flushSync(() => {
      contextToggle();
    });

    // Next frame → animate contraction
    requestAnimationFrame(() => {
      overlay.style.clipPath = `circle(0px at ${x}px ${y}px)`;
    });

    // Remove overlay after animation
    setTimeout(() => {
      document.body.removeChild(overlay);
    }, duration);
  }, [contextToggle, duration, isDark]);

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={`flex items-center justify-center p-2 rounded-full
        transition-colors duration-300 hover:bg-neutral-200 dark:hover:bg-neutral-800`}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun
          className="w-5 h-5 text-yellow-400 transition-transform duration-500"
        />
      ) : (
        <Moon
          className="w-5 h-5 text-blue-500 transition-transform duration-500"
        />
      )}
    </button>
  );
};
