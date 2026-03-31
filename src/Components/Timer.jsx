import { useEffect, useMemo, useRef, useState } from "react";

export default function Timer({ duration = 25, onTimeout }) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const timeoutRaised = useRef(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      if (!timeoutRaised.current) {
        timeoutRaised.current = true;
        onTimeout();
      }
      return undefined;
    }

    const timerId = setInterval(() => {
      setTimeLeft((previous) => previous - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [onTimeout, timeLeft]);

  const progress = useMemo(() => {
    return Math.max((timeLeft / duration) * 100, 0);
  }, [duration, timeLeft]);

  return (
    <div
      className="timer-ring"
      style={{
        background: `conic-gradient(var(--accent) ${progress * 3.6}deg, rgba(125, 211, 252, 0.15) 0deg)`,
      }}
    >
      <div className="ring-inner">
        <p className="timer-label">Timer</p>
        <p className="timer-value">00:{String(timeLeft).padStart(2, "0")}</p>
      </div>
    </div>
  );
}
