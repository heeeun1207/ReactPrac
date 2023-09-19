import { Route, Routes } from "react-router-dom";
import NewsPage from "./pages/NewsPage";


const App = () =>{
  return(
    <Routes>
      {/* 카테고리 URL 파라미터가 없어도 보여줘야하고, 카테고리가 있어도 보여줘야  하므로 컴포넌트를 두 번 사용한다   */}
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
};

export default App;
