import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

const ThemeContext = createContext({
  isDark: false,
  setTheme: () => {},
  toggleTheme: () => {},
});

function getInitialTheme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
  } catch {
    /* localStorage can be blocked (private mode) - fall through */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(getInitialTheme);

  // Layout effect so the class is applied during commit (needed for the
  // view-transition animation in AnimatedThemeToggler).
  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const setTheme = useCallback((dark) => {
    setIsDark(dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* ignore storage errors */
    }
  }, []);

  const toggleTheme = useCallback(() => setTheme(!isDark), [isDark, setTheme]);

  const value = useMemo(
    () => ({ isDark, setTheme, toggleTheme }),
    [isDark, setTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);