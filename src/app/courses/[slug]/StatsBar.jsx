import React from "react";
import { Smile, BookOpen, Gamepad2, Heart } from "lucide-react";
import { CountUp } from "./CountUp";

/**
 * StatsBar Component
 * A vibrant, gradient-background section that displays animated counting statistics
 * with playful icons for student engagement.
 */


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



export function StatsBar({ lessons, activities }) {
  const stats = [
    { num: "5000", suffix: "+", label: "Happy Students", icon: Smile     },
    { num: String(lessons),    suffix: "",  label: "Fun Lessons",   icon: BookOpen  },
    { num: String(activities), suffix: "",  label: "Activities",    icon: Gamepad2  },
    { num: "98",   suffix: "%", label: "Love It!",       icon: Heart     },
  ];


  return (

    <>
  
    
    <div className="relative py-22"
      style={{ background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)" }}
    >
      <WavyTop fill="#ffffff" />
      {/* <WavyBottom fill="#ffffff" /> */}
      
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {stats.map((s, i) => (
            <div key={i} className="p-4">
              {/* Icon Container with Glassmorphism effect */}
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                <s.icon className="w-6 h-6 text-white" />
              </div>
              
              {/* Animated Number */}
              <div className="font-fredoka text-4xl text-white">
                <CountUp target={s.num} suffix={s.suffix} />
              </div>
              
              {/* Label */}
              <div className="text-white/80 text-sm font-bold mt-1 tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
          
    </>
  );
}