import React from "react";
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaAward,
  FaLightbulb,
  FaUsers,
  FaRocket,
} from "react-icons/fa";

const About = () => {
  const education = [
    {
      degree: "Bachelor Of Information and Communication Technology",
      institution: "Uva Wellassa University of Sri Lanka",
      duration: "2023 - Present",
      description: "Specializing in Software Technology",
    },
    {
      degree: "Full Stack Developer",
      institution: "University Of Moratuwa (Online Certification)",
      duration: "2025",
      description: "Angular, Node.js, MongoDB, and DevOps",
    },
    {
      degree: "Certified in Cybersecurity (CC)",
      institution: "ISC² (Online Certification)",
      duration: "2025",
      description:
        "Fundamentals of cybersecurity, network security, risk management, and security best practices.",
    },
  ];

  const strengths = [
    {
      icon: <FaLightbulb />,
      title: "Problem Solver",
      desc: "Analytical approach to complex challenges",
    },
    {
      icon: <FaRocket />,
      title: "Fast Learner",
      desc: "Quickly adapt to new technologies",
    },
    {
      icon: <FaUsers />,
      title: "Team Player",
      desc: "Excellent collaboration skills",
    },
    {
      icon: <FaAward />,
      title: "Detail Oriented",
      desc: "Focus on quality and precision",
    },
  ];

  return (
    <section id="about" className="section-container bg-gray-50">
      <div className="mb-12 text-center">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate developer with a strong foundation in computer science
          principles, software engineering, and modern web technologies.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Education Section */}
        <div className="space-y-8">
          <div className="flex items-center mb-6 space-x-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
              <FaGraduationCap className="text-xl text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Education</h3>
          </div>

          {education.map((edu, index) => (
            <div key={index} className="relative p-6 card">
              <div className="absolute w-6 h-6 rounded-full -left-3 top-6 bg-primary"></div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-xl font-bold text-dark">{edu.degree}</h4>
                  <div className="flex items-center mt-1 space-x-2 text-gray-600">
                    <FaUniversity />
                    <span>{edu.institution}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 text-primary">
                    <FaCalendarAlt />
                    <span className="font-semibold">{edu.duration}</span>
                  </div>
                  <div className="mt-1 text-sm text-gray-500">{edu.gpa}</div>
                </div>
              </div>
              <p className="text-gray-600">{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Strengths Section */}
        <div className="space-y-8">
          <div className="flex items-center mb-6 space-x-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
              <FaAward className="text-xl text-accent" />
            </div>
            <h3 className="text-2xl font-bold">My Strengths</h3>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="p-6 text-center transition-colors card group hover:border-primary/30"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl text-white transition-transform rounded-full bg-gradient-to-r from-primary to-accent group-hover:scale-110">
                  {strength.icon}
                </div>
                <h4 className="mb-2 text-lg font-bold">{strength.title}</h4>
                <p className="text-sm text-gray-600">{strength.desc}</p>
              </div>
            ))}
          </div>

          {/* Why Hire Me */}
          <div className="p-6 mt-8 card">
            <h4 className="flex items-center mb-4 text-xl font-bold">
              <span className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-primary/10">
                <FaRocket className="text-primary" />
              </span>
              Why I'm a Great Fit for Your Team
            </h4>
            <ul className="space-y-3">
              {[
                "Strong foundation in computer science principles",
                "Experience with modern web development stack",
                "Excellent problem-solving and analytical skills",
                "Quick learner with passion for new technologies",
                "Team player with good communication skills",
                "Eager to contribute and learn from professionals",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mt-1 mr-2 text-primary">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
