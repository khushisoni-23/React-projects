import React from "react";
import "./Social Proofs.css";

function Testimonials() {
  const testimonials = [
    {
      stars: 5,
      quote:
        "Eliott delivered our redesign in record time and the quality blew us away. Our conversion rate jumped 28% in the first month. Absolutely recommend.",
      name: "Sarah Müller",
      title: "CPO, Novu",
      img: "https://img.magnific.com/free-photo/customer-service-cute-brunette-guy-suit-with-laptop-happy-touching-chin_140725-164987.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      stars: 5,
      quote:
        "Working with Eliott is a dream. He asks the right questions, moves fast, and the final result always exceeds what we imagined. Our best hire of 2024.",
      name: "Thomas Renault",
      title: "Founder, Finlo",
      img: "https://img.magnific.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      stars: 5,
      quote:
        "We had a tight deadline and a vague brief. Eliott turned both into a polished site in under two weeks. Clean code, zero hand-holding needed.",
      name: "Camille Dufresne",
      title: "Creative Director, Orea",
      img: "https://static.vecteezy.com/system/resources/thumbnails/057/226/446/small/a-beautiful-young-woman-in-a-business-suit-free-png.png",
    },
  ];

  return (
    <section className="testimonials" id="reviews">
      <h2 className="section-title">SOCIAL PROOF</h2>
      <h3 className="section-subtitle">What clients say</h3>

      <div className="testimonial-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">
              {"★".repeat(t.stars)}
            </div>
            <p className="quote">"{t.quote}"</p>
            <div className="client-info">
              <img src={t.img} alt={t.name} className="client-img" />
              <div>
                <h4 className="client-name">{t.name}</h4>
                <p className="client-title">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
