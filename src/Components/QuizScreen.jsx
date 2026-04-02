import { useCallback, useEffect, useMemo, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import Timer from "./Timer";
import { fetchQuestions, shuffleArray } from "../services/api";

const QUESTION_LIMIT = 20;
const TIMER_SECONDS = 25;

export default function QuizScreen({ difficulty, onFinish, onQuit }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [hintUsed, setHintUsed] = useState(false);
  const [hiddenOptions, setHiddenOptions] = useState([]);

  const currentQuestion = questions[currentIndex];

  const loadQuestions = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const data = await fetchQuestions({ amount: QUESTION_LIMIT, difficulty: difficulty.value });
      setQuestions(data);
      setCurrentIndex(0);
      setSelected("");
      setScore(0);
      setHintUsed(false);
      setHiddenOptions([]);
    } catch {
      setError("Unable to load quiz questions. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [difficulty.value]);

  useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);

  const goNext = useCallback(() => {
    setSelected("");
    setHiddenOptions([]);

    if (currentIndex + 1 >= questions.length) {
      onFinish({ score, total: questions.length });
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  }, [currentIndex, onFinish, questions.length, score]);

  const handleSelect = (answer) => {
    if (selected) return;

    setSelected(answer);
    if (answer === currentQuestion.correctAnswer) {
      setScore((previous) => previous + 1);
    }
  };

  const handleTimeout = useCallback(() => {
    if (!selected) {
      setSelected("__timeout__");
    }
  }, [selected]);

  const useHint = () => {
    if (hintUsed || selected) return;

    const wrongAnswers = currentQuestion.options.filter(
      (option) => option !== currentQuestion.correctAnswer
    );

    setHiddenOptions(shuffleArray(wrongAnswers).slice(0, 2));
    setHintUsed(true);
  };

  const questionCounter = useMemo(
    () => `${currentIndex + 1}/${questions.length}`,
    [currentIndex, questions.length]
  );

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} onRetry={loadQuestions} />;
  if (!currentQuestion) return null;

  return (
    <section className="flex flex-col items-center min-h-screen bg-[#F3F4F6] py-8 px-4 font-sans">
      <div className="w-full max-w-3xl space-y-6">
        
        {/* Lfo9: Score o Difficulty */}
        <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border border-gray-100">
          <div>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Quiz</p>
            <h1 className="mt-1 text-2xl font-bold text-gray-800">Sports - {difficulty.label}</h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="px-4 py-2 bg-blue-50 text-blue-700 font-bold rounded-full text-sm border border-blue-100">
              Question {questionCounter}
            </span>
            <span className="px-4 py-2 bg-green-50 text-green-700 font-bold rounded-full text-sm border border-green-100">
              Score {score}
            </span>
          </div>
        </div>

        {/* Lwst: Timer o Progress */}
        <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 space-y-5 border border-gray-100">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Timer
              key={`${currentIndex}-${selected}`}
              duration={TIMER_SECONDS}
              onTimeout={handleTimeout}
            />

            <button
              onClick={useHint}
              disabled={hintUsed || Boolean(selected)}
              className={`px-6 py-3 rounded-xl font-bold bg-amber-900 transition-all duration-300 flex items-center justify-center gap-2
                ${hintUsed || Boolean(selected) 
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                  : 'bg-yellow-600 text-amber-700 hover:bg-amber-200 border border-amber-200'}`}
            >
               50/50 Hint
            </button>
          </div>

          <ProgressBar current={currentIndex + 1} total={questions.length} />
        </div>

        {/* L'wra9a d So2al */}
        <QuestionCard
          question={currentQuestion}
          selected={selected === "__timeout__" ? "" : selected}
          onSelect={handleSelect}
          disabled={selected === "__timeout__"}
          hiddenOptions={hiddenOptions}
        />

        {/* ila sala lwe9t */}
        {selected === "__timeout__" && (
          <p className="text-center text-lg font-bold text-red-500 bg-red-50 p-4 rounded-xl border border-red-200">
             Time is up! Press Next to continue.
          </p>
        )}

        {/* Lbotounat dte7t (Next / Back) */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button 
            onClick={onQuit} 
            className="w-full sm:w-1/3 px-6 py-4 rounded-xl font-bold text-gray-600 bg-white border-2 border-gray-200 hover:bg-gray-50 hover:text-gray-800 transition-all"
          >
            Back
          </button>
          <button
            onClick={goNext}
            disabled={!selected}
            className={`w-full sm:w-2/3 px-6 py-4 rounded-xl font-bold text-white transition-all text-lg flex items-center justify-center gap-2
              ${selected 
                ? 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1' 
                : 'bg-gray-300 cursor-not-allowed opacity-70'
              }`}
          >
            {currentIndex + 1 === questions.length ? "Finish Quiz " : "Next Question ➔"}
          </button>
        </div>

      </div>
    </section>
  );
}