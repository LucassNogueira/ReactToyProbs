import React, { Component } from "react";

export default class Palindrome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      palindrome: "",
    };
  }
  handleChange = (e) => {
    this.setState({ userInput: e.target.value });
  };
  isPalin = (userInput) => {
    let input = userInput.toLowerCase();
    let revInput = input.split("").reverse().join("");
    if (input === revInput) {
      this.setState({ palindrome: true });
    } else {
      this.setState({ palindrome: false });
    }
  };
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" type="text" onChange={this.handleChange} />
        <button
          className="confirmationButton"
          onClick={() => this.isPalin(this.state.userInput)}
        >
          Does this read backwards and fowards?
        </button>
        <span className="resultsBox">{this.state.palindrome.toString()}</span>
      </div>
    );
  }
}
