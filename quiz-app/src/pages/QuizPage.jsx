const QuizPage = ({ onFinish }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold dark:text-white">Question 1/20</h2>
      <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
        <p className="text-lg">Kifach jatk l-integration dyal daba?</p>
      </div>
      <button 
        onClick={onFinish}
        className="w-full py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-xl font-bold hover:bg-blue-50 dark:hover:bg-slate-800 transition-all"
      >
        Simulate Finish 🏁
      </button>
    </div>
  );
};

export default QuizPage;