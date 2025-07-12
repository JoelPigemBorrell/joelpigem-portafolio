import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
    const mailtoLink = `mailto:jpbportafolio@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSendEmail} className="contact-form fade-in-up">
        <label>
          <span><FaUser /> Name</span>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            placeholder="Your name" 
          />
        </label>
        <label>
          <span><FaEnvelope /> Email</span>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            placeholder="Your email" 
          />
        </label>
        <label>
          <span><FaPaperPlane /> Message</span>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            placeholder="Your message" 
            rows="5"
          />
        </label>
        <button type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
