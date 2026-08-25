import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import './index.css';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="App bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <Hero />
      <Experience />
      <About />
      <Skills />
      <Projects onSelectProject={(project) => setSelectedProject(project)} />
      <Contact />
      <Footer />

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;