import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubPage from './SubPage';
import Home from './Home';
import { signUp } from '../api/userApi';


class Main extends Component {
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

    return (
      <Router>
        <div className="App" style={{ position: 'relative' }}>
          <Home
            currentImageIndex={currentImageIndex}
            images={images}
            isLoggedIn={isLoggedIn}
            toggleLogin={this.toggleLogin}
            handleSignUpClick={this.handleSignUpClick}
          />

          <Routes>
            <Route path="/subpage" element={<SubPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default Main;
