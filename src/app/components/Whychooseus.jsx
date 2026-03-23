"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Users,
  Globe,
  Star,
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
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
   SLIDES DATA
───────────────────────────────────────── */
const SLIDES = [
  {
    id: 1,
    title: "Future-Ready Curriculum",
    Icon: BookOpen,
    accent: B.blue,
    accentLight: "#dbeafe",
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
    accent: "#6d28d9",
    accentLight: "#ede9fe",
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
    accent: "#15803d",
    accentLight: "#dcfce7",
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
    accent: B.orange,
    accentLight: "#ffedd5",
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
    accent: "#0369a1",
    accentLight: "#e0f2fe",
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
   PROGRESS BAR (auto-advance indicator)
───────────────────────────────────────── */
function ProgressBar({ active, duration, accent }) {
  return (
    <div className="h-0.5 rounded-full bg-gray-200 overflow-hidden w-full">
      {active && (
        <div
          key={accent}                        /* restart on slide change */
          className="h-full rounded-full origin-left"
          style={{
            background: accent,
            animation: `growWidth ${duration}ms linear forwards`,
          }}
        />
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
export default function WhyChooseUs() {
  const [current, setCurrent]   = useState(0);
  const [paused,  setPaused]    = useState(false);
  const [dir,     setDir]       = useState(1);   // 1 = forward, -1 = backward
  const videoRef                = useRef(null);
  const DURATION                = 6000;          // ms per slide

  const slide = SLIDES[current];

  /* auto-advance */
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => advance(1), DURATION);
    return () => clearTimeout(t);
  }, [current, paused]);

  /* restart video on slide change */
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

  /* text slide variants */
  const textVariants = {
    enter:  (d) => ({ opacity: 0, x: d > 0 ?  40 : -40 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
    exit:   (d) => ({ opacity: 0, x: d > 0 ? -40 :  40, transition: { duration: 0.3 } }),
  };

  /* video fade variants */
  const videoVariants = {
    enter:  { opacity: 0, scale: 1.04 },
    center: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
    exit:   { opacity: 0, scale: 0.97, transition: { duration: 0.3 } },
  };

  return (
    <>
      {/* CSS keyframes injected once */}
      <style>{`
        @keyframes growWidth {
          from { width: 0% }
          to   { width: 100% }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .point-item {
          opacity: 0;
          animation: fadeInUp 0.4s ease forwards;
        }
      `}</style>

      <section
        className="relative py-20 overflow-hidden bg-linear-120 from-[#b7c6eb] to-white"
        // style={{ background: "#f8faff" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* ── Background blobs ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute rounded-full blur-3xl opacity-[0.07]"
            style={{ width: 600, height: 600, top: "-120px", right: "-140px",
              background: `radial-gradient(circle, ${B.blue}, transparent 70%)` }} />
          <div className="absolute rounded-full blur-3xl opacity-[0.06]"
            style={{ width: 480, height: 480, bottom: "-80px", left: "-100px",
              background: `radial-gradient(circle, ${B.orange}, transparent 70%)` }} />
          <div className="absolute inset-0 opacity-[0.035]"
            style={{ backgroundImage: `radial-gradient(${B.blue} 1px, transparent 1px)`,
              backgroundSize: "36px 36px" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* ── Section header ── */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest border mb-5"
              style={{ color: B.blue, borderColor: `${B.blue}30`, background: `${B.blue}0d` }}
            >
              <Sparkles size={11} style={{ color: B.orange }} />
              Why Choose SkillzRevo
            </span>

            <h2
              className="heading-oswald font-bold leading-tight uppercase tracking-tight text-gray-900"
              style={{ fontSize: "clamp(1.8rem, 3.6vw, 2.8rem)" }}
            >
              Why Choose Our{" "}
              <br/>
              <span style={{
                background: `linear-gradient(105deg, ${B.lightBlue}, ${B.blue})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Learning Programs
              </span>
            </h2>

            <p className="mt-4 text-[15px] text-gray-500 leading-relaxed">
              We empower young learners with expert mentorship, hands-on learning, and
              future-ready technology skills that go beyond traditional classrooms.
            </p>
          </motion.div>

          {/* ── Main slider layout ── */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* ────────────────
                LEFT — Video
            ──────────────── */}
            <div className="relative">
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  aspectRatio: "16/10",
                  border: "1.5px solid rgba(0,0,0,0.07)",
                  boxShadow: `0 24px 64px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.6)`,
                }}
              >
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
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster={slide.poster}
                      className="w-full h-full object-cover"
                    >
                      <source src={slide.video} type="video/mp4" />
                    </video>

                    {/* bottom scrim */}
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 55%)" }}
                    />

                    {/* slide label on video */}
                    <div
                      className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl px-3.5 py-2"
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.25)",
                      }}
                    >
                      <slide.Icon size={15} color="white" />
                      <span className="heading-oswald font-bold text-[13px] text-white leading-none">
                        {slide.title}
                      </span>
                    </div>

                    {/* slide counter badge */}
                    <div
                      className="absolute top-4 right-4 rounded-full w-9 h-9 flex items-center justify-center text-xs font-extrabold text-white"
                      style={{ background: slide.accent, boxShadow: `0 4px 14px ${slide.accent}60` }}
                    >
                      {current + 1}/{SLIDES.length}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Glow ring behind card */}
              <div
                className="absolute -inset-2 rounded-[28px] blur-2xl opacity-15 -z-10 pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${B.blue}, ${B.orange})` }}
              />
            </div>

            {/* ────────────────
                RIGHT — Text
            ──────────────── */}
            <div className="flex flex-col gap-6">
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
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md"
                      style={{ background: slide.accent }}
                    >
                      <slide.Icon size={22} color="white" strokeWidth={2} />
                    </div>
                    <h3
                      className="heading-oswald font-bold leading-tight text-gray-900 pt-1"
                      style={{ fontSize: "clamp(1.3rem, 2.6vw, 1.75rem)" }}
                    >
                      {slide.title}
                    </h3>
                  </div>

                  {/* Bullet points */}
                  <ul className="flex flex-col gap-3">
                    {slide.points.map((point, i) => (
                      <li
                        key={point}
                        className="point-item flex items-start gap-3"
                        style={{ animationDelay: `${i * 0.1 + 0.1}s` }}
                      >
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: slide.accentLight }}
                        >
                          <CheckCircle2 size={13} style={{ color: slide.accent }} strokeWidth={2.5} />
                        </div>
                        <span className="text-[15px] text-gray-600 leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

              {/* ── Tab navigation ── */}
              <div className="flex flex-col gap-3 pt-2">
                {/* Progress bars row */}
                <div className="flex gap-2 items-center">
                  {SLIDES.map((s, i) => (
                    <button
                      key={s.id}
                      onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i); }}
                      className="flex-1 flex flex-col gap-1 group"
                      aria-label={`Go to slide ${i + 1}`}
                    >
                      <ProgressBar
                        active={i === current}
                        duration={DURATION}
                        accent={SLIDES[i].accent}
                      />
                      <div
                        className="w-full h-1 rounded-full transition-all duration-300"
                        style={{
                          background: i === current ? s.accent : "#e5e7eb",
                          opacity: i === current ? 1 : 0.5,
                        }}
                      />
                    </button>
                  ))}
                </div>

                {/* Prev / Next buttons */}
                <div className="flex items-center gap-3 pt-1">
                  <button
                    onClick={() => advance(-1)}
                    className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
                    style={{ borderColor: `${B.blue}30`, background: `${B.blue}0d`, color: B.blue }}
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => advance(1)}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
                    style={{ background: B.blue, boxShadow: `0 4px 14px ${B.blue}40` }}
                    aria-label="Next slide"
                  >
                    <ChevronRight size={18} />
                  </button>

                  {/* Slide title hint */}
                  <span className="text-[12px] text-gray-400 font-medium ml-1 truncate">
                    {current + 1} of {SLIDES.length} — {slide.title}
                  </span>
                </div>
              </div>

            </div>
            {/* end right */}

          </div>
          {/* end grid */}

          {/* ── Bottom tab strip (icon tabs) ── */}
          <div className="mt-12 grid grid-cols-5 gap-3 sm:gap-4">
            {SLIDES.map((s, i) => {
              const active = i === current;
              return (
                <button
                  key={s.id}
                  onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i); }}
                  className="flex flex-col items-center gap-2 rounded-2xl p-3 sm:p-4 transition-all duration-300 border"
                  style={{
                    background: active ? s.accentLight : "white",
                    borderColor: active ? s.accent : "transparent",
                    boxShadow: active ? `0 4px 18px ${s.accent}25` : "0 2px 8px rgba(0,0,0,0.05)",
                    transform: active ? "translateY(-3px)" : "none",
                  }}
                >
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{ background: active ? s.accent : "#f1f5f9" }}
                  >
                    <s.Icon size={18} color={active ? "white" : "#94a3b8"} strokeWidth={2} />
                  </div>
                  <span
                    className="heading-oswald font-bold text-[10px] sm:text-[11px] text-center leading-tight hidden sm:block"
                    style={{ color: active ? s.accent : "#94a3b8" }}
                  >
                    {s.title}
                  </span>
                </button>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}