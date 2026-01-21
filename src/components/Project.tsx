import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <div className="projects-header">
        <span className="section-kicker">MY WORK</span>
        <h1 className="section-title">Things I’ve Built</h1>
      </div>

      <div className="projects-grid">
        <div className="project">
          <a
            href="https://github.com/nehan-p/diglott"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock01} className="zoom" alt="Diglott thumbnail" />
          </a>
          <a
            href="https://github.com/nehan-p/diglott"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Diglott</h2>
          </a>
          <p>
            Language-learning translator with word-level playback using DeepL API
            and Google Cloud Text-to-Speech, built with Clean Architecture and
            SOLID principles.
          </p>
        </div>

        <div className="project">
          <a
            href="https://github.com/nehan-p/columns"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock02} className="zoom" alt="Columns thumbnail" />
          </a>
          <a
            href="https://github.com/nehan-p/columns"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Columns (MIPS Assembly Game)</h2>
          </a>
          <p>
            Falling-block puzzle game built from scratch in MIPS assembly using
            memory-mapped I/O, including gravity, matching logic, and rendering.
          </p>
        </div>

        <div className="project">
          <a
            href="https://github.com/nehan-p/twitter-visualizer"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock03} className="zoom" alt="Twitter Visualizer thumbnail" />
          </a>
          <a
            href="https://github.com/nehan-p/twitter-visualizer"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Twitter Engagement Visualizer</h2>
          </a>
          <p>
            Graph-based analysis and visualization of Twitter interactions using
            NetworkX, exploring communities, rankings, and engagement patterns.
          </p>
        </div>

        <div className="project">
          <a
            href="https://docs.google.com/presentation/d/1D0HDcg542q_zsB0RekX41krOKtQDDRmD6zNX4BAkt34/edit?slide=id.p#slide=id.p"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock04} className="zoom" alt="Health Insights thumbnail" />
          </a>
          <a
            href="https://docs.google.com/presentation/d/1D0HDcg542q_zsB0RekX41krOKtQDDRmD6zNX4BAkt34/edit?slide=id.p#slide=id.p"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Health Insights Dashboard</h2>
          </a>
          <p>
            Data analysis project using the Canadian Community Health Survey
            (8,000+ entries) to study relationships between social connectedness
            and life satisfaction, presented at a course showcase.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
