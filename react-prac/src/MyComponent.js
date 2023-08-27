import React from 'react';

const MyComponent = ({ name, children }) => {
  // 함수의 파라미터 부분에서도 사용할 수 있다. 
  return (
    <div> 안녕하세요~ 제 이름은 {name}입니다. <br />
      children 값은 {children}입니다.
    </div>
  );
};
MyComponent.defaultProps = {
  name: 'name : 기본 이름'
};

export default MyComponent;
