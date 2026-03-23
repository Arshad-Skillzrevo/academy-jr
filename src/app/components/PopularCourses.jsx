"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Brain,
  BarChart2,
  ShieldCheck,
  Cloud,
  Terminal,
  Coffee,
  Database,
  Layers,
  Code2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

/* ─────────────────────────────────────────
   BRAND
───────────────────────────────────────── */
const B = {
  blue:      "#1642d6",
  lightBlue: "#1d8fff",
  orange:    "#ff6900",
};

/* ─────────────────────────────────────────
   COURSES DATA
───────────────────────────────────────── */
const COURSES = [
  {
    title:  "Web Development",
    sub:    "Build the web of tomorrow",
    bg:     "#dbeafe",
    accent: B.blue,
    iconBg: B.blue,
    Icon:   Globe,
    img:    "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?w=400&h=320&fit=crop&q=80",
  },
  {
    title:  "AI & ML",
    sub:    "Teach machines to think",
    bg:     "#ede9fe",
    accent: "#6d28d9",
    iconBg: "#6d28d9",
    Icon:   Brain,
    img:    "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=320&fit=crop&q=80",
  },
  {
    title:  "Data Analysis",
    sub:    "Turn data into insight",
    bg:     "#dcfce7",
    accent: "#15803d",
    iconBg: "#15803d",
    Icon:   BarChart2,
    img:    "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=400&h=320&fit=crop&q=80",
  },
  {
    title:  "Cyber Security",
    sub:    "Protect the digital world",
    bg:     "#fee2e2",
    accent: "#dc2626",
    iconBg: "#dc2626",
    Icon:   ShieldCheck,
    img:    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=320&fit=crop&q=80",
  },
  {
    title:  "Cloud Computing",
    sub:    "Scale without limits",
    bg:     "#e0f2fe",
    accent: "#0369a1",
    iconBg: "#0369a1",
    Icon:   Cloud,
    img:    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=320&fit=crop&q=80",
  },
  {
    title:  "Python Programming",
    sub:    "Code that does anything",
    bg:     "#ffedd5",
    accent: B.orange,
    iconBg: B.orange,
    Icon:   Terminal,
    img:    "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=320&fit=crop&q=80",
  },
  {
    title:  "Java Programming",
    sub:    "Power enterprise software",
    bg:     "#fef9c3",
    accent: "#b45309",
    iconBg: "#b45309",
    Icon:   Coffee,
    img:    "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&h=320&fit=crop&q=80",
  },
  {
    title:  "Database Management",
    sub:    "Master data at scale",
    bg:     "#f0fdf4",
    accent: "#166534",
    iconBg: "#166534",
    Icon:   Database,
    img:    "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=320&fit=crop&q=80",
  },
  {
    title:  "Full Stack – AI & ML",
    sub:    "Build intelligent apps",
    bg:     "#fce7f3",
    accent: "#be185d",
    iconBg: "#be185d",
    Icon:   Layers,
    img:    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=320&fit=crop&q=80",
  },
  {
    title:  "Full Stack – Web Dev",
    sub:    "Front to back, end to end",
    bg:     "#e0e7ff",
    accent: B.blue,
    iconBg: B.lightBlue,
    Icon:   Code2,
    img:    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=320&fit=crop&q=80",
  },
];

/* ─────────────────────────────────────────
   VIEW-ALL CARD
───────────────────────────────────────── */
function ViewAllCard() {
  const swatches = [B.blue, B.orange, B.lightBlue, "#a855f7"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.55 }}
      whileHover={{ scale: 1.03, y: -4 }}
      className="group relative rounded-3xl cursor-pointer overflow-hidden flex flex-col justify-between p-6 min-h-[220px]"
      style={{ background: "#fff4ed", border: "1.5px solid #ffd4b3",
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}
    >
      {/* Decorative colour swatches */}
      <div className="grid grid-cols-2 gap-2 w-fit mb-auto">
        {swatches.map((c, i) => (
          <div
            key={i}
            className="w-10 h-10 rounded-xl opacity-80"
            style={{ background: c }}
          />
        ))}
      </div>

      <div className="mt-4">
        <h3 className="heading-oswald font-bold text-xl text-gray-900 leading-tight">
          View All
        </h3>
        <p className="text-[12px] text-gray-500 mt-0.5 font-medium">
          Explore all our courses
        </p>
      </div>

      {/* Arrow button */}
      <div
        className="absolute bottom-5 right-5 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110"
        style={{ background: B.orange }}
      >
        <ArrowRight size={18} color="white" />
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   COURSE CARD
───────────────────────────────────────── */
function CourseCard({ course, index }) {
  const { title, sub, bg, accent, iconBg, Icon, img } = course;

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.055 }}
      whileHover={{ scale: 1.03, y: -4 }}
      className="group relative rounded-3xl overflow-hidden cursor-pointer min-h-[220px] flex flex-col justify-between"
      style={{
        background: bg,
        border: "1.5px solid rgba(0,0,0,0.06)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
      }}
    >


      {/* ── Bottom image ── */}
      <div className="relative h-[150px] mt-0 overflow-hidden">
        {/* fade bleed from card bg */}
        <div
          className="absolute inset-x-0 top-0 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, ${bg} 100%, transparent 0%)` }}
        />
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* ── Top content ── */}
      <div className="p-3 z-10 relative flex  gap-2">
        {/* Icon badge */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
          style={{ background: iconBg }}
        >
          <Icon size={20} color="white" strokeWidth={2} />
        </div>

        <div>
          <h3
            className="heading-oswald font-bold text-[16px] leading-tight"
            style={{ color: accent }}
          >
            {title}
          </h3>
          <p className="text-[12px] text-gray-500 mt-0.5 font-medium leading-snug">
            {sub}
          </p>
        </div>
      </div>

      
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   SECTION
───────────────────────────────────────── */
export default function PopularCourses() {
  return (
    <section className="relative py-20 overflow-hidden" style={{ background: "#f8faff" }}>

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute rounded-full blur-3xl opacity-[0.08]"
          style={{ width: 600, height: 600, top: "-100px", left: "-150px",
            background: `radial-gradient(circle, ${B.blue}, transparent 70%)` }}
        />
        <div
          className="absolute rounded-full blur-3xl opacity-[0.07]"
          style={{ width: 500, height: 500, bottom: "-80px", right: "-100px",
            background: `radial-gradient(circle, ${B.orange}, transparent 70%)` }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(${B.blue} 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          

          {/* Main heading */}
          <h2
            className="heading-oswald font-bold uppercase leading-tight tracking-tight text-gray-900"
            style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.9rem)" }}
          >
            Future Skills for{" "}
            <span
              style={{
                background: `linear-gradient(105deg, ${B.lightBlue}, ${B.blue})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Young Innovators
            </span>
          </h2>

          <p className="mt-4 text-[15px] text-gray-500 leading-relaxed">
            Programs designed to build creativity, critical thinking,
            and real-world technology skills in kids.
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {COURSES.map((course, i) => (
            <CourseCard key={course.title} course={course} index={i} />
          ))}
          {/* <ViewAllCard /> */}
        </div>

      </div>
    </section>
  );
}