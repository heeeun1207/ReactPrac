import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';

//랜덤 색상을 생성한다. 
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
// 16777215를 hex로 표현하면 ffffff가 되므로 0x1000000을 더한 후, 16진수 문자열로 변환하여 랜덤 색상을 생성
class App extends Component {
  state = {
    color: '#000000'// 초기 색상은 검은색 설정
  }
  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        {/* LifeCycleSample 컴포넌트를 렌더링하고, 현재 상태의 color 값을 전달 */}
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}
export default App;
