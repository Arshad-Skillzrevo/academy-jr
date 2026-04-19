"use client";
import React from "react";
import { Wrench } from "lucide-react";
import { WobblyStarSVG } from "./WobblyStarSVG";

/**
 * ToolsCovered Component
 *
 * @prop {Array} tools - Array of tool objects:
 *   { name: string, tag: string, cdn: string }
 *
 * Example:
 * const WEB_TOOLS = [
 *   { name: "VS Code",       tag: "Code Editor",     cdn: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
 *   { name: "HTML5",         tag: "Markup",          cdn: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
 *   { name: "CSS3",          tag: "Styling",         cdn: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
 *   { name: "JavaScript",    tag: "Scripting",       cdn: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
 *   { name: "Chrome DevTools",tag: "Debugging",      cdn: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
 *   { name: "Figma",         tag: "Wireframing",     cdn: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
 *   { name: "Git",           tag: "Version Control", cdn: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
 *   { name: "GitHub",        tag: "Hosting",         cdn: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
 * ];
 */
export function ToolsCovered({ tools }) {
  return (
    <section className="py-20 bg-indigo-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 opacity-10 pointer-events-none">
        <WobblyStarSVG size={180} color="#6366f1" />
      </div>
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
        <WobblyStarSVG size={140} color="#f59e0b" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <Wrench className="w-3.5 h-3.5" />
            Tools You'll Use
          </span>
          <h2 className="font-fredoka text-4xl md:text-5xl text-gray-900 mb-3">
            Real Tools, Real Projects
          </h2>
          <p className="text-gray-500 text-sm font-semibold max-w-xl mx-auto leading-relaxed">
            Get hands-on with the same tools used by professional web developers — from day one.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border-2 border-gray-100 hover:border-indigo-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 p-5 flex flex-col items-center gap-3 text-center cursor-default"
            >
              {/* Logo */}
              <div className="w-18 h-18 rounded-2xl flex items-center justify-center flex-shrink-0">
                <img
                  src={tool}
                //   alt={tool.name}
                  className="w-16 h-16 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
}