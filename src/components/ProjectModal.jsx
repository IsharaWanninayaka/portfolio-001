import React, { useEffect } from "react";
import { FaTimes, FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaCheck } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card border-cyan-500/40 bg-slate-900/95 shadow-2xl p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-cyan-500/20 transition-colors"
          aria-label="Close Modal"
        >
          <FaTimes />
        </button>

        {/* Modal Banner Image */}
        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-6 bg-slate-950 border border-slate-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl text-cyan-400 bg-slate-900/80 p-2 rounded-lg border border-slate-700">
                {project.icon}
              </span>
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider border border-cyan-500/30">
                  {project.category || "Project Showcase"}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">{project.title}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-6 text-slate-200">
          <div>
            <h4 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-2">Overview</h4>
            <p className="text-base text-slate-300 leading-relaxed">{project.description}</p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-3">Key Features</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-300">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-800/40 p-2.5 rounded-lg border border-slate-800">
                    <FaCheck className="text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-3">Technologies & Tools</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-lg bg-cyan-950/60 text-cyan-300 border border-cyan-800/50 font-mono font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Stats & External Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800">
            <div className="flex items-center gap-4 text-sm text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700">
                <FaStar className="text-amber-400" /> {project.stars || 0} Stars
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700">
                <FaCodeBranch className="text-cyan-400" /> {project.forks || 0} Forks
              </span>
            </div>

            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm px-4 py-2.5"
                >
                  <FaGithub className="text-base" /> Source Code
                </a>
              )}
              {(project.live || project.github) && (
                <a
                  href={project.live || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient text-sm px-4 py-2.5"
                >
                  <FaExternalLinkAlt className="text-xs" /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
