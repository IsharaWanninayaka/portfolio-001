import React from "react";
import {
  FaDownload,
  FaArrowRight,
  FaCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaCheckCircle,
  FaBuilding,
} from "react-icons/fa";
import { SiFlutter, SiReact, SiFirebase, SiDart, SiTypescript } from "react-icons/si";

const Hero = () => {
  const stats = [
    { number: "6 Mo", label: "CeylonX Corp Internship" },
    { number: "10+", label: "Projects Completed" },
    { number: "15+", label: "Tech Stack & Tools" },
    { number: "100%", label: "Dedication & Passion" },
  ];

  const floatingTech = [
    { icon: <SiFlutter />, color: "text-cyan-400 border-cyan-500/30", label: "Flutter Mobile" },
    { icon: <SiReact />, color: "text-blue-400 border-blue-500/30", label: "React & Web" },
    { icon: <SiFirebase />, color: "text-amber-400 border-amber-500/30", label: "Firebase & Backend" },
  ];

  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen pt-28 pb-16 overflow-hidden bg-slate-950 mesh-bg"
    >
      {/* Background Animated Gradient Mesh Glows */}
      <div className="absolute rounded-full top-20 left-10 w-96 h-96 bg-cyan-500/10 blur-3xl animate-pulse-glow" />
      <div
        className="absolute rounded-full bottom-10 right-10 w-96 h-96 bg-purple-500/10 blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative z-10 container max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Hero Main Content */}
          <div className="lg:col-span-7 animate-fade-in">
            <h1 className="mb-6 font-extrabold tracking-tight text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Hi, I'm <span className="text-gradient">Ishara</span>
              <div className="mt-2 text-2xl sm:text-3xl md:text-4xl text-slate-300 font-semibold tracking-normal">
                Mobile App Developer <span className="text-cyan-400 font-normal">&</span> Software Engineer
              </div>
            </h1>

            <p className="max-w-2xl mb-8 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Software Engineering BICT undergraduate with 6 months of completed hands-on corporate internship experience at <strong className="text-cyan-300 font-semibold">CeylonX Corporation</strong>. Specialized in building cross-platform mobile apps with Flutter, full-stack web applications with React & Node.js, and secure cloud solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a href="#projects" className="btn-gradient">
                Explore Work <FaArrowRight className="text-sm" />
              </a>
              <a href="#experience" className="btn-outline">
                <FaBuilding className="text-cyan-400" /> CeylonX Experience
              </a>
              <a
                href="/resume.pdf"
                className="px-5 py-3 font-semibold text-slate-300 transition-colors rounded-xl hover:text-white flex items-center gap-2 border border-slate-800 bg-slate-900/40 text-sm hover:border-slate-700"
                download
              >
                <FaDownload className="text-xs text-slate-400" /> Download CV
              </a>
            </div>

            {/* Stats Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 pt-6 border-t border-slate-800/80">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md text-left transition-all hover:border-cyan-500/30"
                >
                  <div className="text-2xl font-extrabold text-white font-mono">
                    <span className="text-gradient">{stat.number}</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 animate-slide-up">
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              {/* Glass Card Container */}
              <div className="p-6 md:p-8 glass-card border-cyan-500/30 shadow-2xl relative overflow-hidden">
                {/* Profile Image Frame */}
                <div className="relative mx-auto mb-6 w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-teal-300 to-indigo-500 shadow-glow-cyan">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-950">
                    <img
                      src="/profile.jpg"
                      alt="Ishara Wanninayaka"
                      className="object-cover w-full h-full rounded-full transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Ishara Wanninayaka
                  </h3>
                  <div className="inline-flex items-center gap-1.5 mt-1 text-xs text-cyan-300 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/50">
                    <FaCheckCircle className="text-cyan-400 text-xs" />
                    <span>Ex-CeylonX Corp Intern</span>
                  </div>
                </div>

                {/* Skill Competency Gauges */}
                <div className="space-y-3.5 text-xs text-slate-300 font-medium">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="flex items-center gap-1.5"><FaMobileAlt className="text-cyan-400" /> Mobile Apps (Flutter/Dart)</span>
                      <span className="text-cyan-400 font-mono">92%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 w-[92%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="flex items-center gap-1.5"><FaCode className="text-blue-400" /> Frontend (React/JS/TS)</span>
                      <span className="text-blue-400 font-mono">88%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 w-[88%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="flex items-center gap-1.5"><FaServer className="text-emerald-400" /> Backend & APIs (Node/Express)</span>
                      <span className="text-emerald-400 font-mono">82%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 w-[82%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Chips */}
              {floatingTech.map((tech, index) => (
                <div
                  key={index}
                  className={`hidden sm:flex items-center gap-2 absolute bg-slate-900/90 border ${tech.color} px-3 py-2 rounded-xl backdrop-blur-md shadow-lg animate-float z-20`}
                  style={{
                    top: index === 0 ? "10%" : index === 1 ? "55%" : "85%",
                    left: index === 0 ? "-15px" : index === 1 ? "82%" : "-20px",
                    animationDelay: `${index * 0.5}s`,
                  }}
                >
                  <div className="text-lg">{tech.icon}</div>
                  <span className="text-xs font-semibold text-slate-200">{tech.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

