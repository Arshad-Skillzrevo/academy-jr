import React from "react";
import { HelpCircle, MessageCircle } from "lucide-react";
import { FAQItem } from "./FAQItem";
import { FloatIcon } from "./FloatIcon";

const FLOAT_ICONS = [
  { icon: HelpCircle,    style: { top: "8%",    right: "6%", opacity: 0.4 }, color: "text-sky-300", size: 32 },
  { icon: MessageCircle, style: { bottom: "10%", left: "4%", opacity: 0.4 }, color: "text-sky-200", size: 28 },
];

/**
 * FAQSection Component
 * Renders a collection of expandable FAQ items with floating decorative icons.
 */
export function FAQSection({ faqs }) {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)" }}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 dotted-bg opacity-50 pointer-events-none" />
      
      {/* Animated background icons */}
      {FLOAT_ICONS.map((fi, i) => (
        <FloatIcon 
          key={i} 
          icon={fi.icon} 
          style={fi.style} 
          color={fi.color} 
          size={fi.size} 
        />
      ))}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-600 font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <HelpCircle className="w-3.5 h-3.5" /> Got Questions?
          </span>
          <h2 className="font-fredoka text-4xl md:text-5xl text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem 
              key={i} 
              q={faq.q} 
              a={faq.a} 
              index={i} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}