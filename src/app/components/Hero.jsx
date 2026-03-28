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
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Users, PlayCircle, Star, Rocket, Brain, Code2 } from "lucide-react";
import Image from "next/image";

/* ─────────────────────────────────────────
   BRAND TOKENS
───────────────────────────────────────── */
const BRAND = {
  navy:      "#0f1b4c",
  blue:      "#1642d6",
  lightBlue: "#3b82f6",
  sky:       "#60a5fa",
  orange:    "#f97316",
  amber:     "#fbbf24",
};

const AVATARS = [
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=80&h=80&fit=crop&crop=face",
];

const FEATURES = [
  { icon: Code2,  label: "Live Coding Classes", color: BRAND.blue   },
  { icon: Brain,  label: "AI & Robotics",        color: BRAND.orange },
  { icon: Rocket, label: "Build Real Projects",  color: BRAND.lightBlue },
];

const STATS = [
  { value: "2,000+", label: "Happy Parents" },
  { value: "1,000+", label: "Kids Learning" },
  { value: "4.9 ★",  label: "Avg Rating"   },
];

/* ─────────────────────────────────────────
   FLOATING ORBS — desktop only
   Purely decorative, aria-hidden
───────────────────────────────────────── */
const ORBS = [
  { size: 480, x: "72%",  y: "-18%", color: `${BRAND.blue}22`,   blur: 90,  dur: 14 },
  { size: 360, x: "-10%", y: "55%",  color: `${BRAND.orange}18`, blur: 80,  dur: 18 },
  { size: 280, x: "55%",  y: "68%",  color: `${BRAND.sky}20`,    blur: 70,  dur: 12 },
  { size: 200, x: "30%",  y: "-5%",  color: `${BRAND.amber}15`,  blur: 60,  dur: 20 },
];

/* Decorative floating code snippets / icons — desktop only */
const DECO_CHIPS = [
  { text: "<html>",          top: "12%",  left: "6%",   delay: 0,    dur: 7  },
  { text: "print('Hello')",  top: "78%",  left: "4%",   delay: 1.2,  dur: 9  },
  { text: "if (future) {",   top: "22%",  right: "4%",  delay: 0.6,  dur: 8  },
  { text: "ai.learn()",      top: "65%",  right: "6%",  delay: 2,    dur: 11 },
  { text: "for i in range",  top: "44%",  left: "3%",   delay: 1.8,  dur: 10 },
];

/* Floating geometric shapes */
const SHAPES = [
  { shape: "circle", size: 14, top: "18%", left: "48%", color: BRAND.orange, delay: 0,   dur: 6  },
  { shape: "square", size: 10, top: "72%", left: "38%", color: BRAND.blue,   delay: 1,   dur: 8  },
  { shape: "circle", size: 8,  top: "35%", right: "28%",color: BRAND.amber,  delay: 0.5, dur: 7  },
  { shape: "square", size: 12, top: "85%", right: "32%",color: BRAND.sky,    delay: 1.5, dur: 9  },
  { shape: "circle", size: 6,  top: "55%", left: "52%", color: BRAND.orange, delay: 2,   dur: 5  },
];

/* ─────────────────────────────────────────
   VARIANTS
───────────────────────────────────────── */
const stagger = {
  animate: { transition: { staggerChildren: 0.09 } },
};
const fadeSlide = {
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.7 } },
};

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      className="relative w-full overflow-hidden flex items-center min-h-screen"
      style={{ maxHeight: 960 }}
    >

      {/* ══════════════════════════════════════
          BACKGROUND — layered gradient mesh
      ══════════════════════════════════════ */}
      <div className="absolute inset-0 z-0" aria-hidden="true">

        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 70% -10%, ${BRAND.blue}28 0%, transparent 65%),
              radial-gradient(ellipse 60% 50% at -5% 80%,  ${BRAND.orange}1a 0%, transparent 60%),
              radial-gradient(ellipse 50% 60% at 50% 110%, ${BRAND.sky}18 0%, transparent 60%),
              linear-gradient(160deg, #f0f5ff 0%, #faf8ff 40%, #fff8f3 75%, #f0f8ff 100%)
            `,
          }}
        />

        {/* Subtle dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(${BRAND.navy} 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
          }}
        />

        {/* Animated mesh orbs — desktop only */}
        <div className="hidden lg:block">
          {ORBS.map((orb, i) => (
            <motion.div
              key={i}
              aria-hidden="true"
              className="absolute rounded-full pointer-events-none"
              style={{
                width: orb.size,
                height: orb.size,
                top: orb.y,
                left: orb.x,
                background: orb.color,
                filter: `blur(${orb.blur}px)`,
              }}
              animate={{
                x: [0, 30, -20, 15, 0],
                y: [0, -25, 20, -10, 0],
                scale: [1, 1.06, 0.96, 1.03, 1],
              }}
              transition={{
                duration: orb.dur,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
            />
          ))}
        </div>

        {/* Diagonal light streak */}
        <div
          className="absolute hidden lg:block pointer-events-none"
          style={{
            width: "120%",
            height: "1px",
            top: "38%",
            left: "-10%",
            background: `linear-gradient(90deg, transparent, ${BRAND.blue}18, ${BRAND.sky}22, transparent)`,
            transform: "rotate(-8deg)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute hidden lg:block pointer-events-none"
          style={{
            width: "80%",
            height: "1px",
            top: "62%",
            left: "20%",
            background: `linear-gradient(90deg, transparent, ${BRAND.orange}15, transparent)`,
            transform: "rotate(-6deg)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* ══════════════════════════════════════
          FLOATING DECO CHIPS — desktop only
      ══════════════════════════════════════ */}
      <div className="hidden lg:block" aria-hidden="true">
        {DECO_CHIPS.map((chip, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-none z-[2]"
            style={{
              top: chip.top,
              left: chip.left,
              right: chip.right,
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: chip.dur,
              delay: chip.delay,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
          >
            <span
              className="inline-flex items-center rounded-lg px-2.5 py-1 font-mono text-[11px] font-medium"
              style={{
                color: BRAND.blue,
                background: `${BRAND.blue}0e`,
                border: `1px solid ${BRAND.blue}20`,
                backdropFilter: "blur(4px)",
                opacity: 0.75,
              }}
            >
              {chip.text}
            </span>
          </motion.div>
        ))}

        {/* Floating geometric shapes */}
        {SHAPES.map((s, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-none z-[2]"
            style={{
              top: s.top,
              left: s.left,
              right: s.right,
            }}
            animate={{ y: [0, s.shape === "circle" ? -12 : 10, 0], rotate: s.shape === "square" ? [0, 45, 0] : 0 }}
            transition={{
              duration: s.dur,
              delay: s.delay,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
          >
            <div
              style={{
                width: s.size,
                height: s.size,
                borderRadius: s.shape === "circle" ? "50%" : "3px",
                background: s.color,
                opacity: 0.55,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* ══════════════════════════════════════
          CONTENT
      ══════════════════════════════════════ */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto w-full max-w-7xl max-md:px-6 py-16 lg:py-0 grid lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_520px] gap-10 xl:gap-14 items-center"
      >

        {/* ──── LEFT COPY ──── */}
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="flex flex-col gap-5 lg:gap-6"
        >

          {/* Eyebrow badge */}
          <motion.div variants={fadeSlide}>
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest border"
              style={{
                color: BRAND.blue,
                borderColor: `${BRAND.blue}30`,
                background: `${BRAND.blue}0d`,
              }}
            >
              <Sparkles size={11} style={{ color: BRAND.orange }} />
              Live Coding &amp; AI Classes for Kids
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeSlide}
            className="font-black leading-[1.02] tracking-tight heading-oswald text-gray-900 max-w-xl"
            style={{ fontSize: "clamp(2rem, 4.2vw, 3.4rem)", }}
          >
            Prepare Young Minds for the Future with{" "}
            <span
              style={{
                background: `linear-gradient(110deg, ${BRAND.lightBlue}, ${BRAND.blue})`,
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
                background: `linear-gradient(180deg, ${BRAND.amber}, ${BRAND.orange})`,
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
            variants={fadeSlide}
            className="text-[16px] leading-relaxed text-gray-500 max-w-[460px]"
          >
            Expert-led, live online classes where kids aged 6–17 build real games,
            apps &amp; creative digital projects — turning screen time into future-ready skills.
          </motion.p>

          {/* Feature pills */}
          <motion.div variants={fadeSlide} className="flex flex-wrap gap-2">
            {FEATURES.map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 rounded-md px-5 py-2 text-[12px] font-semibold border"
                style={{ color, borderColor: `${color}30`, background: `${color}0d` }}
              >
                <Icon size={25} strokeWidth={2} />
                <p>{label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeSlide} className="flex flex-col sm:flex-row gap-3 pt-1">
            <button
              className="group inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: `linear-gradient(135deg, ${BRAND.lightBlue}, ${BRAND.blue})`,
                boxShadow: `0 8px 28px ${BRAND.blue}35`,
              }}
            >
              Book a Free Demo Class
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              className="group inline-flex items-center justify-center gap-2 rounded-xl border px-7 py-3.5 text-sm font-bold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                color: BRAND.orange,
                borderColor: `${BRAND.orange}45`,
                background: `${BRAND.orange}0d`,
              }}
            >
              <PlayCircle size={15} strokeWidth={2} />
              Join WhatsApp Community
            </button>
          </motion.div>

          {/* Social proof */}
          <motion.div variants={fadeSlide} className="flex flex-wrap items-center gap-5 pt-1">
            <div className="flex -space-x-2.5">
              {AVATARS.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  width={34}
                  height={34}
                  loading="eager"
                  className="w-[34px] h-[34px] rounded-full border-2 border-white object-cover shadow-sm"
                />
              ))}
            </div>

            <div>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} fill={BRAND.orange} color={BRAND.orange} />
                ))}
              </div>
              <p className="text-[11px] text-gray-400 mt-0.5">
                Trusted by <span className="font-bold text-gray-600">2,000+ parents</span>
              </p>
            </div>

            <div className="hidden sm:block w-px h-9 bg-gray-200" />

            {STATS.map((s) => (
              <div key={s.label} className="hidden sm:block">
                <p className="text-[14px] font-extrabold leading-none" style={{ color: BRAND.blue }}>
                  {s.value}
                </p>
                <p className="text-[10px] text-gray-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.p variants={fadeIn} className="text-[11px] text-gray-400 flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: BRAND.orange }} />
            Join a growing community of future innovators!
          </motion.p>
        </motion.div>

        {/* ──── RIGHT IMAGE CARD ──── */}
        <motion.div
          initial={{ opacity: 0, x: 44, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          className="relative hidden lg:flex justify-center items-center"
        >

          {/* Soft glow ring */}
          <div
            className="absolute rounded-[28px] pointer-events-none"
            style={{
              inset: "-16px",
              background: `radial-gradient(ellipse at 40% 50%, ${BRAND.blue}22, ${BRAND.orange}12, transparent 70%)`,
              filter: "blur(28px)",
            }}
            aria-hidden="true"
          />

          {/* Card frame */}
          <div
            className="relative w-full rounded-[24px] overflow-hidden"
            style={{
              aspectRatio: "9/11",
              maxHeight: 560,
              border: "1.5px solid rgba(22,66,214,0.1)",
              boxShadow: "0 24px 72px rgba(22,66,214,0.13), 0 6px 20px rgba(0,0,0,0.07)",
            }}
          >
            <Image
              src={heroImg}
              alt="Kid learning coding with a mentor"
              fill
              priority
              sizes="(max-width: 1024px) 0px, 520px"
              className="object-cover"
            />

            {/* Bottom scrim */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, ${BRAND.navy}55 0%, transparent 50%)`,
              }}
              aria-hidden="true"
            />

            {/* Floating card at bottom */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl px-4 py-3"
              style={{
                background: "rgba(255,255,255,0.88)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.65)",
                boxShadow: "0 8px 28px rgba(0,0,0,0.10)",
              }}
            >
              <div className="flex -space-x-2">
                {AVATARS.slice(0, 3).map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-bold text-gray-900 leading-none truncate">
                  1,000+ Kids Learning Right Now
                </p>
                <p className="text-[10px] text-gray-400 mt-0.5">Join the community today</p>
              </div>
              <span
                className="flex-shrink-0 w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#22c55e" }}
              />
            </motion.div>
          </div>

          {/* Floating pill — top right */}
          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="absolute -top-4 -right-6 flex items-center gap-2 rounded-full px-4 py-2 z-10"
            style={{
              background: `linear-gradient(135deg, ${BRAND.lightBlue}, ${BRAND.blue})`,
              boxShadow: `0 6px 20px ${BRAND.blue}45`,
            }}
          >
            <Sparkles size={12} color="white" />
            <span className="text-[11px] font-bold text-white whitespace-nowrap">
              AI-Powered Curriculum
            </span>
          </motion.div>

          {/* Floating pill — bottom left */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -left-6 flex items-center gap-2 rounded-full px-4 py-2 z-10"
            style={{
              background: `linear-gradient(135deg, ${BRAND.amber}, ${BRAND.orange})`,
              boxShadow: `0 6px 20px ${BRAND.orange}45`,
            }}
          >
            <Users size={12} color="white" />
            <span className="text-[11px] font-bold text-white whitespace-nowrap">Expert Mentors</span>
          </motion.div>

          {/* Extra floating stat chip — mid left */}
          <motion.div
            animate={{ y: [0, -11, 0], x: [0, 5, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/3 -left-8 flex items-center gap-2 rounded-xl px-3.5 py-2 z-10"
            style={{
              background: "rgba(255,255,255,0.90)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(22,66,214,0.12)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.09)",
            }}
          >
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: `${BRAND.blue}15` }}
            >
              <Code2 size={14} style={{ color: BRAND.blue }} strokeWidth={2} />
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-800 leading-none">500+ Projects</p>
              <p className="text-[9px] text-gray-400 mt-0.5">Built by students</p>
            </div>
          </motion.div>

        </motion.div>
      </motion.div>
    </section>
  );
}