import React from 'react';
import {Link} from 'react-scroll';
import './Hero.css';
import FotoRian from '../assets/fotorian.png';
import { Typewriter } from 'react-simple-typewriter';
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';


function Hero({ toggleDarkMode, darkMode }) {
  return (
    <section className="hero" id="hero">
      <div className="dark-mode-btn-container">
        
      </div>
            <div className="hero-container">
                <img src={FotoRian} alt="Foto Rian Syahputra" className="image" />
                <div className="hero-text">
                    <h1 className="text-3d-glow">Halo, Saya Rian Syahputra</h1>
                   <p><Typewriter words={['Mahasiswa Yang Belajar React','Mahasiswa ST Bhineka','Mahasiswa Jurusan Informatika','Cobaaa Hacker Mode Dengan Ctrl + K']}
                       loop={0}
                       cursor
                       cursorStyle="_"
                       typeSpeed={70}
                       deleteSpeed={100}
                       delaySpeed={2000}
                      /></p>
                   <Link to="tentang" smooth={true} duration={500}>
                   <button className="btn">Tentang</button>
                   </Link>

                  
                   <Link to="proyek" smooth={true} duration={500}>
                   <button className="btn">Proyek</button>
                   </Link>

                   <Link to="kontak" smooth={true} duration={500}>
                   <button className="btn">Kontak</button>
                   </Link>

                   <button onClick={toggleDarkMode} className="btn">
          <motion.div
    key={darkMode} // penting agar animasi jalan saat state berubah
    initial={{ rotate: 180, opacity: 0 }}
    animate={{ rotate: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
  </motion.div>
        </button>
                </div>
                
            </div>
            
        </section>
    )
}

export default Hero;