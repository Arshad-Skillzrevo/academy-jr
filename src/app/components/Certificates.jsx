"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, Calendar, Building2, Star, Sparkles, Shield, Rocket, Trophy, Zap } from "lucide-react";
import Image from "next/image";

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
  violet:  "#7c3aed",
  purple:  "#a855f7",
  sky:     "#0ea5e9",
  cyan:    "#22d3ee",
  rose:    "#f43f5e",
  orange:  "#f97316",
  amber:   "#fbbf24",
  mint:    "#10b981",
  blue:    "#2563eb",
};

/* ─────────────────────────────────────────
   HELPERS
───────────────────────────────────────── */
function FloatBob({ children, delay = 0, amplitude = 8, duration = 3.5, className, style }) {
  return (
    <motion.div
      className={className}
      style={style}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
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
        rotate: { duration: 9,   repeat: Infinity, ease: "linear",     delay },
        scale:  { duration: 2.5, repeat: Infinity, ease: "easeInOut",  delay },
      }}
    >
      <Star size={size} fill={color} color={color} />
    </motion.div>
  );
}

function DottedBg({ color = "#7c3aed", opacity = 0.045, size = 28 }) {
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
    <div className="absolute top-0 left-0 w-full pointer-events-none z-[4]" style={{ lineHeight: 0 }} aria-hidden="true">
      <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,0 L0,0 Z" fill={fill} />
      </svg>
    </div>
  );
}

function WavyBottom({ fill = "#ffffff" }) {
  return (
    <div className="absolute bottom-0 left-0 w-full pointer-events-none z-[4]" style={{ lineHeight: 0 }} aria-hidden="true">
      <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z" fill={fill} />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────
   PARTNERSHIP DATA
───────────────────────────────────────── */
const DETAILS = [
  {
    icon: Building2,
    label: "Organization",
    value: "SkillzRevo Solutions Private Limited",
    color: BRAND.sky,
    bg: "#e0f2fe",
  },
  {
    icon: CheckCircle,
    label: "Recognition Status",
    value: "Recognised Skilling Partner",
    color: BRAND.mint,
    bg: "#d1fae5",
  },
  {
    icon: Award,
    label: "Certifying Authority",
    value: "IT-ITeS SSC Nasscom",
    color: BRAND.violet,
    bg: "#ede9fe",
  },
  {
    icon: Calendar,
    label: "Validity Period",
    value: "24/11/2025 – 24/11/2026",
    color: BRAND.orange,
    bg: "#fff3e0",
  },
];

const TAGS = [
  { label: "Skill India",       color: BRAND.sky,    bg: "#e0f2fe" },
  { label: "IT-ITeS Sector",    color: BRAND.violet, bg: "#ede9fe" },
  { label: "Nasscom Certified", color: BRAND.orange, bg: "#fff3e0" },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { animate: { transition: { staggerChildren: 0.1 } } };

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
export default function PartnershipShowcase() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <FontLoader />
      <section
        className="relative w-full py-28 overflow-hidden"
        aria-label="Official Partnership Recognition"
        style={{
          background: "linear-gradient(135deg, #eef2ff 0%, #fdf4ff 40%, #fff8ee 100%)",
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        <DottedBg color={BRAND.violet} opacity={0.04} size={30} />
        <WavyTop  fill="#ffffff" />
        <WavyBottom fill="#ffffff" />

        {/* Blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div style={{ position: "absolute", top: -80, right: -80, width: 420, height: 420, borderRadius: "50%",
            background: `radial-gradient(circle, ${BRAND.violet}20, transparent 70%)`, filter: "blur(55px)" }} />
          <div style={{ position: "absolute", bottom: -60, left: -60, width: 340, height: 340, borderRadius: "50%",
            background: `radial-gradient(circle, ${BRAND.amber}22, transparent 70%)`, filter: "blur(50px)" }} />
        </div>

        {/* Spinning stars — desktop */}
        <div className="hidden md:block" aria-hidden="true">
          <SpinningStar size={15} color={BRAND.amber}  top="12%"  left="3%"   delay={0}   />
          <SpinningStar size={11} color={BRAND.rose}   top="78%"  left="6%"   delay={1}   />
          <SpinningStar size={13} color={BRAND.violet} top="10%"  right="4%"  delay={0.5} />
          <SpinningStar size={10} color={BRAND.sky}    top="80%"  right="6%"  delay={1.5} />
          <SpinningStar size={9}  color={BRAND.mint}   top="50%"  left="1%"   delay={2}   />
          <SpinningStar size={12} color={BRAND.orange} top="48%"  right="2%"  delay={0.8} />
        </div>

        <div className="relative z-10  mx-auto px-6">

          {/* ── HEADER ── */}
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-14"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex justify-center mb-4">
              <span
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-bold uppercase tracking-widest border-2"
                style={{
                  color: BRAND.violet,
                  borderColor: `${BRAND.violet}40`,
                  background: "linear-gradient(135deg, #ede9fe, #fce7f3)",
                }}
              >
                <FloatBob amplitude={4} duration={2.2} style={{ display: "flex" }}>
                  <Award size={13} style={{ color: BRAND.violet }} />
                </FloatBob>
                Official Recognition
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                background: `linear-gradient(135deg, ${BRAND.blue}, ${BRAND.violet})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1.1,
              }}
            >
              Official Partnership Recognition
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-[16px] text-gray-500 max-w-xl mx-auto"
              style={{ fontWeight: 700 }}
            >
              Proud to be a Recognised Skilling Partner of{" "}
              <span style={{ color: BRAND.violet }}>IT-ITeS SSC Nasscom</span>
            </motion.p>

            {/* Dot row */}
            <div className="flex justify-center gap-2 mt-5" aria-hidden="true">
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

          {/* ── MAIN GRID ── */}
          <div className="grid md:grid-cols-2 gap-8 mb-10 items-start">

            {/* ── LEFT: Certificate card ── */}
            <motion.div
              initial={{ opacity: 0, x: -36, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Glow ring */}
              <div
                className="absolute pointer-events-none rounded-3xl"
                style={{
                  inset: "-12px",
                  background: `radial-gradient(ellipse at 40% 50%, ${BRAND.violet}20, ${BRAND.sky}14, transparent 70%)`,
                  filter: "blur(22px)",
                }}
                aria-hidden="true"
              />

              {/* Dashed decorative border */}
              <div
                className="absolute pointer-events-none rounded-3xl z-[2]"
                style={{ inset: "-4px", border: `2.5px dashed ${BRAND.violet}25` }}
                aria-hidden="true"
              />

              <div
                className="relative bg-white rounded-3xl p-5 overflow-hidden"
                style={{
                  border: `2px solid ${BRAND.violet}18`,
                  boxShadow: `0 24px 60px ${BRAND.violet}15, 0 4px 16px rgba(0,0,0,0.06)`,
                }}
              >
                {/* Pastel gradient top strip */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl"
                  style={{ background: `linear-gradient(90deg, ${BRAND.sky}, ${BRAND.violet}, ${BRAND.rose})` }}
                  aria-hidden="true"
                />

                {/* Certificate image */}
                <div className="relative w-full overflow-hidden rounded-2xl" style={{ height: "clamp(220px, 38vw, 440px)" }}>
                  {!imageLoaded && (
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-violet-100 to-sky-100 animate-pulse" />
                    </div>
                  )}
                  <Image
                    src="/sspl.jpeg"
                    alt="Partnership Certificate — SkillzRevo Solutions"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={`object-contain transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                    onLoad={() => setImageLoaded(true)}
                  />

                  {/* Verified badge */}
                  <FloatBob
                    amplitude={5}
                    duration={3}
                    className="absolute top-3 right-3 z-10"
                  >
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold text-white"
                      style={{
                        background: `linear-gradient(135deg, ${BRAND.mint}, #059669)`,
                        boxShadow: `0 4px 14px ${BRAND.mint}50`,
                        fontFamily: "'Fredoka One', cursive",
                      }}
                    >
                      <CheckCircle size={11} strokeWidth={2.5} />
                      Verified
                    </span>
                  </FloatBob>
                </div>

                {/* Card footer */}
                <div className="mt-4 text-center">
                  <p className="text-[11px] text-gray-400 uppercase tracking-widest font-bold mb-1">Certificate of Partnership</p>
                  <p
                    className="text-[17px] text-gray-900"
                    style={{ fontFamily: "'Fredoka One', cursive" }}
                  >
                    SkillzRevo Solutions Private Limited
                  </p>
                </div>

                {/* Glowing pulse ring on card */}
                <motion.div
                  className="absolute pointer-events-none rounded-3xl"
                  style={{ inset: 0, border: `2px solid ${BRAND.violet}` }}
                  animate={{ opacity: [0, 0.25, 0], scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden="true"
                />
              </div>
            </motion.div>

            {/* ── RIGHT: Details ── */}
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col gap-5"
            >
              {/* Detail items */}
              <motion.div
                variants={fadeUp}
                className="rounded-3xl px-6 py-4 bg-white"
                style={{
                  border: `2px solid ${BRAND.violet}15`,
                  boxShadow: `0 8px 28px ${BRAND.violet}10, 0 2px 8px rgba(0,0,0,0.04)`,
                }}
              >
                <p
                  className="text-[19px] mb-5 text-gray-900"
                  style={{ fontFamily: "'Fredoka One', cursive" }}
                >
                  Partnership Details
                </p>
                <div className="flex flex-col gap-2">
                  {DETAILS.map(({ icon: Icon, label, value, color, bg }) => (
                    <motion.div
                      key={label}
                      whileHover={{ x: 4, transition: { type: "spring", stiffness: 400, damping: 20 } }}
                      className="flex items-start gap-4 rounded-2xl p-3.5 border"
                      style={{ background: bg, borderColor: `${color}25` }}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `${color}22` }}
                      >
                        <Icon size={17} style={{ color }} strokeWidth={2.2} />
                      </div>
                      <div>
                        <p className="text-[12px] font-bold uppercase tracking-wide text-gray-400">{label}</p>
                        <p className="text-[14px] font-800 text-gray-800 mt-0.5" style={{ fontWeight: 800 }}>{value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* FutureSkills banner */}
              <motion.div
                variants={fadeUp}
                className="relative rounded-3xl p-6 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${BRAND.blue}, ${BRAND.violet})`,
                  boxShadow: `0 12px 36px ${BRAND.violet}35`,
                }}
              >
                {/* Inner dots */}
                <DottedBg color="#fff" opacity={0.06} size={22} />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <FloatBob amplitude={5} duration={2.5} style={{ display: "flex" }}>
                      <Rocket size={18} color="white" />
                    </FloatBob>
                    <p
                      className="text-[18px] text-white"
                      style={{ fontFamily: "'Fredoka One', cursive" }}
                    >
                      FutureSkills Prime Initiative
                    </p>
                  </div>
                  <p className="text-[13px] text-blue-100 leading-relaxed mb-4" style={{ fontWeight: 700 }}>
                    A MeitY – Nasscom Digital Skilling Initiative empowering professionals with cutting-edge IT skills
                  </p>
                  <div className="flex items-center gap-2">
                    <motion.span
                      className="w-2.5 h-2.5 rounded-full block"
                      style={{ background: BRAND.mint }}
                      animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
                      transition={{ duration: 1.6, repeat: Infinity }}
                    />
                    <span className="text-[12px] font-bold text-white">Active Partnership</span>
                  </div>
                </div>
              </motion.div>

              
            </motion.div>
          </div>

          {/* Stats */}
              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4 my-4">
                {[
                  { value: "10+",  label: "Year Partnership", color: BRAND.sky,   bg: "#e0f2fe", icon: Trophy },
                  { value: "100%", label: "Certified",        color: BRAND.mint,  bg: "#d1fae5", icon: Shield },
                ].map(({ value, label, color, bg, icon: Icon }) => (
                  <motion.div
                    key={label}
                    whileHover={{ y: -5, scale: 1.04, transition: { type: "spring", stiffness: 380, damping: 18 } }}
                    className="rounded-2xl p-5 text-center border-2"
                    style={{
                      background: bg,
                      borderColor: `${color}30`,
                      boxShadow: `0 6px 18px ${color}18`,
                    }}
                  >
                    <FloatBob amplitude={5} duration={3 + Math.random()} style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}>
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${color}22` }}>
                        <Icon size={17} style={{ color }} strokeWidth={2.2} />
                      </div>
                    </FloatBob>
                    <p
                      className="text-[26px] leading-none"
                      style={{ fontFamily: "'Fredoka One', cursive", color }}
                    >
                      {value}
                    </p>
                    <p className="text-[12px] text-gray-500 mt-1 font-bold">{label}</p>
                  </motion.div>
                ))}
              </motion.div>

          {/* ── BOTTOM BANNER ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl p-8 text-center overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.88)",
              border: `2px solid ${BRAND.violet}18`,
              boxShadow: `0 16px 48px ${BRAND.violet}10, 0 4px 12px rgba(0,0,0,0.04)`,
              backdropFilter: "blur(12px)",
            }}
          >
            {/* top strip */}
            <div
              className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl"
              style={{ background: `linear-gradient(90deg, ${BRAND.orange}, ${BRAND.rose}, ${BRAND.violet})` }}
              aria-hidden="true"
            />

            <FloatBob amplitude={7} duration={3} className="flex justify-center mb-3">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${BRAND.violet}20, ${BRAND.sky}15)` }}
              >
                <Sparkles size={22} style={{ color: BRAND.violet }} />
              </div>
            </FloatBob>

            <h3
              className="text-gray-900 mb-3"
              style={{ fontFamily: "'Fredoka One', cursive", fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)" }}
            >
              Committed to Excellence in Digital Skilling
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto mb-6 text-[14px] leading-relaxed" style={{ fontWeight: 700 }}>
              As a recognized skilling partner, we deliver world-class IT training and development programs
              aligned with industry standards and government initiatives.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {TAGS.map(({ label, color, bg }) => (
                <FloatBob key={label} amplitude={4} duration={3 + Math.random()} style={{ display: "flex" }}>
                  <span
                    className="px-5 py-2 rounded-full text-[12px] font-bold border-2"
                    style={{
                      color,
                      background: bg,
                      borderColor: `${color}30`,
                      fontFamily: "'Nunito', sans-serif",
                      boxShadow: `0 4px 14px ${color}18`,
                    }}
                  >
                    {label}
                  </span>
                </FloatBob>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}