import React from "react";
import { FaHeart, FaArrowUp, FaCode, FaCoffee } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const technologies = [
    "React",
    "PHP",
    "Node.js",
    "Java",
    "Tailwind CSS",
    "MongoDB",
    "Express",
    "c",
    "Python",
    "Flutter",
  ];

  return (
    <footer className="pt-12 pb-8 text-white bg-dark">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-8 mb-12 md:grid-cols-4">
          {/* Brand Column */}
          <div>
            <div className="flex items-center mb-4 space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-accent">
                <FaCode className="text-white" />
              </div>
              <span className="text-xl font-bold">Portfolio</span>
            </div>
            <p className="mb-6 text-gray-400">
              Passionate about building new, innovative ideas that shape smarter
              digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-bold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center text-gray-400 transition-colors hover:text-white group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="mb-6 text-lg font-bold">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm text-gray-300 transition-colors bg-gray-800 rounded-full hover:bg-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center justify-center w-12 h-12 mb-6 transition-colors bg-gray-800 rounded-full hover:bg-primary group"
              aria-label="Back to top"
            >
              <FaArrowUp className="group-hover:animate-bounce" />
            </button>
            <p className="text-gray-400">
              Ready for new challenges and opportunities
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 text-center md:mb-0 md:text-left">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} IsharaWanninayaka. All rights
                reserved.
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Built with React & Tailwind CSS
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-gray-400">Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span className="text-gray-400">
                for internship opportunities
              </span>
            </div>
          </div>

          {/* Attribution */}
          <div className="mt-8 text-sm text-center text-gray-500">
            <p>
              This portfolio is open source. Feel free to use it as a template
              for your own portfolio!
            </p>
            <p className="mt-2">
              Looking for internships in: Web Development • Software Engineering
              • Full Stack Development
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
