import React from 'react';
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer" data-aos="fade-up">
           
            <div className="sosmed-icons">
              <a
               href="https://github.com/RianSyahputra-art" 
               target="_blank"
               rel="noopener noreferrer"
               >
               <FaGithub size={24} />
              </a>
            </div>
            <p>© 2025 Rian Syahputra. All rights reserved.</p>
        </footer>  
    );
}

export default Footer;
    