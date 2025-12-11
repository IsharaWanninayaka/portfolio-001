import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCloud,
  FaGitAlt,
  FaFigma,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiDocker,
  SiKalilinux,
  SiWireshark,
  SiArduino,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      icon: <FaReact />,
      name: "React",
      level: 80,
      category: "frontend",
      color: "text-blue-500",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
      level: 90,
      category: "frontend",
      color: "text-yellow-500",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
      level: 60,
      category: "frontend",
      color: "text-blue-600",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      level: 90,
      category: "frontend",
      color: "text-teal-500",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      level: 80,
      category: "backend",
      color: "text-green-600",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
      level: 75,
      category: "backend",
      color: "text-gray-600",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      level: 80,
      category: "database",
      color: "text-green-500",
    },
    {
      icon: <FaDatabase />,
      name: "MySQL",
      level: 75,
      category: "database",
      color: "text-blue-700",
    },
    {
      icon: <FaPython />,
      name: "Python",
      level: 70,
      category: "language",
      color: "text-blue-400",
    },
    {
      icon: <FaJava />,
      name: "Java",
      level: 65,
      category: "language",
      color: "text-red-500",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
      level: 85,
      category: "tools",
      color: "text-orange-600",
    },
    {
      icon: <SiDocker />,
      name: "Docker",
      level: 60,
      category: "tools",
      color: "text-blue-400",
    },
    {
      icon: <SiKalilinux />,
      name: "Penetration Testing",
      level: 50,
      category: "cybersecurity",
      color: "text-red-600",
    },
    {
      icon: <SiWireshark />,
      name: "Network Security",
      level: 55,
      category: "cybersecurity",
      color: "text-blue-500",
    },
    {
      icon: <SiArduino />,
      name: "Arduino",
      level: 70,
      category: "hardware",
      color: "text-blue-500",
    },
  ];

  const categories = [
    { name: "Frontend", color: "bg-blue-100 text-blue-800", count: 4 },
    { name: "Backend", color: "bg-green-100 text-green-800", count: 3 },
    { name: "Database", color: "bg-purple-100 text-purple-800", count: 2 },
    { name: "Languages", color: "bg-red-100 text-red-800", count: 2 },
    { name: "Tools", color: "bg-orange-100 text-orange-800", count: 3 },
  ];

  return (
    <section id="skills" className="section-container">
      <div className="mb-12 text-center">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I've worked with to build modern web
          applications
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`px-4 py-2 rounded-full ${cat.color} font-medium flex items-center`}
          >
            {cat.name}
            <span className="ml-2 bg-white/50 px-2 py-0.5 rounded-full text-xs">
              {cat.count}
            </span>
          </div>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 text-center transition-all duration-300 transform card group hover:shadow-xl hover:-translate-y-2"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div
              className={`text-4xl mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
            >
              {skill.icon}
            </div>
            <h3 className="mb-3 text-lg font-bold">{skill.name}</h3>

            {/* Progress Bar */}
            <div className="relative pt-1">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-semibold text-gray-600">
                  Proficiency
                </div>
                <div className="text-xs font-bold text-primary">
                  {skill.level}%
                </div>
              </div>
              <div className="flex h-2 mb-4 overflow-hidden text-xs bg-gray-200 rounded">
                <div
                  style={{ width: `${skill.level}%` }}
                  className="flex flex-col justify-center text-center text-white shadow-none whitespace-nowrap bg-gradient-to-r from-primary to-accent"
                ></div>
              </div>
            </div>

            <span className="text-xs badge badge-primary">
              {skill.category}
            </span>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="grid gap-8 mt-16 md:grid-cols-3">
        <div className="p-8 text-center card">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full">
            <FaCloud className="text-2xl text-blue-600" />
          </div>
          <h3 className="mb-3 text-xl font-bold">Cloud Platforms</h3>
          <p className="text-gray-600">
            Experience with AWS, Vercel, and Firebase for deploying applications
          </p>
        </div>

        <div className="p-8 text-center card">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full">
            <FaDatabase className="text-2xl text-green-600" />
          </div>
          <h3 className="mb-3 text-xl font-bold">Database Design</h3>
          <p className="text-gray-600">
            Proficient in both SQL and NoSQL database design and optimization
          </p>
        </div>

        <div className="p-8 text-center card">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full">
            <FaGitAlt className="text-2xl text-purple-600" />
          </div>
          <h3 className="mb-3 text-xl font-bold">Version Control</h3>
          <p className="text-gray-600">
            Expertise in Git workflows, CI/CD pipelines, and team collaboration
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
