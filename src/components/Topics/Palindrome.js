import React, { Component } from "react";

export default class Palindrome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      palindrome: "",
    };
  }
  render() {
    const isPalin = () => {
      let input = this.state.userInput;

      let revInput = input.split("").reverse().join("");
      if (input === revInput) {
        this.state.palindrome = true;
      } else {
        this.state.palindrome = false;
      }
      this.setState(this.state);
    };
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          className="inputLine"
          type="text"
          onChange={(e) => this.setState({ userInput: e.target.value })}
        />
        <button className="confirmationButton" onClick={isPalin}></button>
        <span className="resultsBox">{this.state.palindrome.toString()}</span>
      </div>
    );
  }
}
