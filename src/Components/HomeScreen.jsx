export default function HomeScreen({ categories, history, onStart }) {
  return (
    <section className="fade-up space-y-6">
      <div className="panel p-6 sm:p-8">
        <span className="eyebrow">Welcome back</span>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">SportQuiz Master</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-text-muted">
          Elevate your sports trivia with a calm, polished experience built for focus and speed.
        </p>

        <div className="mt-8 stat-grid">
          <div className="stat-card">
            <p className="text-sm uppercase tracking-[0.25em] text-text-muted">Categories</p>
            <h3>{categories.length}</h3>
          </div>
          <div className="stat-card">
            <p className="text-sm uppercase tracking-[0.25em] text-text-muted">Recent games</p>
            <h3>{history.length}</h3>
          </div>
          <div className="stat-card">
            <p className="text-sm uppercase tracking-[0.25em] text-text-muted">Fast start</p>
            <h3>One tap</h3>
          </div>
          <div className="stat-card">
            <p className="text-sm uppercase tracking-[0.25em] text-text-muted">Responsive</p>
            <h3>Every device</h3>
          </div>
        </div>
      </div>

      <div className="panel p-6 sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">Daily challenge</p>
            <h2 className="mt-3 text-3xl font-semibold">Jump into a quick round and beat your best score.</h2>
            <p className="mt-3 text-sm leading-7 text-text-muted">
              Choose your favorite sports category and answer questions with confidence.
            </p>
          </div>

          <button
            onClick={() => onStart(categories[0])}
            className="brand-button w-full px-6 py-4 text-base font-semibold sm:w-auto"
          >
            Quick Start
          </button>
        </div>
      </div>

      <div className="panel p-6 sm:p-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold">Choose a category</h3>
            <p className="mt-2 text-sm text-text-muted">Select the sports quiz that fits your mood.</p>
          </div>
          <span className="pill">{categories.length} topics</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {categories.map((category) => (
            <button
              key={category.title}
              onClick={() => onStart(category)}
              className="category-card"
            >
              <div className="category-icon">{category.icon}</div>
              <p className="category-subtitle">{category.subtitle}</p>
              <p className="category-title">{category.title}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="panel p-6 sm:p-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold">Recent activity</h3>
            <p className="mt-2 text-sm text-text-muted">Review your latest sessions and keep improving.</p>
          </div>
          <span className="pill">{history.length} games</span>
        </div>

        <ul className="space-y-3">
          {history.length === 0 && (
            <li className="panel result-card">
              <p className="text-sm text-text-muted">No recent games yet. Start your first quiz to build momentum.</p>
            </li>
          )}

          {history.map((item) => (
            <li key={item.id} className="result-card">
              <div>
                <p className="font-semibold">{item.category}</p>
                <p className="mt-1 text-sm text-text-muted">{item.playedAt}</p>
              </div>
              <div className="pill">{item.score}/{item.total}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
