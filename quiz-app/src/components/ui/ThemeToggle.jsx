import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm transition-all hover:shadow-md active:scale-95 group"
    >
      {/* Icon Container */}
      <div className="text-xl">
        {darkMode ? (
          <span className="block animate-pulse">☀️</span>
        ) : (
          <span className="block">🌙</span>
        )}
      </div>

      {/* Text (Optional - Hidden on very small screens) */}
      <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
};

export default ThemeToggle;