import React from "react";
import { Heart, MessageCircle, Star, PlayCircle } from "lucide-react";
import { Stars } from "./Stars";
import { WobblyStarSVG } from "./WobblyStarSVG";
import { CTARow } from "./CTARow";

const REVIEW_COLORS = [
  "from-violet-50 to-purple-50 border-violet-200",
  "from-sky-50 to-blue-50 border-sky-200",
  "from-emerald-50 to-green-50 border-emerald-200",
  "from-amber-50 to-yellow-50 border-amber-200",
  "from-pink-50 to-rose-50 border-pink-200",
  "from-orange-50 to-red-50 border-orange-200",
];

const AVATAR_COLORS = [
  "bg-violet-500", "bg-sky-500", "bg-emerald-500",
  "bg-amber-500",  "bg-pink-500", "bg-orange-500",
];

/**
 * ReviewsSection Component
 * Displays a grid of colorful testimonial cards with ratings and avatars.
 */
export function ReviewsSection({ courseTitle, reviews }) {
  return (
    <section className="py-20 bg-white relative">
      {/* Decorative Background Element */}
      <div className="absolute top-6 left-8 opacity-10 pointer-events-none">
        <WobblyStarSVG size={56} color="#f97316" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <Heart className="w-3.5 h-3.5" /> Student Love
          </span>
          <h2 className="font-fredoka text-4xl md:text-5xl text-gray-900 mb-2">
            Ratings &amp; Reviews
          </h2>
          <p className="text-gray-400 text-sm font-bold flex items-center justify-center gap-1.5">
            <MessageCircle className="w-4 h-4" /> What kids &amp; parents are saying
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${REVIEW_COLORS[i % REVIEW_COLORS.length]} border-2 rounded-3xl p-6 card-hover`}
            >
              <Stars count={r.rating} />
              <p className="mt-3 text-sm text-gray-600 leading-relaxed font-semibold">
                "{r.text}"
              </p>
              
              {/* Reviewer Meta Information */}
              <div className="mt-4 flex items-center gap-3 pt-4 border-t border-white/60">
                <div className={`w-10 h-10 rounded-full ${AVATAR_COLORS[i % AVATAR_COLORS.length]} text-white text-xs font-black flex items-center justify-center flex-shrink-0`}>
                  {r.avatar}
                </div>
                <span className="font-black text-sm text-gray-800">{r.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <CTARow title={courseTitle}/>
        </div>
      </div>
    </section>
  );
}