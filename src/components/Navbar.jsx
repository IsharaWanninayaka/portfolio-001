import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHome,
  FaUser,
  FaBriefcase,
  FaCode,
  FaProjectDiagram,
  FaPhone,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", icon: <FaHome />, href: "#home" },
    { name: "Experience", icon: <FaBriefcase />, href: "#experience" },
    { name: "About", icon: <FaUser />, href: "#about" },
    { name: "Skills", icon: <FaCode />, href: "#skills" },
    { name: "Projects", icon: <FaProjectDiagram />, href: "#projects" },
    { name: "Contact", icon: <FaPhone />, href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/IsharaWanninayaka",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/ishara-wanninayaka-b05173327",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:isharawanninayaka26@gmail.com",
      label: "Email",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-teal-400 to-indigo-500 p-0.5 shadow-glow-cyan transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-mono text-cyan-400 font-extrabold text-lg">IW</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                Ishara <span className="text-cyan-400">W.</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="items-center hidden space-x-1 lg:flex bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-slate-300 rounded-full transition-all duration-200 hover:text-white hover:bg-slate-800/80 hover:shadow-sm"
              >
                <span className="text-cyan-400 text-xs">{item.icon}</span>
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Right Action Icons & Socials */}
          <div className="items-center hidden space-x-3 lg:flex">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 text-slate-300 transition-all duration-300 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-400 hover:scale-110"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold text-slate-950 rounded-lg bg-gradient-to-r from-cyan-400 to-teal-400 hover:opacity-90 transition-opacity shadow-glow-cyan"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-10 h-10 text-slate-300 rounded-xl bg-slate-900 border border-slate-800 lg:hidden hover:text-cyan-400"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="p-4 mt-3 bg-slate-900/95 backdrop-blur-xl border border-slate-800 lg:hidden rounded-2xl shadow-2xl animate-slide-up">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-4 py-3 space-x-3 text-slate-300 rounded-xl transition-colors hover:text-white hover:bg-slate-800/80"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-cyan-400">{item.icon}</span>
                  <span className="font-medium text-sm">{item.name}</span>
                </a>
              ))}
            </div>

            <div className="px-2 pt-4 mt-3 border-t border-slate-800/80 flex items-center justify-between">
              <div className="flex space-x-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 transition-colors rounded-lg bg-slate-800 hover:text-cyan-400"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-950 rounded-lg bg-cyan-400 font-sans"
              >
                Let's Connect
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

