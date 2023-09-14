import {useParams} from 'react-router-dom';
//useParams는 React Router 라이브러리에서 제공하는 훅 중 하나이고, 
// URL의 동적 경로 매개변수(parameters)에 접근하고 이를 컴포넌트에서 사용할 수 있다
//일반적으로 React Router를 사용하여 동적 경로를 정의할 때, 
//경로 내에 :parameterName과 같은 형식으로 매개변수를 포함시킨다.


//* 프로필 정보들 저장
const data = {
  velopert:{
    name: '정희은',
    description: '리액트와 친해지는중인 개발자',
  },
  gildong:{
    name:'홍길동',
    description:'고전 소설 홍길동전의 주인공',
  },
};

const Profile = () => {
  const params = useParams();
  const profile =data[params.username];
  //params 객체에서 username 키를 사용하여 사용자의 프로필 정보가져오기 

return (
  <div>
    <h1>사용자 프로필</h1>
    {profile ? (
      <div>
        <h2>{profile.name}</h2>
        <p>{profile.description}</p>
        </div>
    ):(
      <p>존재하지 않는 프로필입니다.</p>
    )}
  </div>
  );
};
//* 조건부 설정 : profile이 존재하면 (즉, 참이면): <div> 안에 이름과 설명을 보여주는 JSX 코드를 렌더링
//*그렇지 않으면 (즉, 거짓이면): <div> 안에 "존재하지 않는 프로필입니다." 렌더링 

export default Profile;

