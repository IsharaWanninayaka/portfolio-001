import React from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaMobileAlt,
  FaGraduationCap,
  FaCodeBranch,
} from "react-icons/fa";
import { SiFlutter, SiReact, SiFirebase, SiDart, SiAndroid, SiApple } from "react-icons/si";

const Experience = () => {
  const experiences = [
    {
      id: "ceylonx",
      role: "Intern Software Engineer - Mobile App",
      company: "CeylonX Corporation",
      period: "6 Months Internship (Completed)",
      location: "Sri Lanka",
      type: "Corporate Internship",
      featured: true,
      description:
        "Completed an intensive 6-month software engineering internship focused on end-to-end mobile application development. Engineered cross-platform mobile apps, implemented resilient architectures, integrated back-end services, and elevated overall user experience.",
      highlights: [
        "Architected and developed high-performance cross-platform mobile applications using Flutter & Dart.",
        "Integrated complex RESTful APIs, asynchronous data streams, and secure local data storage.",
        "Designed responsive mobile UIs adhering to modern Material Design and iOS Human Interface guidelines.",
        "Engineered robust state management solutions (Bloc/Provider) ensuring smooth UI rendering.",
        "Participated actively in Agile/Scrum sprints, peer code reviews, continuous debugging, and automated testing.",
        "Optimized mobile application bundle size and improved cold startup speeds by over 30%."
      ],
      skills: ["Flutter", "Dart", "Mobile App Architecture", "REST APIs", "State Management", "Firebase", "UI/UX", "Git"],
      icon: <FaMobileAlt className="text-cyan-400" />
    },
    {
      id: "uom-fullstack",
      role: "Full Stack Developer Trainee",
      company: "University of Moratuwa (CODL)",
      period: "2025",
      location: "Online Certification",
      type: "Professional Certification",
      featured: false,
      description:
        "Comprehensive hands-on training covering modern full-stack web architectures, RESTful API design, database modeling, and DevOps deployment pipelines.",
      highlights: [
        "Built responsive web applications with React.js, Node.js, Express, and MongoDB.",
        "Implemented secure JWT authentication, middleware validation, and database indexing.",
        "Deployed applications using cloud platforms and continuous delivery workflows."
      ],
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "DevOps Basics"],
      icon: <FaCodeBranch className="text-emerald-400" />
    },
    {
      id: "biict-uwu",
      role: "BICT Specializing in Software Technology",
      company: "Uva Wellassa University of Sri Lanka",
      period: "2023 - Present",
      location: "Badulla, Sri Lanka",
      type: "Bachelor's Degree",
      featured: false,
      description:
        "Pursuing Bachelor of Information and Communication Technology with focus on Software Engineering, Data Structures, Mobile Computing, and Cybersecurity.",
      highlights: [
        "Deep exploration of Data Structures & Algorithms, Object-Oriented System Design, and Database Management.",
        "Led undergraduate mobile & IoT project teams, implementing real-time tracking and logic solvers.",
        "Active member of tech societies, hackathons, and software engineering symposiums."
      ],
      skills: ["Software Engineering", "Algorithms", "Database Systems", "Cybersecurity", "Mobile Computing"],
      icon: <FaGraduationCap className="text-purple-400" />
    }
  ];

  return (
    <section id="experience" className="relative py-24 overflow-hidden bg-slate-900/60 border-y border-slate-800/80">
      {/* Glow Orbs */}
      <div className="absolute rounded-full -top-24 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute rounded-full -bottom-24 left-0 w-96 h-96 bg-purple-500/10 blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
              <FaBriefcase className="text-xs" />
              <span>Proven Track Record</span>
            </div>
          </div>
          <h2 className="section-title">
            Work Experience <span className="text-gradient">& Education</span>
          </h2>
          <p className="section-subtitle">
            Hands-on corporate experience at CeylonX Corporation combined with rigorous software engineering academic training.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Bar */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-teal-500 to-purple-500 transform md:-translate-x-1/2 opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Center Marker Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-slate-900 border-2 border-cyan-400 shadow-glow-cyan text-sm">
                    {exp.icon}
                  </div>

                  {/* Content Box */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <div
                      className={`glass-card p-6 md:p-8 relative transition-all duration-300 hover:scale-[1.01] ${
                        exp.featured ? "border-cyan-500/50 shadow-glow-cyan" : ""
                      }`}
                    >
                      {exp.featured && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                          <FaCheckCircle className="text-cyan-400" />
                          <span>6-Month Corporate Internship</span>
                        </div>
                      )}

                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h3>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-cyan-300 font-medium mb-4">
                        <span className="text-slate-200 font-semibold">{exp.company}</span>
                        <span className="flex items-center gap-1 text-slate-400 text-xs">
                          <FaCalendarAlt className="text-slate-500" /> {exp.period}
                        </span>
                        <span className="flex items-center gap-1 text-slate-400 text-xs">
                          <FaMapMarkerAlt className="text-slate-500" /> {exp.location}
                        </span>
                      </div>

                      <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Bullet Highlights */}
                      <ul className="space-y-2 mb-6 text-sm text-slate-300">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1 font-bold">›</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
                        {exp.skills.map((s, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 text-xs rounded-md bg-slate-800/80 text-cyan-200 border border-slate-700/60 font-mono"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CeylonX Feature Banner */}
        <div className="mt-16 max-w-4xl mx-auto glass-card p-8 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-850 border-cyan-500/30 text-center relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10 text-cyan-400 text-9xl">
            <SiFlutter />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">
              Ready for Mobile & Software Engineering Challenges
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto mb-6 text-sm">
              With 6 months of hands-on experience building mobile applications at CeylonX Corporation, I bring practical software engineering principles, clean code practices, and dynamic cross-platform expertise to your team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="btn-gradient">
                Hire Me / Collaborate
              </a>
              <a href="#projects" className="btn-outline">
                Explore Mobile Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
