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
  handleChange = (e) => {
    this.setState({ userInput: e.target.value });
  };
  evaluate = (userInput) => {
    let names = this.state.unFilteredArray;
    let filtered = [];
    names.forEach((el) =>
      el.includes(userInput) ? filtered.push(el) : console.log("not included")
    );
    return this.setState({ filteredArray: filtered });
  };
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Stuff :{JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input className="inputLine" type="text" onChange={this.handleChange} />
        <button
          onClick={() => this.evaluate(this.state.userInput)}
          className="confirmationButton"
        >
          Is this name included?
        </button>
        <span className="resultsBox filterStringRB">
          Filtered Stuff:{JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}
