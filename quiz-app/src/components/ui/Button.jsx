const Button = ({ children, onClick, variant = "primary" }) => {
  const styles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800",
  };

  return (
    <button 
      onClick={onClick}
      className={`${styles[variant]} px-6 py-3 rounded-xl font-bold transition-all active:scale-95 shadow-lg`}
    >
      {children}
    </button>
  );
};

export default Button;