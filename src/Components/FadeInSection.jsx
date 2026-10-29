import { useEffect, useRef, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export default function FadeInSection({ children }) {
  // Reduced-motion users (or browsers without IntersectionObserver) see the
  // content immediately.
  const [isVisible, setVisible] = useState(
    () => prefersReducedMotion() || typeof IntersectionObserver === "undefined",
  );
  const domRef = useRef(null);

  useEffect(() => {
    const node = domRef.current;
    if (isVisible || !node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate once, then stop observing
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 blur-none" : "opacity-0 blur-sm"
      }`}
    >
      {children}
    </div>
  );
}