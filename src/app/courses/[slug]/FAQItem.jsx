"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const COLORS = [
  "from-violet-100 to-purple-50 border-violet-200",
  "from-sky-100 to-blue-50 border-sky-200",
  "from-emerald-100 to-green-50 border-emerald-200",
  "from-amber-100 to-yellow-50 border-amber-200",
  "from-pink-100 to-rose-50 border-pink-200",
];

const DOT_COLORS = [
  "bg-violet-400",
  "bg-sky-400",
  "bg-emerald-400",
  "bg-amber-400",
  "bg-pink-400",
];

/**
 * FAQItem Component
 * An accordion-style item with colorful gradients and smooth Framer Motion transitions.
 */
export function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  
  // Cycle through colors based on the index provided
  const color = COLORS[index % COLORS.length];
  const dot = DOT_COLORS[index % DOT_COLORS.length];

  return (
    <motion.div
      layout
      className={`rounded-2xl border-2 overflow-hidden bg-gradient-to-br ${color} ${
        open ? "shadow-lg" : "hover:shadow-md"
      }`}
      animate={open ? { scale: 1.01 } : { scale: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-5 py-4 text-left gap-4 group"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${dot}`} />
          <span className="font-bold text-gray-800 text-sm leading-snug">{q}</span>
        </div>

        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
            open ? "bg-violet-500 text-white" : "bg-white text-gray-500"
          }`}
        >
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="faq-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-white/60 pt-3">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}