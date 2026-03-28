// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Globe,
//   Brain,
//   ShieldCheck,
//   Cloud,
//   Terminal,
//   LayoutGrid,
//   Tag,
//   IndianRupee,
//   ArrowRight,
//   CalendarCheck,
//   Sparkles,
//   Star,
//   Zap,
//   Trophy,
// } from "lucide-react";

// /* ─────────────────────────────────────────
//    BRAND
// ───────────────────────────────────────── */
// const B = { blue: "#1642d6", light: "#1d8fff", orange: "#ff6900" };

// /* ─────────────────────────────────────────
//    TABS
// ───────────────────────────────────────── */
// const TABS = [
//   { id: "all",     label: "View All",            Icon: LayoutGrid,  accent: B.blue   },
//   { id: "web",     label: "Web Development",     Icon: Globe,       accent: B.blue   },
//   { id: "aiml",    label: "AI & Machine Learning", Icon: Brain,     accent: "#6d28d9" },
//   { id: "cyber",   label: "Cybersecurity",        Icon: ShieldCheck, accent: "#dc2626" },
//   { id: "cloud",   label: "Cloud Computing",      Icon: Cloud,       accent: "#0369a1" },
//   { id: "prog",    label: "Programming",          Icon: Terminal,    accent: B.orange  },
// ];

// /* ─────────────────────────────────────────
//    BADGE HELPERS
// ───────────────────────────────────────── */
// const LEVEL_META = {
//   Beginner:     { color: "#15803d", bg: "#dcfce7" },
//   Intermediate: { color: "#b45309", bg: "#fef9c3" },
//   Advanced:     { color: "#6d28d9", bg: "#ede9fe" },
// };

// /* ─────────────────────────────────────────
//    COURSES
// ───────────────────────────────────────── */
// const COURSES = [
//   /* ── Web Development ── */
//   {
//     id: "web-1", cat: "web",
//     num: "01",
//     title: "Web Development for Beginners",
//     subtitle: "HTML & CSS",
//     desc: "Learn how to build and design websites using HTML for structure and CSS for styling. Students will create responsive webpages and understand the fundamentals of modern web design.",
//     price: 34999,
//     tags: ["HTML", "CSS", "Beginner"],
//     level: "Beginner",
//     Icon: Globe,
//     accent: B.blue,
//     bg: "#dbeafe",
//     img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=640&h=400&fit=crop&q=80",
//   },
//   {
//     id: "web-2", cat: "web",
//     num: "02",
//     title: "Interactive Web Development",
//     subtitle: "HTML, CSS & JavaScript",
//     desc: "Build interactive and dynamic websites using HTML, CSS, and JavaScript. Students will learn how to add animations, events, and real-world functionality to web pages.",
//     price: 49999,
//     tags: ["HTML", "CSS", "JavaScript"],
//     level: "Intermediate",
//     Icon: Globe,
//     accent: B.light,
//     bg: "#e0f2fe",
//     img: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=640&h=400&fit=crop&q=80",
//   },
//   {
//     id: "web-3", cat: "web",
//     num: "03",
//     title: "Advanced Full Stack Web Development",
//     subtitle: "Full Stack • Web Apps",
//     desc: "Learn to build complete web applications from frontend to backend using modern web technologies including HTML, CSS, JavaScript, backend development, and database integration.",
//     price: 89999,
//     tags: ["Full Stack", "Web Apps", "Projects", "Portfolio"],
//     level: "Advanced",
//     Icon: Globe,
//     accent: "#6d28d9",
//     bg: "#ede9fe",
//     img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=640&h=400&fit=crop&q=80",
//     popular: true,
//   },
//   /* ── AI & ML ── */
//   {
//     id: "aiml-1", cat: "aiml",
//     num: "01",
//     title: "Data Analysis Foundations",
//     subtitle: "Excel • Python • Power BI",
//     desc: "Learn how to analyze and visualize data using industry tools like Excel, Python, SQL, and Power BI. Understand how data is collected, cleaned, analyzed, and converted into meaningful insights.",
//     price: 34999,
//     tags: ["Excel", "Python", "Power BI", "Beginner"],
//     level: "Beginner",
//     Icon: Brain,
//     accent: "#15803d",
//     bg: "#dcfce7",
//     img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&h=400&fit=crop&q=80",
//   },
//   {
//     id: "aiml-2", cat: "aiml",
//     num: "02",
//     title: "AI & Machine Learning Foundations",
//     subtitle: "Python • ML Algorithms",
//     desc: "Explore the fundamentals of Artificial Intelligence and Machine Learning using Python. Students learn data analysis, statistics, machine learning algorithms, and build beginner AI projects.",
//     price: 44999,
//     tags: ["Python", "Machine Learning", "AI"],
//     level: "Intermediate",
//     Icon: Brain,
//     accent: "#6d28d9",
//     bg: "#ede9fe",
//     img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=640&h=400&fit=crop&q=80",
//   },
//   {
//     id: "aiml-3", cat: "aiml",
//     num: "03",
//     title: "Full Stack — AI & Machine Learning",
//     subtitle: "Complete AI Workflow",
//     desc: "Master the complete AI & Data workflow from data analysis to machine learning and AI applications. Build real-world projects including data dashboards, predictive models, and AI applications.",
//     price: 89999,
//     tags: ["Python", "Machine Learning", "AI"],
//     level: "Advanced",
//     Icon: Brain,
//     accent: "#be185d",
//     bg: "#fce7f3",
//     img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=640&h=400&fit=crop&q=80",
//     popular: true,
//   },
//   /* ── Cyber Security ── */
//   {
//     id: "cyber-1", cat: "cyber",
//     num: "01",
//     title: "Cyber Security Foundations",
//     subtitle: "Ethical Hacking • Digital Safety",
//     desc: "Learn the fundamentals of Cyber Security, ethical hacking, and digital safety. Understand cyber threats, network security, encryption, and security tools while practicing real-world scenarios.",
//     price: 44999,
//     tags: ["Cyber Security", "Ethical Hacking", "Beginner"],
//     level: "Beginner",
//     Icon: ShieldCheck,
//     accent: "#dc2626",
//     bg: "#fee2e2",
//     img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=640&h=400&fit=crop&q=80",
//   },
//   /* ── Cloud Computing ── */
//   {
//     id: "cloud-1", cat: "cloud",
//     num: "01",
//     title: "Cloud Computing Foundations",
//     subtitle: "Cloud Infrastructure • DevOps",
//     desc: "Learn the fundamentals of Cloud Computing and modern cloud infrastructure. Explore cloud platforms, virtual machines, storage, networking, and deploy applications using real cloud services.",
//     price: 44999,
//     tags: ["Cloud Computing", "DevOps", "Beginner"],
//     level: "Beginner",
//     Icon: Cloud,
//     accent: "#0369a1",
//     bg: "#e0f2fe",
//     img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=640&h=400&fit=crop&q=80",
//   },
//   /* ── Programming ── */
//   {
//     id: "prog-1", cat: "prog",
//     num: "01",
//     title: "Python Programming Foundations",
//     subtitle: "Python • Problem Solving",
//     desc: "Learn the fundamentals of Python programming and problem-solving. Explore variables, conditions, loops, functions, object-oriented programming, and build practical Python applications.",
//     price: 34999,
//     tags: ["Python", "Programming", "Beginner"],
//     level: "Beginner",
//     Icon: Terminal,
//     accent: B.orange,
//     bg: "#ffedd5",
//     img: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=640&h=400&fit=crop&q=80",
//   },
//   {
//     id: "prog-2", cat: "prog",
//     num: "02",
//     title: "Java Programming Foundations",
//     subtitle: "Java • OOP Concepts",
//     desc: "Master the fundamentals of Java programming and object-oriented development. Learn programming logic, Java syntax, OOP concepts, and develop real-world applications using Java.",
//     price: 34999,
//     tags: ["Java", "OOP", "Programming"],
//     level: "Beginner",
//     Icon: Terminal,
//     accent: "#b45309",
//     bg: "#fef9c3",
//     img: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=640&h=400&fit=crop&q=80",
//   },
// ];

// /* ─────────────────────────────────────────
//    FORMAT PRICE
// ───────────────────────────────────────── */
// function formatINR(n) {
//   return n.toLocaleString("en-IN");
// }

// /* ─────────────────────────────────────────
//    COURSE CARD
// ───────────────────────────────────────── */
// function CourseCard({ course, index }) {
//   const lvl = LEVEL_META[course.level] || LEVEL_META.Beginner;

//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: 32 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 20, scale: 0.97 }}
//       transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
//       whileHover={{ y: -6 }}
//       className="group relative rounded-3xl overflow-hidden flex flex-col bg-white"
//       style={{
//         border: "1.5px solid rgba(0,0,0,0.07)",
//         boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
//       }}
//     >
//       {/* Popular badge */}
//       {course.popular && (
//         <div
//           className="absolute top-3 left-3 z-20 flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-extrabold text-white uppercase tracking-wide"
//           style={{ background: B.orange, boxShadow: `0 4px 12px ${B.orange}50` }}
//         >
//           <Star size={9} fill="white" />
//           Most Popular
//         </div>
//       )}

//       {/* Course number badge */}
//       <div
//         className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-extrabold text-white"
//         style={{ background: course.accent, boxShadow: `0 4px 12px ${course.accent}50` }}
//       >
//         {course.num}
//       </div>

//       {/* Image */}
//       <div
//         className="relative overflow-hidden"
//         style={{ height: 180 }}
//       >
//         <img
//           src={course.img}
//           alt={course.title}
//           loading="lazy"
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//         />
//         {/* colour tint overlay */}
//         <div
//           className="absolute inset-0 opacity-30"
//           style={{ background: `linear-gradient(135deg, ${course.accent}, transparent)` }}
//         />
//         {/* bottom fade */}
//         <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

//         {/* Icon chip on image */}
//         <div
//           className="absolute bottom-3 left-4 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
//           style={{ background: course.accent }}
//         >
//           <course.Icon size={20} color="white" strokeWidth={2} />
//         </div>
//       </div>

//       {/* Body */}
//       <div className="flex flex-col flex-1 gap-3 p-5 pt-4">

//         {/* Level + subtitle */}
//         <div className="flex items-center gap-2 flex-wrap">
//           <span
//             className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide"
//             style={{ color: lvl.color, background: lvl.bg }}
//           >
//             <Zap size={9} />
//             {course.level}
//           </span>
//           <span className="text-[11px] text-gray-400 font-medium">{course.subtitle}</span>
//         </div>

//         {/* Title */}
//         <h3
//           className="heading-oswald font-bold leading-tight text-gray-900 group-hover:text-[#1642d6] transition-colors duration-200"
//           style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)" }}
//         >
//           {course.title}
//         </h3>

//         {/* Description */}
//         <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-3 flex-1">
//           {course.desc}
//         </p>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-1.5">
//           {course.tags.map((tag) => (
//             <span
//               key={tag}
//               className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-semibold border"
//               style={{ color: course.accent, borderColor: `${course.accent}30`, background: `${course.accent}0d` }}
//             >
//               <Tag size={8} />
//               {tag}
//             </span>
//           ))}
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-100" />

//         {/* Price + CTAs */}
//         <div className="flex items-center justify-between gap-3">
//           <div className="flex items-baseline gap-0.5">
//             <IndianRupee size={14} style={{ color: B.orange }} strokeWidth={2.5} className="mb-0.5" />
//             <span
//               className="heading-oswald font-bold text-[1.15rem] leading-none"
//               style={{ color: B.orange }}
//             >
//               {formatINR(course.price)}
//             </span>
//           </div>

//           <div className="flex items-center gap-2">
//             <button
//               className="inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-[12px] font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95"
//               style={{ background: course.accent, boxShadow: `0 4px 14px ${course.accent}40` }}
//             >
//               Enroll Now
//               <ArrowRight size={12} />
//             </button>
//             <button
//               className="inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-[12px] font-bold transition-all duration-200 hover:scale-105 active:scale-95"
//               style={{ color: course.accent, borderColor: `${course.accent}40`, background: `${course.accent}08` }}
//             >
//               <CalendarCheck size={12} />
//               Demo
//             </button>
//           </div>
//         </div>

//       </div>

//       {/* Bottom accent bar */}
//       <div
//         className="h-1 w-full transition-all duration-300 opacity-0 group-hover:opacity-100"
//         style={{ background: `linear-gradient(90deg, ${course.accent}, ${B.orange})` }}
//       />
//     </motion.div>
//   );
// }

// /* ─────────────────────────────────────────
//    SECTION
// ───────────────────────────────────────── */
// export default function CourseCatalog() {
//   const [active, setActive] = useState("all");

//   const filtered = active === "all"
//     ? COURSES
//     : COURSES.filter((c) => c.cat === active);

//   const activeTab = TABS.find((t) => t.id === active);

//   return (
//     <section className="relative py-20 overflow-hidden" style={{ background: "#ffffff" }}>

//       {/* Background decoration */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
//         <div className="absolute rounded-full blur-3xl opacity-[0.06]"
//           style={{ width: 700, height: 700, top: "-200px", right: "-200px",
//             background: `radial-gradient(circle, ${B.blue}, transparent 70%)` }} />
//         <div className="absolute rounded-full blur-3xl opacity-[0.05]"
//           style={{ width: 500, height: 500, bottom: "-100px", left: "-100px",
//             background: `radial-gradient(circle, ${B.orange}, transparent 70%)` }} />
//         <div className="absolute inset-0 opacity-[0.025]"
//           style={{ backgroundImage: `radial-gradient(${B.blue} 1px, transparent 1px)`,
//             backgroundSize: "40px 40px" }} />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

//         {/* ── Header ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 22 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-2xl mx-auto mb-12"
//         >
//           <span
//             className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest border mb-5"
//             style={{ color: B.blue, borderColor: `${B.blue}30`, background: `${B.blue}0d` }}
//           >
//             <Sparkles size={11} style={{ color: B.orange }} />
//             Our Programs
//           </span>

//           <h2
//             className="heading-oswald uppercase font-bold leading-tight tracking-tight text-gray-900"
//             style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.9rem)" }}
//           >
//             Explore Our{" "}
//             <span style={{
//               background: `linear-gradient(105deg, ${B.light}, ${B.blue})`,
//               WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
//             }}>
//               Learning Programs
//             </span>
//           </h2>

//           <p className="mt-4 text-[15px] text-gray-500 leading-relaxed">
//             Engaging and skill-focused courses designed to help kids build
//             future-ready technology skills.
//           </p>
//         </motion.div>

//         {/* ── Filter tabs ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.15 }}
//           className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
//         >
//           {TABS.map((tab) => {
//             const isActive = active === tab.id;
//             return (
//               <button
//                 key={tab.id}
//                 onClick={() => setActive(tab.id)}
//                 className="inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-[13px] font-bold border transition-all duration-200 hover:scale-105 active:scale-95"
//                 style={{
//                   background:    isActive ? tab.accent         : "white",
//                   color:         isActive ? "white"            : "#6b7280",
//                   borderColor:   isActive ? tab.accent         : "#e5e7eb",
//                   boxShadow:     isActive ? `0 6px 20px ${tab.accent}35` : "0 2px 8px rgba(0,0,0,0.05)",
//                 }}
//               >
//                 <tab.Icon size={14} />
//                 {tab.label}
//                 {tab.id !== "all" && (
//                   <span
//                     className="rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-extrabold"
//                     style={{
//                       background: isActive ? "rgba(255,255,255,0.25)" : `${tab.accent}15`,
//                       color: isActive ? "white" : tab.accent,
//                     }}
//                   >
//                     {COURSES.filter((c) => c.cat === tab.id).length}
//                   </span>
//                 )}
//               </button>
//             );
//           })}
//         </motion.div>

//         {/* ── Active category label ── */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={active}
//             initial={{ opacity: 0, x: -10 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="flex items-center gap-3 mb-7"
//           >
//             <div
//               className="w-8 h-8 rounded-xl flex items-center justify-center"
//               style={{ background: activeTab?.accent || B.blue }}
//             >
//               {activeTab && <activeTab.Icon size={16} color="white" />}
//             </div>
//             <h3
//               className="heading-oswald font-bold text-gray-800"
//               style={{ fontSize: "1.15rem" }}
//             >
//               {activeTab?.label}
//             </h3>
//             <span
//               className="rounded-full px-2.5 py-0.5 text-[11px] font-extrabold"
//               style={{
//                 background: `${activeTab?.accent || B.blue}15`,
//                 color: activeTab?.accent || B.blue,
//               }}
//             >
//               {filtered.length} course{filtered.length !== 1 ? "s" : ""}
//             </span>
//             <div className="flex-1 h-px bg-gray-100" />
//           </motion.div>
//         </AnimatePresence>

//         {/* ── Course grid ── */}
//         <motion.div
//           layout
//           className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
//         >
//           <AnimatePresence mode="popLayout">
//             {filtered.map((course, i) => (
//               <CourseCard key={course.id} course={course} index={i} />
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {/* ── Bottom CTA ── */}
//         {active !== "all" && (
//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center mt-12"
//           >
//             <button
//               onClick={() => setActive("all")}
//               className="inline-flex items-center gap-2 rounded-2xl px-8 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95"
//               style={{
//                 background: `linear-gradient(135deg, ${B.light}, ${B.blue})`,
//                 boxShadow: `0 8px 28px ${B.blue}35`,
//               }}
//             >
//               <Trophy size={15} />
//               View All Courses
//               <ArrowRight size={14} />
//             </button>
//           </motion.div>
//         )}

//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
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
} from "lucide-react";

/* ─────────────────────────────────────────
   BRAND TOKENS
───────────────────────────────────────── */
const BRAND = {
  navy:   "#0f1b4c",
  blue:   "#1642d6",
  sky:    "#3b82f6",
  orange: "#f97316",
  light:  "#f8faff",
};

/* ─────────────────────────────────────────
   TABS
───────────────────────────────────────── */
const TABS = [
  { id: "all",   label: "All Courses",    Icon: LayoutGrid,  accent: BRAND.blue   },
  { id: "web",   label: "Web Dev",        Icon: Globe,       accent: "#1642d6"    },
  { id: "aiml",  label: "AI & ML",        Icon: Brain,       accent: "#7c3aed"    },
  { id: "cyber", label: "Cybersecurity",  Icon: ShieldCheck, accent: "#dc2626"    },
  { id: "cloud", label: "Cloud",          Icon: Cloud,       accent: "#0284c7"    },
  { id: "prog",  label: "Programming",    Icon: Terminal,    accent: "#ea580c"    },
];

const LEVEL_STYLE = {
  Beginner:     { dot: "#22c55e", label: "Beginner"     },
  Intermediate: { dot: "#f59e0b", label: "Intermediate" },
  Advanced:     { dot: "#8b5cf6", label: "Advanced"     },
};

/* ─────────────────────────────────────────
   COURSES DATA
───────────────────────────────────────── */
const COURSES = [
  {
    id: "web-1", cat: "web",
    title: "Web Development for Beginners",
    subtitle: "HTML & CSS Fundamentals",
    desc: "Build and design websites using HTML for structure and CSS for styling. Create responsive webpages and understand the foundations of modern web design.",
    price: 34999,
    level: "Beginner",
    duration: "8 weeks",
    students: "1.2k",
    Icon: Globe,
    accent: "#1642d6",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=640&h=400&fit=crop&q=80",
    tags: ["HTML", "CSS", "Responsive"],
  },
  {
    id: "web-2", cat: "web",
    title: "Interactive Web Development",
    subtitle: "HTML, CSS & JavaScript",
    desc: "Build interactive, dynamic websites using HTML, CSS, and JavaScript. Add animations, handle events, and implement real-world functionality to web pages.",
    price: 49999,
    level: "Intermediate",
    duration: "12 weeks",
    students: "980",
    Icon: Globe,
    accent: "#0284c7",
    img: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=640&h=400&fit=crop&q=80",
    tags: ["JavaScript", "DOM", "APIs"],
  },
  {
    id: "web-3", cat: "web",
    title: "Advanced Full Stack Development",
    subtitle: "Complete Web Applications",
    desc: "Build complete web applications from frontend to backend using modern technologies, including database integration and deployment workflows.",
    price: 89999,
    level: "Advanced",
    duration: "20 weeks",
    students: "750",
    Icon: Globe,
    accent: "#7c3aed",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=640&h=400&fit=crop&q=80",
    tags: ["Full Stack", "Backend", "Databases"],
    featured: true,
  },
  {
    id: "aiml-1", cat: "aiml",
    title: "Data Analysis Foundations",
    subtitle: "Excel · Python · Power BI",
    desc: "Analyze and visualize data using industry tools like Excel, Python, SQL, and Power BI. Understand how data is collected, cleaned, and converted into insights.",
    price: 34999,
    level: "Beginner",
    duration: "10 weeks",
    students: "1.5k",
    Icon: Brain,
    accent: "#059669",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&h=400&fit=crop&q=80",
    tags: ["Excel", "Python", "Power BI"],
  },
  {
    id: "aiml-2", cat: "aiml",
    title: "AI & Machine Learning Foundations",
    subtitle: "Python · ML Algorithms",
    desc: "Explore the fundamentals of AI and Machine Learning using Python. Learn data analysis, statistics, ML algorithms, and build beginner AI projects.",
    price: 44999,
    level: "Intermediate",
    duration: "14 weeks",
    students: "890",
    Icon: Brain,
    accent: "#7c3aed",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=640&h=400&fit=crop&q=80",
    tags: ["Python", "ML", "Neural Nets"],
    featured: true,
  },
  {
    id: "aiml-3", cat: "aiml",
    title: "Full Stack AI & Machine Learning",
    subtitle: "Complete AI Engineering",
    desc: "Master the complete AI workflow from data analysis to ML and real-world AI applications. Build dashboards, predictive models, and AI-powered tools.",
    price: 89999,
    level: "Advanced",
    duration: "22 weeks",
    students: "620",
    Icon: Brain,
    accent: "#db2777",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=640&h=400&fit=crop&q=80",
    tags: ["Deep Learning", "NLP", "MLOps"],
  },
  {
    id: "cyber-1", cat: "cyber",
    title: "Cybersecurity Foundations",
    subtitle: "Ethical Hacking · Digital Safety",
    desc: "Learn the fundamentals of Cybersecurity, ethical hacking, and digital safety. Understand cyber threats, encryption, network security, and security tools.",
    price: 44999,
    level: "Beginner",
    duration: "12 weeks",
    students: "1.1k",
    Icon: ShieldCheck,
    accent: "#dc2626",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=640&h=400&fit=crop&q=80",
    tags: ["Ethical Hacking", "Networks", "Encryption"],
  },
  {
    id: "cloud-1", cat: "cloud",
    title: "Cloud Computing Foundations",
    subtitle: "Cloud Infrastructure · DevOps",
    desc: "Learn cloud computing fundamentals and modern infrastructure. Explore platforms, virtual machines, networking, and deploy applications using real cloud services.",
    price: 44999,
    level: "Beginner",
    duration: "12 weeks",
    students: "870",
    Icon: Cloud,
    accent: "#0284c7",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=640&h=400&fit=crop&q=80",
    tags: ["AWS", "Docker", "DevOps"],
  },
  {
    id: "prog-1", cat: "prog",
    title: "Python Programming Foundations",
    subtitle: "Python · Problem Solving",
    desc: "Learn the fundamentals of Python programming. Explore variables, conditions, loops, functions, OOP, and build practical Python applications step by step.",
    price: 34999,
    level: "Beginner",
    duration: "10 weeks",
    students: "2.1k",
    Icon: Terminal,
    accent: "#ea580c",
    img: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=640&h=400&fit=crop&q=80",
    tags: ["Python", "Algorithms", "OOP"],
  },
  {
    id: "prog-2", cat: "prog",
    title: "Java Programming Foundations",
    subtitle: "Java · OOP Concepts",
    desc: "Master Java programming and object-oriented development. Learn Java syntax, OOP principles, and develop real-world applications using industry best practices.",
    price: 34999,
    level: "Beginner",
    duration: "10 weeks",
    students: "1.3k",
    Icon: Terminal,
    accent: "#b45309",
    img: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=640&h=400&fit=crop&q=80",
    tags: ["Java", "OOP", "Data Structures"],
  },
];

function formatINR(n) {
  return n.toLocaleString("en-IN");
}

/* ─────────────────────────────────────────
   COURSE CARD
───────────────────────────────────────── */
function CourseCard({ course, index }) {
  const lvl = LEVEL_STYLE[course.level] || LEVEL_STYLE.Beginner;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white"
      style={{
        border: "1px solid #e5e7eb",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: 172 }}>
        <img
          src={course.img}
          alt={course.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)" }}
        />

        {/* Featured badge */}
        {course.featured && (
          <div
            className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold text-white"
            style={{ background: "rgba(249,115,22,0.92)", backdropFilter: "blur(6px)" }}
          >
            <Sparkles size={10} strokeWidth={2.5} />
            Featured
          </div>
        )}

        {/* Icon */}
        <div
          className="absolute bottom-3 left-4 w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ background: course.accent, boxShadow: `0 4px 12px ${course.accent}55` }}
        >
          <course.Icon size={17} color="white" strokeWidth={2} />
        </div>

        {/* Level */}
        <div className="absolute bottom-3.5 right-4 flex items-center gap-1.5">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: lvl.dot, boxShadow: `0 0 0 3px ${lvl.dot}30` }}
          />
          <span className="text-[11px] font-semibold text-white/90">{lvl.label}</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">

        {/* Title + subtitle */}
        <div>
          <h3
            className="font-bold text-gray-900 leading-snug group-hover:text-blue-700 transition-colors duration-150"
            style={{ fontSize: "15px" }}
          >
            {course.title}
          </h3>
          <p className="text-[12px] text-gray-400 mt-0.5 font-medium">{course.subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-2 flex-1">
          {course.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {course.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
              style={{
                color: course.accent,
                background: `${course.accent}12`,
                border: `1px solid ${course.accent}25`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-[12px] text-gray-400">
          <span className="flex items-center gap-1.5">
            <Clock size={12} strokeWidth={2} />
            {course.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Users size={12} strokeWidth={2} />
            {course.students} enrolled
          </span>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "#f1f5f9" }} />

        {/* Price + CTAs */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-0.5">
            <IndianRupee size={13} strokeWidth={2.5} style={{ color: BRAND.orange, marginBottom: 1 }} />
            <span className="text-[18px] font-bold leading-none" style={{ color: BRAND.navy }}>
              {formatINR(course.price)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-[12px] font-semibold text-white transition-all duration-150 hover:opacity-90 active:scale-95"
              style={{ background: course.accent }}
            >
              Enroll
              <ArrowRight size={12} strokeWidth={2.5} />
            </button>
            <button
              className="flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-[12px] font-semibold transition-all duration-150 hover:bg-gray-50 active:scale-95"
              style={{ color: "#6b7280", borderColor: "#e5e7eb" }}
            >
              <CalendarDays size={12} strokeWidth={2} />
              Demo
            </button>
          </div>
        </div>
      </div>

      {/* Hover accent */}
      <motion.div
        className="h-[3px] w-full"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.25 }}
        style={{
          background: `linear-gradient(90deg, ${course.accent}, ${BRAND.orange})`,
          transformOrigin: "left",
        }}
      />
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────── */
export default function CourseCatalog() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? COURSES : COURSES.filter((c) => c.cat === active);
  const activeTab = TABS.find((t) => t.id === active);

  return (
    <section className="py-20 px-5 sm:px-8 lg:px-12" style={{ background: "#f8faff" }}>
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-widest"
              style={{ color: BRAND.blue, background: `${BRAND.blue}12`, border: `1px solid ${BRAND.blue}25` }}
            >
              <CheckCircle2 size={10} strokeWidth={2.5} />
              Our Programs
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2
                className="font-bold leading-tight tracking-tight text-3xl md:text-4xl xl:text-5xl"
                style={{  color: BRAND.navy }}
              >
                Learning programs for{" "}
                <span style={{ color: BRAND.blue }}>every skill level</span>
              </h2>
              <p className="mt-3 text-lg text-gray-500 max-w-xl leading-relaxed">
                Skill-focused courses designed to help students build future-ready technology skills — from absolute beginner to advanced practitioner.
              </p>
            </div>

            <div
              className="flex items-center gap-6 shrink-0 rounded-2xl px-5 py-3.5 text-center"
              style={{ background: "white", border: "1px solid #e5e7eb" }}
            >
              <div>
                <p className="text-[22px] font-bold" style={{ color: BRAND.navy }}>{COURSES.length}</p>
                <p className="text-[11px] text-gray-400 font-medium">Courses</p>
              </div>
              <div style={{ width: 1, height: 32, background: "#e5e7eb" }} />
              <div>
                <p className="text-[22px] font-bold" style={{ color: BRAND.navy }}>5</p>
                <p className="text-[11px] text-gray-400 font-medium">Tracks</p>
              </div>
              <div style={{ width: 1, height: 32, background: "#e5e7eb" }} />
              <div>
                <p className="text-[22px] font-bold" style={{ color: BRAND.navy }}>12k+</p>
                <p className="text-[11px] text-gray-400 font-medium">Students</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {TABS.map((tab) => {
            const isActive = active === tab.id;
            const count = tab.id === "all" ? COURSES.length : COURSES.filter((c) => c.cat === tab.id).length;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-[16px] font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-95"
                style={{
                  background:  isActive ? tab.accent : "white",
                  color:       isActive ? "white"    : "#6b7280",
                  border:      isActive ? `1px solid ${tab.accent}` : "1px solid #e5e7eb",
                  boxShadow:   isActive ? `0 4px 14px ${tab.accent}30` : "0 1px 3px rgba(0,0,0,0.05)",
                }}
              >
                <tab.Icon size={13} strokeWidth={2} />
                {tab.label}
                <span
                  className="rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold"
                  style={{
                    background: isActive ? "rgba(255,255,255,0.22)" : "#f1f5f9",
                    color:      isActive ? "white" : "#9ca3af",
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* ── Section label ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex items-center gap-3 mb-6"
          >
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: activeTab?.accent || BRAND.blue }}
            >
              {activeTab && <activeTab.Icon size={14} color="white" strokeWidth={2} />}
            </div>
            <span className="text-[14px] font-semibold text-gray-700">{activeTab?.label}</span>
            <span
              className="rounded-full px-2 py-0.5 text-[11px] font-semibold"
              style={{ background: `${activeTab?.accent || BRAND.blue}12`, color: activeTab?.accent || BRAND.blue }}
            >
              {filtered.length} course{filtered.length !== 1 ? "s" : ""}
            </span>
            <div className="flex-1 h-px" style={{ background: "#e5e7eb" }} />
          </motion.div>
        </AnimatePresence>

        {/* ── Grid ── */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Bottom CTA ── */}
        {active !== "all" && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mt-10"
          >
            <button
              onClick={() => setActive("all")}
              className="inline-flex items-center gap-2 rounded-xl px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-95"
              style={{
                background: BRAND.navy,
                boxShadow: `0 6px 24px rgba(15,27,76,0.25)`,
              }}
            >
              Browse all courses
              <ArrowRight size={14} strokeWidth={2.5} />
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}