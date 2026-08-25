import React, { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaCodeBranch,
  FaLayerGroup,
  FaInfoCircle,
} from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoHardwareChipSharp } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";
import { GiSpellBook } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BiSolidBusiness } from "react-icons/bi";

// Project Data
const PROJECTS = [
  {
    id: "agrocare",
    title: "AgroCare Harvest Tracking Mobile App",
    category: "mobile",
    type: "Mobile Application",
    description:
      "GPS-based mobile harvester tracking application with live field monitoring, GSM updates, and real-time farmer alert notifications.",
    features: [
      "Real-time GPS harvester telemetry & live mapping",
      "Offline field data caching with asynchronous backend sync",
      "SMS & Push notifications for harvest milestones",
      "ESP32 hardware sensor integration via BLE/GSM"
    ],
    image: "/agrocare.jpg",
    icon: <FaMapLocationDot className="text-cyan-400" />,
    tech: ["Flutter", "Dart", "MongoDB", "Node.js", "ESP32", "REST API"],
    github: "https://github.com/IsharaWanninayaka/Rd_agrocare_mobile_application",
    live: "",
    stars: 38,
    forks: 14,
    featured: true,
  },
  {
    id: "boolean-logic",
    title: "Boolean Logic Solver & Simulator",
    category: "ai-systems",
    type: "Desktop & Web Software",
    description:
      "A complete Boolean logic simulator featuring gate-level circuit design, dynamic signal propagation, and real-time truth table evaluation.",
    features: [
      "Interactive gate-level logic design canvas",
      "Truth table generation & Karnaugh map simplification",
      "Real-time signal propagation visualization",
      "Cross-platform desktop packaging with Electron"
    ],
    image: "/logicsolver.jpg",
    icon: <IoHardwareChipSharp className="text-purple-400" />,
    tech: ["Python", "Electron.js", "React.js", "Node.js", "SQLite"],
    github: "https://github.com/logicsimplifier/boolean_logic_solver",
    live: "https://www.youtube.com/watch?v=DBZNrmWjAZo",
    stars: 31,
    forks: 12,
    featured: true,
  },
  {
    id: "food",
    title: "Full-Stack E-Commerce Platform",
    category: "web",
    type: "Web Application",
    description:
      "Full online food ordering platform with customer authentication, order cart management, Stripe payment processing, and admin dashboard.",
    features: [
      "Role-based authentication (Customer & Vendor Admin)",
      "Live order status tracking & receipt generation",
      "Responsive UI built with React & Tailwind CSS",
      "RESTful Express API with MongoDB document storage"
    ],
    image: "/food.png",
    icon: <GrCart className="text-emerald-400" />,
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    github: "https://github.com/uwufts22/uwufood-web-frontend",
    live: "https://uwufood-web-frontend.vercel.app",
    stars: 28,
    forks: 18,
    featured: true,
  },
  {
    id: "lms",
    title: "Learning Management System (LMS)",
    category: "web",
    type: "Full Stack Platform",
    description:
      "Online education platform featuring video course streaming, interactive quizzes, student progress analytics, and instructor portal.",
    features: [
      "Video course management and lecture streaming",
      "Quiz evaluation system with automated grading",
      "Student enrollment & course progress bar"
    ],
    image: "/lms.png",
    icon: <GiSpellBook className="text-blue-400" />,
    tech: ["React", "Node.js", "Bootstrap", "MongoDB", "Express"],
    github: "https://github.com/IsharaWanninayaka/LmsBackEnd",
    live: "",
    stars: 25,
    forks: 7,
    featured: false,
  },
  {
    id: "fraud",
    title: "AI Financial Fraud Detection System",
    category: "ai-systems",
    type: "Machine Learning Platform",
    description:
      "ML-driven transaction fraud detection platform with real-time anomaly detection algorithms and risk scoring dashboards.",
    features: [
      "Machine learning risk scoring pipeline",
      "Anomaly detection model for suspicious transaction behavior",
      "Interactive risk analytics dashboard"
    ],
    image: "/fraud.png",
    icon: <RiSecurePaymentLine className="text-amber-400" />,
    tech: ["Python", "TensorFlow", "PostgreSQL", "Flask", "React"],
    github: "https://github.com/ishara/ai-fraud-detection",
    live: "https://frauddetect.ishara.dev",
    stars: 42,
    forks: 18,
    featured: false,
  },
  {
    id: "onetouch",
    title: "OneTouch Service Platform",
    category: "web",
    type: "Web Portal",
    description:
      "Unified digital service management platform with booking schedules, customer inquiries, and instant email alerts.",
    features: [
      "Automated EmailJS inquiry notification system",
      "Responsive service gallery and customer testimonials"
    ],
    image: "/onetouch.png",
    icon: <BiSolidBusiness className="text-teal-400" />,
    tech: ["React", "EmailJS", "Tailwind CSS"],
    github: "https://github.com/IsharaWanninayaka/OneTouch-Solutiions",
    live: "https://www.onetouchsolutions.lk",
    stars: 24,
    forks: 10,
    featured: false,
  },
];

const Projects = ({ onSelectProject }) => {
  const [filter, setFilter] = useState("all");

  const filterOptions = [
    { id: "all", label: "All Projects" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "web", label: "Web Apps" },
    { id: "ai-systems", label: "AI & Systems" },
  ];

  const filteredProjects =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 bg-slate-950">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
              <FaLayerGroup className="text-xs" />
              <span>Featured Portfolio</span>
            </div>
          </div>
          <h2 className="section-title">
            Projects <span className="text-gradient">& Work</span>
          </h2>
          <p className="section-subtitle">
            Showcase of mobile applications, full-stack web platforms, and engineering software projects.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setFilter(opt.id)}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 ${
                filter === opt.id
                  ? "bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 shadow-glow-cyan"
                  : "bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Featured Flagship Highlight Section */}
        {filter === "all" && (
          <div className="mb-16">
            <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-6">
              <IoIosStar className="text-amber-400 text-2xl" /> Flagship Projects
            </h3>

            <div className="grid gap-8 lg:grid-cols-2">
              {PROJECTS.filter((p) => p.featured).map((p) => (
                <div
                  key={p.id}
                  className="glass-card overflow-hidden group hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Project Image Frame */}
                    <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-700/60 backdrop-blur-md">
                          {p.type}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl p-2 rounded-lg bg-slate-800 border border-slate-700">
                          {p.icon}
                        </span>
                        <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {p.title}
                        </h4>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {p.description}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {p.tech.map((t, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-800/80 text-cyan-200 border border-slate-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-800/60 mt-auto">
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1">
                        <FaStar className="text-amber-400" /> {p.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCodeBranch className="text-cyan-400" /> {p.forks}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectProject(p)}
                        className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 text-cyan-300 hover:bg-slate-700 flex items-center gap-1.5"
                      >
                        <FaInfoCircle /> Details
                      </button>
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-slate-300 bg-slate-800 hover:text-white hover:bg-slate-700 rounded-lg"
                        >
                          <FaGithub size={16} />
                        </a>
                      )}
                      {(p.live || p.github) && (
                        <a
                          href={p.live || p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg font-bold"
                        >
                          <FaExternalLinkAlt size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All / Filtered Projects Grid */}
        <h3 className="text-xl font-bold text-white mb-6">
          {filter === "all" ? "All Software Projects" : `Category: ${filterOptions.find(f => f.id === filter)?.label}`}
        </h3>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="glass-card p-5 flex flex-col justify-between hover:border-cyan-500/40 transition-all group"
            >
              <div>
                <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 bg-slate-950">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="px-2.5 py-0.5 text-[10px] font-semibold rounded-full bg-slate-950/80 text-cyan-300 border border-slate-700">
                      {p.type}
                    </span>
                  </div>
                </div>

                <h4 className="flex items-center gap-2 text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  <span className="text-cyan-400">{p.icon}</span>
                  <span>{p.title}</span>
                </h4>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 mt-auto">
                <button
                  onClick={() => onSelectProject(p)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                >
                  <FaInfoCircle /> Details
                </button>

                <div className="flex items-center gap-2 text-slate-400">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    <FaGithub size={16} />
                  </a>
                  {(p.live || p.github) && (
                    <a href={p.live || p.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
                      <FaExternalLinkAlt size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

