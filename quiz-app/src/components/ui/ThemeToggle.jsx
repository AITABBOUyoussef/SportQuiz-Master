import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm transition-all hover:scale-110 active:scale-95"
    >
      <span className="text-xl leading-none block">
        {darkMode ? "☀️" : "🌙"}
      </span>
    </button>
  );
};

export default ThemeToggle;