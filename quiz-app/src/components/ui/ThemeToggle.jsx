import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm transition-all hover:shadow-md active:scale-95"
    >
      <span className="text-xl">{darkMode ? "☀️" : "🌙"}</span>
      <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
        {darkMode ? "Light" : "Dark"}
      </span>
    </button>
  );
};
export default ThemeToggle;