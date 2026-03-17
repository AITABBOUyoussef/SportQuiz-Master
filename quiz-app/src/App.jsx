import StartScreen from "./pages/StartScreen";
import QuizPage from "./pages/QuizPage"; // 👈 Zid had l-import
import ThemeToggle from "./components/ui/ThemeToggle";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState("start");

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <header className="p-4 flex justify-between items-center max-w-4xl mx-auto">
        <div className="text-2xl font-black text-blue-600 dark:text-blue-400">
          Sport<span className="text-gray-400">Quiz</span>
        </div>
        <ThemeToggle />
      </header>

      <main className="flex items-center justify-center p-6 h-[80vh]">
        <div className="w-full max-w-md">
           {/* Hna l-Integration l-7aqiqiya */}
           {status === "start" && <StartScreen onStart={() => setStatus("playing")} />}
           {status === "playing" && <QuizPage onFinish={() => setStatus("finished")} />}
           {/* Zid ResultPage melli t-وجد */}
        </div>
      </main>
    </div>
  );
}

export default App;