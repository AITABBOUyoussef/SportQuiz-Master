import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl bg-gray-200 dark:bg-slate-800 transition-all hover:scale-110 active:scale-95"
    >
      {/* Ila kan dark mode, biyn chams, ila la biyn l-qamra */}
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;