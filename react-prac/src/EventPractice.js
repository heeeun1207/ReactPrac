import React, { Component } from 'react';

class EventPractice extends Component {

  state = {
    message: ''
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }//임의 메서드가 등록되어도 this가 컴포넌트 자신으로 제대로 가리키기 위해서는 
  //메서드를 this와 바인딩(binding)하는 작업이 필요하다. 
  handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }
  handleClick(e) {
    alert(this.state.message);
    this.setState({
      message: ''
    });
  }
  render() {
    return (
      <div>
        <h1>이벤트 연습!</h1>
        <input
          type='text'
          name='message'
          placeholder='아무거나 입력해 보세요'
          value={this.state.message}
          onChange={this.handleChange}
        />

        <button onClick={this.handleClick}>
          확인</button>
      </div>
    );
  }
}

export default EventPractice;
