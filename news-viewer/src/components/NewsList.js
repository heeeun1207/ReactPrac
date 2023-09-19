
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import usePromise from "../lib/usePromise";


const NewsListBlock =styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width:768px){
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
const NewsList =({category}) => {
  const [loading, response, error] =usePromise(()=>{
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=2b4b047dd52e4aaebff8b321db2634b4`,
    );
  },[category]);
  
  // 대기 중일 때 
if(loading) {
  return <NewsListBlock>대기 중...</NewsListBlock>;
}
// 아직 response 값이 설정되지 않았을 때 
if(!response){
  return null;
}

// 에러가 발생했을 때
if (error){
  return <NewsListBlock>에러 발생! </NewsListBlock>;
}

// response 값이 휴요할 때 
const {articles} =response.data;
return(
  <NewsListBlock>
    {articles.map(article=>(
      <NewsItem key={article.url} article={article} />
    ))}
  </NewsListBlock>
  );
};
// 대기 중 상태 관리와 useEffect 설정을 직접 하지 않아도 되므로 코드가 훨씬 간결해진다.
// 요청 상태를 관리할때 반드시 Hook을 만들어서 사용해야 하는건 아니지만, 상황에따라 적절히 이용할 것. 
export default NewsList;