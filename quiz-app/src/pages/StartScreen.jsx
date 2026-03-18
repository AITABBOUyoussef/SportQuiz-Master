const StartScreen = ({ onStart }) => {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-5xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight">
        YAFA<span className="text-slate-800 dark:text-white">Quiz</span>
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">Prêt à tester tes connaissances ?</p>
      <button onClick={onStart} className="px-10 py-4 mt-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg active:scale-95">
        Démarrer 🚀
      </button>
    </div>
  );
};
export default StartScreen;