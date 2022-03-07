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
  render() {
    const filterObj = () => {
      let word = this.state.userInput;
      // console.log(typeof word)
      let unArray = this.state.unFilteredArray;
      unArray.map((obj) =>
        obj.hasOwnProperty(word)
          ? this.state.filteredArray.push(obj)
          : this.state.unFilteredArray
      );
      this.setState(this.state);
    };

    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Original:
          {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          className="inputLine"
          type="text"
          onChange={(e) => this.setState({ userInput: e.target.value })}
        />
        <button className="confirmationButton" onClick={filterObj}>
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
