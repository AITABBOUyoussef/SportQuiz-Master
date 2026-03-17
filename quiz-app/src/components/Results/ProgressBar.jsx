const ProgressBar = ({ current, total }) => {
  // Calcul dyal l-percentage
  const percentage = (current / total) * 100;

  return (
    <div className="w-full space-y-2">
      {/* Label dyal Progress (US6) */}
      <div className="flex justify-between items-end">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          Progression
        </span>
        <span className="text-sm font-black text-gray-700 dark:text-gray-200">
          {current} <span className="text-gray-400 font-normal">/ {total}</span>
        </span>
      </div>

      {/* L-Barre l-kbira */}
      <div className="h-3 w-full bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden shadow-inner relative">
        {/* L-Barre dyal Progress m-anima */}
        <div
          className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(37,99,235,0.4)]"
          style={{ width: `${percentage}%` }}
        >
          {/* L-lamsat dyal l-glassmorphism l-khfif */}
          <div className="w-full h-full opacity-20 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)]"></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;