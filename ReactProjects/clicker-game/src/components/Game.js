import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../App.css"; // Correct path to App.css

const generateDeck = () => {
  const cardValues = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const deck = [...cardValues, ...cardValues]; // Duplicate values for pairs
  return deck.sort(() => Math.random() - 0.5); // Shuffle the deck
};

function Game() {
  const [deck, setDeck] = useState(generateDeck());
  const [flippedCards, setFlippedCards] = useState([]); // Indices of flipped cards
  const [matchedCards, setMatchedCards] = useState([]); // Values of matched cards
  const [moves, setMoves] = useState(0);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null); // Save interval ID

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    setIntervalId(interval);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;

      if (deck[first] === deck[second]) {
        // If matched, add the card to matchedCards
        setMatchedCards((prev) => [...prev, deck[first]]);
      }

      // Wait a moment before resetting flippedCards
      setTimeout(() => setFlippedCards([]), 1000);

      // Increment moves
      setMoves((prev) => prev + 1);
    }
  }, [flippedCards, deck]);

  useEffect(() => {
    if (matchedCards.length === deck.length / 2) {
      // Stop the timer when all matches are found
      clearInterval(intervalId);
    }
  }, [matchedCards, intervalId, deck.length]);

  const handleCardClick = (index) => {
    // Prevent more than 2 cards flipped or clicking an already flipped/matched card
    if (
      flippedCards.length < 2 &&
      !flippedCards.includes(index) &&
      !matchedCards.includes(deck[index])
    ) {
      setFlippedCards((prev) => [...prev, index]);
    }
  };

  const handleRestart = () => {
    setDeck(generateDeck());
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setTimer(0);
    clearInterval(intervalId); // Clear the previous timer
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    setIntervalId(interval); // Set a new timer
  };

  return (
    <div className="game">
      <h1>Memory Match Game</h1>
      <div className="stats">
        <p>Moves: {moves}</p>
        <p>Time: {timer} seconds</p>
      </div>
      <div className="board">
        {deck.map((card, index) => (
          <Card
            key={index}
            id={index}
            card={card}
            handleCardClick={handleCardClick}
            flipped={flippedCards.includes(index) || matchedCards.includes(card)}
            matched={matchedCards.includes(card)}
          />
        ))}
      </div>
      {matchedCards.length === deck.length / 2 && (
        <div className="win-message">
          <h2>You Win!</h2>
          <button onClick={handleRestart}>Restart Game</button>
        </div>
      )}
    </div>
  );
}

export default Game;
