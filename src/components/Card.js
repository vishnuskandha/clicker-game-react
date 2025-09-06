import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Card({ id, card, handleCardClick, flipped, matched }) {
  const cardRef = useRef(null);
  const cardInnerRef = useRef(null);
  const flipTimeline = useRef(null);

  useEffect(() => {
    // Initialize card animation
    if (cardRef.current && cardInnerRef.current) {
      gsap.set(cardRef.current, {
        scale: 1,
        opacity: 1
      });
      gsap.set(cardInnerRef.current, {
        rotationY: 0
      });
    }
  }, []);

  useEffect(() => {
    if (cardInnerRef.current) {
      if (flipped && !matched) {
        // Card flip animation - faster and smoother
        flipTimeline.current = gsap.timeline();
        flipTimeline.current
          .to(cardInnerRef.current, {
            rotationY: 180,
            duration: 0.4,
            ease: "power2.out"
          });
      } else if (matched) {
        // Match animation - quicker celebration
        gsap.to(cardRef.current, {
          scale: 1.15,
          duration: 0.15,
          ease: "back.out(2)",
          yoyo: true,
          repeat: 1
        });
        
        // Subtle pulse for matched cards
        gsap.to(cardRef.current, {
          scale: 1.03,
          duration: 0.8,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1
        });
      } else {
        // Reset animation - quick reset
        gsap.to(cardInnerRef.current, {
          rotationY: 0,
          duration: 0.25,
          ease: "power2.out"
        });
      }
    }
  }, [flipped, matched, card]);

  const handleClick = () => {
    if (!flipped && !matched) {
      // Quick click animation
      gsap.to(cardRef.current, {
        scale: 0.92,
        duration: 0.08,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
        onComplete: () => {
          handleCardClick(id);
        }
      });
    }
  };

  const handleMouseEnter = () => {
    if (!flipped && !matched) {
      gsap.to(cardRef.current, {
        scale: 1.08,
        duration: 0.15,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeave = () => {
    if (!flipped && !matched) {
      gsap.to(cardRef.current, {
        scale: 1,
        duration: 0.15,
        ease: "power2.out"
      });
    }
  };

  return (
    <div
      ref={cardRef}
      className={`card ${flipped ? "flipped" : ""} ${matched ? "matched" : ""}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-inner" ref={cardInnerRef}>
        <div className="card-front">💀</div>
        <div className="card-back">{card}</div>
      </div>
    </div>
  );
}

export default Card;