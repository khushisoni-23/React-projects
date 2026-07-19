import React from 'react';
import './Herosection.css';

function Herosection() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="availability">AVAILABLE FOR WORK</p>
        <h1>Hi, I'm Eliott</h1>
        <h3>Freelance UI/UX Designer & Frontend Developer</h3>
        <p>
          I design and build digital products that people love to use — fast,
          clean, and accessible.
        </p>
        <div className="buttons">
          <button className="btn">View my work</button>
          <button className="btn secondary">Get in touch</button>
        </div>
        <div className="social-icons">
          <div>
            <h1>34+</h1>
            <h3>Projects Done</h3>
          </div>
          <div>
            <h1>21+</h1>
            <h3>Happy Clients</h3>
          </div>
          <div>
            <h1>5</h1>
            <h3>Years Experience</h3>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://thumbs.dreamstime.com/b/cheerful-indian-business-leader-man-posing-professional-head-shot-confident-handsome-hands-folded-looking-camera-413376416.jpg"
          alt="Eliott"
        />
        <button className="open-btn">Open to projects</button>
      </div>
    </section>
  );
}

export default Herosection;
    