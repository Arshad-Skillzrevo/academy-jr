import React from "react";
import { PlayCircle, Rocket } from "lucide-react";

/**
 * CTARow Component
 * A responsive row of call-to-action buttons with Lucide icons and hover effects.
 */
export function CTARow() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10">
      <button className="kid-btn kid-btn-blue group">
        <PlayCircle className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
        <span>Try a Free Demo Class</span>
      </button>
      <button className="kid-btn kid-btn-orange group">
        <Rocket className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" />
        <span>Start Learning Today</span>
      </button>
    </div>
  );
}