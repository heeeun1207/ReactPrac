//* 1. category 상태 관리하기 useState 
//* 2. category 값을 업데이트할 onSelect 함수 만들기 
import { useState, useCallback } from "react";
import NeswList from "./components/NewsList";
import Categories from "./components/Categories";

const App = () =>{
  const [category, setCategory] = useState('all');
  const onSelect = useCallback (category => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NeswList category={category}/>
    </>
  )
};

export default App;
