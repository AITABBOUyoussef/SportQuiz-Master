export default function QuestionCard({
  question,
  selected,
  onSelect,
  disabled,
  hiddenOptions,
}) {
  const resolveState = (option) => {
    // L'asass dyal design d l'bouton
    const baseClasses = "w-full text-left px-6 py-4 rounded-xl border-2 transition-all duration-300 font-semibold text-lg flex items-center";

    if (!selected) {
      return `${baseClasses} border-gray-200 bg-white text-gray-700 hover:border-blue-400 hover:bg-blue-50 hover:shadow-sm`;
    }

    if (option === question.correctAnswer) {
      return `${baseClasses} border-green-500 bg-green-500 text-white shadow-md transform scale-[1.02]`;
    }

    if (option === selected && option !== question.correctAnswer) {
      return `${baseClasses} border-red-500 bg-red-500 text-white shadow-md transform scale-[1.02]`;
    }

    return `${baseClasses} border-gray-200 bg-gray-100 text-gray-400 opacity-60`;
  };

  return (
    <div className="bg-white rounded-[24px] shadow-xl w-full p-6 md:p-10 mb-6">
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-8 text-center leading-relaxed">
        {question.question}
      </h2>

      <div className="space-y-4">
        {question.options.map((option, index) => {
          if (hiddenOptions.includes(option)) {
            return null;
          }

          // L'7erf A, B, C, D
          const letter = String.fromCharCode(65 + index);
          const isCorrect = selected && option === question.correctAnswer;
          const isWrong = selected && option === selected && option !== question.correctAnswer;
          const badgeColor = isCorrect || isWrong ? 'border-white text-white' : 'border-gray-300 text-gray-500';

          return (
            <button
              key={option}
              onClick={() => onSelect(option)}
              disabled={Boolean(selected) || disabled}
              aria-label={`Answer option ${option}`}
              className={`${resolveState(option)} ${selected ? "cursor-not-allowed" : ""}`}
            >
              <span className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border-2 mr-4 ${!selected ? 'border-gray-300 text-gray-500' : badgeColor}`}>
                {letter}
              </span>
              <span>{option}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}