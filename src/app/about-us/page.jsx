// app/about-skillzrevo/page.jsx
export const metadata = {
  title: "About SkillzRevo - SkillzRevo",
  description:
    "SKILLZREVO SOLUTION PVT. LTD Revolutionizing Skills Acquisition is an EdTech Organisation providing an online learning platform for aspiring learners in",
  robots:
    "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://academy.skillzrevo.com/about-skillzrevo/",
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    url: "https://academy.skillzrevo.com/about-skillzrevo/",
    siteName: "SkillzRevo",
    title: "About SkillzRevo - SkillzRevo",
    description:
      "SKILLZREVO SOLUTION PVT. LTD Revolutionizing Skills Acquisition is an EdTech Organisation providing an online learning platform for aspiring learners in",
    images: [
      {
        url: "/assets/aboutus.webp",
        width: 417,
        height: 371,
        alt: "About SkillzRevo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About SkillzRevo - SkillzRevo",
    description:
      "SKILLZREVO SOLUTION PVT. LTD Revolutionizing Skills Acquisition is an EdTech Organisation providing an online learning platform for aspiring learners in",
    images: [
      "/assets/aboutus.webp",
    ],
  },
};

import {
  FaLaptopCode,
  FaUserTie,
  FaCloud,
  FaRocket,
  FaHandshake,
  FaBullseye,
  FaGlobe,
  FaCheckCircle,
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobeAmericas,
  FaArrowRight,
  FaBalanceScale,
  FaLightbulb,
  FaEye,
  FaUsers,
  FaShieldAlt,
  FaSearch,
  FaAward,
  FaGlobeAsia,
  FaBook,
} from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import PartneringCompaniesSlider from "../components/PartneringCompaniesSlider";

import { FaChalkboardTeacher, FaMedal } from "react-icons/fa";
import WhoWeAre from "./WhoWeAre";

const AboutSkillzrevo = () => {
  const primaryColor = "#1d8fff";
  const secondaryColor = "#ff6a1d";
  const divisions2 = [
    {
      title: "SkillzRevo Academy (Training & Upskilling)",
      desc: "Future-proof your career with industry-aligned training programs in Data Science, Artificial Intelligence, Cybersecurity, Generative AI, Cloud, and more.",
      points: [
        "NASSCOM-certified trainers & curriculum",
        "Hands-on learning & real-world case studies",
        "Customized corporate training solutions",
      ],
      cta: { label: "Explore Courses →", href: "https://academy.skillzrevo.com" },
    },
    {
      title: "SkillzRevo Talent (Staffing & Workforce Solutions)",
      desc: "We help organizations build high-performing teams through end-to-end talent solutions:",
      points: [
        "Permanent & contract staffing",
        "Recruitment Process Outsourcing (RPO)",
        "Remote & offshore team hiring",
        "Executive & leadership hiring",
      ],
      cta: { label: "Hire Talent →", href: "https://talent.skillzrevo.com/" },
    },
    {
      title: "SkillzRevo Consulting (Digital Transformation & Analytics)",
      desc: "Partnering with enterprises to unlock business growth using data, technology, and insights:",
      points: [
        "AI & analytics implementation",
        "Business intelligence & automation",
        "Cloud migration & cybersecurity solutions",
        "Digital transformation strategy",
      ],
      cta: {
        label: "Explore Consulting →",
        href: "https://consulting.skillzrevo.com/",
      },
    },
  ];

  const divisions = [
    {
      icon: FaGraduationCap,
      title: "SkillzRevo Academy",
      description:
        "Delivering outcome-driven training programs in Data Science, Artificial Intelligence, Cybersecurity, Generative AI, and more—designed to future-proof careers and upskill the workforce.",
      url: "https://skillzrevo.com/",
    },
    {
      icon: FaUserTie,
      title: "SkillzRevo Talent",
      description:
        "We specialize in strategic staffing, recruitment, and talent management solutions. Whether it’s project-based, contract, or permanent hiring—we help organizations build high-performance teams.",
      url: "https://talent.skillzrevo.com/",
    },
    {
      icon: FaCloud,
      title: "SkillzRevo Consulting",
      description:
        "Our consulting arm partners with enterprises to enable digital transformation through advanced analytics, AI implementation, cloud migration, and cybersecurity solutions—built on deep domain knowledge and strategic insights.",
      url: "https://consulting.skillzrevo.com/",
    },
  ];
  const values = [
    {
      title: "Honesty",
      desc: "We are committed to delivering accurate information, fair practices, and genuine solutions across all our verticals.",
      icon: (
        <FaHandshake className="text-[#1d8fff] min-w-[40px] min-h-[40px]" />
      ),
    },
    {
      title: "Integrity",
      desc: "We act responsibly and ethically, ensuring our actions reflect our words and remain accountable for their impact.",
      icon: (
        <FaBalanceScale className="text-[#ff6a1d] min-w-[40px] min-h-[40px]" />
      ),
    },
    {
      title: "Innovation",
      desc: "We foster innovation by integrating emerging technologies and forward-thinking approaches across all verticals.",
      icon: (
        <FaLightbulb className="text-[#1d8fff] min-w-[40px] min-h-[40px]" />
      ),
    },
    {
      title: "Diversity & Inclusion",
      desc: "We embrace diverse perspectives and create inclusive opportunities for learners, professionals, and partners.",
      icon: <FaUsers className="text-[#ff6a1d] min-w-[40px] min-h-[40px]" />,
    },
    {
      title: "Reliability",
      desc: "We are dependable and results-driven, ensuring consistent delivery of impactful solutions across training, staffing, and consulting.",
      icon: (
        <FaShieldAlt className="text-[#1d8fff] min-w-[40px] min-h-[40px]" />
      ),
    },
    {
      title: "Transparency",
      desc: "We believe in open communication, complete clarity, and fairness with learners, clients, and partners.",
      icon: <FaSearch className="text-[#ff6a1d] min-w-[40px] min-h-[40px]" />,
    },
    {
      title: "Excellence & Expertise",
      desc: "We strive for excellence through deep domain expertise, practical experience, and industry insights.",
      icon: <FaAward className="text-[#1d8fff] min-w-[40px] min-h-[40px]" />,
    },
    {
      title: "Collaboration",
      desc: "We believe in the power of teamwork, building strong partnerships with learners, clients, and industry leaders to achieve shared success.",
      icon: <FaGlobeAsia className="text-[#ff6a1d] min-w-[40px] min-h-[40px]" />,
    },
    {
      title: "Continuous Learning & Growth",
      desc: "We are dedicated to fostering lifelong learning, encouraging adaptability, and empowering individuals to grow in an ever-evolving professional landscape.",
      icon: <FaBook className="text-[#1d8fff] min-w-[40px] min-h-[40px]" />,
    },

  ];

  const coreValues = [
    { icon: FaRocket, text: "Innovation-First" },
    { icon: FaHandshake, text: "Integrity & Trust" },
    { icon: FaBullseye, text: "Client-Centricity" },
    { icon: FaLightbulb, text: "Continuous Learning" },
    { icon: FaGlobe, text: "Impact-Driven Approach" },
  ];

  const advantages = [
    "5000+ Professionals Empowered",
    "100+ Global Corporate Clients",
    "Expert-Led Curriculum & Consulting",
    "Customizable Workforce Solutions",
    "Industry Partnerships & Real Outcomes",
  ];

  const timelineEvents = [
    {
      year: "Pre-July 2024",
      text: "Operated under a partnership model delivering enterprise-driven training and workforce solutions.",
    },
    {
      year: "July 2024",
      text: "Incorporated as SkillzRevo Solutions Pvt Ltd to strengthen our vision and expand our global footprint.",
    },

    {
      year: "September 2024",
      text: "Launched SkillzRevo Academy, introducing flagship AI & Data Science training programs with NASSCOM-aligned curriculum.",
    },
    {
      year: "October 2024",
      text: "Embarked on global expansion into South Africa, Middle East, UK, and Southeast Asia, strengthening our presence across emerging and developed markets.",
    },
    {
      year: "January 2025",
      text: "Expanded into SkillzRevo Consulting and SkillzRevo Talent, offering enterprise consulting and strategic staffing solutions.",
    },
    {
      year: "July 2025",
      text: "Successfully onboarded Fortune 100 clients and institutional partners, accelerating our B2B growth strategy.",
    },
    {
      year: "August 2025",
      text: "Achieved a major milestone with 5,000+ professionals empowered and 100+ corporate clients served globally.",
    },
  ];

  const testimonials = [
    {
      quote:
        "SkillzRevo helped us upskill over 150 employees in just 3 months with real-world AI implementation strategies. Excellent experience!",
      author: "Head of L&D, Leading IT Firm",
    },
    {
      quote:
        "Their consulting support on data transformation projects helped us unlock operational efficiency and cost savings.",
      author: "VP Technology, Retail Enterprise",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* 1. Hero Section / Company Snapshot */}
      <div className="flex flex-col bg-gradient-to-tr from-blue-200 via-blue-100 to-orange-300">
        <section className="flex items-center justify-between px-6 md:pt-8 pt-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 gap-4 max-md:flex flex-col max-md:items-center text-center md:text-left max-md:py-18">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black tracking-tight uppercase leading-tighter heading-oswald">
                Empowering the Future with Skills, Talent & Technology
              </h1>
              <p className="my-6 max-md:mx-5 text-gray-600 text-lg max-sm:text-sm leading-tight tracking-tight">
                At SkillzRevo Solutions Pvt Ltd, we are redefining how
                individuals, professionals, and organizations evolve — through
                cutting-edge training, intelligent staffing solutions, and
                strategic consulting services.
              </p>

              <div className="my-6 flex gap-2 sm:gap-10 items-center max-md:justify-center">
                <a
                  href="#divisions"
                  className="flex justify-center items-center gap-2  max-sm:text-sm font-[500] tracking-wide bg-[#1d8fff] border-2 border-[#1d8fff] hover:bg-transparent  text-white sm:px-6 sm:py-3 px-3 py-2 rounded shadow transition hover:text-[#1d8fff]"
                >
                  Explore Our Divisions <ArrowRightIcon className="w-5 h-5" />
                </a>
                <a
                  href="/contact-us"
                  className="flex justify-center items-center gap-2 max-sm:text-sm font-[500] tracking-wide bg-[#1d8fff] border-2 border-[#1d8fff] hover:bg-transparent  text-white sm:px-6 sm:py-3 px-3 py-2 rounded shadow transition hover:text-[#1d8fff]"
                >
                  Get in Touch <ArrowRightIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="relative block max-md:hidden w-[550px]">
              <Image
                priority
                src="/assets/aboutus.webp"
                alt="Learning illustration"
                height={550}
                width={550}
              />
            </div>
          </div>
        </section>
      </div>
      <div className="bg-[#1d8fff]">
        <span className="block lg:text-2xl text-white font-bold max-w-7xl mx-auto text-center py-4 uppercase">
          SkillzRevo stands for Skillz + Revolution — embodying our mission to
          revolutionize skill acquisition, talent solutions, and enterprise
          consulting in a digital-first economy.
        </span>
      </div>
      <hr className=" border-gray-400" />

      {/* Main Content Container */}
      <div className="bg-white">
        {/* 2. Who We Are */}

        <WhoWeAre />

        

        <section className="py-20 bg-gray-50" id="about">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative w-full h-[500px]">
              <Image
                src="/corporate.jpg" // <-- replace with your image
                alt="About SkillzRevo"
                fill
                className="object-cover rounded-2xl shadow-lg"
                quality={25}
              />
            </div>

            {/* Right Side - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase">
                About <span className="text-[#1d8fff]">SkillzRevo</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At{" "}
                <span className="font-semibold">
                  SkillzRevo Solutions Pvt Ltd
                </span>
                , we are a global leader in{" "}
                <span className="text-orange-500">
                  Training, Staffing, and Consulting
                </span>
                , empowering individuals, professionals, and organizations to
                thrive in today’s digital-first world. Our commitment lies in
                revolutionizing learning, workforce enablement, and enterprise
                growth through cutting-edge technologies and industry-driven
                expertise.
              </p>

              {/* Highlights with Icons */}
              <div className="grid sm:grid-cols-2 gap-6 mt-6">
                <div className="flex items-start gap-4">
                  <FaUsers className="text-[#1d8fff] text-3xl min-w-6 min-h-6" />
                  <p className="text-gray-700">
                    Led by visionary <strong>Ph.D. & IIT professionals</strong>{" "}
                    with decades of experience.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <FaChalkboardTeacher className="text-orange-500 text-3xl min-w-6 min-h-6" />
                  <p className="text-gray-700">
                    Specialized in <strong>classroom & online training</strong>{" "}
                    with NASSCOM-certified courses.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <FaLightbulb className="text-[#1d8fff] text-3xl min-w-6 min-h-6" />
                  <p className="text-gray-700">
                    Expertise in{" "}
                    <strong>
                      AI, ML, Cybersecurity, IoT, Robotics, Blockchain
                    </strong>{" "}
                    and more.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <FaMedal className="text-orange-500 text-3xl min-w-6 min-h-6" />
                  <p className="text-gray-700">
                    Recognized as a{" "}
                    <strong>NASSCOM Member & Licensed Training Partner</strong>.
                  </p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mt-6">
                With innovation, continuous learning, and transformation at our
                core, our mission is to empower individuals, professionals, and
                enterprises to lead, adapt, and succeed in today’s evolving
                digital economy.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* <hr className=" border-gray-200" /> */}

      <div className="bg-white">
        {/* 3. Our Divisions */}
        {/* <div id="divisions" className="my-6 relative bg-gradient-to-tl from-blue-400 via-blue-800 to-blue-400">
        <div className="absolute inset-0 bg-[url('/BG-GRID.svg')] bg-contain  opacity-20  z-1"></div>

        <section className="relative py-16 max-w-7xl mx-auto px-2 z-20">

          <div className="text-center">
            <h2 className="text-3xl font-[#1d8fff]  text-white sm:text-5xl heading-oswald">
              Our Divisions
            </h2>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {divisions.map((division, index) => (
              <a key={index} href={division.url} className=" flex flex-col items-center text-center p-6 text-[#1d8fff] mb-4 bg-white rounded shadow-lg transform transition-transform duration-300 hover:scale-105">
                <div className="flex-shrink-0">
                  <division.icon size={48} style={{ color: '#1d8fff' }} />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold ">{division.title}</h3>
                  <p className="mt-2 text-gray-600">{division.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
        </div> */}

        <hr id="divisions" className=" border-gray-300" />

        <section className="max-w-7xl mx-auto px-6 py-16">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#1d8fff] uppercase ">
            Our Divisions
          </h2>

          {/* Divisions Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {divisions2.map((div, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between border-t-4 border-[#1d8fff] hover:shadow-xl transition"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#1d8fff] mb-3">
                    {div.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{div.desc}</p>

                  <ul className="space-y-2 mb-6">
                    {div.points.map((pt, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <CheckCircleIcon className="h-5 w-5 text-[#1d8fff] flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={div.cta.href}
                  className="inline-block bg-[#1d8fff] text-white px-5 py-2 rounded-lg font-medium text-center hover:bg-blue-600 transition"
                >
                  {div.cta.label}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Mission, Vision & Values */}
        <section className="py-12 px-6 lg:px-20 bg-gray-50">
          {/* Mission & Vision */}
          <section className="py-4 bg-gray-50">
            <div className="text-center mb-12">
              <h2 className="text-[#1d8fff] font-bold uppercase text-3xl heading-oswald">
                Mission, Vision & Values
              </h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                At SkillzRevo, we are driven by a clear mission and vision that
                guide our work in training, staffing, and consulting.
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
              {/* Mission */}
              <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#ff6a1d] to-[#ff9157] shadow-md">
                    <FaBullseye className="text-white min-w-[32px] min-h-[32px]" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 text-center">
                  Our Mission
                </h3>
                <p className="text-gray-700 mt-4 text-center leading-relaxed">
                  Revolutionize skill development, talent transformation, and
                  enterprise solutions through tech-enabled, outcome-driven
                  services.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#1d8fff] to-[#5aaeff] shadow-md">
                    <FaEye className="text-white min-w-[32px] min-h-[32px]" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 text-center">
                  Our Vision
                </h3>
                <p className="text-gray-700 mt-4 text-center leading-relaxed">
                  Be a global leader in shaping the digital workforce and
                  enabling intelligent enterprise growth.
                </p>
              </div>
            </div>
          </section>

          {/* Values */}
          <h2 className="text-3xl mt-10 mb-6 font-[#1d8fff] text-[#1d8fff] text-center font-bold uppercase heading-oswald">
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto ">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-3">
                  {value.icon}
                  <h4 className="text-xl font-semibold text-gray-900">
                    {value.title}
                  </h4>
                </div>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <div className="mt-16 text-center">
            <p className="text-lg font-semibold text-gray-800">
              <span className="text-[#1d8fff]">“At SkillzRevo,</span> our values
              drive everything we do — empowering people, enabling businesses,
              and engineering transformation.”
            </p>
          </div>
        </section>

        {/* <section className="py-16 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1d8fff]-900 sm:text-4xl heading-oswald">
              Mission, Vision & Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 px-2">
            <div className="p-6 bg-blue-50 rounded-lg shadow-lg border-1 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900">Our Mission:</h3>
              <p className="mt-4 text-gray-500">
                To revolutionize skill development, talent transformation, and enterprise solutions by delivering value-driven, tech-enabled, and future-ready services.
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg shadow-lg border-1 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900">Our Vision:</h3>
              <p className="mt-4 text-gray-500">
                To be a global leader in shaping the digital workforce and enabling intelligent enterprise growth through skills, technology, and innovation.
              </p>
            </div>
            <div className="md:col-span-2 p-6 bg-blue-50 rounded-lg shadow-lg border-1">
              <h3 className="text-2xl text-center font-bold text-gray-900">Our Core Values:</h3>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 transition-transform duration-300 hover:scale-105">
                    <value.icon size={36} className="text-[#1d8fff]" />
                    <p className="mt-2 font-medium text-gray-700">{value.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        <hr className="border-gray-200" />

        {/* 5. Why Choose SkillzRevo */}

        <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
            {/* Image */}
            <div className="relative w-[100%] h-[100%] rounded-2xl shadow-lg">
              <Image
                // src=".jpg"
                alt="Why Choose SkillzRevo"
                className="object-cover rounded-xl"
                fill
                priority
                quality={50}
              />
              {/* Decorative background blob */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#1d8fff]/20 rounded-full blur-2xl" />
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl shadow-md p-8 lg:p-10">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center uppercase md:text-left">
                Why Choose <span className="text-[#1d8fff]">SkillzRevo</span>
              </h2>

              <ul className="space-y-2">
                {advantages.map((advantage, index) => (
                  <li
                    key={index}
                    className="flex items-start p-3 rounded-xl hover:bg-blue-50 transition"
                  >
                    <FaCheckCircle className="flex-shrink-0 h-6 w-6 mt-1 text-[#1d8fff]" />
                    <p className="ml-3 text-lg text-gray-700 leading-relaxed">
                      {advantage}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* 6. Leadership Team */}
        {/* <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1d8fff]-900 sm:text-4xl heading-oswald">
              Leadership Team
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900">Rakesh Singh</h3>
              <p className="text-lg text-gray-500">Founder & CEO</p>
              <p className="mt-4 text-gray-600 max-w-2xl">
                With a vision to bridge the gap between academia and industry, Rakesh brings years of experience in EdTech, enterprise consulting, and people strategy.
              </p>
            </div>
            <p className="mt-8 text-gray-500">
              [Other leaders can be listed here with short bios, photos, and titles.]
            </p>
          </div>
        </section> */}

        <hr className=" border-gray-200" />

        {/* 7. Our Journey */}

        <section className="py-20 bg-gray-950 text-white font-sans">
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">
              Our <span style={{ color: primaryColor }}>Journey</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              A timeline of how SkillzRevo evolved into a global force in
              digital transformation.
            </p>
          </div>

          {/* Vertical Timeline Container */}
          <div className="relative max-w-2xl mx-auto px-6">
            {/* Vertical Line */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5"
              style={{ backgroundColor: primaryColor }}
            ></div>

            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`mb-2 flex items-start w-full ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Year & Text Container */}
                <div
                  className={`w-1/2 p-0 transition-transform duration-500 transform hover:scale-105 ${
                    index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"
                  }`}
                >
                  <div
                    className="inline-block px-4 py-1 text-sm rounded-full text-white font-bold mb-2"
                    style={{ backgroundColor: secondaryColor }}
                  >
                    {event.year}
                  </div>
                  <p className="text-gray-300 text-sm md:text-base">
                    {event.text}
                  </p>
                </div>

                {/* Timeline Dot */}
                <div
                  className="w-8 h-8 rounded-full border-4 border-gray-950 z-10 flex-shrink-0 relative"
                  style={{
                    backgroundColor: primaryColor,
                    boxShadow: "0 0 0 3px white",
                  }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white animate-pulse"></div>
                </div>

                {/* Empty Spacer */}
                <div
                  className={`w-1/2 flex-grow ${
                    index % 2 === 0 ? "pl-12" : "pr-12"
                  }`}
                />
              </div>
            ))}
          </div>
        </section>

        <hr className=" border-gray-200" />

        {/* 8. Client Testimonials */}
        <section className="py-16 bg-blue-50 ">
          <div className="max-w-7xl mx-auto px-2">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold tracking-tight text-[#1d8fff]-900 sm:text-4xl uppercase heading-oswald">
                Client Testimonials
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}  
                  className="bg-white p-6 rounded-lg shadow-lg border-l-4"
                  style={{ borderColor: primaryColor }}
                >
                  <FaQuoteLeft size={24} className="text-gray-400 mb-4" />
                  <p className="text-lg text-gray-600 italic">
                    "{testimonial.quote}"
                  </p>
                  <p className="mt-4 font-bold text-gray-800">
                    {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <PartneringCompaniesSlider /> */}

        {/* 9. Clients & Partners */}
        {/* <section className="py-16 mx-auto max-w-7xl px-2">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1d8fff]-900 sm:text-4xl heading-oswald">
              Clients & Partners
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
        
            <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center h-24">
              <span className="text-gray-400">Logo 1</span>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center h-24">
              <span className="text-gray-400">Logo 2</span>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center h-24">
              <span className="text-gray-400">Logo 3</span>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center h-24">
              <span className="text-gray-400">Logo 4</span>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center h-24">
              <span className="text-gray-400">Logo 5</span>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center h-24">
              <span className="text-gray-400">Logo 6</span>
            </div>
          </div>
        </section> */}

        <hr className=" border-gray-200" />

        {/* 10. Careers @ SkillzRevo */}
        <section className="py-16 bg-blue-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1d8fff] sm:text-4xl uppercase heading-oswald">
              Careers @ SkillzRevo
            </h2>
          </div>
          <div className="flex flex-col items-center p-6  rounded-lg ">
            <p className="text-xl text-gray-600 max-w-2xl text-center">
              Join our dynamic team of innovators, educators, and strategists!
              We’re always looking for passionate professionals in training,
              consulting, and talent solutions.
            </p>
            <a
              href="https://tutor.skillzrevo.com/Career/"
              className="mt-6 inline-flex items-center px-6 py-3 rounded-md text-base font-medium text-white transition-colors duration-200 shadow-md hover:shadow-lg"
              style={{ backgroundColor: primaryColor }}
            >
              Explore Opportunities
              <FaArrowRight className="ml-2" />
            </a>
          </div>
        </section>
      </div>

      <hr className=" border-gray-200" />

      {/* 11. Contact Us */}
      <footer className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[#1d8fff] font-bold text-3xl uppercase  heading-oswald">
                Contact Us
              </h3>
              <ul className="mt-6 space-y-4 text-gray-600">
                <li className="flex items-start">
                  <FaMapMarkerAlt
                    className="flex-shrink-0 h-6 w-6 mr-3"
                    style={{ color: primaryColor }}
                  />
                  <span>
                    Corporate Office : 3rd Floor, A-166, A Block, Sector-63, Noida, Uttar Pradesh - 201301 India
                    <br />
                    Head Office: SkillzRevo Solutions Pvt Ltd Plot No.- GH01A,
                    Sector-16C T-11 Suite No.-1901, Gauttam Buddha Nagar Greater
                    Noida, Uttar Pradesh - 201308 India
                  </span>
                </li>
                <li className="flex items-center">
                  <FaPhone
                    className="flex-shrink-0 h-6 w-6 mr-3"
                    style={{ color: primaryColor }}
                  />
                  <span>Phone: +91 96323 47896</span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope
                    className="flex-shrink-0 h-6 w-6 mr-3"
                    style={{ color: primaryColor }}
                  />
                  <span>Email: enquire@skillzrevo.com</span>
                </li>
                <li className="flex items-center">
                  <FaGlobeAmericas
                    className="flex-shrink-0 h-6 w-6 mr-3"
                    style={{ color: primaryColor }}
                  />
                  <span>Website: www.skillzrevo.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#1d8fff] font-bold text-3xl uppercase  heading-oswald">
                Office Map
              </h3>
              <div className="mt-6 h-64 w-full bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d437.7769734997925!2d77.37869550278488!3d28.623294067464958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1763907699392!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>

              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutSkillzrevo;
