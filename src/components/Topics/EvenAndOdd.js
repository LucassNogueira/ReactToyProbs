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
  handleChange = (e) => {
    this.setState({ userInput: e.target.value });
    // console.log(this.state.userInput);
  };
  evaluate = () => {
    let userInput = this.state.userInput.split("");
    let evens = [];
    let odds = [];
    userInput.map((num) => (num % 2 === 0 ? evens.push(num) : odds.push(num)));
    this.setState({ evenArray: evens, oddArray: odds });
  };

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputLine" onChange={this.handleChange}></input>
        <button className="confirmationButton" onClick={this.evaluate}>
          Evaluate
        </button>
        <span className="resultsBox">Evens: {this.state.evenArray}</span>
        <span className="resultsBox">Odds:{this.state.oddArray}</span>
      </div>
    );
  }
}
