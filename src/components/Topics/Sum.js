import React, { Component } from "react";

export default class Sum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: 0,
      number2: 0,
      sum: null,
    };
  }
  render() {
    const calculateSum = () => {
      this.setState({
        sum: Number(this.state.number1) + Number(this.state.number2),
      });
    };

    const handleNum1 = (e) => {
      this.setState({ number1: e.target.value });
    };
    const handleNum2 = (e) => {
      this.setState({ number2: e.target.value });
    };
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input type="number" className="inputLine" onChange={handleNum1} />
        <input type="number" className="inputLine" onChange={handleNum2} />
        <button className="confirmationButton" onClick={calculateSum}>
          Add them two babies
        </button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    );
  }
}
