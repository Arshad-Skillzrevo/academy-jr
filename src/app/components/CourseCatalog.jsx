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
//   IndianRupee,
//   ArrowRight,
//   CalendarDays,
//   Sparkles,
//   Users,
//   Clock,
//   CheckCircle2,
// } from "lucide-react";

// /* ─────────────────────────────────────────
//    BRAND TOKENS
// ───────────────────────────────────────── */
// const BRAND = {
//   navy:   "#0f1b4c",
//   blue:   "#1642d6",
//   sky:    "#3b82f6",
//   orange: "#f97316",
//   light:  "#f8faff",
// };

// /* ─────────────────────────────────────────
//    TABS
// ───────────────────────────────────────── */
// const TABS = [
//   { id: "all",   label: "All Courses",    Icon: LayoutGrid,  accent: BRAND.blue   },
//   { id: "web",   label: "Web Dev",        Icon: Globe,       accent: "#1642d6"    },
//   { id: "aiml",  label: "AI & ML",        Icon: Brain,       accent: "#7c3aed"    },
//   { id: "cyber", label: "Cybersecurity",  Icon: ShieldCheck, accent: "#dc2626"    },
//   { id: "cloud", label: "Cloud",          Icon: Cloud,       accent: "#0284c7"    },
//   { id: "prog",  label: "Programming",    Icon: Terminal,    accent: "#ea580c"    },
// ];

// const LEVEL_STYLE = {
//   Beginner:     { dot: "#22c55e", label: "Beginner"     },
//   Intermediate: { dot: "#f59e0b", label: "Intermediate" },
//   Advanced:     { dot: "#8b5cf6", label: "Advanced"     },
// };

// /* ─────────────────────────────────────────
//    COURSES DATA — complete
// ───────────────────────────────────────── */
// const COURSES = [
//   /* ── Web Dev ── */
//   {
//     id: "web-1", cat: "web",
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
//     id: "web-2", cat: "web",
//     title: "Interactive Web Development",
//     subtitle: "HTML, CSS & JavaScript",
//     grade: "Grade 9–12",
//     lessons: 30,
//     activities: "50+",
//     duration: "3–4 Months",
//     desc: "Build interactive, dynamic websites using HTML, CSS, and JavaScript. Add animations, handle events, and implement real-world functionality to web pages.",
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
//     id: "web-3", cat: "web",
//     title: "Advanced Full Stack Development",
//     subtitle: "Complete Web Applications",
//     grade: "Grade 9–12",
//     lessons: 70,
//     activities: "80+",
//     duration: "5–6 Months",
//     desc: "Build complete web applications from frontend to backend using modern technologies, including database integration and industry best practices.",
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

//   /* ── AI & ML ── */
//   {
//     id: "aiml-1", cat: "aiml",
//     title: "Data Analysis Foundations",
//     subtitle: "Excel · Python · Power BI",
//     grade: "Grade 9–12",
//     lessons: 47,
//     activities: "50+",
//     duration: "4–5 Months",
//     desc: "Analyze and visualize data using industry tools like Excel, Python, SQL, and Power BI. Understand how data is collected, cleaned, and converted into meaningful insights.",
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
//     id: "aiml-2", cat: "aiml",
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
//     id: "aiml-3", cat: "aiml",
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

//   /* ── Cyber Security ── */
//   {
//     id: "cyber-1", cat: "cyber",
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

//   /* ── Cloud Computing ── */
//   {
//     id: "cloud-1", cat: "cloud",
//     title: "Cloud Computing Foundations",
//     subtitle: "Cloud Infrastructure · DevOps",
//     grade: "Grade 9–12",
//     lessons: 17,
//     activities: "30+",
//     duration: "2–3 Months",
//     desc: "Learn cloud computing fundamentals and modern cloud infrastructure. Explore platforms, virtual machines, storage, networking, and deploy applications using real cloud services.",
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

//   /* ── Programming ── */
//   {
//     id: "prog-1", cat: "prog",
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
//     id: "prog-2", cat: "prog",
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
//    COURSE CARD
// ───────────────────────────────────────── */
// function CourseCard({ course, index }) {
//   const lvl = LEVEL_STYLE[course.level] || LEVEL_STYLE.Beginner;

//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: 24 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, scale: 0.97 }}
//       transition={{ duration: 0.35, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
//       whileHover={{ y: -4, transition: { duration: 0.2 } }}
//       className="group flex flex-col rounded-2xl overflow-hidden bg-white"
//       style={{
//         border: "1px solid #e5e7eb",
//         boxShadow: "0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
//       }}
//     >
//       {/* Image */}
//       <div className="relative overflow-hidden" style={{ height: 172 }}>
//         <img
//           src={course.img}
//           alt={course.title}
//           loading="lazy"
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//         <div
//           className="absolute inset-0"
//           style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)" }}
//         />

//         {/* Featured badge */}
//         {course.featured && (
//           <div
//             className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold text-white"
//             style={{ background: "rgba(249,115,22,0.92)", backdropFilter: "blur(6px)" }}
//           >
//             <Sparkles size={10} strokeWidth={2.5} />
//             Featured
//           </div>
//         )}

//         {/* Grade badge */}
//         <div
//           className="absolute top-3 right-3 rounded-full px-2.5 py-0.5 text-[10px] font-semibold text-white"
//           style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(6px)" }}
//         >
//           {course.grade}
//         </div>

//         {/* Icon */}
//         <div
//           className="absolute bottom-3 left-4 w-9 h-9 rounded-xl flex items-center justify-center"
//           style={{ background: course.accent, boxShadow: `0 4px 12px ${course.accent}55` }}
//         >
//           <course.Icon size={17} color="white" strokeWidth={2} />
//         </div>

//         {/* Level */}
//         <div className="absolute bottom-3.5 right-4 flex items-center gap-1.5">
//           <span
//             className="w-1.5 h-1.5 rounded-full"
//             style={{ background: lvl.dot, boxShadow: `0 0 0 3px ${lvl.dot}30` }}
//           />
//           <span className="text-[11px] font-semibold text-white/90">{lvl.label}</span>
//         </div>
//       </div>

//       {/* Body */}
//       <div className="flex flex-col flex-1 p-5 gap-3">

//         {/* Title + subtitle */}
//         <div>
//           <h3
//             className="font-bold text-gray-900 leading-snug group-hover:text-blue-700 transition-colors duration-150"
//             style={{ fontSize: "15px" }}
//           >
//             {course.title}
//           </h3>
//           <p className="text-[12px] text-gray-400 mt-0.5 font-medium">{course.subtitle}</p>
//         </div>

//         {/* Description */}
//         <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-2">
//           {course.desc}
//         </p>

//         {/* Achievements */}
//         <ul className="flex flex-col gap-1">
//           {course.achievements.slice(0, 3).map((item) => (
//             <li key={item} className="flex items-start gap-1.5 text-[12px] text-gray-500">
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
//               className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
//               style={{
//                 color: course.accent,
//                 background: `${course.accent}12`,
//                 border: `1px solid ${course.accent}25`,
//               }}
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         {/* Stats */}
//         <div className="flex items-center gap-4 text-[12px] text-gray-400">
//           <span className="flex items-center gap-1.5">
//             <Clock size={12} strokeWidth={2} />
//             {course.duration}
//           </span>
//           <span className="flex items-center gap-1.5">
//             <Users size={12} strokeWidth={2} />
//             {course.students} enrolled
//           </span>
//           <span className="flex items-center gap-1.5 ml-auto">
//             <span className="font-medium text-gray-500">{course.lessons} lessons</span>
//             <span className="text-gray-300">·</span>
//             <span className="font-medium text-gray-500">{course.activities} activities</span>
//           </span>
//         </div>

//         {/* Divider */}
//         <div style={{ height: "1px", background: "#f1f5f9" }} />

//         {/* Price + CTAs */}
//         <div className="flex items-center justify-between gap-2">
//           <div className="flex items-baseline gap-0.5">
//             <IndianRupee size={13} strokeWidth={2.5} style={{ color: BRAND.orange, marginBottom: 1 }} />
//             <span className="text-[18px] font-bold leading-none" style={{ color: BRAND.navy }}>
//               {formatINR(course.price)}
//             </span>
//           </div>

//           <div className="flex items-center gap-2">
//             <button
//               className="flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-[12px] font-semibold text-white transition-all duration-150 hover:opacity-90 active:scale-95"
//               style={{ background: course.accent }}
//             >
//               Enroll
//               <ArrowRight size={12} strokeWidth={2.5} />
//             </button>
//             <button
//               className="flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-[12px] font-semibold transition-all duration-150 hover:bg-gray-50 active:scale-95"
//               style={{ color: "#6b7280", borderColor: "#e5e7eb" }}
//             >
//               <CalendarDays size={12} strokeWidth={2} />
//               Demo
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Hover accent */}
//       <motion.div
//         className="h-[3px] w-full"
//         initial={{ scaleX: 0 }}
//         whileHover={{ scaleX: 1 }}
//         transition={{ duration: 0.25 }}
//         style={{
//           background: `linear-gradient(90deg, ${course.accent}, ${BRAND.orange})`,
//           transformOrigin: "left",
//         }}
//       />
//     </motion.div>
//   );
// }

// /* ─────────────────────────────────────────
//    MAIN SECTION
// ───────────────────────────────────────── */
// export default function CourseCatalog() {
//   const [active, setActive] = useState("all");

//   const filtered = active === "all" ? COURSES : COURSES.filter((c) => c.cat === active);
//   const activeTab = TABS.find((t) => t.id === active);

//   return (
//     <section className="py-20 px-5 sm:px-8 lg:px-12" style={{ background: "#f8faff" }}>
//       <div className="max-w-7xl mx-auto">

//         {/* ── Header ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.55 }}
//           className="mb-12"
//         >
//           <div className="flex items-center gap-2 mb-4">
//             <span
//               className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-widest"
//               style={{ color: BRAND.blue, background: `${BRAND.blue}12`, border: `1px solid ${BRAND.blue}25` }}
//             >
//               <CheckCircle2 size={10} strokeWidth={2.5} />
//               Our Programs
//             </span>
//           </div>

//           <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
//             <div>
//               <h2
//                 className="font-bold leading-tight tracking-tight text-3xl md:text-4xl xl:text-5xl"
//                 style={{ color: BRAND.navy }}
//               >
//                 Learning programs for{" "}
//                 <span style={{ color: BRAND.blue }}>every skill level</span>
//               </h2>
//               <p className="mt-3 text-lg text-gray-500 max-w-xl leading-relaxed">
//                 Skill-focused courses designed to help students build future-ready technology skills — from absolute beginner to advanced practitioner.
//               </p>
//             </div>

//             <div
//               className="flex items-center gap-6 shrink-0 rounded-2xl px-5 py-3.5 text-center"
//               style={{ background: "white", border: "1px solid #e5e7eb" }}
//             >
//               <div>
//                 <p className="text-[22px] font-bold" style={{ color: BRAND.navy }}>{COURSES.length}</p>
//                 <p className="text-[11px] text-gray-400 font-medium">Courses</p>
//               </div>
//               <div style={{ width: 1, height: 32, background: "#e5e7eb" }} />
//               <div>
//                 <p className="text-[22px] font-bold" style={{ color: BRAND.navy }}>5</p>
//                 <p className="text-[11px] text-gray-400 font-medium">Tracks</p>
//               </div>
//               <div style={{ width: 1, height: 32, background: "#e5e7eb" }} />
//               <div>
//                 <p className="text-[22px] font-bold" style={{ color: BRAND.navy }}>12k+</p>
//                 <p className="text-[11px] text-gray-400 font-medium">Students</p>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* ── Tabs ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.4, delay: 0.1 }}
//           className="flex flex-wrap gap-2 mb-8"
//         >
//           {TABS.map((tab) => {
//             const isActive = active === tab.id;
//             const count = tab.id === "all" ? COURSES.length : COURSES.filter((c) => c.cat === tab.id).length;
//             return (
//               <button
//                 key={tab.id}
//                 onClick={() => setActive(tab.id)}
//                 className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-[16px] font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-95"
//                 style={{
//                   background:  isActive ? tab.accent : "white",
//                   color:       isActive ? "white"    : "#6b7280",
//                   border:      isActive ? `1px solid ${tab.accent}` : "1px solid #e5e7eb",
//                   boxShadow:   isActive ? `0 4px 14px ${tab.accent}30` : "0 1px 3px rgba(0,0,0,0.05)",
//                 }}
//               >
//                 <tab.Icon size={16} strokeWidth={2} />
//                 {tab.label}
//                 <span
//                   className="rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold"
//                   style={{
//                     background: isActive ? "rgba(255,255,255,0.22)" : "#f1f5f9",
//                     color:      isActive ? "white" : "#9ca3af",
//                   }}
//                 >
//                   {count}
//                 </span>
//               </button>
//             );
//           })}
//         </motion.div>

//         {/* ── Section label ── */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={active}
//             initial={{ opacity: 0, x: -8 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.25 }}
//             className="flex items-center gap-3 mb-6"
//           >
//             <div
//               className="w-7 h-7 rounded-lg flex items-center justify-center"
//               style={{ background: activeTab?.accent || BRAND.blue }}
//             >
//               {activeTab && <activeTab.Icon size={14} color="white" strokeWidth={2} />}
//             </div>
//             <span className="text-[14px] font-semibold text-gray-700">{activeTab?.label}</span>
//             <span
//               className="rounded-full px-2 py-0.5 text-[11px] font-semibold"
//               style={{ background: `${activeTab?.accent || BRAND.blue}12`, color: activeTab?.accent || BRAND.blue }}
//             >
//               {filtered.length} course{filtered.length !== 1 ? "s" : ""}
//             </span>
//             <div className="flex-1 h-px" style={{ background: "#e5e7eb" }} />
//           </motion.div>
//         </AnimatePresence>

//         {/* ── Grid ── */}
//         <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           <AnimatePresence mode="popLayout">
//             {filtered.map((course, i) => (
//               <CourseCard key={course.id} course={course} index={i} />
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {/* ── Bottom CTA ── */}
//         {active !== "all" && (
//           <motion.div
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="flex justify-center mt-10"
//           >
//             <button
//               onClick={() => setActive("all")}
//               className="inline-flex items-center gap-2 rounded-xl px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-95"
//               style={{
//                 background: BRAND.navy,
//                 boxShadow: `0 6px 24px rgba(15,27,76,0.25)`,
//               }}
//             >
//               Browse all courses
//               <ArrowRight size={14} strokeWidth={2.5} />
//             </button>
//           </motion.div>
//         )}

//       </div>
//     </section>
//   );
// }

// __________________________________________________________________________________________________________________________________

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

// _____________________________________________________________________________________________________________________


"use client";

import React, { useEffect, useCallback, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Brain, Globe, Terminal,
  ArrowRight, CalendarDays,
  Users, Clock, Milestone, Activity,
  Zap, Trophy, Star, CheckCircle2, IndianRupee,
  ChevronLeft, ChevronRight, Award, Layers,
} from "lucide-react";

const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');
    .clamp2{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
    .clamp3{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
  `}</style>
);

const BRAND = {
  violet:"#7c3aed", purple:"#a855f7",
  sky:"#0ea5e9",    orange:"#f97316",
  amber:"#fbbf24",  rose:"#f43f5e",
  mint:"#10b981",   navy:"#0f1b4c",
};

const BUNDLES = [
  {
    slug:"ai-innovators",
    title:"AI Innovators",
    subtitle:"Code, Create & Build the Future with AI",
    description:"Learn Python, AI, Machine Learning & Generative AI with real-world projects. Get hands-on experience building tools that matter.",
    grade:"Grade 8–12",
    lessons:72, activities:"150+", duration:"9–10 Months", modules:28,
    price:129999, level:"Intermediate", students:"3.2k",
    Icon:Brain, accent:"#1d8fff", accentAlt:"#7c3aed",
    img:"https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80",
    tags:["Python","AI","Machine Learning","Generative AI"],
    achievements:[
      "Build real AI-powered applications",
      "Master Python & ML algorithms",
      "Work on Generative AI projects",
      "Get career-ready certification",
    ],
    certificates:["Python Programming","AI & Machine Learning","Generative AI"],
    featured:true,
  },
  {
    slug:"programming-masters",
    title:"Programming Masters",
    subtitle:"Code Like a Pro in 3 Languages",
    description:"Master Python, Java & C++ with strong logic building and real-world apps. Become a versatile developer ready for any challenge.",
    grade:"Grade 8–12",
    lessons:73, activities:"150+", duration:"9–10 Months", modules:33,
    price:119999, level:"Intermediate", students:"2.8k",
    Icon:Terminal, accent:"#6366f1", accentAlt:"#f97316",
    img:"https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=900&q=80",
    tags:["Python","Java","C++","OOP"],
    achievements:[
      "Master 3 programming languages",
      "Build logic-first problem solving",
      "Develop real-world applications",
      "Industry-level code quality",
    ],
    certificates:["Python Programming","Java Programming","C++ Programming"],
  },
  {
    slug:"tech-titans",
    title:"Tech Titans",
    subtitle:"Become a Complete Tech Expert",
    description:"Learn Web Dev, Python & Cyber Security with real-world projects and a capstone. The ultimate tech bundle for future innovators.",
    grade:"Grade 8–12",
    lessons:68, activities:"140+", duration:"9–10 Months", modules:22,
    price:124999, level:"Advanced", students:"1.9k",
    Icon:Globe, accent:"#10b981", accentAlt:"#0ea5e9",
    img:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80",
    tags:["Web Dev","Python","Cybersecurity"],
    achievements:[
      "Build full-stack web applications",
      "Learn ethical hacking basics",
      "Complete a capstone project",
      "Present to industry mentors",
    ],
    certificates:["Web Development","Python Programming","Cyber Security"],
  },
];

const LEVEL_STYLE = {
  Beginner:     { dot:"#22c55e", bg:"#dcfce7", color:"#15803d" },
  Intermediate: { dot:"#f59e0b", bg:"#fef3c7", color:"#b45309" },
  Advanced:     { dot:"#8b5cf6", bg:"#ede9fe", color:"#6d28d9" },
};

function formatINR(n){ return n.toLocaleString("en-IN"); }

function FloatBob({ children, delay=0, amplitude=6, duration=3.2, style, className }){
  return (
    <motion.div className={className} style={style}
      animate={{ y:[0,-amplitude,0] }}
      transition={{ duration, delay, repeat:Infinity, ease:"easeInOut", repeatType:"mirror" }}>
      {children}
    </motion.div>
  );
}

function SpinningStar({ size=13, color, top, left, right, bottom, delay=0 }){
  return (
    <motion.div className="absolute pointer-events-none z-[2]" style={{ top,left,right,bottom }}
      animate={{ rotate:360, scale:[1,1.3,1] }}
      transition={{
        rotate:{ duration:9, repeat:Infinity, ease:"linear", delay },
        scale:{ duration:2.5, repeat:Infinity, ease:"easeInOut", delay },
      }}>
      <Star size={size} fill={color} color={color} />
    </motion.div>
  );
}

/* ─── CARD (horizontal layout like the screenshot) ─── */
function BundleCard({ bundle, isCenter, isHovered, onHover, onLeave, onClick }){
  const lvl = LEVEL_STYLE[bundle.level] || LEVEL_STYLE.Intermediate;
  const highlighted = isCenter || isHovered;

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={!isCenter ? onClick : undefined}
      style={{
        position:"relative",
        width:"100%",
        height:"100%",
        borderRadius:24,
        overflow:"hidden",
        background:"rgba(255,255,255,0.96)",
        border:`2px solid ${highlighted ? bundle.accent+"45" : bundle.accent+"18"}`,
        boxShadow: highlighted
          ? `0 20px 60px ${bundle.accent}30, 0 4px 16px rgba(0,0,0,0.10)`
          : `0 2px 12px rgba(0,0,0,0.06)`,
        cursor: isCenter ? "default" : "pointer",
        fontFamily:"'Nunito', sans-serif",
        transition:"box-shadow 0.3s ease, border-color 0.3s ease",
        display:"flex",
        flexDirection:"row",
      }}
    >
      {/* LEFT: Image column */}
      <div style={{ position:"relative", width:"42%", flexShrink:0, overflow:"hidden" }}>
        <img src={bundle.img} alt={bundle.title}
          style={{ width:"100%", height:"100%", objectFit:"cover", display:"block",
            transition:"transform 0.5s ease",
            transform: highlighted ? "scale(1.04)" : "scale(1)",
          }}/>
        {/* Overlays */}
        <div style={{ position:"absolute", inset:0, background:`linear-gradient(135deg, ${bundle.accent}55 0%, transparent 55%)` }}/>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)" }}/>
        {/* Right fade into card */}
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right, transparent 60%, rgba(255,255,255,0.96) 100%)" }}/>

        {/* Featured badge */}
        {bundle.featured && (
          <div style={{
            position:"absolute", top:14, left:14,
            display:"inline-flex", alignItems:"center", gap:5,
            borderRadius:99, padding:"4px 12px",
            background:`linear-gradient(135deg, ${BRAND.orange}, ${BRAND.rose})`,
            boxShadow:`0 4px 12px ${BRAND.orange}55`,
            fontSize:11, fontWeight:700, color:"#fff",
            fontFamily:"'Fredoka One', cursive",
          }}>
            <Star size={10} fill="white" color="white"/> Featured Bundle
          </div>
        )}

        {/* Grade */}
        <div style={{
          position:"absolute", top:14, right:14,
          borderRadius:99, padding:"3px 10px",
          background:"rgba(0,0,0,0.42)", backdropFilter:"blur(6px)",
          fontSize:11, fontWeight:700, color:"#fff",
        }}>
          {bundle.grade}
        </div>

        {/* Icon + Level — bottom left */}
        <div style={{ position:"absolute", bottom:14, left:14, display:"flex", alignItems:"center", gap:8 }}>
          <div style={{
            width:36, height:36, borderRadius:12,
            display:"flex", alignItems:"center", justifyContent:"center",
            background:bundle.accent, boxShadow:`0 4px 14px ${bundle.accent}55`,
          }}>
            <bundle.Icon size={18} color="white" strokeWidth={2}/>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:5 }}>
            <div style={{ width:7, height:7, borderRadius:"50%", background:lvl.dot,
              animation: highlighted ? "pulse 1.8s infinite" : "none" }}/>
            <span style={{ fontSize:11, fontWeight:700, color:"#fff" }}>{bundle.level}</span>
          </div>
        </div>

        {/* Stats — bottom right */}
        <div style={{ position:"absolute", bottom:14, right:14, display:"flex", gap:6 }}>
          {[
            { icon:<Clock size={9}/>, val:bundle.duration },
            { icon:<Users size={9}/>, val:`${bundle.students} enrolled` },
          ].map(({ icon,val })=>(
            <span key={val} style={{
              display:"inline-flex", alignItems:"center", gap:4,
              fontSize:9, fontWeight:700, color:"#fff",
              padding:"3px 8px", borderRadius:99,
              background:"rgba(0,0,0,0.45)", backdropFilter:"blur(5px)",
            }}>
              {icon} {val}
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT: Content column */}
      <div style={{ flex:1, display:"flex", flexDirection:"column", padding:"22px 22px 18px 18px", gap:10, minWidth:0 }}>

        {/* Level pill + subtitle */}
        <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
          <span style={{
            display:"inline-flex", alignItems:"center", gap:4,
            borderRadius:99, padding:"2px 9px",
            fontSize:10, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase",
            color:lvl.color, background:lvl.bg,
          }}>
            <Zap size={8}/> {bundle.level}
          </span>
          <span style={{ fontSize:11, color:"#9ca3af", fontWeight:700 }}>{bundle.subtitle}</span>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily:"'Fredoka One', cursive",
          fontSize:"1.35rem", color:"#111827", lineHeight:1.2, margin:0,
        }}>
          {bundle.title}
        </h3>

        {/* Description */}
        <p className="clamp2" style={{ fontSize:13, color:"#6b7280", lineHeight:1.6, fontWeight:600, margin:0 }}>
          {bundle.description}
        </p>

        {/* 4-stat grid */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:6 }}>
          {[
            { icon:<Milestone size={13}/>, label:"Lessons",    val:bundle.lessons },
            { icon:<Activity size={13}/>,  label:"Activities", val:bundle.activities },
            { icon:<Clock size={13}/>,     label:"Duration",   val:bundle.duration },
            { icon:<Users size={13}/>,     label:"Enrolled",   val:bundle.students },
          ].map(({ icon,label,val })=>(
            <div key={label} style={{
              display:"flex", flexDirection:"column", alignItems:"center",
              padding:"8px 4px", borderRadius:12, textAlign:"center",
              background:`${bundle.accent}0d`, border:`1px solid ${bundle.accent}22`,
            }}>
              <span style={{ color:bundle.accent }}>{icon}</span>
              <span style={{ fontFamily:"'Fredoka One', cursive", fontSize:"0.9rem", color:"#111827", lineHeight:1.1, marginTop:2 }}>{val}</span>
              <span style={{ fontSize:9, color:"#9ca3af", fontWeight:700, marginTop:1 }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Achievements - 2 col */}
        <ul style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4px 12px", margin:0, padding:0, listStyle:"none" }}>
          {bundle.achievements.map((item)=>(
            <li key={item} style={{ display:"flex", alignItems:"flex-start", gap:6, fontSize:12, color:"#4b5563", fontWeight:700 }}>
              <CheckCircle2 size={12} strokeWidth={2.5} style={{ color:bundle.accent, flexShrink:0, marginTop:1 }}/>
              <span style={{ lineHeight:1.4 }}>{item}</span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
          {bundle.tags.map((tag)=>(
            <span key={tag} style={{
              borderRadius:99, padding:"2px 9px", fontSize:11, fontWeight:700,
              color:bundle.accent, background:`${bundle.accent}10`,
              border:`1px solid ${bundle.accent}28`,
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height:1, background:`${bundle.accent}18`, margin:"2px 0" }}/>

        {/* Price + CTA */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:10 }}>
          <div>
            <div style={{ fontSize:10, color:"#9ca3af", fontWeight:700, marginBottom:2 }}>Bundle Price</div>
            <div style={{ display:"flex", alignItems:"center", gap:2 }}>
              <IndianRupee size={13} strokeWidth={2.5} style={{ color:BRAND.orange }}/>
              <span style={{ fontFamily:"'Fredoka One', cursive", fontSize:"1.25rem", color:BRAND.navy, lineHeight:1 }}>
                {formatINR(bundle.price)}
              </span>
            </div>
          </div>
          <div style={{ display:"flex", gap:8 }}>
            <motion.button whileHover={{ scale:1.06 }} whileTap={{ scale:0.95 }}
              style={{
                display:"inline-flex", alignItems:"center", gap:6,
                padding:"9px 18px", borderRadius:12, border:"none",
                fontSize:13, fontWeight:700, color:"#fff", cursor:"pointer",
                background:`linear-gradient(135deg, ${bundle.accent}, ${bundle.accentAlt})`,
                boxShadow:`0 4px 16px ${bundle.accent}45`,
                fontFamily:"'Fredoka One', cursive",
              }}>
              Enroll Now <ArrowRight size={13} strokeWidth={2.5}/>
            </motion.button>
            <motion.button whileHover={{ scale:1.06 }} whileTap={{ scale:0.95 }}
              style={{
                display:"inline-flex", alignItems:"center", gap:6,
                padding:"9px 16px", borderRadius:12, cursor:"pointer",
                fontSize:13, fontWeight:700,
                color:bundle.accent,
                border:`2px solid ${bundle.accent}35`,
                background:`${bundle.accent}08`,
                fontFamily:"'Fredoka One', cursive",
              }}>
              <CalendarDays size={13} strokeWidth={2}/> Demo
            </motion.button>
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div style={{
        position:"absolute", bottom:0, left:0, right:0, height:3,
        background:`linear-gradient(90deg, ${bundle.accent}, ${bundle.accentAlt}, ${BRAND.orange})`,
        opacity: highlighted ? 1 : 0.4,
        transition:"opacity 0.3s ease",
      }}/>
    </div>
  );
}

/* ─── SLIDE WRAPPER ─── */
function Slide({ bundle, position, active, hoveredPos, setHoveredPos, goTo }){
  // position: -1 left, 0 center, 1 right
  const isCenter = position === 0;
  const isHovered = hoveredPos === position && !isCenter;

  // Scale/opacity based on state
  let scale = isCenter ? 1 : 0.82;
  let opacity = isCenter ? 1 : 0.35;
  let zIndex = isCenter ? 30 : 10;
  let translateX = position === -1 ? "26%" : position === 1 ? "-26%" : "0%";

  if(isHovered){
    scale = 0.9;
    opacity = 0.75;
    zIndex = 20;
  }

  return (
    <motion.div
      animate={{ scale, opacity, x: translateX }}
      transition={{ type:"spring", stiffness:260, damping:28 }}
      style={{
        flex:1, minWidth:0, zIndex,
        position:"relative",
      }}
    >
      <BundleCard
        bundle={bundle}
        isCenter={isCenter}
        isHovered={isHovered}
        onHover={()=> !isCenter && setHoveredPos(position)}
        onLeave={()=> setHoveredPos(null)}
        onClick={()=> goTo(active + position)}
      />
    </motion.div>
  );
}

/* ─── MAIN ─── */
export default function BundleSection(){
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hoveredPos, setHoveredPos] = useState(null);
  const N = BUNDLES.length;

  const goTo = useCallback((idx)=>{
    setActive(((idx % N) + N) % N);
  }, [N]);

  const next = useCallback(()=> goTo(active + 1), [active, goTo]);
  const prev = useCallback(()=> goTo(active - 1), [active, goTo]);

  useEffect(()=>{
    if(paused) return;
    const id = setInterval(next, 3800);
    return ()=> clearInterval(id);
  }, [paused, next]);

  const activeBundle = BUNDLES[active];
  const leftIdx  = (active - 1 + N) % N;
  const rightIdx = (active + 1) % N;

  return (
    <>
      <FontLoader/>
      <style>{`
        @keyframes pulse {
          0%,100%{transform:scale(1);opacity:1}
          50%{transform:scale(1.5);opacity:0.4}
        }
      `}</style>
      <section
        onMouseEnter={()=> setPaused(true)}
        onMouseLeave={()=>{ setPaused(false); setHoveredPos(null); }}
        className="relative py-20 overflow-hidden"
        style={{
          background:"linear-gradient(160deg,#f5f0ff 0%,#fff0f7 35%,#f0f9ff 70%,#f0fff8 100%)",
          fontFamily:"'Nunito', sans-serif",
        }}
      >
        {/* Dotted bg */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{
            backgroundImage:`radial-gradient(circle, ${BRAND.violet} 1.5px, transparent 1.5px)`,
            backgroundSize:"28px 28px", opacity:0.038,
          }}/>

        {/* Wavy top */}
        <div className="absolute top-0 left-0 w-full pointer-events-none z-[4]" style={{ lineHeight:0 }}>
          <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,0 L0,0 Z" fill="#fff"/>
          </svg>
        </div>
        {/* Wavy bottom */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none z-[4]" style={{ lineHeight:0 }}>
          <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z" fill="#fff"/>
          </svg>
        </div>

        {/* Blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div style={{ position:"absolute", top:-100, right:-100, width:500, height:500, borderRadius:"50%", background:`radial-gradient(circle, ${BRAND.violet}1a, transparent 70%)`, filter:"blur(60px)" }}/>
          <div style={{ position:"absolute", bottom:-80, left:-80, width:420, height:420, borderRadius:"50%", background:`radial-gradient(circle, ${BRAND.orange}18, transparent 70%)`, filter:"blur(55px)" }}/>
          <div style={{ position:"absolute", top:"40%", left:"45%", width:300, height:300, borderRadius:"50%", background:`radial-gradient(circle, ${BRAND.sky}14, transparent 70%)`, filter:"blur(50px)" }}/>
        </div>

        {/* Stars */}
        <div className="hidden lg:block" aria-hidden="true">
          <SpinningStar size={15} color={BRAND.amber}  top="8%"  left="3%"  delay={0}  />
          <SpinningStar size={11} color={BRAND.rose}   top="85%" left="5%"  delay={1}  />
          <SpinningStar size={13} color={BRAND.violet} top="6%"  right="4%" delay={0.5}/>
          <SpinningStar size={10} color={BRAND.sky}    top="88%" right="5%" delay={1.5}/>
          <SpinningStar size={9}  color={BRAND.mint}   top="50%" left="1%"  delay={2}  />
          <SpinningStar size={12} color={BRAND.orange} top="48%" right="2%" delay={0.8}/>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">

          {/* ── HEADER ── */}
          <motion.div
            initial={{ opacity:0, y:24 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.65, ease:[0.22,1,0.36,1] }}
            className="mb-10"
          >
            <div className="flex justify-center sm:justify-start mb-4">
              <span className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-bold uppercase tracking-widest border-2"
                style={{ color:BRAND.violet, borderColor:`${BRAND.violet}38`, background:"linear-gradient(135deg,#ede9fe,#fce7f3)" }}>
                <FloatBob amplitude={4} duration={2.2} style={{ display:"flex" }}>
                  <Trophy size={13} style={{ color:BRAND.orange }}/>
                </FloatBob>
                Bundle Programs
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h2 className="leading-tight"
                  style={{ fontFamily:"'Fredoka One', cursive", fontSize:"clamp(1.9rem,4vw,3rem)", color:BRAND.navy }}>
                  All-in-One Learning{" "}
                  <span style={{
                    background:`linear-gradient(120deg, ${BRAND.sky}, ${BRAND.violet})`,
                    WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
                  }}>
                    Bundles
                  </span>
                </h2>
                <p className="mt-3 text-[16px] text-gray-500 max-w-xl leading-relaxed font-bold">
                  Power-packed programs combining{" "}
                  <span style={{ color:BRAND.violet, fontWeight:900 }}>multiple tracks</span>{" "}
                  for maximum impact — designed for students who want it all.
                </p>
              </div>

              <motion.div
                initial={{ opacity:0, scale:0.9 }}
                whileInView={{ opacity:1, scale:1 }}
                viewport={{ once:true }}
                transition={{ type:"spring", stiffness:300, damping:22, delay:0.2 }}
                className="flex items-center gap-5 shrink-0 rounded-3xl px-6 py-4 border-2"
                style={{
                  background:"rgba(255,255,255,0.85)",
                  borderColor:`${BRAND.violet}20`,
                  boxShadow:`0 8px 28px ${BRAND.violet}10`,
                  backdropFilter:"blur(12px)",
                }}>
                {[
                  { value:String(N), label:"Bundles",  color:BRAND.violet },
                  { value:"9–10",   label:"Months",   color:BRAND.sky    },
                  { value:"8k+",    label:"Students", color:BRAND.orange },
                ].map(({ value,label,color },i,arr)=>(
                  <React.Fragment key={label}>
                    <div className="text-center">
                      <p style={{ fontFamily:"'Fredoka One', cursive", fontSize:"1.5rem", color, lineHeight:1 }}>{value}</p>
                      <p className="text-[11px] text-gray-400 mt-0.5 font-bold">{label}</p>
                    </div>
                    {i<arr.length-1 && <div style={{ width:1, height:34, background:`${BRAND.violet}20` }}/>}
                  </React.Fragment>
                ))}
              </motion.div>
            </div>

            <div className="flex gap-2 mt-5">
              {[BRAND.violet,BRAND.sky,BRAND.orange,BRAND.mint,BRAND.rose].map((c,i)=>(
                <motion.div key={i} className="w-2 h-2 rounded-full" style={{ background:c }}
                  animate={{ scale:[1,1.6,1], opacity:[0.6,1,0.6] }}
                  transition={{ duration:1.6+i*0.2, repeat:Infinity, delay:i*0.15 }}/>
              ))}
            </div>
          </motion.div>

          {/* ── CAROUSEL ── */}
          <div style={{ position:"relative", width:"100%", overflow:"hidden" }}>
            {/* Soft edge masks */}
            <div style={{
              position:"absolute", top:0, left:0, width:"5%", height:"100%",
              background:"linear-gradient(to right, #f5f0ff 0%, transparent 100%)",
              zIndex:40, pointerEvents:"none",
            }}/>
            <div style={{
              position:"absolute", top:0, right:0, width:"5%", height:"100%",
              background:"linear-gradient(to left, #f0fff8 0%, transparent 100%)",
              zIndex:40, pointerEvents:"none",
            }}/>

            {/* Cards container — negative margin to allow overlap bleed */}
            <div style={{
              display:"flex",
              alignItems:"stretch",
              margin:"0 -6%",
              padding:"28px 6% 40px",
              position:"relative",
            }}>
              <Slide
                bundle={BUNDLES[leftIdx]}
                position={-1}
                active={active}
                hoveredPos={hoveredPos}
                setHoveredPos={setHoveredPos}
                goTo={goTo}
              />
              <Slide
                bundle={BUNDLES[active]}
                position={0}
                active={active}
                hoveredPos={hoveredPos}
                setHoveredPos={setHoveredPos}
                goTo={goTo}
              />
              <Slide
                bundle={BUNDLES[rightIdx]}
                position={1}
                active={active}
                hoveredPos={hoveredPos}
                setHoveredPos={setHoveredPos}
                goTo={goTo}
              />
            </div>
          </div>

          {/* ── NAV ── */}
          <div className="flex items-center justify-center gap-5" style={{ marginTop:-8 }}>
            <motion.button onClick={prev} whileHover={{ scale:1.1 }} whileTap={{ scale:0.92 }}
              className="w-10 h-10 rounded-2xl flex items-center justify-center border-2"
              style={{
                background:"rgba(255,255,255,0.9)",
                borderColor:`${activeBundle.accent}30`,
                color:activeBundle.accent,
                boxShadow:"0 2px 10px rgba(0,0,0,0.08)",
                cursor:"pointer",
              }}>
              <ChevronLeft size={18} strokeWidth={2.5}/>
            </motion.button>

            <div className="flex items-center gap-2.5">
              {BUNDLES.map((b,i)=>(
                <motion.button key={b.slug} onClick={()=> setActive(i)}
                  whileHover={{ scale:1.3 }} whileTap={{ scale:0.9 }}
                  animate={{ width:i===active?28:8, background:i===active?b.accent:"#d1d5db" }}
                  transition={{ type:"spring", stiffness:400, damping:22 }}
                  style={{ height:8, borderRadius:99, border:"none", cursor:"pointer", padding:0 }}/>
              ))}
            </div>

            <motion.button onClick={next} whileHover={{ scale:1.1 }} whileTap={{ scale:0.92 }}
              className="w-10 h-10 rounded-2xl flex items-center justify-center text-white"
              style={{
                background:`linear-gradient(135deg, ${activeBundle.accent}, ${activeBundle.accentAlt})`,
                boxShadow:`0 4px 16px ${activeBundle.accent}45`,
                border:"none", cursor:"pointer",
              }}>
              <ChevronRight size={18} strokeWidth={2.5}/>
            </motion.button>
          </div>

          <p className="text-center text-[11px] text-gray-400 font-bold mt-3">
            Auto-playing · Hover to pause · Hover side cards to preview · Click to focus
          </p>
        </div>
      </section>
    </>
  );
}