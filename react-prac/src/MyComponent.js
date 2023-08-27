import PropTypes from 'prop-types';
import React from 'react';

const MyComponent = ({ name, children }) => {
  // 함수의 파라미터 부분에서도 사용할 수 있다. 
  return (
    <div> 안녕하세요~ 제 이름은 {name}입니다. <br />
      children 값은 {children}입니다.
    </div>
  );
};
MyComponent.prototype = {
  name: 'name : 기본 이름'
};

MyComponent.propTypes = {
  name: PropTypes.string
};
//name 값이 문자열이 아닌 다른 값의 형태로 전달되면 경고메시지를 출력한다. 
export default MyComponent;
