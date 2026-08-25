import React from "react";
import { FaHeart, FaArrowUp, FaMobileAlt } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const technologies = [
    "Flutter",
    "Dart",
    "React.js",
    "Node.js",
    "TypeScript",
    "Firebase",
    "MongoDB",
    "Express.js",
    "Python",
    "Tailwind CSS",
  ];

  return (
    <footer className="pt-16 pb-8 bg-slate-950 text-slate-300 border-t border-slate-800/80">
      <div className="container max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid gap-10 mb-12 md:grid-cols-4">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-teal-400 to-indigo-500 p-0.5 shadow-glow-cyan">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-mono text-cyan-400 font-extrabold text-base">IW</span>
                </div>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Ishara <span className="text-cyan-400">W.</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Mobile App Developer & Software Engineer with 6 months corporate internship experience at CeylonX Corporation.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-[11px] text-cyan-300 font-mono">
              <FaMobileAlt className="text-cyan-400" /> Flutter & Full Stack Specialist
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-200">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-cyan-400 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Stack */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-200">
              Tech Stack & Tools
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 text-[11px] font-mono text-slate-300 bg-slate-900 border border-slate-800 rounded-md hover:border-cyan-500/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Back to Top */}
          <div className="flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-cyan-400 transition-all shadow-lg"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <FaArrowUp className="text-cyan-400" />
            </button>
            <p className="mt-4 text-xs text-slate-400 md:text-right">
              Ex-CeylonX Corporation Intern • Available for Mobile & Software Engineering Opportunities
            </p>
          </div>
        </div>

        {/* Bottom Legal & Attribution */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>&copy; {new Date().getFullYear()} Ishara Wanninayaka. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-1.5">
            <span>Built with passion & engineering precision</span>
            <FaHeart className="text-cyan-400 text-xs" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

