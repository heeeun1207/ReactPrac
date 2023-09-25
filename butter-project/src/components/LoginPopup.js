import React, { Component } from 'react';
import xboxImage from '../assets/images/xbox.png';
import './LoginPopup.css'; 
import SignUpComponent from './SignUpComponent';

class LoginPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      showSignUp: false,
    };
  }

  handleClosePopup = () => {
    this.setState({ isOpen: false });
  }

  // 회원 가입 폼을 보여주기 위한 handleSignUpClick 함수를 추가합니다.
  handleSignUpClick = () => {
    this.setState({ showSignUp: true });
  }

  render() {
    const { isOpen, showSignUp } = this.state;


    if (!isOpen) {
      return null;
    }

    if (showSignUp) {
      return <SignUpComponent />;
    }

    return (
      <div className="login-popup">
        <img
          src={xboxImage}
          alt="닫기"
          className="close-button"
          onClick={this.handleClosePopup}
        />
    
        <div className="input-container">
          <h3 className="login-title">로그인</h3>
          <input type="text" placeholder="사용자 이름" className="input-field" />
          <input type="password" placeholder="비밀번호" className="input-field" />
          <div className="sign-in-up">
            <span>Sign in</span>
            <span className="separator">|</span>
            <span onClick={this.handleSignUpClick}>Sign up</span>
          </div>
        </div>
        {/* 로그인 양식과 관련된 로직 */}
      </div>
    );
  }
}

export default LoginPopup;
