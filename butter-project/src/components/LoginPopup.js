import React, { Component } from 'react';
import xboxImage from '../assets/images/xbox.png';

class LoginPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true, // 팝업 초기 상태는 열린 상태
    };
  }

  handleClosePopup = () => {
    this.setState({ isOpen: false }); // 팝업을 닫기 위한 메서드
  }

  render() {
    const { isOpen } = this.state;

    // 팝업이 열려 있을 때만 렌더링
    if (!isOpen) {
      return null;
    }

    return (
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(45, 45, 45, 1)', width: '659px', height: '378px', padding: '20px', textAlign: 'center' }}>
        <img
          src={xboxImage}
          alt="Close"
          style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', width: '20px', height: '20px' }}
          onClick={this.handleClosePopup} // 닫기 버튼을 클릭하면 팝업을 닫도록 처리합니다.
        />
        <h3 style={{ color: 'white' }}>Login</h3>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <input type="text" placeholder="Username" style={{ width: '458px', height: '71px', margin: '10px', padding: '10px' }} />
          <input type="password" placeholder="Password" style={{ width: '458px', height: '71px', margin: '10px', padding: '10px' }} />
        </div>
        {/* 
          로그인 양식과 관련된 로직
        */}
      </div>
    );
  }
}

export default LoginPopup;
