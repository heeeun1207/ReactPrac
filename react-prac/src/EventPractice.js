import React, { Component } from 'react';

class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1>이벤트 연습!</h1>
        <input
          type='text'
          name='message'
          placeholder='아무거나 입력해 보세요'
          onChange={
            (e) => {
              console.log(e.target.value);
              //값이 바뀔 때마다 바뀌는 값을 콘솔에 기록한다. 
            }
          }
        />
      </div>
    );
  }
}

export default EventPractice;
