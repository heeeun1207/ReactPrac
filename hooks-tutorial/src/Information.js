import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, SetNickname] = useState('');
  //특정 값이 업데이트 될 때만 실행하고 싶을 때
  //두 번째 파라미터로 전달되는 배열안에 검사하고 싶은 값을 넣어준다 
  useEffect(() => {
    console.log(name);
  }, [name]);
  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    SetNickname(e.target.value);
  };
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름 :</b> {name}
        </div>
        <div>
          <b>닉네임 :</b> {nickname}
        </div>
      </div>
    </div>
  )
}

export default Info;