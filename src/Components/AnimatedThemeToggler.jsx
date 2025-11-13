import React, { useCallback, useRef } from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";
import { useTheme } from "../context/ThemeContext.jsx";

export const AnimatedThemeToggler = ({ className = "", duration = 400 }) => {
  const { isDark, toggleTheme: contextToggle } = useTheme();
  const buttonRef = useRef(null);

  // ✅ Toggle with animation
  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return;

    // Fallback for unsupported browsers
    if (!document.startViewTransition) {
      // Simple fallback animation using CSS
      const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
      const x = left + width / 2;
      const y = top + height / 2;
      const maxRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      document.documentElement.style.setProperty('--ripple-x', `${x}px`);
      document.documentElement.style.setProperty('--ripple-y', `${y}px`);
      document.documentElement.style.setProperty('--ripple-radius', `${maxRadius}px`);

      document.documentElement.classList.add('theme-animating');

      flushSync(() => {
        contextToggle();
      });

      setTimeout(() => {
        document.documentElement.classList.remove('theme-animating');
      }, duration);

      return;
    }

    // Chrome 111+ View Transition API
    const transition = document.startViewTransition(() => {
      flushSync(() => {
        contextToggle();
      });
    });

    await transition.ready;

    // Ripple animation
    const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
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
  }, [contextToggle, duration]);

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={`flex items-center justify-center p-2 rounded-full
        transition-colors duration-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 ${className}`}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-400 transition-transform duration-500 ease-in-out" />
      ) : (
        <Moon className="w-5 h-5 text-blue-500 transition-transform duration-500 ease-in-out" />
      )}
    </button>
  );
};
