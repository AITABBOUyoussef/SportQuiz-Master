const ProgressBar = ({ current, total }) => {
  const percentage = (current / total) * 100;
  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between items-end">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Progression</span>
        <span className="text-sm font-black text-gray-700 dark:text-gray-200">{current} <span className="text-gray-400 font-normal">/ {total}</span></span>
      </div>
      <div className="h-3 w-full bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden relative">
        <div className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};
export default ProgressBar;