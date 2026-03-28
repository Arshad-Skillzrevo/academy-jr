"use client";
import React from "react"; // Removed useState
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const MODULE_COLORS = [
  { bg: "bg-violet-500",  light: "bg-violet-100",  text: "text-violet-600",  border: "border-violet-300"  },
  { bg: "bg-sky-500",     light: "bg-sky-100",     text: "text-sky-600",     border: "border-sky-300"     },
  { bg: "bg-emerald-500", light: "bg-emerald-100", text: "text-emerald-600", border: "border-emerald-300" },
  { bg: "bg-amber-500",   light: "bg-amber-100",   text: "text-amber-600",   border: "border-amber-300"   },
  { bg: "bg-pink-500",    light: "bg-pink-100",    text: "text-pink-600",    border: "border-pink-300"    },
  { bg: "bg-orange-500",  light: "bg-orange-100",  text: "text-orange-600",  border: "border-orange-300"  },
];

// Added isOpen and onToggle props
export function ModuleCard({ mod, isOpen, onToggle }) {
  const c = MODULE_COLORS[(mod.id - 1) % MODULE_COLORS.length];

  return (
    <motion.div
      layout
      className={`rounded-3xl border-2 overflow-hidden transition-shadow duration-200 ${
        isOpen
          ? `${c.border} shadow-xl`
          : "border-gray-200 hover:border-gray-300 hover:shadow-md"
      }`}
    >
      <button
        onClick={onToggle} // Use the parent's toggle function
        className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-gray-50/60 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <span
            className={`w-12 h-12 rounded-2xl font-black text-sm flex items-center justify-center flex-shrink-0 shadow-md transition-all duration-200 ${
              isOpen ? `${c.bg} text-white` : `${c.light} ${c.text}`
            }`}
          >
            {mod.id}
          </span>
          <span className="font-bold text-gray-800 text-left text-sm md:text-base">
            <span className={`${c.text} font-black`}>Module {mod.id}</span> – {mod.title}
          </span>
        </div>

        <span
          className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 ${
            isOpen ? `${c.bg} text-white` : "bg-gray-100 text-gray-400"
          }`}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="module-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="divide-y divide-white bg-gray-50">
              {mod.lectures.map((lec) => (
                <div
                  key={lec.num}
                  className="px-5 py-3.5 flex gap-4 items-start hover:bg-white/70 transition-colors duration-150"
                >
                  <span className={`mt-0.5 w-8 h-8 rounded-xl ${c.bg} text-white text-xs font-black flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    {lec.num}
                  </span>
                  <div>
                    <p className="font-bold text-sm text-gray-800">{lec.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{lec.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}