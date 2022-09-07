import React from 'react';

export default class Calculator extends React.Component {
  render() {
    return (
      <div className="App">
        <section className="operation">
          <input className="Enter" type="text" name="ok" value="0" />
        </section>
        <section className="maths">
          <input className="ac" type="button" name="ok" value="AC" />
          <input className="plusminus" type="button" name="ok" value="+/-" />
          <input className="percentage" type="button" name="ok" value="%" />
          <input className="divide" type="button" name="ok" value="÷" />
          <input className="seven" type="button" name="ok" value="7" />
          <input className="eight" type="button" name="ok" value="8" />
          <input className="nine" type="button" name="ok" value="9" />
          <input className="times" type="button" name="ok" value="x" />
          <input className="four" type="button" name="ok" value="4" />
          <input className="five" type="button" name="ok" value="5" />
          <input className="six" type="button" name="ok" value="6" />
          <input className="minus" type="button" name="ok" value="-" />
          <input className="one" type="button" name="ok" value="1" />
          <input className="two" type="button" name="ok" value="2" />
          <input className="three" type="button" name="ok" value="3" />
          <input className="plus" type="button" name="ok" value="+" />
          <input className="cero" type="button" name="ok" value="0" />
          <input className="dot" type="button" name="ok" value="." />
          <input className="equals" type="button" name="ok" value="=" />
        </section>
      </div>
    );
  }
}
