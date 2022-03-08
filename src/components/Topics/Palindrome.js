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
    const handleChange = (e) => {
      this.setState({ userInput: e.target.value });
    };
    const isPalin = () => {
      let input = this.state.userInput.toLowerCase();

      let revInput = input.split("").reverse().join("");
      if (input === revInput) {
        this.setState({ palindrome: true });
      } else {
        this.setState({ palindrome: false });
      }
    };
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" type="text" onChange={handleChange} />
        <button className="confirmationButton" onClick={isPalin}>
          Does this read backwards and fowards?
        </button>
        <span className="resultsBox">{this.state.palindrome.toString()}</span>
      </div>
    );
  }
}
