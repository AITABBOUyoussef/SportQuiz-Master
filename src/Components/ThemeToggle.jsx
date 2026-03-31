import { useEffect, useState } from "react";

export default function ThemeToggle({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("theme-dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-gray-200 text-gray-200 transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-4xl justify-end px-4 pt-4 sm:px-6">
        <button
          onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
          className="secondary-button inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold"
        >
          <span>{theme === "light" ? "🌙" : "☀️"}</span>
          <span>{theme === "light" ? "Dark" : "Light"} Mode</span>
        </button>
      </div>
      {children}
    </div>
  );
}