import React, { Component } from 'react';
import './App.css';
import image1 from './assets/images/image1.png';
import image2 from './assets/images/image2.png';
import image3 from './assets/images/image3.png';
import image4 from './assets/images/image4.png';
import LoginPopup from './components/LoginPopup'; 

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

  render() {
    const { currentImageIndex, images, isLoggedIn } = this.state;
    const currentImage = images[currentImageIndex];

    return (
      <div className="App" style={{ position: 'relative' }}>
        <img src={currentImage} alt={`car ${currentImageIndex + 1}`} />

        <h1 style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 1, color: 'white' }}>BUTTER</h1>

        <h2
          style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, color: 'white', cursor: 'pointer' }}
          onClick={this.toggleLogin}
        >RESERVATION</h2>

        {isLoggedIn && <LoginPopup />}
      </div>
    );
  }
}

export default App;
