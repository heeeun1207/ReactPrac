import React from 'react';

const MyComponent = props => {
  // 비구조화 할당 (구조 분해 문법): 
  // 객체에서 내부 값을 바로 추출하는 방법
  const { name, children } = props;
  return (
    <div>
      안녕하세요~ 제 이름은 {name}입니다.<br />
      children 값은 {children}입니다!
    </div>
  );
};
MyComponent.defaultProps = {
  name: 'name : 기본 이름'
};

export default MyComponent;
