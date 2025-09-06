import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Card from "./Card";
import "../App.css";

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
  // Removed unused gameStarted state
  const [showWinMessage, setShowWinMessage] = useState(false);

  const gameRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef(null);
  const boardRef = useRef(null);
  const winMessageRef = useRef(null);

  // Initialize game animations
  useEffect(() => {
    if (gameRef.current) {
      // Initial setup
      gsap.set([titleRef.current, statsRef.current, boardRef.current], {
        opacity: 0,
        y: 50
      });

      // Animate game elements in sequence
      const tl = gsap.timeline();
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(statsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4")
      .to(boardRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.3");

      // Animate cards entrance - faster and smoother
      const cards = boardRef.current?.querySelectorAll('.card');
      if (cards) {
        gsap.fromTo(cards, 
          { 
            scale: 0, 
            rotation: 180,
            opacity: 0 
          },
          { 
            scale: 1, 
            rotation: 0,
            opacity: 1, 
            duration: 0.4, 
            stagger: 0.05,
            ease: "back.out(1.4)",
            delay: 0.3
          }
        );
      }
    }
  }, []);

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
        
        // Animate successful match - quicker feedback
        const matchedCardElements = boardRef.current?.querySelectorAll(`.card:nth-child(${first + 1}), .card:nth-child(${second + 1})`);
        if (matchedCardElements) {
          gsap.to(matchedCardElements, {
            scale: 1.2,
            duration: 0.2,
            ease: "back.out(2)",
            yoyo: true,
            repeat: 1
          });
        }
      } else {
        // Animate failed match - subtle shake
        const failedCardElements = boardRef.current?.querySelectorAll(`.card:nth-child(${first + 1}), .card:nth-child(${second + 1})`);
        if (failedCardElements) {
          gsap.to(failedCardElements, {
            rotation: 3,
            duration: 0.08,
            ease: "power2.inOut",
            yoyo: true,
            repeat: 3
          });
        }
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
      setShowWinMessage(true);
      
      // Animate win message
      if (winMessageRef.current) {
        gsap.fromTo(winMessageRef.current, 
          { 
            scale: 0, 
            opacity: 0,
            rotation: 180
          },
          { 
            scale: 1, 
            opacity: 1,
            rotation: 0,
            duration: 1, 
            ease: "back.out(1.7)"
          }
        );
      }
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
    // Animate restart
    if (boardRef.current) {
      const cards = boardRef.current.querySelectorAll('.card');
      gsap.to(cards, {
        scale: 0,
        rotation: 180,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.in",
        onComplete: () => {
          // Reset game state
          setDeck(generateDeck());
          setFlippedCards([]);
          setMatchedCards([]);
          setMoves(0);
          setTimer(0);
          setShowWinMessage(false);
          
          clearInterval(intervalId);
          const interval = setInterval(() => {
            setTimer((prev) => prev + 1);
          }, 1000);
          setIntervalId(interval);

          // Animate cards back in - faster restart
          gsap.fromTo(cards, 
            { 
              scale: 0, 
              rotation: 180,
              opacity: 0 
            },
            { 
              scale: 1, 
              rotation: 0,
              opacity: 1, 
              duration: 0.3, 
              stagger: 0.03,
              ease: "back.out(1.4)"
            }
          );
        }
      });
    }
  };

  return (
    <div className="game" ref={gameRef}>
      <h1 ref={titleRef}>Memory Match Game</h1>
      <div className="stats" ref={statsRef}>
        <p>Moves: {moves}</p>
        <p>Time: {timer} seconds</p>
      </div>
      <div className="board" ref={boardRef}>
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
      {showWinMessage && (
        <div className="win-message" ref={winMessageRef}>
          <h2>🎉 You Win! 🎉</h2>
          <p>Completed in {moves} moves and {timer} seconds!</p>
          <button onClick={handleRestart}>Play Again</button>
        </div>
      )}
    </div>
  );
}

export default Game;
