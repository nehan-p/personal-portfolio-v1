import React from "react";
import "../assets/styles/About.scss";

function About() {
  return (
    <section id="about" className="aboutv2-section">
      <div className="aboutv2-inner">
        <div className="aboutv2-card">
          <div className="aboutv2-kicker">ABOUT ME</div>

          <h2 className="aboutv2-title">I build clean, thoughtful software.</h2>

          <div className="aboutv2-body">
            <p>
              I’m a Computer Science student at the University of Toronto focused
              on building reliable, well-designed systems. I enjoy working at the
              intersection of software engineering, automation, and AI, and I care
              a lot about clean architecture, performance, and developer experience.
            </p>

            <p>
              Recently, I’ve been working with GenAI systems, building workflow
              automation, prompt pipelines, and full-stack tools that turn ideas
              into usable products.
            </p>
          </div>

          <div className="aboutv2-tags">
            <span className="aboutv2-pill">Software Engineering</span>
            <span className="aboutv2-pill">Full-Stack</span>
            <span className="aboutv2-pill">Automation</span>
            <span className="aboutv2-pill">GenAI</span>
            <span className="aboutv2-pill">Clean Architecture</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
