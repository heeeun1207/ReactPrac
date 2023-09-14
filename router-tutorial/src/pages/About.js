//* 쿼리스트링
// useLocation : 이 훅은 객체를 반환한다. 객체는 현재 사용자가 보고있는 페이지 정보를 지닌다.

import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();

  return (
    <div>
      <h1>소개 페이지</h1>
      <p>리액트 라우터 사용하고 있는중!</p>
      {/* .search 맨앞의 ? 문자를 포함한 쿼리스트링 값  */}
      <p>쿼리스트링 : {location.search}</p>
      {/* http://localhost:3000/about?detail=true&mode=1
      보통 문자열 앞에 ? 를 지우고 & 문자열로 분리한 뒤 key와 value 를 파싱하는 작업을 한다. 
      npm 에서 qs 또는 querysrting 패키지를 설치하면 된다. 
      */}
      {/* useSearchParam 의 Hook을 통해 쿼리스트링을 쉽게 다룰 수 있다. */}
    </div>
  );
};

export default About;


