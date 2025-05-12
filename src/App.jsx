import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import About from './components/About';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      // Cek preferensi yang tersimpan
      const savedDarkMode = localStorage.getItem('darkMode');
      if (savedDarkMode !== null) {
        return JSON.parse(savedDarkMode);
      }
    } catch (err) {
      console.error("Error reading darkMode from localStorage:", err);
    }
    
    // Jika tidak ada, cek preferensi sistem
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    try {
      // Simpan preferensi ke localStorage
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
    } catch (err) {
      console.error("Error saving darkMode to localStorage:", err);
    }
    
    // Terapkan kelas dark/light ke html element
    const htmlElement = document.documentElement;
    
    if (darkMode) {
      htmlElement.classList.add('dark');
      htmlElement.classList.remove('light');
    } else {
      htmlElement.classList.remove('dark');
      htmlElement.classList.add('light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="transition-colors duration-300">
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      
      <main>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero _darkMode={darkMode} />
            <About _darkMode={darkMode} />
            <Skills _darkMode={darkMode} />
            <Certifications _darkMode={darkMode} />
            <Projects _darkMode={darkMode} />
            <Contact _darkMode={darkMode} />
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer _darkMode={darkMode} />
    </div>
  );
}

export default App;