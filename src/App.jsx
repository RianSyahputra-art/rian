import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import Tentang from './components/Tentang';
import Proyek from './components/Proyek';
import Kontak from './components/Kontak';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000});
  },[]);

  return (
    <div className="app">
      <Hero />
      <Tentang />
      <Proyek />
      <Kontak />
      <Footer />
    </div>
  );
}

export default App;
