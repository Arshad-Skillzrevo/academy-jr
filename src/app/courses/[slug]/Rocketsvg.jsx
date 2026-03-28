import React from "react";

/**
 * RocketSVG Component
 * Renders a stylized rocket with a floating body and pulsing exhaust flames.
 */
export function RocketSVG({ className = "" }) {
  return (
    <div className={className} style={{ animation: "rocketFloat 4s ease-in-out infinite" }}>
      <svg
        viewBox="0 0 80 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Rocket Body */}
        <path d="M40 5 C25 25 20 50 22 75 L40 85 L58 75 C60 50 55 25 40 5Z" fill="#f97316" />
        <path d="M40 5 C30 25 28 50 30 75 L40 85 L40 5Z" fill="#fb923c" />
        
        {/* Porthole */}
        <circle cx="40" cy="40" r="12" fill="#bfdbfe" />
        <circle cx="40" cy="40" r="9" fill="#93c5fd" />
        
        {/* Fins */}
        <path d="M22 72 L12 80 L18 78 L22 85" fill="#ef4444" />
        <path d="M58 72 L68 80 L62 78 L58 85" fill="#ef4444" />
        
        {/* Animated Flames */}
        <ellipse
          cx="40" cy="88" rx="8" ry="5"
          fill="#fbbf24" opacity="0.8"
          style={{ animation: "flamePulse 0.4s ease-in-out infinite alternate" }}
        />
        <ellipse
          cx="40" cy="91" rx="5" ry="4"
          fill="#f97316" opacity="0.9"
          style={{ animation: "flamePulse 0.4s ease-in-out infinite alternate-reverse" }}
        />
      </svg>
    </div>
  );
}