"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap, Users, Briefcase, Target, Award,
  TrendingUp, ArrowRight, Rocket, Sparkles, Star,
  BookOpen, Globe, Zap,
} from "lucide-react";

/* ─────────────────────────────────────────
   GOOGLE FONTS
───────────────────────────────────────── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');
    @keyframes floatBob  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-9px)} }
    @keyframes spinStar  { 0%{transform:rotate(0deg)scale(1)} 50%{transform:rotate(180deg)scale(1.2)} 100%{transform:rotate(360deg)scale(1)} }
    @keyframes pulseDot  { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.5);opacity:.5} }
    .float-bob { animation: floatBob 3.5s ease-in-out infinite; }
    .spin-star  { animation: spinStar 8s linear infinite; }
    .pulse-dot  { animation: pulseDot 1.8s ease-in-out infinite; }
  `}</style>
);

/* ─────────────────────────────────────────
   BRAND
───────────────────────────────────────── */
const B = {
  violet: "#7c3aed", purple: "#a855f7",
  sky:    "#0ea5e9", cyan:   "#22d3ee",
  rose:   "#f43f5e", orange: "#f97316",
  amber:  "#fbbf24", mint:   "#10b981",
  navy:   "#0f1b4c",
};

/* ─────────────────────────────────────────
   HELPERS
───────────────────────────────────────── */
function DottedBg({ color = B.violet, opacity = 0.04, size = 28 }) {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
      style={{
        backgroundImage: `radial-gradient(circle, ${color} 1.5px, transparent 1.5px)`,
        backgroundSize: `${size}px ${size}px`, opacity,
      }} />
  );
}

function WavyBottom({ fill = "#fff" }) {
  return (
    <div className="absolute bottom-0 left-0 w-full pointer-events-none z-[4]" style={{ lineHeight: 0 }} aria-hidden="true">
      <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z" fill={fill} />
      </svg>
    </div>
  );
}

function WavyTop({ fill = "#fff" }) {
  return (
    <div className="absolute top-0 left-0 w-full pointer-events-none z-[4]" style={{ lineHeight: 0 }} aria-hidden="true">
      <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,0 L0,0 Z" fill={fill} />
      </svg>
    </div>
  );
}

function SpinningStar({ size = 14, color, style: s }) {
  return (
    <div className="absolute pointer-events-none z-[2] spin-star" style={s} aria-hidden="true">
      <Star size={size} fill={color} color={color} />
    </div>
  );
}

function FloatBob({ children, delay = 0, className = "", style: s }) {
  return (
    <div className={`float-bob ${className}`} style={{ animationDelay: `${delay}s`, ...s }}>
      {children}
    </div>
  );
}

function PulsingDots({ colors, center = false }) {
  return (
    <div className={`flex gap-2 mt-5 ${center ? "justify-center" : ""}`} aria-hidden="true">
      {colors.map((c, i) => (
        <div key={i} className="w-2 h-2 rounded-full pulse-dot"
          style={{ background: c, animationDelay: `${i * 0.18}s` }} />
      ))}
    </div>
  );
}

function FadeIn({ children, delay = 0, className = "", style: s }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className} style={s}>
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const DIVISIONS = [
  {
    Icon: GraduationCap, color: B.sky, bg: "#e0f2fe",
    title: "SkillzRevo Academy",
    desc: "Future-focused training & upskilling programs designed for professionals and students alike.",
    link: "https://academy.skillzrevo.com",
  },
  {
    Icon: Users, color: B.orange, bg: "#fff3e0",
    title: "SkillzRevo Talent",
    desc: "Strategic staffing & recruitment solutions that connect top talent with the right opportunities.",
    link: "https://talent.skillzrevo.com",
  },
  {
    Icon: Briefcase, color: B.mint, bg: "#d1fae5",
    title: "SkillzRevo Consulting",
    desc: "Data-driven enterprise consulting & digital transformation services for measurable business impact.",
    link: "https://consulting.skillzrevo.com",
  },
];

const HIGHLIGHTS = [
  { Icon: Award,     color: B.violet, label: "IIT-Led Excellence",  desc: "Founded by Masters and PhD holders from prestigious IITs"  },
  { Icon: Target,    color: B.sky,    label: "Global Reach",         desc: "Serving clients and learners across multiple continents"    },
  { Icon: TrendingUp,color: B.orange, label: "Proven Impact",        desc: "Thousands of successful career transformations"            },
];

const STATS = [
  { value: "10,000+", label: "Learners Trained",  color: B.sky    },
  { value: "500+",    label: "Corporate Clients", color: B.violet },
  { value: "95%",     label: "Success Rate",      color: B.mint   },
];

const DOT_COLORS = [B.violet, B.sky, B.orange, B.mint, B.rose];

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
export default function WhoWeAre() {
  return (
    <>
      <FontLoader />
      <section
        className="relative overflow-hidden"
        aria-label="Who We Are"
        style={{
          background: "linear-gradient(160deg, #f5f0ff 0%, #fff0f7 40%, #f0f9ff 70%, #f0fff8 100%)",
          fontFamily: "'Nunito', sans-serif",
          paddingTop: 96, paddingBottom: 96,
        }}
      >
        <DottedBg color={B.violet} opacity={0.038} size={30} />
        <WavyTop  fill="#ffffff" />
        <WavyBottom fill="#ffffff" />

        {/* Blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div style={{ position: "absolute", top: -80, right: -80, width: 460, height: 460, borderRadius: "50%",
            background: `radial-gradient(circle, ${B.violet}1e, transparent 70%)`, filter: "blur(60px)" }} />
          <div style={{ position: "absolute", bottom: -60, left: -60, width: 380, height: 380, borderRadius: "50%",
            background: `radial-gradient(circle, ${B.orange}18, transparent 70%)`, filter: "blur(55px)" }} />
          <div style={{ position: "absolute", top: "40%", right: "30%", width: 280, height: 280, borderRadius: "50%",
            background: `radial-gradient(circle, ${B.sky}14, transparent 70%)`, filter: "blur(50px)" }} />
        </div>

        {/* Spinning stars — desktop */}
        <div className="hidden lg:block" aria-hidden="true">
          <SpinningStar size={15} color={B.amber}  style={{ top: "8%",   left: "3%"  }} />
          <SpinningStar size={11} color={B.rose}   style={{ top: "84%",  left: "5%"  }} />
          <SpinningStar size={13} color={B.violet} style={{ top: "6%",   right: "4%" }} />
          <SpinningStar size={10} color={B.sky}    style={{ top: "86%",  right: "5%" }} />
          <SpinningStar size={9}  color={B.mint}   style={{ top: "48%",  left: "1%"  }} />
          <SpinningStar size={12} color={B.orange} style={{ top: "46%",  right: "2%" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          {/* ── PART 1: Who We Are — image + copy ── */}
          <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">

            {/* Left — image */}
            <FadeIn className="relative order-2 lg:order-1">
              {/* Glow */}
              <div className="absolute pointer-events-none rounded-[32px]"
                style={{ inset: "-16px", background: `radial-gradient(ellipse at 40% 50%, ${B.violet}22, ${B.orange}14, transparent 70%)`, filter: "blur(28px)" }}
                aria-hidden="true" />
              {/* Dashed border ring */}
              <div className="absolute pointer-events-none rounded-3xl z-[2]"
                style={{ inset: "-4px", border: `2.5px dashed ${B.violet}28` }} aria-hidden="true" />

              <div className="relative rounded-3xl overflow-hidden"
                style={{ height: 480, border: `2px solid ${B.violet}18`,
                  boxShadow: `0 28px 70px ${B.violet}18, 0 4px 16px rgba(0,0,0,0.06)` }}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="SkillzRevo team collaboration"
                  className="w-full h-full object-cover"
                />
                {/* Scrim */}
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(15,27,76,0.55) 0%, transparent 50%)" }} />
                {/* Gradient top strip */}
                <div className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ background: `linear-gradient(90deg, ${B.sky}, ${B.violet}, ${B.rose})` }} aria-hidden="true" />
              </div>

              {/* Floating stat badge */}
              <FloatBob delay={0.3} style={{ position: "absolute", bottom: "8%", left: "-1.5rem", zIndex: 10 }}>
                <div className="flex items-center gap-3 rounded-2xl px-4 py-3"
                  style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)",
                    border: `1.5px solid ${B.violet}20`, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${B.violet}, ${B.purple})` }}>
                    <Award size={18} color="white" strokeWidth={2} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Fredoka One', cursive", color: B.navy, fontSize: "0.95rem", lineHeight: 1 }}>
                      Global Leader
                    </p>
                    <p className="text-[11px] text-gray-400 font-bold">Training & Transformation</p>
                  </div>
                </div>
              </FloatBob>

              {/* Top-right chip */}
              <FloatBob delay={1} style={{ position: "absolute", top: "10%", right: "-1.5rem", zIndex: 10 }}>
                <div className="flex items-center gap-2 rounded-full px-4 py-2"
                  style={{ background: `linear-gradient(135deg, ${B.amber}, ${B.orange})`,
                    boxShadow: `0 6px 18px ${B.orange}45` }}>
                  <Sparkles size={13} color="white" />
                  <span style={{ fontFamily: "'Fredoka One', cursive", color: "white", fontSize: "0.82rem" }}>
                    IIT-Led Excellence
                  </span>
                </div>
              </FloatBob>
            </FadeIn>

            {/* Right — copy */}
            <FadeIn delay={0.15} className="order-1 lg:order-2 flex flex-col gap-5">
              {/* Eyebrow */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-bold uppercase tracking-widest border-2"
                  style={{ color: B.violet, borderColor: `${B.violet}38`, background: "linear-gradient(135deg, #ede9fe, #fce7f3)" }}>
                  <FloatBob style={{ display: "flex" }}><Target size={13} style={{ color: B.orange }} /></FloatBob>
                  About Us
                </span>
              </div>

              <h2 style={{ fontFamily: "'Fredoka One', cursive", fontSize: "clamp(2rem,4.2vw,3.2rem)", color: B.navy, lineHeight: 1.06 }}>
                Who{" "}
                <span style={{ background: `linear-gradient(120deg, ${B.sky}, ${B.violet})`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  We Are
                </span>
              </h2>

              <p className="text-[16px] text-gray-500 leading-relaxed" style={{ fontWeight: 700 }}>
                We proudly serve as a{" "}
                <span style={{ color: B.violet, fontWeight: 900 }}>global trailblazing training solutions provider</span>,
                revolutionizing upskilling by offering comprehensive and specialized training programs with enhanced
                pedagogy, technology, and experienced industry experts.
              </p>

              <p className="text-[14px] text-gray-500 leading-relaxed" style={{ fontWeight: 700 }}>
                Founded and led by accomplished{" "}
                <span style={{ color: B.navy, fontWeight: 900 }}>Masters and PhD holders from IITs</span>, we are dedicated
                to evolving education in emerging technologies — providing classroom and online training for high-quality,
                hands-on experiences across numerous certification programs.
              </p>

              {/* Highlight cards */}
              <div className="grid sm:grid-cols-3 gap-3 mt-1">
                {HIGHLIGHTS.map(({ Icon, color, label, desc }, i) => (
                  <motion.div key={label}
                    whileHover={{ y: -5, transition: { type: "spring", stiffness: 400, damping: 18 } }}
                    className="rounded-2xl p-4 border-2 flex flex-col gap-2"
                    style={{ background: `${color}0a`, borderColor: `${color}28`,
                      boxShadow: `0 4px 14px ${color}10` }}>
                    <FloatBob delay={i * 0.2} style={{ display: "flex" }}>
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                        style={{ background: `linear-gradient(135deg, ${color}, ${color}bb)`,
                          boxShadow: `0 4px 12px ${color}35` }}>
                        <Icon size={16} color="white" strokeWidth={2} />
                      </div>
                    </FloatBob>
                    <p style={{ fontFamily: "'Fredoka One', cursive", color: B.navy, fontSize: "0.85rem", lineHeight: 1.2 }}>
                      {label}
                    </p>
                    <p className="text-[11px] text-gray-400 font-bold leading-snug">{desc}</p>
                  </motion.div>
                ))}
              </div>

              <PulsingDots colors={DOT_COLORS} />
            </FadeIn>
          </div>

          {/* ── PART 2: Three Pillars ── */}
          <FadeIn className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-bold uppercase tracking-widest border-2 mb-4"
              style={{ color: B.orange, borderColor: `${B.orange}38`, background: "linear-gradient(135deg, #fff3e0, #fff8f0)" }}>
              <FloatBob style={{ display: "flex" }}><Rocket size={13} style={{ color: B.orange }} /></FloatBob>
              Our Divisions
            </span>
            <h3 style={{ fontFamily: "'Fredoka One', cursive", fontSize: "clamp(1.6rem,3.5vw,2.5rem)", color: B.navy }}>
              Three Pillars of{" "}
              <span style={{ background: `linear-gradient(120deg, ${B.orange}, ${B.rose})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Excellence
              </span>
            </h3>
            <p className="mt-3 text-[15px] text-gray-500 max-w-xl mx-auto" style={{ fontWeight: 700 }}>
              Comprehensive solutions spanning education, talent, and enterprise transformation.
            </p>
            <div className="flex justify-center">
              <PulsingDots colors={[B.sky, B.orange, B.mint, B.violet, B.rose]} center />
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {DIVISIONS.map((div, i) => (
              <FadeIn key={div.title} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -8, transition: { type: "spring", stiffness: 380, damping: 20 } }}
                  className="flex flex-col h-full rounded-3xl overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.92)", border: `2px solid ${div.color}22`,
                    boxShadow: `0 8px 28px ${div.color}10` }}>
                  {/* Color top strip */}
                  <div style={{ height: 5, background: `linear-gradient(90deg, ${div.color}, ${B.orange})` }} />

                  <div className="flex flex-col flex-1 p-6 gap-4">
                    <FloatBob delay={i * 0.15}>
                      <div className="w-13 h-13 rounded-2xl flex items-center justify-center"
                        style={{ width: 52, height: 52,
                          background: `linear-gradient(135deg, ${div.color}, ${div.color}bb)`,
                          boxShadow: `0 6px 18px ${div.color}38` }}>
                        <div.Icon size={23} color="white" strokeWidth={2} />
                      </div>
                    </FloatBob>

                    <h3 style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.15rem", color: B.navy, lineHeight: 1.15 }}>
                      {div.title}
                    </h3>

                    <p className="text-[13px] text-gray-500 leading-relaxed flex-1" style={{ fontWeight: 700 }}>
                      {div.desc}
                    </p>

                    <motion.a href={div.link}
                      whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 400, damping: 18 }}
                      className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-white self-start text-[13px] font-bold"
                      style={{ background: `linear-gradient(135deg, ${div.color}, ${div.color}bb)`,
                        boxShadow: `0 4px 14px ${div.color}35`,
                        fontFamily: "'Fredoka One', cursive", fontSize: "0.82rem" }}>
                      Explore <ArrowRight size={12} strokeWidth={2.5} />
                    </motion.a>
                  </div>

                  {/* Hover bottom bar */}
                  <motion.div className="h-1.5 w-full" initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }} transition={{ duration: 0.3 }}
                    style={{ background: `linear-gradient(90deg, ${div.color}, ${B.orange})`, transformOrigin: "left" }} />
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* ── PART 3: Closing stats card ── */}
          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden p-10 text-center border-2"
              style={{ background: "rgba(255,255,255,0.88)", borderColor: `${B.violet}20`,
                boxShadow: `0 16px 48px ${B.violet}10`, backdropFilter: "blur(12px)" }}>
              {/* Top strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5"
                style={{ background: `linear-gradient(90deg, ${B.sky}, ${B.violet}, ${B.orange}, ${B.rose})` }}
                aria-hidden="true" />
              <DottedBg color={B.violet} opacity={0.025} size={24} />

              <p className="text-[17px] text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8 relative z-10" style={{ fontWeight: 700 }}>
                With a growing{" "}
                <span style={{ color: B.sky, fontWeight: 900 }}>global presence</span>, we deliver{" "}
                <span style={{ background: `linear-gradient(120deg, ${B.violet}, ${B.sky})`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  fontWeight: 900 }}>
                  real results
                </span>{" "}
                through a unique mix of innovation, expertise, and hands-on experience.
              </p>

              <div className="flex flex-wrap justify-center gap-5 relative z-10">
                {STATS.map(({ value, label, color }, i) => (
                  <motion.div key={label}
                    whileHover={{ y: -5, scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 18 } }}
                    className="rounded-2xl px-8 py-5 border-2"
                    style={{ background: `${color}0d`, borderColor: `${color}25`,
                      boxShadow: `0 6px 18px ${color}12` }}>
                    <FloatBob delay={i * 0.2} style={{ display: "flex", justifyContent: "center" }}>
                      <p style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.8rem", color, lineHeight: 1 }}>
                        {value}
                      </p>
                    </FloatBob>
                    <p className="text-[12px] text-gray-400 mt-1 font-bold">{label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>
      </section>
    </>
  );
}