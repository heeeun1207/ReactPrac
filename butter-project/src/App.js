import React, { Component } from 'react';
import './App.css';
import image1 from './assets/images/image1.png';
import image2 from './assets/images/image2.png';
import image3 from './assets/images/image3.png';
import image4 from './assets/images/image4.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubPage from './components/SubPage';
import { signUp } from './api/userApi';
import Home from './components/Home';


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
    try {
      const userData = {
        userId: '사용자 아이디',
        password: '비밀번호',
        userName: '사용자 이름',
        email: '이메일 주소',
        mobile: '휴대폰 번호',
      };
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

export default App;
