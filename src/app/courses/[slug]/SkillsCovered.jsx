import React from "react";
import { CheckCircle2 } from "lucide-react";
import { WobblyStarSVG } from "./WobblyStarSVG";

const SKILL_STYLES = [
  { bg: "bg-violet-50", border: "border-violet-200", icon: "bg-violet-600", num: "text-violet-400", label: "text-violet-800" },
  { bg: "bg-sky-50",    border: "border-sky-200",    icon: "bg-sky-600",    num: "text-sky-400",    label: "text-sky-800"    },
  { bg: "bg-emerald-50",border: "border-emerald-200",icon: "bg-emerald-600",num: "text-emerald-400",label: "text-emerald-800"},
  { bg: "bg-orange-50", border: "border-orange-200", icon: "bg-orange-500", num: "text-orange-400", label: "text-orange-800" },
  { bg: "bg-pink-50",   border: "border-pink-200",   icon: "bg-pink-500",   num: "text-pink-400",   label: "text-pink-800"   },
];

const SKILL_ICONS = [
  /* 0 – Globe */
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>,
  /* 1 – Layout */
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
  /* 2 – Code */
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  /* 3 – Table */
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>,
  /* 4 – Palette */
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5"><circle cx="13" cy="6" r="3"/><path d="M3 20a9 9 0 0112-8.49"/></svg>,
  /* 5 – Mobile */
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>,
  /* 6 – Zap */
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  /* 7 – Function */
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>,
  /* 8 – Sparkle */
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5"><path d="M12 3l1.912 5.813a2 2 0 001.272 1.272L21 12l-5.816 1.916a2 2 0 00-1.272 1.272L12 21l-1.912-5.812a2 2 0 00-1.272-1.272L3 12l5.816-1.916a2 2 0 001.272-1.272L12 3z"/></svg>,
  /* 9 – Pencil/Project */
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5"><path d="M15.232 5.232l3.536 3.536M9 11l-6 6v3h3l6-6-3-3zm7.5-7.5a2.121 2.121 0 013 3L18 8l-3-3 1.5-1.5z"/></svg>,
];

export function SkillsCovered({ skills = [] }) {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <WobblyStarSVG size={200} color="#818cf8" />
      </div>
      <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none">
        <WobblyStarSVG size={160} color="#fb923c" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-violet-100 text-violet-600 font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Skills Covered
          </span>
          <h2 className="font-fredoka text-4xl md:text-5xl text-gray-900 mb-3">
            Everything You'll Master
          </h2>
          <p className="text-gray-500 text-sm font-semibold max-w-xl mx-auto leading-relaxed">
            From your very first webpage to fully responsive, interactive sites — every skill you need, taught step by step.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skills.map((skill, i) => {
            const cs = SKILL_STYLES[i % SKILL_STYLES.length];
            return (
              <div
                key={i}
                className={`flex items-center gap-4 rounded-2xl border-2 ${cs.border} ${cs.bg} px-5 py-4 card-hover`}
              >
            
                <div>
                  
                  <p className={`text-sm font-bold leading-snug ${cs.label}`}>{skill}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}