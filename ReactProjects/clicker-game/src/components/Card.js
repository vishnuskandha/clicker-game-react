import React from "react";

function Card({ id, card, handleCardClick,flipped, matched }) {
  return (
    <div
      className={`card ${flipped ? "flipped" : ""} ${matched ? "matched" : ""}`}
      onClick={() => handleCardClick(id)}
    >
      {flipped || matched ? card : "💀"} {/* Show the card value if flipped or matched */}
    </div>
  );
}

export default Card;