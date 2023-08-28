import React, { Component } from 'react';

class EventPractice extends Component {

  state = {
    message: ''
  } // state 초깃값을 설정
  render() {
    return (
      <div>
        <h1>이벤트 연습!</h1>
        <input
          type='text'
          name='message'
          placeholder='아무거나 입력해 보세요'
          value={this.state.message}
          onChange={
            (e) => {
              this.setState({
                message: e.target.value
                //this.setState 메서드를 호출하여 state를 업데이트 
                //input의 value 값을 state에 있는 값으로 설정
              })
            }
          }
        />
      </div>
    );
  }
}

export default EventPractice;
