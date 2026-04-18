// "use client";
// import React, { useState } from "react";
// import { Layers, BookOpen, Brain, Atom, Box, Palette, Glasses, Code2, Music, Globe, Microscope, Clock } from "lucide-react";
// import { ModuleCard } from "./ModuleCard";
// import { CTARow } from "./CTARow";
// import { FaChild, FaTasks } from "react-icons/fa";
// import { MdClass } from "react-icons/md";

// // Branding colors cycling per module
// const MODULE_THEMES = [
//   { banner: "#1642d6", accent: "#ea580c", shape: "circles" },
//   { banner: "#ea580c", accent: "#1642d6", shape: "stars" },
//   { banner: "#1642d6", accent: "#ea580c", shape: "triangles" },
//   { banner: "#ea580c", accent: "#1642d6", shape: "dots" },
//   { banner: "#1642d6", accent: "#ea580c", shape: "waves" },
//   { banner: "#ea580c", accent: "#1642d6", shape: "circles" },
// ];

// // Map module index → lucide icon
// const MODULE_ICONS = [Atom, Box, Palette, Glasses, Code2, Music, Globe, Microscope, Clock];

// export function CurriculumSection({ heading, modules, lessons, age, durationWeeks, durationClasses, grade, activities }) {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const toggleModule = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <>
//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50%       { transform: translateY(-8px) rotate(5deg); }
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to   { transform: rotate(360deg); }
//         }
//         @keyframes pulse-ring {
//           0%, 100% { opacity: 0.4; transform: scale(1); }
//           50%       { opacity: 0.8; transform: scale(1.08); }
//         }
//         @keyframes shimmer {
//           0%   { background-position: -200% center; }
//           100% { background-position:  200% center; }
//         }
//         @keyframes bounce-in {
//           0%   { transform: scale(0.85); opacity: 0; }
//           60%  { transform: scale(1.05); opacity: 1; }
//           100% { transform: scale(1); }
//         }
//         @keyframes dash {
//           to { stroke-dashoffset: 0; }
//         }
//         .module-card-enter {
//           animation: bounce-in 0.4s ease forwards;
//         }
//         .shimmer-badge {
//           background: linear-gradient(90deg, #1642d6 0%, #4f78ff 40%, #ea580c 60%, #1642d6 100%);
//           background-size: 200% auto;
//           animation: shimmer 3s linear infinite;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }
//         .float-icon { animation: float 3s ease-in-out infinite; }
//         .float-icon-alt { animation: float 3.5s ease-in-out infinite reverse; }
//         .spin-shape { animation: spin-slow 12s linear infinite; }
//         .pulse-ring  { animation: pulse-ring 2.5s ease-in-out infinite; }
//       `}</style>

//       <section className="py-20 relative overflow-hidden" style={{ background: "#f8f9ff" }}>

//         {/* Background decorative blobs */}
//         <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
//           <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-10"
//             style={{ background: "#1642d6", filter: "blur(60px)" }} />
//           <div className="absolute -bottom-20 -right-10 w-96 h-96 rounded-full opacity-10"
//             style={{ background: "#ea580c", filter: "blur(80px)" }} />
//           {/* Floating tiny shapes */}
//           <svg className="absolute top-10 right-10 float-icon opacity-20" width="40" height="40" viewBox="0 0 40 40">
//             <polygon points="20,2 38,36 2,36" fill="#1642d6"/>
//           </svg>
//           <svg className="absolute bottom-16 left-10 float-icon-alt opacity-20" width="32" height="32" viewBox="0 0 32 32">
//             <rect x="4" y="4" width="24" height="24" rx="6" fill="#ea580c"/>
//           </svg>
//           <svg className="absolute top-1/2 left-4 spin-shape opacity-10" width="48" height="48" viewBox="0 0 48 48">
//             <circle cx="24" cy="24" r="20" stroke="#1642d6" strokeWidth="3" fill="none" strokeDasharray="8 4"/>
//           </svg>
//         </div>

//         <div className="max-w-5xl mx-auto px-4 relative z-10">

//           {/* ── Header ── */}
//           <div className="text-center mb-12">

//             {/* Shimmer badge */}
//             <span className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest px-5 py-2 rounded-full mb-5 border-2 shadow-sm"
//               style={{ borderColor: "#1642d6", background: "#fff" }}>
//               <Brain className="w-3.5 h-3.5" style={{ color: "#1642d6" }} />
//               <span className="shimmer-badge">What You'll Learn</span>
//             </span>

//             {/* Heading with underline doodle */}
//             <div className="relative block mb-4 max-w-2xl mx-auto">
//               <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
//                 {heading}
//               </h2>
//               <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 300 10" preserveAspectRatio="none">
//                 <path d="M0,8 Q75,0 150,7 Q225,14 300,6" stroke="#ea580c" strokeWidth="3" fill="none"
//                   strokeLinecap="round"
//                   strokeDasharray="320" strokeDashoffset="320"
//                   style={{ animation: "dash 1s ease forwards 0.3s" }}/>
//               </svg>
//             </div>

//             {/* Stats pills */}
//             <div className="flex justify-center gap-3 flex-wrap mt-6">
//               <span className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full font-black text-white shadow-md"
//                 style={{ background: "#1642d6" }}>
//                 <Layers className="w-3.5 h-3.5" /> {modules.length} Modules
//               </span>
//               <span className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full font-black text-white shadow-md"
//                 style={{ background: "#ea580c" }}>
//                 <BookOpen className="w-3.5 h-3.5" /> {lessons} Lectures
//               </span>
//               <span className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full font-black text-white shadow-md"
//                 style={{ background: "#1642d6" }}>
//                 <FaChild className="w-3.5 h-3.5" /> {age} Years Old
//               </span>
//               <span className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full font-black text-white shadow-md"
//                 style={{ background: "#ea580c" }}>
//                 <MdClass className="w-3.5 h-3.5" /> {grade} Grade
//               </span>
//               <span className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full font-black text-white shadow-md"
//                 style={{ background: "#1642d6" }}>
//                 <Clock className="w-3.5 h-3.5" /> {durationWeeks} Weeks
//               </span>
//               <span className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full font-black text-white shadow-md"
//                 style={{ background: "#ea580c" }}>
//                 <BookOpen className="w-3.5 h-3.5" /> {durationClasses} min Classes
//               </span>
//               <span className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full font-black text-white shadow-md"
//                 style={{ background: "#1642d6" }}>
//                 <FaTasks className="w-3.5 h-3.5" /> {activities} Activities
//               </span>
//             </div>
//           </div>

//           {/* ── Modules List ── */}
//           <div className="space-y-3">
//             {modules.map((mod, i) => {
//               const Icon = MODULE_ICONS[i % MODULE_ICONS.length];
//               const theme = MODULE_THEMES[i % MODULE_THEMES.length];
//               return (
//                 <ModuleCard
//                   key={mod.id}
//                   mod={mod}
//                   index={i}
//                   isOpen={activeIndex === i}
//                   onToggle={() => toggleModule(i)}
//                   theme={theme}
//                   Icon={Icon}
//                 />
//               );
//             })}
//           </div>

//           <CTARow />
//         </div>
//       </section>
//     </>
//   );
// }

// ─────────────────────────────────────────
// CURRICULUM DATA  (paste into your course data file)
// ─────────────────────────────────────────
// export const webDevBeginnerCurriculum = {
//   heading: "Course Delivery Plan",
//   modules: [
//     {
//       id: "m1",
//       title: "Internet & Web Fundamentals",
//       description:
//         "Understand internet basics, how websites work, and plan your own website using real-world concepts.",
//       outcomes: [
//         "Understand internet, websites & types",
//         "Learn how web works (domain, hosting, HTTP)",
//         "Plan website structure & layout",
//       ],
//       language: "Basic Web Concepts",
//       platform: "Browser + VS Code",
//       lessons: 3,
//       activities: "8+",
//     },
//     {
//       id: "m2",
//       title: "HTML (Website Structure)",
//       description:
//         "Learn to build structured web pages using HTML elements and create multiple practical pages.",
//       outcomes: [
//         "Understand HTML structure & tags",
//         "Create pages with text & media",
//         "Build lists & tables",
//         "Create forms for user input",
//         "Use semantic HTML layout",
//       ],
//       language: "HTML",
//       platform: "VS Code",
//       lessons: 5,
//       activities: "10+",
//     },
//     {
//       id: "m3",
//       title: "CSS (Design & Layout)",
//       description:
//         "Design visually appealing and responsive websites using CSS styling and layout techniques.",
//       outcomes: [
//         "Apply styling using colors & fonts",
//         "Understand spacing using box model",
//         "Create layouts using Flexbox",
//         "Build responsive designs",
//         "Add animations & effects",
//       ],
//       language: "CSS",
//       platform: "VS Code",
//       lessons: 5,
//       activities: "10+",
//     },
//     {
//       id: "m4",
//       title: "JavaScript Fundamentals",
//       description:
//         "Learn programming basics and add interactivity to web pages using JavaScript.",
//       outcomes: [
//         "Understand variables & basic JavaScript",
//         "Apply conditions & functions",
//         "Work with events & loops",
//         "Build interactive logic-based features",
//       ],
//       language: "JavaScript",
//       platform: "Browser + VS Code",
//       lessons: 4,
//       activities: "10+",
//     },
//     {
//       id: "m5",
//       title: "DOM & Interactive Projects",
//       description:
//         "Control and update web pages dynamically using DOM and build real-world applications.",
//       outcomes: [
//         "Manipulate webpage elements using DOM",
//         "Implement form validation",
//         "Create dynamic styling & UI features",
//         "Build To-Do and interactive apps",
//         "Develop quiz-based applications",
//       ],
//       language: "JavaScript (DOM)",
//       platform: "Browser + VS Code",
//       lessons: 5,
//       activities: "10+",
//     },
//     {
//       id: "m6",
//       title: "Final Website Project",
//       description:
//         "Apply all your learning to design, build, and present a complete interactive website project from scratch.",
//       outcomes: [
//         "Plan and design a complete website (idea, layout, wireframe)",
//         "Build a fully functional website using HTML, CSS & JavaScript",
//         "Present your project with proper explanation and real-world use",
//       ],
//       language: "HTML + CSS + JavaScript",
//       platform: "VS Code + Browser",
//       lessons: 3,
//       activities: "10+",
//     },
//   ],
// };


// ─────────────────────────────────────────
// UPDATED CurriculumSection COMPONENT
// ─────────────────────────────────────────
"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Layers, BookOpen, Brain, Atom, Box, Palette,
  Glasses, Code2, Music, Globe, Microscope, Clock,
  ChevronDown, CheckCircle2, Monitor, Wrench,
  Star, Sparkles, Rocket, Zap,
} from "lucide-react";
import { FaChild, FaTasks } from "react-icons/fa";
import { MdClass } from "react-icons/md";
import { CTARow } from "./CTARow";

/* ─────────────────────────────────────────
   GOOGLE FONTS
───────────────────────────────────────── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');

    @keyframes csFloat    { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-9px) rotate(4deg)} }
    @keyframes csFloatAlt { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-9px) rotate(-4deg)} }
    @keyframes csSpin     { to{transform:rotate(360deg)} }
    @keyframes csPulse    { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.5);opacity:.5} }
    @keyframes csDash     { to{stroke-dashoffset:0} }
    @keyframes csShimmer  { 0%{background-position:-200% center} 100%{background-position:200% center} }

    .cs-float     { animation: csFloat    3.4s ease-in-out infinite; }
    .cs-float-alt { animation: csFloatAlt 3.8s ease-in-out infinite; }
    .cs-spin      { animation: csSpin     11s  linear     infinite; }
    .cs-pulse     { animation: csPulse    1.8s ease-in-out infinite; }
    .cs-shimmer-text {
      background: linear-gradient(90deg, #7c3aed 0%, #a855f7 35%, #f97316 60%, #7c3aed 100%);
      background-size: 200% auto;
      animation: csShimmer 3s linear infinite;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .cs-dash-line {
      stroke-dasharray: 340;
      stroke-dashoffset: 340;
      animation: csDash 1s ease forwards 0.4s;
    }
    .cs-modal-scroll::-webkit-scrollbar       { width:5px; }
    .cs-modal-scroll::-webkit-scrollbar-track { background:#f5f0ff; border-radius:100px; }
    .cs-modal-scroll::-webkit-scrollbar-thumb { background:linear-gradient(180deg,#a855f7,#7c3aed); border-radius:100px; }
  `}</style>
);

/* ─────────────────────────────────────────
   BRAND
───────────────────────────────────────── */
const B = {
  violet: "#7c3aed", purple: "#a855f7",
  sky:    "#0ea5e9", orange: "#f97316",
  amber:  "#fbbf24", rose:   "#f43f5e",
  mint:   "#10b981", navy:   "#0f1b4c",
};

/* Per-module accent palette — cycles */
const MOD_PALETTE = [
  { banner: B.violet, light: "#ede9fe", dot: B.purple  },
  { banner: B.sky,    light: "#e0f2fe", dot: "#0284c7" },
  { banner: B.orange, light: "#fff3e0", dot: "#ea580c" },
  { banner: B.mint,   light: "#d1fae5", dot: "#059669" },
  { banner: B.rose,   light: "#ffe4e6", dot: "#e11d48" },
  { banner: B.amber,  light: "#fef9c3", dot: "#b45309" },
];

const MOD_ICONS = [Atom, Box, Palette, Glasses, Code2, Music, Globe, Microscope, Clock];

/* ─────────────────────────────────────────
   HELPERS
───────────────────────────────────────── */
function DottedBg({ color = B.violet, opacity = 0.04, size = 28 }) {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
      style={{
        backgroundImage: `radial-gradient(circle, ${color} 1.5px, transparent 1.5px)`,
        backgroundSize: `${size}px ${size}px`, opacity,
      }} />
  );
}

function WavyTop({ fill = "#fff" }) {
  return (
    <div className="absolute top-0 left-0 w-full pointer-events-none z-[4]" style={{ lineHeight: 0 }} aria-hidden="true">
      <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,0 L0,0 Z" fill={fill} />
      </svg>
    </div>
  );
}

function WavyBottom({ fill = "#fff" }) {
  return (
    <div className="absolute bottom-0 left-0 w-full pointer-events-none z-[4]" style={{ lineHeight: 0 }} aria-hidden="true">
      <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z" fill={fill} />
      </svg>
    </div>
  );
}

function SpinningStar({ size = 13, color, style: s }) {
  return (
    <div className="absolute pointer-events-none z-[2] cs-spin" style={s} aria-hidden="true">
      <Star size={size} fill={color} color={color} />
    </div>
  );
}

function PulsingDots({ colors }) {
  return (
    <div className="flex justify-center gap-2 mt-4" aria-hidden="true">
      {colors.map((c, i) => (
        <div key={i} className="w-2 h-2 rounded-full cs-pulse"
          style={{ background: c, animationDelay: `${i * 0.18}s` }} />
      ))}
    </div>
  );
}

function FadeIn({ children, delay = 0, className = "", style: s }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className} style={s}>
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   MODULE CARD
───────────────────────────────────────── */
function ModuleCard({ mod, index, isOpen, onToggle, palette, Icon }) {
  return (
    <FadeIn delay={index * 0.06}>
      <motion.div
        layout
        className="rounded-3xl overflow-hidden"
        style={{
          border: `2px solid ${palette.banner}22`,
          boxShadow: isOpen
            ? `0 12px 36px ${palette.banner}18`
            : `0 4px 14px ${palette.banner}0d`,
          background: "rgba(255,255,255,0.94)",
          transition: "box-shadow 0.3s",
        }}
      >
        {/* ── HEADER ROW ── */}
        <button
          onClick={onToggle}
          className="w-full text-left flex items-center gap-4 p-4 sm:p-5"
          style={{ cursor: "pointer" }}
          aria-expanded={isOpen}
        >
          {/* Number + icon bubble */}
          <div className="flex-shrink-0 relative">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${palette.banner}, ${palette.banner}bb)`,
                boxShadow: `0 6px 16px ${palette.banner}40`,
              }}
            >
              <Icon size={20} color="white" strokeWidth={2} />
            </div>
            {/* Module number badge */}
            <div
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
              style={{ background: palette.dot, fontFamily: "'Fredoka One', cursive" }}
            >
              {index + 1}
            </div>
          </div>

          {/* Title + meta */}
          <div className="flex-1 min-w-0">
            <p
              className="leading-tight"
              style={{ fontFamily: "'Fredoka One', cursive", fontSize: "clamp(0.95rem,1.8vw,1.1rem)", color: B.navy }}
            >
              Module {index + 1} — {mod.title}
            </p>
            <div className="flex flex-wrap gap-2 mt-1.5">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold rounded-full px-2.5 py-0.5"
                style={{ background: palette.light, color: palette.banner }}>
                <BookOpen size={9} strokeWidth={2.5} />
                {mod.lessons} Lessons
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold rounded-full px-2.5 py-0.5"
                style={{ background: palette.light, color: palette.banner }}>
                <Zap size={9} strokeWidth={2.5} />
                {mod.activities} Activities
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold rounded-full px-2.5 py-0.5"
                style={{ background: palette.light, color: palette.banner }}>
                <Monitor size={9} strokeWidth={2.5} />
                {mod.platform}
              </span>
            </div>
          </div>

          {/* Chevron */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center"
            style={{ background: isOpen ? `${palette.banner}18` : "#f3f4f6", color: palette.banner }}
          >
            <ChevronDown size={16} strokeWidth={2.5} />
          </motion.div>
        </button>

        {/* ── EXPANDED BODY ── */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden" }}
            >
              {/* Divider */}
              <div style={{ height: 1, background: `${palette.banner}15`, margin: "0 20px" }} />

              <div className="p-5 grid sm:grid-cols-3 gap-5">

                {/* Description */}
                <div className="sm:col-span-1">
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: palette.banner }}>
                    About this Module
                  </p>
                  <p className="text-[13px] text-gray-600 leading-relaxed" style={{ fontWeight: 700 }}>
                    {mod.description}
                  </p>

                  {/* Language + platform chips */}
                  <div className="flex flex-col gap-2 mt-4">
                    <div className="flex items-center gap-2 rounded-xl p-2.5 border"
                      style={{ background: palette.light, borderColor: `${palette.banner}20` }}>
                      <Code2 size={13} style={{ color: palette.banner }} strokeWidth={2.2} />
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400">Language</p>
                        <p className="text-[12px] font-bold" style={{ color: B.navy }}>{mod.language}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-xl p-2.5 border"
                      style={{ background: palette.light, borderColor: `${palette.banner}20` }}>
                      <Wrench size={13} style={{ color: palette.banner }} strokeWidth={2.2} />
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400">Platform</p>
                        <p className="text-[12px] font-bold" style={{ color: B.navy }}>{mod.platform}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Learning Outcomes */}
                <div className="sm:col-span-2">
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: palette.banner }}>
                    Key Learning Outcomes
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {mod.outcomes.map((o, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 + 0.1, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-start gap-2.5 rounded-2xl p-3 border"
                        style={{ background: palette.light, borderColor: `${palette.banner}20` }}
                      >
                        <div className="w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: palette.banner }}>
                          <CheckCircle2 size={11} color="white" strokeWidth={2.5} />
                        </div>
                        <span className="text-[12px] text-gray-700 leading-snug" style={{ fontWeight: 700 }}>
                          {o}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom accent bar on open */}
        <motion.div
          animate={{ scaleX: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            height: 4,
            background: `linear-gradient(90deg, ${palette.banner}, ${B.orange})`,
            transformOrigin: "left",
          }}
        />
      </motion.div>
    </FadeIn>
  );
}

/* ─────────────────────────────────────────
   CURRICULUM SECTION
───────────────────────────────────────── */
export function CurriculumSection({
  courseTitle,
  heading,
  modules,
  lessons,
  age,
  durationWeeks,
  durationClasses,
  grade,
  activities,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (i) => setActiveIndex(activeIndex === i ? null : i);

  return (
    <>
      <FontLoader />
      <section
        className="relative py-28 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #f5f0ff 0%, #fff0f7 40%, #f0f9ff 70%, #f0fff8 100%)",
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        <DottedBg color={B.violet} opacity={0.038} size={30} />
        <WavyTop  fill="#ffffff" />
        <WavyBottom fill="#ffffff" />

        {/* Blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div style={{ position:"absolute", top:-80, right:-80, width:440, height:440, borderRadius:"50%",
            background:`radial-gradient(circle,${B.violet}1e,transparent 70%)`, filter:"blur(60px)" }} />
          <div style={{ position:"absolute", bottom:-60, left:-60, width:360, height:360, borderRadius:"50%",
            background:`radial-gradient(circle,${B.orange}18,transparent 70%)`, filter:"blur(55px)" }} />
        </div>

        {/* Spinning stars — desktop */}
        <div className="hidden lg:block" aria-hidden="true">
          <SpinningStar size={14} color={B.amber}  style={{ top:"8%",  left:"3%"  }} />
          <SpinningStar size={11} color={B.rose}   style={{ top:"84%", left:"5%"  }} />
          <SpinningStar size={13} color={B.violet} style={{ top:"6%",  right:"4%" }} />
          <SpinningStar size={10} color={B.sky}    style={{ top:"86%", right:"5%" }} />
          <SpinningStar size={9}  color={B.mint}   style={{ top:"48%", left:"1%"  }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">

          {/* ── HEADER ── */}
          <FadeIn className="text-center mb-14">

            {/* Eyebrow */}
            <div className="flex justify-center mb-4">
              <span
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-bold uppercase tracking-widest border-2"
                style={{ color: B.violet, borderColor: `${B.violet}38`, background: "linear-gradient(135deg,#ede9fe,#fce7f3)" }}
              >
                <div className="cs-float" style={{ display:"flex" }}>
                  <Brain size={13} style={{ color: B.orange }} />
                </div>
                What You'll Learn
              </span>
            </div>

            {/* Heading with wavy underline */}
            <div className="relative inline-block mb-2">
              <h2
                className="cs-shimmer-text"
                style={{ fontFamily:"'Fredoka One',cursive", fontSize:"clamp(1.8rem,4vw,3rem)", lineHeight:1.1 }}
              >
                {heading}
              </h2>
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 300 10" preserveAspectRatio="none">
                <path d="M0,8 Q75,0 150,7 Q225,14 300,6"
                  stroke={B.orange} strokeWidth="3" fill="none"
                  strokeLinecap="round" className="cs-dash-line" />
              </svg>
            </div>

            {/* Stats pills */}
            <div className="flex flex-wrap justify-center gap-2.5 mt-8">
              {[
                { Icon: Layers,    label: `${modules.length} Modules`,        color: B.violet },
                { Icon: BookOpen,  label: `${lessons} Lectures`,              color: B.sky    },
                { Icon: FaChild,   label: `${age} Years Old`,                 color: B.orange },
                { Icon: MdClass,   label: `${grade} Grade`,                   color: B.mint   },
                { Icon: Clock,     label: `${durationWeeks} Weeks`,           color: B.rose   },
                { Icon: BookOpen,  label: `${durationClasses} min Classes`,   color: B.amber  },
                { Icon: FaTasks,   label: `${activities} Activities`,         color: B.violet },
              ].map(({ Icon, label, color }, i) => (
                <motion.span
                  key={label}
                  whileHover={{ scale: 1.06, y: -3 }}
                  transition={{ type:"spring", stiffness:400, damping:18 }}
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold px-4 py-2 rounded-full text-white"
                  style={{
                    background: `linear-gradient(135deg,${color},${color}cc)`,
                    boxShadow: `0 4px 14px ${color}35`,
                    fontFamily: "'Nunito',sans-serif",
                    cursor: "default",
                  }}
                >
                  <Icon className="w-3 h-3" />
                  {label}
                </motion.span>
              ))}
            </div>

            <PulsingDots colors={[B.violet, B.sky, B.orange, B.mint, B.rose]} />
          </FadeIn>

          {/* ── MODULE LIST ── */}
          <div className="flex flex-col gap-4">
            {modules.map((mod, i) => {
              const palette = MOD_PALETTE[i % MOD_PALETTE.length];
              const Icon    = MOD_ICONS[i % MOD_ICONS.length];
              return (
                <ModuleCard
                  key={mod.id}
                  mod={mod}
                  index={i}
                  isOpen={activeIndex === i}
                  onToggle={() => toggle(i)}
                  palette={palette}
                  Icon={Icon}
                />
              );
            })}
          </div>

          {/* ── CTA ROW ── */}
          <div className="mt-10">
            <CTARow title={courseTitle} />
          </div>

        </div>
      </section>
    </>
  );
}