const StartScreen = ({ onStart }) => {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">Welcome to SportQuiz</h1>
      <p className="text-gray-600 dark:text-gray-300">Ready to test your skills?</p>
      <button 
        onClick={onStart}
        className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95"
      >
        Start Quiz 🚀
      </button>
    </div>
  );
};

export default StartScreen;