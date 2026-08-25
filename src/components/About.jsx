import React, { useState } from "react";
import {
  FaUniversity,
  FaCalendarAlt,
  FaLightbulb,
  FaShieldAlt,
  FaMobileAlt,
  FaBuilding,
  FaCheckCircle,
} from "react-icons/fa";

const About = () => {
  const [activeTab, setActiveTab] = useState("education");

  const education = [
    {
      degree: "Bachelor of Information and Communication Technology",
      institution: "Uva Wellassa University of Sri Lanka",
      duration: "2023 - Present",
      description: "Specializing in Software Technology with focus on Mobile Computing, Systems Architecture, and Distributed Systems.",
      badge: "Degree Program"
    },
    {
      degree: "Full Stack Developer Certification",
      institution: "University of Moratuwa (CODL)",
      duration: "2025",
      description: "Hands-on mastery of MERN stack, Angular, Node.js, REST APIs, MongoDB, and modern cloud deployment pipelines.",
      badge: "Professional Certification"
    },
    {
      degree: "Certified in Cybersecurity (CC)",
      institution: "ISC²",
      duration: "2025",
      description: "Fundamentals of network security, threat mitigation, access controls, risk management, and security compliance.",
      badge: "Global Security Certification"
    },
  ];

  const strengths = [
    {
      icon: <FaMobileAlt className="text-cyan-400" />,
      title: "Mobile App Engineering",
      desc: "Architecting cross-platform apps using Flutter & Dart with sleek UI/UX and resilient state management.",
    },
    {
      icon: <FaBuilding className="text-teal-400" />,
      title: "Corporate Experience",
      desc: "6 months of active corporate experience at CeylonX Corporation delivering mobile software solutions.",
    },
    {
      icon: <FaLightbulb className="text-amber-400" />,
      title: "Problem Solver",
      desc: "Analytical and structured mindset towards complex system logic and algorithms.",
    },
    {
      icon: <FaShieldAlt className="text-purple-400" />,
      title: "Security Conscious",
      desc: "ISC² CC certified with attention to secure coding practices, API authentication, and data privacy.",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-950">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
              <FaCheckCircle className="text-xs" />
              <span>Engineer Profile</span>
            </div>
          </div>
          <h2 className="section-title">
            About <span className="text-gradient">Ishara</span>
          </h2>
          <p className="section-subtitle">
            Mobile App Developer & Software Engineering BICT undergraduate with 6 months of completed corporate experience at CeylonX Corporation.
          </p>
        </div>

        {/* Highlight Card */}
        <div className="mb-16 glass-card p-8 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-850 border-cyan-500/30">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 uppercase tracking-wider">
                Professional Overview
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Passionate about engineering mobile apps & scalable software.
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                During my 6-month internship as an <strong className="text-cyan-300">Intern Software Engineer (Mobile App) at CeylonX Corporation</strong>, I developed cross-platform mobile applications with Flutter, integrated RESTful APIs, optimized app performance, and collaborated in fast-paced Agile sprint teams. Combined with my academic studies at Uva Wellassa University, I excel at turning complex product requirements into intuitive mobile and web user experiences.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm text-cyan-300">
                  <FaCheckCircle className="text-cyan-400" /> Flutter & Dart Mobile Apps
                </div>
                <div className="flex items-center gap-2 text-sm text-cyan-300">
                  <FaCheckCircle className="text-cyan-400" /> React & Full Stack Web
                </div>
                <div className="flex items-center gap-2 text-sm text-cyan-300">
                  <FaCheckCircle className="text-cyan-400" /> REST APIs & State Management
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <div className="text-4xl font-extrabold text-cyan-400 font-mono mb-2">6 Months</div>
              <div className="text-sm font-semibold text-white mb-1">CeylonX Corporation</div>
              <div className="text-xs text-slate-400 mb-4">Mobile App Developer Intern</div>
              <a href="#experience" className="btn-outline text-xs w-full py-2.5">
                View Experience Details
              </a>
            </div>
          </div>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex justify-center gap-2 mb-12 border-b border-slate-800 pb-4">
          <button
            onClick={() => setActiveTab("education")}
            className={`px-6 py-3 font-semibold text-sm rounded-xl transition-all ${
              activeTab === "education"
                ? "bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 shadow-glow-cyan"
                : "text-slate-400 hover:text-white hover:bg-slate-800/60"
            }`}
          >
            Education & Certifications
          </button>
          <button
            onClick={() => setActiveTab("strengths")}
            className={`px-6 py-3 font-semibold text-sm rounded-xl transition-all ${
              activeTab === "strengths"
                ? "bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 shadow-glow-cyan"
                : "text-slate-400 hover:text-white hover:bg-slate-800/60"
            }`}
          >
            Core Competencies
          </button>
        </div>

        {/* Tab Content: Education & Certifications */}
        {activeTab === "education" && (
          <div className="grid gap-6 md:grid-cols-3">
            {education.map((edu, index) => (
              <div
                key={index}
                className="glass-card p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-slate-800 text-cyan-300 border border-slate-700">
                      {edu.badge}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                      <FaCalendarAlt className="text-cyan-400" /> {edu.duration}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{edu.degree}</h4>
                  <div className="flex items-center gap-2 text-sm text-cyan-300 mb-4">
                    <FaUniversity />
                    <span>{edu.institution}</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content: Core Competencies */}
        {activeTab === "strengths" && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center hover:border-cyan-500/50 transition-all group"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl rounded-2xl bg-slate-800/80 border border-slate-700 group-hover:scale-110 transition-transform">
                  {strength.icon}
                </div>
                <h4 className="mb-2 text-lg font-bold text-white">{strength.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{strength.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default About;

