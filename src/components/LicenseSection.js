import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function LicenseSection() {
  const licenseRef = useRef(null);

  useEffect(() => {
    if (licenseRef.current) {
      gsap.fromTo(licenseRef.current, 
        { 
          opacity: 0,
          y: -30,
          scale: 0.8,
          rotation: 5
        },
        { 
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          delay: 2
        }
      );
    }
  }, []);

  return (
    <div className="license-section" ref={licenseRef}>
      <div className="license-card">
        <div className="license-header">
          <div className="license-icon">⚖️</div>
          <h3>License</h3>
        </div>
        <div className="license-content">
          <p>This project is licensed under the <strong>MIT License</strong></p>
          <div className="license-details">
            <div className="license-item">
              <span className="license-label">📝 License:</span>
              <span className="license-value">MIT</span>
            </div>
            <div className="license-item">
              <span className="license-label">👨‍💻 Author:</span>
              <span className="license-value">vishnuskandha</span>
            </div>
            <div className="license-item">
              <span className="license-label">📅 Year:</span>
              <span className="license-value">2024</span>
            </div>
          </div>
          <div className="license-footer">
            <p>Feel free to use this project for personal or commercial purposes!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LicenseSection;
