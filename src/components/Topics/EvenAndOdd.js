import React, { Component } from "react";

export default class EvenAndOdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: "",
    };
  }

  render() {
    const evaluate = () => {
      let userInput = this.state.userInput.split("");
      userInput.map((num) =>
        num % 2 === 0
          ? this.state.evenArray.push(num)
          : this.state.oddArray.push(num)
      );
      this.setState(this.state);
    };
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={(e) => this.setState({ userInput: e.target.value })}
        ></input>
        <button className="confirmationButton" onClick={evaluate}>
          Evaluate
        </button>
        <span className="resultsBox">Evens: {this.state.evenArray}</span>
        <span className="resultsBox">Odds:{this.state.oddArray}</span>
      </div>
    );
  }
}
