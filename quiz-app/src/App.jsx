import { useEffect } from "react";
import { useQuiz } from "./context/QuizContext";
import { fetchQuestions } from "./services/quizAPI";
import StartScreen from "./pages/StartScreen";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage"; // 👈 Importina ResultPage
import ThemeToggle from "./components/ui/ThemeToggle";
import Loader from "./components/ui/Loader";

function App() {
  const { status, dispatch } = useQuiz();

  useEffect(() => {
    const load = async () => {
      dispatch({ type: "loading" });
      try {
        const data = await fetchQuestions(); 
        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        dispatch({ type: "dataFailed" });
      }
    };
    load();
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <header className="p-4 flex justify-between items-center max-w-4xl mx-auto">
        <div className="text-2xl font-black text-blue-600 dark:text-blue-400">SportQuiz</div>
        <ThemeToggle />
      </header>

      <main className="flex items-center justify-center p-6 h-[80vh]">
        <div className="w-full max-w-md">
           {status === "loading" && <Loader />}
           {status === "ready" && <StartScreen onStart={() => dispatch({ type: "start" })} />}
           {status === "active" && <QuizPage />}
           {status === "finished" && <ResultPage />} {/* 👈 Hna kiban l-score f l-lekher */}
        </div>
      </main>
    </div>
  );
}

export default App;