import React, { Component } from 'react';

class LoginPopup extends Component {
  render() {
    return (
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px' }}>
        <h3>Login Form</h3>
        {/* 로그인 양식 및 로그인 로직을 추가하세요 */}
      </div>
    );
  }
}

export default LoginPopup;
