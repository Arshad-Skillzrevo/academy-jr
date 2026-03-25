"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Brain,
  Cpu,
  Eye,
  MessageSquare,
  Layers,
  Shield,
  Rocket,
  ChevronRight,
  X,
  CheckCircle,
  Users,
  TrendingUp,
  Zap,
  Globe,
  ArrowRight,
  Star,
  BarChart3,
  Code2,
  Database,
} from "lucide-react";

// import CorporateEnquiryForm from "../components/CorporateEnquiryForm";
import React from "react";

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(#0891b2 1px, transparent 1px), linear-gradient(90deg, #0891b2 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-200/40 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-200/30 blur-3xl rounded-full" />
    </div>
  );
}

/* ─────────────────────────────────────────────
   ANIMATED COUNTER
───────────────────────────────────────────── */
function AnimatedStat({ value, label, icon: Icon }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="flex items-center justify-center gap-2 mb-1">
        <Icon className="text-cyan-600" size={18} />
        <span className="text-3xl font-bold text-slate-900">{value}</span>
      </div>
      <p className="text-slate-500 text-sm">{label}</p>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   CURRICULUM MODULE CARD
───────────────────────────────────────────── */
const modules = [
  {
    icon: Brain,
    title: "Foundations of AI & ML",
    desc: "Core concepts, learning paradigms, key terminologies, and the complete AI lifecycle.",
    tag: "Beginner",
    color: "from-cyan-50 to-white",
    border: "border-cyan-200",
    tagColor: "bg-cyan-100 text-cyan-700",
    iconBg: "bg-cyan-50 border-cyan-200",
    iconColor: "text-cyan-600",
  },
  {
    icon: BarChart3,
    title: "Supervised & Unsupervised Learning",
    desc: "Classification, regression, clustering — applied to fraud detection, forecasting, and customer analysis.",
    tag: "Core",
    color: "from-blue-50 to-white",
    border: "border-blue-200",
    tagColor: "bg-blue-100 text-blue-700",
    iconBg: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
  },
  {
    icon: Cpu,
    title: "Deep Learning",
    desc: "ANNs, CNNs, RNNs — built and trained in TensorFlow & PyTorch for images, text, and sequences.",
    tag: "Advanced",
    color: "from-violet-50 to-white",
    border: "border-violet-200",
    tagColor: "bg-violet-100 text-violet-700",
    iconBg: "bg-violet-50 border-violet-200",
    iconColor: "text-violet-600",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    desc: "Chatbots, sentiment analysis, text summarization, and document intelligence applications.",
    tag: "Advanced",
    color: "from-emerald-50 to-white",
    border: "border-emerald-200",
    tagColor: "bg-emerald-100 text-emerald-700",
    iconBg: "bg-emerald-50 border-emerald-200",
    iconColor: "text-emerald-600",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    desc: "Image classification, object detection, and video analytics for healthcare, surveillance, and automation.",
    tag: "Advanced",
    color: "from-amber-50 to-white",
    border: "border-amber-200",
    tagColor: "bg-amber-100 text-amber-700",
    iconBg: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-600",
  },
  {
    icon: Rocket,
    title: "AI Deployment & MLOps",
    desc: "Model versioning, CI/CD pipelines, monitoring, and lifecycle management for enterprise-scale AI.",
    tag: "Production",
    color: "from-rose-50 to-white",
    border: "border-rose-200",
    tagColor: "bg-rose-100 text-rose-700",
    iconBg: "bg-rose-50 border-rose-200",
    iconColor: "text-rose-600",
  },
  {
    icon: Shield,
    title: "AI Ethics & Governance",
    desc: "Fairness, bias mitigation, explainable AI, regulatory compliance, and building trustworthy systems.",
    tag: "Governance",
    color: "from-teal-50 to-white",
    border: "border-teal-200",
    tagColor: "bg-teal-100 text-teal-700",
    iconBg: "bg-teal-50 border-teal-200",
    iconColor: "text-teal-600",
  },
];

function ModuleCard({ mod, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`relative rounded-xl border ${mod.border} bg-gradient-to-br ${mod.color} p-6 group hover:scale-[1.02] hover:shadow-md transition-all duration-300 cursor-default shadow-sm`}
    >
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${mod.iconBg} border flex items-center justify-center`}>
          <mod.icon className={mod.iconColor} size={18} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <h3 className="text-slate-800 font-semibold text-sm leading-tight">{mod.title}</h3>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${mod.tagColor}`}>
              {mod.tag}
            </span>
          </div>
          <p className="text-slate-500 text-xs leading-relaxed">{mod.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   WHO IT'S FOR
───────────────────────────────────────────── */
const audiences = [
  { icon: Users, label: "Corporate Professionals & Managers" },
  { icon: BarChart3, label: "Data Analysts & Aspiring Data Scientists" },
  { icon: Code2, label: "Developers Transitioning into AI" },
  { icon: Cpu, label: "AI Engineers & Solution Architects" },
  { icon: TrendingUp, label: "Business Leaders & Decision-Makers" },
  { icon: Star, label: "Graduates Entering AI-Driven Careers" },
];

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function AIMLProgramPage() {
  const [isOpen, setIsOpen] = useState(false);

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const outcomesRef = useRef(null);
  const outcomesInView = useInView(outcomesRef, { once: true });

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative py-8 md:py-12 px-6 overflow-hidden bg-white">
        <GridBackground />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-24 right-[10%] w-64 h-64 rounded-full bg-cyan-200/50 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-[5%] w-48 h-48 rounded-full bg-blue-200/40 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div ref={heroRef} className="max-w-7xl mx-auto flex items-center justify-center flex-col relative">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-cyan-300 bg-cyan-50 text-cyan-700 text-xs font-semibold px-4 py-2 rounded-full mb-2 tracking-widest uppercase"
          >
            <Zap size={12} />
            Enterprise AI Training Program
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-5 display text-center"
          >
            <span className="text-slate-900">Artificial</span>
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-clip-text text-transparent"> Intelligence</span>
            <br />
            <span className="text-slate-900">& Machine</span>
            <span className="text-slate-400 font-light"> Learning</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 text-md md:text-lg max-w-3xl text-center leading-relaxed mb-5"
          >
            A comprehensive, industry-aligned training that transforms your teams from AI-curious to
            production-ready — from foundational concepts to ethical deployment at scale.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-5 mb-5"
          >
            {[
              { value: "7", label: "Core Modules", icon: Layers },
              { value: "100%", label: "Industry-Aligned", icon: TrendingUp },
              { value: "3", label: "Delivery Modes", icon: Globe },
              { value: "∞", label: "Customisable", icon: Zap },
            ].map((s) => (
              <AnimatedStat key={s.label} {...s} />
            ))}
          </motion.div>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="group flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
            >
              Request Corporate Training
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById("curriculum")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center justify-center gap-2 border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 bg-white px-8 py-4 rounded-xl font-semibold text-base transition-all shadow-sm"
            >
              Explore Curriculum
              <ChevronRight size={16} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div className="border-y border-slate-200 bg-slate-50 py-4 overflow-hidden">
        <div className="flex gap-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {[
            "TensorFlow", "PyTorch", "Deep Learning", "NLP", "Computer Vision",
            "MLOps", "Ethical AI", "Predictive Analytics", "Fraud Detection",
            "Conversational AI", "TensorFlow", "PyTorch", "Deep Learning", "NLP",
            "Computer Vision", "MLOps", "Ethical AI",
          ].map((t, i) => (
            <span key={i} className="text-slate-400 text-sm font-medium tracking-wide flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-cyan-500/60 inline-block" />
              {t}
            </span>
          ))}
        </div>
        <style>{`
          @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        `}</style>
      </div>

      {/* ── CURRICULUM ── */}
      <section id="curriculum" className="py-24 px-6 relative bg-[#f8fafc]">
        <GridBackground />
        <div className="max-w-7xl mx-auto relative">
          <div className="mb-14">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-cyan-600 text-xs font-semibold tracking-widest uppercase mb-3"
            >
              Curriculum
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold display mb-4 text-slate-900"
            >
              Seven modules.
              <br />
              <span className="text-slate-400 font-light">End-to-end expertise.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: 0.1 }}
              className="text-slate-500 max-w-xl text-base"
            >
              Each module builds on the last — from data fundamentals to production deployment
              and governance.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((mod, i) => (
              <ModuleCard key={mod.title} mod={mod} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS APPLICATIONS ── */}
      <section className="py-20 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-cyan-600 text-xs font-semibold tracking-widest uppercase mb-3">
              Applications
            </p>
            <h2 className="text-4xl font-bold display text-slate-900">
              Real business impact
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: TrendingUp, label: "Predictive Analytics & Forecasting" },
              { icon: Users, label: "Customer Behaviour & Personalisation" },
              { icon: Shield, label: "Fraud & Risk Detection" },
              { icon: Zap, label: "Intelligent Automation" },
              { icon: MessageSquare, label: "Conversational AI & Chatbots" },
              { icon: Eye, label: "Image & Video Analytics" },
              { icon: Rocket, label: "Enterprise AI Deployment" },
              { icon: Database, label: "Data-Driven Decision Making" },
            ].map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="border border-slate-200 bg-slate-50 hover:bg-white hover:border-cyan-300 hover:shadow-md rounded-xl p-5 transition-all group shadow-sm"
              >
                <Icon className="text-slate-400 group-hover:text-cyan-500 mb-3 group-hover:scale-110 transition-all" size={22} />
                <p className="text-slate-600 text-sm font-medium leading-snug">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ── */}
      <section id="outcomes" className="py-24 px-6 relative bg-[#f8fafc]">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #0891b2 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div ref={outcomesRef} className="max-w-5xl mx-auto relative">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={outcomesInView ? { opacity: 1 } : {}}
              className="text-cyan-600 text-xs font-semibold tracking-widest uppercase mb-3"
            >
              Program Outcomes
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={outcomesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold display text-slate-900"
            >
              What your team
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                walks away with
              </span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Understand AI and ML concepts end-to-end",
              "Select the right AI techniques for business problems",
              "Build and evaluate machine learning and deep learning models",
              "Deploy and manage AI systems in production",
              "Ensure ethical, fair, and compliant AI adoption",
              "Collaborate effectively across technical and business teams",
            ].map((outcome, i) => (
              <motion.div
                key={outcome}
                initial={{ opacity: 0, x: -20 }}
                animate={outcomesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.08 }}
                className="flex items-start gap-3 border border-slate-200 bg-white rounded-xl p-5 shadow-sm hover:shadow-md hover:border-cyan-200 transition-all"
              >
                <CheckCircle className="text-cyan-500 flex-shrink-0 mt-0.5" size={18} />
                <p className="text-slate-600 text-sm leading-relaxed">{outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section id="audience" className="py-20 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-cyan-600 text-xs font-semibold tracking-widest uppercase mb-3"
              >
                Who It's For
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold display mb-6 text-slate-900"
              >
                Built for every
                <br />
                layer of your org
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, delay: 0.1 }}
                className="text-slate-500 text-base leading-relaxed mb-8"
              >
                Whether you're upskilling an engineering team, enabling business leaders to make
                AI-informed decisions, or training fresh graduates — this program scales to your needs.
              </motion.p>
              <button
                onClick={() => setIsOpen(true)}
                className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-cyan-500/20"
              >
                Start a Conversation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {audiences.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="border border-slate-200 bg-slate-50 hover:border-cyan-300 hover:bg-cyan-50 rounded-xl p-5 transition-all group shadow-sm hover:shadow-md"
                >
                  <Icon className="text-slate-400 group-hover:text-cyan-500 transition-colors mb-3" size={20} />
                  <p className="text-slate-700 text-sm font-medium leading-snug">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY SKILLZREVO ── */}
      <section className="py-20 px-6 bg-[#f8fafc] border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold display mb-3 text-slate-900"
            >
              Why SkillzRevo
            </motion.h2>
            <p className="text-slate-500">Trusted by enterprises to deliver measurable AI capability</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Layers,
                title: "Enterprise-Focused",
                desc: "Curriculum designed around real-world enterprise environments, not toy problems.",
              },
              {
                icon: Users,
                title: "Industry Practitioners",
                desc: "Delivered by professionals who deploy AI systems in production every day.",
              },
              {
                icon: Zap,
                title: "Business-First",
                desc: "Every concept anchored to business outcomes — not just technical theory.",
              },
              {
                icon: Globe,
                title: "Fully Customisable",
                desc: "Modules, depth, and delivery mode tailored to your organisation's needs.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-cyan-200 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center mb-4">
                  <Icon className="text-cyan-600" size={18} />
                </div>
                <h3 className="text-slate-800 font-semibold mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BANNER ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 via-blue-50 to-white p-12 text-center overflow-hidden shadow-lg"
          >
            {/* Decorative glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-cyan-300/20 blur-3xl rounded-full" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

            <div className="relative">
              <p className="text-cyan-600 text-xs font-semibold tracking-widest uppercase mb-4">
                Get Started Today
              </p>
              <h2 className="text-4xl md:text-5xl font-bold display mb-5 text-slate-900">
                Ready to build your
                <br />
                AI-capable workforce?
              </h2>
              <p className="text-slate-500 text-base max-w-xl mx-auto mb-10 leading-relaxed">
                Talk to our enterprise team about customising this program for your organisation.
                Flexible delivery. Proven outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsOpen(true)}
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-10 py-4 rounded-xl font-semibold text-base transition-all shadow-lg shadow-cyan-500/30"
                >
                  Request Corporate Training
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => setIsOpen(true)}
                  className="inline-flex items-center gap-2 border border-slate-300 hover:border-slate-500 text-slate-600 hover:text-slate-900 bg-white px-10 py-4 rounded-xl font-semibold text-base transition-all shadow-sm"
                >
                  Download Brochure
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-slate-200 bg-slate-50 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <Brain size={13} className="text-white" />
            </div>
            <span className="font-bold text-slate-900 text-base" style={{ fontFamily: "Syne" }}>
              SkillzRevo
            </span>
          </div>
          <p className="text-slate-400 text-sm">
            Transforming Data into Intelligent Decisions
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="text-cyan-600 hover:text-cyan-500 text-sm font-medium transition"
          >
            corporatetraining@skillzrevo.com →
          </button>
        </div>
      </footer>

      {/* ── MODAL ── */}
      {/* <CorporateEnquiryForm isOpen={isOpen} onClose={() => setIsOpen(false)} /> */}
    </div>
  );
}