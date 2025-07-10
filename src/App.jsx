import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import Tentang from './components/Tentang';
import Proyek from './components/Proyek';
import Kontak from './components/Kontak';
import Footer from './components/Footer';
import BackToTop from "./components/BackToTop";
import './App.css';

function App() {
  const [hackerMode, setHackerMode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000});
  },[]);
  useEffect(() => {
  AOS.init({ duration: 1000 });
  

  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key.toLowerCase() === 'k') {
      e.preventDefault(); // biar gak buka pencarian browser
      setHackerMode(prev => !prev);
    }
  };

  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, []);


    const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : ''} ${hackerMode ? 'hacker' : ''}`}>

            
      <Hero toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Tentang />
      <Proyek />
      <Kontak />
      <Footer />
      <BackToTop />


    </div>
  );
}

export default App;
