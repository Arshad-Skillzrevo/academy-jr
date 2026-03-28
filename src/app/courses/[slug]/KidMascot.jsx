import React from "react";

/**
 * KidMascot Component
 * Renders a stylized SVG character with a laptop and floating animation.
 */
export function KidMascot({ className = "" }) {
  return (
    <div
      className={`relative ${className}`}
      style={{ animation: "floatBob 3s ease-in-out infinite" }}
    >
      <svg
        viewBox="0 0 120 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Body */}
        <ellipse cx="60" cy="110" rx="28" ry="22" fill="#4f46e5" />
        {/* Arms */}
        <path d="M32 95 Q18 88 20 75" stroke="#4f46e5" strokeWidth="10" strokeLinecap="round" />
        <path d="M88 95 Q102 88 100 75" stroke="#4f46e5" strokeWidth="10" strokeLinecap="round" />
        {/* Head */}
        <circle cx="60" cy="65" r="32" fill="#FDDCB5" />
        {/* Hair */}
        <ellipse cx="60" cy="36" rx="28" ry="12" fill="#2D1B69" />
        <ellipse cx="38" cy="44" rx="10" ry="12" fill="#2D1B69" />
        <ellipse cx="82" cy="44" rx="10" ry="12" fill="#2D1B69" />
        {/* Eyes */}
        <circle cx="50" cy="66" r="6" fill="white" />
        <circle cx="70" cy="66" r="6" fill="white" />
        <circle cx="52" cy="67" r="3.5" fill="#1d1d1d" />
        <circle cx="72" cy="67" r="3.5" fill="#1d1d1d" />
        <circle cx="53" cy="65.5" r="1.2" fill="white" />
        <circle cx="73" cy="65.5" r="1.2" fill="white" />
        {/* Smile */}
        <path d="M50 78 Q60 88 70 78" stroke="#E05A77" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Cheeks */}
        <ellipse cx="43" cy="75" rx="7" ry="4" fill="#F9A8C9" opacity="0.6" />
        <ellipse cx="77" cy="75" rx="7" ry="4" fill="#F9A8C9" opacity="0.6" />
        {/* Laptop */}
        <rect x="34" y="118" width="52" height="2" rx="1" fill="#6366f1" />
        <rect x="38" y="108" width="44" height="12" rx="4" fill="#818cf8" />
        <rect x="41" y="111" width="38" height="7" rx="2" fill="#c7d2fe" />
      </svg>
    </div>
  );
}