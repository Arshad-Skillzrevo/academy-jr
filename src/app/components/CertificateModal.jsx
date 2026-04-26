"use client";
import React, { useEffect } from "react";
import { X, Award } from "lucide-react";

export function CertificateModal({ isOpen, onClose, courseTitle, certs }) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const hasNasscom = !!certs?.nasscom;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
      style={{ backgroundColor: "rgba(0,0,0,0.80)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition-all border border-white/20"
        >
          <X className="w-4 h-4 text-white" />
        </button>

        <div className="flex flex-col gap-4">

          {/* SkillzRevo Certificate */}
          {certs?.single ? (
            <div className="flex flex-col items-center gap-2">
              {hasNasscom && (
                <span className="text-white/70 text-xs font-bold uppercase tracking-widest">
                  SkillzRevo Certificate
                </span>
              )}
              <img
                src={certs.single}
                alt={`${courseTitle} Certificate`}
                className="w-full rounded-2xl shadow-2xl border-2 border-white/20 object-contain"
              />
            </div>
          ) : (
            <div className="w-full h-52 rounded-2xl border-2 border-dashed border-white/30 flex flex-col items-center justify-center gap-3 bg-white/5">
              <Award className="w-10 h-10 text-white/40" />
              <p className="text-white/50 text-sm font-semibold text-center">
                Certificate not available yet.<br />Complete the course to earn it!
              </p>
            </div>
          )}

          {/* Nasscom Certificate (bundles only) */}
          {hasNasscom && (
            <div className="flex flex-col items-center gap-2">
              <span className="text-white/70 text-xs font-bold uppercase tracking-widest">
                Nasscom Certificate
              </span>
              <img
                src={certs.nasscom}
                alt={`${courseTitle} Nasscom Certificate`}
                className="w-full rounded-2xl shadow-2xl border-2 border-white/20 object-contain"
              />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}