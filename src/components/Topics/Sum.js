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
  calculateSum = () => {
    this.setState({
      sum: Number(this.state.number1) + Number(this.state.number2),
    });
  };

  handleNum1 = (e) => {
    this.setState({ number1: e.target.value });
  };
  handleNum2 = (e) => {
    this.setState({ number2: e.target.value });
  };
  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input type="number" className="inputLine" onChange={this.handleNum1} />
        <input type="number" className="inputLine" onChange={this.handleNum2} />
        <button className="confirmationButton" onClick={this.calculateSum}>
          Add them two babies
        </button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    );
  }
}
