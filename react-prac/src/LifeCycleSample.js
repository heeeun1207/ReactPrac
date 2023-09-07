import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  }

  myRef = null; // ref를 설정할 부분 

  constructor(props) {
    super(props);
    console.log('constructor');
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps')
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }
  //componentDidMount : 컴포넌트가 화면에 나타난 후 호출
  componentDidMount() {
    console.log('componentDidMount');
  }
  //shouldComponentUpdate :  리렌더링 여부를 결정
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldCoponentUpdate', nextProps, nextProps);
    //숫자의 마지막 자리가 4면 리렌더링 하지 않는다.
    return nextState.number % 10 !== 4;
  }
  //componentWillUnmount : 컴포넌트가 화면에 사라질 때 호출
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  //handleClick 버튼 클릭시 state 업데이트 
  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  }
  //getSnapshotBeforeUpdate : 컴포넌트 업데이트 직전에 실행 , 업데이트 직전의 상태를 기반으로 작업 수행 
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }
  //componentDidUpdate : 컴포넌트 업데이트 이후에 실행, 업데이트된 내용에 대한 처리
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트되기 직전 색상: ', snapshot);
    }
  }
  render() {
    console.log('render');

    const style = {
      color: this.props.color
    };

    return (
      <div>
        <h1 style={style} ref={ref => this.myRef = ref}>{this.state.number}</h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    )
  }
}

export default LifeCycleSample;
