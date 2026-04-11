// "use client";
// import heroImg from "./hero.jpg";
// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ArrowRight, Sparkles, Users, PlayCircle, Star, Rocket, Brain, Code2 } from "lucide-react";
// import Image from "next/image";

// /* ─────────────────────────────────────────
//    CONSTANTS
// ───────────────────────────────────────── */
// const BRAND = {
//   blue:       "#1642d6",
//   lightBlue:  "#1d8fff",
//   orange:     "#ff6900",
// };

// const AVATARS = [
//   "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&h=80&fit=crop&crop=face",
//   "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face",
//   "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
//   "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=80&h=80&fit=crop&crop=face",
// ];

// // Kids coding — Unsplash free-to-use photo
// const HERO_IMG = heroImg;

// // Public royalty-free loop from Pixabay / Coverr proxy
// // Fallback: soft animated gradient shown if video doesn't load
// const VIDEO_SRC = "/hero.mp4";

// const FEATURES = [
//   { icon: Code2,  label: "Live Coding Classes",  color: BRAND.blue   },
//   { icon: Brain,  label: "AI & Robotics",         color: BRAND.orange },
//   { icon: Rocket, label: "Build Real Projects",   color: BRAND.lightBlue },
// ];

// const STATS = [
//   { value: "2,000+", label: "Happy Parents"  },
//   { value: "1,000+", label: "Kids Learning"  },
//   { value: "4.9 ★",  label: "Avg Rating"    },
// ];

// /* ─────────────────────────────────────────
//    ANIMATION VARIANTS
// ───────────────────────────────────────── */
// const stagger = {
//   animate: { transition: { staggerChildren: 0.1 } },
// };

// const fadeSlide = {
//   initial: { opacity: 0, y: 28 },
//   animate: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
// };

// const fadeIn = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1, transition: { duration: 0.7 } },
// };

// /* ─────────────────────────────────────────
//    COMPONENT
// ───────────────────────────────────────── */
// export default function Hero() {
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
//   const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]); // subtle parallax

//   return (
//     <section
//       ref={sectionRef}
//       aria-label="Hero"
//       className="relative w-full overflow-hidden flex items-center min-h-screen"
//       style={{ maxHeight: 960 }}
//     >

//       {/* ═══════════════════════════════════
//           BACKGROUND — video + overlays
//       ═══════════════════════════════════ */}
//       <motion.div
//         className="absolute inset-0 z-0"
//         style={{ y: videoY }}
//         aria-hidden="true"
//       >
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           preload="auto"
//           poster="="
//           className="h-full w-full object-cover scale-105"
//         >
//           <source src={VIDEO_SRC} type="video/mp4" />
//         </video>
//       </motion.div>

//       {/* Layer 1 — primary light wash (keeps it warm & parent-friendly) */}
//       <div
//         className="absolute inset-0 z-[1] bg-linear-120 from-[#f5f8ff]/90 via-[#fff9f4]/70 to-[#e6f3ff]/80"
//         // style={{
//         //   background: "linear-gradient(120deg, rgba(245,248,255,0.93) 0%, rgba(255,249,244,0.90) 55%, rgba(230,243,255,0.82) 100%)",
//         // }}
//         aria-hidden="true"
//       />



//       {/* ═══════════════════════════════════
//           CONTENT
//       ═══════════════════════════════════ */}
//       {/* <div className="
//         relative z-10
//         mx-auto w-full 
//         px-5 sm:px-8 lg:px-12
//         py-16 lg:py-0
//         grid lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_520px]
//         gap-10 xl:gap-14
//         items-center
//       "> */}
//       <div className="relative z-10 mx-auto w-full px-5 sm:px-8 lg:px-12 py-16 lg:py-0 grid lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_520px] gap-10 xl:gap-14 items-center">

//         {/* ──── LEFT — copy & CTAs ──── */}
//         <motion.div
//           variants={stagger}
//           initial="initial"
//           animate="animate"
//           className="flex flex-col gap-5 lg:gap-6"
//         >

//           {/* Eyebrow badge */}
//           <motion.div variants={fadeSlide}>
//             <span
//               className="
//                 inline-flex items-center gap-2
//                 rounded-full px-4 py-1.5
//                 text-[11px] font-bold uppercase tracking-[0.01em]
//                 border
//               "
//               style={{
//                 color: BRAND.blue,
//                 borderColor: `${BRAND.blue}30`,
//                 background: `${BRAND.blue}0f`,
//               }}
//             >
//               <Sparkles size={11} style={{ color: BRAND.orange }} />
//               Live Coding &amp; AI Classes for Kids
//             </span>
//           </motion.div>

//           {/* Headline */}
//           <motion.h1
//             variants={fadeSlide}
//             className="heading-oswald font-black leading-[1.01] tracking-tighter text-gray-800 max-w-4xl"
//             style={{ fontSize: "clamp(2.1rem, 4.5vw, 3.6rem)" }}
//           >
//             Prepare Young Minds for the Future with{" "}
//             <span
//               style={{
//                 background: `linear-gradient(105deg, ${BRAND.lightBlue}, ${BRAND.blue})`,
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               Coding
//             </span>
//             {" "}&amp;{" "}
//             <span
//               style={{
//                 background: `linear-gradient(180deg, #ffb347, ${BRAND.orange})`,
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               AI Education
//             </span>
//           </motion.h1>

//           {/* Sub-copy */}
//           <motion.p
//             variants={fadeSlide}
//             className="text-[13px] leading-tight text-gray-500 max-w-[480px]"
//           >
//             Expert-led, live online classes where kids aged 6–17 build real games,
//             apps &amp; creative digital projects — turning screen time into
//             future-ready skills.
//           </motion.p>

//           {/* Feature pills */}
//           <motion.div variants={fadeSlide} className="flex flex-wrap gap-2.5">
//             {FEATURES.map(({ icon: Icon, label, color }) => (
//               <span
//                 key={label}
//                 className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold border"
//                 style={{
//                   color,
//                   borderColor: `${color}30`,
//                   background: `${color}0d`,
//                 }}
//               >
//                 <Icon size={12} />
//                 {label}
//               </span>
//             ))}
//           </motion.div>

//           {/* CTAs */}
//           <motion.div variants={fadeSlide} className="flex flex-col sm:flex-row gap-3 pt-1">
//             <button
//               className="
//                 group inline-flex items-center justify-center gap-2
//                 rounded-xl px-7 py-3.5
//                 text-sm font-bold text-white
//                 transition-all duration-200
//                 hover:scale-[1.03] active:scale-[0.98]
//                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
//               "
//               style={{
//                 background: `linear-gradient(135deg, ${BRAND.lightBlue}, ${BRAND.blue})`,
//                 boxShadow: `0 8px 28px ${BRAND.blue}35`,
//                 "--tw-ring-color": BRAND.blue,
//               }}
//             >
//               Book a Free Demo Class
//               <ArrowRight
//                 size={15}
//                 className="transition-transform duration-200 group-hover:translate-x-1"
//               />
//             </button>

//             <button
//               className="
//                 group inline-flex items-center justify-center gap-2
//                 rounded-xl border px-7 py-3.5
//                 text-sm font-bold
//                 transition-all duration-200
//                 hover:scale-[1.03] active:scale-[0.98]
//                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
//               "
//               style={{
//                 color: BRAND.orange,
//                 borderColor: `${BRAND.orange}50`,
//                 background: `${BRAND.orange}0d`,
//                 "--tw-ring-color": BRAND.orange,
//               }}
//             >
//               <PlayCircle size={15} />
//               Join WhatsApp Community
//             </button>
//           </motion.div>

//           {/* Social proof row */}
//           <motion.div
//             variants={fadeSlide}
//             className="flex flex-wrap items-center gap-5 pt-1"
//           >
//             {/* Avatar stack */}
//             <div className="flex -space-x-2.5">
//               {AVATARS.map((src, i) => (
//                 <img
//                   key={i}
//                   src={src}
//                   alt=""
//                   width={34}
//                   height={34}
//                   loading="eager"
//                   className="w-[34px] h-[34px] rounded-full border-[2.5px] border-white object-cover shadow"
//                 />
//               ))}
//             </div>

//             {/* Stars + text */}
//             <div>
//               <div className="flex items-center gap-0.5">
//                 {Array.from({ length: 5 }).map((_, i) => (
//                   <Star key={i} size={13} fill={BRAND.orange} color={BRAND.orange} />
//                 ))}
//               </div>
//               <p className="text-[11px] text-gray-400 mt-0.5">
//                 Trusted by{" "}
//                 <span className="font-bold text-gray-600">2,000+ parents</span>
//               </p>
//             </div>

//             {/* Divider */}
//             <div className="hidden sm:block w-px h-9 bg-gray-200" />

//             {/* Stat counters */}
//             {STATS.map((s) => (
//               <div key={s.label} className="hidden sm:block">
//                 <p
//                   className="text-sm font-extrabold leading-none"
//                   style={{ color: BRAND.blue }}
//                 >
//                   {s.value}
//                 </p>
//                 <p className="text-[10px] text-gray-400 mt-0.5">{s.label}</p>
//               </div>
//             ))}
//           </motion.div>

//           {/* Knowledge partner note */}
//           <motion.p
//             variants={fadeIn}
//             className="text-[11px] text-gray-400 flex items-center gap-1.5"
//           >
//             <span
//               className="inline-block w-1.5 h-1.5 rounded-full"
//               style={{ background: BRAND.orange }}
//             />
//             ⚡ Join a growing community of future innovators!
//           </motion.p>
//         </motion.div>


//         {/* ──── RIGHT — image card ──── */}
//         <motion.div
//           initial={{ opacity: 0, x: 50, scale: 0.96 }}
//           animate={{ opacity: 1, x: 0, scale: 1 }}
//           transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
//           className="relative hidden lg:flex justify-center items-center"
//         >
//           {/* Glow ring */}
//           <div
//             className="absolute rounded-[28px] blur-2xl opacity-25 pointer-events-none"
//             style={{
//               inset: "-12px",
//               background: `linear-gradient(135deg, ${BRAND.blue}, ${BRAND.orange})`,
//             }}
//             aria-hidden="true"
//           />

//           {/* Card frame */}
//           <div
//             className="relative w-full rounded-[24px] overflow-hidden shadow-2xl"
//             style={{
//               aspectRatio: "9/11",
//               maxHeight: 560,
//               border: "1.5px solid rgba(22,66,214,0.12)",
//               boxShadow: "0 32px 80px rgba(22,66,214,0.15), 0 8px 24px rgba(0,0,0,0.08)",
//             }}
//           >
//             {/* Main image */}
//             <Image
//               src={HERO_IMG}
//               alt="Kid learning coding with a mentor"
//               fill
//               priority
//               sizes="(max-width: 1024px) 0px, 520px"
//               className="object-cover"
//             />

//             {/* Bottom scrim */}
//             <div
//               className="absolute inset-0"
//               style={{
//                 background: "linear-gradient(to top, rgba(22,66,214,0.35) 0%, transparent 50%)",
//               }}
//               aria-hidden="true"
//             />

//             {/* Floating bottom card */}
//             <motion.div
//               animate={{ y: [0, -9, 0] }}
//               transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl px-4 py-3"
//               style={{
//                 background: "rgba(255,255,255,0.85)",
//                 backdropFilter: "blur(16px)",
//                 WebkitBackdropFilter: "blur(16px)",
//                 border: "1px solid rgba(255,255,255,0.6)",
//                 boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
//               }}
//             >
//               <div className="flex -space-x-2">
//                 {AVATARS.slice(0, 3).map((src, i) => (
//                   <img
//                     key={i}
//                     src={src}
//                     alt=""
//                     className="w-7 h-7 rounded-full border-2 border-white object-cover"
//                   />
//                 ))}
//               </div>
//               <div className="flex-1 min-w-0">
//                 <p className="text-[12px] font-bold text-gray-900 leading-none truncate">
//                   1,000+ Kids Learning Right Now
//                 </p>
//                 <p className="text-[10px] text-gray-400 mt-0.5">Join the community today</p>
//               </div>
//               <span
//                 className="flex-shrink-0 w-2 h-2 rounded-full animate-pulse"
//                 style={{ background: "#22c55e" }}
//               />
//             </motion.div>
//           </div>

//           {/* Floating pill — top right */}
//           <motion.div
//             animate={{ y: [0, 8, 0] }}
//             transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
//             className="absolute -top-4 -right-6 flex items-center gap-2 rounded-full px-4 py-2"
//             style={{
//               background: `linear-gradient(135deg, ${BRAND.lightBlue}, ${BRAND.blue})`,
//               boxShadow: `0 6px 20px ${BRAND.blue}45`,
//             }}
//           >
//             <Sparkles size={12} color="white" />
//             <span className="text-[11px] font-extrabold text-white whitespace-nowrap">
//               AI-Powered Curriculum
//             </span>
//           </motion.div>

//           {/* Floating pill — bottom left */}
//           <motion.div
//             animate={{ y: [0, -7, 0] }}
//             transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
//             className="absolute -bottom-4 -left-6 flex items-center gap-2 rounded-full px-4 py-2"
//             style={{
//               background: `linear-gradient(135deg, #ffb347, ${BRAND.orange})`,
//               boxShadow: `0 6px 20px ${BRAND.orange}45`,
//             }}
//           >
//             <Users size={12} color="white" />
//             <span className="text-[11px] font-extrabold text-white whitespace-nowrap">
//               Expert Mentors
//             </span>
//           </motion.div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

"use client";
import heroImg from "./hero.jpg";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import {
  ArrowRight, Sparkles, Users, PlayCircle, Star,
  Rocket, Brain, Code2, Zap, Trophy, Heart, BookOpen,
  MousePointer2, Lightbulb, Gamepad2, Cpu
} from "lucide-react";
import Image from "next/image";

/* ─────────────────────────────────────────
   GOOGLE FONTS IMPORT
───────────────────────────────────────── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;500;600;700;800;900&display=swap');
  `}</style>
);

/* ─────────────────────────────────────────
   BRAND TOKENS
───────────────────────────────────────── */
const BRAND = {
  violet:   "#7c3aed",
  purple:   "#a855f7",
  sky:      "#0ea5e9",
  cyan:     "#22d3ee",
  rose:     "#f43f5e",
  orange:   "#f97316",
  amber:    "#fbbf24",
  mint:     "#10b981",
  lavender: "#ede9fe",
  peach:    "#fff1ee",
  skyLight: "#e0f2fe",
};

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const AVATARS = [
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=80&h=80&fit=crop&crop=face",
];

const FEATURES = [
  { icon: Code2,    label: "Live Coding",       sub: "Real-time classes",    color: BRAND.sky,    bg: "#e0f2fe" },
  { icon: Brain,    label: "AI & Robotics",     sub: "Future-ready skills",  color: BRAND.violet, bg: "#ede9fe" },
  { icon: Gamepad2, label: "Build Projects",    sub: "Games & apps",         color: BRAND.rose,   bg: "#ffe4e6" },
];

const STATS = [
  { value: 2000, suffix: "+", label: "Happy Parents", icon: Heart,   color: BRAND.rose   },
  { value: 1000, suffix: "+", label: "Kids Learning",  icon: BookOpen, color: BRAND.violet },
  { value: 4.9,  suffix: " ★", label: "Avg Rating",   icon: Star,    color: BRAND.amber  },
];

/* Floating code chips */
const DECO_CHIPS = [
  { text: "<html>",         top: "8%",  left: "2%",   delay: 0,   dur: 7,  color: BRAND.sky    },
  { text: "print('Hello')", top: "76%", left: "1%",   delay: 1.2, dur: 9,  color: BRAND.violet },
  { text: "if (future) {",  top: "18%", right: "2%",  delay: 0.6, dur: 8,  color: BRAND.mint   },
  { text: "ai.learn()",     top: "68%", right: "3%",  delay: 2,   dur: 11, color: BRAND.rose   },
  { text: "for i in range", top: "44%", left: "0%",   delay: 1.8, dur: 10, color: BRAND.orange },
];

/* Floating decorative stars/sparkle positions */
const SPARKLE_POSITIONS = [
  { top: "15%", left: "22%",  size: 16, delay: 0,   dur: 3.5, color: BRAND.amber  },
  { top: "28%", right: "18%", size: 12, delay: 0.8, dur: 4,   color: BRAND.rose   },
  { top: "60%", left: "15%",  size: 10, delay: 1.2, dur: 3,   color: BRAND.cyan   },
  { top: "72%", right: "22%", size: 14, delay: 0.4, dur: 4.5, color: BRAND.violet },
  { top: "42%", left: "48%",  size: 8,  delay: 2,   dur: 3.8, color: BRAND.mint   },
  { top: "85%", left: "38%",  size: 11, delay: 1.6, dur: 5,   color: BRAND.orange },
];

/* ─────────────────────────────────────────
   WAVY SVG DIVIDER
───────────────────────────────────────── */
function WavyDivider({ color = "#fff", flip = false }) {
  return (
    <div
      className="absolute w-full pointer-events-none"
      style={{
        bottom: flip ? "auto" : -2,
        top: flip ? -2 : "auto",
        transform: flip ? "rotate(180deg)" : "none",
        lineHeight: 0,
        zIndex: 5,
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path
          d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────
   SPINNING STAR
───────────────────────────────────────── */
function SpinningStar({ size = 16, color, delay = 0, top, left, right, bottom }) {
  return (
    <motion.div
      className="absolute pointer-events-none z-[3]"
      style={{ top, left, right, bottom }}
      animate={{ rotate: 360, scale: [1, 1.2, 1] }}
      transition={{ rotate: { duration: 8, repeat: Infinity, ease: "linear", delay }, scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay } }}
    >
      <Star size={size} fill={color} color={color} />
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   FLOAT BOB WRAPPER
───────────────────────────────────────── */
function FloatBob({ children, delay = 0, amplitude = 10, duration = 3.5, style, className }) {
  return (
    <motion.div
      className={className}
      style={style}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   COUNTUP
───────────────────────────────────────── */
function CountUp({ target, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = target;
    const duration = 1600;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * eased;
      setDisplay(decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toLocaleString());
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, target, decimals]);

  return <span ref={ref}>{display}{suffix}</span>;
}

/* ─────────────────────────────────────────
   DOTTED BACKGROUND
───────────────────────────────────────── */
function DottedBg({ color = "#7c3aed", opacity = 0.06, size = 28 }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
      style={{
        backgroundImage: `radial-gradient(circle, ${color} 1.5px, transparent 1.5px)`,
        backgroundSize: `${size}px ${size}px`,
        opacity,
      }}
    />
  );
}

/* ─────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────── */
const stagger = { animate: { transition: { staggerChildren: 0.1 } } };
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
};
const springPop = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 380, damping: 22 } },
};

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <>
      <FontLoader />
      <section
        ref={sectionRef}
        aria-label="Hero"
        className="relative w-full overflow-hidden flex items-center min-h-screen"
        style={{
          maxHeight: 980,
          background: "linear-gradient(135deg, #f5f0ff 0%, #fff0fb 30%, #fff8ee 60%, #edfff8 100%)",
          fontFamily: "'Nunito', sans-serif",
        }}
      >

        {/* ══ BACKGROUND LAYERS ══ */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <DottedBg color="#7c3aed" opacity={0.045} size={30} />

          {/* Pastel gradient blobs */}
          <div className="absolute inset-0" style={{
            background: `
              radial-gradient(ellipse 70% 55% at 75% -10%, #c4b5fd40 0%, transparent 65%),
              radial-gradient(ellipse 55% 50% at -5% 85%,  #fda4af30 0%, transparent 60%),
              radial-gradient(ellipse 45% 50% at 50% 110%, #6ee7b730 0%, transparent 60%),
              radial-gradient(ellipse 40% 35% at 20% 20%,  #bae6fd25 0%, transparent 55%)
            `,
          }} />

          {/* Soft radial glow top right */}
          <div className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, #c4b5fd33 0%, transparent 70%)", filter: "blur(40px)" }}
          />
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, #fda4af28 0%, transparent 70%)", filter: "blur(50px)" }}
          />
        </div>

        {/* ══ SPINNING STARS (desktop) ══ */}
        <div className="hidden lg:block" aria-hidden="true">
          {SPARKLE_POSITIONS.map((s, i) => (
            <SpinningStar key={i} size={s.size} color={s.color} delay={s.delay} top={s.top} left={s.left} right={s.right} />
          ))}
        </div>

        {/* ══ FLOATING CODE CHIPS (desktop) ══ */}
        <div className="hidden lg:block" aria-hidden="true">
          {DECO_CHIPS.map((chip, i) => (
            <FloatBob
              key={i}
              delay={chip.delay}
              amplitude={8}
              duration={chip.dur}
              className="absolute pointer-events-none z-[2]"
              style={{ top: chip.top, left: chip.left, right: chip.right }}
            >
              <span
                className="inline-flex items-center rounded-xl px-3 py-1.5 font-mono text-[11px] font-semibold"
                style={{
                  color: chip.color,
                  background: `${chip.color}15`,
                  border: `1.5px dashed ${chip.color}40`,
                  backdropFilter: "blur(6px)",
                }}
              >
                {chip.text}
              </span>
            </FloatBob>
          ))}
        </div>

        {/* ══ MAIN CONTENT ══ */}
        <motion.div
          style={{ y: contentY }}
          className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:py-0 grid lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_540px] gap-10 xl:gap-16 items-center"
        >

          {/* ──── LEFT COPY ──── */}
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="flex flex-col gap-5 lg:gap-6"
          >

            {/* Eyebrow badge */}
            <motion.div variants={springPop}>
              <span
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-bold uppercase tracking-widest border-2"
                style={{
                  color: BRAND.violet,
                  borderColor: `${BRAND.violet}40`,
                  background: `linear-gradient(135deg, ${BRAND.lavender}, #fce7f3)`,
                  fontFamily: "'Nunito', sans-serif",
                  letterSpacing: "0.1em",
                }}
              >
                <FloatBob amplitude={5} duration={2.5} style={{ display: "flex" }}>
                  <Rocket size={14} style={{ color: BRAND.orange }} />
                </FloatBob>
                Live Coding &amp; AI Classes for Kids
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="leading-[1.06] tracking-tight text-gray-900 max-w-xl"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                fontFamily: "'Fredoka One', cursive",
                fontWeight: 400,
              }}
            >
              Prepare Young Minds{" "}
              <br className="hidden sm:block" />
              for the Future with{" "}
              <span
                style={{
                  background: `linear-gradient(120deg, ${BRAND.sky}, ${BRAND.violet})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Coding
              </span>
              {" "}&amp;{" "}
              <span
                style={{
                  background: `linear-gradient(120deg, ${BRAND.orange}, ${BRAND.rose})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                AI Education
              </span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              variants={fadeUp}
              className="text-[16px] leading-relaxed max-w-[460px]"
              style={{ color: "#6b7280", fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
            >
              Expert-led, live online classes where kids aged{" "}
              <span style={{ color: BRAND.violet, fontWeight: 800 }}>12–18</span>{" "}
              build real games, apps &amp; creative digital projects — turning screen time into future-ready skills.
            </motion.p>

            {/* Feature cards */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {FEATURES.map(({ icon: Icon, label, sub, color, bg }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -5, scale: 1.04, transition: { type: "spring", stiffness: 400, damping: 18 } }}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 border-2 cursor-default"
                  style={{
                    borderColor: `${color}30`,
                    background: bg,
                    boxShadow: `0 4px 14px ${color}18`,
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}20` }}
                  >
                    <Icon size={18} strokeWidth={2.2} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-[13px] leading-none mb-0.5" style={{ color, fontFamily: "'Fredoka One', cursive" }}>{label}</p>
                    <p className="text-[11px] text-gray-400" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>{sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 pt-1">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: `0 14px 36px ${BRAND.violet}50` }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="group inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-sm font-normal text-white"
                style={{
                  background: `linear-gradient(135deg, ${BRAND.purple}, ${BRAND.violet})`,
                  boxShadow: `0 8px 28px ${BRAND.violet}38`,
                  fontFamily: "'Fredoka One', cursive",
                  fontSize: "1rem",
                  letterSpacing: "0.02em",
                }}
              >
                <FloatBob amplitude={4} duration={2} style={{ display: "flex" }}>
                  <Sparkles size={16} />
                </FloatBob>
                Book a Free Demo Class
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04, boxShadow: `0 10px 28px ${BRAND.orange}35` }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="group inline-flex items-center justify-center gap-2 rounded-2xl border-2 px-7 py-4 text-sm font-normal"
                style={{
                  color: BRAND.orange,
                  borderColor: `${BRAND.orange}50`,
                  background: "#fff8f0",
                  fontFamily: "'Fredoka One', cursive",
                  fontSize: "1rem",
                }}
              >
                <PlayCircle size={16} strokeWidth={2} />
                Join WhatsApp Community
              </motion.button>
            </motion.div>

            {/* Social proof + stats */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-5 pt-1">
              {/* Avatars */}
              <div className="flex -space-x-2.5">
                {AVATARS.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    width={36}
                    height={36}
                    loading="eager"
                    className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-md"
                  />
                ))}
              </div>

              {/* Stars + trust */}
              <div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Star key={i} size={13} fill={BRAND.amber} color={BRAND.amber} />
                    </motion.div>
                  ))}
                </div>
                <p className="text-[11px] text-gray-400 mt-0.5" style={{ fontWeight: 700 }}>
                  Trusted by <span className="font-bold text-gray-700">2,000+ parents</span>
                </p>
              </div>

              <div className="hidden sm:block w-px h-10 bg-gray-200" />

              {/* CountUp Stats */}
              {STATS.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="hidden sm:flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center"
                      style={{ background: `${s.color}18` }}
                    >
                      <Icon size={14} style={{ color: s.color }} fill={s.color} />
                    </div>
                    <div>
                      <p className="text-[15px] font-extrabold leading-none" style={{ color: s.color, fontFamily: "'Fredoka One', cursive" }}>
                        <CountUp target={s.value} suffix={s.suffix} decimals={s.value % 1 !== 0 ? 1 : 0} />
                      </p>
                      <p className="text-[10px] text-gray-400 mt-0.5" style={{ fontWeight: 700 }}>{s.label}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Live indicator */}
            <motion.p variants={fadeIn} className="text-[12px] text-gray-400 flex items-center gap-2" style={{ fontWeight: 700 }}>
              <motion.span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: BRAND.mint }}
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
              Join a growing community of future innovators!
            </motion.p>
          </motion.div>

          {/* ──── RIGHT IMAGE CARD ──── */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative hidden lg:flex justify-center items-center"
          >
            {/* Soft glow ring */}
            <div
              className="absolute rounded-[32px] pointer-events-none"
              style={{
                inset: "-20px",
                background: `radial-gradient(ellipse at 40% 50%, ${BRAND.violet}25, ${BRAND.rose}18, transparent 70%)`,
                filter: "blur(30px)",
              }}
              aria-hidden="true"
            />

            {/* Wavy decorative border using SVG outline */}
            <div
              className="absolute pointer-events-none z-[2]"
              style={{ inset: "-4px", borderRadius: "28px", border: `2.5px dashed ${BRAND.violet}30` }}
              aria-hidden="true"
            />

            {/* Card frame */}
            <div
              className="relative w-full rounded-[24px] overflow-hidden"
              style={{
                aspectRatio: "9/11",
                maxHeight: 580,
                border: `2px solid ${BRAND.violet}20`,
                boxShadow: `0 28px 80px ${BRAND.violet}20, 0 8px 24px rgba(0,0,0,0.06)`,
              }}
            >
              <Image
                src={heroImg}
                alt="Kid learning coding with a mentor"
                fill
                priority
                sizes="(max-width: 1024px) 0px, 540px"
                className="object-cover"
              />

              {/* Pastel gradient scrim */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, #1e1b4b88 0%, transparent 45%)`,
                }}
                aria-hidden="true"
              />

              {/* Floating social card at bottom */}
              <FloatBob
                amplitude={7}
                duration={4}
                className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl px-4 py-3 z-10"
                style={{
                  background: "rgba(255,255,255,0.90)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1.5px solid rgba(255,255,255,0.7)",
                  boxShadow: "0 8px 28px rgba(0,0,0,0.10)",
                }}
              >
                <div className="flex -space-x-2">
                  {AVATARS.slice(0, 3).map((src, i) => (
                    <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  ))}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-normal text-gray-900 leading-none truncate" style={{ fontFamily: "'Fredoka One', cursive" }}>
                    1,000+ Kids Learning Right Now
                  </p>
                  <p className="text-[10px] text-gray-400 mt-0.5" style={{ fontWeight: 700 }}>Join the community today</p>
                </div>
                <motion.span
                  className="flex-shrink-0 w-2.5 h-2.5 rounded-full"
                  style={{ background: BRAND.mint }}
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                />
              </FloatBob>
            </div>

            {/* Floating pill — top right */}
            <FloatBob
              amplitude={9}
              duration={4.4}
              delay={0.4}
              className="absolute -top-5 -right-7 flex items-center gap-2 rounded-full px-4 py-2.5 z-10"
              style={{
                background: `linear-gradient(135deg, ${BRAND.sky}, ${BRAND.violet})`,
                boxShadow: `0 8px 24px ${BRAND.violet}45`,
              }}
            >
              <Cpu size={13} color="white" />
              <span className="text-[12px] font-light text-white whitespace-nowrap" style={{ fontFamily: "'Fredoka One', cursive" }}>
                AI-Powered Curriculum
              </span>
            </FloatBob>

            {/* Floating pill — bottom left */}
            <FloatBob
              amplitude={8}
              duration={3.6}
              delay={1}
              className="absolute -bottom-5 -left-7 flex items-center gap-2 rounded-full px-4 py-2.5 z-10"
              style={{
                background: `linear-gradient(135deg, ${BRAND.amber}, ${BRAND.orange})`,
                boxShadow: `0 8px 24px ${BRAND.orange}45`,
              }}
            >
              <Users size={13} color="white" />
              <span className="text-[12px] font-light text-white whitespace-nowrap" style={{ fontFamily: "'Fredoka One', cursive" }}>
                Expert Mentors
              </span>
            </FloatBob>

            {/* Mid-left chip */}
            <FloatBob
              amplitude={11}
              duration={5.2}
              delay={2}
              className="absolute top-1/3 -left-9 flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 z-10"
              style={{
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(12px)",
                border: `1.5px solid ${BRAND.violet}20`,
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              }}
            >
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: `${BRAND.violet}18` }}
              >
                <Code2 size={15} style={{ color: BRAND.violet }} strokeWidth={2.2} />
              </div>
              <div>
                <p className="text-[12px] font-light text-gray-800 leading-none" style={{ fontFamily: "'Fredoka One', cursive" }}>500+ Projects</p>
                <p className="text-[10px] text-gray-400 mt-0.5" style={{ fontWeight: 700 }}>Built by students</p>
              </div>
            </FloatBob>

            {/* Trophy chip — top left */}
            <FloatBob
              amplitude={7}
              duration={6}
              delay={0.8}
              className="absolute top-[12%] -left-7 flex items-center gap-2 rounded-2xl px-3 py-2 z-10"
              style={{
                background: `linear-gradient(135deg, #fff9c4, #fff3e0)`,
                border: `1.5px solid ${BRAND.amber}40`,
                boxShadow: `0 4px 16px ${BRAND.amber}30`,
              }}
            >
              <Trophy size={14} style={{ color: BRAND.orange }} />
              <span className="text-[11px] font-light" style={{ color: BRAND.orange, fontFamily: "'Fredoka One', cursive" }}>
                Top Rated
              </span>
            </FloatBob>
          </motion.div>
        </motion.div>

        {/* ══ WAVY BOTTOM DIVIDER ══ */}
        <WavyDivider color="#ffffff" />
      </section>
    </>
  );
}