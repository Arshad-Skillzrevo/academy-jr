"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, Users, Globe, Star, Award,
  CheckCircle2, ChevronLeft, ChevronRight, Sparkles, Rocket,
} from "lucide-react";

/* ─────────────────────────────────────────
   GOOGLE FONTS
───────────────────────────────────────── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');

    @keyframes growWidth {
      from { width: 0% }
      to   { width: 100% }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes floatBob {
      0%, 100% { transform: translateY(0px); }
      50%      { transform: translateY(-8px); }
    }
    @keyframes spinStar {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
    .point-item {
      opacity: 0;
      animation: fadeInUp 0.45s cubic-bezier(0.22,1,0.36,1) forwards;
    }
    .float-bob {
      animation: floatBob 3.5s ease-in-out infinite;
    }
    .spin-star {
      animation: spinStar 9s linear infinite;
    }
  `}</style>
);

/* ─────────────────────────────────────────
   BRAND
───────────────────────────────────────── */
const BRAND = {
  violet:  "#7c3aed",
  purple:  "#a855f7",
  sky:     "#0ea5e9",
  orange:  "#f97316",
  amber:   "#fbbf24",
  rose:    "#f43f5e",
  mint:    "#10b981",
  navy:    "#0f1b4c",
};

/* ─────────────────────────────────────────
   SLIDES
───────────────────────────────────────── */
const SLIDES = [
  {
    id: 1,
    title: "Future-Ready Curriculum",
    Icon: BookOpen,
    accent: "#1642d6",
    accentLight: "#dbeafe",
    bgFrom: "#eef2ff",
    points: [
      "Designed by experienced technology educators",
      "Hands-on learning with real projects",
      "Simple concepts with strong practical understanding",
    ],
    video: "https://assets.mixkit.co/videos/preview/mixkit-children-using-computers-in-the-classroom-4829-large.mp4",
    poster: "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?w=800&h=540&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Expert Mentors & Interactive Learning",
    Icon: Users,
    accent: "#7c3aed",
    accentLight: "#ede9fe",
    bgFrom: "#f5f3ff",
    points: [
      "Learn from experienced industry professionals",
      "Interactive live sessions with personalized guidance",
      "Small batches for better attention and learning",
    ],
    video: "https://assets.mixkit.co/videos/preview/mixkit-teacher-giving-a-lesson-to-a-group-of-students-4810-large.mp4",
    poster: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=540&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Learning Beyond the Classroom",
    Icon: Globe,
    accent: "#059669",
    accentLight: "#d1fae5",
    bgFrom: "#f0fdf4",
    points: [
      "Participate in coding challenges and tech competitions",
      "Workshops and webinars with industry experts",
      "Exposure to real-world technology applications",
    ],
    video: "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4",
    poster: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=540&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Trusted by Students & Parents",
    Icon: Star,
    accent: "#f97316",
    accentLight: "#ffedd5",
    bgFrom: "#fff7ed",
    points: [
      "Students learning from multiple countries",
      "Highly rated learning experience",
      "Proven programs that build future-ready skills",
    ],
    video: "https://assets.mixkit.co/videos/preview/mixkit-happy-students-celebrating-achievement-4814-large.mp4",
    poster: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&h=540&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Recognized Certifications",
    Icon: Award,
    accent: "#0284c7",
    accentLight: "#e0f2fe",
    bgFrom: "#f0f9ff",
    points: [
      "Industry-relevant certification programs",
      "Project portfolios to showcase skills",
      "Valuable credentials for academic growth",
    ],
    video: "https://assets.mixkit.co/videos/preview/mixkit-student-thinking-in-classroom-4812-large.mp4",
    poster: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=540&fit=crop&q=80",
  },
];

/* ─────────────────────────────────────────
   HELPERS
───────────────────────────────────────── */
function DottedBg({ color = "#7c3aed", opacity = 0.04, size = 28 }) {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
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

/* Spinning star */
function SpinningStar({ size = 14, color, style }) {
  return (
    <div className="absolute pointer-events-none z-[2] spin-star" style={style} aria-hidden="true">
      <Star size={size} fill={color} color={color} />
    </div>
  );
}

/* Progress bar */
function ProgressBar({ active, duration, accent }) {
  return (
    <div className="h-1 rounded-full overflow-hidden w-full" style={{ background: `${accent}25` }}>
      {active && (
        <div
          key={accent + duration}
          className="h-full rounded-full origin-left"
          style={{ background: accent, animation: `growWidth ${duration}ms linear forwards` }}
        />
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN
───────────────────────────────────────── */
export default function WhyChooseUs() {
  const [current, setCurrent] = useState(0);
  const [paused,  setPaused]  = useState(false);
  const [dir,     setDir]     = useState(1);
  const videoRef              = useRef(null);
  const DURATION              = 6000;

  const slide = SLIDES[current];

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => advance(1), DURATION);
    return () => clearTimeout(t);
  }, [current, paused]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [current]);

  function advance(d) {
    setDir(d);
    setCurrent((c) => (c + d + SLIDES.length) % SLIDES.length);
  }

  const textVariants = {
    enter:  (d) => ({ opacity: 0, x: d > 0 ?  44 : -44 }),
    center: { opacity: 1, x: 0,   transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit:   (d) => ({ opacity: 0, x: d > 0 ? -44 :  44,  transition: { duration: 0.3 } }),
  };

  const videoVariants = {
    enter:  { opacity: 0, scale: 1.05 },
    center: { opacity: 1, scale: 1,   transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    exit:   { opacity: 0, scale: 0.96, transition: { duration: 0.32 } },
  };

  return (
    <>
      <FontLoader />
      <section
        className="relative py-28 overflow-hidden"
        aria-label="Why Choose Us"
        style={{
          background: `linear-gradient(160deg, ${slide.bgFrom} 0%, #fdf4ff 50%, #f0fff8 100%)`,
          fontFamily: "'Nunito', sans-serif",
          transition: "background 0.6s ease",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <DottedBg color={slide.accent} opacity={0.035} size={30} />
        <WavyTop  fill="#ffffff" />
        <WavyBottom fill="#ffffff" />

        {/* Blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div style={{ position: "absolute", top: -100, right: -100, width: 480, height: 480, borderRadius: "50%",
            background: `radial-gradient(circle, ${slide.accent}22, transparent 70%)`, filter: "blur(60px)",
            transition: "background 0.6s ease" }} />
          <div style={{ position: "absolute", bottom: -80, left: -80, width: 380, height: 380, borderRadius: "50%",
            background: `radial-gradient(circle, ${BRAND.orange}18, transparent 70%)`, filter: "blur(55px)" }} />
        </div>

        {/* Spinning stars */}
        <div className="hidden lg:block" aria-hidden="true">
          <SpinningStar size={15} color={BRAND.amber}  style={{ top: "10%", left: "3%"   }} />
          <SpinningStar size={11} color={BRAND.rose}   style={{ top: "82%", left: "6%"   }} />
          <SpinningStar size={13} color={BRAND.violet} style={{ top: "8%",  right: "4%"  }} />
          <SpinningStar size={10} color={BRAND.sky}    style={{ top: "85%", right: "5%"  }} />
          <SpinningStar size={9}  color={BRAND.mint}   style={{ top: "50%", left: "1%"   }} />
          <SpinningStar size={12} color={BRAND.orange} style={{ top: "48%", right: "2%"  }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* ── HEADER ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            {/* Eyebrow */}
            <div className="flex justify-center mb-4">
              <span
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-bold uppercase tracking-widest border-2"
                style={{
                  color: BRAND.violet,
                  borderColor: `${BRAND.violet}38`,
                  background: "linear-gradient(135deg, #ede9fe, #fce7f3)",
                }}
              >
                <span className="float-bob" style={{ display: "flex" }}>
                  <Rocket size={13} style={{ color: BRAND.orange }} />
                </span>
                Why Choose SkillzRevo
              </span>
            </div>

            <h2
              className="leading-tight"
              style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: "clamp(1.8rem, 3.8vw, 3rem)",
                color: BRAND.navy,
              }}
            >
              Why Choose Our{" "}
              <span style={{
                background: `linear-gradient(120deg, ${BRAND.sky}, ${BRAND.violet})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Learning Programs
              </span>
            </h2>

            <p className="mt-3 text-[16px] text-gray-500 leading-relaxed" style={{ fontWeight: 700 }}>
              We empower young learners with expert mentorship, hands-on learning, and
              future-ready technology skills that go beyond traditional classrooms.
            </p>

            {/* Dot row */}
            <div className="flex justify-center gap-2 mt-5" aria-hidden="true">
              {[BRAND.violet, BRAND.sky, BRAND.orange, BRAND.mint, BRAND.rose].map((c, i) => (
                <motion.div key={i} className="w-2 h-2 rounded-full" style={{ background: c }}
                  animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 1.6 + i * 0.2, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </div>
          </motion.div>

          {/* ── MAIN GRID ── */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">

            {/* ── LEFT: Video ── */}
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute -inset-3 rounded-[32px] blur-2xl opacity-20 -z-10 pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${slide.accent}, ${BRAND.orange})`, transition: "background 0.6s ease" }}
                aria-hidden="true"
              />

              {/* Dashed decorative ring */}
              <div
                className="absolute pointer-events-none rounded-[28px] z-[2]"
                style={{ inset: "-5px", border: `2.5px dashed ${slide.accent}35`, transition: "border-color 0.6s ease" }}
                aria-hidden="true"
              />

              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  aspectRatio: "16/10",
                  border: `2px solid ${slide.accent}25`,
                  boxShadow: `0 28px 70px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.5)`,
                  transition: "border-color 0.5s ease, box-shadow 0.5s ease",
                }}
              >
                {/* Gradient top strip */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5 z-10"
                  style={{ background: `linear-gradient(90deg, ${slide.accent}, ${BRAND.orange})`, transition: "background 0.5s ease" }}
                  aria-hidden="true"
                />

                <AnimatePresence mode="wait" custom={dir}>
                  <motion.div
                    key={current}
                    custom={dir}
                    variants={videoVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0"
                  >
                    <video
                      ref={videoRef}
                      autoPlay loop muted playsInline
                      poster={slide.poster}
                      className="w-full h-full object-cover"
                    >
                      <source src={slide.video} type="video/mp4" />
                    </video>

                    {/* Bottom scrim */}
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)" }}
                    />

                    {/* Slide label chip */}
                    <div
                      className="absolute bottom-4 left-4 flex items-center gap-2 rounded-2xl px-4 py-2.5 float-bob"
                      style={{
                        background: "rgba(255,255,255,0.18)",
                        backdropFilter: "blur(14px)",
                        WebkitBackdropFilter: "blur(14px)",
                        border: "1px solid rgba(255,255,255,0.3)",
                      }}
                    >
                      <slide.Icon size={14} color="white" strokeWidth={2.2} />
                      <span
                        className="text-[13px] text-white leading-none"
                        style={{ fontFamily: "'Fredoka One', cursive" }}
                      >
                        {slide.title}
                      </span>
                    </div>

                    {/* Counter badge */}
                    <div
                      className="absolute top-6 right-4 rounded-full w-9 h-9 flex items-center justify-center text-[11px] font-bold text-white float-bob"
                      style={{
                        background: slide.accent,
                        boxShadow: `0 4px 14px ${slide.accent}60`,
                        fontFamily: "'Fredoka One', cursive",
                      }}
                    >
                      {current + 1}/{SLIDES.length}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* ── RIGHT: Text ── */}
            <div className="flex flex-col gap-7">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={current}
                  custom={dir}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex flex-col gap-5"
                >
                  {/* Icon + title */}
                  <div className="flex items-start gap-4">
                    <div
                      className="w-13 h-13 rounded-2xl flex items-center justify-center flex-shrink-0 float-bob"
                      style={{
                        width: 52, height: 52,
                        background: `linear-gradient(135deg, ${slide.accent}, ${slide.accent}bb)`,
                        boxShadow: `0 8px 24px ${slide.accent}40`,
                      }}
                    >
                      <slide.Icon size={23} color="white" strokeWidth={2} />
                    </div>
                    <h3
                      className="leading-tight pt-1"
                      style={{
                        fontFamily: "'Fredoka One', cursive",
                        fontSize: "clamp(1.3rem, 2.4vw, 1.8rem)",
                        color: BRAND.navy,
                      }}
                    >
                      {slide.title}
                    </h3>
                  </div>

                  {/* Bullet points */}
                  <ul className="flex flex-col gap-3">
                    {slide.points.map((point, i) => (
                      <li
                        key={point}
                        className="point-item flex items-start gap-3 rounded-2xl p-3.5 border-2"
                        style={{
                          animationDelay: `${i * 0.12 + 0.08}s`,
                          background: slide.accentLight,
                          borderColor: `${slide.accent}25`,
                        }}
                      >
                        <div
                          className="w-6 h-6 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: slide.accent }}
                        >
                          <CheckCircle2 size={13} color="white" strokeWidth={2.5} />
                        </div>
                        <span className="text-[14px] text-gray-700 leading-snug" style={{ fontWeight: 700 }}>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

              {/* Progress bars + nav */}
              <div className="flex flex-col gap-3 pt-1">
                <div className="flex gap-2 items-center">
                  {SLIDES.map((s, i) => (
                    <button
                      key={s.id}
                      onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i); }}
                      className="flex-1"
                      aria-label={`Go to slide ${i + 1}: ${s.title}`}
                    >
                      <ProgressBar active={i === current} duration={DURATION} accent={s.accent} />
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <motion.button
                    onClick={() => advance(-1)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center"
                    style={{
                      borderColor: `${slide.accent}40`,
                      background: slide.accentLight,
                      color: slide.accent,
                    }}
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={18} strokeWidth={2.5} />
                  </motion.button>
                  <motion.button
                    onClick={() => advance(1)}
                    whileHover={{ scale: 1.1, boxShadow: `0 8px 24px ${slide.accent}50` }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                    style={{
                      background: `linear-gradient(135deg, ${slide.accent}, ${slide.accent}cc)`,
                      boxShadow: `0 4px 16px ${slide.accent}45`,
                    }}
                    aria-label="Next slide"
                  >
                    <ChevronRight size={18} strokeWidth={2.5} />
                  </motion.button>

                  <span className="text-[12px] text-gray-400 ml-1 truncate" style={{ fontWeight: 700 }}>
                    {current + 1} of {SLIDES.length} — {slide.title}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── BOTTOM TAB STRIP ── */}
          <div className="mt-14 grid grid-cols-5 gap-3 sm:gap-4">
            {SLIDES.map((s, i) => {
              const isActive = i === current;
              return (
                <motion.button
                  key={s.id}
                  onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i); }}
                  whileHover={{ y: -5, transition: { type: "spring", stiffness: 400, damping: 18 } }}
                  whileTap={{ scale: 0.96 }}
                  className="flex flex-col items-center gap-2 rounded-3xl p-3 sm:p-4 border-2 transition-all duration-300"
                  style={{
                    background:   isActive ? s.accentLight : "rgba(255,255,255,0.85)",
                    borderColor:  isActive ? s.accent       : `${s.accent}20`,
                    boxShadow:    isActive ? `0 8px 24px ${s.accent}28` : "0 2px 8px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isActive
                        ? `linear-gradient(135deg, ${s.accent}, ${s.accent}bb)`
                        : `${s.accent}15`,
                      boxShadow: isActive ? `0 4px 14px ${s.accent}40` : "none",
                    }}
                  >
                    <s.Icon size={17} color={isActive ? "white" : s.accent} strokeWidth={2} />
                  </div>
                  <span
                    className="text-[10px] sm:text-[11px] text-center leading-tight hidden sm:block font-bold"
                    style={{
                      fontFamily: "'Fredoka One', cursive",
                      color: isActive ? s.accent : "#9ca3af",
                    }}
                  >
                    {s.title}
                  </span>

                  {/* Active dot indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="tab-dot"
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: s.accent }}
                      transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}