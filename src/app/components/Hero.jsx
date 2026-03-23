"use client";
import heroImg from "./hero.jpg";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Users, PlayCircle, Star, Rocket, Brain, Code2 } from "lucide-react";
import Image from "next/image";

/* ─────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────── */
const BRAND = {
  blue:       "#1642d6",
  lightBlue:  "#1d8fff",
  orange:     "#ff6900",
};

const AVATARS = [
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=80&h=80&fit=crop&crop=face",
];

// Kids coding — Unsplash free-to-use photo
const HERO_IMG = heroImg;

// Public royalty-free loop from Pixabay / Coverr proxy
// Fallback: soft animated gradient shown if video doesn't load
const VIDEO_SRC = "https://assets.mixkit.co/videos/preview/mixkit-children-using-computers-in-the-classroom-4829-large.mp4";

const FEATURES = [
  { icon: Code2,  label: "Live Coding Classes",  color: BRAND.blue   },
  { icon: Brain,  label: "AI & Robotics",         color: BRAND.orange },
  { icon: Rocket, label: "Build Real Projects",   color: BRAND.lightBlue },
];

const STATS = [
  { value: "2,000+", label: "Happy Parents"  },
  { value: "1,000+", label: "Kids Learning"  },
  { value: "4.9 ★",  label: "Avg Rating"    },
];

/* ─────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────── */
const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const fadeSlide = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.7 } },
};

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]); // subtle parallax

  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      className="relative w-full overflow-hidden flex items-center min-h-screen"
      style={{ maxHeight: 960 }}
    >

      {/* ═══════════════════════════════════
          BACKGROUND — video + overlays
      ═══════════════════════════════════ */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: videoY }}
        aria-hidden="true"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&h=900&fit=crop&q=60"
          className="h-full w-full object-cover scale-105"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      </motion.div>

      {/* Layer 1 — primary light wash (keeps it warm & parent-friendly) */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(120deg, rgba(245,248,255,0.93) 0%, rgba(255,249,244,0.90) 55%, rgba(230,243,255,0.82) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Layer 2 — decorative colour blobs */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden" aria-hidden="true">
        {/* top-left blue bloom */}
        <div
          className="absolute rounded-full blur-3xl opacity-20"
          style={{ width: 680, height: 680, top: "-180px", left: "-160px",
            background: `radial-gradient(circle, ${BRAND.blue} 0%, transparent 68%)` }}
        />
        {/* bottom-right orange bloom */}
        <div
          className="absolute rounded-full blur-3xl opacity-15"
          style={{ width: 520, height: 520, bottom: "-120px", right: "-80px",
            background: `radial-gradient(circle, ${BRAND.orange} 0%, transparent 68%)` }}
        />
        {/* centre accent */}
        <div
          className="absolute rounded-full blur-2xl opacity-10"
          style={{ width: 360, height: 360, top: "30%", left: "42%",
            background: `radial-gradient(circle, ${BRAND.lightBlue} 0%, transparent 70%)` }}
        />
        {/* dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage: `radial-gradient(${BRAND.blue} 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      {/* ═══════════════════════════════════
          CONTENT
      ═══════════════════════════════════ */}
      <div className="
        relative z-10
        mx-auto w-full 
        px-5 sm:px-8 lg:px-12
        py-16 lg:py-0
        grid lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_520px]
        gap-10 xl:gap-14
        items-center
      ">

        {/* ──── LEFT — copy & CTAs ──── */}
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="flex flex-col gap-5 lg:gap-6"
        >

          {/* Eyebrow badge */}
          <motion.div variants={fadeSlide}>
            <span
              className="
                inline-flex items-center gap-2
                rounded-full px-4 py-1.5
                text-[11px] font-bold uppercase tracking-[0.01em]
                border
              "
              style={{
                color: BRAND.blue,
                borderColor: `${BRAND.blue}30`,
                background: `${BRAND.blue}0f`,
              }}
            >
              <Sparkles size={11} style={{ color: BRAND.orange }} />
              Live Coding &amp; AI Classes for Kids
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeSlide}
            className="heading-oswald font-bold uppercase leading-[1.01] tracking-tighter text-gray-900"
            style={{ fontSize: "clamp(2.1rem, 4.5vw, 3.6rem)" }}
          >
            Prepare Young Minds for the Future with{" "}
            <span
              style={{
                background: `linear-gradient(105deg, ${BRAND.lightBlue}, ${BRAND.blue})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Coding
            </span>
            {" "}&amp;{" "}
            <span
              style={{
                background: `linear-gradient(180deg, #ffb347, ${BRAND.orange})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AI Education
            </span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            variants={fadeSlide}
            className="text-[13px] leading-tight text-gray-500 max-w-[480px]"
          >
            Expert-led, live online classes where kids aged 6–17 build real games,
            apps &amp; creative digital projects — turning screen time into
            future-ready skills.
          </motion.p>

          {/* Feature pills */}
          <motion.div variants={fadeSlide} className="flex flex-wrap gap-2.5">
            {FEATURES.map(({ icon: Icon, label, color }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold border"
                style={{
                  color,
                  borderColor: `${color}30`,
                  background: `${color}0d`,
                }}
              >
                <Icon size={12} />
                {label}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeSlide} className="flex flex-col sm:flex-row gap-3 pt-1">
            <button
              className="
                group inline-flex items-center justify-center gap-2
                rounded-xl px-7 py-3.5
                text-sm font-bold text-white
                transition-all duration-200
                hover:scale-[1.03] active:scale-[0.98]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
              "
              style={{
                background: `linear-gradient(135deg, ${BRAND.lightBlue}, ${BRAND.blue})`,
                boxShadow: `0 8px 28px ${BRAND.blue}35`,
                "--tw-ring-color": BRAND.blue,
              }}
            >
              Book a Free Demo Class
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>

            <button
              className="
                group inline-flex items-center justify-center gap-2
                rounded-xl border px-7 py-3.5
                text-sm font-bold
                transition-all duration-200
                hover:scale-[1.03] active:scale-[0.98]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
              "
              style={{
                color: BRAND.orange,
                borderColor: `${BRAND.orange}50`,
                background: `${BRAND.orange}0d`,
                "--tw-ring-color": BRAND.orange,
              }}
            >
              <PlayCircle size={15} />
              Join WhatsApp Community
            </button>
          </motion.div>

          {/* Social proof row */}
          <motion.div
            variants={fadeSlide}
            className="flex flex-wrap items-center gap-5 pt-1"
          >
            {/* Avatar stack */}
            <div className="flex -space-x-2.5">
              {AVATARS.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  width={34}
                  height={34}
                  loading="eager"
                  className="w-[34px] h-[34px] rounded-full border-[2.5px] border-white object-cover shadow"
                />
              ))}
            </div>

            {/* Stars + text */}
            <div>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} fill={BRAND.orange} color={BRAND.orange} />
                ))}
              </div>
              <p className="text-[11px] text-gray-400 mt-0.5">
                Trusted by{" "}
                <span className="font-bold text-gray-600">2,000+ parents</span>
              </p>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-9 bg-gray-200" />

            {/* Stat counters */}
            {STATS.map((s) => (
              <div key={s.label} className="hidden sm:block">
                <p
                  className="text-sm font-extrabold leading-none"
                  style={{ color: BRAND.blue }}
                >
                  {s.value}
                </p>
                <p className="text-[10px] text-gray-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Knowledge partner note */}
          <motion.p
            variants={fadeIn}
            className="text-[11px] text-gray-400 flex items-center gap-1.5"
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: BRAND.orange }}
            />
            ⚡ Join a growing community of future innovators!
          </motion.p>
        </motion.div>


        {/* ──── RIGHT — image card ──── */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative hidden lg:flex justify-center items-center"
        >
          {/* Glow ring */}
          <div
            className="absolute rounded-[28px] blur-2xl opacity-25 pointer-events-none"
            style={{
              inset: "-12px",
              background: `linear-gradient(135deg, ${BRAND.blue}, ${BRAND.orange})`,
            }}
            aria-hidden="true"
          />

          {/* Card frame */}
          <div
            className="relative w-full rounded-[24px] overflow-hidden shadow-2xl"
            style={{
              aspectRatio: "9/11",
              maxHeight: 560,
              border: "1.5px solid rgba(22,66,214,0.12)",
              boxShadow: "0 32px 80px rgba(22,66,214,0.15), 0 8px 24px rgba(0,0,0,0.08)",
            }}
          >
            {/* Main image */}
            <Image
              src={HERO_IMG}
              alt="Kid learning coding with a mentor"
              fill
              priority
              sizes="(max-width: 1024px) 0px, 520px"
              className="object-cover"
            />

            {/* Bottom scrim */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(22,66,214,0.35) 0%, transparent 50%)",
              }}
              aria-hidden="true"
            />

            {/* Floating bottom card */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl px-4 py-3"
              style={{
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.6)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              }}
            >
              <div className="flex -space-x-2">
                {AVATARS.slice(0, 3).map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-bold text-gray-900 leading-none truncate">
                  1,000+ Kids Learning Right Now
                </p>
                <p className="text-[10px] text-gray-400 mt-0.5">Join the community today</p>
              </div>
              <span
                className="flex-shrink-0 w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#22c55e" }}
              />
            </motion.div>
          </div>

          {/* Floating pill — top right */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="absolute -top-4 -right-6 flex items-center gap-2 rounded-full px-4 py-2"
            style={{
              background: `linear-gradient(135deg, ${BRAND.lightBlue}, ${BRAND.blue})`,
              boxShadow: `0 6px 20px ${BRAND.blue}45`,
            }}
          >
            <Sparkles size={12} color="white" />
            <span className="text-[11px] font-extrabold text-white whitespace-nowrap">
              AI-Powered Curriculum
            </span>
          </motion.div>

          {/* Floating pill — bottom left */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
            className="absolute -bottom-4 -left-6 flex items-center gap-2 rounded-full px-4 py-2"
            style={{
              background: `linear-gradient(135deg, #ffb347, ${BRAND.orange})`,
              boxShadow: `0 6px 20px ${BRAND.orange}45`,
            }}
          >
            <Users size={12} color="white" />
            <span className="text-[11px] font-extrabold text-white whitespace-nowrap">
              Expert Mentors
            </span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}