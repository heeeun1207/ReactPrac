import React, { Component } from 'react';
import './App.css';
import image1 from './assets/images/image1.png';
import image2 from './assets/images/image2.png';
import image3 from './assets/images/image3.png';
import image4 from './assets/images/image4.png';
import LoginPopup from './components/LoginPopup';
import HamburgerIcon from './assets/images/Hamburger.png';

// signUp 함수를 import
import { signUp } from './api/userApi';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0,
      images: [image1, image2, image3, image4],
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.changeImage, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeImage = () => {
    this.setState((prevState) => ({
      currentImageIndex: (prevState.currentImageIndex + 1) % this.state.images.length,
    }));
  };

  toggleLogin = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  handleSignUpClick = async () => {
    // 회원 가입 로직 구현
    try {
      const userData = {
        userId: '사용자 아이디', // 사용자 아이디 입력
        password: '비밀번호', // 비밀번호 입력
        userName: '사용자 이름', // 사용자 이름 입력
        email: '이메일 주소', // 이메일 주소 입력
        mobile: '휴대폰 번호', // 휴대폰 번호 입력
      };
      const response = await signUp(userData); 
      console.log('회원 가입 성공:', response);
      // 회원 가입 성공 시 필요한 동작 수행
    } catch (error) {
      console.error('회원 가입 오류:', error.message);
      // 회원 가입 실패 시 에러 처리
    }
  };
  render() {
    const { currentImageIndex, images, isLoggedIn } = this.state;
    const currentImage = images[currentImageIndex];

    return (
      <div className="App" style={{ position: 'relative' }}>
        <img
          src={currentImage}
          alt={`car ${currentImageIndex + 1}`}
          className="background-image" 
        />

        <button
          onClick={this.toggleLogin}
          className="login-button" 
        >
          <img
            src={HamburgerIcon}
            alt="Hamburger"
            className="hamburger-icon" 
          />
        </button>

        <h1 className="app-title">BUTTER</h1>

        <h2
          className="reservation"
          onClick={this.toggleLogin}
        >
          RESERVATION
        </h2>

        {/* 회원 가입 버튼 */}
        {!isLoggedIn && (
          <button
            onClick={this.handleSignUpClick} // 회원 가입 버튼 클릭 이벤트 핸들러 추가
            className="signup-button"
          >
            Sign up
          </button>
        )}

        {/* 로그인 팝업 */}
        {isLoggedIn && <LoginPopup />}

      </div>
    );
  }
}

export default App;
