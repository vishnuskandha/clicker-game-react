import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Game from "./components/Game";
import LicenseSection from "./components/LicenseSection";
import "./App.css";

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    // Page load animation
    if (appRef.current) {
      gsap.fromTo(appRef.current, 
        { 
          opacity: 0,
          scale: 0.8
        },
        { 
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out"
        }
      );
    }
  }, []);

  return (
    <>
      <LicenseSection />
      <div className="App" ref={appRef}>
        <Game />
      </div>
    </>
  );
}

export default App;
