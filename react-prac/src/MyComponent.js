import React, { Component } from 'react'; // React 모듈을 임포트해야 합니다
import PropTypes from 'prop-types';

class MyComponent extends Component {
  render() {
    const { name, favoritNumber, children } = this.props; // 오타 수정 favoritNumber
    // 비구조화 할당 

    return (
      <div>
        안녕하세요~ 제 이름은 {name}입니다. <br />
        children 값은 {children}입니다.<br />
        제가 좋아하는 숫자는 {favoritNumber}입니다.
      </div>
    );
  }
}

//prototype -> defaultProps로 수정
MyComponent.defaultProps = {
  name: '기본 이름'
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;
