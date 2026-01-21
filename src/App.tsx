import React, { useState, useEffect } from "react";
import { Main, Timeline, Project, Contact, Navigation, Footer } from "./components";
import FadeIn from "./components/FadeIn";
import "./index.scss";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState<string>("dark");

  const handleModeChange = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />

      {/* Hero should NOT be inside FadeIn (prevents initial snap/slide-in) */}
      <Main />

      {/* Fade-in the rest if you still want that effect */}
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
