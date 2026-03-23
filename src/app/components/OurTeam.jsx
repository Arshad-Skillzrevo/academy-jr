"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  Award,
  Briefcase,
  Code2,
  BarChart2,
  Brain,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

const B = { blue: "#1642d6", light: "#1d8fff", orange: "#ff6900" };

/* ─────────────────────────────────────────
   TEAM DATA
───────────────────────────────────────── */
const TEAM = [
  {
    id: 1,
    name: "Ravi Pandey",
    role: "Software Developer & AI Engineer",
    tagline: "3.5+ Years in AI, ML & Cloud",
    Icon: Brain,
    accent: B.blue,
    bg: "#dbeafe",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&q=80",
    certifications: [
      "IBM Certification — Machine Learning",
      "IBM Certification — Artificial Intelligence",
      "IBM Certification — Application Development",
      "PW Certification — Software Development",
    ],
    skills: ["Machine Learning", "Deep Learning", "NLP", "Generative AI", "LLMs", "AWS Cloud", "Transformers", "AI Chatbots"],
    bio: [
      "Ravi Pandey is a Software Developer with 3.5+ years of experience in Software Development, Artificial Intelligence, Machine Learning, Data Science, and AWS Cloud technologies.",
      "He has hands-on experience in building automation systems, AI-powered chatbot solutions, and scalable web applications, and actively works with modern AI technologies including Machine Learning, Deep Learning, Natural Language Processing, Transformers, Generative AI, and Large Language Models (LLMs).",
      "He is passionate about building practical, real-world technology solutions and strongly advocates project-based learning and hands-on implementation. Through his development and training work, he focuses on helping learners and professionals build industry-ready skills.",
    ],
  },
  {
    id: 2,
    name: "Sadik Ansari",
    role: "Data Science & Backend Engineer",
    tagline: "ML • NLP • API Development",
    Icon: Code2,
    accent: "#6d28d9",
    bg: "#ede9fe",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face&q=80",
    certifications: [],
    skills: ["Python", "SQL", "Machine Learning", "NLP", "EDA", "Predictive Modeling", "Sentiment Analysis", "REST APIs"],
    bio: [
      "Sadik Ansari is a Data Science and Software Development professional with expertise in Machine Learning, Natural Language Processing (NLP), and backend API development. He has strong experience working with Python, SQL, and data-driven technologies.",
      "Sadik has hands-on experience in Machine Learning (Supervised & Unsupervised), Exploratory Data Analysis (EDA), predictive modeling, classification, clustering, sentiment analysis, and model deployment.",
      "He has also developed RESTful APIs and optimized database systems to support scalable data applications. Sadik is passionate about solving real-world business problems using data, AI, and Analysis.",
    ],
  },
  {
    id: 3,
    name: "Pratik Rao",
    role: "Data Analyst & BI Specialist",
    tagline: "Power BI • Tableau • Data Storytelling",
    Icon: BarChart2,
    accent: B.orange,
    bg: "#ffedd5",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&q=80",
    certifications: [],
    skills: ["Power BI", "Tableau", "SQL", "Excel", "Python", "EDA", "Dashboard Design", "Business Intelligence"],
    bio: [
      "Pratik Rao is a Data Analyst specializing in Business Intelligence, Data Visualization, and Data-Driven Decision Making. He has hands-on experience working with Power BI, Tableau, SQL, Excel, and Python.",
      "Pratik has worked on real-world data Analysis projects focusing on exploratory data analysis (EDA), dashboard development, and business reporting. His work includes building interactive dashboards and improving sales forecasting accuracy.",
      "He is passionate about data storytelling, Analysis, and business intelligence, and continuously works on improving his skills in data Analysis, visualization tools, and AI-driven Analysis solutions.",
    ],
  },
];

/* ─────────────────────────────────────────
   MODAL
───────────────────────────────────────── */
function TeamModal({ member, onClose }) {
  /* lock body scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      key="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      style={{ background: "rgba(6,11,24,0.65)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <motion.div
        key="modal"
        initial={{ opacity: 0, scale: 0.93, y: 32 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white"
        style={{
          border: "1.5px solid rgba(0,0,0,0.08)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
          style={{ background: "#f1f5f9", color: "#64748b" }}
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* header band */}
        <div
          className="relative overflow-hidden rounded-t-3xl px-8 pt-8 pb-6 flex items-end gap-6"
          style={{ background: `linear-gradient(135deg, ${member.bg}, white)` }}
        >
          {/* decorative blob */}
          <div
            className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none"
            style={{ background: member.accent }}
          />

          {/* avatar */}
          <div className="relative flex-shrink-0">
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 rounded-2xl object-cover shadow-xl relative z-10"
              style={{ border: `3px solid ${member.accent}` }}
            />
            <div
              className="absolute -bottom-2 -right-2 w-8 h-8 rounded-xl flex items-center justify-center z-20 shadow-lg"
              style={{ background: member.accent }}
            >
              <member.Icon size={16} color="white" />
            </div>
          </div>

          {/* name block */}
          <div className="relative z-10 pb-1">
            <span
              className="inline-block rounded-full px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-widest mb-2"
              style={{ background: member.bg, color: member.accent }}
            >
              {member.tagline}
            </span>
            <h2
              className="heading-oswald font-bold text-gray-900 leading-tight"
              style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)" }}
            >
              {member.name}
            </h2>
            <p className="text-[13px] text-gray-500 mt-0.5 font-medium">{member.role}</p>
          </div>
        </div>

        {/* body */}
        <div className="px-8 py-6 flex flex-col gap-7">

          {/* bio paragraphs */}
          <div className="flex flex-col gap-3">
            {member.bio.map((p, i) => (
              <p key={i} className="text-[14px] text-gray-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* skills */}
          <div>
            <h3
              className="heading-oswald font-bold text-gray-900 mb-3 flex items-center gap-2"
              style={{ fontSize: "1rem" }}
            >
              <Briefcase size={15} style={{ color: member.accent }} />
              Skills & Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {member.skills.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-[12px] font-semibold border"
                  style={{ color: member.accent, borderColor: `${member.accent}30`, background: `${member.accent}0d` }}
                >
                  <ChevronRight size={10} />
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* certifications */}
          {member.certifications.length > 0 && (
            <div>
              <h3
                className="heading-oswald font-bold text-gray-900 mb-3 flex items-center gap-2"
                style={{ fontSize: "1rem" }}
              >
                <Award size={15} style={{ color: member.accent }} />
                Certifications
              </h3>
              <ul className="flex flex-col gap-2">
                {member.certifications.map((c) => (
                  <li key={c} className="flex items-center gap-2.5 text-[13px] text-gray-600">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: member.accent }}
                    />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <button
            className="w-full rounded-2xl py-3 text-sm font-bold text-white flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            style={{
              background: `linear-gradient(135deg, ${member.accent}, ${member.accent}cc)`,
              boxShadow: `0 8px 24px ${member.accent}35`,
            }}
          >
            <ExternalLink size={14} />
            Connect with {member.name.split(" ")[0]}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   TEAM CARD
───────────────────────────────────────── */
function TeamCard({ member, onClick, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      onClick={() => onClick(member)}
      className="group relative rounded-3xl overflow-hidden bg-white cursor-pointer"
      style={{
        border: "1.5px solid rgba(0,0,0,0.07)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
      }}
    >
      {/* image area */}
      <div
        className="relative overflow-hidden"
        style={{ height: 240 }}
      >
        {/* bg tint */}
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: `linear-gradient(160deg, ${member.accent}, transparent 60%)` }}
        />

        <img
          src={member.img}
          alt={member.name}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        {/* bottom scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

        {/* role icon badge */}
        <div
          className="absolute top-4 right-4 w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg"
          style={{ background: member.accent, boxShadow: `0 4px 14px ${member.accent}50` }}
        >
          <member.Icon size={18} color="white" strokeWidth={2} />
        </div>
      </div>

      {/* text body */}
      <div className="px-6 pb-6 pt-3 flex flex-col gap-2">
        <span
          className="inline-block rounded-full px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-widest w-fit"
          style={{ background: member.bg, color: member.accent }}
        >
          {member.tagline}
        </span>

        <h3
          className="heading-oswald font-bold text-gray-900 leading-tight"
          style={{ fontSize: "1.2rem" }}
        >
          {member.name}
        </h3>

        <p className="text-[13px] text-gray-500 font-medium">{member.role}</p>

        {/* skill chips — first 3 */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {member.skills.slice(0, 3).map((s) => (
            <span
              key={s}
              className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold border"
              style={{ color: member.accent, borderColor: `${member.accent}30`, background: `${member.accent}0d` }}
            >
              {s}
            </span>
          ))}
          {member.skills.length > 3 && (
            <span
              className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold border"
              style={{ color: "#94a3b8", borderColor: "#e2e8f0", background: "#f8fafc" }}
            >
              +{member.skills.length - 3} more
            </span>
          )}
        </div>

        {/* view profile CTA */}
        <div
          className="mt-3 flex items-center gap-1.5 text-[12px] font-bold transition-all duration-200 group-hover:gap-2.5"
          style={{ color: member.accent }}
        >
          View Full Profile
          <ChevronRight size={13} />
        </div>

        {/* hover bottom bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
          style={{ background: `linear-gradient(90deg, ${member.accent}, ${B.orange})` }}
        />
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   SECTION
───────────────────────────────────────── */
export default function OurTeam() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section className="relative py-20 overflow-hidden" style={{ background: "#ffffff" }}>

        {/* blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute rounded-full blur-3xl opacity-[0.06]"
            style={{ width: 640, height: 640, top: "-160px", right: "-160px",
              background: `radial-gradient(circle, ${B.blue}, transparent 70%)` }} />
          <div className="absolute rounded-full blur-3xl opacity-[0.05]"
            style={{ width: 480, height: 480, bottom: "-100px", left: "-80px",
              background: `radial-gradient(circle, ${B.orange}, transparent 70%)` }} />
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: `radial-gradient(${B.blue} 1px, transparent 1px)`,
              backgroundSize: "40px 40px" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* header */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest border mb-5"
              style={{ color: B.blue, borderColor: `${B.blue}30`, background: `${B.blue}0d` }}
            >
              <Sparkles size={11} style={{ color: B.orange }} />
              Meet the Team
            </span>

            <h2
              className="heading-oswald font-bold uppercase leading-tight tracking-tight text-gray-900"
              style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.9rem)" }}
            >
              Learn from{" "}
              <span style={{
                background: `linear-gradient(105deg, ${B.light}, ${B.blue})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Industry Experts
              </span>
            </h2>

            <p className="mt-4 text-[15px] text-gray-500 leading-relaxed">
              Our instructors bring real-world experience in AI, Data Science, and
              Software Development — passionate about teaching and building future-ready skills.
            </p>
          </motion.div>

          {/* 3-col grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member, i) => (
              <TeamCard
                key={member.id}
                member={member}
                index={i}
                onClick={setSelected}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Modal portal */}
      <AnimatePresence>
        {selected && (
          <TeamModal member={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}