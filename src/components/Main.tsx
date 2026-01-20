import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      {/* Full-width background wrapper */}
      <div className="about-wrapper">
        {/* Centered content container */}
        <div className="about-section">
          <div className="image-wrapper">
            {/* Avatar can go here later if you want */}
          </div>

          <div className="content">
            <div className="social_icons">
              <a
                href="https://github.com/nehan-p"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/nehan-punjani/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>

            <h1>Nehan Punjani</h1>
            <p>I do stuff with code.</p>

            <div className="mobile_social_icons">
              <a
                href="https://github.com/nehan-p"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/nehan-punjani/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
