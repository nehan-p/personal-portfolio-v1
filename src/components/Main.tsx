import React, { useEffect, useMemo, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";

function Main() {
  // Hero load animation
  const [isLoaded, setIsLoaded] = useState(false);

  // Arrow direction
  const [isUp, setIsUp] = useState(false);

  // Add a tiny hysteresis so it doesn't "flip-flip" around the threshold
  const thresholds = useMemo(() => {
    return { downToUp: 180, upToDown: 120 };
  }, []);

  const scrollToAbout = () => {
    const target = document.getElementById("about");
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // trigger hero entrance once after first paint
    const raf = requestAnimationFrame(() => setIsLoaded(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      // Smooth, non-abrupt switching using hysteresis
      setIsUp((prev) => {
        if (!prev && y > thresholds.downToUp) return true;   // switch to UP
        if (prev && y < thresholds.upToDown) return false;    // switch to DOWN
        return prev;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [thresholds]);

  const handleCueClick = () => {
    if (isUp) scrollToTop();
    else scrollToAbout();
  };

  return (
    <div className="container">
      <div id="home" 
      className={["about-wrapper", isLoaded ? "is-loaded" : ""].join(" ")}>
        <div className="about-section">
          <div className="image-wrapper">{/* avatar later */}</div>

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

        {/* Scroll cue */}
        <button
          type="button"
          className={["scroll-cue", isUp ? "is-up" : ""].join(" ")}
          aria-label={isUp ? "Scroll back to top" : "Scroll to About section"}
          onClick={handleCueClick}
        >
          <span className="arrow" />
        </button>
      </div>
    </div>
  );
}

export default Main;
