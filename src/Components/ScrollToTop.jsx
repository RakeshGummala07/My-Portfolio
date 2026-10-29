import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls to the top whenever the route changes (unless linking to #hash). */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}
