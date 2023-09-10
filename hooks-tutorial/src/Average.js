import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산 중...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');


  // inputEl이라는 Ref 객체를 생성한다.
  // 이 Ref 객체는 current 속성을 가지고 있으며, 초기값은 null이다.
  const inputEI = useRef(null);

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);//컴포넌트가 처음 리렌더링 될 때만 함수 생성
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');

    inputEI.current.focus();
  }, [number, list]);
  // inputEl.current를 사용하여 실제 DOM 엘리먼트에 포커스를 설정한다.
  const avg = useMemo(() => getAverage(list), [list]);


  return (
    <div>
      {/* ref 속성을 사용하여 inputEl Ref를 input 엘리먼트에 연결. 이제 inputEl.current를 통해 실제 input 엘리먼트에 접근할 수 있다. */}
      <input value={number} onChange={onChange}
        ref={inputEI}
      />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;