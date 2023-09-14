import { useSearchParams } from "react-router-dom";

const About = () => {
//http://localhost:3000/about?mode=39&detail=true
//useSearchParams URL문자열 파라미터를 객체형태로 가져오며, 
//이 객체에서 .get('') 메서드를 사용하여 특정 파라미터값을 가져온다 
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  const onToggleDetail = () => {
    setSearchParams({mode, detail: detail !== 'true' });
  };

  const onIncreaseMode = () =>{
    const nextMode= mode === null ? 1 : Number(mode) + 1 ;
    //parseInt()와 Number() 
    setSearchParams({mode: nextMode,detail});
  };

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터 사용해 보는중</p>
      <p>detail: {detail}</p>
      <p>mode:{mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1 </button>
    </div>
  );
};

export default About;
