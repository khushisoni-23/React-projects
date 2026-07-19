import React from 'react';
import './Services.css';
function Services(){
    return(
        <section className="service" id="services">
            <div className="service-text">
                <p className="my work">What I Do</p>
                <h1>Services</h1>
                <div className="cards">
                    <div className="card">
                        <h3>UI/UX Designer</h3>
                        <p>From wireframes to polished Figma prototypes. Intuitive, visually
            compelling interfaces that convert visitors into users and put usability first.</p>
                    </div>
                    <div className="card">
                        <h3>Frontend Dev</h3>
                        <p>Production-grade code with Tailwind CSS and React. Pixel-perfect,
            fully responsive, SEO-friendly and blazing fast — no bloat.</p>
                    </div>
                    <div className="card">
                        <h3>Landing Pages</h3>
                        <p>High-converting pages for SaaS, apps and personal brands. Designed
            to communicate value instantly and drive action from the first scroll.</p>
                    </div>
                    
                </div>

            </div>
        </section>
    )
}
export default Services;