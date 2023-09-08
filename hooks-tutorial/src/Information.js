import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, SetNickname] = useState('');
  //두 번째 파라미터로 비어있는 배열을 넣어주면 된다. 
  useEffect(() => {
    console.log('마운드될 때만 실행됩니다.');
  }, []);
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