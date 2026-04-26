// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaYoutube,
//   FaInstagram,
// } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-[#0e457b] text-white">
//       {/* Newsletter Section */}
//       <div className="bg-[#1d8fff] py-8 px-4">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
//           <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white heading-oswald uppercase">
//             Follow Us on Social Media
//           </h2>
//           {/* <div className="flex flex-col sm:flex-row w-full md:w-auto">
//             <input
//               type="email"
//               placeholder="Email address"
//               className="w-full sm:w-64 p-3 rounded text-slate-900 border-2 border-r-0  border-white bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
//             />
//             <button className="w-full sm:w-auto bg-[#ff5e14] text-white font-bold py-3 px-6 rounded hover:bg-[#e65211] transition-colors duration-200">
//               Submit
//             </button>
//           </div> */}
//           <div className="flex space-x-2 text-white">
//             <a
//               href="https://www.facebook.com/skillzrevo/"
//               className="hover:bg-[#ff5e14] p-2 rounded-md transition-colors duration-200"
//             >
//               <FaFacebookF className="size-6" />
//             </a>
//             <a
//               href="https://x.com/skillzrevo89393"
//               className="hover:bg-[#ff5e14] p-2 rounded-md transition-colors duration-200"
//             >
//               <FaTwitter className="size-6" />
//             </a>
//             <a
//               href="https://www.linkedin.com/company/skillzrevo/"
//               className="hover:bg-[#ff5e14] p-2 rounded-md transition-colors duration-200"
//             >
//               <FaLinkedinIn className="size-6" />
//             </a>
//             <a
//               href="https://www.instagram.com/skillzrevo"
//               className="hover:bg-[#ff5e14] p-2 rounded-md transition-colors duration-200"
//             >
//               <FaInstagram className="size-6" />
//             </a>
//             <a
//               href="https://www.youtube.com/@SkillzRevo"
//               className="hover:bg-[#ff5e14] p-2 rounded-md transition-colors duration-200"
//             >
//               <FaYoutube className="size-6" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto max-md:px-4">
//         <div className="flex max-md:flex-col justify-between w-[100%] gap-6 md:gap-8">
//           {/* Logo and Description */}
//           <div className="bg-[#ff5e14] py-6 px-2 lg:col-span-1 flex flex-col justify-between md:min-w-[220px] md:max-w-[250px]">
//             <img
//               src="/SkillzRevo_White.webp"
//               alt="SkillzRevo Logo"
//               className="w-[80%] mb-5 self-center object-cover"
//             />

//             <p className="text-sm font-light text-center text-white leading-relaxed">
//               SkillzRevo Academy Platform offers global access, connecting
//               experienced trainers in emerging technologies with young graduates
//               and working professionals who seek to upskill and enhance their
//               impact within their organizations.
//             </p>
//           </div>

//           {/* Links Columns */}
//           <div className="flex max-md:flex-col justify-between w-[100%] gap-5 py-12">
//             {/* Explore */}
//             <div>
//               <h4 className="text-lg font-bold mb-4">Explore</h4>
//               <ul className="text-sm space-y-2 custom-bullet">
//                 <li>
//                   <a href="/about-skillzrevo" className="hover:underline">
//                     About SkillzRevo
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/explore-courses" className="hover:underline">
//                     Explore Courses
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/contact-us" className="hover:underline">
//                     Contact us
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/our-services" className="hover:underline">
//                     Our Services
//                   </a>
//                 </li>
//                 {/* <li><a href="#" className="hover:underline">Meet Our Trainers</a></li> */}
//                 {/* <li>
//                   <a href="/blog" className="hover:underline">
//                     News & Blogs
//                   </a>
//                 </li> */}
//                 <li>
//                   <a href="/certificate-verification" className="hover:underline">
//                     Certificate Verification
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/work-with-us" className="hover:underline">
//                     Work with Us
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/meet-our-trainers" className="hover:underline">
//                     Meet Our Trainers
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* For Businesses */}
//             <div>
//               <h4 className="text-lg font-bold mb-4">For Businesses</h4>
//               <ul className="text-sm space-y-2 custom-bullet">
//                 <li>
//                   <a href="academy.skillzrevo.com" className="hover:underline">
//                     SkillzRevo Academy
//                   </a>
//                 </li>

//                 <li>
//                   <a href="corporatetraining.skillzrevo.com" className="hover:underline">
//                     Corporate Training
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://talent.skillzrevo.com/"
//                     className="hover:underline"
//                   >
//                     Staffing
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://consulting.skillzrevo.com/"
//                     className="hover:underline"
//                   >
//                     Consulting
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Services */}
//             <div>
//               <h4 className="text-lg font-bold mb-4">Partner with Us</h4>
//               <ul className="text-sm space-y-2 custom-bullet">
//                 <li>
//                   <a href="channel-partner" className="hover:underline">
//                     Training Channel Partner
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://talent.skillzrevo.com/channel-partner/"
//                     className="hover:underline"
//                   >
//                     Staffing Channel Partner
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://consulting.skillzrevo.com/channel-partner/"
//                     className="hover:underline"
//                   >
//                     Consulting Channel Partner
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             {/* Courses */}
//             <div>
//               <h4 className="text-lg font-bold mb-4">Courses</h4>
//               <ul className="text-sm space-y-2 custom-bullet">
//                 <li>
//                   <a
//                     href="/courses/advanced-ai-and-generative-ai-program"
//                     className="hover:underline"
//                   >
//                     Advanced AI and Generative AI
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/courses/applied-data-science-with-ai"
//                     className="hover:underline"
//                   >
//                     Applied Data Science with AI
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/courses/applied-data-science-with-python"
//                     className="hover:underline"
//                   >
//                     Applied Data Science with Python
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/courses/mastering-in-business-intelligence-program"
//                     className="hover:underline"
//                   >
//                     Mastering in Business Intelligence
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/courses/big-data-with-hadoop-spark-program/"
//                     className="hover:underline"
//                   >
//                     Big Data with Hadoop & Spark Program
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/courses/certified-network-security-and-ethical-hacking-specialist-cnsehs"
//                     className="hover:underline"
//                   >
//                     Certified Network Security and Ethical Hacking Specialist
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/courses/mastering-in-cyber-security-forensics"
//                     className="hover:underline"
//                   >
//                     Mastering in Cyber Security & Forensics
//                   </a>
//                 </li>

//                 <li className="mt-4">
//                   <a
//                     href="/explore-courses"
//                     className="inline-block text-white font-bold hover:underline"
//                   >
//                     View all courses &rarr;
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Copyright Bar */}
//       <div className="max-w-7xl grid grid-cols-1 md:grid-cols-3 lg:col-span-4 gap-2 md:gap-8 content-center items-center justify-center mx-auto max-md:px-4  text-center border-t border-gray-700">
//         <div className="flex md:flex-col justify-center md:justify-end text-xs max-md:mx-auto max-md:bg-transparent text-gray-400 md:text-white bg-[#ff5e14] py-4 gap-2 mt-2 md:mt-0 w-[250px]">
//           <a
//             href="/ShippingandDelivery"
//             className="text-xs  block hover:underline"
//           >
//             Shipping and Delivery
//           </a>
//           <a
//             href="/cancellation-refund-policy"
//             className=" text-xs  block hover:underline"
//           >
//             Refund Policy
//           </a>
//         </div>
//         <p className="text-xs text-gray-400">
//           Copyright © 2026 SKILLZREVO. All Rights Reserved
//         </p>
//         <div className="flex justify-center md:justify-end text-xs text-gray-400 gap-4 mt-2 md:mt-0 max-md:pb-4">
//           <a href="/TermsandConditions" className="hover:underline">
//             Terms & Conditions
//           </a>
//           <a href="/PrivacyPolicy" className="hover:underline">
//             Privacy Policy
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }


"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Facebook, Twitter, Linkedin, Youtube, Instagram,
  MapPin, Phone, Mail, Globe, ArrowRight, Sparkles,
  Rocket, Star, Heart,
} from "lucide-react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";


/* ─────────────────────────────────────────
   GOOGLE FONTS
───────────────────────────────────────── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');
    @keyframes ftFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
    @keyframes ftSpin  { to{transform:rotate(360deg)} }
    @keyframes ftPulse { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.5);opacity:.5} }
    .ft-float { animation: ftFloat 3.5s ease-in-out infinite; }
    .ft-spin  { animation: ftSpin  9s linear infinite; }
    .ft-pulse { animation: ftPulse 1.8s ease-in-out infinite; }
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

/* ─────────────────────────────────────────
   WAVY TOP
───────────────────────────────────────── */
function WavyTop() {
  return (
    <div style={{ lineHeight: 0, marginBottom: -1 }} aria-hidden="true">
      <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: "100%", display: "block" }}>
        <path d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,0 L0,0 Z" fill="white" />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────
   LINK COLUMN
───────────────────────────────────────── */
function LinkColumn({ title, color = B.violet, links }) {
  return (
    <div>
      <h4 style={{
        fontFamily: "'Fredoka One', cursive",
        fontSize: "1.05rem",
        color: "white",
        marginBottom: 16,
        display: "flex", alignItems: "center", gap: 7,
      }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: color, display: "inline-block", flexShrink: 0 }} />
        {title}
      </h4>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 9 }}>
        {links.map(({ label, href }) => (
          <li key={label}>
            <a href={href}
              style={{
                color: "#c4b5fd",
                fontSize: 13,
                fontWeight: 700,
                textDecoration: "none",
                fontFamily: "'Nunito', sans-serif",
                display: "inline-flex", alignItems: "center", gap: 5,
                transition: "color 0.18s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = color; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#c4b5fd"; }}
            >
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: color, flexShrink: 0, opacity: 0.7 }} />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────────────────────────────────────
   SOCIAL BUTTON
───────────────────────────────────────── */
function SocialBtn({ href, Icon, color }) {
  return (
    <motion.a
      href={href}
      target="_blank" rel="noopener noreferrer"
      whileHover={{ scale: 1.15, y: -3 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
      style={{
        width: 40, height: 40, borderRadius: 12,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: `${color}22`,
        border: `1.5px solid ${color}40`,
        color: color,
        textDecoration: "none",
      }}
    >
      <Icon size={17} strokeWidth={2} />
    </motion.a>
  );
}

/* ─────────────────────────────────────────
   FOOTER
───────────────────────────────────────── */
export default function Footer() {
  return (
    <>
      <FontLoader />
      <WavyTop />

      <footer
        style={{
          background: `linear-gradient(160deg, ${B.navy} 0%, #1a0f3c 50%, #0c1e3a 100%)`,
          fontFamily: "'Nunito', sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Dotted texture */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `radial-gradient(circle, rgba(124,58,237,0.12) 1.5px, transparent 1.5px)`,
          backgroundSize: "28px 28px",
        }} aria-hidden="true" />

        {/* Blobs */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }} aria-hidden="true">
          <div style={{ position: "absolute", top: -60, right: -60, width: 360, height: 360, borderRadius: "50%",
            background: `radial-gradient(circle, ${B.violet}18, transparent 70%)`, filter: "blur(55px)" }} />
          <div style={{ position: "absolute", bottom: -40, left: -40, width: 300, height: 300, borderRadius: "50%",
            background: `radial-gradient(circle, ${B.orange}12, transparent 70%)`, filter: "blur(50px)" }} />
        </div>

        {/* Spinning stars — desktop */}
        <div className="hidden lg:block" aria-hidden="true">
          {[
            { color: B.amber,  top: "12%", left: "2%",   dur: "8s"  },
            { color: B.rose,   top: "70%", left: "4%",   dur: "11s" },
            { color: B.sky,    top: "8%",  right: "3%",  dur: "9s"  },
            { color: B.mint,   top: "72%", right: "5%",  dur: "13s" },
            { color: B.purple, top: "40%", left: "1%",   dur: "10s" },
          ].map(({ color, top, left, right, dur }, i) => (
            <div key={i} className="ft-spin absolute pointer-events-none" style={{ top, left, right, animationDuration: dur }}>
              <Star size={i % 2 === 0 ? 13 : 10} fill={color} color={color} />
            </div>
          ))}
        </div>

        {/* ── SOCIAL STRIP ── */}
        <div style={{ position: "relative", zIndex: 10, borderBottom: `1px solid rgba(255,255,255,0.08)` }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 24px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div className="ft-float" style={{ display: "flex" }}>
                  <Sparkles size={18} style={{ color: B.amber }} />
                </div>
                <p style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.15rem", color: "white", margin: 0 }}>
                  Follow Us on Social Media
                </p>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <SocialBtn href="https://www.facebook.com/skillzrevo/"       Icon={FaFacebook}  color={B.sky}    />
                <SocialBtn href="https://x.com/skillzrevo89393"              Icon={BsTwitterX}   color="#60a5fa"  />
                <SocialBtn href="https://www.linkedin.com/company/skillzrevo/" Icon={FaLinkedin} color={B.sky}   />
                <SocialBtn href="https://www.instagram.com/skillzrevo"       Icon={FaInstagram} color={B.rose}   />
                <SocialBtn href="https://www.youtube.com/@SkillzRevo"        Icon={FaYoutube}   color={B.rose}   />
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div style={{ position: "relative", zIndex: 10, maxWidth: 1200, margin: "0 auto", padding: "56px 24px 48px" }}>
          <div className="grid grid-col-1 md:grid-col-2 gap-20">

            {/* ── BRAND COLUMN ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Logo */}
              <div>
                <img src="/SkillzRevo_White.webp" alt="SkillzRevo Logo"
                  style={{ width: 160, objectFit: "contain", marginBottom: 16 }} />
                <p style={{ fontSize: 13, color: "#a78bfa", lineHeight: 1.75, fontWeight: 700 }}>
                  SkillzRevo Academy Junior — live coding &amp; AI classes for kids aged 6–17. Turning screen time into future-ready skills.
                </p>
              </div>

              {/* Contact info */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { Icon: Mail,  label: "enquire@skillzrevo.com",     href: "mailto:enquire@skillzrevo.com" },
                  { Icon: Phone, label: "+91 96323 47896",             href: "tel:+919632347896"             },
                  { Icon: Globe, label: "academyjunior.skillzrevo.com", href: "https://academyjunior.skillzrevo.com" },
                ].map(({ Icon, label, href }) => (
                  <a key={label} href={href}
                    style={{ display: "flex", alignItems: "center", gap: 9, color: "#c4b5fd", fontSize: 12, fontWeight: 700, textDecoration: "none" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = B.violet}
                    onMouseLeave={(e) => e.currentTarget.style.color = "#c4b5fd"}
                  >
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: `${B.violet}22`,
                      border: `1px solid ${B.violet}35`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={13} style={{ color: B.violet }} strokeWidth={2.2} />
                    </div>
                    {label}
                  </a>
                ))}
              </div>

              {/* Pulsing dots */}
              <div style={{ display: "flex", gap: 6 }} aria-hidden="true">
                {[B.violet, B.sky, B.orange, B.mint, B.rose].map((c, i) => (
                  <div key={i} className="ft-pulse" style={{ width: 7, height: 7, borderRadius: "50%", background: c, animationDelay: `${i * 0.18}s` }} />
                ))}
              </div>
            </div>

            {/* ── LINKS GRID ── */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "32px 24px" }}>

              {/* Explore */}
              <LinkColumn title="Explore" color={B.violet} links={[
                { label: "Home",                    href: "/"                                              },
                { label: "About Us",                href: "https://academyjunior.skillzrevo.com/about-us"  },
                { label: "Contact Us",              href: "https://academyjunior.skillzrevo.com/contact-us" },
                // { label: "Explore Courses",         href: "/explore-courses"                               },
                // { label: "Certificate Verification", href: "/certificate-verification"                     },
                // { label: "Work with Us",            href: "/work-with-us"                                  },
                // { label: "Meet Our Trainers",       href: "/meet-our-trainers"                             },
              ]} />

              {/* Courses */}
              <LinkColumn title="Our Courses" color={B.sky} links={[
                { label: "AI Innovators",           href: "https://academyjunior.skillzrevo.com/courses/ai-innovators"               },
                { label: "Programming Masters",     href: "https://academyjunior.skillzrevo.com/courses/programming-masters"         },
                { label: "Tech Titans",             href: "https://academyjunior.skillzrevo.com/courses/tech-titans"                 },
                { label: "Full Stack Cloud Creators", href: "https://academyjunior.skillzrevo.com/courses/full-stack-cloud-creators" },
                { label: "Data & AI Innovators",    href: "https://academyjunior.skillzrevo.com/courses/data-ai-innovators"          },
                { label: "View All Courses →",      href: "/explore-courses"                                                         },
              ]} />

              {/* For Businesses */}
              <LinkColumn title="For Businesses" color={B.orange} links={[
                { label: "SkillzRevo Academy",  href: "https://academy.skillzrevo.com"          },
                { label: "Corporate Training",  href: "https://corporatetraining.skillzrevo.com" },
                { label: "Staffing",            href: "https://talent.skillzrevo.com/"           },
                { label: "Consulting",          href: "https://consulting.skillzrevo.com/"       },
              ]} />

              {/* Partner with Us */}
              <LinkColumn title="Partner with Us" color={B.mint} links={[
                { label: "Training Channel Partner",   href: "https://academy.skillzrevo.com/channel-partner"                                     },
                { label: "Staffing Channel Partner",   href: "https://talent.skillzrevo.com/channel-partner/"       },
                { label: "Consulting Channel Partner", href: "https://consulting.skillzrevo.com/channel-partner/"   },
              ]} />

            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div style={{
          position: "relative", zIndex: 10,
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "18px 24px",
            display: "flex", flexWrap: "wrap", alignItems: "center",
            justifyContent: "space-between", gap: 12 }}>

            {/* Copyright */}
            <p style={{ fontSize: 12, color: "#6b7280", margin: 0, fontWeight: 700 }}>
              © 2026 SkillzRevo Solutions Pvt. Ltd. All Rights Reserved
            </p>

            {/* Legal links */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
              {[
                { label: "Privacy Policy",           href: "/privacypolicy"                   },
                { label: "Terms & Conditions",       href: "/TermsandConditions"               },
                { label: "Refund Policy",            href: "/cancellation-refund-policy"       },
                { label: "Shipping & Delivery",      href: "/ShippingandDelivery"              },
              ].map(({ label, href }) => (
                <a key={label} href={href}
                  style={{ fontSize: 12, color: "#6b7280", fontWeight: 700, textDecoration: "none" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = B.violet}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#6b7280"}
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Made with love */}
            
          </div>
        </div>

      </footer>
    </>
  );
}