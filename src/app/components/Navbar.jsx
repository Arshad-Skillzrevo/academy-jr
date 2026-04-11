"use client";
import React, { useState, useEffect } from "react";
import RoleModal from "./RoleModal";
import {
  ChevronDown,
  ChevronRight,
  UserCircle,
  PhoneCall,
  UserCircle2Icon,
} from "lucide-react";
import Image from "next/image";
import TopVerticalSwitcher from "./TopVerticalSwitcher";

const NAV_LINKS = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about-us" },
  {
    title: "Partner with us",
    href: "#partner",
    dropdown: [
      { title: "Academy Partner", href: "https://academy.skillzrevo.com/channel-partner" },
      { title: "Staffing Partner", href: "https://www.talent.skillzrevo.com/channel-partner" },
      { title: "Consulting Partner", href: "https://consulting.skillzrevo.com/channel-partner/" },
    ],
  },
  // { title: "Our Team", href: "/our-team" },
  { title: "Career", href: "https://academy.skillzrevo.com/work-with-us" },
  { title: "Contact us", href: "/contact-us" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDropdown = (index) =>
    setOpenDropdown(openDropdown === index ? null : index);

  const closeMenu = () => setIsMobileMenuOpen(false);

  // Close on desktop resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setIsMobileMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-dropdown-enter { animation: slideDown 0.22s cubic-bezier(0.16, 1, 0.3, 1) both; }

        /* thin scrollbar */
        .thin-scroll::-webkit-scrollbar { width: 3px; }
        .thin-scroll::-webkit-scrollbar-track { background: transparent; }
        .thin-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.3); border-radius: 99px; }

        /* burger animation */
        .hb { display:block; height:2px; width:22px; background:currentColor;
               border-radius:99px; transition:all 0.28s cubic-bezier(0.16,1,0.3,1);
               transform-origin:center; }
      `}</style>

      <header className="w-full sticky top-0 z-50">
        <TopVerticalSwitcher />

        {/* ── Main Navbar ─────────────────────────────────────────────────── */}
        <nav className="relative backdrop-blur-md bg-white text-black shadow-lg">
          <div className="mx-auto flex items-center justify-between gap-4 py-3 px-4 lg:px-8">

            {/* Logo — mobile only */}
            <a href="/" className="flex lg:hidden shrink-0">
              <div className="relative w-[160px] h-[40px]">
                <Image fill src="/Logo.png" alt="Skillzrevo"
                  className="object-contain" fetchPriority="high"
                  sizes="160px" priority />
              </div>
            </a>

            {/* ── Desktop layout ─────────────────────────────────────────── */}
            <div className="hidden lg:flex items-center justify-between flex-1">
              {/* Nav links */}
              <div className="flex items-center gap-1">
                {NAV_LINKS.map((link, i) =>
                  link.dropdown ? (
                    <div key={link.title} className="relative group h-full flex items-center">
                      <button className="flex items-center text-gray-900 text-sm px-3 py-2 hover:text-[#1d8fff] transition-colors rounded-lg hover:bg-gray-50 whitespace-nowrap">
                        {link.title}
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                      </button>
                      {/* Hover dropdown */}
                      <div className="absolute top-full left-0 mt-2 w-52 rounded-xl shadow-xl bg-white border border-gray-100 overflow-hidden opacity-0 invisible scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 transition-all duration-200 origin-top z-50">
                        {link.dropdown.map((item) => (
                          <a key={item.title} href={item.href}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-[#1d8fff] hover:text-white transition-colors">
                            <ChevronRight className="h-3 w-3 opacity-60" />
                            {item.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a key={link.title} href={link.href}
                      className="text-gray-900 text-sm px-3 py-2 hover:text-[#1d8fff] transition-colors rounded-lg hover:bg-gray-50 whitespace-nowrap">
                      {link.title}
                    </a>
                  )
                )}
              </div>

              {/* CTA buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <button onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#1d8fff] text-[#1d8fff] text-sm font-medium hover:bg-[#1d8fff] hover:text-white transition-all duration-200 whitespace-nowrap">
                  <UserCircle2Icon className="h-4 w-4" />
                  Log in
                </button>
                <a href="/schedule-an-appointment"
                  className="flex items-center gap-2 px-4 py-2 rounded-md text-white text-sm font-medium bg-gradient-to-r from-[#1d8fff] to-[#0069d3] hover:from-[#0060c0] hover:to-[#1d8fff] shadow-md hover:shadow-lg transition-all duration-200 whitespace-nowrap border border-[#1d8fff]">
                  <PhoneCall className="h-4 w-4" />
                  Schedule Appointment
                </a>
              </div>
            </div>

            {/* ── Mobile: right side cluster ─────────────────────────────── */}
            <div className="flex lg:hidden items-center gap-2">
              {/* Small "Book a Call" pill */}
              {/* <a href="/schedule-an-appointment"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white text-xs font-semibold bg-gradient-to-r from-[#1d8fff] to-[#0069d3] shadow-md whitespace-nowrap">
                <PhoneCall className="h-3.5 w-3.5" />
                Book a Call
              </a> */}

              {/* Animated burger */}
              <button
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((o) => !o)}
                className={`flex flex-col items-center justify-center gap-[5px] h-9 w-9 rounded-lg transition-colors duration-200 ${
                  isMobileMenuOpen ? "bg-[#1d8fff]/10 text-[#1d8fff]" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <span className="hb" style={isMobileMenuOpen ? { transform: "translateY(7px) rotate(45deg)" } : {}} />
                <span className="hb" style={isMobileMenuOpen ? { opacity: 0, transform: "scaleX(0)" } : {}} />
                <span className="hb" style={isMobileMenuOpen ? { transform: "translateY(-7px) rotate(-45deg)" } : {}} />
              </button>
            </div>
          </div>

          {/* ── Mobile dropdown — slides from nav bottom ──────────────────── */}
          {isMobileMenuOpen && (
            <div className="nav-dropdown-enter lg:hidden absolute left-0 right-0 top-full z-40">
              {/* Top accent line */}
              <div className="h-[2px] bg-gradient-to-r from-white/60 via-white to-white/60" />

              {/* Blue gradient panel */}
              <div className="bg-gradient-to-b from-[#1d8fff] to-[#0069d3] shadow-2xl">
                <div className="thin-scroll overflow-y-auto max-h-[calc(100svh-130px)] px-4 pt-2">

                  {NAV_LINKS.map((link, i) =>
                    link.dropdown ? (
                      /* Accordion item */
                      <div key={link.title} className="border-b border-white/10 last:border-0">
                        <button
                          onClick={() => toggleDropdown(i)}
                          className="flex items-center justify-between w-full py-3.5 text-sm font-semibold text-white hover:text-white/80 transition-colors"
                        >
                          {link.title}
                          <ChevronDown
                            className={`h-4 w-4 shrink-0 transition-transform duration-300 text-white/70 ${
                              openDropdown === i ? "rotate-180 !text-white" : ""
                            }`}
                          />
                        </button>
                        {/* Accordion body */}
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openDropdown === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                        }`}>
                          <div className="ml-1 mb-3 border-l-2 border-white/20 pl-4 space-y-0.5">
                            {link.dropdown.map((item) => (
                              <a key={item.title} href={item.href} onClick={closeMenu}
                                className="flex items-center gap-2 py-2 text-sm text-white/80 hover:text-white transition-colors group">
                                <span className="h-1.5 w-1.5 rounded-full bg-white/40 shrink-0 group-hover:bg-white transition-colors" />
                                {item.title}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Flat link */
                      <a key={link.title} href={link.href} onClick={closeMenu}
                        className="flex items-center py-3.5 text-sm font-semibold text-white hover:text-white/80 transition-colors border-b border-white/10 last:border-0">
                        {link.title}
                      </a>
                    )
                  )}
                </div>

                {/* Sticky bottom CTA row */}
                <div className="px-4 py-4 flex gap-3 border-t border-white/15 bg-[#0060c0]/40 backdrop-blur-sm">
                  <button
                    onClick={() => { setIsModalOpen(true); closeMenu(); }}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-[#1d8fff] text-sm font-semibold hover:bg-gray-50 transition-all duration-200 shadow-md"
                  >
                    <UserCircle className="h-4 w-4" />
                    Log in
                  </button>
                  <a href="/schedule-an-appointment" onClick={closeMenu}
                    className="flex items-center justify-center gap-2 py-2.5 px-2 rounded-xl bg-white/20 hover:bg-white/30 text-white text-sm font-semibold transition-all duration-200 backdrop-blur-sm">
                    <PhoneCall className="h-4 w-4" />
                    Schedule Appointment
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Dim backdrop — tap to close */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed  bg-black/20 z-30"
            onClick={closeMenu}
          />
        )}

        <RoleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </header>
    </>
  );
}