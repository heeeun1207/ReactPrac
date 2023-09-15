import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    //이전 페이지로 이동
    navigate(-1);
  };
  
  const goArticles = () => {
    // articles 게시판목록으로 이동 
    navigate('/articles');
  };

  return (
  <div>
    <header style = {{background :'lightgray',padding:16, fontSize :24}}>
      <button onClick={goBack}>뒤로가기 버튼</button>
      <button onClick={goArticles}>게시판 목록 버튼</button>
    </header>

    <main>
      <Outlet/>
    </main>
  </div>
  );
};

export default Layout;