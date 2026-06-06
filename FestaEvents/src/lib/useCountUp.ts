import { useState, useEffect, useRef, useCallback } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  start?: number;
}

export function useCountUp({
  end,
  duration = 2000,
  decimals = 0,
  suffix = '',
  prefix = '',
  start = 0,
}: UseCountUpOptions) {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const startAnimation = useCallback(() => {
    if (hasStarted) return;
    setHasStarted(true);

    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * eased;

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration, start, hasStarted]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.unobserve(element);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [startAnimation]);

  const displayValue = `${prefix}${count.toFixed(decimals)}${suffix}`;

  return { ref, value: displayValue, count };
}
