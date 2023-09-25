import React, { Component } from 'react';
import { signUp } from '../api/userApi';
import xboxImage from '../assets/images/xbox.png';
import './SignUpComponent.css'; // SignUpComponent.css 파일을 import

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
      <div className="login-popup"> 
        <img
        src={xboxImage}
        alt="닫기"
        className="close-button"
        onClick={this.handleClosePopup}
        />
        <h2 className="login-title">회원 가입</h2> 
        <div className="input-container"> 
          <label htmlFor="userId">사용자 아이디:</label>
          <input
            type="text"
            id="userId"
            value={this.state.userId}
            onChange={this.handleUserIdChange}
            className="input-field" 
          />
        </div>
        <div className="input-container"> 
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            className="input-field" 
          />
        </div>
        <div className="input-container"> 
          <label htmlFor="Re-Enter">비밀번호 확인:</label>
          <input
            type="password"
            id="Re-Enter"
            value={this.state['Re-Enter']}
            onChange={this.handleConfirmPasswordChange}
            className="input-field" 
          />
        </div>
        <div className="input-container"> 
          <label htmlFor="userName">사용자 이름:</label>
          <input
            type="text"
            id="userName"
            value={this.state.userName}
            onChange={this.handleUserNameChange}
            className="input-field" 
          />
        </div>
        <div className="input-container"> 
          <label htmlFor="email">이메일:</label>
          <input
            type="email"
            id="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            className="input-field" 
          />
        </div>
        <div className="input-container"> 
          <label htmlFor="mobile">휴대폰 번호:</label>
          <input
            type="tel"
            id="mobile"
            value={this.state.mobile}
            onChange={this.handleMobileChange}
            className="input-field" 
          />
        </div>
        <div className="sign-in-up"> 
          <span>Sign in</span>
          <span className="separator">|</span>
          <span onClick={this.handleSignUp}>Sign up</span>
        </div>
      </div>
    );
  }
}

export default SignUpComponent;
