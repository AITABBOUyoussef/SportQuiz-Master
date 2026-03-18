const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-10">
      <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      <p className="text-gray-500 dark:text-gray-400 font-medium animate-pulse">
        Chargement...
      </p>
    </div>
  );
};
export default Loader;