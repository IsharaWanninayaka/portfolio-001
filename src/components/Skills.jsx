import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCloud,
  FaGitAlt,
  FaPython,
  FaJava,
  FaMobileAlt,
  FaLayerGroup,
} from "react-icons/fa";
import {
  SiFlutter,
  SiDart,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiDocker,
  SiKalilinux,
  SiWireshark,
  SiAndroid,
  SiPostgresql,
} from "react-icons/si";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skills = [
    {
      icon: <SiFlutter />,
      name: "Flutter",
      level: 92,
      category: "mobile",
      color: "text-cyan-400",
      description: "Cross-platform mobile apps, custom UI widgets, native channels",
    },
    {
      icon: <SiDart />,
      name: "Dart",
      level: 90,
      category: "mobile",
      color: "text-blue-400",
      description: "Object-oriented programming, streams, async/await concurrency",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
      level: 85,
      category: "mobile",
      color: "text-amber-400",
      description: "Firestore, Cloud Messaging, Auth, Analytics, Remote Config",
    },
    {
      icon: <FaMobileAlt />,
      name: "Mobile State Management",
      level: 88,
      category: "mobile",
      color: "text-teal-400",
      description: "Bloc pattern, Provider, Riverpod, reactive UI architecture",
    },
    {
      icon: <FaReact />,
      name: "React.js",
      level: 88,
      category: "frontend",
      color: "text-cyan-400",
      description: "Hooks, SPA routing, state management, modern component design",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript (ES6+)",
      level: 90,
      category: "frontend",
      color: "text-yellow-400",
      description: "DOM manipulation, promises, async flows, functional programming",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
      level: 78,
      category: "frontend",
      color: "text-blue-500",
      description: "Strong typing, interface definitions, generics",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      level: 92,
      category: "frontend",
      color: "text-teal-400",
      description: "Responsive layouts, dark themes, custom CSS animations",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      level: 82,
      category: "backend",
      color: "text-emerald-400",
      description: "Asynchronous backend logic, RESTful microservices",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
      level: 80,
      category: "backend",
      color: "text-slate-300",
      description: "API routing, JWT authentication, middleware integration",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      level: 82,
      category: "database",
      color: "text-emerald-500",
      description: "NoSQL document schemas, aggregation pipelines, Mongoose",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL / MySQL",
      level: 80,
      category: "database",
      color: "text-blue-400",
      description: "Relational schema design, SQL queries, indexing, transactions",
    },
    {
      icon: <FaPython />,
      name: "Python",
      level: 75,
      category: "languages",
      color: "text-blue-300",
      description: "Data processing, Flask API endpoints, automation scripts",
    },
    {
      icon: <FaJava />,
      name: "Java",
      level: 70,
      category: "languages",
      color: "text-red-400",
      description: "OOP principles, enterprise software development",
    },
    {
      icon: <FaGitAlt />,
      name: "Git & GitHub",
      level: 90,
      category: "tools",
      color: "text-orange-400",
      description: "Branching strategies, pull requests, version control",
    },
    {
      icon: <SiDocker />,
      name: "Docker Basics",
      level: 65,
      category: "tools",
      color: "text-cyan-500",
      description: "Containerization, Dockerfiles, dev environment setups",
    },
    {
      icon: <SiKalilinux />,
      name: "Cybersecurity (CC)",
      level: 75,
      category: "cybersecurity",
      color: "text-red-500",
      description: "Network security, penetration testing basics, ISC² CC certified",
    },
  ];

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "mobile", label: "Mobile Development" },
    { id: "frontend", label: "Frontend Web" },
    { id: "backend", label: "Backend & APIs" },
    { id: "database", label: "Databases" },
    { id: "languages", label: "Languages" },
    { id: "tools", label: "Tools & Cyber" },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 bg-slate-900/60 border-y border-slate-800/80">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
              <FaLayerGroup className="text-xs" />
              <span>Tech Arsenal</span>
            </div>
          </div>
          <h2 className="section-title">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle">
            Battle-tested technologies and mobile software engineering skills honed through corporate internship and project development.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-cyan-500 text-slate-950 shadow-glow-cyan"
                  : "bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="glass-card p-6 flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-glow-cyan transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`text-4xl ${skill.color} p-2 rounded-xl bg-slate-950 border border-slate-800 group-hover:scale-110 transition-transform`}
                  >
                    {skill.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800/50">
                    {skill.level}%
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid gap-6 mt-16 md:grid-cols-3">
          <div className="glass-card p-6 text-center border-cyan-500/20">
            <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 bg-cyan-500/10 text-cyan-400 rounded-2xl text-2xl border border-cyan-500/30">
              <FaMobileAlt />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Mobile First Development</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Specialized in Flutter cross-platform architecture, reactive state management, and offline-first mobile sync.
            </p>
          </div>

          <div className="glass-card p-6 text-center border-teal-500/20">
            <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 bg-teal-500/10 text-teal-400 rounded-2xl text-2xl border border-teal-500/30">
              <FaCloud />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Cloud & RESTful APIs</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Designing scalable REST APIs, microservices integration, Firebase backend services, and cloud deployment.
            </p>
          </div>

          <div className="glass-card p-6 text-center border-purple-500/20">
            <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 bg-purple-500/10 text-purple-400 rounded-2xl text-2xl border border-purple-500/30">
              <FaGitAlt />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Agile & Clean Architecture</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Practicing Clean Code, SOLID software principles, Git flow collaboration, and test-driven mobile development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

