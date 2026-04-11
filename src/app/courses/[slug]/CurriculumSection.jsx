// "use client";
// import React, { useState } from "react";
// import { Layers, BookOpen, Brain } from "lucide-react";
// import { ModuleCard } from "./ModuleCard";
// import { CTARow } from "./CTARow";

// export function CurriculumSection({ heading, modules, lessons }) {
//   // Track which module index is currently expanded. 
//   // Initialize with 0 to keep the first one open, or null to close all.
//   const [activeIndex, setActiveIndex] = useState(0);

//   const toggleModule = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header Content */}
//         <div className="text-center mb-12">
//           <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-600 font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
//             <Brain className="w-3.5 h-3.5" /> What You'll Learn
//           </span>
//           <h2 className="font-fredoka text-4xl md:text-5xl text-gray-900 mb-4">
//             {heading}
//           </h2>
          
//           <div className="flex justify-center gap-3 flex-wrap">
//             <span className="inline-flex items-center gap-1.5 text-xs bg-violet-100 text-violet-700 px-4 py-1.5 rounded-full font-black">
//               <Layers className="w-3.5 h-3.5" /> {modules.length} Modules
//             </span>
//             <span className="inline-flex items-center gap-1.5 text-xs bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full font-black">
//               <BookOpen className="w-3.5 h-3.5" /> {lessons} Lectures
//             </span>
//           </div>
//         </div>

//         {/* Modules List */}
//         <div className="space-y-3">
//           {modules.map((mod, i) => (
//             <ModuleCard 
//               key={mod.id} 
//               mod={mod} 
//               isOpen={activeIndex === i} 
//               onToggle={() => toggleModule(i)}
//             />
//           ))}
//         </div>

//         <CTARow />
//       </div>
//     </section>
//   );
// }



// "use client";
// import React, { useState } from "react";
// import { Layers, BookOpen, Brain } from "lucide-react";
// import { ModuleCard } from "./ModuleCard";
// import { CTARow } from "./CTARow";

// export function CurriculumSection({ heading, modules, lessons }) {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const toggleModule = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-2xl mx-auto px-4">

//         {/* Header */}
//         <div className="text-center mb-10">
//           <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-600 font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
//             <Brain className="w-3.5 h-3.5" /> What You'll Learn
//           </span>
//           <h2 className="font-fredokatext-4xl md:text-5xl text-gray-900 mb-4 font-bold">
//             {heading}
//           </h2>
//           <div className="flex justify-center gap-3 flex-wrap">
//             <span className="inline-flex items-center gap-1.5 text-xs bg-violet-100 text-violet-700 px-4 py-1.5 rounded-full font-black">
//               <Layers className="w-3.5 h-3.5" /> {modules.length} Modules
//             </span>
//             <span className="inline-flex items-center gap-1.5 text-xs bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full font-black">
//               <BookOpen className="w-3.5 h-3.5" /> {lessons} Lectures
//             </span>
//           </div>
//         </div>

//         {/* Modules List */}
//         <div className="space-y-3">
//           {modules.map((mod, i) => (
//             <ModuleCard
//               key={mod.id}
//               mod={mod}
//               index={i}
//               isOpen={activeIndex === i}
//               onToggle={() => toggleModule(i)}
//             />
//           ))}
//         </div>

//         <CTARow />
//       </div>
//     </section>
//   );
// }



"use client";
import React, { useState } from "react";
import { Layers, BookOpen, Brain, Atom, Box, Palette, Glasses, Code2, Music, Globe, Microscope, Clock } from "lucide-react";
import { ModuleCard } from "./ModuleCard";
import { CTARow } from "./CTARow";
import { FaChild, FaTasks } from "react-icons/fa";
import { MdClass } from "react-icons/md";

// Branding colors cycling per module
const MODULE_THEMES = [
  { banner: "#1642d6", accent: "#ea580c", shape: "circles" },
  { banner: "#ea580c", accent: "#1642d6", shape: "stars" },
  { banner: "#1642d6", accent: "#ea580c", shape: "triangles" },
  { banner: "#ea580c", accent: "#1642d6", shape: "dots" },
  { banner: "#1642d6", accent: "#ea580c", shape: "waves" },
  { banner: "#ea580c", accent: "#1642d6", shape: "circles" },
];

// Map module index → lucide icon
const MODULE_ICONS = [Atom, Box, Palette, Glasses, Code2, Music, Globe, Microscope, Clock];

export function CurriculumSection({ heading, modules, lessons, age, durationWeeks, durationClasses, grade, activities }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleModule = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-8px) rotate(5deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulse-ring {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50%       { opacity: 0.8; transform: scale(1.08); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes bounce-in {
          0%   { transform: scale(0.85); opacity: 0; }
          60%  { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); }
        }
        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }
        .module-card-enter {
          animation: bounce-in 0.4s ease forwards;
        }
        .shimmer-badge {
          background: linear-gradient(90deg, #1642d6 0%, #4f78ff 40%, #ea580c 60%, #1642d6 100%);
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .float-icon { animation: float 3s ease-in-out infinite; }
        .float-icon-alt { animation: float 3.5s ease-in-out infinite reverse; }
        .spin-shape { animation: spin-slow 12s linear infinite; }
        .pulse-ring  { animation: pulse-ring 2.5s ease-in-out infinite; }
      `}</style>

      <section className="py-20 relative overflow-hidden" style={{ background: "#f8f9ff" }}>

        {/* Background decorative blobs */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-10"
            style={{ background: "#1642d6", filter: "blur(60px)" }} />
          <div className="absolute -bottom-20 -right-10 w-96 h-96 rounded-full opacity-10"
            style={{ background: "#ea580c", filter: "blur(80px)" }} />
          {/* Floating tiny shapes */}
          <svg className="absolute top-10 right-10 float-icon opacity-20" width="40" height="40" viewBox="0 0 40 40">
            <polygon points="20,2 38,36 2,36" fill="#1642d6"/>
          </svg>
          <svg className="absolute bottom-16 left-10 float-icon-alt opacity-20" width="32" height="32" viewBox="0 0 32 32">
            <rect x="4" y="4" width="24" height="24" rx="6" fill="#ea580c"/>
          </svg>
          <svg className="absolute top-1/2 left-4 spin-shape opacity-10" width="48" height="48" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" stroke="#1642d6" strokeWidth="3" fill="none" strokeDasharray="8 4"/>
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">

          {/* ── Header ── */}
          <div className="text-center mb-12">

            {/* Shimmer badge */}
            <span className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest px-5 py-2 rounded-full mb-5 border-2 shadow-sm"
              style={{ borderColor: "#1642d6", background: "#fff" }}>
              <Brain className="w-3.5 h-3.5" style={{ color: "#1642d6" }} />
              <span className="shimmer-badge">What You'll Learn</span>
            </span>

            {/* Heading with underline doodle */}
            <div className="relative block mb-4 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                {heading}
              </h2>
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 300 10" preserveAspectRatio="none">
                <path d="M0,8 Q75,0 150,7 Q225,14 300,6" stroke="#ea580c" strokeWidth="3" fill="none"
                  strokeLinecap="round"
                  strokeDasharray="320" strokeDashoffset="320"
                  style={{ animation: "dash 1s ease forwards 0.3s" }}/>
              </svg>
            </div>

            {/* Stats pills */}
            <div className="flex justify-center gap-3 flex-wrap mt-6">
              <span className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full font-black text-white shadow-md"
                style={{ background: "#1642d6" }}>
                <Layers className="w-3.5 h-3.5" /> {modules.length} Modules
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full font-black text-white shadow-md"
                style={{ background: "#ea580c" }}>
                <BookOpen className="w-3.5 h-3.5" /> {lessons} Lectures
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full font-black text-white shadow-md"
                style={{ background: "#1642d6" }}>
                <FaChild className="w-3.5 h-3.5" /> {age} Years Old
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full font-black text-white shadow-md"
                style={{ background: "#ea580c" }}>
                <MdClass className="w-3.5 h-3.5" /> {grade} Grade
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full font-black text-white shadow-md"
                style={{ background: "#1642d6" }}>
                <Clock className="w-3.5 h-3.5" /> {durationWeeks} Weeks
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full font-black text-white shadow-md"
                style={{ background: "#ea580c" }}>
                <BookOpen className="w-3.5 h-3.5" /> {durationClasses} min Classes
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full font-black text-white shadow-md"
                style={{ background: "#1642d6" }}>
                <FaTasks className="w-3.5 h-3.5" /> {activities} Activities
              </span>
            </div>
          </div>

          {/* ── Modules List ── */}
          <div className="space-y-3">
            {modules.map((mod, i) => {
              const Icon = MODULE_ICONS[i % MODULE_ICONS.length];
              const theme = MODULE_THEMES[i % MODULE_THEMES.length];
              return (
                <ModuleCard
                  key={mod.id}
                  mod={mod}
                  index={i}
                  isOpen={activeIndex === i}
                  onToggle={() => toggleModule(i)}
                  theme={theme}
                  Icon={Icon}
                />
              );
            })}
          </div>

          <CTARow />
        </div>
      </section>
    </>
  );
}