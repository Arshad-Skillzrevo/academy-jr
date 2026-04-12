"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, ArrowRight, Sparkles, CheckCircle2, Loader2,
  Phone, Mail, User, BookOpen, GraduationCap,
  Laptop, Globe, Baby, Star,
} from "lucide-react";

/* ─────────────────────────────────────────
   STYLES — injected into <head> once
   (avoids per-instance duplication)
───────────────────────────────────────── */
let _stylesInjected = false;
function injectStyles() {
  if (typeof document === "undefined" || _stylesInjected) return;
  _stylesInjected = true;
  const el = document.createElement("style");
  el.id = "cta-modal-styles";
  el.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');
    @keyframes ctaFloatBob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
    @keyframes ctaPulseDot { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.5);opacity:.5} }
    @keyframes ctaSpinStar { to{transform:rotate(360deg)} }
    @keyframes ctaConfetti {
      0%   { transform:translateY(-20px) rotate(0deg);   opacity:1; }
      100% { transform:translateY(130px) rotate(720deg); opacity:0; }
    }
    .cta-float-bob    { animation: ctaFloatBob 3.5s ease-in-out infinite; }
    .cta-pulse-dot    { animation: ctaPulseDot 1.8s ease-in-out infinite; }
    .cta-spin-star    { animation: ctaSpinStar 6s linear infinite; }
    .cta-confetti-p   { animation: ctaConfetti 1.2s ease-out forwards; }
    .cta-kid-select   { -webkit-appearance:none; appearance:none; }
    .cta-modal-body::-webkit-scrollbar       { width:6px; }
    .cta-modal-body::-webkit-scrollbar-track { background:#f5f0ff; border-radius:100px; }
    .cta-modal-body::-webkit-scrollbar-thumb { background:linear-gradient(180deg,#a855f7,#7c3aed); border-radius:100px; }
    .cta-animate-spin { animation: ctaSpinStar 1s linear infinite; }
  `;
  document.head.appendChild(el);
}

/* ─────────────────────────────────────────
   BRAND
───────────────────────────────────────── */
const B = {
  violet: "#7c3aed", purple: "#a855f7",
  sky:    "#0ea5e9", orange: "#f97316",
  amber:  "#fbbf24", rose:   "#f43f5e",
  mint:   "#10b981", navy:   "#0f1b4c",
};

/* ─────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────── */
const COUNTRIES = [
  "India","United States","United Kingdom","Canada",
  "Australia","United Arab Emirates","Singapore","Germany",
  "South Africa","Other",
];
const COURSES = [
  "Web Development for Beginners",
  "Interactive Web Development",
  "Advanced Full Stack Development",
  "Data Analysis Foundations",
  "AI & Machine Learning Foundations",
  "Full Stack AI & Machine Learning",
  "Cybersecurity Foundations",
  "Cloud Computing Foundations",
  "Python Programming Foundations",
  "Java Programming Foundations",
  "Other / Not Sure Yet",
];
const GRADES = [
  "Grade 1","Grade 2","Grade 3","Grade 4","Grade 5",
  "Grade 6","Grade 7","Grade 8","Grade 9","Grade 10",
  "Grade 11","Grade 12","College / Above",
];
const CONFETTI_COLORS = [B.violet, B.orange, B.sky, B.mint, B.amber, B.rose];

/* ─────────────────────────────────────────
   SMALL HELPERS
───────────────────────────────────────── */
function Confetti() {
  return (
    <div style={{ position:"absolute", inset:0, pointerEvents:"none", overflow:"hidden", borderRadius:28, zIndex:10 }} aria-hidden="true">
      {Array.from({ length: 22 }).map((_, i) => (
        <div key={i} className="cta-confetti-p"
          style={{
            position: "absolute",
            left: `${(i / 22) * 100}%`, top: 0,
            width: i % 3 === 0 ? 10 : 7,
            height: i % 3 === 0 ? 10 : 7,
            background: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
            borderRadius: i % 2 === 0 ? "50%" : "3px",
            animationDelay: `${i * 0.055}s`,
          }}
        />
      ))}
    </div>
  );
}

function PulsingDots({ colors }) {
  return (
    <div style={{ display:"flex", gap:6 }} aria-hidden="true">
      {colors.map((c, i) => (
        <div key={i} className="cta-pulse-dot"
          style={{ width:7, height:7, borderRadius:"50%", background:c, animationDelay:`${i*0.18}s` }} />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────
   FIELD + INPUT + SELECT
───────────────────────────────────────── */
function Field({ label, required, icon: Icon, color = B.violet, children }) {
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
      <label style={{ display:"flex", alignItems:"center", gap:5, fontSize:11, fontWeight:800,
        textTransform:"uppercase", letterSpacing:"0.06em", color, fontFamily:"'Nunito',sans-serif" }}>
        {Icon && <Icon size={11} strokeWidth={2.5} />}
        {label}{required && <span style={{ color:B.rose }}>*</span>}
      </label>
      {children}
    </div>
  );
}

const baseInput = {
  border: "1.5px solid #e5e7eb",
  borderRadius: 14,
  padding: "10px 14px",
  fontSize: 14,
  fontFamily: "'Nunito',sans-serif",
  fontWeight: 700,
  color: B.navy,
  background: "rgba(255,255,255,0.92)",
  outline: "none",
  width: "100%",
  transition: "border-color 0.2s, box-shadow 0.2s",
  boxSizing: "border-box",
};

function KidInput({ style: extra, ...props }) {
  const [f, setF] = useState(false);
  return (
    <input {...props}
      onFocus={(e)=>{ setF(true);  props.onFocus?.(e); }}
      onBlur={(e) =>{ setF(false); props.onBlur?.(e);  }}
      style={{ ...baseInput,
        borderColor: f ? B.violet : "#e5e7eb",
        boxShadow:   f ? `0 0 0 3px ${B.violet}1a` : "none",
        ...extra }}
    />
  );
}

function KidSelect({ children, style: extra, ...props }) {
  const [f, setF] = useState(false);
  return (
    <div style={{ position:"relative" }}>
      <select {...props} className="cta-kid-select"
        onFocus={(e)=>{ setF(true);  props.onFocus?.(e); }}
        onBlur={(e) =>{ setF(false); props.onBlur?.(e);  }}
        style={{ ...baseInput, paddingRight:36, cursor:"pointer",
          borderColor: f ? B.violet : "#e5e7eb",
          boxShadow:   f ? `0 0 0 3px ${B.violet}1a` : "none",
          ...extra }}
      >
        {children}
      </select>
      <div style={{ position:"absolute", right:12, top:"50%", transform:"translateY(-50%)", pointerEvents:"none" }} aria-hidden="true">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 4l4 4 4-4" stroke={B.violet} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

function YesNoToggle({ value, onChange }) {
  return (
    <div style={{ display:"flex", gap:12 }}>
      {["Yes","No"].map((opt) => (
        <motion.button key={opt} type="button" onClick={() => onChange(opt)}
          whileHover={{ scale:1.05 }} whileTap={{ scale:0.96 }}
          transition={{ type:"spring", stiffness:400, damping:18 }}
          style={{
            flex:1, padding:"10px 0", borderRadius:14, border:"2px solid",
            fontFamily:"'Fredoka One',cursive", fontSize:"0.9rem", cursor:"pointer",
            background: value===opt
              ? `linear-gradient(135deg,${opt==="Yes"?B.mint:B.rose},${opt==="Yes"?"#059669":"#e11d48"})`
              : "rgba(255,255,255,0.92)",
            color:       value===opt ? "white" : "#9ca3af",
            borderColor: value===opt ? (opt==="Yes"?B.mint:B.rose) : "#e5e7eb",
            boxShadow:   value===opt ? `0 4px 14px ${opt==="Yes"?B.mint:B.rose}35` : "none",
          }}>
          {opt}
        </motion.button>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────
   PORTAL — renders directly into document.body
   This is what fixes the z-index / clipping issue.
   The modal is completely outside the Next.js
   component tree, so no parent CSS can clip it.
───────────────────────────────────────── */
function ModalPortal({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

/* ─────────────────────────────────────────
   MODAL
───────────────────────────────────────── */
function EnquiryModal({ isOpen, onClose, ctaLabel = "Book a Free Demo", pageContext = "", courseName = "" }) {
  const [form, setForm] = useState({
    parentName:"", childName:"", email:"",
    countryCode:"+91", mobile:"",
    country:"India", course: courseName || "",
    grade:"", hasDevice:"",
  });
  const [status, setStatus]     = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const firstRef = useRef(null);

  useEffect(() => {
    if (courseName) setForm((f) => ({ ...f, course: courseName }));
  }, [courseName]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstRef.current?.focus(), 320);
    } else {
      document.body.style.overflow = "";
      setTimeout(() => { setStatus("idle"); setErrorMsg(""); }, 420);
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target?.value ?? e }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    const payload = {
      name:      form.parentName,
      mobile:    `${form.countryCode}${form.mobile}`,
      email:     form.email,
      ChildName: form.childName,
      Country:   form.country,
      Course:    form.course,
      Grade:     form.grade,
      HasDevice: form.hasDevice,
      CTA:       ctaLabel,
      Page:      pageContext || (typeof window !== "undefined" ? window.location.pathname : ""),
    };
    try {
      // 🔁 Replace with your NeoDove endpoint
      const res = await fetch("YOUR_NEODOVE_API_URL_HERE", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
        setTimeout(() => onClose(), 3200);
      } else {
        console.error("NeoDove:", await res.text());
        setStatus("error");
        setErrorMsg("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <ModalPortal>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              key="cta-backdrop"
              initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
              transition={{ duration:0.25 }}
              onClick={onClose}
              style={{
                position:"fixed", inset:0, zIndex:2147483646,
                background:"rgba(15,27,76,0.7)",
                backdropFilter:"blur(8px)",
                WebkitBackdropFilter:"blur(8px)",
              }}
              aria-hidden="true"
            />

            {/* PANEL */}
            <motion.div
              key="cta-panel"
              role="dialog" aria-modal="true" aria-label={ctaLabel}
              initial={{ opacity:0, scale:0.85, y:50 }}
              animate={{ opacity:1, scale:1,    y:0  }}
              exit={{   opacity:0, scale:0.93,   y:28 }}
              transition={{ type:"spring", stiffness:310, damping:26 }}
              style={{
                position:"fixed", inset:0, zIndex:2147483647,
                display:"flex", alignItems:"center", justifyContent:"center",
                padding:16, pointerEvents:"none",
              }}
            >
              {/* Card */}
              <div style={{
                pointerEvents:"auto",
                position:"relative",
                width:"100%", maxWidth:548,
                maxHeight:"92dvh",
                borderRadius:28,
                overflow:"hidden",
                background:"linear-gradient(160deg,#f5f0ff 0%,#fff0f7 45%,#f0f9ff 100%)",
                border:`2px solid ${B.violet}22`,
                boxShadow:`0 32px 80px ${B.violet}2e, 0 8px 24px rgba(0,0,0,0.13)`,
                fontFamily:"'Nunito',sans-serif",
              }}>

                {/* Rainbow strip */}
                <div style={{ height:5, background:`linear-gradient(90deg,${B.sky},${B.violet},${B.orange},${B.rose})` }} aria-hidden="true" />

                {/* Decorative stars */}
                <div aria-hidden="true" style={{ pointerEvents:"none" }}>
                  <div className="cta-spin-star" style={{ position:"absolute", top:18, right:56 }}>
                    <Star size={12} fill={B.amber} color={B.amber} />
                  </div>
                  <div className="cta-spin-star" style={{ position:"absolute", top:64, left:18, animationDuration:"10s" }}>
                    <Star size={9} fill={B.rose} color={B.rose} />
                  </div>
                  <div className="cta-spin-star" style={{ position:"absolute", bottom:44, left:24, animationDuration:"14s" }}>
                    <Star size={8} fill={B.sky} color={B.sky} />
                  </div>
                </div>

                {/* Close */}
                <motion.button onClick={onClose} aria-label="Close"
                  whileHover={{ scale:1.12, rotate:90 }} whileTap={{ scale:0.95 }}
                  transition={{ type:"spring", stiffness:400, damping:18 }}
                  style={{
                    position:"absolute", top:14, right:14, zIndex:20,
                    width:36, height:36, borderRadius:"50%", border:`1.5px solid ${B.violet}28`,
                    background:`${B.violet}14`, color:B.violet, cursor:"pointer",
                    display:"flex", alignItems:"center", justifyContent:"center",
                  }}>
                  <X size={16} strokeWidth={2.5} />
                </motion.button>

                {/* SCROLLABLE BODY */}
                <div className="cta-modal-body" style={{ overflowY:"auto", maxHeight:"calc(92dvh - 5px)" }}>
                  <div style={{ padding:"24px 28px 32px" }}>

                    {/* Header */}
                    <div style={{ textAlign:"center", marginBottom:20 }}>
                      <div className="cta-float-bob" style={{ display:"inline-flex", marginBottom:10 }}>
                        <div style={{
                          width:56, height:56, borderRadius:18,
                          background:`linear-gradient(135deg,${B.purple},${B.violet})`,
                          boxShadow:`0 8px 24px ${B.violet}40`,
                          display:"flex", alignItems:"center", justifyContent:"center",
                        }}>
                          <Sparkles size={25} color="white" />
                        </div>
                      </div>
                      <h2 style={{ fontFamily:"'Fredoka One',cursive", fontSize:"1.4rem", color:B.navy, lineHeight:1.1, margin:0 }}>
                        {ctaLabel}
                      </h2>
                      <p style={{ marginTop:6, fontSize:13, color:"#6b7280", fontWeight:700 }}>
                        Fill in the details — we'll reach out shortly!
                      </p>
                      <div style={{ display:"flex", justifyContent:"center", marginTop:10 }}>
                        <PulsingDots colors={[B.violet,B.sky,B.orange,B.mint,B.rose]} />
                      </div>
                    </div>

                    {/* SUCCESS */}
                    <AnimatePresence mode="wait">
                      {status === "success" ? (
                        <motion.div key="success"
                          initial={{ opacity:0, scale:0.88 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0 }}
                          transition={{ type:"spring", stiffness:320, damping:24 }}
                          style={{ position:"relative", textAlign:"center", padding:"32px 0" }}>
                          <Confetti />
                          <div className="cta-float-bob" style={{ display:"inline-flex", marginBottom:14 }}>
                            <div style={{
                              width:80, height:80, borderRadius:24,
                              background:`linear-gradient(135deg,${B.mint},#059669)`,
                              boxShadow:`0 12px 32px ${B.mint}45`,
                              display:"flex", alignItems:"center", justifyContent:"center",
                            }}>
                              <CheckCircle2 size={40} color="white" strokeWidth={2.2} />
                            </div>
                          </div>
                          <h3 style={{ fontFamily:"'Fredoka One',cursive", fontSize:"1.5rem", color:B.navy, margin:"0 0 8px" }}>
                            You're all set!
                          </h3>
                          <p style={{ fontSize:14, color:"#6b7280", fontWeight:700, maxWidth:280, margin:"0 auto" }}>
                            We've received your enquiry. Our team will reach out to you shortly!
                          </p>
                          <div style={{ display:"flex", justifyContent:"center", marginTop:14 }}>
                            <PulsingDots colors={[B.violet,B.orange,B.sky,B.mint,B.rose]} />
                          </div>
                        </motion.div>

                      ) : (
                        /* FORM */
                        <motion.form key="form" onSubmit={handleSubmit}
                          initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
                          style={{ display:"flex", flexDirection:"column", gap:14 }}>

                          {/* Parent + Child */}
                          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                            <Field label="Parent Name" required icon={User} color={B.violet}>
                              <KidInput ref={firstRef} type="text" name="parentName"
                                value={form.parentName} onChange={set("parentName")}
                                placeholder="Your name" required />
                            </Field>
                            <Field label="Child's Name" required icon={Baby} color={B.rose}>
                              <KidInput type="text" name="childName"
                                value={form.childName} onChange={set("childName")}
                                placeholder="Child's name" required />
                            </Field>
                          </div>

                          {/* Mobile */}
                          <Field label="Mobile Number" required icon={Phone} color={B.sky}>
                            <div style={{ display:"flex", gap:8 }}>
                              <KidSelect value={form.countryCode} onChange={set("countryCode")}
                                style={{ width:88, flexShrink:0, paddingRight:28 }}>
                                {["+91","+1","+44","+61","+971","+65","+49","+27"].map((c) => (
                                  <option key={c} value={c}>{c}</option>
                                ))}
                              </KidSelect>
                              <KidInput type="tel" name="mobile" value={form.mobile}
                                onChange={set("mobile")} placeholder="WhatsApp number"
                                required style={{ flex:1 }} />
                            </div>
                            <p style={{ fontSize:11, color:"#9ca3af", fontWeight:700, marginTop:2 }}>
                              Please share the number you use for WhatsApp
                            </p>
                          </Field>

                          {/* Email */}
                          <Field label="Email ID" required icon={Mail} color={B.orange}>
                            <KidInput type="email" name="email" value={form.email}
                              onChange={set("email")} placeholder="your@email.com" required />
                          </Field>

                          {/* Country */}
                          <Field label="Country" required icon={Globe} color={B.mint}>
                            <KidSelect name="country" value={form.country} onChange={set("country")} required>
                              <option value="">Select country</option>
                              {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                            </KidSelect>
                          </Field>

                          {/* Course */}
                          <Field label="Course Interested In" icon={BookOpen} color={B.violet}>
                            <KidSelect name="course" value={form.course} onChange={set("course")}>
                              <option value="">Select a course</option>
                              {COURSES.map((c) => <option key={c} value={c}>{c}</option>)}
                            </KidSelect>
                          </Field>

                          {/* Grade */}
                          <Field label="Child's Grade" required icon={GraduationCap} color={B.sky}>
                            <KidSelect name="grade" value={form.grade} onChange={set("grade")} required>
                              <option value="">Select grade</option>
                              {GRADES.map((g) => <option key={g} value={g}>{g}</option>)}
                            </KidSelect>
                          </Field>

                          {/* Device */}
                          <Field label="Do you have a Laptop or Desktop?" icon={Laptop} color={B.orange}>
                            <YesNoToggle value={form.hasDevice}
                              onChange={(v) => setForm((f) => ({ ...f, hasDevice:v }))} />
                          </Field>

                          {/* T&C */}
                          <label style={{ display:"flex", alignItems:"flex-start", gap:8, cursor:"pointer" }}>
                            <input type="checkbox" required
                              style={{ marginTop:2, accentColor:B.violet, flexShrink:0 }} />
                            <span style={{ fontSize:12, color:"#6b7280", fontWeight:700 }}>
                              By submitting, you agree to our{" "}
                              <a href="/TermsandConditions" style={{ color:B.violet, textDecoration:"underline" }}>Terms of Use</a>
                              {" "}&amp;{" "}
                              <a href="/PrivacyPolicy" style={{ color:B.violet, textDecoration:"underline" }}>Privacy Policy</a>
                            </span>
                          </label>

                          {/* Error */}
                          <AnimatePresence>
                            {status === "error" && (
                              <motion.p initial={{ opacity:0, y:-6 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }}
                                style={{ color:B.rose, fontSize:13, fontWeight:700, textAlign:"center", margin:0 }}>
                                {errorMsg}
                              </motion.p>
                            )}
                          </AnimatePresence>

                          {/* Submit */}
                          <motion.button type="submit" disabled={status === "sending"}
                            whileHover={status !== "sending" ? { scale:1.03, boxShadow:`0 12px 32px ${B.violet}45` } : {}}
                            whileTap={status !== "sending" ? { scale:0.97 } : {}}
                            transition={{ type:"spring", stiffness:380, damping:20 }}
                            style={{
                              width:"100%", padding:"13px 0", borderRadius:18, border:"none",
                              background: status==="sending" ? `${B.violet}80`
                                : `linear-gradient(135deg,${B.purple},${B.violet})`,
                              color:"white",
                              fontFamily:"'Fredoka One',cursive",
                              fontSize:"1rem",
                              cursor: status==="sending" ? "not-allowed" : "pointer",
                              boxShadow: status==="sending" ? "none" : `0 8px 24px ${B.violet}38`,
                              display:"flex", alignItems:"center", justifyContent:"center", gap:8,
                              marginTop:4,
                            }}>
                            {status === "sending" ? (
                              <>
                                <Loader2 size={18} className="cta-animate-spin" />
                                Sending your enquiry…
                              </>
                            ) : (
                              <>
                                <div className="cta-float-bob" style={{ display:"flex" }}>
                                  <Sparkles size={16} />
                                </div>
                                {ctaLabel}
                                <ArrowRight size={15} strokeWidth={2.5} />
                              </>
                            )}
                          </motion.button>

                        </motion.form>
                      )}
                    </AnimatePresence>

                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </ModalPortal>
  );
}

/* ─────────────────────────────────────────
   CTA BUTTON — drop-in replacement for any
   button/link that should open the enquiry form

   Props
   ─────
   label       string   — button text & default CTA name
   icon        Component — lucide icon (optional)
   className   string   — tailwind classes
   style       object   — inline styles
   ctaLabel    string   — override the CTA name sent to API
   pageContext string   — page/section context sent to API
   courseName  string   — pre-fills the Course dropdown
   children    node     — custom content (overrides icon+label)
   ...rest              — forwarded to motion.button (whileHover, etc.)
───────────────────────────────────────── */
export function CTAButton({
  label,
  icon: Icon,
  className = "",
  style: btnStyle = {},
  ctaLabel,
  pageContext,
  courseName,
  children,
  ...rest
}) {
  const [open, setOpen] = useState(false);
  useEffect(() => { injectStyles(); }, []);
  const open_  = useCallback(() => setOpen(true),  []);
  const close_ = useCallback(() => setOpen(false), []);

  return (
    <>
      <motion.button type="button" onClick={open_}
        className={className} style={btnStyle} {...rest}>
        {children ?? (
          <>
            {Icon && <Icon size={16} strokeWidth={2} />}
            {label}
          </>
        )}
      </motion.button>

      <EnquiryModal
        isOpen={open}
        onClose={close_}
        ctaLabel={ctaLabel || label}
        pageContext={pageContext}
        courseName={courseName}
      />
    </>
  );
}

export default CTAButton;

/*
─────────────────────────────────────────
USAGE
─────────────────────────────────────────

import { CTAButton } from "@/components/CTAButton";

// Hero — pass all motion props directly, use children for custom content:
<CTAButton
  label="Book a Free Demo Class"
  ctaLabel="Book Free Demo — Hero"
  pageContext="Homepage Hero"
  className="group inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-white"
  style={{ background:"linear-gradient(135deg,#a855f7,#7c3aed)", fontFamily:"'Fredoka One',cursive" }}
  whileHover={{ scale:1.04 }}
  whileTap={{ scale:0.97 }}
  transition={{ type:"spring", stiffness:400, damping:18 }}
>
  <Sparkles size={16} />
  Book a Free Demo Class
  <ArrowRight size={16} />
</CTAButton>

// Course page (pre-fills course dropdown):
<CTAButton
  label="Book a Free Demo"
  icon={PlayCircle}
  ctaLabel="Book Demo — Python Course"
  pageContext="Python Course Page"
  courseName="Python Programming Foundations"
  className="kid-btn kid-btn-blue"
/>

// Schedule a Call:
<CTAButton
  label="Schedule a Call"
  icon={Phone}
  ctaLabel="Schedule Call"
  pageContext="Course Page"
  className="kid-btn kid-btn-orange"
/>
─────────────────────────────────────────
*/