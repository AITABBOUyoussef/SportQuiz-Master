import { useState } from "react";
import StartScreen from "./pages/StartScreen";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import ThemeToggle from "./components/ui/ThemeToggle";

function App() {
  // Hada howa l-moteur dyal l-integration:
  const [status, setStatus] = useState("start"); // 'start', 'playing', 'finished'

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-white">
      {/* 1. Theme Toggle (US12) dima bayn */}
      <nav className="p-4 flex justify-end">
        <ThemeToggle />
      </nav>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        {status === "start" && <StartScreen onStart={() => setStatus("playing")} />}
        {status === "playing" && <QuizPage onFinish={() => setStatus("finished")} />}
        {status === "finished" && <ResultPage onRestart={() => setStatus("start")} />}
      </main>
    </div>
  );
}

export default App;