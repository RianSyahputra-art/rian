import React from 'react';
import {Link} from 'react-scroll';
import './Hero.css';

function Hero() {
    return (
        <section className="hero" id="hero" data-aos="fade-down">
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
            </div>
        </section>
    )
}

export default Hero;