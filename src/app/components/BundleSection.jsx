// "use client";

// import React, { useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Brain,
//   Globe,
//   ShieldCheck,
//   Terminal,
//   ArrowRight,
//   CalendarDays,
//   Sparkles,
//   Users,
//   Clock,
//   Milestone,
//   Activity,
//   ChevronLeft,
//   ChevronRight,
//   Zap,
//   Trophy,
//   Star,
//   Rocket,
//   CheckCircle2,
//   IndianRupee,
// } from "lucide-react";

// /* ─────────────────────────────────────────
//    GOOGLE FONTS
// ───────────────────────────────────────── */
// const FontLoader = () => (
//   <style>{`
//     @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');
//   `}</style>
// );

// /* ─────────────────────────────────────────
//    BRAND
// ───────────────────────────────────────── */
// const BRAND = {
//   violet: "#7c3aed",
//   purple: "#a855f7",
//   sky: "#0ea5e9",
//   orange: "#f97316",
//   amber: "#fbbf24",
//   rose: "#f43f5e",
//   mint: "#10b981",
//   navy: "#0f1b4c",
// };

// /* ─────────────────────────────────────────
//    BUNDLE DATA
// ───────────────────────────────────────── */
// const BUNDLES = [
//   {
//     slug: "ai-innovators",
//     title: "AI Innovators",
//     subtitle: "Code, Create & Build the Future with AI",
//     description:
//       "Learn Python, AI, Machine Learning & Generative AI with real-world projects. Get hands-on experience building tools that matter.",
//     grade: "Grade 8–12",
//     lessons: 72,
//     activities: "150+",
//     duration: "9–10 Months",
//     price: 129999,
//     level: "Intermediate",
//     students: "3.2k",
//     Icon: Brain,
//     accent: "#1d8fff",
//     accentAlt: "#7c3aed",
//     img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80",
//     tags: ["Python", "AI", "Machine Learning", "Generative AI"],
//     highlights: ["Python + AI", "10+ Projects", "Live Classes"],
//     achievements: [
//       "Build real AI-powered applications",
//       "Master Python & ML algorithms",
//       "Work on Generative AI projects",
//       "Get career-ready certification",
//     ],
//     featured: true,
//   },
//   {
//     slug: "programming-masters",
//     title: "Programming Masters",
//     subtitle: "Code Like a Pro in 3 Languages",
//     description:
//       "Master Python, Java & C++ with strong logic building and real-world apps. Become a versatile developer ready for any challenge.",
//     grade: "Grade 8–12",
//     lessons: 73,
//     activities: "150+",
//     duration: "9–10 Months",
//     price: 119999,
//     level: "Intermediate",
//     students: "2.8k",
//     Icon: Terminal,
//     accent: "#6366f1",
//     accentAlt: "#f97316",
//     img: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=900&q=80",
//     tags: ["Python", "Java", "C++", "OOP"],
//     highlights: ["Python + Java + C++", "Hands-on Projects", "Career Ready"],
//     achievements: [
//       "Master 3 programming languages",
//       "Build logic-first problem solving",
//       "Develop real-world applications",
//       "Industry-level code quality",
//     ],
//   },
//   {
//     slug: "tech-titans",
//     title: "Tech Titans",
//     subtitle: "Become a Complete Tech Expert",
//     description:
//       "Learn Web Dev, Python & Cyber Security with real-world projects and a capstone. The ultimate tech bundle for future innovators.",
//     grade: "Grade 8–12",
//     lessons: 68,
//     activities: "140+",
//     duration: "9–10 Months",
//     price: 124999,
//     level: "Advanced",
//     students: "1.9k",
//     Icon: Globe,
//     accent: "#10b981",
//     accentAlt: "#0ea5e9",
//     img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80",
//     tags: ["Web Dev", "Python", "Cybersecurity"],
//     highlights: ["Web + Python + Cyber", "Real Projects", "Capstone"],
//     achievements: [
//       "Build full-stack web applications",
//       "Learn ethical hacking basics",
//       "Complete a capstone project",
//       "Present to industry mentors",
//     ],
//   },
// ];

// const LEVEL_STYLE = {
//   Beginner:     { dot: "#22c55e", bg: "#dcfce7", color: "#15803d", label: "Beginner" },
//   Intermediate: { dot: "#f59e0b", bg: "#fef3c7", color: "#b45309", label: "Intermediate" },
//   Advanced:     { dot: "#8b5cf6", bg: "#ede9fe", color: "#6d28d9", label: "Advanced" },
// };

// function formatINR(n) {
//   return n.toLocaleString("en-IN");
// }

// /* ─────────────────────────────────────────
//    HELPERS
// ───────────────────────────────────────── */
// function FloatBob({ children, delay = 0, amplitude = 7, duration = 3.5, className, style }) {
//   return (
//     <motion.div
//       className={className}
//       style={style}
//       animate={{ y: [0, -amplitude, 0] }}
//       transition={{ duration, delay, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// function SpinningStar({ size = 14, color, top, left, right, bottom, delay = 0 }) {
//   return (
//     <motion.div
//       className="absolute pointer-events-none z-[2]"
//       style={{ top, left, right, bottom }}
//       animate={{ rotate: 360, scale: [1, 1.3, 1] }}
//       transition={{
//         rotate: { duration: 9, repeat: Infinity, ease: "linear", delay },
//         scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay },
//       }}
//     >
//       <Star size={size} fill={color} color={color} />
//     </motion.div>
//   );
// }

// function DottedBg({ color = "#7c3aed", opacity = 0.04, size = 28 }) {
//   return (
//     <div
//       className="absolute inset-0 pointer-events-none"
//       aria-hidden="true"
//       style={{
//         backgroundImage: `radial-gradient(circle, ${color} 1.5px, transparent 1.5px)`,
//         backgroundSize: `${size}px ${size}px`,
//         opacity,
//       }}
//     />
//   );
// }

// function WavyTop({ fill = "#ffffff" }) {
//   return (
//     <div className="absolute top-0 left-0 w-full pointer-events-none z-[4]" style={{ lineHeight: 0 }} aria-hidden="true">
//       <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
//         <path d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,0 L0,0 Z" fill={fill} />
//       </svg>
//     </div>
//   );
// }

// function WavyBottom({ fill = "#ffffff" }) {
//   return (
//     <div className="absolute bottom-0 left-0 w-full pointer-events-none z-[4]" style={{ lineHeight: 0 }} aria-hidden="true">
//       <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
//         <path d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z" fill={fill} />
//       </svg>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────
//    BUNDLE CARD (full-width layout inside slider)
// ───────────────────────────────────────── */
// function BundleCard({ bundle, direction }) {
//   const lvl = LEVEL_STYLE[bundle.level] || LEVEL_STYLE.Intermediate;

//   const variants = {
//     enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80, scale: 0.97 }),
//     center: { opacity: 1, x: 0, scale: 1 },
//     exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80, scale: 0.97 }),
//   };

//   return (
//     <motion.div
//       custom={direction}
//       variants={variants}
//       initial="enter"
//       animate="center"
//       exit="exit"
//       transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
//       className="w-full"
//       style={{ fontFamily: "'Nunito', sans-serif" }}
//     >
//       <div
//         className="relative overflow-hidden rounded-3xl"
//         style={{
//           background: "rgba(255,255,255,0.93)",
//           border: `2px solid ${bundle.accent}22`,
//           boxShadow: `0 8px 40px ${bundle.accent}18, 0 2px 8px rgba(0,0,0,0.06)`,
//         }}
//       >
//         {/* Gradient BG strip */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background: `linear-gradient(135deg, ${bundle.accent}08 0%, transparent 50%, ${bundle.accentAlt}06 100%)`,
//           }}
//         />

//         <div className="relative z-10 flex flex-col lg:flex-row">
//           {/* ── Left: Image ── */}
//           <div className="relative lg:w-[45%] overflow-hidden" style={{ minHeight: 280 }}>
//             <img
//               src={bundle.img}
//               alt={bundle.title}
//               className="w-full h-full object-cover"
//               style={{ minHeight: 280 }}
//             />
//             {/* Overlays */}
//             <div
//               className="absolute inset-0"
//               style={{
//                 background: `linear-gradient(135deg, ${bundle.accent}60 0%, transparent 55%)`,
//               }}
//             />
//             <div
//               className="absolute inset-0"
//               style={{ background: "linear-gradient(to top, rgba(0,0,0,0.62) 0%, transparent 50%)" }}
//             />
//             {/* Right fade to white for lg */}
//             <div
//               className="hidden lg:block absolute inset-y-0 right-0 w-16"
//               style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.93))" }}
//             />

//             {/* Featured badge */}
//             {bundle.featured && (
//               <FloatBob amplitude={4} duration={2.8} className="absolute top-4 left-4 z-10">
//                 <span
//                   className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold text-white"
//                   style={{
//                     background: `linear-gradient(135deg, ${BRAND.orange}, ${BRAND.rose})`,
//                     boxShadow: `0 4px 12px ${BRAND.orange}55`,
//                     fontFamily: "'Fredoka One', cursive",
//                   }}
//                 >
//                   <Star size={10} fill="white" /> Featured Bundle
//                 </span>
//               </FloatBob>
//             )}

//             {/* Grade badge */}
//             <div
//               className="absolute top-4 right-4 rounded-full px-3 py-1 text-[11px] font-bold text-white"
//               style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(6px)" }}
//             >
//               {bundle.grade}
//             </div>

//             {/* Icon + Level bottom row */}
//             <div className="absolute bottom-4 left-4 flex items-center gap-3">
//               <FloatBob amplitude={5} duration={3.2}>
//                 <div
//                   className="w-10 h-10 rounded-2xl flex items-center justify-center"
//                   style={{ background: bundle.accent, boxShadow: `0 4px 14px ${bundle.accent}55` }}
//                 >
//                   <bundle.Icon size={20} color="white" strokeWidth={2} />
//                 </div>
//               </FloatBob>
//               <div className="flex items-center gap-1.5">
//                 <motion.span
//                   className="w-2 h-2 rounded-full block"
//                   style={{ background: lvl.dot }}
//                   animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
//                   transition={{ duration: 1.8, repeat: Infinity }}
//                 />
//                 <span className="text-[12px] font-bold text-white">{lvl.label}</span>
//               </div>
//             </div>

//             {/* Stats overlay */}
//             <div className="absolute bottom-4 right-4 flex gap-3">
//               {[
//                 { icon: <Clock size={11} />, val: bundle.duration },
//                 { icon: <Users size={11} />, val: `${bundle.students} enrolled` },
//               ].map(({ icon, val }) => (
//                 <span
//                   key={val}
//                   className="flex items-center gap-1 text-[11px] font-bold text-white px-2 py-1 rounded-full"
//                   style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(6px)" }}
//                 >
//                   {icon} {val}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* ── Right: Content ── */}
//           <div className="flex flex-col flex-1 p-6 sm:p-8 gap-4">
//             {/* Level pill + subtitle */}
//             <div className="flex items-center gap-2 flex-wrap">
//               <span
//                 className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide"
//                 style={{ color: lvl.color, background: lvl.bg }}
//               >
//                 <Zap size={8} /> {lvl.label}
//               </span>
//               <span className="text-[12px] text-gray-400 font-bold">{bundle.subtitle}</span>
//             </div>

//             {/* Title */}
//             <div>
//               <h3
//                 style={{
//                   fontFamily: "'Fredoka One', cursive",
//                   fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
//                   color: "#111827",
//                   lineHeight: 1.15,
//                 }}
//               >
//                 {bundle.title}
//               </h3>
//               <p className="mt-2 text-[14px] text-gray-500 leading-relaxed font-semibold">
//                 {bundle.description}
//               </p>
//             </div>

//             {/* Stats row */}
//             <div
//               className="grid grid-cols-2 sm:grid-cols-4 gap-3"
//               style={{ fontFamily: "'Fredoka One', cursive" }}
//             >
//               {[
//                 { icon: <Milestone size={15} />, label: "Lessons", val: bundle.lessons },
//                 { icon: <Activity size={15} />, label: "Activities", val: bundle.activities },
//                 { icon: <Clock size={15} />, label: "Duration", val: bundle.duration },
//                 { icon: <Users size={15} />, label: "Enrolled", val: bundle.students },
//               ].map(({ icon, label, val }) => (
//                 <div
//                   key={label}
//                   className="flex flex-col items-center justify-center rounded-2xl py-3 px-2 text-center"
//                   style={{ background: `${bundle.accent}0d`, border: `1px solid ${bundle.accent}20` }}
//                 >
//                   <span style={{ color: bundle.accent }}>{icon}</span>
//                   <span style={{ fontSize: "1rem", color: BRAND.navy, marginTop: 2 }}>{val}</span>
//                   <span className="text-[10px] text-gray-400 font-bold" style={{ fontFamily: "'Nunito', sans-serif" }}>
//                     {label}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* Achievements */}
//             <ul className="grid sm:grid-cols-2 gap-1.5">
//               {bundle.achievements.map((item) => (
//                 <li key={item} className="flex items-start gap-2 text-[13px] text-gray-600 font-bold">
//                   <CheckCircle2 size={13} strokeWidth={2.5} className="mt-0.5 shrink-0" style={{ color: bundle.accent }} />
//                   {item}
//                 </li>
//               ))}
//             </ul>

//             {/* Tags */}
//             <div className="flex flex-wrap gap-1.5">
//               {bundle.tags.map((tag) => (
//                 <span
//                   key={tag}
//                   className="rounded-full px-2.5 py-0.5 text-[11px] font-bold border"
//                   style={{
//                     color: bundle.accent,
//                     background: `${bundle.accent}10`,
//                     borderColor: `${bundle.accent}28`,
//                   }}
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             {/* Divider */}
//             <div style={{ height: 1, background: `${bundle.accent}18`, borderRadius: 2 }} />

//             {/* Price + CTAs */}
//             <div className="flex items-center justify-between gap-3 flex-wrap">
//               <div className="flex flex-col">
//                 <span className="text-[11px] text-gray-400 font-bold">Bundle Price</span>
//                 <div className="flex items-baseline gap-0.5">
//                   <IndianRupee size={14} strokeWidth={2.5} style={{ color: BRAND.orange, marginBottom: 1 }} />
//                   <span
//                     style={{
//                       fontFamily: "'Fredoka One', cursive",
//                       fontSize: "1.5rem",
//                       color: BRAND.navy,
//                       lineHeight: 1,
//                     }}
//                   >
//                     {formatINR(bundle.price)}
//                   </span>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2.5">
//                 <motion.button
//                               whileHover={{ scale: 1.06 }}
//                               whileTap={{ scale: 0.95 }}
//                               transition={{ type: "spring", stiffness: 400, damping: 18 }}
//                               className="flex items-center gap-2 rounded-xl px-5 py-2.5 text-white font-bold"
//                               style={{
//                                 background: `linear-gradient(135deg, ${bundle.accent}, ${bundle.accent}cc)`,
//                                 boxShadow: `0 4px 14px ${bundle.accent}40`,
//                                 fontFamily: "'Fredoka One', cursive",
//                                 // fontSize: "0.8rem",
//                               }}
//                             >
//                               Enroll Now
//                               <ArrowRight size={14} strokeWidth={2.5} />
//                             </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.06 }}
//                   whileTap={{ scale: 0.95 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 18 }}
//                   className="flex items-center gap-2 rounded-xl border-2 px-5 py-2.5 font-bold"
//                   style={{
//                     color: bundle.accent,
//                     borderColor: `${bundle.accent}35`,
//                     background: `${bundle.accent}08`,
//                     fontFamily: "'Fredoka One', cursive",
//                     fontSize: "0.95rem",
//                   }}
//                 >
//                   <CalendarDays size={14} strokeWidth={2} /> Demo
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom accent bar */}
//         <div
//           className="h-1.5 w-full"
//           style={{ background: `linear-gradient(90deg, ${bundle.accent}, ${bundle.accentAlt}, ${BRAND.orange})` }}
//         />
//       </div>
//     </motion.div>
//   );
// }

// /* ─────────────────────────────────────────
//    DOT INDICATOR
// ───────────────────────────────────────── */
// function DotNav({ total, active, accent, onDotClick }) {
//   return (
//     <div className="flex items-center gap-2">
//       {Array.from({ length: total }).map((_, i) => (
//         <motion.button
//           key={i}
//           onClick={() => onDotClick(i)}
//           whileHover={{ scale: 1.3 }}
//           whileTap={{ scale: 0.9 }}
//           animate={{ width: i === active ? 24 : 8 }}
//           transition={{ type: "spring", stiffness: 400, damping: 22 }}
//           className="h-2 rounded-full cursor-pointer"
//           style={{
//             background: i === active ? accent : `${accent}35`,
//           }}
//           aria-label={`Go to slide ${i + 1}`}
//         />
//       ))}
//     </div>
//   );
// }

// /* ─────────────────────────────────────────
//    MAIN
// ───────────────────────────────────────── */
// export default function BundleSection() {
//   const [current, setCurrent] = useState(0);
//   const [direction, setDirection] = useState(1);

//   const goTo = (index) => {
//     setDirection(index > current ? 1 : -1);
//     setCurrent(index);
//   };

//   const prev = () => goTo(current === 0 ? BUNDLES.length - 1 : current - 1);
//   const next = () => goTo(current === BUNDLES.length - 1 ? 0 : current + 1);

//   const activeBundle = BUNDLES[current];

//   return (
//     <>
//       <FontLoader />
//       <section
//         className="relative py-20 overflow-hidden"
//         aria-label="Bundle Courses"
//         style={{
//           background: "linear-gradient(160deg, #f5f0ff 0%, #fff0f7 35%, #f0f9ff 70%, #f0fff8 100%)",
//           fontFamily: "'Nunito', sans-serif",
//         }}
//       >
//         <DottedBg color={BRAND.violet} opacity={0.038} size={30} />
//         <WavyTop fill="#ffffff" />
//         <WavyBottom fill="#ffffff" />

//         {/* Blobs */}
//         <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
//           <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, ${BRAND.violet}1a, transparent 70%)`, filter: "blur(60px)" }} />
//           <div style={{ position: "absolute", bottom: -80, left: -80, width: 420, height: 420, borderRadius: "50%", background: `radial-gradient(circle, ${BRAND.orange}18, transparent 70%)`, filter: "blur(55px)" }} />
//           <div style={{ position: "absolute", top: "40%", left: "45%", width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle, ${BRAND.sky}14, transparent 70%)`, filter: "blur(50px)" }} />
//         </div>

//         {/* Stars */}
//         <div className="hidden lg:block" aria-hidden="true">
//           <SpinningStar size={15} color={BRAND.amber} top="8%" left="3%" delay={0} />
//           <SpinningStar size={11} color={BRAND.rose} top="85%" left="5%" delay={1} />
//           <SpinningStar size={13} color={BRAND.violet} top="6%" right="4%" delay={0.5} />
//           <SpinningStar size={10} color={BRAND.sky} top="88%" right="5%" delay={1.5} />
//           <SpinningStar size={9} color={BRAND.mint} top="50%" left="1%" delay={2} />
//           <SpinningStar size={12} color={BRAND.orange} top="48%" right="2%" delay={0.8} />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-8">

//           {/* ── HEADER ── */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
//             className="mb-12"
//           >
//             {/* Eyebrow */}
//             <div className="flex justify-center sm:justify-start mb-4">
//               <span
//                 className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-bold uppercase tracking-widest border-2"
//                 style={{
//                   color: BRAND.violet,
//                   borderColor: `${BRAND.violet}38`,
//                   background: "linear-gradient(135deg, #ede9fe, #fce7f3)",
//                 }}
//               >
//                 <FloatBob amplitude={4} duration={2.2} style={{ display: "flex" }}>
//                   <Trophy size={13} style={{ color: BRAND.orange }} />
//                 </FloatBob>
//                 Bundle Programs
//               </span>
//             </div>

//             <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
//               <div>
//                 <h2
//                   className="leading-tight"
//                   style={{
//                     fontFamily: "'Fredoka One', cursive",
//                     fontSize: "clamp(1.9rem, 4vw, 3rem)",
//                     color: BRAND.navy,
//                   }}
//                 >
//                   All-in-One Learning{" "}
//                   <span
//                     style={{
//                       background: `linear-gradient(120deg, ${BRAND.sky}, ${BRAND.violet})`,
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor: "transparent",
//                       backgroundClip: "text",
//                     }}
//                   >
//                     Bundles
//                   </span>
//                 </h2>
//                 <p className="mt-3 text-[16px] text-gray-500 max-w-xl leading-relaxed font-bold">
//                   Power-packed programs combining{" "}
//                   <span style={{ color: BRAND.violet, fontWeight: 900 }}>multiple tracks</span>{" "}
//                   for maximum impact — designed for students who want it all.
//                 </p>
//               </div>

//               {/* Stats card */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ type: "spring", stiffness: 300, damping: 22, delay: 0.2 }}
//                 className="flex items-center gap-5 shrink-0 rounded-3xl px-6 py-4 border-2"
//                 style={{
//                   background: "rgba(255,255,255,0.85)",
//                   borderColor: `${BRAND.violet}20`,
//                   boxShadow: `0 8px 28px ${BRAND.violet}10`,
//                   backdropFilter: "blur(12px)",
//                 }}
//               >
//                 {[
//                   { value: String(BUNDLES.length), label: "Bundles", color: BRAND.violet },
//                   { value: "9–10", label: "Months", color: BRAND.sky },
//                   { value: "8k+", label: "Students", color: BRAND.orange },
//                 ].map(({ value, label, color }, i, arr) => (
//                   <React.Fragment key={label}>
//                     <div className="text-center">
//                       <p style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.5rem", color, lineHeight: 1 }}>{value}</p>
//                       <p className="text-[11px] text-gray-400 mt-0.5 font-bold">{label}</p>
//                     </div>
//                     {i < arr.length - 1 && <div style={{ width: 1, height: 34, background: `${BRAND.violet}20` }} />}
//                   </React.Fragment>
//                 ))}
//               </motion.div>
//             </div>

//             {/* Animated dots */}
//             <div className="flex gap-2 mt-5">
//               {[BRAND.violet, BRAND.sky, BRAND.orange, BRAND.mint, BRAND.rose].map((c, i) => (
//                 <motion.div
//                   key={i}
//                   className="w-2 h-2 rounded-full"
//                   style={{ background: c }}
//                   animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
//                   transition={{ duration: 1.6 + i * 0.2, repeat: Infinity, delay: i * 0.15 }}
//                 />
//               ))}
//             </div>
//           </motion.div>

//           {/* ── MINI BUNDLE TABS ── */}
//           <div className="flex flex-wrap gap-2.5 mb-8">
//             {BUNDLES.map((b, i) => {
//               const isActive = i === current;
//               return (
//                 <motion.button
//                   key={b.slug}
//                   onClick={() => goTo(i)}
//                   whileHover={{ scale: 1.04 }}
//                   whileTap={{ scale: 0.96 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 20 }}
//                   className="inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 border-2"
//                   style={{
//                     fontFamily: "'Fredoka One', cursive",
//                     fontSize: "0.875rem",
//                     background: isActive ? `linear-gradient(135deg, ${b.accent}, ${b.accentAlt})` : "rgba(255,255,255,0.85)",
//                     color: isActive ? "white" : "#6b7280",
//                     borderColor: isActive ? b.accent : `${b.accent}25`,
//                     boxShadow: isActive ? `0 6px 18px ${b.accent}35` : "0 2px 8px rgba(0,0,0,0.05)",
//                   }}
//                 >
//                   <b.Icon size={16} strokeWidth={2} />
//                   {b.title}
//                 </motion.button>
//               );
//             })}
//           </div>

//           {/* ── SLIDER ── */}
//           <div className="relative">
//             <AnimatePresence mode="wait" custom={direction}>
//               <BundleCard key={activeBundle.slug} bundle={activeBundle} direction={direction} />
//             </AnimatePresence>
//           </div>

//           {/* ── NAV BAR ── */}
//           <div className="flex items-center justify-between mt-6">
//             <DotNav
//               total={BUNDLES.length}
//               active={current}
//               accent={activeBundle.accent}
//               onDotClick={goTo}
//             />

//             <div className="flex items-center gap-2">
//               <motion.button
//                 onClick={prev}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.92 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 18 }}
//                 className="w-10 h-10 rounded-2xl flex items-center justify-center border-2"
//                 style={{
//                   background: "rgba(255,255,255,0.9)",
//                   borderColor: `${activeBundle.accent}25`,
//                   color: activeBundle.accent,
//                   boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
//                 }}
//                 aria-label="Previous bundle"
//               >
//                 <ChevronLeft size={18} strokeWidth={2.5} />
//               </motion.button>
//               <motion.button
//                 onClick={next}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.92 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 18 }}
//                 className="w-10 h-10 rounded-2xl flex items-center justify-center text-white"
//                 style={{
//                   background: `linear-gradient(135deg, ${activeBundle.accent}, ${activeBundle.accentAlt})`,
//                   boxShadow: `0 4px 14px ${activeBundle.accent}40`,
//                 }}
//                 aria-label="Next bundle"
//               >
//                 <ChevronRight size={18} strokeWidth={2.5} />
//               </motion.button>
//             </div>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import React, { useEffect, useCallback, useState } from "react";
import { motion } from "framer-motion";
import {
  Brain, Globe, Terminal,
  ArrowRight, CalendarDays,
  Users, Clock, Milestone, Activity,
  Zap, Trophy, Star, CheckCircle2, IndianRupee,
  ChevronLeft, ChevronRight,
} from "lucide-react";

const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');
  `}</style>
);

const BRAND = {
  violet: "#7c3aed", purple: "#a855f7",
  sky: "#0ea5e9",    orange: "#f97316",
  amber: "#fbbf24",  rose: "#f43f5e",
  mint: "#10b981",   navy: "#0f1b4c",
};

const BUNDLES = [
  {
    slug: "ai-innovators",
    title: "AI Innovators",
    subtitle: "Code, Create & Build the Future with AI",
    description: "Learn Python, AI, Machine Learning & Generative AI with real-world projects. Get hands-on experience building tools that matter.",
    grade: "Grade 8–12",
    lessons: 72, activities: "150+", duration: "9–10 Months",
    price: 129999, level: "Intermediate", students: "3.2k",
    Icon: Brain, accent: "#1d8fff", accentAlt: "#7c3aed",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=640&q=80",
    tags: ["Python", "AI", "ML", "Generative AI"],
    achievements: [
      "Build real AI-powered applications",
      "Master Python & ML algorithms",
      "Work on Generative AI projects",
      "Get career-ready certification",
    ],
    featured: true,
  },
  {
    slug: "programming-masters",
    title: "Programming Masters",
    subtitle: "Code Like a Pro in 3 Languages",
    description: "Master Python, Java & C++ with strong logic building and real-world apps. Become a versatile developer ready for any challenge.",
    grade: "Grade 8–12",
    lessons: 73, activities: "150+", duration: "9–10 Months",
    price: 119999, level: "Intermediate", students: "2.8k",
    Icon: Terminal, accent: "#6366f1", accentAlt: "#f97316",
    img: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=640&q=80",
    tags: ["Python", "Java", "C++", "OOP"],
    achievements: [
      "Master 3 programming languages",
      "Build logic-first problem solving",
      "Develop real-world applications",
      "Industry-level code quality",
    ],
  },
  {
    slug: "tech-titans",
    title: "Tech Titans",
    subtitle: "Become a Complete Tech Expert",
    description: "Learn Web Dev, Python & Cyber Security with real-world projects and a capstone. The ultimate tech bundle for future innovators.",
    grade: "Grade 8–12",
    lessons: 68, activities: "140+", duration: "9–10 Months",
    price: 124999, level: "Advanced", students: "1.9k",
    Icon: Globe, accent: "#10b981", accentAlt: "#0ea5e9",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=640&q=80",
    tags: ["Web Dev", "Python", "Cybersecurity"],
    achievements: [
      "Build full-stack web applications",
      "Learn ethical hacking basics",
      "Complete a capstone project",
      "Present to industry mentors",
    ],
  },
];

const LEVEL_STYLE = {
  Beginner:     { dot: "#22c55e", bg: "#dcfce7", color: "#15803d" },
  Intermediate: { dot: "#f59e0b", bg: "#fef3c7", color: "#b45309" },
  Advanced:     { dot: "#8b5cf6", bg: "#ede9fe", color: "#6d28d9" },
};

function formatINR(n) { return n.toLocaleString("en-IN"); }

function FloatBob({ children, delay = 0, amplitude = 5, duration = 3, style, className }) {
  return (
    <motion.div className={className} style={style}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}>
      {children}
    </motion.div>
  );
}

function SpinningStar({ size = 13, color, top, left, right, bottom, delay = 0 }) {
  return (
    <motion.div className="absolute pointer-events-none z-[2]" style={{ top, left, right, bottom }}
      animate={{ rotate: 360, scale: [1, 1.3, 1] }}
      transition={{
        rotate: { duration: 9, repeat: Infinity, ease: "linear", delay },
        scale:  { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay },
      }}>
      <Star size={size} fill={color} color={color} />
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   SINGLE CARD
───────────────────────────────────────── */
function BundleCard({ bundle, isActive, onClick }) {
  const lvl = LEVEL_STYLE[bundle.level] || LEVEL_STYLE.Intermediate;

  return (
    <motion.div
      onClick={!isActive ? onClick : undefined}
      animate={{ scale: isActive ? 1 : 0.77, opacity: isActive ? 1 : 0.6 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="flex-shrink-0 flex flex-col rounded-3xl overflow-hidden"
      style={{
        width: "100%",
        cursor: isActive ? "default" : "pointer",
        background: "rgba(255,255,255,0.95)",
        border: `2px solid ${bundle.accent}${isActive ? "35" : "18"}`,
        boxShadow: isActive
          ? `0 16px 48px ${bundle.accent}25, 0 4px 14px rgba(0,0,0,0.10)`
          : `0 2px 12px rgba(0,0,0,0.06)`,
        fontFamily: "'Nunito', sans-serif",
        transformOrigin: "center center",
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: 172 }}>
        <img src={bundle.img} alt={bundle.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${bundle.accent}50 0%, transparent 55%)` }} />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.58) 0%, transparent 50%)" }} />

        {bundle.featured && (
          <FloatBob amplitude={3} duration={2.6} className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold text-white"
              style={{
                background: `linear-gradient(135deg, ${BRAND.orange}, ${BRAND.rose})`,
                fontFamily: "'Fredoka One', cursive",
              }}>
              <Star size={9} fill="white" /> Featured
            </span>
          </FloatBob>
        )}

        <div className="absolute top-3 right-3 rounded-full px-2 py-0.5 text-[10px] font-bold text-white"
          style={{ background: "rgba(0,0,0,0.42)", backdropFilter: "blur(6px)" }}>
          {bundle.grade}
        </div>

        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center"
            style={{ background: bundle.accent, boxShadow: `0 3px 10px ${bundle.accent}55` }}>
            <bundle.Icon size={15} color="white" strokeWidth={2} />
          </div>
          <div className="flex items-center gap-1">
            <motion.span className="w-1.5 h-1.5 rounded-full"
              style={{ background: lvl.dot, display: "block" }}
              animate={isActive ? { scale: [1, 1.5, 1], opacity: [1, 0.4, 1] } : {}}
              transition={{ duration: 1.8, repeat: Infinity }} />
            <span className="text-[10px] font-bold text-white">{bundle.level}</span>
          </div>
        </div>

        <div className="absolute bottom-3 right-3 flex flex-col items-end gap-1">
          {[
            { icon: <Clock size={9} />, val: bundle.duration },
            { icon: <Users size={9} />, val: `${bundle.students} enrolled` },
          ].map(({ icon, val }) => (
            <span key={val}
              className="flex items-center gap-1 text-[9px] font-bold text-white px-1.5 py-0.5 rounded-full"
              style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)" }}>
              {icon} {val}
            </span>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 gap-2.5">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide"
            style={{ color: lvl.color, background: lvl.bg }}>
            <Zap size={7} /> {bundle.level}
          </span>
          <span className="text-[10px] text-gray-400 font-bold truncate">{bundle.subtitle}</span>
        </div>

        <h3 style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.05rem", color: "#111827", lineHeight: 1.25 }}>
          {bundle.title}
        </h3>

        <p className="text-[12px] text-gray-500 leading-relaxed font-semibold line-clamp-2">
          {bundle.description}
        </p>

        <div className="grid grid-cols-2 gap-1.5">
          {[
            { icon: <Milestone size={11} />, val: `${bundle.lessons} Lessons` },
            { icon: <Activity size={11} />,  val: `${bundle.activities} Activities` },
            { icon: <Clock size={11} />,     val: bundle.duration },
            { icon: <Users size={11} />,     val: `${bundle.students} Enrolled` },
          ].map(({ icon, val }) => (
            <div key={val} className="flex items-center gap-1.5 rounded-xl px-2 py-1.5 text-[10px] font-bold"
              style={{ background: `${bundle.accent}0d`, color: bundle.accent }}>
              {icon} <span className="text-gray-600">{val}</span>
            </div>
          ))}
        </div>

        <ul className="flex flex-col gap-1">
          {bundle.achievements.slice(0, 3).map((item) => (
            <li key={item} className="flex items-start gap-1.5 text-[11px] text-gray-600 font-bold">
              <CheckCircle2 size={11} strokeWidth={2.5} className="mt-0.5 shrink-0"
                style={{ color: bundle.accent }} />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1">
          {bundle.tags.map((tag) => (
            <span key={tag} className="rounded-full px-2 py-0.5 text-[10px] font-bold border"
              style={{ color: bundle.accent, background: `${bundle.accent}10`, borderColor: `${bundle.accent}28` }}>
              {tag}
            </span>
          ))}
        </div>

        <div style={{ height: 1, background: `${bundle.accent}18` }} />

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-0.5">
            <IndianRupee size={11} strokeWidth={2.5} style={{ color: BRAND.orange, marginBottom: 1 }} />
            <span style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.05rem", color: BRAND.navy, lineHeight: 1 }}>
              {formatINR(bundle.price)}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1 rounded-xl px-3 py-1.5 text-[11px] text-white font-bold"
              style={{
                background: `linear-gradient(135deg, ${bundle.accent}, ${bundle.accentAlt})`,
                boxShadow: `0 3px 12px ${bundle.accent}40`,
                fontFamily: "'Fredoka One', cursive",
              }}>
              Enroll <ArrowRight size={10} strokeWidth={2.5} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1 rounded-xl border-2 px-3 py-1.5 text-[11px] font-bold"
              style={{
                color: bundle.accent, borderColor: `${bundle.accent}35`,
                background: `${bundle.accent}08`,
                fontFamily: "'Fredoka One', cursive",
              }}>
              <CalendarDays size={11} strokeWidth={2} /> Demo
            </motion.button>
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="h-1.5 w-full"
        style={{ background: `linear-gradient(90deg, ${bundle.accent}, ${bundle.accentAlt}, ${BRAND.orange})` }} />
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   MAIN
───────────────────────────────────────── */
export default function BundleSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const N = BUNDLES.length;

  const next = useCallback(() => setActive((a) => (a + 1) % N), [N]);
  const prev = useCallback(() => setActive((a) => (a - 1 + N) % N), [N]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [paused, next]);

  const activeBundle = BUNDLES[active];

  // Ordered so active is always in the middle visually
  const order = [(active - 1 + N) % N, active, (active + 1) % N];

  return (
    <>
      <FontLoader />
      <section
        className="relative py-20 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #f5f0ff 0%, #fff0f7 35%, #f0f9ff 70%, #f0fff8 100%)",
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        {/* Dotted BG */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{
            backgroundImage: `radial-gradient(circle, ${BRAND.violet} 1.5px, transparent 1.5px)`,
            backgroundSize: "28px 28px", opacity: 0.035,
          }} />

        {/* Wavy edges */}
        <div className="absolute top-0 left-0 w-full pointer-events-none z-[4]" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,0 L0,0 Z" fill="#fff" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-full pointer-events-none z-[4]" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z" fill="#fff" />
          </svg>
        </div>

        {/* Blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, ${BRAND.violet}18, transparent 70%)`, filter: "blur(60px)" }} />
          <div style={{ position: "absolute", bottom: -80, left: -80, width: 420, height: 420, borderRadius: "50%", background: `radial-gradient(circle, ${BRAND.orange}15, transparent 70%)`, filter: "blur(55px)" }} />
        </div>

        {/* Stars */}
        <div className="hidden lg:block" aria-hidden="true">
          <SpinningStar size={14} color={BRAND.amber}  top="8%"  left="3%"  delay={0}   />
          <SpinningStar size={11} color={BRAND.rose}   top="85%" left="5%"  delay={1}   />
          <SpinningStar size={13} color={BRAND.violet} top="6%"  right="4%" delay={0.5} />
          <SpinningStar size={10} color={BRAND.sky}    top="88%" right="5%" delay={1.5} />
          <SpinningStar size={9}  color={BRAND.mint}   top="50%" left="1%"  delay={2}   />
          <SpinningStar size={12} color={BRAND.orange} top="48%" right="2%" delay={0.8} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">

          {/* ── HEADER ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14"
          >
            <div className="flex justify-center sm:justify-start mb-4">
              <span className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-bold uppercase tracking-widest border-2"
                style={{ color: BRAND.violet, borderColor: `${BRAND.violet}38`, background: "linear-gradient(135deg, #ede9fe, #fce7f3)" }}>
                <FloatBob amplitude={4} duration={2.2} style={{ display: "flex" }}>
                  <Trophy size={13} style={{ color: BRAND.orange }} />
                </FloatBob>
                Bundle Programs
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h2 className="leading-tight"
                  style={{ fontFamily: "'Fredoka One', cursive", fontSize: "clamp(1.9rem, 4vw, 3rem)", color: BRAND.navy }}>
                  All-in-One Learning{" "}
                  <span style={{
                    background: `linear-gradient(120deg, ${BRAND.sky}, ${BRAND.violet})`,
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}>
                    Bundles
                  </span>
                </h2>
                <p className="mt-3 text-[16px] text-gray-500 max-w-xl leading-relaxed font-bold">
                  Power-packed programs combining{" "}
                  <span style={{ color: BRAND.violet, fontWeight: 900 }}>multiple tracks</span>{" "}
                  for maximum impact — designed for students who want it all.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 22, delay: 0.2 }}
                className="flex items-center gap-5 shrink-0 rounded-3xl px-6 py-4 border-2"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  borderColor: `${BRAND.violet}20`,
                  boxShadow: `0 8px 28px ${BRAND.violet}10`,
                  backdropFilter: "blur(12px)",
                }}>
                {[
                  { value: String(N), label: "Bundles",  color: BRAND.violet },
                  { value: "9–10",   label: "Months",   color: BRAND.sky    },
                  { value: "8k+",    label: "Students", color: BRAND.orange },
                ].map(({ value, label, color }, i, arr) => (
                  <React.Fragment key={label}>
                    <div className="text-center">
                      <p style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.5rem", color, lineHeight: 1 }}>{value}</p>
                      <p className="text-[11px] text-gray-400 mt-0.5 font-bold">{label}</p>
                    </div>
                    {i < arr.length - 1 && <div style={{ width: 1, height: 34, background: `${BRAND.violet}20` }} />}
                  </React.Fragment>
                ))}
              </motion.div>
            </div>

            <div className="flex gap-2 mt-5">
              {[BRAND.violet, BRAND.sky, BRAND.orange, BRAND.mint, BRAND.rose].map((c, i) => (
                <motion.div key={i} className="w-2 h-2 rounded-full" style={{ background: c }}
                  animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 1.6 + i * 0.2, repeat: Infinity, delay: i * 0.15 }} />
              ))}
            </div>
          </motion.div>

          {/* ── SLIDER ── */}
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/*
              Layout: 3 cards in a flex row.
              Each card slot is 1/3 of 78% container width.
              Center card is scaled 1.3x, side cards 1x (scale applied via motion.div).
              We use padding on the row so the scaled center card doesn't clip.
            */}
            <div
              className="flex items-center justify-center gap-4 mx-auto"
              style={{ width: "78%", paddingTop: 40, paddingBottom: 40 }}
            >
              {order.map((idx) => {
                const bundle = BUNDLES[idx];
                const isCenter = idx === active;
                return (
                  <div key={bundle.slug} style={{ flex: 1, minWidth: 0 }}>
                    <BundleCard
                      bundle={bundle}
                      isActive={isCenter}
                      onClick={() => { setActive(idx); setPaused(false); }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── NAV ── */}
          <div className="flex items-center justify-center gap-5 mt-2">
            <motion.button onClick={prev}
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }}
              className="w-11 h-11 rounded-2xl flex items-center justify-center border-2"
              style={{
                background: "rgba(255,255,255,0.9)",
                borderColor: `${activeBundle.accent}30`,
                color: activeBundle.accent,
                boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
              }}>
              <ChevronLeft size={18} strokeWidth={2.5} />
            </motion.button>

            <div className="flex items-center gap-2.5">
              {BUNDLES.map((b, i) => (
                <motion.button key={b.slug} onClick={() => setActive(i)}
                  whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}
                  animate={{ width: i === active ? 28 : 8, opacity: i === active ? 1 : 0.35 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  className="h-2.5 rounded-full"
                  style={{ background: i === active ? activeBundle.accent : "#9ca3af" }} />
              ))}
            </div>

            <motion.button onClick={next}
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }}
              className="w-11 h-11 rounded-2xl flex items-center justify-center text-white"
              style={{
                background: `linear-gradient(135deg, ${activeBundle.accent}, ${activeBundle.accentAlt})`,
                boxShadow: `0 4px 16px ${activeBundle.accent}40`,
              }}>
              <ChevronRight size={18} strokeWidth={2.5} />
            </motion.button>
          </div>

          <p className="text-center text-[11px] text-gray-400 font-bold mt-3">
            Auto-playing · Hover to pause · Click side cards to focus
          </p>

        </div>
      </section>
    </>
  );
}