import { useQuiz } from "../context/QuizContext";

const ResultPage = () => {
  const { score, questions, dispatch } = useQuiz();
  const maxScore = questions.length * 10;
  
  return (
    <div className="text-center space-y-6 animate-in fade-in duration-500 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-700">
      <h1 className="text-4xl font-black text-slate-800 dark:text-white">Quiz Terminé !</h1>
      <p className="text-6xl font-black text-blue-600 dark:text-blue-400">
        {score} <span className="text-2xl text-gray-400">/ {maxScore}</span>
      </p>
      <button onClick={() => dispatch({ type: "restart" })} className="w-full py-4 mt-4 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-bold active:scale-95">
        Rejouer 
      </button>
    </div>
  );
};
export default ResultPage;