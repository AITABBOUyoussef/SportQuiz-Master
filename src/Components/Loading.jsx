export default function Loading() {
  return (
    <div className="panel loading-card">
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-white/10 border-t-[#7dd3fc]" />
      <p className="mt-4 text-sm font-medium text-text-muted">Loading quiz content...</p>
    </div>
  );
}