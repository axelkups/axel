import React from 'react';
import '../App.css'; // Make sure your CSS is linked

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="overlay" />
        <div className="hero-content">
          <h1>Welcome to My Home</h1>
          <p>I design and build modern web experiences.</p>
          <button className="cta-button">Click</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
