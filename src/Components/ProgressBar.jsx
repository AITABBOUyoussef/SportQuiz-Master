export default function ProgressBar({ current, total }) {
  const safeTotal = Math.max(total, 1);
  const percent = Math.round((current / safeTotal) * 100);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm font-semibold text-text-muted">
        <span>Progress</span>
        <span>{current}/{total}</span>
      </div>

      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
