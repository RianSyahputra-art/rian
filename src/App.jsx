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
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000});
  },[]);

    const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
            
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
