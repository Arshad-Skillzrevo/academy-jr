"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  ChevronLeft, ChevronRight, X, Star,
  Sparkles, Rocket, Linkedin, Award, BookOpen,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

/* ─────────────────────────────────────────
   GOOGLE FONTS
───────────────────────────────────────── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');
    @keyframes tcFloat  { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-8px)}  }
    @keyframes tcSpin   { to{transform:rotate(360deg)} }
    @keyframes tcPulse  { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.5);opacity:.5} }
    @keyframes tcShimmer{ 0%{background-position:-200% center} 100%{background-position:200% center} }
    .tc-float  { animation: tcFloat  3.5s ease-in-out infinite; }
    .tc-spin   { animation: tcSpin   9s   linear     infinite; }
    .tc-pulse  { animation: tcPulse  1.8s ease-in-out infinite; }
    .tc-shimmer-text {
      background: linear-gradient(90deg,#7c3aed 0%,#a855f7 35%,#0ea5e9 60%,#7c3aed 100%);
      background-size: 200% auto;
      animation: tcShimmer 3s linear infinite;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    /* Swiper nav override */
    .tc-swiper { padding: 0 12px !important; }
    /* Modal custom scrollbar */
    .tc-modal-scroll::-webkit-scrollbar       { width: 5px; }
    .tc-modal-scroll::-webkit-scrollbar-track { background: #f5f0ff; border-radius: 100px; }
    .tc-modal-scroll::-webkit-scrollbar-thumb { background: linear-gradient(180deg,#a855f7,#7c3aed); border-radius: 100px; }
  `}</style>
);

/* ─────────────────────────────────────────
   BRAND
───────────────────────────────────────── */
const B = {
  violet: "#7c3aed", purple: "#a855f7",
  sky:    "#0ea5e9", orange: "#f97316",
  amber:  "#fbbf24", rose:   "#f43f5e",
  mint:   "#10b981", navy:   "#0f1b4c",
};

/* Cycling card accent palette */
const CARD_PALETTE = [
  { accent: B.violet, light: "#ede9fe" },
  { accent: B.sky,    light: "#e0f2fe" },
  { accent: B.orange, light: "#fff3e0" },
  { accent: B.mint,   light: "#d1fae5" },
  { accent: B.rose,   light: "#ffe4e6" },
  { accent: B.amber,  light: "#fef9c3" },
];

/* ─────────────────────────────────────────
   HELPERS
───────────────────────────────────────── */
function DottedBg({ color = B.violet, opacity = 0.038, size = 28 }) {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
      style={{ backgroundImage:`radial-gradient(circle,${color} 1.5px,transparent 1.5px)`,
        backgroundSize:`${size}px ${size}px`, opacity }} />
  );
}

function WavyTop({ fill = "#fff" }) {
  return (
    <div className="absolute top-0 left-0 w-full pointer-events-none z-[4]" style={{ lineHeight: 0 }} aria-hidden="true">
      <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,0 L0,0 Z" fill={fill} />
      </svg>
    </div>
  );
}

function WavyBottom({ fill = "#fff" }) {
  return (
    <div className="absolute bottom-0 left-0 w-full pointer-events-none z-[4]" style={{ lineHeight: 0 }} aria-hidden="true">
      <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z" fill={fill} />
      </svg>
    </div>
  );
}

function SpinningStar({ size = 13, color, style: s }) {
  return (
    <div className="absolute pointer-events-none z-[2] tc-spin" style={s} aria-hidden="true">
      <Star size={size} fill={color} color={color} />
    </div>
  );
}

function PulsingDots({ colors, center = true }) {
  return (
    <div style={{ display:"flex", gap:7, justifyContent: center ? "center" : "flex-start", marginTop: 14 }} aria-hidden="true">
      {colors.map((c, i) => (
        <div key={i} className="tc-pulse"
          style={{ width:7, height:7, borderRadius:"50%", background:c, animationDelay:`${i*0.18}s` }} />
      ))}
    </div>
  );
}

/* Truncate helper */
const truncate = (str = "", max = 100) =>
  str.length > max ? str.slice(0, max - 1) + "…" : str;

/* ─────────────────────────────────────────
   TRAINER CARD
───────────────────────────────────────── */
function TrainerCard({ trainer, index, onClick }) {
  const pal = CARD_PALETTE[index % CARD_PALETTE.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 380, damping: 22 } }}
      onClick={onClick}
      className="flex flex-col rounded-3xl overflow-hidden cursor-pointer select-none"
      style={{
        background: "rgba(255,255,255,0.94)",
        border: `2px solid ${pal.accent}20`,
        boxShadow: `0 4px 18px ${pal.accent}0e`,
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      {/* Gradient top strip */}
      <div style={{ height: 4, background: `linear-gradient(90deg,${pal.accent},${B.orange})` }} />

      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: 200 }}>
        <Image
          src={trainer.image}
          alt={trainer.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="240px"
        />
        {/* Scrim */}
        <div className="absolute inset-0" style={{ background:"linear-gradient(to top,rgba(0,0,0,0.5) 0%,transparent 55%)" }} />

        {/* Floating icon chip */}
        <div className="tc-float absolute bottom-3 right-3"
          style={{ width:34, height:34, borderRadius:10,
            background:`linear-gradient(135deg,${pal.accent},${pal.accent}bb)`,
            boxShadow:`0 4px 12px ${pal.accent}45`,
            display:"flex", alignItems:"center", justifyContent:"center" }}>
          <Award size={15} color="white" strokeWidth={2.2} />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <div>
          <h3 style={{ fontFamily:"'Fredoka One',cursive", fontSize:"1.05rem", color:B.navy, lineHeight:1.2, marginBottom:3 }}>
            {trainer.name}
          </h3>
          {trainer.role && (
            <p style={{ fontSize:11, fontWeight:800, color:pal.accent, textTransform:"uppercase", letterSpacing:"0.06em" }}>
              {trainer.role}
            </p>
          )}
        </div>

        <p style={{ fontSize:13, color:"#6b7280", lineHeight:1.65, fontWeight:700, flex:1 }}>
          {truncate(trainer.description, 100)}
        </p>

        {/* Skill chips */}
        {trainer.skills?.length > 0 && (
          <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
            {trainer.skills.slice(0, 3).map((skill, i) => (
              <span key={i}
                style={{ fontSize:11, fontWeight:800, padding:"3px 10px", borderRadius:100,
                  background:pal.light, color:pal.accent, border:`1px solid ${pal.accent}28` }}>
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Read more hint */}
        <p style={{ fontSize:12, fontWeight:800, color:pal.accent, marginTop:2,
          display:"flex", alignItems:"center", gap:4, fontFamily:"'Fredoka One',cursive" }}>
          View Profile
          <ChevronRight size={13} strokeWidth={2.5} />
        </p>
      </div>

      {/* Hover bottom bar */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileHover={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.25 }}
        style={{ height: 4, background:`linear-gradient(90deg,${pal.accent},${B.orange})`,
          transformOrigin:"left", marginTop:"auto" }}
      />
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   MODAL (Portal)
───────────────────────────────────────── */
function TrainerModal({ trainer, onClose, index }) {
  const pal = CARD_PALETTE[(index || 0) % CARD_PALETTE.length];
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="tc-backdrop"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        style={{ position:"fixed", inset:0, zIndex:99998,
          background:"rgba(15,27,76,0.72)", backdropFilter:"blur(8px)", WebkitBackdropFilter:"blur(8px)" }}
        aria-hidden="true"
      />

      <motion.div
        key="tc-panel"
        initial={{ opacity:0, scale:0.86, y:50 }}
        animate={{ opacity:1, scale:1,    y:0  }}
        exit={{   opacity:0, scale:0.93,   y:28 }}
        transition={{ type:"spring", stiffness:310, damping:26 }}
        style={{ position:"fixed", inset:0, zIndex:99999,
          display:"flex", alignItems:"center", justifyContent:"center",
          padding:16, pointerEvents:"none" }}
        role="dialog" aria-modal="true" aria-label={trainer.name}
      >
        <div style={{
          pointerEvents:"auto",
          width:"100%", maxWidth:600,
          maxHeight:"90dvh",
          borderRadius:28, overflow:"hidden",
          background:"linear-gradient(160deg,#f5f0ff 0%,#fff0f7 45%,#f0f9ff 100%)",
          border:`2px solid ${pal.accent}22`,
          boxShadow:`0 32px 80px ${pal.accent}28, 0 8px 24px rgba(0,0,0,0.12)`,
          fontFamily:"'Nunito',sans-serif",
        }}>
          {/* Rainbow strip */}
          <div style={{ height:5, background:`linear-gradient(90deg,${B.sky},${pal.accent},${B.orange},${B.rose})` }} />

          {/* Close */}
          <motion.button onClick={onClose} aria-label="Close"
            whileHover={{ scale:1.12, rotate:90 }} whileTap={{ scale:0.95 }}
            transition={{ type:"spring", stiffness:400, damping:18 }}
            style={{ position:"absolute", top:14, right:14, zIndex:20,
              width:36, height:36, borderRadius:"50%", border:`1.5px solid ${pal.accent}28`,
              background:`${pal.accent}14`, color:pal.accent, cursor:"pointer",
              display:"flex", alignItems:"center", justifyContent:"center" }}>
            <X size={16} strokeWidth={2.5} />
          </motion.button>

          {/* Scrollable body */}
          <div className="tc-modal-scroll" style={{ overflowY:"auto", maxHeight:"calc(90dvh - 5px)" }}>

            {/* Image */}
            <div style={{ position:"relative", height:550, overflow:"hidden" }}>
              <Image src={trainer.image} alt={trainer.name} fill className="object-cover" sizes="600px" />
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(15,27,76,0.75) 0%,transparent 50%)" }} />
              {/* Name on image */}
              <div style={{ position:"absolute", bottom:20, left:24, right:60 }}>
                <h2 style={{ fontFamily:"'Fredoka One',cursive", fontSize:"1.6rem", color:"white", margin:0, lineHeight:1.1 }}>
                  {trainer.name}
                </h2>
                {trainer.role && (
                  <p style={{ fontSize:13, fontWeight:800, color:"rgba(255,255,255,0.8)", marginTop:4, textTransform:"uppercase", letterSpacing:"0.06em" }}>
                    {trainer.role}
                  </p>
                )}
              </div>
            </div>

            <div style={{ padding:"24px 28px 32px", display:"flex", flexDirection:"column", gap:18 }}>

              {/* Bio */}
              <div>
                <p style={{ fontSize:11, fontWeight:800, color:pal.accent, textTransform:"uppercase",
                  letterSpacing:"0.07em", marginBottom:8 }}>About</p>
                <p style={{ fontSize:14, color:"#4b5563", lineHeight:1.75, fontWeight:700 }}>
                  {trainer.description}
                </p>
              </div>

              {/* Skills */}
              {trainer.skills?.length > 0 && (
                <div>
                  <p style={{ fontSize:11, fontWeight:800, color:pal.accent, textTransform:"uppercase",
                    letterSpacing:"0.07em", marginBottom:10 }}>Expertise</p>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:7 }}>
                    {trainer.skills.map((skill, i) => (
                      <motion.span key={i}
                        whileHover={{ scale:1.06 }}
                        style={{ fontSize:12, fontWeight:800, padding:"5px 13px", borderRadius:100,
                          background:pal.light, color:pal.accent, border:`1.5px solid ${pal.accent}28`,
                          cursor:"default" }}>
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}

              {/* Experience + Courses row */}
              {(trainer.experience || trainer.courses) && (
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                  {trainer.experience && (
                    <div style={{ borderRadius:16, padding:14, border:`1.5px solid ${pal.accent}20`, background:pal.light }}>
                      <p style={{ fontSize:10, fontWeight:800, color:pal.accent, textTransform:"uppercase", letterSpacing:"0.07em", margin:"0 0 4px" }}>
                        Experience
                      </p>
                      <p style={{ fontFamily:"'Fredoka One',cursive", fontSize:"1.25rem", color:B.navy, margin:0 }}>
                        {trainer.experience}
                      </p>
                    </div>
                  )}
                  {trainer.courses && (
                    <div style={{ borderRadius:16, padding:14, border:`1.5px solid ${pal.accent}20`, background:pal.light }}>
                      <p style={{ fontSize:10, fontWeight:800, color:pal.accent, textTransform:"uppercase", letterSpacing:"0.07em", margin:"0 0 4px" }}>
                        Courses Taught
                      </p>
                      <p style={{ fontFamily:"'Fredoka One',cursive", fontSize:"1.25rem", color:B.navy, margin:0 }}>
                        {trainer.courses}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* LinkedIn */}
              {trainer.linkedin && (
                <motion.a
                  href={trainer.linkedin} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale:1.04, boxShadow:`0 8px 24px ${B.sky}40` }}
                  whileTap={{ scale:0.97 }}
                  transition={{ type:"spring", stiffness:380, damping:20 }}
                  style={{ display:"inline-flex", alignItems:"center", gap:8,
                    padding:"10px 22px", borderRadius:14,
                    background:"linear-gradient(135deg,#0077b5,#005885)",
                    color:"white", textDecoration:"none",
                    fontFamily:"'Fredoka One',cursive", fontSize:"0.95rem",
                    boxShadow:"0 4px 14px rgba(0,119,181,0.35)",
                    alignSelf:"flex-start" }}>
                  <FaLinkedin size={16} />
                  View LinkedIn Profile
                </motion.a>
              )}

              {/* Pulsing dots */}
              <div style={{ display:"flex", gap:6, justifyContent:"center" }} aria-hidden="true">
                {[pal.accent, B.sky, B.orange, B.mint, B.rose].map((c,i) => (
                  <div key={i} className="tc-pulse"
                    style={{ width:6, height:6, borderRadius:"50%", background:c, animationDelay:`${i*0.18}s` }} />
                ))}
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
export default function TrainersCarousel({ trainersData = demoTrainers }) {
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [selectedIndex, setSelectedIndex]     = useState(0);

  const open  = (trainer, index) => { setSelectedTrainer(trainer); setSelectedIndex(index); };
  const close = () => setSelectedTrainer(null);

  return (
    <>
      <FontLoader />
      <section
        className="relative py-28 overflow-hidden"
        aria-label="Meet Our Expert Trainers"
        style={{
          background:"linear-gradient(160deg,#f5f0ff 0%,#fff0f7 40%,#f0f9ff 70%,#f0fff8 100%)",
          fontFamily:"'Nunito',sans-serif",
        }}
      >
        <DottedBg color={B.violet} opacity={0.038} />
        <WavyTop  fill="#ffffff" />
        <WavyBottom fill="#ffffff" />

        {/* Blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div style={{ position:"absolute", top:-80, right:-80, width:440, height:440, borderRadius:"50%",
            background:`radial-gradient(circle,${B.violet}1e,transparent 70%)`, filter:"blur(60px)" }} />
          <div style={{ position:"absolute", bottom:-60, left:-60, width:360, height:360, borderRadius:"50%",
            background:`radial-gradient(circle,${B.orange}18,transparent 70%)`, filter:"blur(55px)" }} />
        </div>

        {/* Spinning stars — desktop */}
        <div className="hidden lg:block" aria-hidden="true">
          <SpinningStar size={14} color={B.amber}  style={{ top:"8%",  left:"3%"  }} />
          <SpinningStar size={11} color={B.rose}   style={{ top:"84%", left:"5%"  }} />
          <SpinningStar size={13} color={B.violet} style={{ top:"6%",  right:"4%" }} />
          <SpinningStar size={10} color={B.sky}    style={{ top:"86%", right:"5%" }} />
          <SpinningStar size={9}  color={B.mint}   style={{ top:"48%", left:"1%"  }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* ── HEADER ── */}
          <div className="text-center mb-14">
            {/* Eyebrow */}
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-bold uppercase tracking-widest border-2"
                style={{ color:B.violet, borderColor:`${B.violet}38`, background:"linear-gradient(135deg,#ede9fe,#fce7f3)" }}>
                <div className="tc-float" style={{ display:"flex" }}>
                  <Rocket size={13} style={{ color:B.orange }} />
                </div>
                Expert Mentors
              </span>
            </div>

            <h2 className="tc-shimmer-text"
              style={{ fontFamily:"'Fredoka One',cursive", fontSize:"clamp(1.8rem,4vw,3rem)", lineHeight:1.08, marginBottom:12 }}>
              Meet Our Expert Trainers
            </h2>

            <p style={{ fontSize:16, color:"#6b7280", fontWeight:700, maxWidth:480, margin:"0 auto" }}>
              Learn from industry professionals with real-world experience and a passion for teaching kids.
            </p>

            <PulsingDots colors={[B.violet, B.sky, B.orange, B.mint, B.rose]} />
          </div>

          {/* ── SWIPER ── */}
          <div className="relative">
            {/* Nav buttons */}
            <button
              className="trainer-prev absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center"
              style={{
                left: -20, width:44, height:44, borderRadius:"50%",
                background:"rgba(255,255,255,0.92)",
                border:`2px solid ${B.violet}25`,
                boxShadow:`0 6px 18px ${B.violet}18`,
                color:B.violet, cursor:"pointer",
              }}
              aria-label="Previous">
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
            <button
              className="trainer-next absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center"
              style={{
                right: -20, width:44, height:44, borderRadius:"50%",
                background:`linear-gradient(135deg,${B.purple},${B.violet})`,
                border:"none",
                boxShadow:`0 6px 18px ${B.violet}40`,
                color:"white", cursor:"pointer",
              }}
              aria-label="Next">
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>

            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{ nextEl: ".trainer-next", prevEl: ".trainer-prev" }}
              autoplay={{ delay: 2800, disableOnInteraction: false, pauseOnMouseEnter: true }}
              loop
              speed={700}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                480:  { slidesPerView: 2, spaceBetween: 16 },
                768:  { slidesPerView: 3, spaceBetween: 18 },
                1024: { slidesPerView: 4, spaceBetween: 20 },
                1280: { slidesPerView: 5, spaceBetween: 20 },
              }}
              className="tc-swiper"
            >
              {trainersData.map((trainer, i) => (
                <SwiperSlide key={trainer.id}>
                  <TrainerCard
                    trainer={trainer}
                    index={i}
                    onClick={() => open(trainer, i)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </section>

      {/* Modal via Portal */}
      {selectedTrainer && (
        <TrainerModal
          trainer={selectedTrainer}
          index={selectedIndex}
          onClose={close}
        />
      )}
    </>
  );
}

/* ===== Demo Data ===== */
const demoTrainers = [
//   {
//     id: 8,
//     name: "Shweta Otari",
//     image: "/Trainers/Shweta-Otari.JPG",
//     description:
//       "A Learning and Development professional with 8 years of experience specializing in technical training, curriculum design, and e-learning development. I’ve created and delivered programs on Python, Cloud, Data Science working closely with SMEs to ensure relevance and industry alignment.I have hands-on experience with LMS management, TNA, ADDIE framework, and tools like Articulate Storyline. I’m passionate about designing engaging learning experiences that bridge skill gaps and enhance workforce capability.",
//     skills: ["Python", "SQL", "ML", "DL"],
//     experience: "8+ Years",
//     students: "200+",
//     linkedin: "https://www.linkedin.com/in/shweta-otari-8681b8b8/",
//   },
  {
    id: 1,
    name: "Mr. Ashish Tiwari",
    image: "/Trainers/Ashish-Tiwari-Sir.jpeg",
    description:
      "Mr. Ashish Tiwari has done his Masters in Al&ML. He is a Data Scientist having experience of over 8+ years. He has trained 500+ data science enthusiasts who are placed in good companies. He has experience in Data Analytics, Python, Machine Learning, Deep Learning, NLP, Generative Al and many more technologies related to Data Science. He has done several projects viz. Prediction of Dormant Customer and its Factor Analysis,Last Mile Connectivity, Data Vizualisation of census data and many more in the field of Data Science and Generative Al.",
    skills: ["AI", "Machine Learning", "NLP", "Generative AI"],
    experience: "8+ Years",
    students: "500+",
    linkedin: "https://www.linkedin.com/in/ashishtiwari2114/",
  },
  {
    id: 2,
    name: "Usha Nandhini S",
    image: "/Trainers/usha.webp",
    description: `With over 9 years of expertise in computer programming and 2+ years of specialized focus in Data Science, AI, Machine Learning, and Generative AI, I transform complex technologies into powerful business solutions.

My Expertise

As a Senior Subject Matter Expert at L&T EduTech, I design cutting-edge training programs and mentor professionals through hands-on AI projects. My background includes developing LLM-powered chatbots and delivering corporate training in emerging technologies like Prompt Engineering and Natural Language Processing.

What I Deliver

I build intelligent systems that solve real business problems:

Custom AI chatbots that enhance customer experiences
Predictive analytics frameworks that drive decision-making
Computer vision solutions for automation and monitoring
Sentiment analysis systems that uncover valuable insights
Technical Arsenal

My toolkit includes Python, PySpark, Flask, Django, Streamlit, vector databases (Neo4j, Qdrant, FAISS), visualization tools (Power BI, Tableau), and cloud platforms (AWS, Google Cloud).

Success Stories

I’ve led development of innovative solutions including a personalized IT course recommendation engine, an advanced pothole detection system using YOLO and FastAPI, and a multimodal sentiment analysis platform integrating BERT and CNN models.

My Approach

I excel at bridging technical complexity with practical application, ensuring every solution delivers measurable value. Fluent in Tamil, English, and Telugu, I bring clear communication and collaborative problem-solving to every project.`,
    skills: ["Data Science", "AI", "Machine Learning", "Generative AI"],
    experience: "9+ Years",
    students: "300+",
    linkedin:
      "https://www.linkedin.com/in/usshaa47?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 3,
    name: "Mr. Uttam",
    image: "/Trainers/Uttam-Grade-Sir.webp",
    description: `
    Uttam Grade is a seasoned Data Scientist and Data Science Trainer with extensive expertise in delivering advanced analytics and data-driven solutions across diverse domains, including retail, banking, and technology. With a strong foundation in Mathematics and Data Science, he has successfully trained professionals at leading institutions like Imarticus and Edyoda and conducted impactful live sessions on platforms like YouTube.

Uttam specializes in Machine Learning, Natural Language Processing, Deep Learning, Predictive Modeling, and Statistical Analysis, leveraging his skills to address real-world business challenges. His qualifications include a B.Sc. and M.Sc. in Mathematics, an M.S. in Machine Learning & Artificial Intelligence, and certifications in Python for Data Science, Data Analytics (NIIT), AWS Solution Architecture, Oracle Database, Decision Sciences, and Alteryx Core.

Passionate about knowledge sharing, Uttam is committed to empowering learners in the fields of Data Science and Analytics through quality training and coaching.
    `,
    skills: [],
    experience: "12+ Years",
    students: "400+",
    linkedin: "https://www.linkedin.com/in/uttamgrade/",
  },
  {
    id: 4,
    name: "Dr Lakshmi Sree Kailasam",
    image: "/Trainers/LakshmiSree.jpg",
    description: `
    Dr. Lakshmi has over 16+ years of experience in diverse domains, including ISO, Scrum, Agile and Project Management, Cyber Security, Capital Markets, Healthcare, Consumer Packaged Goods (CPG), Fast-Moving Consumer Goods (FMCG), Retail, HR Analytics, Digital Marketing, Information Technology, Infrastructure Outsourcing, Insurance, Spend Analytics, and Cost Modelling. She has held roles as a Business Analyst, Data Analyst, Business Intelligence Analyst, and Data Visualization Specialist. Dr. Lakshmi holds a Bachelor of Engineering (BE) in Information Technology, an MBA, a Professional Doctorate in Management, and a Doctorate in Management Studies. Currently, she is pursuing studies in Human Rights Law and Cyber Law & Forensics. Additionally, she holds various certifications, including Business Analyst/Business Analytics from Software Technology Group, SQL Server 2012, VB.NET from Software TechnologyGroup, Tableau Desktop from Tableau Software Company, ISO Certification, SharePoint 2007/2010 for Business Users, VBA, Open Office Certification. She is trained in Six Sigma with a Yellow Belt and Green Belt.


    `,
    skills: [
      "SQL",
      "Pandas",
      "Python",
      "Gen Ai",
      "Data Science",
      "BI",
      "Programming Languages",
      "Data Visualization",
      "Cyber Security",
      "Cloud Computing",
      "Statistics",
      "Big Data",
      "Data Analytics",
      "Business Analytics",
    ],
    experience: "16+ Years",
    students: "800+",
    linkedin: "https://www.linkedin.com/in/klakshmisree",
  },
  {
    id: 5,
    name: "Mrs. Zainab Sidddiqui",
    image: "/Trainers/Zainab-Siddaqui-Maam.webp",
    description: `
   Zainab Siddiqui is a driven and results-oriented Machine Learning Engineer specializing in computer vision, NLP, and reinforcement learning. With hands-on experience in tools like Python, SQL, Tableau, Power BI, and various cloud platforms, she excels at analyzing and visualizing data to empower decision-makers. Zainab holds a Master’s degree from UT Austin in Data Science & Business Analytics, enhancing her technical foundation in data analytics and machine learning. In her current role, she works on reinforcement learning, data augmentation, image classification, clustering, topic modeling, and big data analytics using SQL and Hive queries. Previously, as a Machine Learning Researcher, she contributed to projects involving text summarization, sentiment analysis, and predictive modeling. Her skill set includes computer vision, project management, and team management, and she is proficient in English, Hindi, and Urdu. Zainab’s commitment to continuous learning is reflected in her certifications, including a Post Graduate Program in Data Science and Business Analytics. Recognized for her leadership abilities and academic achievements, she is dedicated to shaping the future of machine learning through innovative projects and effective problem-solving in AI.


    `,
    skills: [
      "SQL",
      "Pandas",
      "Python",
      "Gen Ai",
      "Data Science",
      "BI",
      "Programming Languages",
      "Data Visualization",
      "Cyber Security",
      "Cloud Computing",
      "Statistics",
      "Big Data",
      "Data Analytics",
      "Business Analytics",
    ],
    experience: "16+ Years",
    students: "800+",
    linkedin: "https://www.linkedin.com/in/klakshmisree",
  },
  {
    id: 6,
    name: "Dr. Santosh Srivastava",
    image: "/Trainers/santosh.jpg",
    description:
      "Dr Santosh Srivastava is a PhD holder and has more than 12 years of experience in Training, Research, and Consultancy as Data Scientist in prestigious organizations including Metagrit Technologies, NIIT Technologies, IIT Roorkee, and ISB Mohali.",
    skills: [],
    experience: "12+ Years",
    students: "200+",
    linkedin: "#",
  },
  {
    id: 9,
    name: "Mr. Arihant Jain",
    image: "/Trainers/Bidhan-Sen-Sir.webp",
    description:
      "Mr Arihant is an accomplished Senior Data Scientist with over 12+ years of valuable experience in Machine Learning, Deep Learning, Natural Language Processing (NLP), and Time Series analysis. He is proficient in both Python and R programming languages. Throughout his career, he has worked for esteemed organizations such as CITI Bank, Bank of America, and NIIT Technologies. Furthermore, Mr Arihant has an extensive background as a corporate trainer in the Data Science domain, contributing more than 6+ years to this role. He has delivered training sessions at renowned MNCs like HCL Technologies and C-DAC. Notably, he has also had the privilege of teaching AI and ML courses to students at prestigious institutions like IITs and MIT in the USA. In addition to his training expertise, Mr Arihant possesses valuable experience in creating mock question papers and assignments for placement purposes on behalf of well-known institutes. He has also been actively involved in guiding numerous candidates in their interview preparation and conducting mock interviews. Moreover, he has been catering to international students from countries like the US, the UK, and the Middle East, providing valuable support and mentorship in the field of Data Science.",
    skills: [],
    experience: "8+ Years",
    students: "200+",
    linkedin:
      "https://www.linkedin.com/in/bidhan-sen-6589b1b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 7,
    name: "Mr. Bidhan Sen",
    image: "/Trainers/arihant.webp",
    description:
      "Bidhan Sen is an accomplished data analytics professional with a wealth of experience across tools like Power BI, Tableau, Python, SQL, Excel, and more. His career has led him through roles at Tata Consultancy Services, Brillio Technologies, and Amazon, progressing from System Engineer to Senior Data Engineer. Throughout his journey, Bidhan has developed expertise in managing ETL processes, creating dashboards and reports, conducting in-depth data analysis, and engaging with clients across diverse projects. At Brillio Technologies, he focused on using Power BI and Tableau to create insightful reports, analyze historical sales data, and develop dashboards that guided business strategies. His role at Amazon further highlights his skill in handling end-to-end ETL tasks, root cause analysis, and maintaining effective client communication. Certified as a Mi Microsoft Certified Data Analyst with the PL-300 credential, Bidhan demonstrates a strong commitment to delivering actionable insights and advancing the field of data analytics.",
    skills: [],
    experience: "8+ Years",
    students: "200+",
    linkedin: "#",
  },

  {
    id: 12,
    name: "Mr. Rohan Dixit",
    image: "/Trainers/rohandixit.png",
    description:
      "Rohan Dixit is an experienced Data Science Consultant with deep expertise in Python, SQL, Power BI, and advanced analytics. With over four years of industry experience at leading organizations like Cipla and AstraZeneca, Rohan has a proven track record in predictive modeling, statistical analysis, and data visualization. Renowned for his mentoring skills, Rohan simplifies complex concepts and helps learners achieve their goals with confidence. His hands-on experience in applying analytics to real-world problems makes him an exceptional guide for aspiring data scientists.",
    skills: [],
    experience: "10+ Years",
    students: "200+",
    linkedin: "#",
  },
];