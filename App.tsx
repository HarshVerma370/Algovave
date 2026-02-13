
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ExperienceTimeline from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
// import AIAssistant from './components/AIAssistant';
import Developer from './components/Developer';
import Merchandise from './components/Merchandise';
import { ThemeContext } from './context/ThemeContext';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className="relative min-h-screen transition-colors duration-500 dark:bg-zinc-950 bg-zinc-50">
        <Header />
        
        <main>
          <Hero />
          
          <div className="container mx-auto px-4 space-y-32 py-20 relative z-10">
            {/* Services Introduction */}
            <section id="services" className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter dark:text-white text-zinc-900">
                Digital Engineering at <span className="text-primary italic">Scale</span>
              </h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                Algovave provides end-to-end digital solutions that convert curiosity into loyalty. From pixel-perfect website architecture to high-impact video storytelling, we build the future.
              </p>
            </section>

            <Developer />
            <Projects />
            <Merchandise />
            <Skills />
            <ExperienceTimeline />
          </div>
        </main>

        <Footer />
        
        {/* <AIAssistant /> */}
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
