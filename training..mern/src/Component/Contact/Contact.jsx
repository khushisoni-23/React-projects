import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* Left side: text + links */}
        <div className="contact-info">
          <h2 className="section-title">GET IN TOUCH</h2>
          <h3 className="section-subtitle">Let's work together</h3>
          <p>
            I’m available for UI/UX and frontend projects — whether short or
            long-term collaborations. Let’s create something great together.
          </p>

          <ul className="contact-links">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:hello@eliott.dev">hello@eliott.dev</a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://linkedin.com/in/eliott-dev" target="_blank" rel="noreferrer">
                linkedin.com/in/eliott-dev
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/eliott-dev" target="_blank" rel="noreferrer">
                github.com/eliott-dev
              </a>
            </li>
          </ul>
        </div>

        {/* Right side: form */}
        <form className="contact-form">
          <label>
            Name *
            <input type="text" placeholder="Jane Smith" required />
          </label>
          <label>
            Email *
            <input type="email" placeholder="jane@company.com" required />
          </label>
          <label>
            Subject
            <input type="text" placeholder="Project inquiry" />
          </label>
          <label>
            Message *
            <textarea placeholder="Tell me about your project..." required></textarea>
          </label>
          <button type="submit" className="send-btn">
            Send message →
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
