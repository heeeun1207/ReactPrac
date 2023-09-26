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

  // 회원 가입 팝업을 닫기 위한 함수
  closeSignUpPopup = () => {
    this.setState({ showSignUp: false });
  }

  // 로그인 팝업을 닫는 함수
  closeLoginPopup = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen, showSignUp } = this.state;

    if (!isOpen) {
      return null;
    }

    return (
      <div className="login-popup">
        <img
          src={xboxImage}
          alt="닫기"
          className="close-button"
          onClick={this.handleClosePopup}
        />
    
        <div className="sign-container">
          <h3 className="login-title">Login</h3>
          <input type="text" placeholder="ID" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <div className="sign-in-up">
            <span onClick={this.closeLoginPopup}>Sign in</span>
            <span className="separator">|</span>
            <span onClick={this.handleSignUpClick}>Sign up</span>
          </div>
        </div>
        
        {showSignUp && (
          <SignUpComponent onClose={this.closeSignUpPopup} />
        )}
      </div>
    );
  }
}

export default LoginPopup;
