"use client";
import React, { useState, useEffect, useRef } from "react";

/**
 * CountUp Component
 * Animates a number from 0 to the target value when the component enters the viewport.
 */
export function CountUp({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const numTarget = parseInt(String(target));
          const step = Math.ceil(numTarget / 30);
          
          const timer = setInterval(() => {
            start += step;
            if (start >= numTarget) {
              setCount(numTarget);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 40);
          
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}