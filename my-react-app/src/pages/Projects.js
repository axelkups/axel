import React from 'react';
import '../App.css';

const Projects = () => {
  return (
    <div className="project-page">
      <header className="project-header">
        <h1>Projects</h1>
        <hr />
        <p className="project-subtitle">
          Our projects are examples of attitudes rather than designs.
        </p>
        <p className="project-description">
          They are samples in a series of contextual examinations rather than isolated masterpieces. They are associative rather than symbolic. They are comments rather than statements. Every story told is a shared experience of contemporary conditions set within a given frame.
        </p>
      </header>

      <section className="project-gallery">
        <img src="/healthypaws.png" alt="Project 1" />
        <img src="/vnshrms.png" alt="Project 2" />
      </section>
    </div>
  );
};

export default Projects;
