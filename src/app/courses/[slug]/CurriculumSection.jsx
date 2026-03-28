"use client";
import React, { useState } from "react";
import { Layers, BookOpen, Brain } from "lucide-react";
import { ModuleCard } from "./ModuleCard";
import { CTARow } from "./CTARow";

export function CurriculumSection({ heading, modules, lessons }) {
  // Track which module index is currently expanded. 
  // Initialize with 0 to keep the first one open, or null to close all.
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleModule = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-600 font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <Brain className="w-3.5 h-3.5" /> What You'll Learn
          </span>
          <h2 className="font-fredoka text-4xl md:text-5xl text-gray-900 mb-4">
            {heading}
          </h2>
          
          <div className="flex justify-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-xs bg-violet-100 text-violet-700 px-4 py-1.5 rounded-full font-black">
              <Layers className="w-3.5 h-3.5" /> {modules.length} Modules
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full font-black">
              <BookOpen className="w-3.5 h-3.5" /> {lessons} Lectures
            </span>
          </div>
        </div>

        {/* Modules List */}
        <div className="space-y-3">
          {modules.map((mod, i) => (
            <ModuleCard 
              key={mod.id} 
              mod={mod} 
              isOpen={activeIndex === i} 
              onToggle={() => toggleModule(i)}
            />
          ))}
        </div>

        <CTARow />
      </div>
    </section>
  );
}