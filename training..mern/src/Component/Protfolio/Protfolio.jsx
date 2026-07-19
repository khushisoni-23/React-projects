
// <img
//   src="https://themewagon.github.io/folio-tailwind/assets/orea-agency.png"
//   alt="Orea Creative Agency"
// />

import React from "react";
import "./Protfolio.css";

const Protfolio = () => {
  return (
    <section className="portfolio" id="work">
      <p className="portfolio-label">Protfolio</p>
      <h2 className="portfolio-title">Selected Work</h2>

      <div className="portfolio-grid">
        {/* Project 1 */}
        <div className="portfolio-card">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2dc5fc182913459.653681fd49f73.png"
            alt="SaaS Dashboard"
            className="portfolio-image"
          />
          <div className="portfolio-tags">
            <span>SaaS</span>
            <span>Figma</span>
            <span>Tailwind</span>
          </div>
          <div className="portfolio-info">
            <h3>Novu — SaaS Dashboard</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis, odit nam aperiam fugiat optio libero. Nisi, minus officiis eius odio tempora velit fugit at, id labore ut libero reiciendis!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ducimus repudiandae eligendi veritatis dicta quo fuga fugiat autem tempore perspiciatis illo doloremque est labore, molestiae eius, voluptatum ex aut quibusdam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur neque ipsum eveniet eligendi dolores, dicta beatae? Velit iusto nemo praesentium architecto, ipsa excepturi facere quisquam, reprehenderit a cumque sapiente? Laudantium!
            </p>
            <a href="#" className="case-link">
              View case study →
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="portfolio-card">
          <img
            src="https://www.fynloapps.com/wp-content/uploads/2025/05/Floating-Laptop-Air-Mockup-1-768x708.png"
            alt="Finlo Fintech App"
            className="portfolio-image"
          />
          <div className="portfolio-tags">
            <span>Finetech</span>
            <span>Landing Page</span>
            
          </div>
          <div className="portfolio-info">
            <h3>Finlo — Fintech App</h3>
            <p>
              Marketing site and onboarding flow for a personal finance app
              targeting young professionals. Tailwind CSS + Alpine.js.
            </p>
            <a href="#" className="case-link">
              View case study →
            </a>
          </div>
        </div>

        {/* Orea Project */}
        <div className="portfolio-card">
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR-vu9eVCLo6zb0v46qCGZ1ItF1NMLttokOcmHAtf_ZgR1JDrc-AoH7Hip&s=10"
            alt="creative agency"
            className="portfolio-image"
          />
          <div className="portfolio-tags">
            <span>Agency </span>
            <span>Animation</span>
            
          </div>
          <div className="portfolio-info"></div>
          <h3>Orea — Creative Agency</h3>
          <p>
            Bold editorial site for a Paris-based branding studio. Scroll-driven
            animations and custom cursor to match their premium positioning.
          </p>
          <a href="#" className="case-link">
            View case study →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Protfolio;
