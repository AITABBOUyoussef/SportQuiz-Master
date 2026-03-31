export default function QuestionCard({
  question,
  selected,
  onSelect,
  disabled,
  hiddenOptions,
}) {
  const resolveState = (option) => {
    if (!selected) {
      return "option-button";
    }

    if (option === question.correctAnswer) {
      return "option-button correct";
    }

    if (option === selected && option !== question.correctAnswer) {
      return "option-button wrong";
    }

    return "option-button disabled";
  };

  return (
    <div className="panel space-y-5 p-6">
      <h2 className="text-xl font-semibold">{question.question}</h2>

      <div className="grid gap-3">
        {question.options.map((option) => {
          if (hiddenOptions.includes(option)) {
            return null;
          }

          return (
            <button
              key={option}
              onClick={() => onSelect(option)}
              disabled={Boolean(selected) || disabled}
              aria-label={`Answer option ${option}`}
              className={`${resolveState(option)} ${selected ? "cursor-not-allowed" : ""}`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}