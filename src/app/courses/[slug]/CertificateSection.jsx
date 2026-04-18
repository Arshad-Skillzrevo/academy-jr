
import React from "react";
import { Trophy, CheckCircle, GraduationCap, Award, PlayCircle, Star, Medal, Sparkles } from "lucide-react";
import { FloatIcon } from "./FloatIcon";
import { CTARow } from "./CTARow";

const FLOAT_ICONS = [
  { icon: Star,     style: { top: "10%", left: "5%", opacity: 0.6 },     color: "text-yellow-300" },
  { icon: Medal,    style: { bottom: "15%", right: "6%", opacity: 0.6 }, color: "text-amber-300"  },
  { icon: Sparkles, style: { top: "50%", left: "12%", opacity: 0.5 },    color: "text-white/60"   },
];


export function CertificateSection({ courseTitle, heading, description, requirements }) {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 60%, #ec4899 100%)" }}
    >
      {/* Background radial dot pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, white 1.5px, transparent 1.5px), radial-gradient(circle at 80% 20%, white 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px",
        }}
      />
      
      {/* Animated floating icons */}
      {FLOAT_ICONS.map((fi, i) => (
        <FloatIcon key={i} icon={fi.icon} style={fi.style} color={fi.color} size={24} />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Requirements and Text */}
          <div className="text-white">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-xs font-black px-4 py-1.5 rounded-full mb-5 uppercase tracking-wide">
              <Trophy className="w-3.5 h-3.5" /> Recognition
            </span>
            <h2 className="font-fredoka text-4xl md:text-5xl text-white mb-5">{heading}</h2>
            <p className="text-white/80 text-sm leading-relaxed mb-6 font-semibold">
              {description}
            </p>
            
            <h4 className="font-black text-white mb-4 text-sm flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-yellow-300" /> How Do Students Earn It?
            </h4>
            <ul className="space-y-3">
              {requirements.map((r, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/90 font-semibold">
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-black flex-shrink-0">
                    {i + 1}
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Visual Certificate Card */}
          <div
            className="bg-white/10 backdrop-blur-sm border-2 border-white/25 rounded-[32px] p-8 text-center card-hover"
            style={{ animation: "glowPulse 3s ease-in-out infinite" }}
          >
            <div
              className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-5 shadow-2xl"
              style={{ background: "linear-gradient(135deg, #fbbf24, #f97316)" }}
            >
              <GraduationCap className="w-12 h-12 text-white" />
            </div>
            
            <Medal className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
            <h3 className="font-fredoka text-2xl text-white mb-1">Certificate of Completion</h3>
            <p className="text-white/60 text-xs mb-2 font-semibold">
              Web Development Foundations Program
            </p>
            <p className="text-white/50 text-xs mb-6 border-t border-white/20 pt-4 font-semibold">
              Issued by Skillzrevo Solutions
            </p>
            
            <div className="flex gap-3 justify-center flex-wrap">
              <CTARow title={courseTitle} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}