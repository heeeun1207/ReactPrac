import { useState } from "react";
import axios from 'axios';

const App =() =>{
  const [data,setData ] =useState(null);
  const onClick = () => {
    // 실제 URL에서 제공하는 가짜 API를 호출하고 이에 응답을 하는것을 보여준다. 
    // axios.get 함수 사용 -> 파라미터로 전달된 주소에 GET 요청을 해 준다. 
    // 이에 대한 결과는 .then을 통해 비동기적으로 확인할 수 있다.
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response =>{
      setData(response.data);
    });
  };
  return(
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data,null,2)} readOnly={true} />}
    </div>
  );
};

export default App;
