import StartScreen from "./pages/StartScreen";
import ThemeToggle from "./components/ui/ThemeToggle";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState("start");

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Header dyal l-app */}
      <header className="p-4 flex justify-between items-center max-w-4xl mx-auto">
        <div className="text-2xl font-black text-blue-600 dark:text-blue-400">
          Gemini<span className="text-gray-400">Quiz</span>
        </div>
        <ThemeToggle />
      </header>

      {/* Content dyal l-app */}
      <main className="flex items-center justify-center p-6 h-[80vh]">
        <div className="w-full max-w-md">
           {status === "start" && <StartScreen onStart={() => setStatus("playing")} />}
           {/* Ghadi n-zido l-pages lokhrin hna melli y-oujdo */}
        </div>
      </main>
    </div>
  );
}

export default App;