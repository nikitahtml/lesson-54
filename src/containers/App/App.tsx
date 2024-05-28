import React, { useState } from 'react';
import './App.css';
import Attempts from '../../components/Attempts/Attempts';
import ResetButton from '../../components/ResetButton/ResetButton';

const createItems = () => {
  const items = [];
  for (let i = 0; i < 36; i++) {
    items.push({ hasItem: false, clicked: false });
  }
  const randomIndex = Math.floor(Math.random() * 36);
  items[randomIndex].hasItem = true;
  return items;
};

const App: React.FC = () => {
  const [items, setItems] = useState(createItems());
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleCellClick = (index: number) => {
    if (!items[index].clicked) {
      if (items[index].hasItem) {
        setGameOver(true);
      }
      setItems(prevItems =>
          prevItems.map((item, i) => (i === index ? { ...item, clicked: true } : item))
      );
      setAttempts(prevAttempts => prevAttempts + 1);
    }
  };

  const resetGame = () => {
    setItems(createItems());
    setAttempts(0);
    setGameOver(false);
  };

  return (
      <div className="App">
        <h1>Find the Hidden Item Game</h1>
        <Attempts attempts={attempts} />
        <div className="game-board">
          {items.map((item, index) => (
              <div
                  key={index}
                  className={`cell ${item.clicked ? 'clicked' : ''}`}
                  onClick={() => handleCellClick(index)}
              >
                {item.hasItem && item.clicked && 'O'}
              </div>
          ))}
        </div>
        {gameOver && <p className="game-over">Item found! You can reset the game to play again.</p>}
        <ResetButton resetGame={resetGame} />
      </div>
  );
};

export default App;
