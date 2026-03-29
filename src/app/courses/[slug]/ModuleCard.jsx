// // "use client";
// // import React from "react"; // Removed useState
// // import { motion, AnimatePresence } from "framer-motion";
// // import { ChevronDown } from "lucide-react";

// // const MODULE_COLORS = [
// //   { bg: "bg-violet-500",  light: "bg-violet-100",  text: "text-violet-600",  border: "border-violet-300"  },
// //   { bg: "bg-sky-500",     light: "bg-sky-100",     text: "text-sky-600",     border: "border-sky-300"     },
// //   { bg: "bg-emerald-500", light: "bg-emerald-100", text: "text-emerald-600", border: "border-emerald-300" },
// //   { bg: "bg-amber-500",   light: "bg-amber-100",   text: "text-amber-600",   border: "border-amber-300"   },
// //   { bg: "bg-pink-500",    light: "bg-pink-100",    text: "text-pink-600",    border: "border-pink-300"    },
// //   { bg: "bg-orange-500",  light: "bg-orange-100",  text: "text-orange-600",  border: "border-orange-300"  },
// // ];

// // // Added isOpen and onToggle props
// // export function ModuleCard({ mod, isOpen, onToggle }) {
// //   const c = MODULE_COLORS[(mod.id - 1) % MODULE_COLORS.length];

// //   return (
// //     <motion.div
// //       layout
// //       className={`rounded-3xl border-2 overflow-hidden transition-shadow duration-200 ${
// //         isOpen
// //           ? `${c.border} shadow-xl`
// //           : "border-gray-200 hover:border-gray-300 hover:shadow-md"
// //       }`}
// //     >
// //       <button
// //         onClick={onToggle} // Use the parent's toggle function
// //         className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-gray-50/60 transition-colors duration-200"
// //         aria-expanded={isOpen}
// //       >
// //         <div className="flex items-center gap-4">
// //           <span
// //             className={`w-12 h-12 rounded-2xl font-black text-sm flex items-center justify-center flex-shrink-0 shadow-md transition-all duration-200 ${
// //               isOpen ? `${c.bg} text-white` : `${c.light} ${c.text}`
// //             }`}
// //           >
// //             {mod.id}
// //           </span>
// //           <span className="font-bold text-gray-800 text-left text-sm md:text-base">
// //             <span className={`${c.text} font-black`}>Module {mod.id}</span> – {mod.title}
// //           </span>
// //         </div>

// //         <span
// //           className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 ${
// //             isOpen ? `${c.bg} text-white` : "bg-gray-100 text-gray-400"
// //           }`}
// //         >
// //           <motion.div
// //             animate={{ rotate: isOpen ? 180 : 0 }}
// //             transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
// //           >
// //             <ChevronDown className="w-4 h-4" />
// //           </motion.div>
// //         </span>
// //       </button>

// //       <AnimatePresence initial={false}>
// //         {isOpen && (
// //           <motion.div
// //             key="module-body"
// //             initial={{ height: 0, opacity: 0 }}
// //             animate={{ height: "auto", opacity: 1 }}
// //             exit={{ height: 0, opacity: 0 }}
// //             transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
// //             style={{ overflow: "hidden" }}
// //           >
// //             <div className="divide-y divide-white bg-gray-50">
// //               {mod.lectures.map((lec) => (
// //                 <div
// //                   key={lec.num}
// //                   className="px-5 py-3.5 flex gap-4 items-start hover:bg-white/70 transition-colors duration-150"
// //                 >
// //                   <span className={`mt-0.5 w-8 h-8 rounded-xl ${c.bg} text-white text-xs font-black flex items-center justify-center flex-shrink-0 shadow-sm`}>
// //                     {lec.num}
// //                   </span>
// //                   <div>
// //                     <p className="font-bold text-sm text-gray-800">{lec.title}</p>
// //                     <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{lec.desc}</p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </motion.div>
// //   );
// // }


// "use client";
// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const MODULE_COLORS = [
//   { banner: "#7C3AED", dot: "#7C3AED" },
//   { banner: "#6D28D9", dot: "#6D28D9" },
//   { banner: "#5B21B6", dot: "#5B21B6" },
//   { banner: "#7C3AED", dot: "#7C3AED" },
//   { banner: "#6D28D9", dot: "#6D28D9" },
//   { banner: "#5B21B6", dot: "#5B21B6" },
// ];

// function LessonRow({ lec, color }) {
//   return (
//     <div className="flex gap-4 items-start px-4 py-4 border-b border-gray-100 last:border-0">
//       {/* Dot bullet */}
//       <span
//         className="flex-shrink-0 w-3 h-3 rounded-full mt-1.5"
//         style={{ background: color, boxShadow: `0 0 0 3px ${color}33` }}
//       />

//       {/* Thumbnail */}
//       {lec.thumb ? (
//         <img
//           src={lec.thumb}
//           alt={lec.title}
//           className="flex-shrink-0 rounded-xl object-cover"
//           style={{ width: 72, height: 60 }}
//         />
//       ) : (
//         <span
//           className="flex-shrink-0 rounded-xl flex items-center justify-center text-white text-xs font-bold"
//           style={{ width: 72, height: 60, background: color, opacity: 0.7 }}
//         >
//           {lec.num}
//         </span>
//       )}

//       {/* Text */}
//       <div className="min-w-0">
//         <p className="font-bold text-gray-800" style={{ fontSize: "0.95rem" }}>
//           {lec.title}
//         </p>
//         <p className="text-gray-500 mt-0.5 leading-relaxed" style={{ fontSize: "0.8rem" }}>
//           {lec.desc}
//         </p>
//       </div>
//     </div>
//   );
// }

// export function ModuleCard({ mod, index, isOpen, onToggle }) {
//   const color = MODULE_COLORS[index % MODULE_COLORS.length];

//   return (
//     <div
//       className="rounded-2xl overflow-hidden"
//       style={{ boxShadow: isOpen ? "0 4px 24px #7c3aed22" : "0 1px 4px #0001" }}
//     >
//       {/* Banner */}
//       <button
//         onClick={onToggle}
//         aria-expanded={isOpen}
//         style={{ background: color.banner }}
//         className="w-full flex items-center justify-between px-6 py-0 rounded-2xl overflow-hidden relative cursor-pointer border-none outline-none"
//       >
//         {/* Title */}
//         <span
//           className="font-bold text-white text-left py-6"
//           style={{ fontSize: "1.15rem", letterSpacing: "0.01em" }}
//         >
//           {mod.title}
//         </span>

//         {/* Icon */}
//         <span className="flex-shrink-0 flex items-end" style={{ height: 88 }}>
//           {mod.icon ? (
//             <img
//               src={mod.icon}
//               alt={mod.title}
//               className="object-contain drop-shadow-xl"
//               style={{ height: 88, width: 100 }}
//             />
//           ) : null}
//         </span>
//       </button>

//       {/* Lessons */}
//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.div
//             key="lessons"
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
//             style={{ overflow: "hidden" }}
//           >
//             <div className="bg-white">
//               {mod.lectures.map((lec) => (
//                 <LessonRow key={lec.num} lec={lec} color={color.dot} />
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }


"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Decorative SVG shape sets ──────────────────────────────────────────────
function ShapeCircles({ accent }) {
  return (
    <svg width="110" height="88" viewBox="0 0 110 88" fill="none" className="absolute right-0 top-0 h-full">
      <circle cx="85" cy="20" r="18" fill={accent} opacity="0.25"/>
      <circle cx="60" cy="55" r="28" fill="#fff" opacity="0.12"/>
      <circle cx="100" cy="65" r="12" fill={accent} opacity="0.35"/>
      <circle cx="40" cy="15" r="8" fill="#fff" opacity="0.15"/>
    </svg>
  );
}
function ShapeStars({ accent }) {
  return (
    <svg width="110" height="88" viewBox="0 0 110 88" fill="none" className="absolute right-0 top-0 h-full">
      <polygon points="85,5 90,22 108,22 94,33 99,50 85,40 71,50 76,33 62,22 80,22" fill="#fff" opacity="0.18"/>
      <polygon points="50,40 53,50 63,50 55,56 58,66 50,60 42,66 45,56 37,50 47,50" fill={accent} opacity="0.3"/>
      <circle cx="100" cy="70" r="8" fill="#fff" opacity="0.12"/>
    </svg>
  );
}
function ShapeTriangles({ accent }) {
  return (
    <svg width="110" height="88" viewBox="0 0 110 88" fill="none" className="absolute right-0 top-0 h-full">
      <polygon points="90,5 110,40 70,40" fill="#fff" opacity="0.15"/>
      <polygon points="55,30 75,65 35,65" fill={accent} opacity="0.25"/>
      <polygon points="100,55 110,75 90,75" fill="#fff" opacity="0.2"/>
    </svg>
  );
}
function ShapeDots({ accent }) {
  return (
    <svg width="110" height="88" viewBox="0 0 110 88" fill="none" className="absolute right-0 top-0 h-full">
      {[...Array(12)].map((_, k) => (
        <circle key={k} cx={55 + (k % 4) * 18} cy={12 + Math.floor(k / 4) * 28}
          r={k % 3 === 0 ? 5 : 3} fill={k % 2 === 0 ? "#fff" : accent} opacity={k % 2 === 0 ? 0.2 : 0.3}/>
      ))}
    </svg>
  );
}
function ShapeWaves({ accent }) {
  return (
    <svg width="120" height="88" viewBox="0 0 120 88" fill="none" className="absolute right-0 top-0 h-full">
      <path d="M30,20 Q50,5 70,20 Q90,35 110,20" stroke="#fff" strokeWidth="3" fill="none" opacity="0.3"/>
      <path d="M20,45 Q45,30 65,45 Q85,60 110,45" stroke={accent} strokeWidth="3" fill="none" opacity="0.35"/>
      <path d="M30,68 Q55,55 75,68 Q95,81 115,68" stroke="#fff" strokeWidth="2" fill="none" opacity="0.2"/>
    </svg>
  );
}

const SHAPE_MAP = {
  circles: ShapeCircles,
  stars: ShapeStars,
  triangles: ShapeTriangles,
  dots: ShapeDots,
  waves: ShapeWaves,
};

// ── Lesson Row ─────────────────────────────────────────────────────────────
function LessonRow({ lec, color }) {
  return (
    <div className="flex gap-4 items-start px-5 py-4 border-b border-gray-100 last:border-0 hover:bg-blue-50/40 transition-colors duration-150">
      <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full mt-2"
        style={{ background: color, boxShadow: `0 0 0 3px ${color}33` }}/>

      {lec.thumb ? (
        <img src={lec.thumb} alt={lec.title}
          className="flex-shrink-0 rounded-xl object-cover"
          style={{ width: 72, height: 60 }}/>
      ) : (
        <span className="flex-shrink-0 rounded-xl flex items-center justify-center text-white text-xs font-black"
          style={{ width: 72, height: 60, background: color, opacity: 0.75 }}>
          {lec.num}
        </span>
      )}

      <div className="min-w-0">
        <p className="font-bold text-gray-800 text-sm">{lec.title}</p>
        <p className="text-gray-500 mt-0.5 leading-relaxed text-xs">{lec.desc}</p>
      </div>
    </div>
  );
}

// ── ModuleCard ─────────────────────────────────────────────────────────────
export function ModuleCard({ mod, index, isOpen, onToggle, theme, Icon }) {
  const ShapeComp = SHAPE_MAP[theme.shape] || ShapeCircles;

  return (
    <div className="rounded-2xl overflow-hidden"
      style={{
        boxShadow: isOpen
          ? `0 8px 32px ${theme.banner}33`
          : "0 2px 8px #0001",
        transition: "box-shadow 0.3s ease",
      }}>

      {/* ── Banner ── */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full relative overflow-hidden border-none outline-none cursor-pointer flex items-center justify-between px-6"
        style={{ background: theme.banner, minHeight: 88 }}
      >
        {/* Subtle inner radial glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 20% 50%, ${theme.accent}22 0%, transparent 70%)`,
          }}/>

        {/* Left: lucide icon + title */}
        <div className="flex items-center gap-3 py-5 relative z-10">
          <span className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(4px)" }}>
            {Icon && <Icon className="w-5 h-5 text-white" strokeWidth={2.5}/>}
          </span>
          <span className="font-black text-white text-left leading-snug"
            style={{ fontSize: "1.05rem", letterSpacing: "0.01em", textShadow: "0 1px 4px rgba(0,0,0,0.18)" }}>
            {mod.title}
          </span>
        </div>

        {/* Right: decorative SVG shapes + optional 3D icon */}
        <div className="relative flex-shrink-0" style={{ width: 110, height: 88 }}>
          <ShapeComp accent={theme.accent}/>
          {mod.icon && (
            <img src={mod.icon} alt={mod.title}
              className="absolute bottom-0 right-2 object-contain drop-shadow-xl"
              style={{ height: 80, width: 90 }}/>
          )}
        </div>
      </button>

      {/* ── Lessons ── */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="lessons"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="bg-white">
              {mod.lectures.map((lec) => (
                <LessonRow key={lec.num} lec={lec} color={theme.banner}/>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}