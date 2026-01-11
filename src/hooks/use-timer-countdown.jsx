import { useEffect, useRef, useState } from "react";

const useTimerCountDown = ({ initialTime, storageKey }) => {
  const [time, setTime] = useState(() => {
    if (!storageKey) return initialTime;

    const savedTime = localStorage.getItem(storageKey);
    return savedTime ? Number(savedTime) : initialTime;
  });

  const [isPaused, setIsPaused] = useState(true);
  const timerRef = useRef(null);

  const hours=Math.floor(time/3600);
  const minutes = Math.floor(time/60);
  const seconds = Math.floor(time%60);

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          setIsPaused(true);
          clearInterval(timerRef.current);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  useEffect(() => {
    if (storageKey) {
      localStorage.setItem(storageKey, time);
    }
  }, [time, storageKey]);

  return {
    time,
    hours,
    minutes,
    seconds,
    isPaused,
    start: () => setIsPaused(false),
    pause: () => setIsPaused(true),
    reset: () => {
      setIsPaused(true);
      setTime(initialTime);
      storageKey && localStorage.removeItem(storageKey);
    },
  };
};

export { useTimerCountDown };
