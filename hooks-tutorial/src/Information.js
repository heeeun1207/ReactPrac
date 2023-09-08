import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, SetNickname] = useState('');
  useEffect(() => {
    console.log('리렌더링 될때마다 ! : 리렌더링이 완료되었습니다~');
    console.log({
      name,
      nickname
    });
  });
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