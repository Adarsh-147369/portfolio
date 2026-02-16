import React from 'react';
import './Experience.css';

function Experience({ experience, education }) {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        
        <div className="experience-section">
          <h3 className="subsection-title">Work Experience</h3>
          <div className="timeline">
            {experience.map((exp) => (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>{exp.title}</h4>
                  <p className="company">{exp.company}</p>
                  <p className="duration">{exp.duration}</p>
                  <p className="description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="education-section">
          <h3 className="subsection-title">Education</h3>
          <div className="timeline">
            {education.map((edu) => (
              <div key={edu.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>{edu.degree}</h4>
                  <p className="company">{edu.institution}</p>
                  <p className="duration">{edu.year}</p>
                  <p className="description">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
