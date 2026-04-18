"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  UserCircle2,
  MonitorPlay,
  Compass,
  Rocket,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Phone,
} from "lucide-react";
import CTAButton from "./CTAbutton";

const B = { blue: "#1642d6", light: "#1d8fff", orange: "#ff6900" };

const STEPS = [
  {
    num: "01",
    title: "Share Student Details",
    desc: "Tell us about the student's age, interests, and learning goals so we can recommend the most suitable technology program.",
    Icon: UserCircle2,
    accent: B.blue,
    bg: "#dbeafe",
    lightBg: "#eff6ff",
    tag: "Getting Started",
  },
  {
    num: "02",
    title: "Attend a Free Demo Class",
    desc: "Join a live interactive demo session with our expert trainer and experience how our classes work.",
    Icon: MonitorPlay,
    accent: "#6d28d9",
    bg: "#ede9fe",
    lightBg: "#f5f3ff",
    tag: "Free Session",
  },
  {
    num: "03",
    title: "Get Personalized Guidance",
    desc: "Our learning advisors will guide you on the best course, learning path, and schedule based on the student's goals.",
    Icon: Compass,
    accent: B.orange,
    bg: "#ffedd5",
    lightBg: "#fff7ed",
    tag: "Custom Roadmap",
  },
  {
    num: "04",
    title: "Enroll & Start Learning",
    desc: "Choose your program, enroll easily, and start building real-world technology skills through projects and hands-on learning.",
    Icon: Rocket,
    accent: "#15803d",
    bg: "#dcfce7",
    lightBg: "#f0fdf4",
    tag: "Begin Journey",
  },
];

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

/* single step card */
function StepCard({ step, index, total }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const isLast = index === total - 1;

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center"
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      {/* ── connector line (desktop: horizontal, mobile: vertical) ── */}
      {!isLast && (
        <>
          {/* horizontal — visible on lg */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{
              duration: 0.7,
              delay: index * 0.18 + 0.5,
              ease: "easeInOut",
            }}
            className="hidden lg:block absolute top-[52px] left-[calc(50%+52px)] right-0 h-0.5 origin-left z-0"
            style={{
              background: `linear-gradient(90deg, ${step.accent}80, ${STEPS[index + 1].accent}80)`,
            }}
          />
          {/* dashed arrow overlay on the line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.18 + 1.1 }}
            className="hidden lg:flex absolute top-[45px] -right-3 z-10"
            style={{ color: STEPS[index + 1].accent }}
          >
            <ArrowRight size={16} />
          </motion.div>

          {/* vertical — visible on mobile/tablet */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.18 + 0.5 }}
            className="lg:hidden w-0.5 h-12 my-1 origin-top"
            style={{
              background: `linear-gradient(180deg, ${step.accent}80, ${STEPS[index + 1].accent}80)`,
            }}
          />
        </>
      )}

      {/* ── icon node ── */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 18,
          delay: index * 0.18,
        }}
        className="relative z-10 flex-shrink-0"
      >
        {/* outer glow ring — pulses once */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={inView ? { scale: 1.45, opacity: 0 } : {}}
          transition={{
            duration: 1,
            delay: index * 0.18 + 0.3,
            ease: "easeOut",
          }}
          className="absolute inset-0 rounded-full"
          style={{ background: step.accent }}
        />

        <div
          className="w-[104px] h-[104px] rounded-full flex flex-col items-center justify-center shadow-xl relative"
          style={{
            background: `linear-gradient(135deg, ${step.accent}, ${step.accent}cc)`,
            boxShadow: `0 12px 32px ${step.accent}45`,
          }}
        >
          <step.Icon size={30} color="white" strokeWidth={1.8} />
          <span className="text-[10px] font-extrabold text-white/70 tracking-widest mt-1 uppercase">
            Step {step.num}
          </span>
        </div>

        {/* step number badge */}
        <div
          className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-extrabold text-white shadow-md border-2 border-white"
          style={{ background: step.accent }}
        >
          {index + 1}
        </div>
      </motion.div>

      {/* ── card body ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.5,
          delay: index * 0.18 + 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-5 rounded-3xl p-6 w-full text-center flex flex-col items-center gap-3 group cursor-default"
        style={{
          background: "white",
          border: `1.5px solid ${step.accent}25`,
          boxShadow: `0 4px 24px ${step.accent}12`,
        }}
      >
        {/* tag pill */}
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest"
          style={{ background: step.bg, color: step.accent }}
        >
          <CheckCircle2 size={10} />
          {step.tag}
        </span>

        <h3
          className="heading-oswald font-bold text-gray-900 leading-tight"
          style={{ fontSize: "clamp(1rem, 1.6vw, 1.15rem)" }}
        >
          {step.title}
        </h3>

        <p className="text-[13px] text-gray-500 leading-relaxed max-w-[220px]">
          {step.desc}
        </p>

        {/* bottom accent line */}
        <div
          className="w-10 h-1 rounded-full mt-1"
          style={{ background: step.accent }}
        />
      </motion.div>
    </div>
  );
}

export default function LearningJourney() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section
      className="relative py-22 overflow-hidden"
      style={{ background: "#e6edff", fontFamily: "'Nunito', sans-serif" }}
    >
      <FontLoader />
      <WavyTop fill="#ffffff" />
      <WavyBottom fill="#ffffff" />
      {/* blobs */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute rounded-full blur-3xl opacity-[0.07]"
          style={{
            width: 640,
            height: 640,
            top: "-160px",
            left: "-160px",
            background: `radial-gradient(circle, ${B.blue}, transparent 70%)`,
          }}
        />
        <div
          className="absolute rounded-full blur-3xl opacity-[0.06]"
          style={{
            width: 500,
            height: 500,
            bottom: "-100px",
            right: "-100px",
            background: `radial-gradient(circle, ${B.orange}, transparent 70%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(${B.blue} 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest border mb-5"
            style={{
              color: B.blue,
              borderColor: `${B.blue}30`,
              background: `${B.blue}0d`,
            }}
          >
            <Sparkles size={11} style={{ color: B.orange }} />
            Learning Journey
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="heading-oswald font-normal  leading-tight tracking-tight text-gray-900"
            style={{
              fontSize: "clamp(1.9rem, 3.8vw, 2.9rem)",
              fontFamily: "'Fredoka One', cursive",
            }}
          >
            How Our{" "}
            <span
              style={{
                background: `linear-gradient(105deg, ${B.light}, ${B.blue})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Learning Program
            </span>{" "}
            Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-[15px] text-gray-500 leading-relaxed"
          >
            A simple step-by-step journey to start learning future-ready
            technology skills.
          </motion.p>
        </div>

        {/* ── roadmap track ── */}
        {/* Desktop: 4-column grid with horizontal connectors */}
        {/* Mobile: single column with vertical connectors */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-6 items-start">
          {STEPS.map((step, i) => (
            <StepCard
              key={step.num}
              step={step}
              index={i}
              total={STEPS.length}
            />
          ))}
        </div>

        {/* ── bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16"
        >
          <CTAButton
            label="Book a Free Demo Class"
            icon={Rocket}
            text="Book a Free Demo Class"
            className="flex gap-2 items-center justify-center bg-linear-120 from-blue-500 to-blue-700 text-white rounded-2xl px-8 py-3.5 text-sm font-bold transition-all duration-200 hover:scale-105 active:scale-95 "
            ctaLabel="Book a Free Demo CLass"
            pageContext="Homepage"
          />
          <a href="#courses">
            <button
              className="inline-flex items-center gap-2 rounded-2xl border px-8 py-3.5 text-sm font-bold transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                color: B.orange,
                borderColor: `${B.orange}40`,
                background: `${B.orange}0d`,
              }}
            >
              <MonitorPlay size={15} />
              Explore Courses
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
