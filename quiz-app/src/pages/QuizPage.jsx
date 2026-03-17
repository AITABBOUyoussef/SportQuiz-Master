import ProgressBar from "../components/Results/ProgressBar";

const QuizPage = ({ onFinish }) => {
  // Ghadi n-simuliw wa7ed l-data temporaire hna 
  // (Bach t-chouf l-vibe dyal 5/20 masalan)
  const currentQuestion = 5;
  const totalQuestions = 20;

  return (
    <div className="w-full max-w-xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* 1. Progress Bar (US6) */}
      <ProgressBar current={currentQuestion} total={totalQuestions} />

      {/* 2. Question Card */}
      <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl shadow-blue-500/5 border border-gray-100 dark:border-slate-700/50">
        <p className="text-xl font-medium text-slate-800 dark:text-slate-100 leading-relaxed">
          Quel est le rôle principal de JSX dans une application React ?
        </p>
      </div>

      {/* Ghadi n-zidou l-ajwiba hna mn ba3d... */}
      <button onClick={onFinish} className="text-sm text-gray-400 hover:text-blue-500 transition-colors">
        Passer la question (Debug)
      </button>
    </div>
  );
};

export default QuizPage;