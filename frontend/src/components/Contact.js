import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

function Contact({ personalInfo }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await axios.post('/api/contact', formData);
      if (response.data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <strong>Email:</strong>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </div>
            <div className="info-item">
              <strong>Phone:</strong>
              <span>{personalInfo.phone}</span>
            </div>
            <div className="info-item">
              <strong>Location:</strong>
              <span>{personalInfo.location}</span>
            </div>
            <div className="social-links">
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <p className="success-message">Message sent successfully!</p>}
            {status === 'error' && <p className="error-message">Failed to send message. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
