//*  메인 화면 레이아웃 및 라우팅과 관련된 역할 
import React, { Component } from 'react';
import ImageComponent from './ImageComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import './MainPage.css';

class MainPage extends Component {

  render() {
    return (
      <Router>
        <div>
          <ImageComponent />
        </div>
      </Router>
    );
  }
}

export default MainPage;

