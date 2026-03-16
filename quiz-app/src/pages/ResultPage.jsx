const ResultPage = ({ onRestart }) => {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-3xl font-bold text-green-500">Quiz Finished!</h1>
      <p className="text-5xl font-black dark:text-white">Score: 100%</p>
      <button 
        onClick={onRestart}
        className="px-8 py-3 bg-gray-800 dark:bg-white dark:text-gray-800 text-white rounded-xl font-bold hover:opacity-90 transition-all"
      >
        Play Again 🔄
      </button>
    </div>
  );
};

export default ResultPage;