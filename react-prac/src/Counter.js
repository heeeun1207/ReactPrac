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
            this.setState(prevState => {
              return {
                number: prevState.number + 1
              };
            });
            // 위와 아래는 완전히 똑같은 기능을 한다.
            // 아래 코드는 함수에서 바로 객체를 반환한다는 의미이다.
            this.setState(prevState => ({
              number: prevState.number + 1
            }));
          }}
        // 숫자가 2씩 증가하는것을 알 수 있다.
        >
          +1
        </button>
      </div>
    );
  }
}
export default Counter;