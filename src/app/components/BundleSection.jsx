"use client";
import React, { useEffect, useCallback, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Brain,
  Globe,
  Terminal,
  ArrowRight,
  CalendarDays,
  Users,
  Clock,
  Milestone,
  Activity,
  Zap,
  Trophy,
  Star,
  CheckCircle2,
  IndianRupee,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
// import React from "react";

const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');

    @media (max-width: 640px) {
      .bundle-card-image    { height: 140px !important; }
      .bundle-card-body     { padding: 12px !important; gap: 8px !important; }
      .bundle-card-title    { font-size: 1rem !important; }
      .bundle-card-desc     { font-size: 11px !important; }
      .bundle-card-stat     { font-size: 10px !important; padding: 4px 8px !important; }
      .bundle-card-achieve  { font-size: 10px !important; }
      .bundle-card-price    { font-size: 1rem !important; }
      .bundle-card-btn      { font-size: 11px !important; padding: 5px 10px !important; }
      .bundle-card-badge    { font-size: 9px !important; padding: 2px 7px !important; }
      .bundle-overlay-label { font-size: 9px !important; padding: 2px 5px !important; }
      .bundle-icon-box      { width: 26px !important; height: 26px !important; }
      .bundle-stats-grid    { gap: 5px !important; }
      .bundle-achieve-list  { gap: 4px !important; }
      .bundle-divider       { margin: 0 !important; }
    }
  `}</style>
);

const BRAND = {
  violet: "#7c3aed",
  purple: "#a855f7",
  sky: "#0ea5e9",
  orange: "#f97316",
  amber: "#fbbf24",
  rose: "#f43f5e",
  mint: "#10b981",
  navy: "#0f1b4c",
};

const BUNDLES = [
  {
    slug: "ai-innovators",
    title: "AI Innovators",
    subtitle: "Code, Create & Build the Future with AI",
    description:
      "Learn Python, AI, Machine Learning & Generative AI with real-world projects. Get hands-on experience building tools that matter.",
    grade: "Grade 8–12",
    lessons: 72,
    activities: "150+",
    duration: "9–10 Months",
    price: 84960,
    level: "Intermediate",
    students: "3.2k",
    Icon: Brain,
    accent: "#1d8fff",
    accentAlt: "#7c3aed",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=640&q=80",
    tags: ["Python", "AI", "ML", "Generative AI"],
    achievements: [
      "Build real AI-powered applications",
      "Master Python & ML algorithms",
      "Work on Generative AI projects",
      "Get career-ready certification",
    ],
    featured: true,
  },
  {
    slug: "programming-masters",
    title: "Programming Masters",
    subtitle: "Code Like a Pro in 3 Languages",
    description:
      "Master Python, Java & C++ with strong logic building and real-world apps. Become a versatile developer ready for any challenge.",
    grade: "Grade 8–12",
    lessons: 73,
    activities: "150+",
    duration: "9–10 Months",
    price: 86140,
    level: "Intermediate",
    students: "2.8k",
    Icon: Terminal,
    accent: "#6366f1",
    accentAlt: "#f97316",
    img: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=640&q=80",
    tags: ["Python", "Java", "C++", "OOP"],
    achievements: [
      "Master 3 programming languages",
      "Build logic-first problem solving",
      "Develop real-world applications",
      "Industry-level code quality",
    ],
  },
  {
    slug: "tech-titans",
    title: "Tech Titans",
    subtitle: "Become a Complete Tech Expert",
    description:
      "Learn Web Dev, Python & Cyber Security with real-world projects and a capstone. The ultimate tech bundle for future innovators.",
    grade: "Grade 8–12",
    lessons: 68,
    activities: "140+",
    duration: "9–10 Months",
    price: 80240,
    level: "Advanced",
    students: "1.9k",
    Icon: Globe,
    accent: "#10b981",
    accentAlt: "#0ea5e9",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=640&q=80",
    tags: ["Web Dev", "Python", "Cybersecurity"],
    achievements: [
      "Build full-stack web applications",
      "Learn ethical hacking basics",
      "Complete a capstone project",
      "Present to industry mentors",
    ],
  },
  {
    slug: "full-stack-cloud-creators",
    title: "Full Stack Cloud Creators",
    subtitle: "Build, Deploy & Scale Applications",
    description:
      "Learn frontend, backend & cloud. Build and deploy real-world full stack applications.",
    grade: "Grade 8–12",
    lessons: 100,
    activities: "150+",
    duration: "11–12 Months",
    price: 99120,
    level: "Advanced",
    students: "1.5k",
    Icon: Globe,
    accent: "#1d8fff",
    accentAlt: "#0ea5e9",
    img: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=640&q=80",
    tags: ["Full Stack", "Node.js", "MongoDB", "Cloud"],
    achievements: [
      "Build full stack applications",
      "Learn backend & APIs",
      "Deploy on cloud platforms",
      "Create industry-ready projects",
    ],
  },
  {
    slug: "data-ai-innovators",
    title: "Data & AI Innovators",
    subtitle: "Become a Future Tech Pro",
    description:
      "Learn Python, Data Analytics & AI with real-world datasets and projects.",
    grade: "Grade 8–12",
    lessons: 79,
    activities: "150+",
    duration: "10–11 Months",
    price: 93220,
    level: "Intermediate",
    students: "1.7k",
    Icon: Brain,
    accent: "#1d8fff",
    accentAlt: "#7c3aed",
    img: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=640&q=80",
    tags: ["Python", "Data Analytics", "AI", "ML"],
    achievements: [
      "Analyze real-world datasets",
      "Build ML models",
      "Create dashboards (Power BI)",
      "Develop AI projects",
    ],
  },
];

const LEVEL_STYLE = {
  Beginner: { dot: "#22c55e", bg: "#dcfce7", color: "#15803d" },
  Intermediate: { dot: "#f59e0b", bg: "#fef3c7", color: "#b45309" },
  Advanced: { dot: "#8b5cf6", bg: "#ede9fe", color: "#6d28d9" },
};

function formatINR(n) {
  return n.toLocaleString("en-IN");
}

function FloatBob({
  children,
  delay = 0,
  amplitude = 5,
  duration = 3,
  style,
  className,
}) {
  return (
    <motion.div
      className={className}
      style={style}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "mirror",
      }}
    >
      {children}
    </motion.div>
  );
}

function SpinningStar({
  size = 13,
  color,
  top,
  left,
  right,
  bottom,
  delay = 0,
}) {
  return (
    <motion.div
      className="absolute pointer-events-none z-[2]"
      style={{ top, left, right, bottom }}
      animate={{ rotate: 360, scale: [1, 1.3, 1] }}
      transition={{
        rotate: { duration: 9, repeat: Infinity, ease: "linear", delay },
        scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      <Star size={size} fill={color} color={color} />
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   BUNDLE CARD
───────────────────────────────────────── */
function BundleCard({
  bundle,
  isActive,
  onClick,
  isTouched,
  isMobile,
  onEnroll,
}) {
  const lvl = LEVEL_STYLE[bundle.level] || LEVEL_STYLE.Intermediate;
  const highlighted = isActive || isTouched;

  return (
    <motion.div
      onClick={!isActive ? onClick : undefined}
      animate={{
        scale: highlighted ? 1 : 0.82,
        opacity: highlighted ? 1 : 0.55,
        y: highlighted ? -6 : 0,
      }}
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
      className="flex-shrink-0 flex flex-col rounded-3xl overflow-hidden"
      style={{
        width: "100%",
        cursor: isActive ? "default" : "pointer",
        background: "rgba(255,255,255,0.96)",
        border: `2px solid ${bundle.accent}${highlighted ? "45" : "18"}`,
        boxShadow: highlighted
          ? `0 20px 56px ${bundle.accent}30, 0 6px 20px rgba(0,0,0,0.12)`
          : `0 2px 12px rgba(0,0,0,0.06)`,
        fontFamily: "'Nunito', sans-serif",
        transformOrigin: "center center",
        position: "relative",
        zIndex: highlighted ? 10 : 1,
      }}
    >
      {/* Image */}
      <div
        className="bundle-card-image relative overflow-hidden"
        style={{ height: 220 }}
      >
        <img
          src={bundle.img}
          alt={bundle.title}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${bundle.accent}55 0%, transparent 55%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.62) 0%, transparent 52%)",
          }}
        />


        <div className="absolute w-22 h-11 rounded-lg top-4 left-4">
          <Image
            src="/logos/nasscom.webp"
            alt={bundle.title}
            fill
            className="object-cover rounded-xl object-center "
          />
        </div>
        <div className="absolute w-22 h-11 rounded-lg top-4 right-4">
          <Image
            src="/logos/ites.webp"
            alt={bundle.title}
            fill
            className="object-cover rounded-lg object-center bg-white p-px"
          />
        </div>

        <div
          className="bundle-card-badge absolute bottom-3 left-3 rounded-full px-2.5 py-1 text-[11px] font-bold text-white"
          style={{
            background: "rgba(0,0,0,0.42)",
            backdropFilter: "blur(6px)",
          }}
        >
          Grade : {bundle.grade}
        </div>

        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          <div
            className="bundle-icon-box w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: bundle.accent,
              boxShadow: `0 3px 10px ${bundle.accent}55`,
            }}
          >
            <bundle.Icon
              size={isMobile ? 13 : 18}
              color="white"
              strokeWidth={2}
            />
          </div>
          <div className="flex items-center gap-1.5">
            <motion.span
              className="w-2 h-2 rounded-full"
              style={{ background: lvl.dot, display: "block" }}
              animate={
                highlighted ? { scale: [1, 1.5, 1], opacity: [1, 0.4, 1] } : {}
              }
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            <span className="text-[11px] font-bold text-white">
              {bundle.level}
            </span>
          </div>
        </div>


      </div>

      {/* Body */}
      <div className="bundle-card-body flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="bundle-card-badge inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide"
            style={{ color: lvl.color, background: lvl.bg }}
          >
            <Zap size={9} /> {bundle.level}
          </span>
          {!isMobile && (
            <span className="text-[12px] text-gray-400 font-bold truncate">
              {bundle.subtitle}
            </span>
          )}
        </div>

        <h3
          className="bundle-card-title"
          style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: "1.3rem",
            color: "#111827",
            lineHeight: 1.25,
          }}
        >
          {bundle.title}
        </h3>

        <p className="bundle-card-desc text-[13px] text-gray-500 leading-relaxed font-semibold line-clamp-2">
          {bundle.description}
        </p>

        <div className="bundle-stats-grid grid grid-cols-2 gap-2">
          {(isMobile
            ? [
                {
                  icon: <Milestone size={11} />,
                  val: `${bundle.lessons} Lessons`,
                },
                {
                  icon: <Activity size={11} />,
                  val: `${bundle.activities} Activities`,
                },
              ]
            : [
                {
                  icon: <Milestone size={13} />,
                  val: `${bundle.lessons} Lessons`,
                },
                {
                  icon: <Activity size={13} />,
                  val: `${bundle.activities} Activities`,
                },
                { icon: <Clock size={13} />, val: bundle.duration },
                {
                  icon: <Users size={13} />,
                  val: `${bundle.students} Enrolled`,
                },
              ]
          ).map(({ icon, val }) => (
            <div
              key={val}
              className="bundle-card-stat flex items-center gap-2 rounded-xl px-3 py-2 text-[12px] font-bold"
              style={{ background: `${bundle.accent}0d`, color: bundle.accent }}
            >
              {icon} <span className="text-gray-600">{val}</span>
            </div>
          ))}
        </div>

        <ul className="bundle-achieve-list flex flex-col gap-1.5">
          {bundle.achievements.slice(0, isMobile ? 2 : 3).map((item) => (
            <li
              key={item}
              className="bundle-card-achieve flex items-start gap-2 text-[13px] text-gray-600 font-bold"
            >
              <CheckCircle2
                size={isMobile ? 11 : 13}
                strokeWidth={2.5}
                className="mt-0.5 shrink-0"
                style={{ color: bundle.accent }}
              />
              {item}
            </li>
          ))}
        </ul>

        {!isMobile && (
          <div className="flex flex-wrap gap-1.5">
            {bundle.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-2.5 py-1 text-[11px] font-bold border"
                style={{
                  color: bundle.accent,
                  background: `${bundle.accent}10`,
                  borderColor: `${bundle.accent}28`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div
          className="bundle-divider"
          style={{ height: 1, background: `${bundle.accent}18` }}
        />

        {/* Price + CTA */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-0.5">
            <IndianRupee
              size={isMobile ? 11 : 13}
              strokeWidth={2.5}
              style={{ color: BRAND.orange, marginBottom: 1 }}
            />
            <span
              className="bundle-card-price"
              style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: "1.3rem",
                color: BRAND.navy,
                lineHeight: 1,
              }}
            >
              {formatINR(bundle.price)}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                onEnroll();
              }}
              className="bundle-card-btn flex items-center gap-1.5 rounded-xl px-4 py-2 text-[13px] text-white font-bold"
              style={{
                background: `linear-gradient(135deg, ${bundle.accent}, ${bundle.accentAlt})`,
                boxShadow: `0 3px 12px ${bundle.accent}40`,
                fontFamily: "'Fredoka One', cursive",
              }}
            >
              Enroll <ArrowRight size={isMobile ? 10 : 12} strokeWidth={2.5} />
            </motion.button>

          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div
        className="h-1.5 w-full"
        style={{
          background: `linear-gradient(90deg, ${bundle.accent}, ${bundle.accentAlt}, ${BRAND.orange})`,
        }}
      />
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   MAIN
───────────────────────────────────────── */
export default function BundleSection() {
  const router = useRouter();

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchedIdx, setTouchedIdx] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef(null);
  const N = BUNDLES.length;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const next = useCallback(() => setActive((a) => (a + 1) % N), [N]);
  const prev = useCallback(() => setActive((a) => (a - 1 + N) % N), [N]);

  const startAuto = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 2800);
  }, [next]);

  const stopAuto = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (paused) {
      stopAuto();
      return;
    }
    startAuto();
    return stopAuto;
  }, [paused, startAuto, stopAuto]);

  const activeBundle = BUNDLES[active];
  const order = [(active - 1 + N) % N, active, (active + 1) % N];

  return (
    <>
      <FontLoader />
      <section
        className="relative py-14 sm:py-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #f5f0ff 0%, #fff0f7 35%, #f0f9ff 70%, #f0fff8 100%)",
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        {/* Dotted BG */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: `radial-gradient(circle, ${BRAND.violet} 1.5px, transparent 1.5px)`,
            backgroundSize: "28px 28px",
            opacity: 0.035,
          }}
        />

        {/* Wavy top/bottom */}
        <div
          className="absolute top-0 left-0 w-full pointer-events-none z-[4]"
          style={{ lineHeight: 0 }}
        >
          <svg
            viewBox="0 0 1440 56"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,0 L0,0 Z"
              fill="#fff"
            />
          </svg>
        </div>
        <div
          className="absolute bottom-0 left-0 w-full pointer-events-none z-[4]"
          style={{ lineHeight: 0 }}
        >
          <svg
            viewBox="0 0 1440 56"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z"
              fill="#fff"
            />
          </svg>
        </div>

        {/* Blobs */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div
            style={{
              position: "absolute",
              top: -100,
              right: -100,
              width: 500,
              height: 500,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${BRAND.violet}18, transparent 70%)`,
              filter: "blur(60px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -80,
              left: -80,
              width: 420,
              height: 420,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${BRAND.orange}15, transparent 70%)`,
              filter: "blur(55px)",
            }}
          />
        </div>

        {/* Stars — desktop only */}
        <div className="hidden lg:block" aria-hidden="true">
          <SpinningStar
            size={14}
            color={BRAND.amber}
            top="8%"
            left="3%"
            delay={0}
          />
          <SpinningStar
            size={11}
            color={BRAND.rose}
            top="85%"
            left="5%"
            delay={1}
          />
          <SpinningStar
            size={13}
            color={BRAND.violet}
            top="6%"
            right="4%"
            delay={0.5}
          />
          <SpinningStar
            size={10}
            color={BRAND.sky}
            top="88%"
            right="5%"
            delay={1.5}
          />
          <SpinningStar
            size={9}
            color={BRAND.mint}
            top="50%"
            left="1%"
            delay={2}
          />
          <SpinningStar
            size={12}
            color={BRAND.orange}
            top="48%"
            right="2%"
            delay={0.8}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ── HEADER ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 sm:mb-12"
          >
            <div className="flex justify-center sm:justify-start mb-3 sm:mb-4">
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-[12px] font-bold uppercase tracking-widest border-2"
                style={{
                  color: BRAND.violet,
                  borderColor: `${BRAND.violet}38`,
                  background: "linear-gradient(135deg, #ede9fe, #fce7f3)",
                }}
              >
                <FloatBob
                  amplitude={4}
                  duration={2.2}
                  style={{ display: "flex" }}
                >
                  <Trophy size={12} style={{ color: BRAND.orange }} />
                </FloatBob>
                Bundle Programs
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h2
                  className="leading-tight text-center sm:text-left"
                  style={{
                    fontFamily: "'Fredoka One', cursive",
                    fontSize: "clamp(1.5rem, 5vw, 3rem)",
                    color: BRAND.navy,
                  }}
                >
                  All-in-One Learning{" "}
                  <span
                    style={{
                      background: `linear-gradient(120deg, ${BRAND.sky}, ${BRAND.violet})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Bundles
                  </span>
                </h2>
                <p className="mt-2 text-[12px] sm:text-[15px] text-gray-500 max-w-xl leading-relaxed font-bold text-center sm:text-left">
                  Power-packed programs combining{" "}
                  <span style={{ color: BRAND.violet, fontWeight: 900 }}>
                    multiple tracks
                  </span>{" "}
                  for maximum impact — designed for students who want it all.
                </p>
              </div>

              {/* Stats pill — desktop only */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 22,
                  delay: 0.2,
                }}
                className="hidden sm:flex items-center gap-5 shrink-0 rounded-3xl px-6 py-4 border-2"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  borderColor: `${BRAND.violet}20`,
                  boxShadow: `0 8px 28px ${BRAND.violet}10`,
                  backdropFilter: "blur(12px)",
                }}
              >
                {[
                  { value: String(N), label: "Bundles", color: BRAND.violet },
                  { value: "9–12", label: "Months", color: BRAND.sky },
                  { value: "11k+", label: "Students", color: BRAND.orange },
                ].map(({ value, label, color }, i, arr) => (
                  <React.Fragment key={label}>
                    <div className="text-center">
                      <p
                        style={{
                          fontFamily: "'Fredoka One', cursive",
                          fontSize: "1.5rem",
                          color,
                          lineHeight: 1,
                        }}
                      >
                        {value}
                      </p>
                      <p className="text-[11px] text-gray-400 mt-0.5 font-bold">
                        {label}
                      </p>
                    </div>
                    {i < arr.length - 1 && (
                      <div
                        style={{
                          width: 1,
                          height: 34,
                          background: `${BRAND.violet}20`,
                        }}
                      />
                    )}
                  </React.Fragment>
                ))}
              </motion.div>
            </div>

            {/* Mobile inline stats */}
            <div className="flex sm:hidden justify-center gap-8 mt-4">
              {[
                { value: String(N), label: "Bundles", color: BRAND.violet },
                { value: "9–12", label: "Months", color: BRAND.sky },
                { value: "11k+", label: "Students", color: BRAND.orange },
              ].map(({ value, label, color }) => (
                <div key={label} className="text-center">
                  <p
                    style={{
                      fontFamily: "'Fredoka One', cursive",
                      fontSize: "1.2rem",
                      color,
                      lineHeight: 1,
                    }}
                  >
                    {value}
                  </p>
                  <p className="text-[10px] text-gray-400 mt-0.5 font-bold">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center sm:justify-start gap-2 mt-4">
              {[
                BRAND.violet,
                BRAND.sky,
                BRAND.orange,
                BRAND.mint,
                BRAND.rose,
              ].map((c, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
                  style={{ background: c }}
                  animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{
                    duration: 1.6 + i * 0.2,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* ── CAROUSEL ── */}
          <div
            className="relative select-none"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => {
              setPaused(false);
              setTouchedIdx(null);
            }}
          >
            <div
              className="absolute left-0 top-0 bottom-0 w-[8%] pointer-events-none z-20"
              style={{
                background:
                  "linear-gradient(to right, rgba(245,240,255,0.92), transparent)",
              }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-[8%] pointer-events-none z-20"
              style={{
                background:
                  "linear-gradient(to left, rgba(240,249,255,0.92), transparent)",
              }}
            />

            <div
              className="flex items-center justify-center"
              style={{
                paddingTop: isMobile ? 20 : 52,
                paddingBottom: isMobile ? 20 : 52,
              }}
            >
              {order.map((idx, pos) => {
                const bundle = BUNDLES[idx];
                const isCenter = pos === 1;
                const isLeft = pos === 0;
                const isRight = pos === 2;

                return (
                  <div
                    key={bundle.slug}
                    onTouchStart={() => {
                      setTouchedIdx(idx);
                      setPaused(true);
                    }}
                    onTouchEnd={() => {
                      setTouchedIdx(null);
                      setPaused(false);
                    }}
                    style={{
                      width: isCenter
                        ? isMobile
                          ? "clamp(230px, 75vw, 320px)"
                          : "clamp(300px, 46vw, 520px)"
                        : isMobile
                          ? "clamp(130px, 48vw, 220px)"
                          : "clamp(200px, 30vw, 360px)",
                      flexShrink: 0,
                      marginLeft: isRight
                        ? isMobile
                          ? "clamp(-90px, -28vw, -70px)"
                          : "clamp(-80px, -8vw, -110px)"
                        : 0,
                      marginRight: isLeft
                        ? isMobile
                          ? "clamp(-90px, -28vw, -70px)"
                          : "clamp(-80px, -8vw, -110px)"
                        : 0,
                      zIndex: isCenter ? 10 : 1,
                      position: "relative",
                    }}
                  >
                    <BundleCard
                      bundle={bundle}
                      isActive={isCenter}
                      isTouched={touchedIdx === idx}
                      isMobile={isMobile}
                      onClick={() => {
                        setActive(idx);
                        startAuto();
                      }}
                      onEnroll={() => window.open(`/courses/${bundle.slug}`, "_blank")}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── NAV ── */}
          <div className="flex items-center justify-center gap-4 mt-1">
            <motion.button
              onClick={() => {
                prev();
                startAuto();
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center border-2"
              style={{
                background: "rgba(255,255,255,0.9)",
                borderColor: `${activeBundle.accent}30`,
                color: activeBundle.accent,
                boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
              }}
            >
              <ChevronLeft size={16} strokeWidth={2.5} />
            </motion.button>

            <div className="flex items-center gap-2">
              {BUNDLES.map((b, i) => (
                <motion.button
                  key={b.slug}
                  onClick={() => {
                    setActive(i);
                    startAuto();
                  }}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    width: i === active ? 22 : 7,
                    opacity: i === active ? 1 : 0.35,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  className="h-2 rounded-full"
                  style={{
                    background: i === active ? activeBundle.accent : "#9ca3af",
                  }}
                />
              ))}
            </div>

            <motion.button
              onClick={() => {
                next();
                startAuto();
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center text-white"
              style={{
                background: `linear-gradient(135deg, ${activeBundle.accent}, ${activeBundle.accentAlt})`,
                boxShadow: `0 4px 16px ${activeBundle.accent}40`,
              }}
            >
              <ChevronRight size={16} strokeWidth={2.5} />
            </motion.button>
          </div>

          <p className="text-center text-[10px] sm:text-[11px] text-gray-400 font-bold mt-3">
            Auto-playing · Touch to pause · Tap side cards to focus
          </p>
        </div>
      </section>
    </>
  );
}
