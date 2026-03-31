import HomeScreen from "./Components/HomeScreen";
import QuizScreen from "./Components/QuizScreen";
import ResultScreen from "./Components/ResultScreen";
import ThemeToggle from "./Components/ThemeToggle";
import useQuizLogic from "./hooks/useQuizLogic";

function App() {
  const {
    categories,
    screen,
    selectedCategory,
    sessionResult,
    history,
    summaryText,
    startCategory,
    completeQuiz,
    setScreen,
  } = useQuizLogic();

  return (
    <ThemeToggle>
      <main className="mx-auto min-h-screen w-full max-w-4xl px-4 py-8 sm:px-6">
        <div className="panel page-header mb-8 px-6 py-8 text-center sm:px-10">
          <p className="eyebrow">Sports trivia</p>
          <h1 className="page-title">A calm, modern quiz experience.</h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm leading-7 text-text-muted">
            Pick a category, answer quickly, and track your score with a clean interface designed for focus.
          </p>
        </div>

        {screen === "home" && (
          <HomeScreen
            categories={categories}
            history={history}
            onStart={startCategory}
          />
        )}

        {screen === "quiz" && (
          <QuizScreen
            category={selectedCategory}
            onQuit={() => setScreen("home")}
            onFinish={completeQuiz}
          />
        )}

        {screen === "result" && sessionResult && (
          <ResultScreen
            result={sessionResult}
            onBackHome={() => setScreen("home")}
            summaryText={summaryText}
          />
        )}
      </main>
    </ThemeToggle>
  );
}

export default App;
