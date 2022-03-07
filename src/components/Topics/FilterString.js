import React, { Component } from "react";

export default class FilterString extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unFilteredArray: [
        "Howdy",
        "Poggers",
        "TopoChico",
        "React",
        "Fun",
        "Meatloaf",
      ],
      userInput: "",
      filteredArray: [],
    };
  }
  render() {
    const evaluate = () => {
      let word = this.state.userInput;
      let names = this.state.unFilteredArray;
      let filtered = this.state.filteredArray;
      if (names.includes(word)) {
        filtered.push(word);
      }
      this.setState(this.state);
    };
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          className="inputLine"
          type="text"
          onChange={(e) => this.setState({ userInput: e.target.value })}
        />
        <button onClick={evaluate} className="confirmationButton">
          Is this name included?
        </button>
        <span className="resultsBox filterStringRB">
          {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}
