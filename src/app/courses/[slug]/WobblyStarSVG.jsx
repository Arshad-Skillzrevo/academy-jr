import React from "react";

/**
 * WobblyStarSVG Component
 * Renders a spinning star SVG.
 */
export function WobblyStarSVG({ size = 32, color = "#FFD93D", className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      style={{ animation: "spinStar 6s linear infinite" }}
    >
      <path
        d="M16 2l3.09 9.51H29l-8.09 5.88 3.09 9.51L16 21l-8 5.9 3.09-9.51L3 11.51h9.91z"
        fill={color}
        stroke="white"
        strokeWidth="1"
      />
    </svg>
  );
}