
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarCheck,
  ChevronDown,
  Sparkles,
  Rocket,
  Star,
  Shield,
  Laptop,
  User,
  Mail,
  Phone,
  BookOpen,
  CheckCircle2,
  Zap,
} from "lucide-react";
import CTAButton from "./CTAbutton";
import Image from "next/image";

const B = { blue: "#1642d6", light: "#1d8fff", orange: "#ff6900" };

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

const COURSES = [
  "Web Development for Beginners (HTML & CSS)",
  "Interactive Web Development (HTML, CSS & JS)",
  "Advanced Full Stack Web Development",
  "Data Analysis Foundations",
  "AI & Machine Learning Foundations",
  "Full Stack — AI & Machine Learning",
  "Cyber Security Foundations",
  "Cloud Computing Foundations",
  "Python Programming Foundations",
  "Java Programming Foundations",
];

const COUNTRIES = [
  { code: "IN", flag: "🇮🇳", dial: "+91" },
  { code: "US", flag: "🇺🇸", dial: "+1"  },
  { code: "GB", flag: "🇬🇧", dial: "+44" },
  { code: "AE", flag: "🇦🇪", dial: "+971" },
  { code: "CA", flag: "🇨🇦", dial: "+1"  },
  { code: "AU", flag: "🇦🇺", dial: "+61" },
];

const FLOATERS = [
  { Icon: Rocket,       top: "8%",  left: "6%",  accent: B.blue,    delay: 0   },
  { Icon: Star,         top: "18%", left: "72%", accent: B.orange,  delay: 0.4 },
  { Icon: Shield,       top: "55%", left: "4%",  accent: "#6d28d9", delay: 0.8 },
  { Icon: Zap,          top: "70%", left: "68%", accent: B.light,   delay: 1.2 },
  { Icon: BookOpen,     top: "38%", left: "78%", accent: "#15803d", delay: 0.6 },
  { Icon: CheckCircle2, top: "92%", left: "14%", accent: B.orange,  delay: 1.0 },
];

const PERKS = [
  { icon: Star,         text: "100% Free — No Credit Card"   },
  { icon: Shield,       text: "Live Session with Expert"     },
  { icon: CheckCircle2, text: "Personalized Course Guidance" },
];

function Field({ label, icon: Icon, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12px] font-bold text-gray-600 uppercase tracking-wide flex items-center gap-1.5">
        <Icon size={11} style={{ color: B.blue }} />
        {label}
      </label>
      {children}
    </div>
  );
}

const inputCls = "w-full rounded-xl border bg-white px-4 py-2.5 text-[14px] text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:border-transparent";

const inputStyle = (focused) => ({
  borderColor: focused ? B.blue : "#e2e8f0",
  boxShadow: focused ? `0 0 0 3px ${B.blue}18` : "none",
});

export default function BookDemo() {
  const [country, setCountry]     = useState(COUNTRIES[0]);
  const [phone, setPhone]         = useState("");
  const [email, setEmail]         = useState("");
  const [childName, setChild]     = useState("");
  const [course, setCourse]       = useState("");
  const [hasDevice, setDevice]    = useState("yes");
  const [showDial, setShowDial]   = useState(false);
  const [focused, setFocused]     = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <FontLoader />
      <section
        className="relative overflow-hidden py-22"
        style={{
          background: `linear-gradient(135deg, ${B.blue} 0%, ${B.light} 100%)`,
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        <WavyTop fill="#ffffff" />
        <WavyBottom fill="#ffffff" />

        {/* decorative dot grid */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />

        {/* decorative circles */}
        <div
          className="absolute pointer-events-none"
          aria-hidden="true"
          style={{ width: 560, height: 560, top: "50%", left: "18%", transform: "translate(-50%,-50%)" }}
        >
          <div className="absolute inset-0 rounded-full border-2 opacity-[0.12]" style={{ borderColor: "white" }} />
          <div className="absolute rounded-full border-2 opacity-[0.08]" style={{ inset: "-48px", borderColor: "white" }} />
          <div className="absolute rounded-full border-2 opacity-[0.05]" style={{ inset: "-100px", borderColor: "white" }} />
        </div>

        {/* floating icon bubbles */}
        {FLOATERS.map(({ Icon, top, left, accent, delay }, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.5 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay }}
            className="absolute hidden lg:flex items-center justify-center rounded-2xl shadow-xl pointer-events-none z-0 opacity-30"
            style={{ top, left, width: 52, height: 52, background: "white", boxShadow: `0 8px 24px ${accent}30` }}
            aria-hidden="true"
          >
            <Icon size={22} style={{ color: accent }} />
          </motion.div>
        ))}

        {/* ✅ FIX: className is a single clean string — no newlines or extra whitespace */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-0 min-h-[580px] items-center">

          {/* LEFT — hero copy */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="py-16 lg:py-20 flex flex-col gap-6 text-white z-10"
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest w-fit"
              style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
            >
              <Sparkles size={11} style={{ color: B.orange }} />
              Free Trial Class
            </span>

            <h2
              className="font-light leading-normal tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontFamily: "'Fredoka One', cursive" }}
            >
              Empower Your Child with{" "}
              <span style={{
                background: "linear-gradient(100deg,#ffb347,#ff6900)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Skills for Tomorrow
              </span>
            </h2>

            <p className="text-[15px] text-white/70 leading-relaxed max-w-md">
              Book a free demo class today. Our expert mentors will guide your child
              on the best learning path — live, interactive, and completely free.
            </p>

            {/* perks */}
            <ul className="flex flex-col gap-3 mt-2">
              {PERKS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-[14px] font-semibold text-white/90">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.15)" }}
                  >
                    <Icon size={13} color="white" />
                  </div>
                  {text}
                </li>
              ))}
            </ul>

            {/* trust row */}
            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/15">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=60&h=60&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=60&h=60&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face",
                ].map((src, i) => (
                  <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 object-cover" style={{ borderColor: B.blue }} />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} fill={B.orange} color={B.orange} />
                  ))}
                </div>
                <p className="text-[11px] text-white/60 mt-0.5">
                  Trusted by <span className="font-bold text-white/90">2,000+ parents</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — form card */}
          <div className="py-10 lg:py-14 px-6 flex flex-col justify-center items-center lg:justify-end">
            <Image
              src="https://images.unsplash.com/photo-1610484826967-09c5720778c7"
              alt="Book a Demo"
              width={540}
              height={600}
              className="hidden lg:block rounded-2xl shadow-xl"
            />

            <CTAButton
                      type="submit"
                      className="w-full mt-1 rounded-2xl py-3.5 text-[15px] font-extrabold text-white flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                      style={{
                        background: `linear-gradient(135deg, ${B.orange}, ${B.light})`,
                        boxShadow: `0 8px 28px ${B.orange}40`,
                      }}
                    >
                      <CalendarCheck size={16} />
                      Book a Free Demo Class
                    </CTAButton>
          

          </div>
        </div>
      </section>
    </>
  );
}