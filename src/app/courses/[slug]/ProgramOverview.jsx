import React from "react";
import { BookOpen } from "lucide-react";
import { RocketSVG } from "./Rocketsvg";
import { CTARow } from "./CTARow";

const ICON_BG_CLASSES = [
  "bg-violet-100 text-violet-600",
  "bg-sky-100 text-sky-600",
  "bg-emerald-100 text-emerald-600",
  "bg-amber-100 text-amber-600",
  "bg-pink-100 text-pink-600",
  "bg-orange-100 text-orange-600",
];

/**
 * ProgramOverview Component
 * Provides a high-level summary of the program with a grid of highlight cards,
 * a rocket animation, and a call-to-action row.
 */
export function ProgramOverview({ courseTitle, heading, description, highlights, highlightIcons }) {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #f0f9ff 100%)" }}
    >
      {/* Background patterns and decorative elements */}
      <div className="absolute inset-0 dotted-bg opacity-50 pointer-events-none" />
      <div className="absolute top-10 right-8 opacity-10 pointer-events-none">
        <RocketSVG className="w-32 h-32" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          
          {/* Left Column: Text Content */}
          <div>
            <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-600 font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              <BookOpen className="w-3.5 h-3.5" /> About the Program
            </span>
            <h2 className="font-fredoka text-4xl md:text-5xl text-gray-900 mb-5 leading-tight">
              {heading}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-8 font-semibold">
              {description}
            </p>
            <CTARow title={courseTitle}/>
          </div>

          {/* Right Column: Highlight Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h, i) => {
              const Icon = highlightIcons[i % highlightIcons.length];
              const ic = ICON_BG_CLASSES[i % ICON_BG_CLASSES.length];
              return (
                <div
                  key={i}
                  className="bg-white border-2 border-gray-100 rounded-3xl p-5 flex items-start gap-3 card-hover shadow-sm"
                >
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 ${ic}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-bold text-gray-700 leading-snug mt-1">
                    {h.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative Wave Divider */}
      <div className="relative h-16 overflow-hidden mt-10">
        <svg viewBox="0 0 1440 64" className="absolute bottom-0 left-0 w-full" preserveAspectRatio="none">
          <path d="M0,0 C360,64 1080,0 1440,64 L1440,64 L0,64 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}