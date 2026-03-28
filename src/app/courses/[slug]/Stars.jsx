import React from "react";
import { Star } from "lucide-react";

/**
 * Stars Component
 * Renders a row of filled yellow stars based on the provided count.
 */
export function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 text-yellow-400 fill-yellow-400"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </div>
  );
}