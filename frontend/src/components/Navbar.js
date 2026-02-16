import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ personalInfo }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <h1 className="logo">{personalInfo.name}</h1>
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li><button onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
            <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
            <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
            <li><button onClick={() => scrollToSection('certifications')}>Certifications</button></li>
            <li><button onClick={() => scrollToSection('extracurricular')}>Activities</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
