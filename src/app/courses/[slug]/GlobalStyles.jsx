import React from "react";

/**
 * GlobalStyles Component
 * Injecting the 'Kid-friendly' design system:
 * - Custom Fonts (Nunito & Fredoka One)
 * - Keyframe Animations (float, spin, pulse)
 * - Custom Button Components (kid-btn)
 * - Decorative Utils (squiggles, dots, and rainbows)
 */
export function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Fredoka+One&display=swap');

      * { box-sizing: border-box; }
      body { font-family: 'Nunito', sans-serif; }

      .font-fredoka { font-family: 'Fredoka One', cursive; }
      .font-nunito  { font-family: 'Nunito', sans-serif; }

      /* ── Keyframes ─────────────────────────────────────────── */
      @keyframes floatBob {
        0%, 100% { transform: translateY(0px); }
        50%       { transform: translateY(-12px); }
      }
      @keyframes spinStar {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }
      @keyframes rocketFloat {
        0%, 100% { transform: translateY(0)    rotate(-15deg); }
        50%      { transform: translateY(-15px) rotate(-10deg); }
      }
      @keyframes flamePulse {
        from { transform: scaleY(1);   }
        to   { transform: scaleY(1.3); }
      }
      @keyframes slideUp {
        from { transform: translateY(20px); opacity: 0; }
        to   { transform: translateY(0);    opacity: 1; }
      }
      @keyframes rainbowShift {
        0%   { background-position: 0%   50%; }
        50%  { background-position: 100% 50%; }
        100% { background-position: 0%   50%; }
      }
      @keyframes glowPulse {
        0%, 100% { box-shadow: 0 0 20px rgba(99,102,241,0.3); }
        50%      { box-shadow: 0 0 40px rgba(99,102,241,0.6); }
      }

      /* ── Utility animations ────────────────────────────────── */
      .animate-floatBob { animation: floatBob 3s ease-in-out infinite; }
      .animate-slideUp  { animation: slideUp  0.6s ease-out forwards;  }

      /* ── Button base ───────────────────────────────────────── */
      .kid-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 28px;
        border-radius: 9999px;
        font-family: 'Nunito', sans-serif;
        font-weight: 800;
        font-size: 14px;
        border: none;
        cursor: pointer;
        transition: all 0.2s cubic-bezier(.34,1.56,.64,1);
      }
      .kid-btn:hover  { transform: translateY(-3px) scale(1.05); }
      .kid-btn:active { transform: translateY(0)    scale(0.97);  }

      .kid-btn-blue {
        background: linear-gradient(135deg, #6366f1, #818cf8);
        color: white;
        box-shadow: 0 6px 20px rgba(99,102,241,0.35);
      }
      .kid-btn-blue:hover { box-shadow: 0 10px 30px rgba(99,102,241,0.5); }

      .kid-btn-orange {
        background: linear-gradient(135deg, #f97316, #fb923c);
        color: white;
        box-shadow: 0 6px 20px rgba(249,115,22,0.35);
      }
      .kid-btn-orange:hover { box-shadow: 0 10px 30px rgba(249,115,22,0.5); }

      .kid-btn-green {
        background: linear-gradient(135deg, #10b981, #34d399);
        color: white;
        box-shadow: 0 6px 20px rgba(16,185,129,0.35);
      }

      .kid-btn-outline {
        background: white;
        color: #6366f1;
        border: 2.5px solid #6366f1;
        box-shadow: 0 4px 12px rgba(99,102,241,0.15);
      }
      .kid-btn-outline:hover { background: #6366f1; color: white; }

      /* ── Squiggle underline ────────────────────────────────── */
      .squiggle-underline { position: relative; display: inline-block; }
      .squiggle-underline::after {
        content: '';
        position: absolute;
        left: 0; bottom: -4px;
        width: 100%; height: 6px;
        background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 5 Q25 0 50 5 Q75 10 100 5 Q125 0 150 5 Q175 10 200 5' stroke='%23f97316' stroke-width='3' fill='none'/%3E%3C/svg%3E") repeat-x;
        background-size: 80px 6px;
      }

      /* ── Card hover ────────────────────────────────────────── */
      .card-hover { transition: all 0.25s cubic-bezier(.34,1.56,.64,1); }
      .card-hover:hover {
        transform: translateY(-6px) scale(1.02);
        box-shadow: 0 20px 40px rgba(0,0,0,0.10);
      }

      /* ── Dotted background ─────────────────────────────────── */
      .dotted-bg {
        background-image: radial-gradient(circle, #e0e7ff 1.5px, transparent 1.5px);
        background-size: 24px 24px;
      }

      /* ── Rainbow badge ─────────────────────────────────────── */
      .rainbow-badge {
        background: linear-gradient(90deg,#6366f1,#8b5cf6,#ec4899,#f97316,#eab308,#10b981,#06b6d4,#6366f1);
        background-size: 300% 100%;
        animation: rainbowShift 4s ease infinite;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    `}</style>
  );
}