import React from 'react';
import './Skills.css';

function Skills({ skills }) {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skillCategory) => (
            <div key={skillCategory.id} className="skill-card">
              <h3>{skillCategory.category}</h3>
              <ul>
                {skillCategory.items.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
