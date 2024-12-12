import React, { Component } from "react";

class NumberChecker extends Component {
  constructor() {
    super();
    this.state = { number: "", result: "" };
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ number: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const num = parseInt(this.state.number);

    if (!isNaN(num)) {
      if (num % 2 === 0) {
        this.setState({ result: "Even" });
      } else {
        this.setState({ result: "Odd" });
      }
    } else {
      this.setState({ result: "error enter valid format" });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter a number:</label>
          <br />
          <input
            type="text"
            name="number"
            onChange={this.handleChange}
            value={this.state.number}
          />
          <br />
          <input type="submit"/>
        </form>
        <h1>{this.state.result}</h1>
      </div>
    );
  }
}

export default NumberChecker;