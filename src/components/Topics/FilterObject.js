import React, { Component } from "react";

export default class FilterObject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unFilteredArray: [
        { name: "Jimmy Joe", title: "Hack0r", age: 12 },
        { name: "Jeremy Schrader", age: 24, hairColor: "brown" },
        { name: "Carly Armstrong", title: "CEO" },
      ],
      userInput: "",
      filteredArray: [],
    };
  }
  handleChange = (e) => {
    this.setState({ userInput: e.target.value });
  };
  filterObj = () => {
    let word = this.state.userInput;
    // console.log(typeof word)
    let unArray = this.state.unFilteredArray;
    let filtered = [];
    unArray.map((obj) =>
      obj.hasOwnProperty(word)
        ? filtered.push(obj)
        : console.log("No Property!")
    );
    this.setState({ filteredArray: filtered });
  };
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Original:
          {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input className="inputLine" type="text" onChange={this.handleChange} />
        <button className="confirmationButton" onClick={this.filterObj}>
          Filter for them there props
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered:
          {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}
