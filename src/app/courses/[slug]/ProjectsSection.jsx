import React from "react";
import { Activity, Target, Wrench } from "lucide-react";
import { CTARow } from "./CTARow";

const CAP_COLORS = [
  "border-violet-200 bg-violet-50",
  "border-sky-200 bg-sky-50",
  "border-emerald-200 bg-emerald-50",
  "border-amber-200 bg-amber-50",
  "border-pink-200 bg-pink-50",
  "border-orange-200 bg-orange-50",
];

const NUM_COLORS = [
  "text-violet-300", "text-sky-300", "text-emerald-300",
  "text-amber-300",  "text-pink-300", "text-orange-300",
];

/**
 * ProjectsSection Component
 * Showcases both quick learning activities and major capstone projects
 * with a playful, grid-based layout.
 */
export function ProjectsSection({ courseTitle, heading, description, activities, capstoneProjects }) {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #fdf4ff 0%, #fef3c7 100%)" }}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 dotted-bg opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-600 font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <Wrench className="w-3.5 h-3.5" /> Build Real Stuff
          </span>
          <h2 className="font-fredoka text-4xl md:text-5xl text-gray-900 mb-3">{heading}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed font-semibold">
            {description}
          </p>
        </div>

        {/* Quick Activities Grid */}
        <div className="mb-14">
          <h3 className="font-fredoka text-2xl text-gray-800 mb-5 flex items-center gap-2">
            <Activity className="w-6 h-6 text-indigo-500" /> Learning Activities
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {activities.map((a, i) => (
              <div
                key={i}
                className="bg-white border-2 border-gray-100 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm card-hover"
              >
                <span className="w-8 h-8 rounded-xl bg-indigo-500 text-white text-xs font-black flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm text-gray-700 font-bold">{a}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Capstone Projects Grid */}
        <div>
          <h3 className="font-fredoka text-2xl text-gray-800 mb-5 flex items-center gap-2">
            <Target className="w-6 h-6 text-orange-500" /> Capstone Projects
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capstoneProjects.map((p, i) => (
              <div
                key={p.num}
                className={`border-2 rounded-3xl p-5 card-hover ${CAP_COLORS[i % CAP_COLORS.length]}`}
              >
                <span className={`font-fredoka text-5xl ${NUM_COLORS[i % NUM_COLORS.length]}`}>
                  {String(p.num).padStart(2, "0")}
                </span>
                <h4 className="font-black text-gray-800 text-sm mt-2 mb-1">{p.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-semibold">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <CTARow title={courseTitle} />
      </div>

      {/* Decorative Wave Divider */}
      <div className="relative h-16 overflow-hidden mt-10">
        <svg viewBox="0 0 1440 64" className="absolute bottom-0 left-0 w-full" preserveAspectRatio="none">
          <path d="M0,64 C360,0 1080,64 1440,0 L1440,64 L0,64 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}