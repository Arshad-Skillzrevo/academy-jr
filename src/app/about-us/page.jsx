"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Rocket,
  Users,
  Globe,
  Star,
  Award,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Heart,
  Lightbulb,
  Shield,
  Search,
  BookOpen,
  Handshake,
  Scale,
  Trophy,
  Sparkles,
  Zap,
  GraduationCap,
  Briefcase,
  BarChart3,
  Target,
  Eye,
} from "lucide-react";
import WhoWeAre from "./WhoWeAre";

/* ─────────────────────────────────────────
   GOOGLE FONTS
───────────────────────────────────────── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');

    @keyframes floatBob {
      0%, 100% { transform: translateY(0px); }
      50%       { transform: translateY(-9px); }
    }
    @keyframes spinStar {
      from { transform: rotate(0deg) scale(1); }
      50%  { transform: rotate(180deg) scale(1.2); }
      to   { transform: rotate(360deg) scale(1); }
    }
    @keyframes pulseDot {
      0%, 100% { transform: scale(1); opacity: 1; }
      50%       { transform: scale(1.5); opacity: 0.5; }
    }
    @keyframes growWidth {
      from { width: 0%; }
      to   { width: 100%; }
    }
    .float-bob  { animation: floatBob 3.5s ease-in-out infinite; }
    .spin-star  { animation: spinStar 8s linear infinite; }
    .pulse-dot  { animation: pulseDot 1.8s ease-in-out infinite; }
  `}</style>
);

/* ─────────────────────────────────────────
   BRAND
───────────────────────────────────────── */
const B = {
  violet: "#7c3aed",
  purple: "#a855f7",
  sky: "#0ea5e9",
  cyan: "#22d3ee",
  rose: "#f43f5e",
  orange: "#f97316",
  amber: "#fbbf24",
  mint: "#10b981",
  navy: "#0f1b4c",
};

/* ─────────────────────────────────────────
   SHARED HELPERS
───────────────────────────────────────── */
function DottedBg({ color = B.violet, opacity = 0.04, size = 28 }) {
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

function WavyDivider({ fill = "#fff", flip = false }) {
  return (
    <div
      className="w-full pointer-events-none"
      style={{ lineHeight: 0, transform: flip ? "scaleY(-1)" : "none" }}
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

function SpinningStar({ size = 14, color, style: s }) {
  return (
    <div
      className="absolute pointer-events-none z-[2] spin-star"
      style={s}
      aria-hidden="true"
    >
      <Star size={size} fill={color} color={color} />
    </div>
  );
}

function FloatBob({ children, delay = 0, style: s, className }) {
  return (
    <div
      className={`float-bob ${className || ""}`}
      style={{ animationDelay: `${delay}s`, ...s }}
    >
      {children}
    </div>
  );
}

function PulsingDots({ colors }) {
  return (
    <div className="flex gap-2 mt-5" aria-hidden="true">
      {colors.map((c, i) => (
        <div
          key={i}
          className="w-2 h-2 rounded-full pulse-dot"
          style={{ background: c, animationDelay: `${i * 0.18}s` }}
        />
      ))}
    </div>
  );
}

function SectionEyebrow({ icon: Icon, label, color = B.violet }) {
  return (
    <div className="flex justify-center mb-4">
      <span
        className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-bold uppercase tracking-widest border-2"
        style={{
          color,
          borderColor: `${color}38`,
          background: `${color}10`,
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        <FloatBob style={{ display: "flex" }}>
          <Icon size={13} style={{ color: B.orange }} />
        </FloatBob>
        {label}
      </span>
    </div>
  );
}

function SectionHeading({ children, gradient, center = true }) {
  return (
    <h2
      className={`leading-tight ${center ? "text-center" : ""}`}
      style={{
        fontFamily: "'Fredoka One', cursive",
        fontSize: "clamp(1.8rem,3.8vw,3rem)",
        color: B.navy,
      }}
    >
      {children}
      {gradient && (
        <span
          style={{
            background: gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {" "}
          {gradient.label || ""}
        </span>
      )}
    </h2>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};
const stagger = { animate: { transition: { staggerChildren: 0.1 } } };

function FadeInSection({ children, className, style: s, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      style={s}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const DIVISIONS = [
  {
    Icon: GraduationCap,
    color: B.sky,
    bg: "#e0f2fe",
    title: "SkillzRevo Academy",
    subtitle: "Training & Upskilling",
    desc: "Future-proof your career with industry-aligned training in Data Science, AI, Cybersecurity, Generative AI, Cloud, and more.",
    points: [
      "NASSCOM-certified trainers & curriculum",
      "Hands-on learning & real-world case studies",
      "Customized corporate training solutions",
    ],
    cta: { label: "Explore Courses", href: "https://academy.skillzrevo.com" },
  },
  {
    Icon: Briefcase,
    color: B.violet,
    bg: "#ede9fe",
    title: "SkillzRevo Talent",
    subtitle: "Staffing & Workforce Solutions",
    desc: "We help organizations build high-performing teams through end-to-end talent solutions for every business need.",
    points: [
      "Permanent & contract staffing",
      "Recruitment Process Outsourcing (RPO)",
      "Remote & offshore team hiring",
      "Executive & leadership hiring",
    ],
    cta: { label: "Hire Talent", href: "https://talent.skillzrevo.com/" },
  },
  {
    Icon: BarChart3,
    color: B.orange,
    bg: "#fff3e0",
    title: "SkillzRevo Consulting",
    subtitle: "Digital Transformation & Analytics",
    desc: "Partnering with enterprises to unlock business growth using data, technology, and insights.",
    points: [
      "AI & analytics implementation",
      "Business intelligence & automation",
      "Cloud migration & cybersecurity solutions",
      "Digital transformation strategy",
    ],
    cta: {
      label: "Explore Consulting",
      href: "https://consulting.skillzrevo.com/",
    },
  },
];

const VALUES = [
  {
    title: "Honesty",
    desc: "Delivering accurate information, fair practices, and genuine solutions across all verticals.",
    Icon: Handshake,
    color: B.sky,
  },
  {
    title: "Integrity",
    desc: "Acting responsibly and ethically, ensuring our actions reflect our words.",
    Icon: Scale,
    color: B.violet,
  },
  {
    title: "Innovation",
    desc: "Integrating emerging technologies and forward-thinking approaches across all verticals.",
    Icon: Lightbulb,
    color: B.orange,
  },
  {
    title: "Diversity & Inclusion",
    desc: "Embracing diverse perspectives and creating inclusive opportunities for all.",
    Icon: Users,
    color: B.rose,
  },
  {
    title: "Reliability",
    desc: "Consistent delivery of impactful solutions across training, staffing, and consulting.",
    Icon: Shield,
    color: B.mint,
  },
  {
    title: "Transparency",
    desc: "Open communication, complete clarity, and fairness with learners, clients, and partners.",
    Icon: Search,
    color: B.amber,
  },
  {
    title: "Excellence & Expertise",
    desc: "Striving for excellence through deep domain expertise and practical experience.",
    Icon: Trophy,
    color: B.sky,
  },
  {
    title: "Collaboration",
    desc: "Building strong partnerships with learners, clients, and industry leaders to achieve shared success.",
    Icon: Globe,
    color: B.violet,
  },
  {
    title: "Continuous Learning & Growth",
    desc: "Fostering lifelong learning and empowering individuals in an ever-evolving landscape.",
    Icon: BookOpen,
    color: B.orange,
  },
];

const ADVANTAGES = [
  { label: "5000+ Professionals Empowered", Icon: Users, color: B.sky },
  { label: "100+ Global Corporate Clients", Icon: Globe, color: B.violet },
  {
    label: "Expert-Led Curriculum & Consulting",
    Icon: Trophy,
    color: B.orange,
  },
  { label: "Customizable Workforce Solutions", Icon: Zap, color: B.rose },
  {
    label: "Industry Partnerships & Real Outcomes",
    Icon: Handshake,
    color: B.mint,
  },
];

const TIMELINE = [
  {
    year: "Pre-July 2024",
    text: "Operated under a partnership model delivering enterprise-driven training and workforce solutions.",
  },
  {
    year: "July 2024",
    text: "Incorporated as SkillzRevo Solutions Pvt Ltd to strengthen our vision and expand our global footprint.",
  },
  {
    year: "Sep 2024",
    text: "Launched SkillzRevo Academy, introducing flagship AI & Data Science programs with NASSCOM-aligned curriculum.",
  },
  {
    year: "Oct 2024",
    text: "Embarked on global expansion into South Africa, Middle East, UK, and Southeast Asia.",
  },
  {
    year: "Jan 2025",
    text: "Expanded into SkillzRevo Consulting and SkillzRevo Talent, offering enterprise consulting and staffing.",
  },
  {
    year: "Jul 2025",
    text: "Successfully onboarded Fortune 100 clients and institutional partners, accelerating B2B growth.",
  },
  {
    year: "Aug 2025",
    text: "Achieved a major milestone: 5,000+ professionals empowered and 100+ corporate clients served globally.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "SkillzRevo helped us upskill over 150 employees in just 3 months with real-world AI implementation strategies. Excellent experience!",
    author: "Head of L&D, Leading IT Firm",
  },
  {
    quote:
      "Their consulting support on data transformation projects helped us unlock operational efficiency and cost savings.",
    author: "VP Technology, Retail Enterprise",
  },
];

const DOT_COLORS = [B.violet, B.sky, B.orange, B.mint, B.rose];
const TIMELINE_COLORS = [
  B.sky,
  B.violet,
  B.orange,
  B.mint,
  B.rose,
  B.amber,
  B.rose,
];

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function AboutSkillzrevo() {
  return (
    <>
      <FontLoader />
      <div
        style={{ fontFamily: "'Nunito', sans-serif", background: "#fafafa" }}
      >
        {/* ══════════════════════════════════
            1. HERO
        ══════════════════════════════════ */}
        <section
          className="relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #f5f0ff 0%, #fff0f7 35%, #fff8ee 70%, #edfff8 100%)",
            paddingTop: "clamp(80px, 12vw, 140px)",
            paddingBottom: 0,
          }}
        >
          <DottedBg color={B.violet} opacity={0.04} />

          {/* Blobs */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
          >
            <div
              style={{
                position: "absolute",
                top: -80,
                right: -80,
                width: 500,
                height: 500,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${B.violet}22, transparent 70%)`,
                filter: "blur(60px)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: -60,
                width: 380,
                height: 380,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${B.orange}18, transparent 70%)`,
                filter: "blur(55px)",
              }}
            />
          </div>

          {/* Stars */}
          <div className="hidden lg:block" aria-hidden="true">
            <SpinningStar
              size={15}
              color={B.amber}
              style={{ top: "12%", left: "4%" }}
            />
            <SpinningStar
              size={12}
              color={B.rose}
              style={{ top: "60%", left: "6%" }}
            />
            <SpinningStar
              size={14}
              color={B.violet}
              style={{ top: "10%", right: "5%" }}
            />
            <SpinningStar
              size={10}
              color={B.sky}
              style={{ top: "65%", right: "7%" }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left copy */}
              <motion.div
                variants={stagger}
                initial="initial"
                animate="animate"
                className="flex flex-col gap-5 pb-16"
              >
                <motion.div variants={fadeUp}>
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-bold uppercase tracking-widest border-2"
                    style={{
                      color: B.violet,
                      borderColor: `${B.violet}38`,
                      background: "linear-gradient(135deg, #ede9fe, #fce7f3)",
                    }}
                  >
                    <FloatBob style={{ display: "flex" }}>
                      <Rocket size={13} style={{ color: B.orange }} />
                    </FloatBob>
                    About SkillzRevo
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  style={{
                    fontFamily: "'Fredoka One', cursive",
                    fontSize: "clamp(2rem,4.5vw,3.5rem)",
                    lineHeight: 1.06,
                    color: B.navy,
                  }}
                >
                  Empowering the Future with{" "}
                  <span
                    style={{
                      background: `linear-gradient(120deg, ${B.sky}, ${B.violet})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Skills, Talent
                  </span>{" "}
                  &amp;{" "}
                  <span
                    style={{
                      background: `linear-gradient(120deg, ${B.orange}, ${B.rose})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Technology
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="text-[16px] text-gray-500 leading-relaxed max-w-[480px]"
                  style={{ fontWeight: 700 }}
                >
                  At SkillzRevo Solutions Pvt Ltd, we are redefining how
                  individuals, professionals, and organizations evolve — through
                  cutting-edge training, intelligent staffing, and strategic
                  consulting.
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                  <motion.a
                    href="#divisions"
                    whileHover={{
                      scale: 1.04,
                      boxShadow: `0 12px 32px ${B.violet}45`,
                    }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 380, damping: 20 }}
                    className="inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-white font-bold"
                    style={{
                      background: `linear-gradient(135deg, ${B.purple}, ${B.violet})`,
                      boxShadow: `0 8px 24px ${B.violet}35`,
                      fontFamily: "'Fredoka One', cursive",
                      fontSize: "0.95rem",
                    }}
                  >
                    <Sparkles size={15} /> Explore Our Divisions{" "}
                    <ArrowRight size={14} />
                  </motion.a>
                  <motion.a
                    href="/contact-us"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 380, damping: 20 }}
                    className="inline-flex items-center gap-2 rounded-2xl border-2 px-7 py-3.5 font-bold"
                    style={{
                      color: B.orange,
                      borderColor: `${B.orange}45`,
                      background: "#fff8f0",
                      fontFamily: "'Fredoka One', cursive",
                      fontSize: "0.95rem",
                    }}
                  >
                    Get in Touch <ArrowRight size={14} />
                  </motion.a>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <PulsingDots colors={DOT_COLORS} />
                </motion.div>
              </motion.div>

              {/* Right image */}
              <motion.div
                initial={{ opacity: 0, x: 44, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2,
                }}
                className="relative hidden lg:block pb-0"
              >
                <div
                  className="absolute pointer-events-none rounded-[28px]"
                  style={{
                    inset: "-4px",
                    border: `2.5px dashed ${B.violet}28`,
                  }}
                  aria-hidden="true"
                />
                <div
                  className="relative rounded-3xl overflow-hidden"
                  style={{
                    height: 440,
                    border: `2px solid ${B.violet}18`,
                    boxShadow: `0 28px 70px ${B.violet}18`,
                  }}
                >
                  <Image
                    src="/assets/aboutus.webp"
                    alt="About SkillzRevo"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, #1e1b4b66 0%, transparent 50%)`,
                    }}
                  />
                </div>
                {/* Floating stat chips */}
                <FloatBob
                  delay={0.3}
                  style={{ position: "absolute", top: "12%", right: "-2rem" }}
                  className="z-10"
                >
                  <div
                    className="flex items-center gap-2 rounded-2xl px-4 py-2.5"
                    style={{
                      background: "rgba(255,255,255,0.92)",
                      border: `1.5px solid ${B.sky}25`,
                      boxShadow: `0 6px 20px rgba(0,0,0,0.08)`,
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center"
                      style={{ background: `${B.sky}18` }}
                    >
                      <Users size={15} style={{ color: B.sky }} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: "'Fredoka One', cursive",
                          color: B.sky,
                          fontSize: "1rem",
                          lineHeight: 1,
                        }}
                      >
                        5000+
                      </p>
                      <p className="text-[10px] text-gray-400 font-bold">
                        Professionals
                      </p>
                    </div>
                  </div>
                </FloatBob>
                <FloatBob
                  delay={0.8}
                  style={{ position: "absolute", bottom: "14%", left: "-2rem" }}
                  className="z-10"
                >
                  <div
                    className="flex items-center gap-2 rounded-2xl px-4 py-2.5"
                    style={{
                      background: `linear-gradient(135deg, ${B.amber}, ${B.orange})`,
                      boxShadow: `0 6px 20px ${B.orange}40`,
                    }}
                  >
                    <Globe size={14} color="white" />
                    <span
                      style={{
                        fontFamily: "'Fredoka One', cursive",
                        color: "white",
                        fontSize: "0.85rem",
                      }}
                    >
                      100+ Clients
                    </span>
                  </div>
                </FloatBob>
              </motion.div>
            </div>
          </div>

          {/* Tagline strip */}
          <div
            className="relative z-10 mt-12"
            style={{
              background: `linear-gradient(135deg, ${B.violet}, ${B.purple})`,
            }}
          >
            {/* <WavyDivider fill={`linear-gradient(135deg, ${B.violet}, ${B.purple})`} flip /> */}
            <div className="max-w-5xl mx-auto text-center py-5 px-6">
              <p
                style={{
                  fontFamily: "'Fredoka One', cursive",
                  fontSize: "clamp(0.9rem,2vw,1.25rem)",
                  color: "white",
                  lineHeight: 1.4,
                }}
              >
                SkillzRevo stands for Skillz + Revolution — embodying our
                mission to revolutionize skill acquisition, talent solutions,
                and enterprise consulting in a digital-first economy.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            2. ABOUT SECTION
        ══════════════════════════════════ */}
        <section
          className="relative py-24 overflow-hidden"
          style={{ background: "white" }}
        >
          <WavyDivider fill="#ffffff" />

          <DottedBg color={B.sky} opacity={0.035} />
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeInSection>
                <div
                  className="relative rounded-3xl overflow-hidden"
                  style={{
                    height: 460,
                    border: `2px solid ${B.violet}15`,
                    boxShadow: `0 24px 60px ${B.violet}12`,
                  }}
                >
                  <Image
                    src="/corporate.jpg"
                    alt="About SkillzRevo"
                    fill
                    className="object-cover"
                    quality={30}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, #1e1b4b55 0%, transparent 50%)`,
                    }}
                  />
                  {/* Dashed ring */}
                  <div
                    className="absolute pointer-events-none rounded-3xl"
                    style={{
                      inset: "-4px",
                      border: `2.5px dashed ${B.violet}22`,
                    }}
                    aria-hidden="true"
                  />
                </div>
              </FadeInSection>

              <FadeInSection delay={0.15}>
                {/* <SectionEyebrow icon={Sparkles} label="Who We Are" /> */}
                <h2
                  style={{
                    fontFamily: "'Fredoka One', cursive",
                    fontSize: "clamp(1.7rem,3.5vw,2.6rem)",
                    color: B.navy,
                    lineHeight: 1.1,
                  }}
                >
                  About{" "}
                  <span
                    style={{
                      background: `linear-gradient(120deg, ${B.sky}, ${B.violet})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    SkillzRevo
                  </span>
                </h2>
                <p
                  className="mt-3 text-[15px] text-gray-500 leading-relaxed"
                  style={{ fontWeight: 700 }}
                >
                  At{" "}
                  <strong style={{ color: B.navy }}>
                    SkillzRevo Solutions Pvt Ltd
                  </strong>
                  , we are a global leader in{" "}
                  <span style={{ color: B.orange }}>
                    Training, Staffing, and Consulting
                  </span>
                  , empowering individuals, professionals, and organizations to
                  thrive in today's digital-first world.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  {[
                    {
                      Icon: Users,
                      color: B.sky,
                      label:
                        "Led by visionary Ph.D. & IIT professionals with decades of experience.",
                    },
                    {
                      Icon: BookOpen,
                      color: B.orange,
                      label:
                        "Specialized in classroom & online training with NASSCOM-certified courses.",
                    },
                    {
                      Icon: Lightbulb,
                      color: B.violet,
                      label:
                        "Expertise in AI, ML, Cybersecurity, IoT, Robotics, Blockchain and more.",
                    },
                    {
                      Icon: Trophy,
                      color: B.mint,
                      label:
                        "Recognized as a NASSCOM Member & Licensed Training Partner.",
                    },
                  ].map(({ Icon, color, label }) => (
                    <motion.div
                      key={label}
                      whileHover={{
                        y: -4,
                        transition: {
                          type: "spring",
                          stiffness: 380,
                          damping: 20,
                        },
                      }}
                      className="flex items-start gap-3 rounded-2xl p-3.5 border-2"
                      style={{
                        background: `${color}0d`,
                        borderColor: `${color}25`,
                      }}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${color}20` }}
                      >
                        <Icon size={16} style={{ color }} strokeWidth={2.2} />
                      </div>
                      <p
                        className="text-[13px] text-gray-600 leading-snug"
                        style={{ fontWeight: 700 }}
                      >
                        {label}
                      </p>
                    </motion.div>
                  ))}
                </div>
                <PulsingDots colors={[B.sky, B.violet, B.orange, B.mint]} />
              </FadeInSection>
            </div>
          </div>
        </section>

        <WavyDivider fill="#f5f0ff" />

        {/* ══════════════════════════════════
            3. DIVISIONS
        ══════════════════════════════════ */}
        <section
          id="divisions"
          className="relative py-24 overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, #f5f0ff 0%, #fff0f7 50%, #f0f9ff 100%)",
          }}
        >
          <DottedBg color={B.violet} opacity={0.038} />
          <div className="hidden lg:block" aria-hidden="true">
            <SpinningStar
              size={14}
              color={B.amber}
              style={{ top: "8%", left: "3%" }}
            />
            <SpinningStar
              size={11}
              color={B.rose}
              style={{ top: "85%", left: "5%" }}
            />
            <SpinningStar
              size={12}
              color={B.sky}
              style={{ top: "10%", right: "4%" }}
            />
            <SpinningStar
              size={10}
              color={B.mint}
              style={{ top: "88%", right: "6%" }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <FadeInSection className="text-center mb-14">
              <SectionEyebrow icon={Rocket} label="Our Divisions" />
              <h2
                style={{
                  fontFamily: "'Fredoka One', cursive",
                  fontSize: "clamp(1.8rem,3.8vw,3rem)",
                  color: B.navy,
                }}
              >
                Three Pillars of{" "}
                <span
                  style={{
                    background: `linear-gradient(120deg, ${B.orange}, ${B.rose})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Excellence
                </span>
              </h2>
              <p
                className="mt-3 text-[16px] text-gray-500 max-w-xl mx-auto"
                style={{ fontWeight: 700 }}
              >
                Integrated solutions across training, talent, and
                transformation.
              </p>
              <div className="flex justify-center">
                <PulsingDots colors={DOT_COLORS} />
              </div>
            </FadeInSection>

            <div className="grid md:grid-cols-3 gap-6">
              {DIVISIONS.map((div, i) => (
                <FadeInSection key={div.title} delay={i * 0.12}>
                  <motion.div
                    whileHover={{
                      y: -7,
                      transition: {
                        type: "spring",
                        stiffness: 380,
                        damping: 20,
                      },
                    }}
                    className="flex flex-col h-full rounded-3xl overflow-hidden"
                    style={{
                      background: "rgba(255,255,255,0.9)",
                      border: `2px solid ${div.color}20`,
                      boxShadow: `0 8px 28px ${div.color}10`,
                    }}
                  >
                    {/* Color top strip */}
                    <div
                      style={{
                        height: 5,
                        background: `linear-gradient(90deg, ${div.color}, ${B.orange})`,
                      }}
                    />
                    <div className="p-6 flex flex-col flex-1 gap-4">
                      <FloatBob>
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${div.color}, ${div.color}bb)`,
                            boxShadow: `0 6px 18px ${div.color}35`,
                          }}
                        >
                          <div.Icon size={22} color="white" strokeWidth={2} />
                        </div>
                      </FloatBob>
                      <div>
                        <p
                          className="text-[11px] font-bold uppercase tracking-widest"
                          style={{ color: div.color }}
                        >
                          {div.subtitle}
                        </p>
                        <h3
                          style={{
                            fontFamily: "'Fredoka One', cursive",
                            fontSize: "1.2rem",
                            color: B.navy,
                            lineHeight: 1.15,
                            marginTop: 2,
                          }}
                        >
                          {div.title}
                        </h3>
                      </div>
                      <p
                        className="text-[13px] text-gray-500 leading-relaxed flex-1"
                        style={{ fontWeight: 700 }}
                      >
                        {div.desc}
                      </p>
                      <ul className="flex flex-col gap-2">
                        {div.points.map((pt) => (
                          <li
                            key={pt}
                            className="flex items-start gap-2 text-[12px] text-gray-600"
                            style={{ fontWeight: 700 }}
                          >
                            <CheckCircle2
                              size={13}
                              strokeWidth={2.5}
                              className="mt-0.5 shrink-0"
                              style={{ color: div.color }}
                            />
                            {pt}
                          </li>
                        ))}
                      </ul>
                      <motion.a
                        href={div.cta.href}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 20,
                        }}
                        className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-white text-[13px] font-bold mt-2"
                        style={{
                          background: `linear-gradient(135deg, ${div.color}, ${div.color}cc)`,
                          boxShadow: `0 4px 14px ${div.color}35`,
                          fontFamily: "'Fredoka One', cursive",
                          fontSize: "0.85rem",
                        }}
                      >
                        {div.cta.label}{" "}
                        <ArrowRight size={12} strokeWidth={2.5} />
                      </motion.a>
                    </div>
                  </motion.div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        <WavyDivider fill="white" />

        <WhoWeAre />
        <WavyDivider fill="white" />
        <WavyDivider fill="white" />

        {/* ══════════════════════════════════
            4. MISSION & VISION
        ══════════════════════════════════ */}
        <section
          className="relative py-24 overflow-hidden"
          style={{ background: "white" }}
        >
          <DottedBg color={B.orange} opacity={0.03} />
          <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
            <FadeInSection className="text-center mb-12">
              <SectionEyebrow
                icon={Target}
                label="Our Purpose"
                color={B.orange}
              />
              <h2
                style={{
                  fontFamily: "'Fredoka One', cursive",
                  fontSize: "clamp(1.8rem,3.8vw,3rem)",
                  color: B.navy,
                }}
              >
                Mission, Vision{" "}
                <span
                  style={{
                    background: `linear-gradient(120deg, ${B.orange}, ${B.rose})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  &amp; Values
                </span>
              </h2>
              <p
                className="mt-3 text-[15px] text-gray-500 max-w-xl mx-auto"
                style={{ fontWeight: 700 }}
              >
                Driven by a clear mission and vision that guide our work in
                training, staffing, and consulting.
              </p>
              <div className="flex justify-center">
                <PulsingDots
                  colors={[B.orange, B.violet, B.sky, B.mint, B.rose]}
                />
              </div>
            </FadeInSection>

            {/* Mission + Vision cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {[
                {
                  Icon: Target,
                  color: B.orange,
                  bg: "#fff3e0",
                  title: "Our Mission",
                  text: "Revolutionize skill development, talent transformation, and enterprise solutions through tech-enabled, outcome-driven services.",
                },
                {
                  Icon: Eye,
                  color: B.sky,
                  bg: "#e0f2fe",
                  title: "Our Vision",
                  text: "Be a global leader in shaping the digital workforce and enabling intelligent enterprise growth through skills, technology, and innovation.",
                },
              ].map(({ Icon, color, bg, title, text }, i) => (
                <FadeInSection key={title} delay={i * 0.12}>
                  <motion.div
                    whileHover={{
                      y: -6,
                      transition: {
                        type: "spring",
                        stiffness: 380,
                        damping: 20,
                      },
                    }}
                    className="rounded-3xl p-8 text-center border-2 h-full"
                    style={{
                      background: bg,
                      borderColor: `${color}28`,
                      boxShadow: `0 8px 28px ${color}12`,
                    }}
                  >
                    <FloatBob className="flex justify-center mb-5">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${color}, ${color}bb)`,
                          boxShadow: `0 8px 24px ${color}40`,
                        }}
                      >
                        <Icon size={28} color="white" strokeWidth={2} />
                      </div>
                    </FloatBob>
                    <h3
                      style={{
                        fontFamily: "'Fredoka One', cursive",
                        fontSize: "1.5rem",
                        color: B.navy,
                      }}
                    >
                      {title}
                    </h3>
                    <p
                      className="mt-3 text-[14px] text-gray-600 leading-relaxed"
                      style={{ fontWeight: 700 }}
                    >
                      {text}
                    </p>
                  </motion.div>
                </FadeInSection>
              ))}
            </div>

            {/* Core Values */}
            <FadeInSection className="text-center mb-8">
              <h3
                style={{
                  fontFamily: "'Fredoka One', cursive",
                  fontSize: "clamp(1.4rem,2.8vw,2rem)",
                  color: B.violet,
                }}
              >
                Our Core Values
              </h3>
            </FadeInSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {VALUES.map((v, i) => (
                <FadeInSection key={v.title} delay={i * 0.06}>
                  <motion.div
                    whileHover={{
                      y: -5,
                      transition: {
                        type: "spring",
                        stiffness: 380,
                        damping: 20,
                      },
                    }}
                    className="flex items-start gap-3.5 rounded-2xl p-4 border-2"
                    style={{
                      background: `${v.color}0a`,
                      borderColor: `${v.color}22`,
                      boxShadow: `0 4px 14px ${v.color}0d`,
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${v.color}20` }}
                    >
                      <v.Icon
                        size={18}
                        style={{ color: v.color }}
                        strokeWidth={2.2}
                      />
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: "'Fredoka One', cursive",
                          color: B.navy,
                          fontSize: "1rem",
                        }}
                      >
                        {v.title}
                      </p>
                      <p
                        className="text-[12px] text-gray-500 mt-0.5"
                        style={{ fontWeight: 700 }}
                      >
                        {v.desc}
                      </p>
                    </div>
                  </motion.div>
                </FadeInSection>
              ))}
            </div>

            {/* Tagline */}
            <FadeInSection className="mt-14 text-center">
              <div
                className="inline-block rounded-3xl px-8 py-5 border-2"
                style={{
                  background: "linear-gradient(135deg, #ede9fe, #fff0f7)",
                  borderColor: `${B.violet}25`,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Fredoka One', cursive",
                    fontSize: "clamp(0.9rem,1.8vw,1.15rem)",
                    color: B.violet,
                  }}
                >
                  "At SkillzRevo, our values drive everything we do — empowering
                  people, enabling businesses, and engineering transformation."
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>

        <WavyDivider fill="#f5f0ff" />

        {/* ══════════════════════════════════
            5. WHY CHOOSE US
        ══════════════════════════════════ */}
        <section
          className="relative py-24 overflow-hidden"
          style={{
            background: "linear-gradient(160deg, #f5f0ff 0%, #fff8ee 100%)",
          }}
        >
          <DottedBg color={B.violet} opacity={0.04} />
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
            <FadeInSection className="text-center mb-12">
              <SectionEyebrow
                icon={Trophy}
                label="Why Choose Us"
                color={B.mint}
              />
              <h2
                style={{
                  fontFamily: "'Fredoka One', cursive",
                  fontSize: "clamp(1.8rem,3.8vw,3rem)",
                  color: B.navy,
                }}
              >
                Why Choose{" "}
                <span
                  style={{
                    background: `linear-gradient(120deg, ${B.mint}, ${B.sky})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  SkillzRevo
                </span>
              </h2>
              <div className="flex justify-center">
                <PulsingDots
                  colors={[B.mint, B.sky, B.violet, B.orange, B.rose]}
                />
              </div>
            </FadeInSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {ADVANTAGES.map(({ label, Icon, color }, i) => (
                <FadeInSection key={label} delay={i * 0.08}>
                  <motion.div
                    whileHover={{
                      y: -6,
                      scale: 1.03,
                      transition: {
                        type: "spring",
                        stiffness: 380,
                        damping: 20,
                      },
                    }}
                    className="flex items-center gap-4 rounded-2xl p-5 border-2"
                    style={{
                      background: "rgba(255,255,255,0.9)",
                      borderColor: `${color}25`,
                      boxShadow: `0 6px 20px ${color}10`,
                    }}
                  >
                    <FloatBob delay={i * 0.2}>
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${color}, ${color}bb)`,
                          boxShadow: `0 6px 16px ${color}35`,
                        }}
                      >
                        <Icon size={20} color="white" strokeWidth={2} />
                      </div>
                    </FloatBob>
                    <p
                      style={{
                        fontFamily: "'Fredoka One', cursive",
                        color: B.navy,
                        fontSize: "0.95rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {label}
                    </p>
                  </motion.div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        <WavyDivider fill="#0f1b4c" />

        {/* ══════════════════════════════════
            6. JOURNEY / TIMELINE
        ══════════════════════════════════ */}
        <section
          className="relative py-24 overflow-hidden"
          style={{ background: B.navy }}
        >
          <DottedBg color="white" opacity={0.03} />
          <div className="hidden lg:block" aria-hidden="true">
            <SpinningStar
              size={14}
              color={B.amber}
              style={{ top: "8%", left: "3%" }}
            />
            <SpinningStar
              size={11}
              color={B.rose}
              style={{ top: "85%", left: "5%" }}
            />
            <SpinningStar
              size={12}
              color={B.sky}
              style={{ top: "10%", right: "4%" }}
            />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <FadeInSection className="text-center mb-14">
              <SectionEyebrow
                icon={Rocket}
                label="Our Journey"
                color={B.amber}
              />
              <h2
                style={{
                  fontFamily: "'Fredoka One', cursive",
                  fontSize: "clamp(1.8rem,3.8vw,3rem)",
                  color: "white",
                }}
              >
                How We{" "}
                <span
                  style={{
                    background: `linear-gradient(120deg, ${B.amber}, ${B.orange})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Evolved
                </span>
              </h2>
              <p
                className="mt-3 text-[15px] leading-relaxed max-w-lg mx-auto"
                style={{ color: "#c4b5fd", fontWeight: 700 }}
              >
                A timeline of how SkillzRevo became a global force in digital
                transformation.
              </p>
              <div className="flex justify-center">
                <PulsingDots
                  colors={[B.amber, B.orange, B.violet, B.sky, B.rose]}
                />
              </div>
            </FadeInSection>

            {/* Vertical timeline */}
            <div className="relative">
              {/* Central line */}
              <div
                className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5"
                style={{
                  background: `linear-gradient(180deg, ${B.violet}, ${B.orange}, ${B.violet})`,
                }}
                aria-hidden="true"
              />

              {TIMELINE.map((event, i) => {
                const color = TIMELINE_COLORS[i % TIMELINE_COLORS.length];
                const isLeft = i % 2 === 0;
                return (
                  <FadeInSection
                    key={i}
                    delay={i * 0.08}
                    className={`relative flex items-start mb-8 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                  >
                    {/* Content */}
                    <div
                      className={`w-[calc(50%-28px)] ${isLeft ? "pr-6 text-right" : "pl-6 text-left"}`}
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.03,
                          transition: {
                            type: "spring",
                            stiffness: 380,
                            damping: 20,
                          },
                        }}
                        className="inline-block rounded-2xl p-4 border-2"
                        style={{
                          background: `${color}12`,
                          borderColor: `${color}30`,
                        }}
                      >
                        <span
                          className="inline-block rounded-full px-3 py-1 text-[11px] font-bold text-white mb-2"
                          style={{
                            background: color,
                            fontFamily: "'Fredoka One', cursive",
                          }}
                        >
                          {event.year}
                        </span>
                        <p
                          className="text-[13px] leading-relaxed"
                          style={{ color: "#e2d9f3", fontWeight: 700 }}
                        >
                          {event.text}
                        </p>
                      </motion.div>
                    </div>

                    {/* Dot */}
                    <div className="w-14 flex justify-center flex-shrink-0 z-10">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{
                          background: color,
                          boxShadow: `0 0 0 4px ${color}30, 0 0 0 8px ${color}15`,
                        }}
                      >
                        <div className="w-3 h-3 rounded-full bg-white pulse-dot" />
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="w-[calc(50%-28px)]" />
                  </FadeInSection>
                );
              })}
            </div>
          </div>
        </section>

        <WavyDivider fill="white" flip />

        {/* ══════════════════════════════════
            7. TESTIMONIALS
        ══════════════════════════════════ */}
        <section
          className="relative py-24 overflow-hidden"
          style={{ background: "white" }}
        >
          <DottedBg color={B.violet} opacity={0.035} />
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
            <FadeInSection className="text-center mb-12">
              <SectionEyebrow
                icon={Star}
                label="Client Testimonials"
                color={B.amber}
              />
              <h2
                style={{
                  fontFamily: "'Fredoka One', cursive",
                  fontSize: "clamp(1.8rem,3.8vw,3rem)",
                  color: B.navy,
                }}
              >
                What Clients{" "}
                <span
                  style={{
                    background: `linear-gradient(120deg, ${B.amber}, ${B.orange})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Say About Us
                </span>
              </h2>
              <div className="flex justify-center">
                <PulsingDots
                  colors={[B.amber, B.orange, B.rose, B.violet, B.sky]}
                />
              </div>
            </FadeInSection>

            <div className="grid md:grid-cols-2 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <FadeInSection key={i} delay={i * 0.12}>
                  <motion.div
                    whileHover={{
                      y: -6,
                      transition: {
                        type: "spring",
                        stiffness: 380,
                        damping: 20,
                      },
                    }}
                    className="rounded-3xl p-7 border-2 h-full"
                    style={{
                      background: i === 0 ? "#fff8ee" : "#f5f0ff",
                      borderColor: i === 0 ? `${B.orange}25` : `${B.violet}25`,
                      boxShadow: `0 8px 28px ${i === 0 ? B.orange : B.violet}10`,
                    }}
                  >
                    {/* Quote mark */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        background: i === 0 ? `${B.orange}18` : `${B.violet}18`,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Fredoka One', cursive",
                          fontSize: "1.5rem",
                          color: i === 0 ? B.orange : B.violet,
                          lineHeight: 1,
                        }}
                      >
                        "
                      </span>
                    </div>
                    <p
                      className="text-[14px] text-gray-600 leading-relaxed italic mb-4"
                      style={{ fontWeight: 700 }}
                    >
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-2 mt-auto">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{
                          background:
                            i === 0 ? `${B.orange}20` : `${B.violet}20`,
                        }}
                      >
                        <Users
                          size={14}
                          style={{ color: i === 0 ? B.orange : B.violet }}
                        />
                      </div>
                      <p
                        style={{
                          fontFamily: "'Fredoka One', cursive",
                          color: B.navy,
                          fontSize: "0.9rem",
                        }}
                      >
                        {t.author}
                      </p>
                    </div>
                  </motion.div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        <WavyDivider fill="#f0fff8" />

        {/* ══════════════════════════════════
            8. CAREERS CTA
        ══════════════════════════════════ */}
        <section
          className="relative py-24 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #edfff8 0%, #f5f0ff 100%)",
          }}
        >
          <DottedBg color={B.mint} opacity={0.04} />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <FadeInSection>
              <SectionEyebrow
                icon={Sparkles}
                label="Join Our Team"
                color={B.mint}
              />
              <h2
                style={{
                  fontFamily: "'Fredoka One', cursive",
                  fontSize: "clamp(1.8rem,3.8vw,3rem)",
                  color: B.navy,
                }}
              >
                Careers{" "}
                <span
                  style={{
                    background: `linear-gradient(120deg, ${B.mint}, ${B.sky})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  @ SkillzRevo
                </span>
              </h2>
              <p
                className="mt-4 text-[16px] text-gray-500 max-w-lg mx-auto mb-8"
                style={{ fontWeight: 700 }}
              >
                Join our dynamic team of innovators, educators, and strategists!
                We're always looking for passionate professionals in training,
                consulting, and talent solutions.
              </p>
              <motion.a
                href="https://tutor.skillzrevo.com/Career/"
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 16px 40px ${B.mint}45`,
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 380, damping: 20 }}
                className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-white font-bold"
                style={{
                  background: `linear-gradient(135deg, ${B.mint}, #059669)`,
                  boxShadow: `0 8px 28px ${B.mint}35`,
                  fontFamily: "'Fredoka One', cursive",
                  fontSize: "1.05rem",
                }}
              >
                <FloatBob style={{ display: "flex" }}>
                  <Rocket size={18} />
                </FloatBob>
                Explore Opportunities <ArrowRight size={16} strokeWidth={2.5} />
              </motion.a>
              <PulsingDots colors={[B.mint, B.sky, B.violet, B.orange]} />
            </FadeInSection>
          </div>
        </section>

        <WavyDivider fill="white" />

        {/* ══════════════════════════════════
            9. CONTACT FOOTER
        ══════════════════════════════════ */}
        <section
          className="relative py-24 overflow-hidden"
          style={{ background: "white" }}
        >
          <DottedBg color={B.sky} opacity={0.035} />
          <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
            <FadeInSection className="text-center mb-12">
              <SectionEyebrow
                icon={MapPin}
                label="Get In Touch"
                color={B.sky}
              />
              <h2
                style={{
                  fontFamily: "'Fredoka One', cursive",
                  fontSize: "clamp(1.8rem,3.8vw,3rem)",
                  color: B.navy,
                }}
              >
                Contact{" "}
                <span
                  style={{
                    background: `linear-gradient(120deg, ${B.sky}, ${B.violet})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Us
                </span>
              </h2>
              <div className="flex justify-center">
                <PulsingDots colors={[B.sky, B.violet, B.orange, B.mint]} />
              </div>
            </FadeInSection>

            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Contact info */}
              <FadeInSection>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      Icon: MapPin,
                      color: B.sky,
                      label: "Corporate Office",
                      value:
                        "3rd Floor, A-166, A Block, Sector-63, Noida, Uttar Pradesh - 201301 India",
                    },
                    {
                      Icon: Phone,
                      color: B.violet,
                      label: "Phone",
                      value: "+91 96323 47896",
                    },
                    {
                      Icon: Mail,
                      color: B.orange,
                      label: "Email",
                      value: "enquire@skillzrevo.com",
                    },
                    {
                      Icon: Globe,
                      color: B.mint,
                      label: "Website",
                      value: "www.skillzrevo.com",
                    },
                  ].map(({ Icon, color, label, value }) => (
                    <motion.div
                      key={label}
                      whileHover={{
                        x: 4,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 20,
                        },
                      }}
                      className="flex items-start gap-4 rounded-2xl p-4 border-2"
                      style={{
                        background: `${color}0a`,
                        borderColor: `${color}22`,
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${color}20` }}
                      >
                        <Icon size={17} style={{ color }} strokeWidth={2.2} />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">
                          {label}
                        </p>
                        <p
                          className="text-[13px] text-gray-700"
                          style={{ fontWeight: 700 }}
                        >
                          {value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </FadeInSection>

              {/* Map */}
              <FadeInSection delay={0.15}>
                <div
                  className="rounded-3xl overflow-hidden border-2"
                  style={{
                    height: 340,
                    borderColor: `${B.violet}20`,
                    boxShadow: `0 12px 36px ${B.violet}10`,
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d437.7769734997925!2d77.37869550278488!3d28.623294067464958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1763907699392!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="SkillzRevo Office Location"
                  />
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
