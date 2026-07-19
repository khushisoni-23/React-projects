import React from "react";
import "./Blog.css";

function Blog() {
  const posts = [
    {
      category: "Design",
      date: "Mar 8, 2025",
      title: "Why I ditched heavy CSS frameworks for Tailwind",
      description:
        "After years of fighting specificity wars, here's what finally convinced me to make the switch.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV_sF-st6gbA4EJCAvwJ0wUYrnau68keF4nx6ec6KTAw&s",
      link: "#",
    },
    {
      category: "Dev",
      date: "Feb 21, 2025",
      title: "Building a design system from scratch in a weekend",
      description:
        "Tokens, components, docs — the process I follow to spin up a coherent system in 48 hours.",
      img: "https://plus.unsplash.com/premium_photo-1661589354357-f56ddf86a0b4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRlc2lnbiUyMHN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D",
      link: "#",
    },
    {
      category: "Freelance",
      date: "Jan 14, 2025",
      title: "5 lessons from my first year of full-time freelancing",
      description:
        "Contracts, pricing, scope creep — the things nobody tells you before you go solo.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN02Nf02tATOYSs8d75hrs8tFYTPkewk4ibmu1EfzTNXx_Hb2vqLgnQ-E&s=10",
      link: "#",
    },
  ];

  return (
    <section className="blog" id="blog">
      <p className="section-label">Thoughts</p>
      <h1 className="section-title">FROM THE BLOG</h1>
      <br></br>
  
      <div className="blog-grid">
        {posts.map((post, index) => (
          <div className="blog-card" key={index}>
            <img src={post.img} alt={post.title} className="blog-img" />
            <div className="blog-content">
              <p className="blog-meta">
                <span className="blog-category">{post.category}</span> |{" "}
                <span className="blog-date">{post.date}</span>
              </p>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-description">{post.description}</p>
              <a href={post.link} className="read-more">
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
