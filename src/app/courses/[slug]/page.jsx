// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { getCourseBySlug } from "../../data/courses";
// import { notFound } from "next/navigation";
// import {
//   Zap,
//   BookOpen,
//   Activity,
//   Trophy,
//   CheckCircle,
//   ChevronDown,
//   ChevronUp,
//   Plus,
//   Minus,
//   ArrowRight,
//   GraduationCap,
//   Star,
//   Award,
//   Layers,
//   Code2,
//   Cpu,
//   Sparkles,
//   LayoutGrid,
//   FlaskConical,
//   Target,
//   Rocket,
//   ShieldCheck,
//   PlayCircle,
//   Phone,
// } from "lucide-react";

// // ─── Reusable CTA Row ────────────────────────────────────────────────────────
// function CTARow() {
//   return (
//     <div className="flex flex-wrap justify-center gap-4 mt-8">
//       <button className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#1d8fff] text-white font-semibold text-sm hover:bg-[#0e72e0] hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5 transition-all duration-200 shadow-md">
//         <PlayCircle className="w-4 h-4" />
//         Try a Free Demo Class
//       </button>
//       <button className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-orange-500 text-orange-500 font-semibold text-sm hover:bg-orange-500 hover:text-white hover:-translate-y-0.5 transition-all duration-200">
//         <Rocket className="w-4 h-4" />
//         Start Learning Today
//       </button>
//     </div>
//   );
// }

// // ─── Star Rating ─────────────────────────────────────────────────────────────
// function Stars({ count = 5 }) {
//   return (
//     <div className="flex gap-0.5">
//       {Array.from({ length: count }).map((_, i) => (
//         <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
//       ))}
//     </div>
//   );
// }

// // ─── FAQ Item ─────────────────────────────────────────────────────────────────
// function FAQItem({ q, a }) {
//   const [open, setOpen] = useState(false);
//   return (
//     <div
//       className={`border rounded-xl overflow-hidden transition-all duration-300 ${
//         open
//           ? "border-[#1d8fff] shadow-md shadow-blue-100"
//           : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
//       }`}
//     >
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-full flex justify-between items-center px-5 py-4 text-left gap-4 group"
//         aria-expanded={open}
//       >
//         <span className="font-semibold text-gray-800 text-sm leading-snug group-hover:text-[#1d8fff] transition-colors duration-150">
//           {q}
//         </span>
//         <span
//           className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
//             open
//               ? "bg-[#1d8fff] text-white rotate-180"
//               : "bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-[#1d8fff]"
//           }`}
//         >
//           <ChevronDown className="w-4 h-4" />
//         </span>
//       </button>
//       <div
//         className={`overflow-hidden transition-all duration-300 ${
//           open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
//           {a}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Module Accordion ────────────────────────────────────────────────────────
// function ModuleCard({ mod, defaultOpen = false }) {
//   const [open, setOpen] = useState(defaultOpen);
//   return (
//     <div
//       className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
//         open
//           ? "border-[#1d8fff]/40 shadow-md shadow-blue-50"
//           : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
//       }`}
//     >
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-full flex items-center justify-between px-6 py-5 bg-white hover:bg-blue-50/50 transition-colors duration-200 group"
//         aria-expanded={open}
//       >
//         <div className="flex items-center gap-4">
//           <span
//             className={`w-11 h-11 rounded-xl font-bold text-sm flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
//               open
//                 ? "bg-[#1d8fff] text-white shadow-md shadow-blue-200"
//                 : "bg-[#1d8fff]/10 text-[#1d8fff] group-hover:bg-[#1d8fff]/20"
//             }`}
//           >
//             {mod.id}
//           </span>
//           <span className="font-semibold text-gray-800 text-left text-sm md:text-base group-hover:text-[#1d8fff] transition-colors duration-150">
//             Module {mod.id} – {mod.title}
//           </span>
//         </div>
//         <span
//           className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
//             open
//               ? "bg-[#1d8fff] text-white"
//               : "bg-gray-100 text-gray-400 group-hover:bg-blue-50 group-hover:text-[#1d8fff]"
//           }`}
//         >
//           <ChevronDown
//             className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
//           />
//         </span>
//       </button>
//       <div
//         className={`overflow-hidden transition-all duration-300 ${
//           open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="divide-y divide-gray-100 bg-gray-50/80">
//           {mod.lectures.map((lec) => (
//             <div
//               key={lec.num}
//               className="px-6 py-4 flex gap-4 items-start hover:bg-blue-50/40 transition-colors duration-150"
//             >
//               <span className="mt-0.5 w-8 h-8 rounded-lg bg-[#1d8fff] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 shadow-sm">
//                 {lec.num}
//               </span>
//               <div>
//                 <p className="font-semibold text-sm text-gray-800">{lec.title}</p>
//                 <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{lec.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Journey Card Icon Map ────────────────────────────────────────────────────
// const JOURNEY_ICON_MAP = {
//   checklist: CheckCircle,
//   trophy: Trophy,
//   default: Target,
// };

// // ─── Page Component ───────────────────────────────────────────────────────────
// export default async function CoursePage({ params }) {
//   const { slug } = await params;

//   const course = getCourseBySlug(slug);
//   if (!course) notFound();

//   const {
//     title,
//     subtitle,
//     description,
//     grade,
//     lessons,
//     activities,
//     heroImage,
//     journeySection,
//     programOverview,
//     curriculum,
//     projects,
//     certificate,
//     reviews,
//     faqs,
//     recommendedCourses,
//   } = course;

//   return (
//     <main className="font-[PublicSans,sans-serif] bg-white text-gray-800">
//       {/* ─── HERO ─────────────────────────────────────────────────────────── */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-[#e8f4ff] via-white to-orange-50 min-h-[580px] flex items-center">
//         <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#1d8fff]/10 blur-3xl pointer-events-none" />
//         <div className="absolute -bottom-10 right-0 w-64 h-64 rounded-full bg-orange-200/40 blur-3xl pointer-events-none" />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center relative z-10">
//           {/* Left */}
//           <div>
//             <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1d8fff]/10 text-[#1d8fff] text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">
//               <Code2 className="w-3.5 h-3.5" />
//               Web Development
//             </span>
//             <h1 className="heading-oswald uppercase text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight ">
//               {title}
//               {/* <span className="block text-[#1d8fff]">–</span> */}
//             </h1>
//               <span className="text-[#1d8fff]">{subtitle}</span>

//             <p className="mt-5 text-base text-gray-600 max-w-lg leading-relaxed">{description}</p>

//             {/* Stats */}
//             <div className="mt-7 flex flex-wrap gap-4">
//               {[
//                 { label: "Grade", value: grade, icon: GraduationCap },
//                 { label: "Lessons", value: lessons, icon: BookOpen },
//                 { label: "Activities", value: activities, icon: Activity },
//               ].map((s) => (
//                 <div
//                   key={s.label}
//                   className="bg-white rounded-2xl shadow-sm border border-gray-100 px-5 py-3 text-center min-w-[90px] hover:shadow-md hover:border-[#1d8fff]/20 transition-all duration-200 group"
//                 >
//                   <s.icon className="w-4 h-4 text-[#1d8fff] mx-auto mb-1 group-hover:scale-110 transition-transform duration-200" />
//                   <p className="heading-oswald uppercase text-2xl font-black text-[#1d8fff]">{s.value}</p>
//                   <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Hero CTAs */}
//             <div className="mt-8 flex flex-wrap gap-4">
//               <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1d8fff] text-white font-bold text-sm hover:bg-[#0e72e0] hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-0.5 shadow-lg shadow-blue-200 transition-all duration-200">
//                 <PlayCircle className="w-4 h-4" />
//                 Book for Demo
//               </button>
//               <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-100 hover:-translate-y-0.5 shadow-lg shadow-orange-100 transition-all duration-200">
//                 <Phone className="w-4 h-4" />
//                 Schedule a Call
//               </button>
//             </div>
//           </div>

//           {/* Right – hero image */}
//           <div className="relative hidden lg:block">
//             <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-100 aspect-[4/3] group">
//               <img
//                 src={heroImage}
//                 alt="Web development course"
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-tr from-[#1d8fff]/20 to-transparent" />
//             </div>
//             {/* floating badge */}
//             <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 border border-gray-100 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200">
//               <Award className="w-6 h-6 text-orange-500" />
//               <div>
//                 <p className="text-xs font-bold text-gray-800">Certificate Included</p>
//                 <p className="text-xs text-gray-400">Upon Completion</p>
//               </div>
//             </div>
//             <div className="absolute -top-4 -right-4 bg-orange-500 text-white rounded-2xl shadow-lg px-4 py-2 text-xs font-bold flex items-center gap-1.5">
//               <GraduationCap className="w-3.5 h-3.5" />
//               Grades {grade}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ─── JOURNEY SECTION ──────────────────────────────────────────────── */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="heading-oswald uppercase text-3xl md:text-4xl font-black text-gray-900">
//               {journeySection.heading}
//             </h2>
//             <p className="mt-3 text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
//               {journeySection.subtitle}
//             </p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-6">
//             {journeySection.cards.map((card) => {
//               const BulletIcon =
//                 card.type === "checklist"
//                   ? CheckCircle
//                   : card.type === "trophy"
//                   ? Trophy
//                   : Target;
//               return (
//                 <div
//                   key={card.title}
//                   className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm hover:shadow-lg hover:-translate-y-1.5 hover:border-[#1d8fff]/20 transition-all duration-300 group"
//                 >
//                   <div className="w-12 h-12 rounded-xl bg-[#1d8fff]/10 flex items-center justify-center mb-5 group-hover:bg-[#1d8fff]/20 transition-colors duration-200">
//                     <Sparkles className="w-6 h-6 text-[#1d8fff]" />
//                   </div>
//                   <h3 className="heading-oswald uppercase text-xl font-black text-gray-800 mb-4">{card.title}</h3>
//                   <ul className="space-y-2.5">
//                     {card.items.map((item, i) => (
//                       <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
//                         <BulletIcon
//                           className={`mt-0.5 flex-shrink-0 w-4 h-4 ${
//                             card.type === "trophy" ? "text-orange-500" : "text-[#1d8fff]"
//                           }`}
//                         />
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               );
//             })}
//           </div>
//           <CTARow />
//         </div>
//       </section>

//       {/* ─── PROGRAM OVERVIEW ─────────────────────────────────────────────── */}
//       <section className="py-20 bg-gradient-to-br from-[#f0f7ff] to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="heading-oswald uppercase text-3xl md:text-4xl font-black text-gray-900 mb-5">
//                 {programOverview.heading}
//               </h2>
//               <p className="text-gray-600 text-sm leading-relaxed mb-8">{programOverview.description}</p>
//               <CTARow />
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               {programOverview.highlights.map((h, i) => {
//                 const icons = [Cpu, LayoutGrid, FlaskConical, ShieldCheck, Layers, Zap];
//                 const Icon = icons[i % icons.length];
//                 return (
//                   <div
//                     key={i}
//                     className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-start gap-3 hover:border-[#1d8fff]/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
//                   >
//                     <Icon className="w-5 h-5 text-[#1d8fff] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
//                     <p className="text-sm font-semibold text-gray-700 leading-snug">{h.label}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ─── CURRICULUM ───────────────────────────────────────────────────── */}
//       <section className="py-20 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="heading-oswald uppercase text-3xl md:text-4xl font-black text-gray-900">
//               {curriculum.heading}
//             </h2>
//             <div className="mt-3 flex justify-center gap-3 flex-wrap">
//               <span className="inline-flex items-center gap-1 text-xs bg-[#1d8fff]/10 text-[#1d8fff] px-3 py-1 rounded-full font-semibold">
//                 <Layers className="w-3 h-3" />
//                 {curriculum.modules.length} Modules
//               </span>
//               <span className="inline-flex items-center gap-1 text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-semibold">
//                 <BookOpen className="w-3 h-3" />
//                 {lessons} Lectures
//               </span>
//             </div>
//           </div>
//           <div className="space-y-3">
//             {curriculum.modules.map((mod, i) => (
//               <ModuleCard key={mod.id} mod={mod} defaultOpen={i === 0} />
//             ))}
//           </div>
//           <CTARow />
//         </div>
//       </section>

//       {/* ─── PROJECTS ─────────────────────────────────────────────────────── */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="heading-oswald uppercase text-3xl md:text-4xl font-black text-gray-900">
//               {projects.heading}
//             </h2>
//             <p className="mt-3 text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
//               {projects.description}
//             </p>
//           </div>

//           {/* Activities */}
//           <div className="mb-14">
//             <h3 className="heading-oswald uppercase text-xl font-black text-gray-800 mb-5 flex items-center gap-2">
//               <Activity className="w-5 h-5 text-[#1d8fff]" />
//               Learning Activities
//             </h3>
//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
//               {projects.activities.map((a, i) => (
//                 <div
//                   key={i}
//                   className="bg-white border border-gray-100 rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm hover:border-orange-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
//                 >
//                   <span className="w-7 h-7 rounded-lg bg-orange-100 text-orange-600 text-xs font-bold flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-200">
//                     {i + 1}
//                   </span>
//                   <span className="text-sm text-gray-700 font-medium">{a}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Capstone Projects */}
//           <div>
//             <h3 className="heading-oswald uppercase text-xl font-black text-gray-800 mb-5 flex items-center gap-2">
//               <Target className="w-5 h-5 text-[#1d8fff]" />
//               Capstone Projects
//             </h3>
//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//               {projects.capstoneProjects.map((p) => (
//                 <div
//                   key={p.num}
//                   className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-[#1d8fff]/30 hover:-translate-y-1 transition-all duration-200 group"
//                 >
//                   <span className="text-2xl font-black text-[#1d8fff]/20 heading-oswald uppercase">
//                     {String(p.num).padStart(2, "0")}
//                   </span>
//                   <h4 className="font-bold text-gray-800 text-sm mt-1 mb-1 group-hover:text-[#1d8fff] transition-colors duration-150">
//                     {p.title}
//                   </h4>
//                   <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <CTARow />
//         </div>
//       </section>

//       {/* ─── CERTIFICATE ──────────────────────────────────────────────────── */}
//       <section className="py-20 bg-gradient-to-r from-[#1d8fff] to-[#0e6ed4] text-white relative overflow-hidden">
//         <div
//           className="absolute inset-0 opacity-10 pointer-events-none"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
//             backgroundSize: "60px 60px",
//           }}
//         />
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-10 items-center">
//             <div>
//               <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
//                 <Trophy className="w-3.5 h-3.5" />
//                 Recognition
//               </span>
//               <h2 className="heading-oswald uppercase text-3xl md:text-4xl font-black mb-5">
//                 {certificate.heading}
//               </h2>
//               <p className="text-blue-100 text-sm leading-relaxed mb-6">{certificate.description}</p>
//               <h4 className="font-bold text-white mb-3 text-sm flex items-center gap-2">
//                 <CheckCircle className="w-4 h-4 text-orange-300" />
//                 How Do Students Earn the Certificate?
//               </h4>
//               <ul className="space-y-2.5">
//                 {certificate.requirements.map((r, i) => (
//                   <li key={i} className="flex items-center gap-3 text-sm text-blue-50">
//                     <ShieldCheck className="w-4 h-4 text-orange-300 flex-shrink-0" />
//                     {r}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Certificate visual */}
//             <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/15 transition-colors duration-300">
//               <div className="w-20 h-20 bg-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg hover:bg-orange-500 transition-colors duration-200 hover:scale-105 transition-transform">
//                 <GraduationCap className="w-10 h-10 text-white" />
//               </div>
//               <h3 className="heading-oswald uppercase text-2xl font-black text-white mb-1">
//                 Certificate of Completion
//               </h3>
//               <p className="text-blue-200 text-xs mb-5">Web Development Foundations Program</p>
//               <p className="text-blue-100 text-xs mb-6 border-t border-white/20 pt-4">
//                 Issued by Skillzrevo Solutions
//               </p>
//               <div className="flex gap-3 justify-center flex-wrap">
//                 <button className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white text-[#1d8fff] font-bold text-xs rounded-full hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-200 shadow-md">
//                   <Award className="w-3.5 h-3.5" />
//                   View Sample Certificate
//                 </button>
//                 <button className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-orange-500 text-white font-bold text-xs rounded-full hover:bg-orange-600 hover:-translate-y-0.5 transition-all duration-200 shadow-md">
//                   <PlayCircle className="w-3.5 h-3.5" />
//                   Try a Free Demo
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ─── REVIEWS ──────────────────────────────────────────────────────── */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="heading-oswald uppercase text-3xl md:text-4xl font-black text-gray-900">
//               Ratings &amp; Reviews
//             </h2>
//             <p className="mt-2 text-gray-400 text-sm">What students are saying</p>
//           </div>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//             {reviews.map((r, i) => (
//               <div
//                 key={i}
//                 className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#1d8fff]/20 transition-all duration-300 group"
//               >
//                 <Stars count={r.rating} />
//                 <p className="mt-3 text-sm text-gray-600 leading-relaxed">"{r.text}"</p>
//                 <div className="mt-4 flex items-center gap-3 pt-4 border-t border-gray-100">
//                   <div className="w-9 h-9 rounded-full bg-[#1d8fff] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 group-hover:bg-[#0e72e0] transition-colors duration-200">
//                     {r.avatar}
//                   </div>
//                   <span className="font-bold text-sm text-gray-800">{r.name}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="flex flex-wrap justify-center gap-4 mt-8">
//             <button className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-gray-200 text-gray-600 font-semibold text-sm hover:border-[#1d8fff] hover:text-[#1d8fff] hover:-translate-y-0.5 transition-all duration-200">
//               <Star className="w-4 h-4" />
//               View More Reviews
//             </button>
//             <button className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#1d8fff] text-white font-semibold text-sm hover:bg-[#0e72e0] hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5 transition-all duration-200 shadow-md">
//               <PlayCircle className="w-4 h-4" />
//               Try a Free Demo Class
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ─── FAQS ─────────────────────────────────────────────────────────── */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="heading-oswald uppercase text-3xl md:text-4xl font-black text-gray-900">
//               Frequently Asked Questions
//             </h2>
//           </div>
//           <div className="space-y-3">
//             {faqs.map((faq, i) => (
//               <FAQItem key={i} q={faq.q} a={faq.a} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ─── RECOMMENDED COURSES ──────────────────────────────────────────── */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="heading-oswald uppercase text-3xl md:text-4xl font-black text-gray-900">
//               Recommended Courses
//             </h2>
//             <p className="mt-2 text-gray-400 text-sm">Explore more learning paths</p>
//           </div>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//             {recommendedCourses.map((rc) => (
//               <Link
//                 key={rc.slug}
//                 href={`/courses/${rc.slug}`}
//                 className="group border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-[#1d8fff]/30 hover:-translate-y-1.5 transition-all duration-300 block bg-white"
//               >
//                 <div className="w-12 h-12 rounded-xl bg-[#1d8fff]/10 flex items-center justify-center mb-4 group-hover:bg-[#1d8fff]/20 transition-colors duration-200">
//                   <Cpu className="w-6 h-6 text-[#1d8fff]" />
//                 </div>
//                 <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-semibold">
//                   Grade {rc.grade}
//                 </span>
//                 <h3 className="heading-oswald uppercase text-lg font-black text-gray-800 mt-2 mb-1 group-hover:text-[#1d8fff] transition-colors duration-200">
//                   {rc.title}
//                 </h3>
//                 <p className="text-xs text-gray-500 leading-relaxed">{rc.desc}</p>
//                 <div className="mt-4 flex items-center gap-1 text-[#1d8fff] text-xs font-bold group-hover:gap-2 transition-all duration-200">
//                   Explore Course
//                   <ArrowRight className="w-3.5 h-3.5" />
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ─── BOTTOM CTA BANNER ────────────────────────────────────────────── */}
//       <section className="py-16 bg-gradient-to-br from-orange-50 to-[#e8f4ff]">
//         <div className="max-w-3xl mx-auto px-4 text-center">
//           <h2 className="heading-oswald uppercase text-3xl md:text-4xl font-black text-gray-900 mb-3">
//             Learn Coding, AI and Technology in a Fun Way
//           </h2>
//           <p className="text-gray-500 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
//             Interactive lessons designed to help students build creativity, problem-solving skills, and
//             real coding experience.
//           </p>
//           <button className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-[#1d8fff] text-white font-bold text-base hover:bg-[#0e72e0] hover:shadow-2xl hover:shadow-blue-300 hover:-translate-y-0.5 shadow-xl shadow-blue-200 transition-all duration-200">
//             <PlayCircle className="w-5 h-5" />
//             Book a Free Demo
//           </button>
//         </div>
//       </section>
//     </main>
//   );
// }


// import { courses } from "../../data/courses";

// export async function generateStaticParams() {
//   return courses.map((course) => ({
//     slug: course.slug,
//   }));
// }

// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   const course = getCourseBySlug(slug);

//   if (!course) return {};

//   return {
//     title: course.title,
//     description: course.description,
//   };
// }




// import React from "react";
// import { notFound } from "next/navigation";
// import { getCourseBySlug } from "../../data/courses";

// // Import our design system and sections
// import { GlobalStyles } from "./GlobalStyles";
// import { HeroSection } from "./HeroSection";
// import { StatsBar } from "./StatsBar";
// import { ProgramOverview } from "./ProgramOverview";
// import { JourneySection } from "./JourneySection";
// import { CurriculumSection } from "./CurriculumSection";
// import { ProjectsSection } from "./ProjectsSection";
// import { CertificateSection } from "./CertificateSection";
// import { ReviewsSection } from "./ReviewsSection";
// import { FAQSection } from "./FAQSection";

// // Icons for the ProgramOverview (customize based on your course needs)
// import { Code, Rocket, Brain, Star, Palette, Zap } from "lucide-react";

// export default function CoursePage({ params }) {
//   const { slug } = params;
//   const course = getCourseBySlug(slug);

//   if (!course) {
//     notFound();
//   }

//   const {
//     title,
//     subtitle,
//     description,
//     grade,
//     lessons,
//     activities,
//     heroImage,
//     journeySection,
//     programOverview,
//     curriculum,
//     projects,
//     certificate,
//     reviews,
//     faqs,
//   } = course;

//   // Icons used in the Program Overview highlights grid
//   const overviewIcons = [Code, Brain, Rocket, Star, Palette, Zap];

//   return (
//     <main className="min-h-screen bg-white">
//       {/* 1. Inject Global Design System */}
//       <GlobalStyles />

//       {/* 2. Hero Section */}
//       <HeroSection
//         title={title}
//         subtitle={subtitle}
//         description={description}
//         grade={grade}
//         lessons={lessons}
//         activities={activities}
//         heroImage={heroImage}
//       />

//       {/* 3. Stats Bar (Animated counters) */}
//       <StatsBar lessons={lessons} activities={activities} />

//       {/* 4. Program Overview (Highlights) */}
//       <ProgramOverview
//         heading={programOverview?.heading || "Program Highlights"}
//         description={programOverview?.description || ""}
//         highlights={programOverview?.highlights || []}
//         highlightIcons={overviewIcons}
//       />

//       {/* 5. Journey Section (The Roadmap) */}
//       <JourneySection
//         heading={journeySection?.heading || "The Journey"}
//         subtitle={journeySection?.subtitle || ""}
//         cards={journeySection?.cards || []}
//       />

//       {/* 6. Curriculum Section (Expandable Modules) */}
//       <CurriculumSection
//         heading={curriculum?.heading || "Course Curriculum"}
//         modules={curriculum?.modules || []}
//         lessons={lessons}
//       />

//       {/* 7. Projects Section (Activities & Capstones) */}
//       <ProjectsSection
//         heading={projects?.heading || "Hands-on Projects"}
//         description={projects?.description || ""}
//         activities={projects?.activities || []}
//         capstoneProjects={projects?.capstoneProjects || []}
//       />

//       {/* 8. Certificate Section (Rewards) */}
//       <CertificateSection
//         heading={certificate?.heading || "Get Recognized"}
//         description={certificate?.description || ""}
//         requirements={certificate?.requirements || []}
//       />

//       {/* 9. Reviews Section (Student Love) */}
//       <ReviewsSection reviews={reviews || []} />

//       {/* 10. FAQ Section */}
//       <FAQSection faqs={faqs || []} />

//       {/* Floating CTA / Footer could go here */}
//     </main>
//   );
// }











import React from "react";
import { notFound } from "next/navigation";
import { getCourseBySlug, courses } from "../../data/courses";

// UI Sections
import { GlobalStyles } from "./GlobalStyles";
import { HeroSection } from "./HeroSection";
import { StatsBar } from "./StatsBar";
import { ProgramOverview } from "./ProgramOverview";
import { JourneySection } from "./JourneySection";
import { CurriculumSection } from "./CurriculumSection";
import { ProjectsSection } from "./ProjectsSection";
import { CertificateSection } from "./CertificateSection";
import { ReviewsSection } from "./ReviewsSection";
import { FAQSection } from "./FAQSection";

// Icons
import { Code, Rocket, Brain, Star, Palette, Zap } from "lucide-react";


// ✅ 1. STATIC PARAMS
export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}


// ✅ 2. METADATA (FIXED WITH AWAIT)
export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ REQUIRED
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found",
      description: "This course does not exist",
    };
  }

  return {
    title: course.title,
    description: course.description,
  };
}


// ✅ 3. PAGE (FIXED WITH AWAIT)
export default async function CoursePage({ params }) {
  const { slug } = await params; // ✅ REQUIRED
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const {
    title,
    subtitle,
    description,
    grade,
    lessons,
    activities,
    heroImage,
    journeySection,
    programOverview,
    curriculum,
    projects,
    certificate,
    reviews,
    faqs,
    age,
    durationMonths,
    durationClasses,
    durationWeeks,
  } = course;

  const overviewIcons = [Code, Brain, Rocket, Star, Palette, Zap];

  return (
    <main className="min-h-screen bg-white">
      <GlobalStyles />

      <HeroSection
        title={title}
        subtitle={subtitle}
        description={description}
        grade={grade}
        lessons={lessons}
        activities={activities}
        heroImage={heroImage}
      />

      <StatsBar lessons={lessons} activities={activities} />

      <ProgramOverview
        heading={programOverview?.heading || "Program Highlights"}
        description={programOverview?.description || ""}
        highlights={programOverview?.highlights || []}
        highlightIcons={overviewIcons}
      />

      <JourneySection
        heading={journeySection?.heading || "The Journey"}
        subtitle={journeySection?.subtitle || ""}
        cards={journeySection?.cards || []}
      />

      <CurriculumSection
        heading={curriculum?.heading || "Course Curriculum"}
        modules={curriculum?.modules || []}
        lessons={lessons}
        age={age}
        durationMonths={durationMonths}
        durationClasses={durationClasses}
        durationWeeks={durationWeeks}
        grade = {grade}
        activities={activities}
      />

      <ProjectsSection
        heading={projects?.heading || "Hands-on Projects"}
        description={projects?.description || ""}
        activities={projects?.activities || []}
        capstoneProjects={projects?.capstoneProjects || []}
      />

      <CertificateSection
        heading={certificate?.heading || "Get Recognized"}
        description={certificate?.description || ""}
        requirements={certificate?.requirements || []}
      />

      <ReviewsSection reviews={reviews || []} />

      <FAQSection faqs={faqs || []} />
    </main>
  );
}