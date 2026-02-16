import React from 'react';
import './Extracurricular.css';

function Extracurricular({ extracurricular }) {
  return (
    <section id="extracurricular" className="extracurricular">
      <div className="container">
        <h2 className="section-title">Extracurricular Activities</h2>
        <div className="activities-timeline">
          {extracurricular.map((activity) => (
            <div key={activity.id} className="activity-item">
              <div className="activity-marker"></div>
              <div className="activity-content">
                <h3>{activity.title}</h3>
                <p className="organization">{activity.organization}</p>
                <p className="duration">{activity.duration}</p>
                <p className="description">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Extracurricular;
