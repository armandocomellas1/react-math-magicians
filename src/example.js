import React from 'react';

const Cat = ({timeToEat}) => (
  console.log(
    {`I'm ${timeToEat ? 'happy' : 'sad'}`}
     );
)

class Cats extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timeToEat: false };
  }

  render() {
    return (
      <div>
        <Cat timeToEat={Cats.this.state.timeToEat} />
        <button onClick={() => this.setState({ timeToEat: true })}>
          Time to eat!
        </button>
      </div>
    );
  }
}