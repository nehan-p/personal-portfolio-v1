import React, { useState, useEffect } from "react";
import { Main, Timeline, Project, Contact, Navigation, Footer } from "./components";
import FadeIn from "./components/FadeIn";
import "./index.scss";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState<"dark" | "light">("dark");

  const handleModeChange = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  // SINGLE SOURCE OF TRUTH: also apply theme to <body>
  useEffect(() => {
    document.body.classList.toggle("dark-mode", mode === "dark");
    document.body.classList.toggle("light-mode", mode === "light");
  }, [mode]);

  return (
    <div className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />

      {/* Hero */}
      <Main />

      {/* Fade-in the rest */}
      <FadeIn transitionDuration={700}>
        <About />
        <Timeline />
        <Project />
        <Contact />
      </FadeIn>

      <Footer />
    </div>
  );
}

export default App;
