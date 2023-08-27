import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  //배열 비구조화 할당을 통해 이름을 자유롭게 정해도 상관없다.
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요 !');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default Say;