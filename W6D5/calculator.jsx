import React from 'react';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = { num1: "", num2: "", result: 0 };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }

  setNum1(e) {
    const num1 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num1 });
  }

  setNum2(e) {
    const num2 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num2 });
  }

  add(e) {
    e.preventDefault();
    const sum = this.state.num1 + this.state.num2;
    this.setState({ sum });
  }

  subtract(e) {
    e.preventDefault();
    const diff = this.state.num1 - this.state.num2;
    this.setState({ diff });
  }

  divide(e) {
    e.preventDefault();
    const quotient = this.state.num1 / this.state.num2;
    this.setState({ quotient });
  }

  multiply(e) {
    e.preventDefault();
    const product = this.state.num1 * this.state.num2;
    this.setState({ product });
  }

  clear(e){
    e.preventDefault();
    this.setState({ num1: "", num2: "", result: 0 });
  }


  render() {
    const { num1, num2, result } = this.state;
    return (
      <div>
        <h1>{ result }</h1>

        <input onChange={this.setNum1} value={num1}/>
        <input onChange={this.setNum2} value={num2}/>
        <button onClick={this.clear}>CLEAR</button>
        <br />
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.divide}>/</button>
        <button onClick={this.multiply}>*</button>
      </div>
    );
  }
}

export default Calculator;
