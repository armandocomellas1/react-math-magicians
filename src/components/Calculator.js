import React from 'react';
import calculate from '../logic/calculate';

let nextNumber = 0;

const numberWithCommas = (x) => {
  const parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

export default class Calculator extends React.Component {
  constructor() {
    super();

    this.state = {
      total: 0,
      next: 0,
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const setObj = this.state;
    const setName = event.target.name;
    const resultBack = calculate(setObj, setName);
    let totalNull = resultBack.total;
    let nextNull = resultBack.next;
    let operaNull = resultBack.operation;

    if (totalNull === null) {
      totalNull = 0;
    } else if (nextNull === null) {
      nextNull = 0;
    } else if (operaNull === null) {
      operaNull = '';
    } else {
      totalNull = resultBack.total;
      nextNull = resultBack.next;
      operaNull = resultBack.operation;
    }
    if (totalNull === 0) {
      totalNull = resultBack.next;
    }

    if (totalNull === null && nextNull === null && operaNull === null) {
      totalNull = 0;
      nextNull = 0;
      operaNull = '';
    }
    this.setState({
      total: totalNull,
      next: nextNull,
      operation: operaNull,
    });

    if (resultBack.next !== null) {
      nextNumber = resultBack.next.toString();
    } else if (resultBack.total !== null) {
      nextNumber = resultBack.total.toString();
    } else if (resultBack.next !== null && resultBack.total !== null && resultBack.operation !== '') {
      nextNumber = this.state.operation.toString();
    } else {
      nextNumber = 0;
    }
  }

  handleChange(event) {
    event.preventDefault(this);
  }

  render() {
    return (
      <div className="App">
        <section className="operation">
          <input className="Enter" type="text" name="enter" value={numberWithCommas(nextNumber)} onChange={this.handleChange} />
        </section>
        <section className="maths">
          <input className="ac" type="button" name="AC" value="AC" onClick={this.handleClick} />
          <input className="plusminus" type="button" name="+/-" value="+/-" onClick={this.handleClick} />
          <input className="percentage" type="button" name="%" value="%" onClick={this.handleClick} />
          <input className="divide" type="button" name="÷" value="÷" onClick={this.handleClick} />
          <input className="seven" type="button" name="7" value="7" onClick={this.handleClick} />
          <input className="eight" type="button" name="8" value="8" onClick={this.handleClick} />
          <input className="nine" type="button" name="9" value="9" onClick={this.handleClick} />
          <input className="times" type="button" name="x" value="x" onClick={this.handleClick} />
          <input className="four" type="button" name="4" value="4" onClick={this.handleClick} />
          <input className="five" type="button" name="5" value="5" onClick={this.handleClick} />
          <input className="six" type="button" name="6" value="6" onClick={this.handleClick} />
          <input className="minus" type="button" name="-" value="-" onClick={this.handleClick} />
          <input className="one" type="button" name="1" value="1" onClick={this.handleClick} />
          <input className="two" type="button" name="2" value="2" onClick={this.handleClick} />
          <input className="three" type="button" name="3" value="3" onClick={this.handleClick} />
          <input className="plus" type="button" name="+" value="+" onClick={this.handleClick} />
          <input className="cero" type="button" name="0" value="0" onClick={this.handleClick} />
          <input className="dot" type="button" name="." value="." onClick={this.handleClick} />
          <input className="equals" type="button" name="=" value="=" onClick={this.handleClick} />
        </section>
      </div>
    );
  }
}
