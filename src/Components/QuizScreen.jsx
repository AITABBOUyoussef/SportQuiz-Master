import { useCallback, useEffect, useMemo, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import Timer from "./Timer";
import { fetchQuestions, shuffleArray } from "../services/api";

const QUESTION_LIMIT = 20;
const TIMER_SECONDS = 25;

export default function QuizScreen({ category, onFinish, onQuit }) {
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
      const data = await fetchQuestions({ amount: QUESTION_LIMIT, categoryId: category.id });
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
  }, [category.id]);

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
    <section className="fade-up space-y-6">
      <div className="panel p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow">Category</p>
            <h1 className="mt-2 text-2xl font-semibold">{category.title}</h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="pill">Question {questionCounter}</span>
            <span className="pill">Score {score}</span>
          </div>
        </div>
      </div>

      <div className="panel p-6 sm:p-8 space-y-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Timer
            key={`${currentIndex}-${selected}`}
            duration={TIMER_SECONDS}
            onTimeout={handleTimeout}
          />

          <button
            onClick={useHint}
            disabled={hintUsed || Boolean(selected)}
            className="secondary-button w-full px-4 py-3 text-sm font-semibold sm:w-auto"
          >
            50/50 Hint
          </button>
        </div>

        <ProgressBar current={currentIndex + 1} total={questions.length} />
      </div>

      <QuestionCard
        question={currentQuestion}
        selected={selected === "__timeout__" ? "" : selected}
        onSelect={handleSelect}
        disabled={selected === "__timeout__"}
        hiddenOptions={hiddenOptions}
      />

      {selected === "__timeout__" && (
        <p className="text-center text-sm font-semibold text-red-400">
          Time is up. Press Next to continue.
        </p>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        <button onClick={onQuit} className="secondary-button w-full px-4 py-3 font-semibold">
          Back
        </button>
        <button
          onClick={goNext}
          disabled={!selected}
          className="brand-button w-full px-4 py-3 font-semibold"
        >
          {currentIndex + 1 === questions.length ? "Finish" : "Next"}
        </button>
      </div>

      <p className="text-center text-sm font-semibold text-text-muted">Score: {score}</p>
    </section>
  );
}

