"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";

export default function AnimatedThemeToggler({
  className = "",
  duration = 900,
  ...props
}) {
  const [isDark, setIsDark] = useState(false);
  const buttonRef = useRef(null);

  // Load theme on first mount
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const theme = stored || (systemDark ? "dark" : "light");

    document.documentElement.classList.toggle("dark", theme === "dark");
    setIsDark(theme === "dark");
  }, []);

  // Watch for any external theme changes
  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    const observer = new MutationObserver(updateTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Toggle theme
  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return;

    await document.startViewTransition(() => {
      flushSync(() => {
        const newTheme = !isDark;

        setIsDark(newTheme);
        document.documentElement.classList.toggle("dark", newTheme);
        localStorage.setItem("theme", newTheme ? "dark" : "light");
      });
    }).ready;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const maxRadius = Math.hypot(
      Math.max(rect.left, window.innerWidth - rect.left),
      Math.max(rect.top, window.innerHeight - rect.top)
    );

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }, [isDark, duration]);

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={`p-2 rounded-full ${className}`}
      {...props}
    >
      {isDark ? (
        <Sun className="text-amber-300 h-5 w-5" />
      ) : (
        <Moon className="text-blue-500 h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
