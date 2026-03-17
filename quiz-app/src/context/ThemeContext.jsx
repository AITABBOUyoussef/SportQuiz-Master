import { createContext, useContext, useEffect, useState } from "react";

// 1. Kriyi l-context khawi
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Check wach l-user deja khtar dark mode f l-browser dyalo
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  // Kola marra t-beddel darkMode, ghadi n-zidou walla n-7iydou class 'dark' men l-HTML
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Fonction li kti-t-callee melli kti-cliqui l-bouton
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children} {/* Hna fin kti-koun l-App kamla */}
    </ThemeContext.Provider>
  );
};

// Hook sahla bach l-okhrin y-esta3mlo l-theme
export const useTheme = () => useContext(ThemeContext);