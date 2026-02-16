import React from 'react';
import './Certifications.css';

function Certifications({ certifications }) {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <h3>{cert.title}</h3>
              <p className="issuer">{cert.issuer}</p>
              <p className="date">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
