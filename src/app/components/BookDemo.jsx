// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   CalendarCheck,
//   ChevronDown,
//   Sparkles,
//   Rocket,
//   Star,
//   Shield,
//   Laptop,
//   User,
//   Mail,
//   Phone,
//   BookOpen,
//   CheckCircle2,
//   Zap,
// } from "lucide-react";

// const B = { blue: "#1642d6", light: "#1d8fff", orange: "#ff6900" };


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


// const FontLoader = () => (
//   <style>{`
//     @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');

//   `}</style>
// );

// const COURSES = [
//   "Web Development for Beginners (HTML & CSS)",
//   "Interactive Web Development (HTML, CSS & JS)",
//   "Advanced Full Stack Web Development",
//   "Data Analysis Foundations",
//   "AI & Machine Learning Foundations",
//   "Full Stack — AI & Machine Learning",
//   "Cyber Security Foundations",
//   "Cloud Computing Foundations",
//   "Python Programming Foundations",
//   "Java Programming Foundations",
// ];

// const COUNTRIES = [
//   { code: "IN", flag: "🇮🇳", dial: "+91" },
//   { code: "US", flag: "🇺🇸", dial: "+1"  },
//   { code: "GB", flag: "🇬🇧", dial: "+44" },
//   { code: "AE", flag: "🇦🇪", dial: "+971"},
//   { code: "CA", flag: "🇨🇦", dial: "+1"  },
//   { code: "AU", flag: "🇦🇺", dial: "+61" },
// ];

// /* floating icon data */
// const FLOATERS = [
//   { Icon: Rocket,      top: "8%",  left: "6%",   accent: B.blue,   delay: 0    },
//   { Icon: Star,        top: "18%", left: "72%",  accent: B.orange, delay: 0.4  },
//   { Icon: Shield,      top: "55%", left: "4%",   accent: "#6d28d9",delay: 0.8  },
//   { Icon: Zap,         top: "70%", left: "68%",  accent: B.light,  delay: 1.2  },
//   { Icon: BookOpen,    top: "38%", left: "78%",  accent: "#15803d",delay: 0.6  },
//   { Icon: CheckCircle2,top: "92%", left: "14%",  accent: B.orange, delay: 1.0  },
// ];

// const PERKS = [
//   { icon: Star,        text: "100% Free — No Credit Card"  },
//   { icon: Shield,      text: "Live Session with Expert"    },
//   { icon: CheckCircle2,text: "Personalized Course Guidance"},
// ];

// /* ── styled input wrapper ── */
// function Field({ label, icon: Icon, children }) {
//   return (
//     <div className="flex flex-col gap-1.5">
//       <label className="text-[12px] font-bold text-gray-600 uppercase tracking-wide flex items-center gap-1.5">
//         <Icon size={11} style={{ color: B.blue }} />
//         {label}
//       </label>
//       {children}
//     </div>
//   );
// }

// const inputCls = `
//   w-full rounded-xl border bg-white px-4 py-2.5 text-[14px] text-gray-800
//   placeholder:text-gray-400 outline-none transition-all duration-200
//   focus:ring-2 focus:border-transparent
// `;
// const inputStyle = (focused) => ({
//   borderColor: focused ? B.blue : "#e2e8f0",
//   boxShadow: focused ? `0 0 0 3px ${B.blue}18` : "none",
// });

// export default function BookDemo() {
//   const [country, setCountry]   = useState(COUNTRIES[0]);
//   const [phone, setPhone]       = useState("");
//   const [email, setEmail]       = useState("");
//   const [childName, setChild]   = useState("");
//   const [course, setCourse]     = useState("");
//   const [hasDevice, setDevice]  = useState("yes");
//   const [showDial, setShowDial] = useState(false);
//   const [focused, setFocused]   = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   function handleSubmit(e) {
//     e.preventDefault();
//     setSubmitted(true);
//   }

//   return (
//     <>
//       <FontLoader />
    
//     <section
//       className="relative overflow-hidden py-22"
//       style={{ background: `linear-gradient(135deg, ${B.blue} 0%, ${B.light} 100%)`, fontFamily: "'Nunito', sans-serif" }}
//     >
//        <WavyTop fill="#ffffff" />
//        <WavyBottom fill="#ffffff" />
//       {/* ── decorative dot grid ── */}
//       <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
//         style={{ backgroundImage: `radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)`,
//           backgroundSize: "28px 28px" }} aria-hidden="true" />

//       {/* ── large decorative circles (mimic reference's yellow rings) ── */}
//       <div className="absolute pointer-events-none" aria-hidden="true"
//         style={{ width: 560, height: 560, top: "50%", left: "18%",
//           transform: "translate(-50%,-50%)" }}>
//         <div className="absolute inset-0 rounded-full border-2 opacity-[0.12]"
//           style={{ borderColor: "white" }} />
//         <div className="absolute rounded-full border-2 opacity-[0.08]"
//           style={{ inset: "-48px", borderColor: "white" }} />
//         <div className="absolute rounded-full border-2 opacity-[0.05]"
//           style={{ inset: "-100px", borderColor: "white" }} />
//       </div>

//       {/* ── floating icon bubbles ── */}
//       {FLOATERS.map(({ Icon, top, left, accent, delay }, i) => (
//         <motion.div
//           key={i}
//           animate={{ y: [0, -12, 0] }}
//           transition={{ duration: 3.5 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay }}
//           className="absolute hidden lg:flex items-center justify-center rounded-2xl shadow-xl pointer-events-none z-0 opacity-30"
//           style={{ top, left, width: 52, height: 52, background: "white",
//             boxShadow: `0 8px 24px ${accent}30` }}
//           aria-hidden="true"
//         >
//           <Icon size={22} style={{ color: accent }} />
//         </motion.div>
//       ))}

//       <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12
//         grid lg:grid-cols-2 gap-0 min-h-[580px] items-center">

//         {/* ── LEFT — hero copy ── */}
//         <motion.div
//           initial={{ opacity: 0, x: -32 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//           className="py-16 lg:py-20 flex flex-col gap-6 text-white z-10"
//         >
//           <span
//             className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest w-fit"
//             style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
//           >
//             <Sparkles size={11} style={{ color: B.orange }} />
//             Free Trial Class
//           </span>

//           <h2
//             className="font-light leading-normal tracking-tight"
//             style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontFamily: "'Fredoka One', cursive" }}
//           >
//             Empower Your Child with{" "}
//             <span style={{
//               background: "linear-gradient(100deg,#ffb347,#ff6900)",
//               WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
//             }}>
//               Skills for Tomorrow
//             </span>
//           </h2>

//           <p className="text-[15px] text-white/70 leading-relaxed max-w-md">
//             Book a free demo class today. Our expert mentors will guide your child
//             on the best learning path — live, interactive, and completely free.
//           </p>

//           {/* perks */}
//           <ul className="flex flex-col gap-3 mt-2">
//             {PERKS.map(({ icon: Icon, text }) => (
//               <li key={text} className="flex items-center gap-3 text-[14px] font-semibold text-white/90">
//                 <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
//                   style={{ background: "rgba(255,255,255,0.15)" }}>
//                   <Icon size={13} color="white" />
//                 </div>
//                 {text}
//               </li>
//             ))}
//           </ul>

//           {/* trust row */}
//           <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/15">
//             <div className="flex -space-x-2">
//               {[
//                 "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=60&h=60&fit=crop&crop=face",
//                 "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=60&h=60&fit=crop&crop=face",
//                 "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face",
//               ].map((src, i) => (
//                 <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 object-cover"
//                   style={{ borderColor: B.blue }} />
//               ))}
//             </div>
//             <div>
//               <div className="flex gap-0.5">
//                 {Array.from({ length: 5 }).map((_, i) => (
//                   <Star key={i} size={12} fill={B.orange} color={B.orange} />
//                 ))}
//               </div>
//               <p className="text-[11px] text-white/60 mt-0.5">
//                 Trusted by <span className="font-bold text-white/90">2,000+ parents</span>
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* ── RIGHT — form card ── */}
//         <div className="py-10 lg:py-14 flex justify-center lg:justify-end">
//           <motion.div
//             initial={{ opacity: 0, y: 32, scale: 0.97 }}
//             whileInView={{ opacity: 1, y: 0, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
//             className="w-full max-w-[440px] rounded-3xl bg-white p-7 sm:p-8"
//             style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.22)" }}
//           >
//             {submitted ? (
//               /* ── success state ── */
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="flex flex-col items-center text-center gap-4 py-8"
//               >
//                 <div className="w-20 h-20 rounded-full flex items-center justify-center"
//                   style={{ background: "#dcfce7" }}>
//                   <CheckCircle2 size={40} style={{ color: "#15803d" }} />
//                 </div>
//                 <h3 className="heading-oswald font-bold text-gray-900 text-2xl">You're Booked!</h3>
//                 <p className="text-[14px] text-gray-500 leading-relaxed">
//                   Our team will contact you shortly to confirm your free demo class.
//                 </p>
//                 <button
//                   onClick={() => setSubmitted(false)}
//                   className="mt-2 rounded-xl px-6 py-2.5 text-sm font-bold text-white"
//                   style={{ background: B.blue }}
//                 >
//                   Book Another
//                 </button>
//               </motion.div>
//             ) : (
//               <>
//                 {/* form header */}
//                 <div className="mb-6">
//                   <div className="flex items-center gap-2 mb-1">
//                     <CalendarCheck size={18} style={{ color: B.blue }} />
//                     <h3 className="heading-oswald font-bold text-gray-900 text-[1.25rem]">
//                       Book Now &amp; Get Certified
//                     </h3>
//                   </div>
//                   {/* progress bar decoration */}
//                   <div className="h-1 rounded-full mt-2 overflow-hidden bg-gray-100">
//                     <div className="h-full w-3/5 rounded-full"
//                       style={{ background: `linear-gradient(90deg, ${B.blue}, ${B.light})` }} />
//                   </div>
//                 </div>

//                 <form onSubmit={handleSubmit} className="flex flex-col gap-4">

//                   {/* Phone row */}
//                   <Field label="Mobile Number" icon={Phone}>
//                     <div className="flex gap-2">
//                       {/* country dial picker */}
//                       <div className="relative">
//                         <button
//                           type="button"
//                           onClick={() => setShowDial((p) => !p)}
//                           className="flex items-center gap-1.5 rounded-xl border px-3 py-2.5 text-[13px] font-semibold bg-white h-full whitespace-nowrap transition-all duration-200"
//                           style={{
//                             borderColor: showDial ? B.blue : "#e2e8f0",
//                             boxShadow: showDial ? `0 0 0 3px ${B.blue}18` : "none",
//                           }}
//                         >
//                           <span>{country.flag}</span>
//                           <span className="text-gray-700">{country.dial}</span>
//                           <ChevronDown size={12} className="text-gray-400" />
//                         </button>
//                         {showDial && (
//                           <div className="absolute top-full left-0 mt-1 z-30 rounded-xl bg-white shadow-xl border border-gray-100 overflow-hidden"
//                             style={{ minWidth: 130 }}>
//                             {COUNTRIES.map((c) => (
//                               <button key={c.code} type="button"
//                                 onClick={() => { setCountry(c); setShowDial(false); }}
//                                 className="flex items-center gap-2 w-full px-3 py-2 text-[13px] hover:bg-gray-50 transition-colors"
//                               >
//                                 <span>{c.flag}</span>
//                                 <span className="text-gray-700 font-medium">{c.dial}</span>
//                                 <span className="text-gray-400 text-[11px]">{c.code}</span>
//                               </button>
//                             ))}
//                           </div>
//                         )}
//                       </div>

//                       <input
//                         type="tel"
//                         placeholder="Enter mobile number"
//                         value={phone}
//                         onChange={(e) => setPhone(e.target.value)}
//                         onFocus={() => setFocused("phone")}
//                         onBlur={() => setFocused("")}
//                         required
//                         className={inputCls}
//                         style={inputStyle(focused === "phone")}
//                       />
//                     </div>
//                     <p className="text-[11px] text-gray-400 flex items-center gap-1">
//                       <span style={{ color: B.light }}>ℹ</span>
//                       Please share the number that you use for WhatsApp
//                     </p>
//                   </Field>

//                   {/* Email */}
//                   <Field label="E-mail" icon={Mail}>
//                     <input
//                       type="email"
//                       placeholder="Enter your email address"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       onFocus={() => setFocused("email")}
//                       onBlur={() => setFocused("")}
//                       required
//                       className={inputCls}
//                       style={inputStyle(focused === "email")}
//                     />
//                   </Field>

//                   {/* Child Name */}
//                   <Field label="Child's Name" icon={User}>
//                     <input
//                       type="text"
//                       placeholder="Enter child's name"
//                       value={childName}
//                       onChange={(e) => setChild(e.target.value)}
//                       onFocus={() => setFocused("child")}
//                       onBlur={() => setFocused("")}
//                       required
//                       className={inputCls}
//                       style={inputStyle(focused === "child")}
//                     />
//                   </Field>

//                   {/* Course */}
//                   <Field label="Course" icon={BookOpen}>
//                     <div className="relative">
//                       <select
//                         value={course}
//                         onChange={(e) => setCourse(e.target.value)}
//                         onFocus={() => setFocused("course")}
//                         onBlur={() => setFocused("")}
//                         required
//                         className={inputCls + " appearance-none pr-10 cursor-pointer"}
//                         style={inputStyle(focused === "course")}
//                       >
//                         <option value="" disabled>Select a course</option>
//                         {COURSES.map((c) => (
//                           <option key={c} value={c}>{c}</option>
//                         ))}
//                       </select>
//                       <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
//                     </div>
//                   </Field>

//                   {/* Device radio */}
//                   <Field label="Do you have a Laptop or Desktop?" icon={Laptop}>
//                     <div className="flex gap-5">
//                       {["yes", "no"].map((val) => (
//                         <label key={val}
//                           className="flex items-center gap-2 cursor-pointer text-[13px] font-semibold text-gray-700 select-none">
//                           <div
//                             onClick={() => setDevice(val)}
//                             className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200"
//                             style={{
//                               borderColor: hasDevice === val ? B.blue : "#d1d5db",
//                               background: hasDevice === val ? B.blue : "white",
//                             }}
//                           >
//                             {hasDevice === val && (
//                               <div className="w-2 h-2 rounded-full bg-white" />
//                             )}
//                           </div>
//                           {val === "yes" ? "Yes" : "No"}
//                         </label>
//                       ))}
//                     </div>
//                   </Field>

//                   {/* Submit */}
//                   <button
//                     type="submit"
//                     className="w-full mt-1 rounded-2xl py-3.5 text-[15px] font-extrabold text-white flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
//                     style={{
//                       background: `linear-gradient(135deg, ${B.light}, ${B.blue})`,
//                       boxShadow: `0 8px 28px ${B.blue}40`,
//                     }}
//                   >
//                     <CalendarCheck size={16} />
//                     Book a Free Demo Class
//                   </button>

//                   <p className="text-center text-[11px] text-gray-400">
//                     🔒 Laptop or desktop is recommended for the best experience
//                   </p>
//                 </form>
//               </>
//             )}
//           </motion.div>
//         </div>

//       </div>
//     </section>
//     </>
//   );
// }

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarCheck,
  ChevronDown,
  Sparkles,
  Rocket,
  Star,
  Shield,
  Laptop,
  User,
  Mail,
  Phone,
  BookOpen,
  CheckCircle2,
  Zap,
} from "lucide-react";

const B = { blue: "#1642d6", light: "#1d8fff", orange: "#ff6900" };

function WavyTop({ fill = "#ffffff" }) {
  return (
    <div
      className="absolute top-0 left-0 w-full pointer-events-none z-[4]"
      style={{ lineHeight: 0 }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 56"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,0 L0,0 Z"
          fill={fill}
        />
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
      <svg
        viewBox="0 0 1440 56"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');
  `}</style>
);

const COURSES = [
  "Web Development for Beginners (HTML & CSS)",
  "Interactive Web Development (HTML, CSS & JS)",
  "Advanced Full Stack Web Development",
  "Data Analysis Foundations",
  "AI & Machine Learning Foundations",
  "Full Stack — AI & Machine Learning",
  "Cyber Security Foundations",
  "Cloud Computing Foundations",
  "Python Programming Foundations",
  "Java Programming Foundations",
];

const COUNTRIES = [
  { code: "IN", flag: "🇮🇳", dial: "+91" },
  { code: "US", flag: "🇺🇸", dial: "+1"  },
  { code: "GB", flag: "🇬🇧", dial: "+44" },
  { code: "AE", flag: "🇦🇪", dial: "+971" },
  { code: "CA", flag: "🇨🇦", dial: "+1"  },
  { code: "AU", flag: "🇦🇺", dial: "+61" },
];

const FLOATERS = [
  { Icon: Rocket,       top: "8%",  left: "6%",  accent: B.blue,    delay: 0   },
  { Icon: Star,         top: "18%", left: "72%", accent: B.orange,  delay: 0.4 },
  { Icon: Shield,       top: "55%", left: "4%",  accent: "#6d28d9", delay: 0.8 },
  { Icon: Zap,          top: "70%", left: "68%", accent: B.light,   delay: 1.2 },
  { Icon: BookOpen,     top: "38%", left: "78%", accent: "#15803d", delay: 0.6 },
  { Icon: CheckCircle2, top: "92%", left: "14%", accent: B.orange,  delay: 1.0 },
];

const PERKS = [
  { icon: Star,         text: "100% Free — No Credit Card"   },
  { icon: Shield,       text: "Live Session with Expert"     },
  { icon: CheckCircle2, text: "Personalized Course Guidance" },
];

function Field({ label, icon: Icon, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12px] font-bold text-gray-600 uppercase tracking-wide flex items-center gap-1.5">
        <Icon size={11} style={{ color: B.blue }} />
        {label}
      </label>
      {children}
    </div>
  );
}

const inputCls = "w-full rounded-xl border bg-white px-4 py-2.5 text-[14px] text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:border-transparent";

const inputStyle = (focused) => ({
  borderColor: focused ? B.blue : "#e2e8f0",
  boxShadow: focused ? `0 0 0 3px ${B.blue}18` : "none",
});

export default function BookDemo() {
  const [country, setCountry]     = useState(COUNTRIES[0]);
  const [phone, setPhone]         = useState("");
  const [email, setEmail]         = useState("");
  const [childName, setChild]     = useState("");
  const [course, setCourse]       = useState("");
  const [hasDevice, setDevice]    = useState("yes");
  const [showDial, setShowDial]   = useState(false);
  const [focused, setFocused]     = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <FontLoader />
      <section
        className="relative overflow-hidden py-22"
        style={{
          background: `linear-gradient(135deg, ${B.blue} 0%, ${B.light} 100%)`,
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        <WavyTop fill="#ffffff" />
        <WavyBottom fill="#ffffff" />

        {/* decorative dot grid */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />

        {/* decorative circles */}
        <div
          className="absolute pointer-events-none"
          aria-hidden="true"
          style={{ width: 560, height: 560, top: "50%", left: "18%", transform: "translate(-50%,-50%)" }}
        >
          <div className="absolute inset-0 rounded-full border-2 opacity-[0.12]" style={{ borderColor: "white" }} />
          <div className="absolute rounded-full border-2 opacity-[0.08]" style={{ inset: "-48px", borderColor: "white" }} />
          <div className="absolute rounded-full border-2 opacity-[0.05]" style={{ inset: "-100px", borderColor: "white" }} />
        </div>

        {/* floating icon bubbles */}
        {FLOATERS.map(({ Icon, top, left, accent, delay }, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.5 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay }}
            className="absolute hidden lg:flex items-center justify-center rounded-2xl shadow-xl pointer-events-none z-0 opacity-30"
            style={{ top, left, width: 52, height: 52, background: "white", boxShadow: `0 8px 24px ${accent}30` }}
            aria-hidden="true"
          >
            <Icon size={22} style={{ color: accent }} />
          </motion.div>
        ))}

        {/* ✅ FIX: className is a single clean string — no newlines or extra whitespace */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-0 min-h-[580px] items-center">

          {/* LEFT — hero copy */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="py-16 lg:py-20 flex flex-col gap-6 text-white z-10"
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest w-fit"
              style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
            >
              <Sparkles size={11} style={{ color: B.orange }} />
              Free Trial Class
            </span>

            <h2
              className="font-light leading-normal tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontFamily: "'Fredoka One', cursive" }}
            >
              Empower Your Child with{" "}
              <span style={{
                background: "linear-gradient(100deg,#ffb347,#ff6900)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Skills for Tomorrow
              </span>
            </h2>

            <p className="text-[15px] text-white/70 leading-relaxed max-w-md">
              Book a free demo class today. Our expert mentors will guide your child
              on the best learning path — live, interactive, and completely free.
            </p>

            {/* perks */}
            <ul className="flex flex-col gap-3 mt-2">
              {PERKS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-[14px] font-semibold text-white/90">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.15)" }}
                  >
                    <Icon size={13} color="white" />
                  </div>
                  {text}
                </li>
              ))}
            </ul>

            {/* trust row */}
            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/15">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=60&h=60&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=60&h=60&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face",
                ].map((src, i) => (
                  <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 object-cover" style={{ borderColor: B.blue }} />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} fill={B.orange} color={B.orange} />
                  ))}
                </div>
                <p className="text-[11px] text-white/60 mt-0.5">
                  Trusted by <span className="font-bold text-white/90">2,000+ parents</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — form card */}
          <div className="py-10 lg:py-14 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="w-full max-w-[440px] rounded-3xl bg-white p-7 sm:p-8"
              style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.22)" }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center gap-4 py-8"
                >
                  <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: "#dcfce7" }}>
                    <CheckCircle2 size={40} style={{ color: "#15803d" }} />
                  </div>
                  <h3 className="heading-oswald font-bold text-gray-900 text-2xl">You&apos;re Booked!</h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed">
                    Our team will contact you shortly to confirm your free demo class.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 rounded-xl px-6 py-2.5 text-sm font-bold text-white"
                    style={{ background: B.blue }}
                  >
                    Book Another
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <CalendarCheck size={18} style={{ color: B.blue }} />
                      <h3 className="heading-oswald font-bold text-gray-900 text-[1.25rem]">
                        Book Now &amp; Get Certified
                      </h3>
                    </div>
                    <div className="h-1 rounded-full mt-2 overflow-hidden bg-gray-100">
                      <div
                        className="h-full w-3/5 rounded-full"
                        style={{ background: `linear-gradient(90deg, ${B.blue}, ${B.light})` }}
                      />
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    {/* Phone */}
                    <Field label="Mobile Number" icon={Phone}>
                      <div className="flex gap-2">
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => setShowDial((p) => !p)}
                            className="flex items-center gap-1.5 rounded-xl border px-3 py-2.5 text-[13px] font-semibold bg-white h-full whitespace-nowrap transition-all duration-200"
                            style={{
                              borderColor: showDial ? B.blue : "#e2e8f0",
                              boxShadow: showDial ? `0 0 0 3px ${B.blue}18` : "none",
                            }}
                          >
                            <span>{country.flag}</span>
                            <span className="text-gray-700">{country.dial}</span>
                            <ChevronDown size={12} className="text-gray-400" />
                          </button>
                          {showDial && (
                            <div className="absolute top-full left-0 mt-1 z-30 rounded-xl bg-white shadow-xl border border-gray-100 overflow-hidden" style={{ minWidth: 130 }}>
                              {COUNTRIES.map((c) => (
                                <button
                                  key={c.code}
                                  type="button"
                                  onClick={() => { setCountry(c); setShowDial(false); }}
                                  className="flex items-center gap-2 w-full px-3 py-2 text-[13px] hover:bg-gray-50 transition-colors"
                                >
                                  <span>{c.flag}</span>
                                  <span className="text-gray-700 font-medium">{c.dial}</span>
                                  <span className="text-gray-400 text-[11px]">{c.code}</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                        <input
                          type="tel"
                          placeholder="Enter mobile number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          onFocus={() => setFocused("phone")}
                          onBlur={() => setFocused("")}
                          required
                          className={inputCls}
                          style={inputStyle(focused === "phone")}
                        />
                      </div>
                      <p className="text-[11px] text-gray-400 flex items-center gap-1">
                        <span style={{ color: B.light }}>ℹ</span>
                        Please share the number that you use for WhatsApp
                      </p>
                    </Field>

                    {/* Email */}
                    <Field label="E-mail" icon={Mail}>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused("")}
                        required
                        className={inputCls}
                        style={inputStyle(focused === "email")}
                      />
                    </Field>

                    {/* Child Name */}
                    <Field label="Child's Name" icon={User}>
                      <input
                        type="text"
                        placeholder="Enter child's name"
                        value={childName}
                        onChange={(e) => setChild(e.target.value)}
                        onFocus={() => setFocused("child")}
                        onBlur={() => setFocused("")}
                        required
                        className={inputCls}
                        style={inputStyle(focused === "child")}
                      />
                    </Field>

                    {/* Course */}
                    <Field label="Course" icon={BookOpen}>
                      <div className="relative">
                        <select
                          value={course}
                          onChange={(e) => setCourse(e.target.value)}
                          onFocus={() => setFocused("course")}
                          onBlur={() => setFocused("")}
                          required
                          className={`${inputCls} appearance-none pr-10 cursor-pointer`}
                          style={inputStyle(focused === "course")}
                        >
                          <option value="" disabled>Select a course</option>
                          {COURSES.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      </div>
                    </Field>

                    {/* Device radio */}
                    <Field label="Do you have a Laptop or Desktop?" icon={Laptop}>
                      <div className="flex gap-5">
                        {["yes", "no"].map((val) => (
                          <label
                            key={val}
                            className="flex items-center gap-2 cursor-pointer text-[13px] font-semibold text-gray-700 select-none"
                          >
                            <div
                              onClick={() => setDevice(val)}
                              className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200"
                              style={{
                                borderColor: hasDevice === val ? B.blue : "#d1d5db",
                                background: hasDevice === val ? B.blue : "white",
                              }}
                            >
                              {hasDevice === val && <div className="w-2 h-2 rounded-full bg-white" />}
                            </div>
                            {val === "yes" ? "Yes" : "No"}
                          </label>
                        ))}
                      </div>
                    </Field>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full mt-1 rounded-2xl py-3.5 text-[15px] font-extrabold text-white flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                      style={{
                        background: `linear-gradient(135deg, ${B.light}, ${B.blue})`,
                        boxShadow: `0 8px 28px ${B.blue}40`,
                      }}
                    >
                      <CalendarCheck size={16} />
                      Book a Free Demo Class
                    </button>

                    <p className="text-center text-[11px] text-gray-400">
                      🔒 Laptop or desktop is recommended for the best experience
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}