// LoginPopup.js
import React, { Component } from 'react';
import './LoginPopup.css';
import SignUpComponent from './SignUpComponent'; // SignUpComponent를 import

class LoginPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,       // 팝업 초기 상태는 열린 상태
      showSignUp: false,  // 회원 가입 폼을 보이지 않도록 초기화
    };
  }

  handleClosePopup = () => {
    this.setState({ isOpen: false });
  }

  // "Sign up" 텍스트 클릭 시 회원 가입 폼을 보이도록 상태 변경
  handleSignUpClick = () => {
    this.setState({ showSignUp: true });
  }

  render() {
    const { isOpen, showSignUp } = this.state;

    // 팝업이 열려 있을 때만 렌더링
    if (!isOpen) {
      return null;
    }

    // 회원 가입 폼 보이기
    if (showSignUp) {
      return <SignUpComponent />;
    }

    return (
      <div className="login-popup">
        {/* ... (로그인 폼 및 로직) */}
        <div className="sign-in-up">
          <span>Sign in</span>
          <span className="separator">|</span>
          <span onClick={this.handleSignUpClick}>Sign up</span>
        </div>
      </div>
    );
  }
}

export default LoginPopup;
