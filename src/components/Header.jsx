import { useState } from "react";

function Header({ score }) {
  const [bestScore, setBestScore] = useState(0);

  if (score > bestScore) {
    setBestScore(score);
  }

  return (
    <header className="header">
      <div className="header-container">
        <h1>Memory Game</h1>
        <div className="score">
          <div className="score-container">
            <p>Score:</p>
            <span>{score}</span>
          </div>
          <div className="score-container">
            <p>Best score:</p>
            <span>{bestScore}</span>
          </div>
        </div>
      </div>
      <p className="description">
        Earn points by clicking on a card once but lose the game if a card is clicked twice
      </p>
    </header>
  );
}

export default Header;
