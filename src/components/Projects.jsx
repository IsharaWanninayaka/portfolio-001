import React, { useMemo } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaCodeBranch,
} from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoHardwareChipSharp } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";
import { GiSpellBook } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BiSolidBusiness } from "react-icons/bi";

// Static project list
const PROJECTS = [
  {
    id: "boolean-logic",
    title: "Boolean Logic Solver & Simulator",
    description:
      "A complete Boolean logic simulator featuring gate-level circuit design, dynamic signal propagation, and real-time output evaluation.",
    image: "/logicsolver.jpg",
    icon: <IoHardwareChipSharp />,
    tech: ["Python", "Electron.js", "React.js", "Node.js", "Sqlite"],
    github: "https://github.com/logicsimplifier/boolean_logic_solver",
    live: "",
    stars: 31,
    forks: 12,
    featured: true,
  },
  {
    id: "agrocare",
    title: "Harvest Tracking Application",
    description:
      "GPS-based harvester tracking application with live field monitoring and GSM updates.",
    image: "/agrocare.jpg",
    icon: <FaMapLocationDot />,
    tech: ["flutter", "MongoDB", "Node.js", "ESP32"],
    github:
      "https://github.com/IsharaWanninayaka/Rd_agrocare_mobile_application",
    live: "",
    stars: 28,
    forks: 9,
    featured: true,
  },
  {
    id: "food",
    title: "Full-Stack E-Commerce Platform",
    description:
      "Full online food ordering platform with authentication, orders, and admin dashboard.",
    image: "/food.png",
    icon: <GrCart />,
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/uwufts22/uwufood-web-frontend",
    live: "https://uwufood-web-frontend.vercel.app",
    stars: 10,
    forks: 18,
    featured: true,
  },
  {
    id: "lms",
    title: "Learning Management System",
    description:
      "Online education platform with video courses, quizzes, progress tracking.",
    image: "/lms.png",
    icon: <GiSpellBook />,
    tech: ["React", "Node.js", "Bootstrap", "MongoDB", "Express"],
    github: "https://github.com/IsharaWanninayaka/LmsBackEnd",
    live: "",
    stars: 25,
    forks: 7,
    featured: false,
  },
  {
    id: "fraud",
    title: "AI-Powered Financial Fraud Detection System",
    description:
      "ML-driven fraud detection platform with anomaly detection and risk scoring.",
    image: "/fraud.png",
    icon: <RiSecurePaymentLine />,
    tech: ["Python", "TensorFlow", "PostgreSQL", "Flask", "React", "Node.js"],
    github: "https://github.com/ishara/ai-fraud-detection",
    live: "https://frauddetect.ishara.dev",
    stars: 42,
    forks: 18,
    featured: false,
  },
  {
    id: "onetouch",
    title: "OneTouchSolution",
    description:
      "Unified service management platform with scheduling, tracking, and notifications.",
    image: "/onetouch.png",
    icon: <BiSolidBusiness />,
    tech: ["React", "Emailjs"],
    github: "https://github.com/IsharaWanninayaka/OneTouch-Solutiions",
    live: "https://www.onetouchsolutions.lk",
    stars: 24,
    forks: 10,
    featured: false,
  },
];

const OptimizedProjects = () => {
  const featured = useMemo(() => PROJECTS.filter((p) => p.featured), []);
  const all = useMemo(() => PROJECTS, []);

  return (
    <section id="projects" className="section-container bg-gray-50">
      <div className="mb-12 text-center">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">A showcase of my work</p>
      </div>

      {/* Featured */}
      <div className="mb-16">
        <h3 className="flex items-center mb-8 text-2xl font-bold">
          <span className="flex items-center justify-center w-8 h-8 mr-3 text-white rounded-full bg-primary">
            <IoIosStar />
          </span>
          Featured Projects
        </h3>

        <div className="grid gap-8 lg:grid-cols-2">
          {featured.map((p) => (
            <article
              key={p.id}
              className="bg-white border shadow-sm rounded-xl"
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="object-cover w-full h-56 rounded-t-xl"
              />

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-3xl">
                  {p.icon}
                  <h3 className="text-2xl font-bold">{p.title}</h3>
                </div>

                <p className="mb-3 text-sm text-gray-600">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs text-gray-700 bg-gray-100 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-4 text-sm text-gray-700">
                    <span className="flex items-center gap-1">
                      <FaStar /> {p.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCodeBranch /> {p.forks}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={p.github}
                      target="_blank"
                      className="flex items-center justify-center w-10 h-10 text-gray-700 bg-gray-100 rounded-full"
                    >
                      <FaGithub />
                    </a>

                    <a
                      href={p.live || p.github}
                      target="_blank"
                      className="flex items-center justify-center w-10 h-10 text-white rounded-full bg-primary"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* All Projects */}
      <h3 className="mb-8 text-2xl font-bold">All Projects</h3>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {all.map((p) => (
          <article
            key={p.id}
            className="p-6 bg-white border rounded-lg shadow-sm"
          >
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              className="object-cover w-full mb-4 rounded-lg h-44"
            />

            <h4 className="flex items-center gap-2 text-lg font-bold">
              {p.icon}
              {p.title}
            </h4>

            <p className="my-2 text-sm text-gray-600 line-clamp-2">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2 my-3">
              {p.tech.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs text-gray-700 bg-gray-100 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between mt-4">
              <a
                href={p.live || p.github}
                className="flex items-center text-sm font-medium text-primary"
              >
                View <FaExternalLinkAlt size={12} className="ml-1" />
              </a>

              <a href={p.github} className="text-gray-700">
                <FaGithub />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OptimizedProjects;
