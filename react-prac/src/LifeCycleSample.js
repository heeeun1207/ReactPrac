import React, { Component } from "react";

//! 생명주기(라이프사이클)의 이해와 디버깅 확인 
class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  }
  //클래스 내부에서 myRef 변수를 선언한 후, 초기값 null 설정하고 나중에 DOM요소 직접 조작하거나 참조에 사용
  myRef = null; // ref를 설정할 부분 

  //constructor 메소드 : 초기 설정 및 초기 상태 설정 
  //React 컴포넌트 클래스 Component 를 상속 받으므로 부모 클래스의 생성자를 호출
  constructor(props) {
    super(props); //부모 클래스의 생성자를 호출하면서 props 객체를 전달합니다.
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
  //! 메서드 내부에서 주로 초기화 작업이나 외부 데이터 로딩 등 화면에 관련된 초기 작업을 수행한다.
  componentDidMount() {
    console.log('componentDidMount');
  }
  //shouldComponentUpdate :  리렌더링 여부를 결정
  //! 성능 최적화를 위한 렌더링 결정 예시 
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
