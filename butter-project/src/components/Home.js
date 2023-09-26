import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginPopup from './LoginPopup';
import { signUp } from '../api/userApi';
import HamburgerIcon from '../assets/images/Hamburger.png';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0,
      images: [
        require('../assets/images/image1.png'),
        require('../assets/images/image2.png'),
        require('../assets/images/image3.png'),
        require('../assets/images/image4.png'),
      ],
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
    try {
      const userData = {
        userId: '사용자 아이디',
        password: '비밀번호',
        userName: '사용자 이름',
        email: '이메일 주소',
        mobile: '휴대폰 번호',
      };
      // 회원 가입 로직 (userData를 사용하도록 수정)
      const response = await signUp(userData);
      console.log('회원 가입 성공:', response);
    } catch (error) {
      console.error('회원 가입 오류:', error.message);
    }
  };

  render() {
    const { currentImageIndex, images, isLoggedIn } = this.state;
    const currentImage = images[currentImageIndex];

    return (
      <div className="App" style={{ position: 'relative' }}>
        <img src={currentImage} alt={`car ${currentImageIndex + 1}`} className="background-image" />

        <Link to="/subpage">
          <button className="login-button">
            <img src={HamburgerIcon} alt="Hamburger" className="hamburger-icon" />
          </button>
        </Link>

        <h1 className="app-title">BUTTER</h1>

        <h2 className="reservation" onClick={this.toggleLogin}>
          RESERVATION
        </h2>

        {!isLoggedIn && (
          <button onClick={this.handleSignUpClick} className="signup-button">
            Sign up
          </button>
        )}

        {isLoggedIn && <LoginPopup />}

        <div className="centered-text">For the high-end</div>
      </div>
    );
  }
}

export default Home;
