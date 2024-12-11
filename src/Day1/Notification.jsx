
import React, { useState } from 'react';
import './App.css';

const App = () => {
  // State to manage the visible card
  const [selectedCard, setSelectedCard] = useState(null);

  // Function to handle button click
  const handleButtonClick = (value) => {
    setSelectedCard(value);
  };

  return (
    <div className="App">
      <h1>Show Cards Based on Button Value</h1>
      
      {/* Buttons to select cards */}
      <div>
        <button onClick={() => handleButtonClick('Card 1')}>Show Card 1</button>
        <button onClick={() => handleButtonClick('Card 2')}>Show Card 2</button>
        <button onClick={() => handleButtonClick('Card 3')}>Show Card 3</button>
      </div>

      {/* Cards */}
      <div className="cards">
        <div
          className="card"
          style={{ display: selectedCard === 'Card 1' ? 'block' : 'none' }}
        >
          This is Card 1
        </div>
        <div
          className="card"
          style={{ display: selectedCard === 'Card 2' ? 'block' : 'none' }}
        >
          This is Card 2
        </div>
        <div
          className="card"
          style={{ display: selectedCard === 'Card 3' ? 'block' : 'none' }}
        >
          This is Card 3
        </div>
      </div>
    </div>
  );
};

export default App;
