import { useQuiz } from "../context/QuizContext";

const ResultPage = () => {
  const { score, questions, dispatch } = useQuiz();
  const maxScore = questions.length * 10;
  const percentage = (score / maxScore) * 100;

  return (
    <div className="text-center space-y-8 animate-in zoom-in duration-500 bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-700">
      <h1 className="text-4xl font-black text-slate-800 dark:text-white">
        Quiz Terminé ! 🎉
      </h1>
      
      <div className="space-y-2">
        <p className="text-gray-500 dark:text-gray-400 font-medium uppercase tracking-widest">Votre Score</p>
        <p className="text-6xl font-black text-blue-600 dark:text-blue-400">
          {score} <span className="text-2xl text-gray-400">/ {maxScore}</span>
        </p>
        <p className="text-lg font-bold text-green-500 mt-4">
          {percentage >= 50 ? "Bravo ! 👏" : "Tu peux faire mieux ! 💪"}
        </p>
      </div>

      <button 
        onClick={() => dispatch({ type: "restart" })}
        className="w-full py-4 mt-6 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-bold shadow-lg hover:opacity-90 transition-all active:scale-95"
      >
        Rejouer 🔄
      </button>
    </div>
  );
};

export default ResultPage;