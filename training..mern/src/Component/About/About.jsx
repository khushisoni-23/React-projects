import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Left side: portrait */}
        <div className="about-image">
          <img src="https://thumbs.dreamstime.com/b/cheerful-indian-business-leader-man-posing-professional-head-shot-confident-handsome-hands-folded-looking-camera-413376416.jpg" alt="Eliott Portrait" />
        </div>

        {/* Right side: text content */}
        <div className="about-content">
          <h2 className="section-title">ABOUT ME</h2>
          <h3 className="section-subtitle">A bit about who I am</h3>
          <p>
            I'm Eliott, a freelance designer and frontend developer based in
            Paris with 5 years of experience shipping digital products for
            startups, agencies, and scale-ups across Europe. I thrive at the
            intersection of great design and clean code.
          </p>
          <p>
            I believe great interfaces are invisible — they get out of the
            user's way. My work is fast, accessible and built to last. When I'm
            not coding, you'll find me hiking or hunting for a good espresso.
          </p>

          <h3 className="stack-title">STACK & TOOLS</h3>
          <div className="stack-tags">
            <span>Tailwind CSS</span>
            <span>Alpine.js</span>
            <span>Figma</span>
            <span>HTML / CSS</span>
            <span>JavaScript</span>
            <span>Symfony</span>
            <span>Framer</span>
            <span>Webflow</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
