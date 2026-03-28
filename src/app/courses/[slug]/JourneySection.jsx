import React from "react";
import { CheckCircle, Trophy, Target, Compass, Rocket } from "lucide-react";
import { WobblyStarSVG } from "./WobblyStarSVG";
import { CTARow } from "./CTARow";

const CARD_STYLES = [
  { bg: "bg-violet-50",  border: "border-violet-200", icon: "bg-violet-500",  bullet: "text-violet-500",  heading: "text-violet-700"  },
  { bg: "bg-sky-50",     border: "border-sky-200",    icon: "bg-sky-500",     bullet: "text-sky-500",     heading: "text-sky-700"     },
  { bg: "bg-emerald-50", border: "border-emerald-200",icon: "bg-emerald-500", bullet: "text-emerald-500", heading: "text-emerald-700" },
];

const CARD_ICONS = [Target, Rocket, Trophy];

/**
 * JourneySection Component
 * Displays a roadmap or "What you'll achieve" section using colorful cards 
 * and a call-to-action row.
 */
export function JourneySection({ heading, subtitle, cards }) {
  return (
    <section className="py-20 bg-white relative">
      {/* Background Decorative Stars */}
      <div className="absolute top-8 right-12 opacity-20">
        <WobblyStarSVG size={48} color="#818cf8" />
      </div>
      <div className="absolute bottom-12 left-8 opacity-15">
        <WobblyStarSVG size={36} color="#fb923c" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Content */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-violet-100 text-violet-600 font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <Compass className="w-3.5 h-3.5" /> Your Journey
          </span>
          <h2 className="font-fredoka text-4xl md:text-5xl text-gray-900 mb-3">{heading}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed font-semibold">{subtitle}</p>
        </div>

        {/* Journey Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            // Determine which icons to use based on type and index
            const BulletIcon = card.type === "checklist" ? CheckCircle : card.type === "trophy" ? Trophy : Target;
            const cs = CARD_STYLES[idx % CARD_STYLES.length];
            const CardIcon = CARD_ICONS[idx % CARD_ICONS.length];

            return (
              <div
                key={card.title}
                className={`rounded-3xl border-2 ${cs.border} ${cs.bg} p-7 card-hover`}
              >
                <div className={`w-14 h-14 ${cs.icon} rounded-3xl flex items-center justify-center mb-5 shadow-md`}>
                  <CardIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className={`font-fredoka text-2xl ${cs.heading} mb-4`}>{card.title}</h3>
                <ul className="space-y-2.5">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 font-semibold">
                      <BulletIcon className={`mt-0.5 flex-shrink-0 w-4 h-4 ${cs.bullet}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Global CTA Buttons */}
        <CTARow />
      </div>
    </section>
  );
}