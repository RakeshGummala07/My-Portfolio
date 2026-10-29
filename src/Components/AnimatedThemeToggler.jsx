import { useCallback, useRef } from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";
import { useTheme } from "../context/ThemeContext";

export default function AnimatedThemeToggler({
  className = "",
  duration = 700,
  ...props
}) {
  const { isDark, setTheme } = useTheme();
  const buttonRef = useRef(null);

  const toggleTheme = useCallback(async () => {
    const next = !isDark;
    const button = buttonRef.current;

    // View Transitions are not available in every browser (e.g. older
    // Firefox/Safari) and should be skipped for reduced-motion users.
    const canAnimate =
      button &&
      typeof document.startViewTransition === "function" &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canAnimate) {
      setTheme(next);
      return;
    }

    const transition = document.startViewTransition(() => {
      flushSync(() => setTheme(next));
    });

    try {
      await transition.ready;
    } catch {
      return; // transition was skipped; theme is already applied
    }

    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
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
      },
    );
  }, [isDark, setTheme, duration]);

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`rounded-full p-2 ${className}`}
      {...props}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-amber-300" />
      ) : (
        <Moon className="h-5 w-5 text-blue-500" />
      )}
    </button>
  );
}