"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const B = { blue: "#1642d6", light: "#1d8fff", orange: "#ff6900" };

const REVIEWS = [
  {
    id: 1,
    text: "Very good course. Concepts were explained clearly and projects helped me understand coding better.",
    name: "Aarav Sharma",
    role: "Web Development Student",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1545696968-1a5245650b36?w=120&h=120&fit=crop&crop=face&q=80",
    course: "Web Development",
    accent: B.blue,
    bg: "#dbeafe",
  },
  {
    id: 2,
    text: "I really enjoyed the classes. The trainer was very supportive and learning was fun.",
    name: "Riya Gupta",
    role: "AI & ML Student",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&h=120&fit=crop&crop=face&q=80",
    course: "AI & Machine Learning",
    accent: "#6d28d9",
    bg: "#ede9fe",
  },
  {
    id: 3,
    text: "Great learning experience! I was able to build my own projects after completing the course.",
    name: "Aditya Verma",
    role: "Full Stack Student",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=face&q=80",
    course: "Full Stack Development",
    accent: B.orange,
    bg: "#ffedd5",
  },
];

const DURATION = 5000;

export default function ReviewsSlider() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir]         = useState(1);
  const [paused, setPaused]   = useState(false);
  const timerRef              = useRef(null);

  const review = REVIEWS[current];

  /* auto-advance */
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => go(1), DURATION);
    return () => clearTimeout(timerRef.current);
  }, [current, paused]);

  function go(d) {
    setDir(d);
    setCurrent((c) => (c + d + REVIEWS.length) % REVIEWS.length);
  }

  const variants = {
    enter:  (d) => ({ opacity: 0, x: d > 0 ? 60 : -60, scale: 0.97 }),
    center: { opacity: 1, x: 0, scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit:   (d) => ({ opacity: 0, x: d > 0 ? -60 : 60, scale: 0.97,
      transition: { duration: 0.3 } }),
  };

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ background: "#f8faff" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute rounded-full blur-3xl opacity-[0.08]"
          style={{ width: 600, height: 600, top: "-150px", left: "-150px",
            background: `radial-gradient(circle, ${B.blue}, transparent 70%)` }} />
        <div className="absolute rounded-full blur-3xl opacity-[0.07]"
          style={{ width: 480, height: 480, bottom: "-100px", right: "-80px",
            background: `radial-gradient(circle, ${B.orange}, transparent 70%)` }} />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `radial-gradient(${B.blue} 1px, transparent 1px)`,
            backgroundSize: "36px 36px" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest border mb-5"
            style={{ color: B.blue, borderColor: `${B.blue}30`, background: `${B.blue}0d` }}
          >
            <Sparkles size={11} style={{ color: B.orange }} />
            Student Reviews
          </span>

          <h2
            className="heading-oswald font-bold uppercase leading-tight tracking-tight text-gray-900"
            style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.8rem)" }}
          >
            What Our{" "}
            <span style={{
              background: `linear-gradient(105deg, ${B.light}, ${B.blue})`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Students Say
            </span>
          </h2>

          {/* aggregate stars */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} fill={B.orange} color={B.orange} />
            ))}
            <span className="text-sm font-bold text-gray-700 ml-1">4.9</span>
            <span className="text-sm text-gray-400">· Trusted by 2,000+ parents</span>
          </div>
        </motion.div>

        {/* card area */}
        <div className="relative">
          {/* decorative large quote mark behind card */}
          <div
            className="absolute -top-8 left-1/2 -translate-x-1/2 select-none pointer-events-none font-black leading-none opacity-[0.04] text-[200px]"
            style={{ color: B.blue, lineHeight: 1 }}
            aria-hidden="true"
          >"</div>

          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={review.id}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative rounded-3xl p-8 sm:p-10 lg:p-12 bg-white"
              style={{
                border: "1.5px solid rgba(0,0,0,0.07)",
                boxShadow: "0 8px 48px rgba(0,0,0,0.08)",
              }}
            >
              {/* accent top bar */}
              <div
                className="absolute top-0 left-8 right-8 h-1 rounded-b-full"
                style={{ background: `linear-gradient(90deg, ${review.accent}, ${B.orange})` }}
              />

              {/* quote icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-md"
                style={{ background: review.accent }}
              >
                <Quote size={22} color="white" />
              </div>

              {/* review text */}
              <blockquote
                className="heading-oswald font-bold text-gray-900 leading-snug mb-8"
                style={{ fontSize: "clamp(1.2rem, 2.4vw, 1.65rem)" }}
              >
                "{review.text}"
              </blockquote>

              {/* author row */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  {/* avatar with ring */}
                  <div className="relative">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-14 h-14 rounded-full object-cover"
                      style={{
                        border: `3px solid ${review.accent}`,
                        boxShadow: `0 0 0 3px ${review.bg}`,
                      }}
                    />
                    {/* verified tick */}
                    <div
                      className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: review.accent }}
                    >
                      <Star size={9} fill="white" color="white" />
                    </div>
                  </div>

                  <div>
                    <p className="heading-oswald font-bold text-gray-900 text-[1rem] leading-tight">
                      {review.name}
                    </p>
                    <p className="text-[12px] text-gray-400 mt-0.5 font-medium">{review.role}</p>
                    <span
                      className="inline-block mt-1 rounded-full px-2 py-0.5 text-[10px] font-bold"
                      style={{ background: review.bg, color: review.accent }}
                    >
                      {review.course}
                    </span>
                  </div>
                </div>

                {/* star rating */}
                <div className="flex flex-col items-end gap-1">
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={16} fill={B.orange} color={B.orange} />
                    ))}
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium">Verified Student</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* navigation */}
        <div className="flex items-center justify-center gap-5 mt-10">
          {/* prev */}
          <button
            onClick={() => go(-1)}
            className="w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
            style={{ borderColor: `${B.blue}30`, background: `${B.blue}0d`, color: B.blue }}
            aria-label="Previous review"
          >
            <ChevronLeft size={18} />
          </button>

          {/* dots with progress */}
          <div className="flex items-center gap-3">
            {REVIEWS.map((r, i) => {
              const isActive = i === current;
              return (
                <button
                  key={r.id}
                  onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i); }}
                  aria-label={`Go to review ${i + 1}`}
                  className="relative flex items-center justify-center transition-all duration-300"
                  style={{
                    width: isActive ? 36 : 10,
                    height: 10,
                    borderRadius: 999,
                    background: isActive ? r.accent : "#d1d5db",
                  }}
                >
                  {isActive && !paused && (
                    <span
                      className="absolute inset-0 rounded-full origin-left"
                      style={{
                        background: "rgba(255,255,255,0.35)",
                        animation: `grow ${DURATION}ms linear forwards`,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* next */}
          <button
            onClick={() => go(1)}
            className="w-11 h-11 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 active:scale-95"
            style={{ background: B.blue, boxShadow: `0 4px 14px ${B.blue}40` }}
            aria-label="Next review"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* reviewer thumbnails strip */}
        {/* <div className="flex items-center justify-center gap-4 mt-8">
          {REVIEWS.map((r, i) => {
            const isActive = i === current;
            return (
              <button
                key={r.id}
                onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i); }}
                className="transition-all duration-300"
                style={{
                  transform: isActive ? "scale(1.15)" : "scale(1)",
                  opacity: isActive ? 1 : 0.45,
                }}
                aria-label={r.name}
              >
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="rounded-full object-cover"
                  style={{
                    width: 44, height: 44,
                    border: `2.5px solid ${isActive ? r.accent : "transparent"}`,
                    boxShadow: isActive ? `0 0 0 3px ${r.bg}` : "none",
                  }}
                />
              </button>
            );
          })}
        </div> */}

      </div>

      {/* keyframe for dot progress */}
      <style>{`
        @keyframes grow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}