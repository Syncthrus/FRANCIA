import React, { useState } from 'react';
import './index.css';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [dark, setDark] = useState(true);
  const year = new Date().getFullYear();

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">

      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800 px-8 h-16 flex items-center justify-between">
        <span className="text-teal-400 font-mono font-bold text-lg">NGF</span>
        <nav className="flex gap-6 items-center">
          <a href="#about" className="text-gray-300 hover:text-teal-400 text-sm transition">About</a>
          <a href="#education" className="text-gray-300 hover:text-teal-400 text-sm transition">Education</a>
          <a href="#experience" className="text-gray-300 hover:text-teal-400 text-sm transition">Experience</a>
          <a href="#skills" className="text-gray-300 hover:text-teal-400 text-sm transition">Skills</a>
          <a href="#contact" className="text-gray-300 hover:text-teal-400 text-sm transition">Contact</a>
        <button
  onClick={function() { setDark(!dark); }}
  className="ml-2 text-xs font-semibold px-4 py-1 rounded-full border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 transition duration-200"
>
  {dark ? "Light" : "Dark"}
</button>
        </nav>
      </header>

      <section className="min-h-screen flex flex-col items-center justify-center text-center px-8 pt-16 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)" }}>

        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(14,165,200,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,200,0.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }} />

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div style={{ position:"absolute", top:"10%", left:"5%", fontSize:"2.5rem", opacity:0.13, animation:"float 6s ease-in-out infinite" }}>🛡</div>
          <div style={{ position:"absolute", top:"20%", left:"85%", fontSize:"2rem", opacity:0.13, animation:"float 8s ease-in-out infinite", animationDelay:"0.5s" }}>🔒</div>
          <div style={{ position:"absolute", top:"70%", left:"8%", fontSize:"2.8rem", opacity:0.13, animation:"float 7s ease-in-out infinite", animationDelay:"1s" }}>💻</div>
          <div style={{ position:"absolute", top:"75%", left:"80%", fontSize:"2.5rem", opacity:0.13, animation:"float 5s ease-in-out infinite", animationDelay:"1.5s" }}>🖥</div>
          <div style={{ position:"absolute", top:"40%", left:"90%", fontSize:"2rem", opacity:0.13, animation:"float 9s ease-in-out infinite", animationDelay:"2s" }}>🔐</div>
          <div style={{ position:"absolute", top:"15%", left:"50%", fontSize:"2rem", opacity:0.13, animation:"float 7s ease-in-out infinite", animationDelay:"2.5s" }}>📡</div>
          <div style={{ position:"absolute", top:"85%", left:"45%", fontSize:"2.5rem", opacity:0.13, animation:"float 8s ease-in-out infinite", animationDelay:"3s" }}>⌨</div>
          <div style={{ position:"absolute", top:"30%", left:"15%", fontSize:"1.8rem", opacity:0.13, animation:"float 10s ease-in-out infinite", animationDelay:"3.5s" }}>🔑</div>
          <div style={{ position:"absolute", top:"60%", left:"70%", fontSize:"2rem", opacity:0.13, animation:"float 7s ease-in-out infinite", animationDelay:"4s" }}>🧠</div>
          <div style={{ position:"absolute", top:"88%", left:"20%", fontSize:"2rem", opacity:0.13, animation:"float 6s ease-in-out infinite", animationDelay:"5s" }}>🖱</div>
          <div style={{ position:"absolute", top:"50%", left:"30%", fontSize:"2rem", opacity:0.13, animation:"float 8s ease-in-out infinite", animationDelay:"5.5s" }}>🔍</div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <img
            src="/profile.jpg"
            alt="Nicolai Gerard Francia"
            className="w-32 h-32 rounded-full object-cover object-top border-2 border-teal-400 mb-6"
          />
          <div className="text-xs font-bold tracking-widest text-teal-400 font-mono mb-4 border border-teal-400 rounded-full px-5 py-1">
            BS IT - NETWORK SECURITY
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-3 leading-tight">
            Nicolai Gerard <span className="text-teal-400">Francia</span>
          </h1>
          <p className="text-gray-400 text-xl mb-8">Aspiring Network Security Engineer</p>
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            <span className="px-4 py-1 rounded-full text-sm font-mono border text-teal-400 border-teal-400">Python</span>
            <span className="px-4 py-1 rounded-full text-sm font-mono border text-purple-400 border-purple-400">Java</span>
            <span className="px-4 py-1 rounded-full text-sm font-mono border text-teal-400 border-teal-400">Network Security</span>
            <span className="px-4 py-1 rounded-full text-sm font-mono border text-purple-400 border-purple-400">Linux</span>
            <span className="px-4 py-1 rounded-full text-sm font-mono border text-teal-400 border-teal-400">Cybersecurity</span>
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="#about" className="bg-teal-500 hover:bg-teal-400 text-white font-bold px-8 py-3 rounded-lg transition duration-200">
              Explore My Work
            </a>
            <a href="#contact" className="border border-gray-600 hover:border-teal-400 text-gray-300 hover:text-teal-400 font-semibold px-8 py-3 rounded-lg transition duration-200">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <main className="bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <div id="about"><AboutMe /></div>
          <div id="education"><Education /></div>
          <div id="experience"><Experience /></div>
          <div id="skills"><Skills /></div>
          <div id="contact"><Contact /></div>
        </div>
      </main>

      <footer className="text-center py-8 border-t border-gray-800 bg-gray-900">
        <p className="font-mono text-xs mb-1 text-teal-900 tracking-widest">BUILT WITH REACT JS AND TAILWIND CSS</p>
        <p className="text-gray-500 text-sm">Copyright {year} Nicolai Gerard Francia</p>
      </footer>

    </div>
  );
}

export default App;