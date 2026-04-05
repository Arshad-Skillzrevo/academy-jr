// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Globe,
//   Brain,
//   ShieldCheck,
//   Cloud,
//   Terminal,
//   LayoutGrid,
//   IndianRupee,
//   ArrowRight,
//   CalendarDays,
//   Sparkles,
//   Users,
//   Clock,
//   CheckCircle2,
//   Star,
//   Rocket,
//   Trophy,
//   Zap,
//   Milestone,
//   Activity,
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
//    TABS
// ───────────────────────────────────────── */
// const TABS = [
//   { id: "all", label: "All Courses", Icon: LayoutGrid, accent: BRAND.violet },
//   { id: "web", label: "Web Dev", Icon: Globe, accent: "#1642d6" },
//   { id: "aiml", label: "AI & ML", Icon: Brain, accent: "#7c3aed" },
//   { id: "cyber", label: "Cybersecurity", Icon: ShieldCheck, accent: "#dc2626" },
//   { id: "cloud", label: "Cloud", Icon: Cloud, accent: "#0284c7" },
//   { id: "prog", label: "Programming", Icon: Terminal, accent: "#ea580c" },
// ];

// const LEVEL_STYLE = {
//   Beginner: {
//     dot: "#22c55e",
//     bg: "#dcfce7",
//     color: "#15803d",
//     label: "Beginner",
//   },
//   Intermediate: {
//     dot: "#f59e0b",
//     bg: "#fef3c7",
//     color: "#b45309",
//     label: "Intermediate",
//   },
//   Advanced: {
//     dot: "#8b5cf6",
//     bg: "#ede9fe",
//     color: "#6d28d9",
//     label: "Advanced",
//   },
// };

// /* ─────────────────────────────────────────
//    COURSES
// ───────────────────────────────────────── */
// const COURSES = [
//   {
//     id: "web-1",
//     cat: "web",
//     title: "Web Development for Beginners",
//     subtitle: "HTML & CSS Fundamentals",
//     grade: "Grade 9–10",
//     lessons: 25,
//     activities: "50+",
//     duration: "3–4 Months",
//     desc: "Build and design websites using HTML for structure and CSS for styling. Create responsive webpages and understand the foundations of modern web design.",
//     achievements: [
//       "Build websites with HTML & CSS",
//       "Design responsive web pages",
//       "Create layouts with UI components",
//       "Understand structure & styling",
//       "Develop a static website project",
//     ],
//     price: 34999,
//     level: "Beginner",
//     students: "1.2k",
//     Icon: Globe,
//     accent: "#1642d6",
//     img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=640&h=400&fit=crop&q=80",
//     tags: ["HTML", "CSS", "Beginner"],
//   },
//   {
//     id: "web-2",
//     cat: "web",
//     title: "Interactive Web Development",
//     subtitle: "HTML, CSS & JavaScript",
//     grade: "Grade 9–12",
//     lessons: 30,
//     activities: "50+",
//     duration: "3–4 Months",
//     desc: "Build interactive, dynamic websites using HTML, CSS, and JavaScript. Add animations, handle events, and implement real-world functionality.",
//     achievements: [
//       "Build websites with HTML, CSS & JS",
//       "Design responsive web pages",
//       "Create interactive projects",
//       "Understand website structure",
//       "Develop and present portfolio",
//     ],
//     price: 49999,
//     level: "Intermediate",
//     students: "980",
//     Icon: Globe,
//     accent: "#0284c7",
//     img: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=640&h=400&fit=crop&q=80",
//     tags: ["HTML", "CSS", "JavaScript"],
//   },
//   {
//     id: "web-3",
//     cat: "web",
//     title: "Advanced Full Stack Development",
//     subtitle: "Complete Web Applications",
//     grade: "Grade 9–12",
//     lessons: 70,
//     activities: "80+",
//     duration: "5–6 Months",
//     desc: "Build complete web applications from frontend to backend using modern technologies, database integration and industry best practices.",
//     achievements: [
//       "Work with real-world data",
//       "Clean, analyze & visualize data",
//       "Build logic-based programs",
//       "Apply basic ML concepts",
//       "Develop and present projects",
//     ],
//     price: 89999,
//     level: "Advanced",
//     students: "750",
//     Icon: Globe,
//     accent: "#7c3aed",
//     img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=640&h=400&fit=crop&q=80",
//     tags: ["Full Stack", "Web Apps", "Projects", "Portfolio"],
//     featured: true,
//   },
//   {
//     id: "aiml-1",
//     cat: "aiml",
//     title: "Data Analysis Foundations",
//     subtitle: "Excel · Python · Power BI",
//     grade: "Grade 9–12",
//     lessons: 47,
//     activities: "50+",
//     duration: "4–5 Months",
//     desc: "Analyze and visualize data using industry tools like Excel, Python, SQL, and Power BI. Understand how data is collected, cleaned, and converted into insights.",
//     achievements: [
//       "Analyze data with Excel & Python",
//       "Clean and organize datasets",
//       "Create charts & dashboards",
//       "Build tools like calculators",
//       "Develop and present projects",
//     ],
//     price: 34999,
//     level: "Beginner",
//     students: "1.5k",
//     Icon: Brain,
//     accent: "#059669",
//     img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&h=400&fit=crop&q=80",
//     tags: ["Excel", "Python", "Power BI", "Beginner"],
//   },
//   {
//     id: "aiml-2",
//     cat: "aiml",
//     title: "AI & Machine Learning Foundations",
//     subtitle: "Python · ML Algorithms",
//     grade: "Grade 9–12",
//     lessons: 40,
//     activities: "50+",
//     duration: "4–5 Months",
//     desc: "Explore the fundamentals of AI and Machine Learning using Python. Learn data analysis, statistics, ML algorithms, and build beginner AI projects.",
//     achievements: [
//       "Understand AI & ML basics",
//       "Analyze data with Python, NumPy & Pandas",
//       "Build prediction models",
//       "Apply ML algorithms",
//       "Create AI-based projects",
//     ],
//     price: 44999,
//     level: "Intermediate",
//     students: "890",
//     Icon: Brain,
//     accent: "#7c3aed",
//     img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=640&h=400&fit=crop&q=80",
//     tags: ["Python", "Machine Learning", "AI"],
//     featured: true,
//   },
//   {
//     id: "aiml-3",
//     cat: "aiml",
//     title: "Full Stack AI & Machine Learning",
//     subtitle: "Complete AI Engineering",
//     grade: "Grade 9–12",
//     lessons: 70,
//     activities: "70+",
//     duration: "5–6 Months",
//     desc: "Master the complete AI workflow from data analysis to ML and real-world AI applications. Build dashboards, predictive models, and AI-powered tools.",
//     achievements: [
//       "Analyze & clean data using Excel & Python",
//       "Build charts, dashboards & KPI reports",
//       "Apply data & statistical concepts",
//       "Create basic ML models",
//       "Build and present data projects",
//     ],
//     price: 89999,
//     level: "Advanced",
//     students: "620",
//     Icon: Brain,
//     accent: "#db2777",
//     img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=640&h=400&fit=crop&q=80",
//     tags: ["Python", "Machine Learning", "AI"],
//   },
//   {
//     id: "cyber-1",
//     cat: "cyber",
//     title: "Cybersecurity Foundations",
//     subtitle: "Ethical Hacking · Digital Safety",
//     grade: "Grade 9–12",
//     lessons: 30,
//     activities: "30+",
//     duration: "4–5 Months",
//     desc: "Learn the fundamentals of Cybersecurity, ethical hacking, and digital safety. Understand cyber threats, encryption, network security, and security tools.",
//     achievements: [
//       "Identify cyber threats & attacks",
//       "Apply security for devices & networks",
//       "Understand encryption & system security",
//       "Perform basic security analysis",
//       "Practice real-world cyber labs",
//     ],
//     price: 44999,
//     level: "Beginner",
//     students: "1.1k",
//     Icon: ShieldCheck,
//     accent: "#dc2626",
//     img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=640&h=400&fit=crop&q=80",
//     tags: ["Cyber Security", "Ethical Hacking", "Beginner"],
//   },
//   {
//     id: "cloud-1",
//     cat: "cloud",
//     title: "Cloud Computing Foundations",
//     subtitle: "Cloud Infrastructure · DevOps",
//     grade: "Grade 9–12",
//     lessons: 17,
//     activities: "30+",
//     duration: "2–3 Months",
//     desc: "Learn cloud computing fundamentals and modern cloud infrastructure. Explore platforms, virtual machines, storage, and deploy applications using real cloud services.",
//     achievements: [
//       "Understand cloud basics & use cases",
//       "Deploy apps and host websites",
//       "Manage VMs, networks & storage",
//       "Apply security, monitoring & backup",
//       "Build scalable cloud projects",
//     ],
//     price: 44999,
//     level: "Beginner",
//     students: "870",
//     Icon: Cloud,
//     accent: "#0284c7",
//     img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=640&h=400&fit=crop&q=80",
//     tags: ["Cloud Computing", "DevOps", "Beginner"],
//   },
//   {
//     id: "prog-1",
//     cat: "prog",
//     title: "Python Programming Foundations",
//     subtitle: "Python · Problem Solving",
//     grade: "Grade 9–12",
//     lessons: 30,
//     activities: "50+",
//     duration: "3–4 Months",
//     desc: "Learn the fundamentals of Python programming. Explore variables, conditions, loops, functions, OOP, and build practical Python applications step by step.",
//     achievements: [
//       "Understand programming basics & logic",
//       "Write code using loops, conditions & functions",
//       "Work with lists, files & objects",
//       "Build apps like calculators & games",
//       "Debug and present projects",
//     ],
//     price: 34999,
//     level: "Beginner",
//     students: "2.1k",
//     Icon: Terminal,
//     accent: "#ea580c",
//     img: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=640&h=400&fit=crop&q=80",
//     tags: ["Python", "Programming", "Beginner"],
//   },
//   {
//     id: "prog-2",
//     cat: "prog",
//     title: "Java Programming Foundations",
//     subtitle: "Java · OOP Concepts",
//     grade: "Grade 9–12",
//     lessons: 40,
//     activities: "50+",
//     duration: "3–4 Months",
//     desc: "Master Java programming and object-oriented development. Learn Java syntax, OOP principles, and develop real-world applications using industry best practices.",
//     achievements: [
//       "Understand programming logic",
//       "Write code with arrays & OOP",
//       "Build apps like calculator & systems",
//       "Debug and fix errors",
//       "Develop and present projects",
//     ],
//     price: 34999,
//     level: "Beginner",
//     students: "1.3k",
//     Icon: Terminal,
//     accent: "#b45309",
//     img: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=640&h=400&fit=crop&q=80",
//     tags: ["Java", "OOP", "Programming"],
//   },
// ];


// function formatINR(n) {
//   return n.toLocaleString("en-IN");
// }

// /* ─────────────────────────────────────────
//    HELPERS
// ───────────────────────────────────────── */
// function FloatBob({
//   children,
//   delay = 0,
//   amplitude = 7,
//   duration = 3.5,
//   className,
//   style,
// }) {
//   return (
//     <motion.div
//       className={className}
//       style={style}
//       animate={{ y: [0, -amplitude, 0] }}
//       transition={{
//         duration,
//         delay,
//         repeat: Infinity,
//         ease: "easeInOut",
//         repeatType: "mirror",
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// function SpinningStar({
//   size = 14,
//   color,
//   top,
//   left,
//   right,
//   bottom,
//   delay = 0,
// }) {
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
//     <div
//       className="absolute top-0 left-0 w-full pointer-events-none z-[4]"
//       style={{ lineHeight: 0 }}
//       aria-hidden="true"
//     >
//       <svg
//         viewBox="0 0 1440 56"
//         xmlns="http://www.w3.org/2000/svg"
//         preserveAspectRatio="none"
//       >
//         <path
//           d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,0 L0,0 Z"
//           fill={fill}
//         />
//       </svg>
//     </div>
//   );
// }

// function WavyBottom({ fill = "#ffffff" }) {
//   return (
//     <div
//       className="absolute bottom-0 left-0 w-full pointer-events-none z-[4]"
//       style={{ lineHeight: 0 }}
//       aria-hidden="true"
//     >
//       <svg
//         viewBox="0 0 1440 56"
//         xmlns="http://www.w3.org/2000/svg"
//         preserveAspectRatio="none"
//       >
//         <path
//           d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z"
//           fill={fill}
//         />
//       </svg>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────
//    COURSE CARD
// ───────────────────────────────────────── */
// function CourseCard({ course, index }) {
//   const lvl = LEVEL_STYLE[course.level] || LEVEL_STYLE.Beginner;

//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: 32, scale: 0.97 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       exit={{ opacity: 0, y: 16, scale: 0.96 }}
//       transition={{
//         duration: 0.4,
//         delay: index * 0.05,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       whileHover={{
//         y: -7,
//         transition: { type: "spring", stiffness: 380, damping: 22 },
//       }}
//       variants={{ hover: {} }}
//       className="group flex flex-col rounded-3xl overflow-hidden"
//       style={{
//         background: "rgba(255,255,255,0.92)",
//         border: `2px solid ${course.accent}20`,
//         boxShadow: `0 4px 20px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)`,
//         fontFamily: "'Nunito', sans-serif",
//       }}
//     >
//       {/* Image */}
//       <div className="relative overflow-hidden" style={{ height: 176 }}>
//         <img
//           src={course.img}
//           alt={course.title}
//           loading="lazy"
//           className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-106"
//         />

//         {/* Tint overlay */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background: `linear-gradient(135deg, ${course.accent}55 0%, transparent 60%)`,
//           }}
//         />
//         {/* Bottom scrim */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)",
//           }}
//         />

//         {/* Featured badge */}
//         {course.featured && (
//           <FloatBob
//             amplitude={4}
//             duration={2.8}
//             className="absolute top-3 left-3 z-10"
//           >
//             <span
//               className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold text-white"
//               style={{
//                 background: `linear-gradient(135deg, ${BRAND.orange}, ${BRAND.rose})`,
//                 boxShadow: `0 4px 12px ${BRAND.orange}50`,
//                 fontFamily: "'Fredoka One', cursive",
//               }}
//             >
//               <Star size={10} fill="white" />
//               Featured
//             </span>
//           </FloatBob>
//         )}

//         {/* Grade badge */}
//         <div
//           className="absolute top-3 right-3 rounded-full px-2.5 py-1 text-[10px] font-bold text-white"
//           style={{
//             background: "rgba(0,0,0,0.42)",
//             backdropFilter: "blur(6px)",
//             fontWeight: 800,
//           }}
//         >
//           {course.grade}
//         </div>

//         {/* Icon chip */}
//         <FloatBob
//           amplitude={5}
//           duration={3.2}
//           delay={index * 0.1}
//           className="absolute bottom-3 left-4"
//         >
//           <div
//             className="w-9 h-9 rounded-xl flex items-center justify-center"
//             style={{
//               background: course.accent,
//               boxShadow: `0 4px 14px ${course.accent}55`,
//             }}
//           >
//             <course.Icon size={17} color="white" strokeWidth={2} />
//           </div>
//         </FloatBob>

//         {/* Level badge */}
//         <div className="absolute bottom-3.5 right-4 flex items-center gap-1.5">
//           <motion.span
//             className="w-2 h-2 rounded-full block"
//             style={{ background: lvl.dot }}
//             animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
//             transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.2 }}
//           />
//           <span className="text-[11px] font-bold text-white">{lvl.label}</span>
//         </div>
//       </div>

//       {/* Body */}
//       <div className="flex flex-col flex-1 p-5 gap-3">
//         {/* Level pill + subtitle */}
//         <div className="flex items-center gap-2 flex-wrap">
//           <span
//             className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide"
//             style={{ color: lvl.color, background: lvl.bg }}
//           >
//             <Zap size={8} />
//             {lvl.label}
//           </span>
//           <span className="text-[11px] text-gray-400 font-bold">
//             {course.subtitle}
//           </span>
//         </div>

//         {/* Title */}
//         <motion.h3
//           className="leading-snug transition-colors duration-200"
//           style={{
//             fontFamily: "'Fredoka One', cursive",
//             fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
//             color: "#111827",
//           }}
//           variants={{ hover: { color: course.accent } }}
//         >
//           {course.title}
//         </motion.h3>

//         {/* Stats row */}
//         <div
//           className="flex items-center gap-3 text-[16px] text-orange-600 flex-wrap"
//           style={{ fontWeight: 700 }}
//         >
//           <div className="flex flex-col gap-2">
//             <span className="flex items-center gap-1">
//               <Clock size={16} strokeWidth={2.5} />
//               {course.duration}
//             </span>
//             <span className="flex items-center gap-1">
//               <Users size={16} strokeWidth={2.5} />
//               {course.students} enrolled
//             </span>
//           </div>
//           <span className="ml-auto flex items-center gap-3 text-[16px] text-orange-600 flex-wrap">
//             <div className="flex flex-col gap-2">
//               <span className="flex items-center gap-1">
//                 <Milestone size={16} strokeWidth={2.5} />
//                 {course.lessons} lessons
//               </span>
//               <span className="flex items-center gap-1">
//                 <Activity size={16} strokeWidth={2.5} />
//                 {course.activities} activities
//               </span>
//             </div>
//           </span>
//         </div>

//         {/* Description */}
//         <p
//           className="text-[14px] text-gray-500 leading-relaxed line-clamp-2"
//           style={{ fontWeight: 600 }}
//         >
//           {course.desc}
//         </p>

//         {/* Achievements */}
//         <ul className="flex flex-col gap-1">
//           {course.achievements.slice(0, 3).map((item) => (
//             <li
//               key={item}
//               className="flex items-start gap-2 text-[14px] text-gray-500"
//               style={{ fontWeight: 700 }}
//             >
//               <CheckCircle2
//                 size={12}
//                 strokeWidth={2.5}
//                 className="mt-0.5 shrink-0"
//                 style={{ color: course.accent }}
//               />
//               {item}
//             </li>
//           ))}
//         </ul>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-1.5">
//           {course.tags.map((tag) => (
//             <span
//               key={tag}
//               className="rounded-full px-2.5 py-0.5 text-[11px] font-bold border"
//               style={{
//                 color: course.accent,
//                 background: `${course.accent}10`,
//                 borderColor: `${course.accent}28`,
//               }}
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         {/* Divider */}
//         <div
//           style={{
//             height: 1,
//             background: `${course.accent}18`,
//             borderRadius: 2,
//           }}
//         />

//         {/* Price + CTAs */}
//         <div className="flex items-center justify-between gap-2">
//           <div className="flex items-baseline gap-0.5">
//             <IndianRupee
//               size={13}
//               strokeWidth={2.5}
//               style={{ color: BRAND.orange, marginBottom: 1 }}
//             />
//             <span
//               className="leading-none"
//               style={{
//                 fontFamily: "'Fredoka One', cursive",
//                 fontSize: "1.15rem",
//                 color: BRAND.navy,
//               }}
//             >
//               {formatINR(course.price)}
//             </span>
//           </div>

//           <div className="flex items-center gap-2">
//             <motion.button
//               whileHover={{ scale: 1.06 }}
//               whileTap={{ scale: 0.95 }}
//               transition={{ type: "spring", stiffness: 400, damping: 18 }}
//               className="flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-[14px] font-light text-white"
//               style={{
//                 background: `linear-gradient(135deg, ${course.accent}, ${course.accent}cc)`,
//                 boxShadow: `0 4px 14px ${course.accent}40`,
//                 fontFamily: "'Fredoka One', cursive",
//                 // fontSize: "0.8rem",
//               }}
//             >
//               Enroll Now
//               <ArrowRight size={11} strokeWidth={2.5} />
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.06 }}
//               whileTap={{ scale: 0.95 }}
//               transition={{ type: "spring", stiffness: 400, damping: 18 }}
//               className="flex items-center gap-1.5 rounded-xl border-2 px-3.5 py-2 text-[14px] font-light"
//               style={{
//                 color: course.accent,
//                 borderColor: `${course.accent}35`,
//                 background: `${course.accent}08`,
//                 fontFamily: "'Fredoka One', cursive",
//                 // fontSize: "0.8rem",
//               }}
//             >
//               <CalendarDays size={14} strokeWidth={2} />
//               Demo
//             </motion.button>
//           </div>
//         </div>
//       </div>

//       {/* Hover accent bar */}
//       <motion.div
//         className="h-1.5 w-full"
//         initial={{ scaleX: 0, opacity: 0 }}
//         whileHover={{ scaleX: 1, opacity: 1 }}
//         transition={{ duration: 0.3, ease: "easeOut" }}
//         style={{
//           background: `linear-gradient(90deg, ${course.accent}, ${BRAND.orange})`,
//           transformOrigin: "left",
//         }}
//       />
//     </motion.div>
//   );
// }

// /* ─────────────────────────────────────────
//    SECTION STATS
// ───────────────────────────────────────── */
// const SECTION_STATS = [
//   {
//     value: `${COURSES.length}`,
//     label: "Courses",
//     icon: BookOpen2,
//     color: BRAND.violet,
//   },
//   { value: "5", label: "Tracks", icon: Zap, color: BRAND.sky },
//   { value: "12k+", label: "Students", icon: Users, color: BRAND.orange },
// ];

// // Simple inline icon for book
// function BookOpen2({ size, color }) {
//   return <CheckCircle2 size={size} color={color} strokeWidth={2.2} />;
// }

// /* ─────────────────────────────────────────
//    MAIN
// ───────────────────────────────────────── */
// export default function CourseCatalog() {
//   const [active, setActive] = useState("all");
//   const filtered =
//     active === "all" ? COURSES : COURSES.filter((c) => c.cat === active);
//   const activeTab = TABS.find((t) => t.id === active);

//   return (
//     <>
//       <FontLoader />
//       <section
//         className="relative py-22 overflow-hidden"
//         aria-label="Course Catalog"
//         style={{
//           background:
//             "linear-gradient(160deg, #f5f0ff 0%, #fff0f7 35%, #f0f9ff 70%, #f0fff8 100%)",
//           fontFamily: "'Nunito', sans-serif",
//         }}
//       >
//         <DottedBg color={BRAND.violet} opacity={0.038} size={30} />
//         <WavyTop fill="#ffffff" />
//         <WavyBottom fill="#ffffff" />

//         {/* Blobs */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           aria-hidden="true"
//         >
//           <div
//             style={{
//               position: "absolute",
//               top: -100,
//               right: -100,
//               width: 500,
//               height: 500,
//               borderRadius: "50%",
//               background: `radial-gradient(circle, ${BRAND.violet}1a, transparent 70%)`,
//               filter: "blur(60px)",
//             }}
//           />
//           <div
//             style={{
//               position: "absolute",
//               bottom: -80,
//               left: -80,
//               width: 420,
//               height: 420,
//               borderRadius: "50%",
//               background: `radial-gradient(circle, ${BRAND.orange}18, transparent 70%)`,
//               filter: "blur(55px)",
//             }}
//           />
//           <div
//             style={{
//               position: "absolute",
//               top: "40%",
//               left: "45%",
//               width: 300,
//               height: 300,
//               borderRadius: "50%",
//               background: `radial-gradient(circle, ${BRAND.sky}14, transparent 70%)`,
//               filter: "blur(50px)",
//             }}
//           />
//         </div>

//         {/* Spinning stars — desktop */}
//         <div className="hidden lg:block" aria-hidden="true">
//           <SpinningStar
//             size={15}
//             color={BRAND.amber}
//             top="8%"
//             left="3%"
//             delay={0}
//           />
//           <SpinningStar
//             size={11}
//             color={BRAND.rose}
//             top="85%"
//             left="5%"
//             delay={1}
//           />
//           <SpinningStar
//             size={13}
//             color={BRAND.violet}
//             top="6%"
//             right="4%"
//             delay={0.5}
//           />
//           <SpinningStar
//             size={10}
//             color={BRAND.sky}
//             top="88%"
//             right="5%"
//             delay={1.5}
//           />
//           <SpinningStar
//             size={9}
//             color={BRAND.mint}
//             top="50%"
//             left="1%"
//             delay={2}
//           />
//           <SpinningStar
//             size={12}
//             color={BRAND.orange}
//             top="48%"
//             right="2%"
//             delay={0.8}
//           />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-8">
//           {/* ── HEADER ── */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
//             className="mb-14"
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
//                 <FloatBob
//                   amplitude={4}
//                   duration={2.2}
//                   style={{ display: "flex" }}
//                 >
//                   <Rocket size={13} style={{ color: BRAND.orange }} />
//                 </FloatBob>
//                 Our Programs
//               </span>
//             </div>

//             <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
//               <div>
//                 <h2
//                   className="leading-tight"
//                   style={{
//                     fontFamily: "'Fredoka One', cursive",
//                     fontSize: "clamp(1.9rem, 4vw, 3rem)",
//                     color: BRAND.navy,
//                   }}
//                 >
//                   Learning Programs for{" "}
//                   <span
//                     style={{
//                       background: `linear-gradient(120deg, ${BRAND.sky}, ${BRAND.violet})`,
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor: "transparent",
//                       backgroundClip: "text",
//                     }}
//                   >
//                     Every Skill Level
//                   </span>
//                 </h2>
//                 <p
//                   className="mt-3 text-[16px] text-gray-500 max-w-xl leading-relaxed"
//                   style={{ fontWeight: 700 }}
//                 >
//                   Skill-focused courses designed to help kids aged{" "}
//                   <span style={{ color: BRAND.violet, fontWeight: 900 }}>
//                     6–17
//                   </span>{" "}
//                   build future-ready technology skills — from absolute beginner
//                   to advanced practitioner.
//                 </p>
//               </div>

//               {/* Stats card */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 300,
//                   damping: 22,
//                   delay: 0.2,
//                 }}
//                 className="flex items-center gap-5 shrink-0 rounded-3xl px-6 py-4 border-2"
//                 style={{
//                   background: "rgba(255,255,255,0.85)",
//                   borderColor: `${BRAND.violet}20`,
//                   boxShadow: `0 8px 28px ${BRAND.violet}10`,
//                   backdropFilter: "blur(12px)",
//                 }}
//               >
//                 {[
//                   {
//                     value: String(COURSES.length),
//                     label: "Courses",
//                     color: BRAND.violet,
//                   },
//                   { value: "5", label: "Tracks", color: BRAND.sky },
//                   { value: "12k+", label: "Students", color: BRAND.orange },
//                 ].map(({ value, label, color }, i, arr) => (
//                   <React.Fragment key={label}>
//                     <div className="text-center">
//                       <p
//                         style={{
//                           fontFamily: "'Fredoka One', cursive",
//                           fontSize: "1.5rem",
//                           color,
//                           lineHeight: 1,
//                         }}
//                       >
//                         {value}
//                       </p>
//                       <p className="text-[11px] text-gray-400 mt-0.5 font-bold">
//                         {label}
//                       </p>
//                     </div>
//                     {i < arr.length - 1 && (
//                       <div
//                         style={{
//                           width: 1,
//                           height: 34,
//                           background: `${BRAND.violet}20`,
//                         }}
//                       />
//                     )}
//                   </React.Fragment>
//                 ))}
//               </motion.div>
//             </div>

//             {/* Dot row */}
//             <div className="flex gap-2 mt-5">
//               {[
//                 BRAND.violet,
//                 BRAND.sky,
//                 BRAND.orange,
//                 BRAND.mint,
//                 BRAND.rose,
//               ].map((c, i) => (
//                 <motion.div
//                   key={i}
//                   className="w-2 h-2 rounded-full"
//                   style={{ background: c }}
//                   animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
//                   transition={{
//                     duration: 1.6 + i * 0.2,
//                     repeat: Infinity,
//                     delay: i * 0.15,
//                   }}
//                 />
//               ))}
//             </div>
//           </motion.div>

//           {/* ── TABS ── */}
//           <motion.div
//             initial={{ opacity: 0, y: 14 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.45, delay: 0.12 }}
//             className="flex flex-wrap gap-2.5 mb-8"
//           >
//             {TABS.map((tab) => {
//               const isActive = active === tab.id;
//               const count =
//                 tab.id === "all"
//                   ? COURSES.length
//                   : COURSES.filter((c) => c.cat === tab.id).length;
//               return (
//                 <motion.button
//                   key={tab.id}
//                   onClick={() => setActive(tab.id)}
//                   whileHover={{ scale: 1.04 }}
//                   whileTap={{ scale: 0.96 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 20 }}
//                   className="inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-[13px] font-normal border-2 transition-colors duration-200"
//                   style={{
//                     fontFamily: "'Fredoka One', cursive",
//                     fontSize: "0.875rem",
//                     background: isActive
//                       ? `linear-gradient(135deg, ${tab.accent}, ${tab.accent}cc)`
//                       : "rgba(255,255,255,0.85)",
//                     color: isActive ? "white" : "#6b7280",
//                     borderColor: isActive ? tab.accent : `${tab.accent}25`,
//                     boxShadow: isActive
//                       ? `0 6px 18px ${tab.accent}35`
//                       : "0 2px 8px rgba(0,0,0,0.05)",
//                   }}
//                 >
//                   <tab.Icon size={18} strokeWidth={2} />
//                   {tab.label}
//                   <span
//                     className="rounded-full w-5 h-5 flex items-center justify-center text-[14px] font-light"
//                     style={{
//                       background: isActive
//                         ? "rgba(255,255,255,0.25)"
//                         : `${tab.accent}15`,
//                       color: isActive ? "white" : tab.accent,
//                     }}
//                   >
//                     {count}
//                   </span>
//                 </motion.button>
//               );
//             })}
//           </motion.div>

//           {/* ── Active label ── */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={active}
//               initial={{ opacity: 0, x: -10 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.25 }}
//               className="flex items-center gap-3 mb-7"
//             >
//               <div
//                 className="w-8 h-8 rounded-xl flex items-center justify-center"
//                 style={{
//                   background: `linear-gradient(135deg, ${activeTab?.accent || BRAND.violet}, ${activeTab?.accent || BRAND.violet}bb)`,
//                 }}
//               >
//                 {activeTab && (
//                   <activeTab.Icon size={16} color="white" strokeWidth={2} />
//                 )}
//               </div>
//               <span
//                 className="text-[14px] font-normal text-gray-700"
//                 style={{ fontFamily: "'Fredoka One', cursive" }}
//               >
//                 {activeTab?.label}
//               </span>
//               <span
//                 className="rounded-full px-2.5 py-0.5 text-[11px] font-bold"
//                 style={{
//                   background: `${activeTab?.accent || BRAND.violet}15`,
//                   color: activeTab?.accent || BRAND.violet,
//                 }}
//               >
//                 {filtered.length} course{filtered.length !== 1 ? "s" : ""}
//               </span>
//               <div
//                 className="flex-1 h-px"
//                 style={{ background: `${activeTab?.accent || BRAND.violet}25` }}
//               />
//             </motion.div>
//           </AnimatePresence>

//           {/* ── GRID ── */}
//           <motion.div
//             layout
//             className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
//           >
//             <AnimatePresence mode="popLayout">
//               {filtered.map((course, i) => (
//                 <CourseCard key={course.id} course={course} index={i} />
//               ))}
//             </AnimatePresence>
//           </motion.div>

//           {/* ── Bottom CTA ── */}
//           {active !== "all" && (
//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="flex justify-center mt-12"
//             >
//               <motion.button
//                 onClick={() => setActive("all")}
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: `0 14px 36px ${BRAND.violet}45`,
//                 }}
//                 whileTap={{ scale: 0.97 }}
//                 transition={{ type: "spring", stiffness: 380, damping: 20 }}
//                 className="inline-flex items-center gap-2.5 rounded-2xl px-8 py-4 font-bold text-white"
//                 style={{
//                   background: `linear-gradient(135deg, ${BRAND.purple}, ${BRAND.violet})`,
//                   boxShadow: `0 8px 28px ${BRAND.violet}38`,
//                   fontFamily: "'Fredoka One', cursive",
//                   fontSize: "1rem",
//                 }}
//               >
//                 <FloatBob
//                   amplitude={4}
//                   duration={2}
//                   style={{ display: "flex" }}
//                 >
//                   <Trophy size={16} />
//                 </FloatBob>
//                 Browse All Courses
//                 <ArrowRight size={15} strokeWidth={2.5} />
//               </motion.button>
//             </motion.div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }



// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Globe,
//   Brain,
//   ShieldCheck,
//   Cloud,
//   Terminal,
//   LayoutGrid,
//   IndianRupee,
//   ArrowRight,
//   CalendarDays,
//   Sparkles,
//   Users,
//   Clock,
//   CheckCircle2,
//   Star,
//   Rocket,
//   Zap,
//   Milestone,
//   Activity,
// } from "lucide-react";

// import { useRouter } from "next/navigation";
// import { courses as COURSES } from "../data/courses"; // ✅ IMPORT DATA

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
//   navy: "#0f1b4c",
// };

// /* ─────────────────────────────────────────
//    TABS (UNCHANGED)
// ───────────────────────────────────────── */
// const TABS = [
//   { id: "all", label: "All Courses", Icon: LayoutGrid, accent: BRAND.violet },
// ];

// /* ─────────────────────────────────────────
//    LEVEL STYLE
// ───────────────────────────────────────── */
// const LEVEL_STYLE = {
//   Beginner: {
//     dot: "#22c55e",
//     bg: "#dcfce7",
//     color: "#15803d",
//     label: "Beginner",
//   },
// };

// /* ─────────────────────────────────────────
//    DATA TRANSFORM (IMPORTANT)
// ───────────────────────────────────────── */
// function transformCourses(data) {
//   return data.map((course) => ({
//     ...course,
//     img: course.heroImage,
//     desc: course.description,
//     duration: `${course.durationMonths} Months`,
//     accent: course.color || "#7c3aed",
//     students: "1k+",
//     level: "Beginner",
//     lessons: course.lessons || 20,
//     activities: course.activities || "50+",
//     Icon: Globe,
//   }));
// }

// /* ─────────────────────────────────────────
//    CARD
// ───────────────────────────────────────── */
// function CourseCard({ course, index }) {
//   const router = useRouter();
//   const lvl = LEVEL_STYLE[course.level];

//   return (
//     <motion.div
//       layout
//       className="group flex flex-col rounded-3xl overflow-hidden"
//       style={{
//         background: "white",
//         border: `1px solid #eee`,
//       }}
//     >
//       <img src={course.img} className="h-40 object-cover" />

//       <div className="p-4 flex flex-col gap-2">
//         <h3 className="font-bold">{course.title}</h3>
//         <p className="text-sm text-gray-500">{course.desc}</p>

//         <div className="flex justify-between text-xs text-gray-500">
//           <span>{course.duration}</span>
//           <span>{course.students}</span>
//         </div>

//         <button
//           onClick={() => router.push(`/courses/${course.slug}`)} // ✅ ROUTING
//           className="mt-2 bg-blue-600 text-white px-3 py-2 rounded"
//         >
//           Enroll Now
//         </button>
//       </div>
//     </motion.div>
//   );
// }

// /* ─────────────────────────────────────────
//    MAIN
// ───────────────────────────────────────── */
// export default function CourseCatalog() {
//   const [active, setActive] = useState("all");

//   // const transformedCourses = transformCourses(COURSES);
//   const singleCourses = COURSES.filter(
//   (course) => course.type === "single"
// );

// const transformedCourses = transformCourses(singleCourses);

//   const filtered =
//     active === "all"
//       ? transformedCourses
//       : transformedCourses;

//   return (
//     <>
//       <FontLoader />
//       <section className="p-10">
//         <div className="grid md:grid-cols-3 gap-6">
//           <AnimatePresence>
//             {filtered.map((course, i) => (
//               <CourseCard key={course.slug} course={course} index={i} />
//             ))}
//           </AnimatePresence>
//         </div>
//       </section>
//     </>
//   );
// }


// _______________________________________________________________________________________________

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Brain,
  ShieldCheck,
  Cloud,
  Terminal,
  LayoutGrid,
  IndianRupee,
  ArrowRight,
  CalendarDays,
  Sparkles,
  Users,
  Clock,
  CheckCircle2,
  Star,
  Rocket,
  Trophy,
  Zap,
  Milestone,
  Activity,
} from "lucide-react";

import { useRouter } from "next/navigation";
import { courses as COURSES_RAW } from "../data/courses"; // ✅ IMPORT DATA

/* ─────────────────────────────────────────
   GOOGLE FONTS
───────────────────────────────────────── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');
  `}</style>
);

/* ─────────────────────────────────────────
   BRAND
───────────────────────────────────────── */
const BRAND = {
  violet: "#7c3aed",
  purple: "#a855f7",
  sky: "#0ea5e9",
  orange: "#f97316",
  amber: "#fbbf24",
  rose: "#f43f5e",
  mint: "#10b981",
  navy: "#0f1b4c",
};

/* ─────────────────────────────────────────
   TABS
───────────────────────────────────────── */
const TABS = [
  { id: "all",   label: "All Courses",   Icon: LayoutGrid,  accent: BRAND.violet },
  { id: "web",   label: "Web Dev",       Icon: Globe,       accent: "#1642d6"    },
  { id: "aiml",  label: "AI & ML",       Icon: Brain,       accent: "#7c3aed"    },
  { id: "cyber", label: "Cybersecurity", Icon: ShieldCheck, accent: "#dc2626"    },
  { id: "cloud", label: "Cloud",         Icon: Cloud,       accent: "#0284c7"    },
  { id: "prog",  label: "Programming",   Icon: Terminal,    accent: "#ea580c"    },
];

const LEVEL_STYLE = {
  Beginner: {
    dot: "#22c55e",
    bg: "#dcfce7",
    color: "#15803d",
    label: "Beginner",
  },
  Intermediate: {
    dot: "#f59e0b",
    bg: "#fef3c7",
    color: "#b45309",
    label: "Intermediate",
  },
  Advanced: {
    dot: "#8b5cf6",
    bg: "#ede9fe",
    color: "#6d28d9",
    label: "Advanced",
  },
};

/* ─────────────────────────────────────────
   DATA TRANSFORM ✅
───────────────────────────────────────── */
function transformCourses(data) {
  return data.map((course) => ({
    ...course,
    img:        course.heroImage,
    desc:       course.description,
    duration:   `${course.durationMonths} Months`,
    accent:     course.color || BRAND.violet,
    students:   course.students   || "1k+",
    level:      course.level      || "Beginner",
    lessons:    course.lessons    || 20,
    activities: course.activities || "50+",
    // cat field must exist on your data; fallback to "all" so it always shows
    cat:        course.cat        || "all",
    Icon:       Globe,
  }));
}

function formatINR(n) {
  return n?.toLocaleString("en-IN") ?? "—";
}

// ✅ Filter single-type courses then transform once at module level
const COURSES = transformCourses(
  COURSES_RAW.filter((c) => c.type === "single")
);

/* ─────────────────────────────────────────
   HELPERS
───────────────────────────────────────── */
function FloatBob({
  children,
  delay = 0,
  amplitude = 7,
  duration = 3.5,
  className,
  style,
}) {
  return (
    <motion.div
      className={className}
      style={style}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "mirror",
      }}
    >
      {children}
    </motion.div>
  );
}

function SpinningStar({ size = 14, color, top, left, right, bottom, delay = 0 }) {
  return (
    <motion.div
      className="absolute pointer-events-none z-[2]"
      style={{ top, left, right, bottom }}
      animate={{ rotate: 360, scale: [1, 1.3, 1] }}
      transition={{
        rotate: { duration: 9, repeat: Infinity, ease: "linear", delay },
        scale:  { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      <Star size={size} fill={color} color={color} />
    </motion.div>
  );
}

function DottedBg({ color = "#7c3aed", opacity = 0.04, size = 28 }) {
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

function WavyTop({ fill = "#ffffff" }) {
  return (
    <div
      className="absolute top-0 left-0 w-full pointer-events-none z-[4]"
      style={{ lineHeight: 0 }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,0 L0,0 Z" fill={fill} />
      </svg>
    </div>
  );
}

function WavyBottom({ fill = "#ffffff" }) {
  return (
    <div
      className="absolute bottom-0 left-0 w-full pointer-events-none z-[4]"
      style={{ lineHeight: 0 }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z" fill={fill} />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────
   COURSE CARD
───────────────────────────────────────── */
function CourseCard({ course, index }) {
  const router = useRouter(); // ✅ ROUTING
  const lvl = LEVEL_STYLE[course.level] || LEVEL_STYLE.Beginner;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.96 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -7, transition: { type: "spring", stiffness: 380, damping: 22 } }}
      variants={{ hover: {} }}
      className="group flex flex-col rounded-3xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.92)",
        border: `2px solid ${course.accent}20`,
        boxShadow: `0 4px 20px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)`,
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: 176 }}>
        <img
          src={course.img}
          alt={course.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-106"
        />

        {/* Tint overlay */}
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${course.accent}55 0%, transparent 60%)` }}
        />
        {/* Bottom scrim */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)" }}
        />

        {/* Featured badge */}
        {course.featured && (
          <FloatBob amplitude={4} duration={2.8} className="absolute top-3 left-3 z-10">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold text-white"
              style={{
                background: `linear-gradient(135deg, ${BRAND.orange}, ${BRAND.rose})`,
                boxShadow: `0 4px 12px ${BRAND.orange}50`,
                fontFamily: "'Fredoka One', cursive",
              }}
            >
              <Star size={10} fill="white" />
              Featured
            </span>
          </FloatBob>
        )}

        {/* Grade badge */}
        <div
          className="absolute top-3 right-3 rounded-full px-2.5 py-1 text-[10px] font-bold text-white"
          style={{ background: "rgba(0,0,0,0.42)", backdropFilter: "blur(6px)", fontWeight: 800 }}
        >
          {course.grade}
        </div>

        {/* Icon chip */}
        <FloatBob amplitude={5} duration={3.2} delay={index * 0.1} className="absolute bottom-3 left-4">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: course.accent, boxShadow: `0 4px 14px ${course.accent}55` }}
          >
            <course.Icon size={17} color="white" strokeWidth={2} />
          </div>
        </FloatBob>

        {/* Level badge */}
        <div className="absolute bottom-3.5 right-4 flex items-center gap-1.5">
          <motion.span
            className="w-2 h-2 rounded-full block"
            style={{ background: lvl.dot }}
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.2 }}
          />
          <span className="text-[11px] font-bold text-white">{lvl.label}</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Level pill + subtitle */}
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide"
            style={{ color: lvl.color, background: lvl.bg }}
          >
            <Zap size={8} />
            {lvl.label}
          </span>
          <span className="text-[11px] text-gray-400 font-bold">{course.subtitle}</span>
        </div>

        {/* Title */}
        <motion.h3
          className="leading-snug transition-colors duration-200"
          style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
            color: "#111827",
          }}
          variants={{ hover: { color: course.accent } }}
        >
          {course.title}
        </motion.h3>

        {/* Stats row */}
        <div
          className="flex items-center gap-3 text-[16px] text-orange-600 flex-wrap"
          style={{ fontWeight: 700 }}
        >
          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-1">
              <Clock size={16} strokeWidth={2.5} />
              {course.duration}
            </span>
            <span className="flex items-center gap-1">
              <Users size={16} strokeWidth={2.5} />
              {course.students} enrolled
            </span>
          </div>
          <span className="ml-auto flex items-center gap-3 text-[16px] text-orange-600 flex-wrap">
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-1">
                <Milestone size={16} strokeWidth={2.5} />
                {course.lessons} lessons
              </span>
              <span className="flex items-center gap-1">
                <Activity size={16} strokeWidth={2.5} />
                {course.activities} activities
              </span>
            </div>
          </span>
        </div>

        {/* Description */}
        <p
          className="text-[14px] text-gray-500 leading-relaxed line-clamp-2"
          style={{ fontWeight: 600 }}
        >
          {course.desc}
        </p>

        {/* Achievements */}
        <ul className="flex flex-col gap-1">
          {course.achievements?.slice(0, 3).map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-[14px] text-gray-500"
              style={{ fontWeight: 700 }}
            >
              <CheckCircle2
                size={12}
                strokeWidth={2.5}
                className="mt-0.5 shrink-0"
                style={{ color: course.accent }}
              />
              {item}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {course.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-2.5 py-0.5 text-[11px] font-bold border"
              style={{
                color: course.accent,
                background: `${course.accent}10`,
                borderColor: `${course.accent}28`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: `${course.accent}18`, borderRadius: 2 }} />

        {/* Price + CTAs */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-0.5">
            <IndianRupee
              size={13}
              strokeWidth={2.5}
              style={{ color: BRAND.orange, marginBottom: 1 }}
            />
            <span
              className="leading-none"
              style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.15rem", color: BRAND.navy }}
            >
              {formatINR(course.price)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* ✅ Enroll Now routes to course slug */}
            <motion.button
              onClick={() => router.push(`/courses/${course.slug}`)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-[14px] font-light text-white"
              style={{
                background: `linear-gradient(135deg, ${course.accent}, ${course.accent}cc)`,
                boxShadow: `0 4px 14px ${course.accent}40`,
                fontFamily: "'Fredoka One', cursive",
              }}
            >
              Enroll Now
              <ArrowRight size={11} strokeWidth={2.5} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="flex items-center gap-1.5 rounded-xl border-2 px-3.5 py-2 text-[14px] font-light"
              style={{
                color: course.accent,
                borderColor: `${course.accent}35`,
                background: `${course.accent}08`,
                fontFamily: "'Fredoka One', cursive",
              }}
            >
              <CalendarDays size={14} strokeWidth={2} />
              Demo
            </motion.button>
          </div>
        </div>
      </div>

      {/* Hover accent bar */}
      <motion.div
        className="h-1.5 w-full"
        initial={{ scaleX: 0, opacity: 0 }}
        whileHover={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          background: `linear-gradient(90deg, ${course.accent}, ${BRAND.orange})`,
          transformOrigin: "left",
        }}
      />
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   MAIN
───────────────────────────────────────── */
export default function CourseCatalog() {
  const [active, setActive] = useState("all");

  // ✅ Tab filtering using live data's cat field
  const filtered =
    active === "all" ? COURSES : COURSES.filter((c) => c.cat === active);

  const activeTab = TABS.find((t) => t.id === active);

  return (
    <>
      <FontLoader />
      <section
        className="relative py-22 overflow-hidden"
        aria-label="Course Catalog"
        style={{
          background:
            "linear-gradient(160deg, #f5f0ff 0%, #fff0f7 35%, #f0f9ff 70%, #f0fff8 100%)",
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        <DottedBg color={BRAND.violet} opacity={0.038} size={30} />
        <WavyTop fill="#ffffff" />
        <WavyBottom fill="#ffffff" />

        {/* Blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            style={{
              position: "absolute", top: -100, right: -100,
              width: 500, height: 500, borderRadius: "50%",
              background: `radial-gradient(circle, ${BRAND.violet}1a, transparent 70%)`,
              filter: "blur(60px)",
            }}
          />
          <div
            style={{
              position: "absolute", bottom: -80, left: -80,
              width: 420, height: 420, borderRadius: "50%",
              background: `radial-gradient(circle, ${BRAND.orange}18, transparent 70%)`,
              filter: "blur(55px)",
            }}
          />
          <div
            style={{
              position: "absolute", top: "40%", left: "45%",
              width: 300, height: 300, borderRadius: "50%",
              background: `radial-gradient(circle, ${BRAND.sky}14, transparent 70%)`,
              filter: "blur(50px)",
            }}
          />
        </div>

        {/* Spinning stars — desktop */}
        <div className="hidden lg:block" aria-hidden="true">
          <SpinningStar size={15} color={BRAND.amber}  top="8%"  left="3%"   delay={0}   />
          <SpinningStar size={11} color={BRAND.rose}   top="85%" left="5%"   delay={1}   />
          <SpinningStar size={13} color={BRAND.violet} top="6%"  right="4%"  delay={0.5} />
          <SpinningStar size={10} color={BRAND.sky}    top="88%" right="5%"  delay={1.5} />
          <SpinningStar size={9}  color={BRAND.mint}   top="50%" left="1%"   delay={2}   />
          <SpinningStar size={12} color={BRAND.orange} top="48%" right="2%"  delay={0.8} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-8">
          {/* ── HEADER ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14"
          >
            {/* Eyebrow */}
            <div className="flex justify-center sm:justify-start mb-4">
              <span
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-bold uppercase tracking-widest border-2"
                style={{
                  color: BRAND.violet,
                  borderColor: `${BRAND.violet}38`,
                  background: "linear-gradient(135deg, #ede9fe, #fce7f3)",
                }}
              >
                <FloatBob amplitude={4} duration={2.2} style={{ display: "flex" }}>
                  <Rocket size={13} style={{ color: BRAND.orange }} />
                </FloatBob>
                Our Programs
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                <h2
                  className="leading-tight"
                  style={{
                    fontFamily: "'Fredoka One', cursive",
                    fontSize: "clamp(1.9rem, 4vw, 3rem)",
                    color: BRAND.navy,
                  }}
                >
                  Learning Programs for{" "}
                  <span
                    style={{
                      background: `linear-gradient(120deg, ${BRAND.sky}, ${BRAND.violet})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Every Skill Level
                  </span>
                </h2>
                <p
                  className="mt-3 text-[16px] text-gray-500 max-w-xl leading-relaxed"
                  style={{ fontWeight: 700 }}
                >
                  Skill-focused courses designed to help kids aged{" "}
                  <span style={{ color: BRAND.violet, fontWeight: 900 }}>6–17</span>{" "}
                  build future-ready technology skills — from absolute beginner to advanced practitioner.
                </p>
              </div>

              {/* Stats card */}
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
                }}
              >
                {[
                  { value: String(COURSES.length), label: "Courses",  color: BRAND.violet },
                  { value: "5",                    label: "Tracks",   color: BRAND.sky    },
                  { value: "12k+",                 label: "Students", color: BRAND.orange },
                ].map(({ value, label, color }, i, arr) => (
                  <React.Fragment key={label}>
                    <div className="text-center">
                      <p style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.5rem", color, lineHeight: 1 }}>
                        {value}
                      </p>
                      <p className="text-[11px] text-gray-400 mt-0.5 font-bold">{label}</p>
                    </div>
                    {i < arr.length - 1 && (
                      <div style={{ width: 1, height: 34, background: `${BRAND.violet}20` }} />
                    )}
                  </React.Fragment>
                ))}
              </motion.div>
            </div>

            {/* Dot row */}
            <div className="flex gap-2 mt-5">
              {[BRAND.violet, BRAND.sky, BRAND.orange, BRAND.mint, BRAND.rose].map((c, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{ background: c }}
                  animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 1.6 + i * 0.2, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </div>
          </motion.div>

          {/* ── TABS ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="flex flex-wrap gap-2.5 mb-8"
          >
            {TABS.map((tab) => {
              const isActive = active === tab.id;
              // ✅ Count from live data using cat field
              const count =
                tab.id === "all"
                  ? COURSES.length
                  : COURSES.filter((c) => c.cat === tab.id).length;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-[13px] font-normal border-2 transition-colors duration-200"
                  style={{
                    fontFamily: "'Fredoka One', cursive",
                    fontSize: "0.875rem",
                    background: isActive
                      ? `linear-gradient(135deg, ${tab.accent}, ${tab.accent}cc)`
                      : "rgba(255,255,255,0.85)",
                    color: isActive ? "white" : "#6b7280",
                    borderColor: isActive ? tab.accent : `${tab.accent}25`,
                    boxShadow: isActive
                      ? `0 6px 18px ${tab.accent}35`
                      : "0 2px 8px rgba(0,0,0,0.05)",
                  }}
                >
                  <tab.Icon size={18} strokeWidth={2} />
                  {tab.label}
                  <span
                    className="rounded-full w-5 h-5 flex items-center justify-center text-[14px] font-light"
                    style={{
                      background: isActive ? "rgba(255,255,255,0.25)" : `${tab.accent}15`,
                      color: isActive ? "white" : tab.accent,
                    }}
                  >
                    {count}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* ── Active label ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-3 mb-7"
            >
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${activeTab?.accent || BRAND.violet}, ${activeTab?.accent || BRAND.violet}bb)`,
                }}
              >
                {activeTab && <activeTab.Icon size={16} color="white" strokeWidth={2} />}
              </div>
              <span
                className="text-[14px] font-normal text-gray-700"
                style={{ fontFamily: "'Fredoka One', cursive" }}
              >
                {activeTab?.label}
              </span>
              <span
                className="rounded-full px-2.5 py-0.5 text-[11px] font-bold"
                style={{
                  background: `${activeTab?.accent || BRAND.violet}15`,
                  color: activeTab?.accent || BRAND.violet,
                }}
              >
                {filtered.length} course{filtered.length !== 1 ? "s" : ""}
              </span>
              <div
                className="flex-1 h-px"
                style={{ background: `${activeTab?.accent || BRAND.violet}25` }}
              />
            </motion.div>
          </AnimatePresence>

          {/* ── GRID ── */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((course, i) => (
                <CourseCard key={course.slug} course={course} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* ── Bottom CTA ── */}
          {active !== "all" && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mt-12"
            >
              <motion.button
                onClick={() => setActive("all")}
                whileHover={{ scale: 1.05, boxShadow: `0 14px 36px ${BRAND.violet}45` }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 380, damping: 20 }}
                className="inline-flex items-center gap-2.5 rounded-2xl px-8 py-4 font-bold text-white"
                style={{
                  background: `linear-gradient(135deg, ${BRAND.purple}, ${BRAND.violet})`,
                  boxShadow: `0 8px 28px ${BRAND.violet}38`,
                  fontFamily: "'Fredoka One', cursive",
                  fontSize: "1rem",
                }}
              >
                <FloatBob amplitude={4} duration={2} style={{ display: "flex" }}>
                  <Trophy size={16} />
                </FloatBob>
                Browse All Courses
                <ArrowRight size={15} strokeWidth={2.5} />
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}