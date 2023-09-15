import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈페이지</h1>
      <p>가장 먼저 보여질 페이지</p>
      <ul>
          <li>
          <Link to ="/abuot">소개</Link>
          </li>
          <li>
          <Link to ="/profiles/velopert">velopert의 프로필 정보</Link>
          </li>
          <li>
          <Link to ="/profiles/gildong">gildong 프로필 정보</Link>
          </li>
          <li>
          <Link to ="/profiles/void">존재하지 않는 프로필 정보</Link> 
          </li>
          <li>
            <Link to="/articles">게시글 목록</Link>
          </li>
      </ul>
    </div>
  );
};

export default Home;
