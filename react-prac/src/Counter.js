import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>state 객체 값 추가 - 바뀌지 않는 값 : {fixedNumber} </h2>
        <button
          onClick={() => {
            const { number, fixedNumber } = this.state;
            this.setState({
              number: number + 1, fixedNumber
              // fixedNumber: fixedNumber + 1
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
export default Counter;