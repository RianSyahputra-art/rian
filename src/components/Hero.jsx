import React from 'react';
import {Link} from 'react-scroll';
import './Hero.css';
import FotoRian from '../assets/fotorian.png';

function Hero({ toggleDarkMode, darkMode }) {
  return (
    <section className="hero" id="hero">
      <div className="dark-mode-btn-container">
        
      </div>
            <div className="hero-container">
                <img src={FotoRian} alt="Foto Rian Syahputra" className="hero-image" />
                <div className="hero-text">
                   <h1>Hallo, Saya Rian Syahputra</h1>
                   <p>Mahasiswa Yang Belajar React</p>
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
          {darkMode ? '🌞' : '🌙'}
        </button>
                </div>
                
            </div>
            
        </section>
    )
}

export default Hero;