export default function ResultScreen({ result, onBackHome, summaryText }) {
  const points = result.score * 50;
  const modePlayed = result.difficulty || result.category;
  const details = result.details || [];

  return (
    <section className="fade-up space-y-6">
      <div className="panel p-6 text-center">
        <p className="eyebrow">Quiz complete</p>
        <h2 className="mt-5 text-5xl font-semibold">{result.score}/{result.total}</h2>
        <p className="mt-4 text-sm text-text-muted">You finished the {modePlayed} challenge.</p>
      </div>

      <div className="result-grid">
        <div className="result-card">
          <h3>Final score</h3>
          <p className="mt-4 text-4xl font-semibold">{result.score}</p>
          <p className="mt-2 text-sm text-text-muted">{result.total} Questions</p>
        </div>

        <div className="result-card">
          <h3>Points earned</h3>
          <p className="mt-4 text-4xl font-semibold">+{points}</p>
          <p className="mt-2 text-sm text-text-muted">{summaryText}</p>
        </div>
      </div>

      <div className="panel p-6 md:p-8 space-y-5">
        <div>
          <p className="eyebrow">Question review</p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-900">See what you got right and what you missed</h3>
        </div>

        <div className="space-y-4">
          {details.length === 0 ? (
            <p className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-5 text-sm text-text-muted">
              No detailed review is available for this session.
            </p>
          ) : (
            details.map((item, index) => (
              <div key={`${item.questionText}-${index}`} className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Question {index + 1}</p>
                <h4 className="mt-2 text-lg font-semibold text-slate-900">{item.questionText}</h4>

                {item.isCorrect ? (
                  <div className="mt-4 rounded-xl border border-green-500 bg-green-100 px-4 py-3 text-green-700">
                    <p className="text-sm font-bold uppercase tracking-wide">Correct</p>
                    <p className="mt-1 font-semibold">{item.userAnswer}</p>
                  </div>
                ) : (
                  <div className="mt-4 space-y-3">
                    <div className="rounded-xl border border-red-500 bg-red-100 px-4 py-3 text-red-700">
                      <p className="text-sm font-bold uppercase tracking-wide">Your answer</p>
                      <p className="mt-1 font-semibold">{item.userAnswer}</p>
                    </div>
                    <div className="rounded-xl border border-green-500 bg-green-100 px-4 py-3 text-green-700">
                      <p className="text-sm font-bold uppercase tracking-wide">Correct answer</p>
                      <p className="mt-1 font-semibold">{item.correctAnswer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      <button onClick={onBackHome} className="brand-button w-full py-4 text-lg font-semibold">
        Back to Home
      </button>
    </section>
  );
}
