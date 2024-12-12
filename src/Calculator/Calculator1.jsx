import React, { useState } from "react";
import "./Calculator2.css";
import {evaluate} from "mathjs"

function Calculator1() {
  const [input, setInput] = useState(""); // Holds the user input

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput(""); // Clears the input
  };

  const handleCalculate = () => {
    try {
      setInput(evaluate(input).toString()); // Safely evaluate the expression
    } catch (error) {
      setInput("Error"); // Display error if evaluation fails
    }
  };

  const buttons = [
    "7", "8", "9", "/", 
    "4", "5", "6", "*", 
    "1", "2", "3", "-", 
    "0", ".", "=", "+"
  ];

  return (
    <div className="calculator">
      <h1>Simple Calculator</h1>
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {buttons.map((button) =>
          button === "=" ? (
            <button key={button} onClick={handleCalculate}>
              {button}
            </button>
          ) : (
            <button key={button} onClick={() => handleButtonClick(button)}>
              {button}
            </button>
          )
        )}
        <button className="clear" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default Calculator1;
