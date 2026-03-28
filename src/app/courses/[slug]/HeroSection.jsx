import React from "react";
import {
  Code2, GraduationCap, BookOpen, Activity,
  PlayCircle, Phone, Award, Trophy, CheckCircle,
  Star, Rocket, Target, Palette, Lightbulb, Sparkles,
} from "lucide-react";
import { FloatIcon } from "./FloatIcon";
import { WobblyStarSVG } from "./WobblyStarSVG";
import { KidMascot } from "./KidMascot";

const HERO_FLOAT_ICONS = [
  { icon: Star,      style: { top: "12%",    left: "5%"   }, color: "text-amber-400"  },
  { icon: Palette,   style: { top: "20%",    right: "8%"  }, color: "text-pink-400"   },
  { icon: Rocket,    style: { bottom: "25%", left: "8%"   }, color: "text-indigo-400" },
  { icon: Lightbulb, style: { top: "60%",    right: "5%"  }, color: "text-yellow-400" },
  { icon: Target,    style: { bottom: "15%", right: "20%" }, color: "text-orange-400" },
  { icon: Sparkles,  style: { top: "35%",    left: "15%"  }, color: "text-violet-400" },
];

/**
 * HeroSection Component
 * The main landing page header featuring animated icons, stat bubbles, 
 * and a stylized mascot.
 */
export function HeroSection({
  title, subtitle, description, grade, lessons, activities, heroImage,
}) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #eef2ff 0%, #fdf4ff 40%, #fff7ed 100%)" }}
    >
      {/* Decorative Background Blobs */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #818cf8, #c4b5fd)" }} />
      <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #fb923c, #fbbf24)" }} />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #34d399, #06b6d4)" }} />

      {/* Floating Background Icons */}
      {HERO_FLOAT_ICONS.map((fi, i) => (
        <FloatIcon key={i} icon={fi.icon} style={fi.style} color={fi.color} size={24} />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* ── Left Column: Text & CTA ── */}
        <div className="animate-slideUp">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-100 rounded-full mb-5">
            <Code2 className="w-3.5 h-3.5 text-indigo-500" />
            <span className="text-xs font-black text-indigo-600 uppercase tracking-wider">Web Development</span>
            <WobblyStarSVG size={16} color="#f97316" className="inline-block ml-1" />
          </div>

          <h1 className="font-fredoka text-5xl md:text-6xl lg:text-7xl leading-tight text-gray-900 mb-2">
            <span className="squiggle-underline">{title}</span>
          </h1>
          <p className="font-fredoka text-2xl md:text-3xl text-indigo-500 mb-4">{subtitle}</p>
          <p className="text-gray-600 text-base max-w-lg leading-relaxed mb-8">{description}</p>

          {/* Stat bubbles */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { label: "Grade",      value: grade,      icon: GraduationCap, bg: "bg-violet-100",  color: "text-violet-600",  bdr: "border-violet-200"  },
              { label: "Lessons",    value: lessons,    icon: BookOpen,      bg: "bg-sky-100",     color: "text-sky-600",     bdr: "border-sky-200"     },
              { label: "Activities", value: activities, icon: Activity,      bg: "bg-emerald-100", color: "text-emerald-600", bdr: "border-emerald-200" },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`${s.bg} border-2 ${s.bdr} rounded-3xl px-5 py-3 text-center card-hover`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <s.icon className={`w-5 h-5 ${s.color} mx-auto mb-1`} />
                <p className={`font-fredoka text-2xl ${s.color}`}>{s.value}</p>
                <p className="text-xs font-bold text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="kid-btn kid-btn-blue">
              <PlayCircle className="w-4 h-4" /> Book a Free Demo
            </button>
            <button className="kid-btn kid-btn-orange">
              <Phone className="w-4 h-4" /> Schedule a Call
            </button>
          </div>
        </div>

        {/* ── Right Column: Imagery & Mascot ── */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div
            className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white"
            style={{ maxWidth: 420 }}
          >
            <img
              src={heroImage}
              alt="Web development course"
              className="w-full h-auto object-cover"
              style={{ aspectRatio: "4/3" }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent" />
          </div>

          {/* Floating badges */}
          <div
            className="absolute -bottom-4 -left-6 bg-white rounded-3xl shadow-xl px-5 py-3 flex items-center gap-3 border-2 border-amber-200 card-hover"
            style={{ animation: "floatBob 4s ease-in-out infinite 1s" }}
          >
            <div className="w-10 h-10 bg-amber-100 rounded-2xl flex items-center justify-center">
              <Award className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <p className="text-xs font-black text-gray-800 flex items-center gap-1">
                <Trophy className="w-3.5 h-3.5 text-amber-500" /> Certificate
              </p>
              <p className="text-xs text-gray-400 font-semibold">Upon Completion</p>
            </div>
          </div>

          <div
            className="absolute -top-4 -right-4 bg-indigo-500 text-white rounded-2xl shadow-lg px-4 py-2 text-xs font-black flex items-center gap-1.5"
            style={{ animation: "floatBob 3.5s ease-in-out infinite 0.5s" }}
          >
            <GraduationCap className="w-4 h-4" /> Grades {grade}
          </div>

          <div
            className="absolute top-1/2 -right-8 bg-green-400 text-white rounded-2xl shadow-lg px-3 py-2 text-xs font-black flex items-center gap-1.5"
            style={{ animation: "floatBob 5s ease-in-out infinite 2s" }}
          >
            <CheckCircle className="w-3.5 h-3.5" /> Fun &amp; Easy!
          </div>

          <div className="absolute -bottom-6 -right-6 w-24">
            <KidMascot />
          </div>
        </div>
      </div>

      {/* Decorative Wave Divider */}
      <div className="relative h-16 overflow-hidden">
        <svg viewBox="0 0 1440 64" className="absolute bottom-0 left-0 w-full" preserveAspectRatio="none">
          <path d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}