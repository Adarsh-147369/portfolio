import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Extracurricular from './components/Extracurricular';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPortfolioData();
  }, []);

  const fetchPortfolioData = async () => {
    try {
      const response = await axios.get('/api/portfolio');
      setPortfolioData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching portfolio data:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading portfolio...</p>
      </div>
    );
  }

  if (!portfolioData) {
    return <div className="error">Failed to load portfolio data</div>;
  }

  return (
    <div className="App">
      <Navbar personalInfo={portfolioData.personal_info} />
      <Hero personalInfo={portfolioData.personal_info} />
      <About personalInfo={portfolioData.personal_info} />
      <Skills skills={portfolioData.skills} />
      <Projects projects={portfolioData.projects} />
      <Experience experience={portfolioData.experience} education={portfolioData.education} />
      <Certifications certifications={portfolioData.certifications} />
      <Extracurricular extracurricular={portfolioData.extracurricular} />
      <Contact personalInfo={portfolioData.personal_info} />
      <Footer personalInfo={portfolioData.personal_info} />
    </div>
  );
}

export default App;
