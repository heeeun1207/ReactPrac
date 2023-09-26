import React, { Component } from 'react';
import { signUp } from '../api/userApi';
import xboxImage from '../assets/images/xbox.png';
import './SignUpComponent.css';

class SignUpComponent extends Component {
  constructor(props) {
    super(props);

    // 사용자 입력을 위한 상태 변수 초기화
    this.state = {
      userId: '',
      password: '',
      'Re-Enter': '', 
      userName: '',
      email: '',
      mobile: '',
    };
  }
  // 팝업창 닫기
  handleClosePopup = () => {
    this.props.onClose(); // X를 누를 때 부모 컴포넌트에서 전달한 콜백 함수 호출
  };
  
  // 각 입력 필드에 대한 핸들러 메서드
  handleUserIdChange = (event) => {
    this.setState({ userId: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  // 비밀번호 확인 입력 필드에 대한 핸들러 메서드
  handleConfirmPasswordChange = (event) => {
    this.setState({ 'Re-Enter': event.target.value }); 
  };

  handleUserNameChange = (event) => {
    this.setState({ userName: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleMobileChange = (event) => {
    this.setState({ mobile: event.target.value });
  };

  // 회원 가입 버튼 클릭 핸들러
  handleSignUp = async () => {
    // 비밀번호와 비밀번호 확인이 일치하는지 확인
    if (this.state.password !== this.state['Re-Enter']) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    const userData = {
      userId: this.state.userId,
      password: this.state.password,
      userName: this.state.userName,
      email: this.state.email,
      mobile: this.state.mobile,
    };

    try {
      const response = await signUp(userData);
      console.log('회원 가입 성공:', response);
      // 회원 가입 성공 시 필요한 동작 수행
    } catch (error) {
      console.error('회원 가입 오류:', error.message);
      // 회원 가입 실패 시 에러 처리
    }
  };

  render() {
    return (
      <div className="singup-popup"> 
        <img
        src={xboxImage}
        alt="닫기"
        className="close-button"
        onClick={this.handleClosePopup}
        />
        <h2 className="sign-title">Sign up</h2> 
        <div className="input-container"> 
          <label htmlFor="userId" className="label">ID</label>
          <input
            type="text"
            id="userId"
            value={this.state.userId}
            onChange={this.handleUserIdChange}
            className="sign-field" 
          />
        </div>
        <div className="input-container"> 
          <label htmlFor="password" className="label">Password</label>
          <input
            type="password"
            id="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            className="sign-field" 
          />
        </div>
        <div className="input-container"> 
          <label htmlFor="Re-Enter" className="label">Re-Enter</label>
          <input
            type="password"
            id="Re-Enter"
            value={this.state['Re-Enter']}
            onChange={this.handleConfirmPasswordChange}
            className="sign-field" 
          />
        </div>
        <div className="input-container"> 
          <label htmlFor="userName" className="label">Name</label>
          <input
            type="text"
            id="userName"
            value={this.state.userName}
            onChange={this.handleUserNameChange}
            className="sign-field" 
          />
        </div>
        <div className="input-container"> 
          <label htmlFor="email" className="label">E-mail</label>
          <input
            type="email"
            id="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            className="sign-field" 
          />
        </div>
        <div className="input-container"> 
          <label htmlFor="mobile" className="label">Mobile</label>
          <input
            type="tel"
            id="mobile"
            value={this.state.mobile}
            onChange={this.handleMobileChange}
            className="sign-field" 
          />
        </div>
        <div className="sign-in-up"> 
          <button className="join-button" onClick={this.handleSignUp}>Join Us</button>
        </div>
      </div>
    );
  }
}

export default SignUpComponent;
