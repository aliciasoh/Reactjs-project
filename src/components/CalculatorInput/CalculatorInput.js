import React, { Component } from "react";
import { hot } from "react-hot-loader";
import CalculatorAnswer from '../CalculatorAnswer/CalculatorAnswer';

class CalculatorInput extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    let answer = ''; 
    switch(this.state.operator) {
      case '/':
      answer = Number(this.state.firstValue) / Number(this.state.secondValue);
          break;
      case '+':
      answer = Number(this.state.firstValue) + Number(this.state.secondValue);
          break;
      case '-':
      answer = Number(this.state.firstValue) - Number(this.state.secondValue);
          break;
      case '*':
      answer = Number(this.state.firstValue) * Number(this.state.secondValue);
          break;
  }

  this.setState({answerReceived: answer});
  }

  constructor(props) {
    super(props);
    this.state = {
      firstValue: '',
      secondValue: '',
      operator: '',
      answerReceived: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <label>
          Calculate: 
          <input type="number" name="firstValue" value={this.state.firstValue} onChange={this.handleChange}/>
          
          <select name="operator" value={this.state.operator} onChange={this.handleChange}>
            <option value="nil">nil</option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="/">/</option>
            <option value="*">*</option>
          </select>

          <input type="number" name="secondValue" value={this.state.secondValue} onChange={this.handleChange}/>

        </label>
        <input type="submit" onClick={this.handleSubmit}></input>

        <CalculatorAnswer answerReceived={this.state.answerReceived}/>
        </div>

    );
  }
}

export default CalculatorInput;
