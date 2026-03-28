"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Star, Sparkles, Trophy, Shield } from "lucide-react";

/* ─────────────────────────────────────────
   GOOGLE FONTS
───────────────────────────────────────── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');

    @keyframes marquee-loop {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      animation: marquee-loop 28s linear infinite;
    }
    .animate-marquee:hover {
      animation-play-state: paused;
    }
  `}</style>
);

/* ─────────────────────────────────────────
   BRAND
───────────────────────────────────────── */
const BRAND = {
  violet:  "#7c3aed",
  purple:  "#a855f7",
  orange:  "#f97316",
  amber:   "#fbbf24",
  rose:    "#f43f5e",
  sky:     "#0ea5e9",
  mint:    "#10b981",
};

/* ─────────────────────────────────────────
   LOGOS
───────────────────────────────────────── */
const LOGOS = [
  "/logos/futureskills.webp",
  "/logos/ites.webp",
  "/logos/meit.webp",
  "/logos/nasscom.webp",
  "/logos/ncet.webp",
  "/logos/nsdc.webp",
  "/logos/skill-india.webp",
];

/* Duplicate for seamless loop */
const displayedLogos = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

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
      animate={{ rotate: 360, scale: [1, 1.25, 1] }}
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

/* ─────────────────────────────────────────
   WAVY DIVIDERS
───────────────────────────────────────── */
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
   LOGO MARQUEE
───────────────────────────────────────── */
const LogoMarquee = () => {
  return (
    <>
      <FontLoader />
      <section
        className="relative w-full py-24 overflow-hidden"
        aria-label="Knowledge Partners"
        style={{
          background: "linear-gradient(135deg, #fff8ee 0%, #fef0fb 40%, #ede9fe 100%)",
        }}
      >
        <DottedBg color={BRAND.orange} opacity={0.04} size={30} />

        {/* Wavy dividers */}
        <WavyTop fill="#ffffff" />
        <WavyBottom fill="#ffffff" />

        {/* Soft blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div style={{
            position: "absolute", top: "-60px", right: "-80px",
            width: 380, height: 380, borderRadius: "50%",
            background: `radial-gradient(circle, ${BRAND.amber}22, transparent 70%)`,
            filter: "blur(50px)",
          }} />
          <div style={{
            position: "absolute", bottom: "-60px", left: "-80px",
            width: 320, height: 320, borderRadius: "50%",
            background: `radial-gradient(circle, ${BRAND.violet}1e, transparent 70%)`,
            filter: "blur(50px)",
          }} />
        </div>

        {/* Spinning stars — desktop */}
        <div className="hidden md:block" aria-hidden="true">
          <SpinningStar size={15} color={BRAND.amber}  top="18%"  left="4%"   delay={0}   />
          <SpinningStar size={11} color={BRAND.rose}   top="70%"  left="8%"   delay={1}   />
          <SpinningStar size={13} color={BRAND.violet} top="15%"  right="5%"  delay={0.5} />
          <SpinningStar size={10} color={BRAND.sky}    top="75%"  right="7%"  delay={1.5} />
          <SpinningStar size={9}  color={BRAND.mint}   top="45%"  left="2%"   delay={2}   />
          <SpinningStar size={12} color={BRAND.orange} top="50%"  right="3%"  delay={0.8} />
        </div>

        {/* ── HEADER ── */}
        <div className="relative z-10 text-center mb-12 px-6">

          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-4"
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-bold uppercase tracking-widest border-2"
              style={{
                color: BRAND.orange,
                borderColor: `${BRAND.orange}40`,
                background: "linear-gradient(135deg, #fff3e0, #fff8f0)",
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              <FloatBob amplitude={4} duration={2.2} style={{ display: "flex" }}>
                <Trophy size={13} style={{ color: BRAND.orange }} />
              </FloatBob>
              Certified &amp; Recognized
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mx-auto max-w-3xl leading-tight"
            style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: "clamp(1.8rem, 3.8vw, 3rem)",
              fontWeight: 400,
              background: `linear-gradient(135deg, ${BRAND.orange}, #e53e3e)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Knowledge Partners, Certification Alliances &amp; Curriculum Creators
          </motion.h2>

          {/* Sub-line */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-[15px] text-gray-500 max-w-xl mx-auto"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
          >
            Proudly backed by India's leading tech bodies &amp; skill development authorities
          </motion.p>

          {/* Decorative dot row */}
          <div className="flex justify-center gap-2 mt-5" aria-hidden="true">
            {[BRAND.violet, BRAND.orange, BRAND.sky, BRAND.mint, BRAND.rose].map((c, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{ background: c }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.6 + i * 0.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
              />
            ))}
          </div>
        </div>

        {/* ── MARQUEE ── */}
        <div className="relative z-10 w-full overflow-hidden py-2">

          {/* Left fade */}
          <div
            className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #fff8ee, transparent)" }}
            aria-hidden="true"
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #fff8ee, transparent)" }}
            aria-hidden="true"
          />

          <div className="flex w-max animate-marquee gap-5 px-6">
            {displayedLogos.map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08, y: -4, transition: { type: "spring", stiffness: 380, damping: 18 } }}
                className="relative flex-shrink-0"
                style={{
                  width: "clamp(110px, 12vw, 168px)",
                  height: "clamp(60px, 7vw, 88px)",
                }}
              >
                <div
                  className="relative w-full h-full rounded-2xl overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    border: "1.5px solid rgba(124,58,237,0.10)",
                    boxShadow: "0 4px 16px rgba(124,58,237,0.07), 0 1px 4px rgba(0,0,0,0.05)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <Image
                    src={logo}
                    alt={`Partner logo ${(index % LOGOS.length) + 1}`}
                    className="object-contain p-3"
                    fill
                    sizes="168px"
                    loading="eager"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── TRUST BADGES ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-10 flex flex-wrap justify-center gap-4 mt-12 px-6"
        >
          {[
            { icon: Shield,   label: "Government Recognized", color: BRAND.violet },
            { icon: Trophy,   label: "Award-Winning Curriculum", color: BRAND.orange },
            { icon: Sparkles, label: "Industry Certified",    color: BRAND.sky    },
          ].map(({ icon: Icon, label, color }) => (
            <FloatBob key={label} amplitude={5} duration={3.5 + Math.random()} style={{ display: "flex" }}>
              <div
                className="flex items-center gap-2 rounded-full px-5 py-2.5 border-2 text-[12px] font-bold"
                style={{
                  color,
                  borderColor: `${color}35`,
                  background: `${color}10`,
                  fontFamily: "'Nunito', sans-serif",
                  boxShadow: `0 4px 14px ${color}18`,
                }}
              >
                <Icon size={14} strokeWidth={2.2} />
                {label}
              </div>
            </FloatBob>
          ))}
        </motion.div>

      </section>
    </>
  );
};

export default LogoMarquee;