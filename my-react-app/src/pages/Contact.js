import React from 'react';
import '../App.css'; // 👈 Make sure this matches your file location

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>You can reach me via email or through my social media below.</p>

      <div className="contact-info">
        <p>Email: <a href="mailto:your.email@example.com">tumpalanaxel1@gmail.com</a></p>
        <p>Facebook: <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">AxelDelanotumpalan</a></p>
        <p>no#: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">09303149990</a></p>
      </div>
    </div>
  );
}

export default Contact;
