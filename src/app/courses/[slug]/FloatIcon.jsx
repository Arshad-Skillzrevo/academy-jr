import React from "react";

/**
 * FloatIcon Component
 * Renders an animated Lucide icon with randomized floating behavior.
 */
export function FloatIcon({ icon: Icon, style, color = "text-indigo-400", size = 24 }) {
  return (
    <span
      className={`absolute pointer-events-none select-none ${color}`}
      style={{
        ...style,
        animation: `floatBob ${3 + Math.random() * 2}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 2}s`,
      }}
    >
      <Icon size={size} />
    </span>
  );
}

/**
 * FloatingShape Component
 * Renders an animated decorative shape.
 */
export function FloatingShape({ className = "", delay = 0, duration = 3 }) {
  return (
    <div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        animation: `floatBob ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}