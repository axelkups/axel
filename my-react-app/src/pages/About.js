import React from 'react';
import '../App.css';

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-content">
        <img
          src="/images/profile.jpg"
          alt="/"
          className="profile-image"
        />
        <div className="about-text">
          <p>
            Hi! I'm a web developer who loves building interactive and
            user-friendly websites. I'm passionate about front-end technologies
            and creative design.
          </p>
          <h3>Skills</h3>
          <ul>
            <li>HTML / CSS / JavaScript</li>
            <li>React.js</li>
            <li>Responsive Design</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
