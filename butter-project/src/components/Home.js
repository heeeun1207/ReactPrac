import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HamburgerIcon from '../assets/images/Hamburger.png'
import LoginPopup from './LoginPopup';


class Home extends Component {
  render() {
    const { currentImageIndex, images, isLoggedIn, toggleLogin, handleSignUpClick } = this.props;
    const currentImage = images[currentImageIndex];

    return (
      <div className="App" style={{ position: 'relative' }}>
        <img
          src={currentImage}
          alt={`car ${currentImageIndex + 1}`}
          className="background-image"
        />

        <Link to="/subpage"> {/* 햄버거 이미지 클릭시 /subpage로 이동 */}
          <button className="login-button">
            <img
              src={HamburgerIcon}
              alt="Hamburger"
              className="hamburger-icon"
            />
          </button>
        </Link>

        <h1 className="app-title">BUTTER</h1>

        <h2 className="reservation" onClick={toggleLogin}>
          RESERVATION
        </h2>

        {!isLoggedIn && (
          <button
            onClick={handleSignUpClick}
            className="signup-button"
          >
            Sign up
          </button>
        )}

        {isLoggedIn && <LoginPopup />}

        <div className="centered-text">
          For the high-end
        </div>
      </div>
    );
  }
}

export default Home;
