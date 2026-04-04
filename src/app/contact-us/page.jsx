"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail, Phone, MapPin, Clock, Send, MessageCircle,
  Building2, Globe, ChevronDown, CheckCircle2, Loader2,
} from "lucide-react";

// ─── Brand tokens ────────────────────────────────────────────────────────────
const BLUE   = "#1642d6";
const ORANGE = "#ea580c";

// ─── Office data ─────────────────────────────────────────────────────────────
const OFFICES = [
  {
    label: "Corporate Office",
    city: "Noida, India",
    flag: "🇮🇳",
    address: "A-166, Suite no-304, 3rd Floor, A Block, Sector 63, Noida, UP 201301",
    phones: ["+91 6295477674", "+91 9971030291"],
    landline: "+0120 4934917",
    email: "enquire@skillzrevo.com",
    color: BLUE,
  },
  {
    label: "Registered Office",
    city: "Greater Noida, India",
    flag: "🇮🇳",
    address: "Plot no.- GH01A, Sector-16C, T-11, Suite No-1901, Greater Noida West, Gautam Buddha Nagar, UP-201308",
    phones: ["+91 9632347896"],
    landline: "+0120 4335788",
    email: "enquire@skillzrevo.com",
    color: ORANGE,
  },
  {
    label: "Bangalore Office",
    city: "Bengaluru, India",
    flag: "🇮🇳",
    address: "9th Main Rd, Sector 7, HSR Layout, Bengaluru, Karnataka – 560102",
    phones: ["+91 9632347896"],
    email: "enquire@skillzrevo.com",
    color: BLUE,
  },
  {
    label: "USA Office",
    city: "New York, USA",
    flag: "🇺🇸",
    address: "26 Broadway, Suite 934-962, New York, NY 10004, United States",
    phones: ["+1 (646) 777 4299", "+1 (301) 485 4865"],
    email: "enquire@skillzrevo.com",
    color: ORANGE,
  },
  {
    label: "UAE Office",
    city: "Dubai, UAE",
    flag: "🇦🇪",
    address: "Alta Corp Innovation Hub, AI Furjan Business Tower, 2nd Floor, Jumeirah Beach Residence, Dubai – 50001",
    phones: ["+65 6313 0933"],
    email: "enquire@skillzrevo.com",
    color: BLUE,
  },
];

const COUNTRIES = [
  "India","United States","United Kingdom","Canada",
  "Australia","United Arab Emirates","Singapore","Germany","Other",
];

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
});

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// ─── Decorative blob ─────────────────────────────────────────────────────────
function Blob({ cx, cy, r, color, opacity = 0.12 }) {
  return (
    <div
      className="absolute pointer-events-none rounded-full"
      style={{
        left: cx, top: cy, width: r * 2, height: r * 2,
        background: color, opacity, filter: `blur(${r * 0.7}px)`,
        transform: "translate(-50%,-50%)",
      }}
    />
  );
}

// ─── Section badge ────────────────────────────────────────────────────────────
function Badge({ children, color = BLUE }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full border-2 mb-4"
      style={{ borderColor: color, color, background: `${color}12` }}
    >
      {children}
    </span>
  );
}

// ─── Office card ─────────────────────────────────────────────────────────────
function OfficeCard({ office }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={cardVariant}
      className="rounded-2xl overflow-hidden border-2 bg-white"
      style={{ borderColor: `${office.color}30` }}
      whileHover={{ y: -4, boxShadow: `0 16px 40px ${office.color}22` }}
      transition={{ duration: 0.25 }}
    >
      {/* Card header */}
      <div
        className="px-5 py-4 flex items-center justify-between cursor-pointer select-none"
        style={{ background: `${office.color}10` }}
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{office.flag}</span>
          <div>
            <p className="font-black text-sm text-gray-800">{office.label}</p>
            <p className="text-xs font-semibold" style={{ color: office.color }}>{office.city}</p>
          </div>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </motion.div>
      </div>

      {/* Expandable details */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-5 py-4 space-y-3">
              <div className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: office.color }} />
                <p className="text-xs text-gray-600 leading-relaxed">{office.address}</p>
              </div>
              <div className="flex gap-2.5 items-start">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: office.color }} />
                <div className="space-y-0.5">
                  {office.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g,"")}`}
                      className="block text-xs font-semibold text-gray-700 hover:underline">{p}</a>
                  ))}
                  {office.landline && (
                    <p className="text-xs text-gray-400">Landline: {office.landline}</p>
                  )}
                </div>
              </div>
              <div className="flex gap-2.5 items-center">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: office.color }} />
                <a href={`mailto:${office.email}`}
                  className="text-xs font-semibold text-gray-700 hover:underline">{office.email}</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Contact form ─────────────────────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", country:"India", subject:"", message:"" });
  const [status, setStatus] = useState("idle"); // idle | loading | done

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("done"), 1800);
  };

  const inputClass =
    "w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 outline-none transition-all duration-200 focus:border-blue-500 placeholder:text-gray-400";

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5">Full Name *</label>
          <input name="name" value={form.name} onChange={handle} required
            placeholder="e.g. Arjun Sharma" className={inputClass}
            style={{ "--tw-ring-color": BLUE }} />
        </div>
        <div>
          <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5">Email *</label>
          <input name="email" type="email" value={form.email} onChange={handle} required
            placeholder="you@email.com" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5">Phone</label>
          <input name="phone" value={form.phone} onChange={handle}
            placeholder="+91 XXXXX XXXXX" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5">Country *</label>
          <select name="country" value={form.country} onChange={handle} required className={inputClass}>
            {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5">Subject</label>
        <input name="subject" value={form.subject} onChange={handle}
          placeholder="How can we help?" className={inputClass} />
      </div>

      <div>
        <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5">Message *</label>
        <textarea name="message" value={form.message} onChange={handle} required rows={4}
          placeholder="Tell us about your query…"
          className={`${inputClass} resize-none`} />
      </div>

      <p className="text-xs text-gray-400 leading-relaxed">
        By providing your contact details, you agree to our{" "}
        <a href="https://www.skillzrevo.com/TermsandConditions" target="_blank" rel="noreferrer"
          className="underline font-semibold" style={{ color: BLUE }}>Terms of Use</a>
        {" "}&amp;{" "}
        <a href="https://www.skillzrevo.com/PrivacyPolicy" target="_blank" rel="noreferrer"
          className="underline font-semibold" style={{ color: BLUE }}>Privacy Policy</a>.
      </p>

      <AnimatePresence mode="wait">
        {status === "done" ? (
          <motion.div key="done"
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="flex items-center gap-3 rounded-xl px-5 py-4 font-bold text-sm"
            style={{ background: "#d1fae5", color: "#065f46" }}>
            <CheckCircle2 className="w-5 h-5" />
            Message sent! We'll get back to you within 24 hours.
          </motion.div>
        ) : (
          <motion.button key="btn" type="submit"
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
            disabled={status === "loading"}
            className="w-full flex items-center justify-center gap-2 rounded-xl py-3.5 font-black text-sm text-white shadow-lg transition-all"
            style={{ background: `linear-gradient(135deg, ${BLUE}, #2d5be3)`,
              boxShadow: `0 8px 24px ${BLUE}44` }}>
            {status === "loading"
              ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
              : <><Send className="w-4 h-4" /> Send Message</>}
          </motion.button>
        )}
      </AnimatePresence>
    </form>
  );
}

// ─── Quick info strip ─────────────────────────────────────────────────────────
function QuickInfo() {
  const items = [
    { icon: <Mail className="w-5 h-5" />, label: "Email Us", value: "enquire@skillzrevo.com",
      href: "mailto:enquire@skillzrevo.com", color: BLUE },
    { icon: <Phone className="w-5 h-5" />, label: "Call Us", value: "+91 6295477674",
      href: "tel:+916295477674", color: ORANGE },
    { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp", value: "Say Hi!",
      href: "https://api.whatsapp.com/send?phone=+919632347896&text=Hi!", color: BLUE },
    { icon: <Clock className="w-5 h-5" />, label: "Business Hours", value: "10 AM – 7:30 PM IST",
      href: null, color: ORANGE },
  ];

  return (
    <motion.div
      variants={stagger}
      initial="initial"
      animate="animate"
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
    >
      {items.map((item) => (
        <motion.div key={item.label} variants={cardVariant}>
          {item.href ? (
            <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex flex-col items-center text-center rounded-2xl px-4 py-5 border-2 bg-white group transition-all duration-200 hover:-translate-y-1"
              style={{ borderColor: `${item.color}25`,
                boxShadow: `0 2px 12px ${item.color}15` }}>
              <span className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 text-white transition-transform duration-200 group-hover:scale-110"
                style={{ background: item.color }}>
                {item.icon}
              </span>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-0.5">{item.label}</p>
              <p className="text-sm font-bold text-gray-800">{item.value}</p>
            </a>
          ) : (
            <div className="flex flex-col items-center text-center rounded-2xl px-4 py-5 border-2 bg-white"
              style={{ borderColor: `${item.color}25`, boxShadow: `0 2px 12px ${item.color}15` }}>
              <span className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 text-white"
                style={{ background: item.color }}>
                {item.icon}
              </span>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-0.5">{item.label}</p>
              <p className="text-sm font-bold text-gray-800">{item.value}</p>
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; }
        body { font-family: 'Nunito', sans-serif; }
        .syne { font-family: 'Syne', sans-serif; }
        @keyframes float-slow {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-14px) rotate(6deg); }
        }
        @keyframes float-alt {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(12px) rotate(-5deg); }
        }
        @keyframes spin-ring {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes dash-in {
          to { stroke-dashoffset: 0; }
        }
        .float-slow { animation: float-slow 5s ease-in-out infinite; }
        .float-alt  { animation: float-alt  6s ease-in-out infinite; }
        .spin-ring  { animation: spin-ring 18s linear infinite; }
      `}</style>

      <div className="min-h-screen relative overflow-hidden" style={{ background: "#f7f8ff" }}>

        {/* ── Background decoration ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <Blob cx="10%" cy="15%" r={180} color={BLUE} />
          <Blob cx="90%" cy="10%" r={140} color={ORANGE} />
          <Blob cx="80%" cy="75%" r={200} color={BLUE} opacity={0.08} />
          <Blob cx="5%"  cy="80%" r={120} color={ORANGE} opacity={0.09} />

          {/* Spinning dashed ring */}
          <svg className="spin-ring absolute -top-16 -right-16 opacity-10" width="320" height="320" viewBox="0 0 320 320">
            <circle cx="160" cy="160" r="150" stroke={BLUE} strokeWidth="2"
              fill="none" strokeDasharray="12 6"/>
          </svg>

          {/* Floating shapes */}
          <svg className="float-slow absolute top-24 right-[8%] opacity-20" width="52" height="52" viewBox="0 0 52 52">
            <polygon points="26,2 50,46 2,46" fill={ORANGE}/>
          </svg>
          <svg className="float-alt absolute bottom-32 left-[6%] opacity-15" width="44" height="44" viewBox="0 0 44 44">
            <rect x="4" y="4" width="36" height="36" rx="8" fill={BLUE}/>
          </svg>
          <svg className="float-slow absolute top-1/2 left-[2%] opacity-10" width="36" height="36" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="16" stroke={ORANGE} strokeWidth="3" fill="none" strokeDasharray="6 3"/>
          </svg>

          {/* Grid dot pattern */}
          <svg className="absolute bottom-0 right-0 opacity-[0.04]" width="400" height="300" viewBox="0 0 400 300">
            {Array.from({ length: 10 }).map((_, row) =>
              Array.from({ length: 13 }).map((_, col) => (
                <circle key={`${row}-${col}`} cx={col * 32 + 8} cy={row * 30 + 8} r="2.5" fill={BLUE}/>
              ))
            )}
          </svg>
        </div>

        {/* ── Hero banner ── */}
        <div className="relative z-10 pt-16 pb-10 px-4 text-center">
          <motion.div {...fadeUp(0)}>
            <Badge color={BLUE}><Globe className="w-3.5 h-3.5" /> Get in Touch</Badge>
          </motion.div>

          <motion.h1 {...fadeUp(0.1)}
            className="syne text-4xl md:text-6xl font-black text-gray-900 mb-3 leading-tight">
            We're Here to{" "}
            <span className="relative inline-block">
              <span style={{ color: BLUE }}>Help!</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0,6 Q50,0 100,6 Q150,12 200,5"
                  stroke={ORANGE} strokeWidth="3" fill="none" strokeLinecap="round"
                  strokeDasharray="220" strokeDashoffset="220"
                  style={{ animation: "dash-in 1s ease forwards 0.5s" }}/>
              </svg>
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)}
            className="text-gray-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-medium">
            For questions, support, or anything about SkillzRevo's services — reach out and
            we'll respond within 24 hours.
          </motion.p>
        </div>

        {/* ── Main content ── */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 pb-20">

          {/* Quick info strip */}
          <QuickInfo />

          {/* Two-column: form + offices */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* ── Contact form (wider) ── */}
            <motion.div
              {...fadeUp(0.15)}
              className="lg:col-span-3 rounded-3xl bg-white p-8 border-2"
              style={{ borderColor: `${BLUE}20`, boxShadow: `0 12px 48px ${BLUE}14` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                  style={{ background: BLUE }}>
                  <Send className="w-4 h-4"/>
                </span>
                <div>
                  <h2 className="syne text-xl font-black text-gray-900 leading-none">Send Us a Message</h2>
                  <p className="text-xs text-gray-400 font-semibold mt-0.5">We reply within 24 hours</p>
                </div>
              </div>
              <ContactForm />
            </motion.div>

            {/* ── Offices panel ── */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <motion.div {...fadeUp(0.2)} className="flex items-center gap-2 mb-1">
                <Building2 className="w-4 h-4" style={{ color: ORANGE }}/>
                <h2 className="syne text-lg font-black text-gray-900">Our Offices</h2>
              </motion.div>

              <motion.div variants={stagger} initial="initial" animate="animate" className="space-y-3">
                {OFFICES.map((office) => (
                  <OfficeCard key={office.label} office={office} />
                ))}
              </motion.div>

              {/* CIN info */}
              <motion.div {...fadeUp(0.35)}
                className="rounded-2xl border-2 bg-white px-5 py-4 mt-1"
                style={{ borderColor: `${ORANGE}25` }}>
                <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Company Info</p>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">
                  Skillzrevo Solutions Pvt Ltd<br/>
                  CIN: <span className="font-bold text-gray-700">U80301UP2022PTC149041</span>
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}