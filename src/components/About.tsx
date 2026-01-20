import React from "react";
import "../assets/styles/About.scss";

export default function About() {
  return (
    <section id="expertise" className="about-section">
      <div className="about-inner">
        <div className="about-card">
          <p className="about-kicker">01. ABOUT ME</p>

          <h2 className="about-title">I build clean, thoughtful software.</h2>

          <div className="about-body">
            <p>
              I’m a Computer Science student at the University of Toronto focused on building reliable,
              well-designed systems. I enjoy working at the intersection of software engineering,
              automation, and AI, and I care a lot about clean architecture, performance, and developer
              experience.
            </p>

            <p>
              Recently, I’ve been working with GenAI systems, building workflow automation, prompt
              pipelines, and full-stack tools that turn ideas into usable products.
            </p>
          </div>

          <div className="about-tags">
            <span className="about-pill">Software Engineering</span>
            <span className="about-pill">Full-Stack</span>
            <span className="about-pill">Automation</span>
            <span className="about-pill">GenAI</span>
            <span className="about-pill">Clean Architecture</span>
          </div>
        </div>
      </div>
    </section>
  );
}
