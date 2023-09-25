import React, { Component } from 'react';
import './App.css';
import image1 from './assets/images/image1.png';
import image2 from './assets/images/image2.png';
import image3 from './assets/images/image3.png';
import image4 from './assets/images/image4.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0,
      images: [image1, image2, image3, image4],
      isLoggedIn: false, // 로그인 상태를 나타내는 상태 추가
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

  // "RESERVATION" 클릭 시 로그인 상태를 토글하는 함수
  toggleLogin = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  render() {
    const { currentImageIndex, images, isLoggedIn } = this.state;
    const currentImage = images[currentImageIndex];

    return (
      <div className="App" style={{ position: 'relative' }}>
        {/* 이미지 */}
        <img src={currentImage} alt={`car ${currentImageIndex + 1}`} />

        {/* 텍스트 */}
        <h1 style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 1, color: 'white' }}>BUTTER</h1>

        {/* RESERVATION 텍스트 (클릭 시 로그인 팝업 표시) */}
        <h2
          style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, color: 'white', cursor: 'pointer' }}
          onClick={this.toggleLogin}
        >
          RESERVATION
        </h2>

        {/* 로그인 팝업 (isLoggedIn이 true일 때만 표시) */}
        {isLoggedIn && (
          <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px' }}>
            {/* 팝업 내용 */}
            <h3>Login Form</h3>
            {/* 로그인 로직 */}
          </div>
        )}
      </div>
    );
  }
}

export default App;
