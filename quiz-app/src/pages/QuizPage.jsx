import { useQuiz } from "../context/QuizContext";
import ProgressBar from "../components/Results/ProgressBar";

const QuizPage = () => {
  const { questions, index, dispatch, answer } = useQuiz();
  const question = questions[index];

  const decodeHTML = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-8 animate-in fade-in duration-500">
      <ProgressBar current={index + 1} total={questions.length} />
      <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-700/50">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
          {decodeHTML(question.question)}
        </h2>
        <div className="grid gap-3">
          {question.shuffledAnswers.map((option) => (
            <button
              key={option}
              disabled={answer !== null}
              onClick={() => dispatch({ type: "newAnswer", payload: option })}
              className={`p-4 rounded-xl text-left font-medium border-2 transition-all 
                ${answer === option ? "border-blue-600 bg-blue-50 dark:bg-blue-900/30 text-blue-600" : "border-gray-200 dark:border-slate-700 hover:border-blue-400 dark:text-gray-200"}
                ${answer !== null && answer !== option ? "opacity-50" : ""}`}
            >
              {decodeHTML(option)}
            </button>
          ))}
        </div>
      </div>
      {answer !== null && (
        <button
          onClick={() => dispatch({ type: index === questions.length - 1 ? "finished" : "nextQuestion" })}
          className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg hover:bg-blue-700 transition-all active:scale-95"
        >
          {index === questions.length - 1 ? "Voir Résultats" : "Question Suivante →"}
        </button>
      )}
    </div>
  );
};
export default QuizPage;