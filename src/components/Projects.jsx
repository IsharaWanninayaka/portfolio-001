// ProjectsOptimized.jsx
import React, { useEffect, useMemo, useState } from "react";
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

/**
 * Projects list is static and declared outside the component to avoid
 * re-creation on every render (performance).
 */
const PROJECTS = [
  {
    id: "boolean-logic",
    title: "Boolean Logic Solver & Simulator",
    description:
      "A complete Boolean logic simulator featuring gate-level circuit design, dynamic signal propagation, and real-time output evaluation. Built for learning digital electronics, truth tables, and combinational logic",
    image: "/logicsolver.jpg",
    icon: <IoHardwareChipSharp color="blue-300" />,
    tech: [
      "Python",
      "Electron.js",
      "React.js",
      "Node.js",
      "Sqlite",
      "Tailwind CSS",
      "Arduino Sketch Language",
    ],
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
      "GPS-based harvester tracking application that monitors live field movement, logs harvesting routes, and updates data through GSM connectivity. Designed for accurate field area calculation and real-time farm management.",
    image: "/agrocare.jpg",
    icon: <FaMapLocationDot color="green" />,
    tech: [
      "flutter",
      "MongoDB",
      "Tailwind CSS",
      "Node.js",
      "GSM Modules",
      "ESP32",
    ],
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
      "A complete online Food Ordering solution with cart, user authentication, payment processing, and admin dashboard. Built with modern MERN stack and deployed on AWS.",
    image: "/food.png",
    icon: <GrCart color="orange" />,
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "AWS"],
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
      "Online education platform with video courses, interactive quizzes, progress tracking, and certificate generation for students.",
    image: "/lms.png",
    icon: <GiSpellBook color="blue" />,
    tech: ["React", "node.js", "Bootstrap", "MySQL"],
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
      "Intelligent fraud detection platform using machine learning models to analyze transactions, identify anomalies, and deliver real-time alerts with high accuracy and automated risk scoring.",
    image: "/fraud.png",
    icon: <RiSecurePaymentLine color="green" />,
    tech: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
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
      "Unified service management platform offering seamless appointment scheduling, customer request handling, real-time service tracking, and automated notifications for businesses.",
    image: "/onetouch.png",
    icon: <BiSolidBusiness color="orange" />,
    tech: ["React", "Emailjs", "Tailwind CSS"],
    github: "https://github.com/IsharaWanninayaka/OneTouch-Solutiions",
    live: "https://www.onetouchsolutions.lk",
    stars: 24,
    forks: 10,
    featured: false,
  },
];

/**
 * Lightweight image component:
 * - shows a skeleton until the real image loads,
 * - uses native lazy-loading,
 * - supports optional className pass-through.
 */
const LazyImage = ({ src, alt, className = "", height = "h-56" }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative w-full overflow-hidden rounded-t-xl ${height}`}>
      {/* Skeleton */}
      {!loaded && (
        <div
          aria-hidden="true"
          className={`absolute inset-0 bg-gray-200 animate-pulse`}
        />
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 ${
          loaded ? "" : "opacity-0"
        } ${className}`}
        style={{ willChange: "transform" }}
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-dark/20 to-transparent" />
    </div>
  );
};

const ProjectsOptimized = React.memo(function ProjectsOptimized() {
  // Defer loading of the full grid to make the first meaningful paint faster.
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // small delay to let the browser paint the featured area first
    const t = window.requestAnimationFrame(() => {
      // set a tiny timeout so the first frame is free
      setTimeout(() => setShowAll(true), 250);
    });
    return () => {
      window.cancelAnimationFrame(t);
    };
  }, []);

  // memoized lists
  const featuredProjects = useMemo(
    () => PROJECTS.filter((p) => p.featured),
    []
  );
  const allProjects = useMemo(() => PROJECTS, []);

  return (
    <section id="projects" className="section-container bg-gray-50">
      <div className="mb-12 text-center">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          A showcase of my work, from full-stack applications to specialized
          tools
        </p>
      </div>

      {/* Featured Projects */}
      <div className="mb-16">
        <h3 className="flex items-center mb-8 text-2xl font-bold">
          <span className="flex items-center justify-center w-8 h-8 mr-3 text-white rounded-full bg-gradient-to-r from-primary to-accent">
            <IoIosStar color="orange" />
          </span>
          Featured Projects
        </h3>

        <div className="grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden bg-white shadow-sm card group rounded-2xl"
            >
              <LazyImage
                src={project.image}
                alt={`Screenshot of ${project.title}`}
              />

              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl transition-transform transform group-hover:scale-110">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold leading-tight">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {project.github.split("/").pop()}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mb-4 text-gray-600">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <FaStar />
                      <span className="text-sm font-medium">
                        {project.stars}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <FaCodeBranch />
                      <span className="text-sm font-medium">
                        {project.forks}
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 text-gray-700 transition-colors bg-gray-100 rounded-full hover:bg-gray-200"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub />
                    </a>

                    <a
                      href={project.live || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-10 h-10 text-white transition-colors rounded-full ${
                        project.live
                          ? "bg-primary hover:bg-secondary"
                          : "bg-gray-300 cursor-not-allowed"
                      }`}
                      aria-label="Live Demo"
                      {...(!project.live ? { "aria-disabled": true } : {})}
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

      {/* All Projects (deferred) */}
      <div>
        <h3 className="mb-8 text-2xl font-bold">All Projects</h3>

        {!showAll ? (
          // lightweight placeholder showing skeleton cards while the grid is deferred
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="p-6 bg-white rounded-lg shadow-sm">
                <div className="w-full mb-4 bg-gray-200 rounded-lg h-44 animate-pulse" />
                <div className="w-3/4 h-4 mb-2 bg-gray-200 rounded animate-pulse" />
                <div className="w-1/2 h-4 mb-4 bg-gray-200 rounded animate-pulse" />
                <div className="flex items-center justify-between">
                  <div className="w-24 h-6 bg-gray-200 rounded animate-pulse" />
                  <div className="w-12 h-6 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allProjects.map((project) => (
              <article
                key={project.id}
                className="p-6 transition-all duration-300 transform bg-white rounded-lg card group hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative w-full mb-4 overflow-hidden rounded-lg h-44">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    loading="lazy"
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  {project.featured && (
                    <span className="absolute px-2 py-1 text-xs font-semibold text-white rounded-full top-2 right-2 bg-gradient-to-r from-yellow-400 to-orange-500">
                      Featured
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{project.icon}</div>
                    <h4 className="text-lg font-bold">{project.title}</h4>
                  </div>
                </div>

                <p className="mb-4 text-sm text-gray-600 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href={project.live || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-primary hover:text-secondary"
                    aria-disabled={!project.live}
                  >
                    View Demo <FaExternalLinkAlt className="ml-1" size={12} />
                  </a>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <FaStar size={12} />
                      <span className="text-xs font-medium">
                        {project.stars}
                      </span>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-dark"
                      aria-label="GitHub"
                    >
                      <FaGithub size={14} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <div className="p-8 text-white bg-gradient-to-r from-primary to-accent rounded-2xl">
          <h3 className="mb-4 text-2xl font-bold">Want to see more?</h3>
          <p className="mb-6 opacity-90">
            Check out my GitHub for all my projects, contributions, and
            open-source work.
          </p>
          <a
            href="https://github.com/IsharaWanninayaka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 font-semibold transition-colors bg-white rounded-lg text-primary hover:bg-gray-100"
          >
            <FaGithub className="mr-2" /> Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
});

export default ProjectsOptimized;
