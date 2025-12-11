import React from "react";
import {
  FaDownload,
  FaArrowRight,
  FaCode,
  FaServer,
  FaDatabase,
} from "react-icons/fa";

const Hero = () => {
  const stats = [
    { number: "5+", label: "Projects" },
    { number: "10+", label: "Technologies" },
    { number: "2+", label: "Years Learning" },
    { number: "100%", label: "Dedication" },
  ];

  const techIcons = [
    { icon: <FaCode />, color: "text-blue-500", label: "Frontend" },
    { icon: <FaServer />, color: "text-green-500", label: "Backend" },
    { icon: <FaDatabase />, color: "text-purple-500", label: "Database" },
  ];

  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen pt-20 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>

      {/* Animated Background Elements */}
      <div className="absolute rounded-full top-1/4 left-10 w-72 h-72 bg-primary/10 mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div
        className="absolute rounded-full bottom-1/4 right-10 w-72 h-72 bg-accent/10 mix-blend-multiply filter blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative z-10 section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-primary/10">
              <span className="w-2 h-2 mr-2 rounded-full bg-primary animate-ping"></span>
              <span className="text-sm font-semibold text-primary">
                Available for Internship
              </span>
            </div>

            <h1 className="mb-6">
              {/* First Line */}
              <div className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Hi, I'm <span className="text-gradient">Ishara</span>
              </div>

              {/* Second Line */}
              <div className="mt-4 md:mt-6">
                <div className="text-lg font-semibold text-gray-600 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                  <span className="inline-block md:block">
                    Aspiring Software Engineer
                  </span>
                  <span className="inline-block md:block">
                    ICT Undergraduate
                  </span>
                </div>
              </div>
            </h1>

            <p className="max-w-xl mb-8 text-lg text-gray-600">
              Motivated ICT student exploring software engineering, full-stack
              development, and cybersecurity. Skilled in developing scalable
              applications with React, Node.js, and cloud technologies.
            </p>

            <div className="flex flex-col gap-4 mb-12 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center btn-primary"
              >
                Contact Me <FaArrowRight className="ml-2" />
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center justify-center btn-secondary"
                download
              >
                Download CV <FaDownload className="ml-2" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 text-center border border-white bg-white/50 backdrop-blur-sm rounded-xl"
                >
                  <div className="text-2xl font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="animate-slide-up animate-delay-200">
            <div className="relative max-w-md mx-auto">
              {/* Main Card */}
              <div className="p-8 card">
                <div className="p-1 mx-auto mb-6 rounded-full w-[150px] h-[150px] bg-gradient-to-r from-primary to-accent">
                  <div className="flex items-center justify-center w-full h-full bg-white rounded-full">
                    <img
                      src="/profile.jpg"
                      alt="Profile"
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                </div>

                <h3 className="mb-2 text-2xl font-bold text-center">
                  Ishara Wanninayaka
                </h3>
                <p className="mb-6 text-center text-gray-600">
                  ICT Undergraduate
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="ml-10 text-gray-600">Frontend</span>
                    <div className="w-32 h-2 overflow-hidden bg-gray-200 rounded-full">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="ml-10 text-gray-600">Backend</span>
                    <div className="w-32 h-2 overflow-hidden bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="ml-10 text-gray-600">Database</span>
                    <div className="w-32 h-2 overflow-hidden bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-purple-500 rounded-full"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              {techIcons.map((tech, index) => (
                <div
                  key={index}
                  className={`absolute ${tech.color} bg-white p-4 rounded-xl shadow-lg animate-float`}
                  style={{
                    top: `${30 + index * 22}%`,
                    left: index === 0 ? "-20px" : index === 1 ? "80%" : "-10px",
                    animationDelay: `${index * 0.3}s`,
                  }}
                >
                  <div className="text-2xl">{tech.icon}</div>
                  <div className="mt-1 text-xs font-semibold">{tech.label}</div>
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
