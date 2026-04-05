"use client";
import { GraduationCap, Users, Briefcase, Target, Award, TrendingUp, ArrowRight } from "lucide-react";

export default function WhoWeAre() {
  const divisions = [
    {
      icon: GraduationCap,
      title: "SkillzRevo Academy",
      description: "Future-focused training & upskilling programs designed for professionals and students alike.",
      gradient: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500",
      link: "https://academy.skillzrevo.com"
    },
    {
      icon: Users,
      title: "SkillzRevo Talent",
      description: "Strategic staffing & recruitment solutions that connect top talent with the right opportunities.",
      gradient: "from-orange-500 to-red-500",
      borderColor: "border-orange-500",
      link: "https://talent.skillzrevo.com"
    },
    {
      icon: Briefcase,
      title: "SkillzRevo Consulting",
      description: "Data-driven enterprise consulting & digital transformation services for measurable business impact.",
      gradient: "from-green-500 to-emerald-500",
      borderColor: "border-green-500",
      link: "https://consulting.skillzrevo.com"
    }
  ];

  const highlights = [
    {
      icon: Award,
      title: "IIT-Led Excellence",
      description: "Founded by Masters and PhD holders from prestigious IITs"
    },
    {
      icon: Target,
      title: "Global Reach",
      description: "Serving clients and learners across multiple continents"
    },
    {
      icon: TrendingUp,
      title: "Proven Impact",
      description: "Thousands of successful career transformations"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-blue-50 via-white to-slate-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              
              {/* Image */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="SkillzRevo team collaboration"
                  className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent rounded-2xl"></div>
                
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <Award size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Global Leader</div>
                      <div className="text-xs text-slate-600">Training & Transformation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
              <Target size={16} className="text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">About Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Who{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                We Are
              </span>
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              We proudly serve as a <span className="font-semibold text-blue-600">global trailblazing training solutions provider</span>, revolutionizing upskilling by offering comprehensive and specialized training programs with enhanced pedagogy, technology, and experienced industry experts.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Founded and led by accomplished <span className="font-semibold">Masters and PhD holders from IITs</span>, we are dedicated to evolving education in emerging technologies. We provide classroom and online training for high-quality, hands-on experiences across numerous certification programs, empowering individuals and organizations with essential skills for the digital era.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {highlights.map((highlight, idx) => {
                const Icon = highlight.icon;
                return (
                  <div key={idx} className="bg-white rounded-xl p-4 shadow-md border border-slate-200 hover:shadow-lg transition-all">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-3">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div className="text-xs font-bold text-slate-900 mb-1">{highlight.title}</div>
                    <div className="text-xs text-slate-600">{highlight.description}</div>
                  </div>
                );
              })}
            </div>

           
          </div>
        </div>

        {/* Divisions Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Three Pillars of Excellence
            </h3>
            <p className="text-lg text-slate-600">
              Comprehensive solutions spanning education, talent, and enterprise transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {divisions.map((division, idx) => {
              const Icon = division.icon;
              return (
                <div
                  key={idx}
                  className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-l-4 ${division.borderColor}`}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${division.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                  
                  <div className="relative p-8">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${division.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon size={32} className="text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{division.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {division.description}
                    </p>

                    {/* CTA Link */}
                    <a
                      href={division.link}
                      className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${division.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all`}
                    >
                      Explore
                      <ArrowRight size={16} className="text-slate-400" />
                    </a>
                  </div>

                  {/* Decorative corner */}
                  <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${division.gradient} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                </div>
              );
            })}
          </div>

          {/* Closing Statement */}
          <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-10 border border-blue-200">
            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
              With a growing <span className="font-bold text-blue-600">global presence</span>, we deliver{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                real results
              </span>{" "}
              through a unique mix of innovation, expertise, and hands-on experience.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-white rounded-lg shadow-md">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">10,000+</div>
                <div className="text-xs text-slate-600 mt-1">Learners Trained</div>
              </div>
              <div className="px-6 py-3 bg-white rounded-lg shadow-md">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">500+</div>
                <div className="text-xs text-slate-600 mt-1">Corporate Clients</div>
              </div>
              <div className="px-6 py-3 bg-white rounded-lg shadow-md">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">95%</div>
                <div className="text-xs text-slate-600 mt-1">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}