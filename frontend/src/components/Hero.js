import React from 'react';
import './Hero.css';

function Hero({ personalInfo }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h2>Hi, this is <span className="highlight">{personalInfo.name}</span></h2>
          <p className="tagline">{personalInfo.title}</p>
          <p className="hero-bio">{personalInfo.bio}</p>
          <div className="cta-buttons">
            <button onClick={() => scrollToSection('contact')} className="btn btn-primary">
              Get In Touch
            </button>
            <button onClick={() => scrollToSection('projects')} className="btn btn-secondary">
              View My Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
