export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="panel error-card space-y-5">
      <p className="text-lg font-semibold text-white">{message}</p>
      {onRetry && (
        <button onClick={onRetry} className="brand-button px-5 py-3 text-sm font-semibold">
          Try Again
        </button>
      )}
    </div>
  );
}