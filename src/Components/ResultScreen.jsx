export default function ResultScreen({ result, onBackHome, summaryText }) {
  const points = result.score * 50;
  const modePlayed = result.difficulty || result.category;

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

      <button onClick={onBackHome} className="brand-button w-full py-4 text-lg font-semibold">
        Back to Home
      </button>
    </section>
  );
}
