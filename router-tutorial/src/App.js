import {Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Layout from './Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      {/* index  = path="/" 동일한 역할을 하며, 이를 좀 더 명시적으로 표현하는 방법 */}
      <Route index element={<Home />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/profiles/:username" element={<Profile />}/>
      </Route>
      {/* /articles 경로에 Articles 컴포넌트 내용인 목록페이지 렌더링 */}
      <Route path="/articles" element={<Articles />}>
        {/* /articles/1 게시글을 들어가면  Article 컴포넌트의 <h2>태그와 articles목록이 같이 렌더링  */}
        <Route path=":id" element={<Article />}/>
        </Route>

    </Routes>
  );
}

export default App;
