import React from 'react';
import './Footer.css';

function Footer({ personalInfo }) {
  return (
    <footer className="footer">
      <div className="container">
        <p>{personalInfo.name}</p>
      </div>
    </footer>
  );
}

export default Footer;
