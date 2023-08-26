import { useState } from 'react';
// todos상태를 정의하고 TodoList의 props로 전달하기 
import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';


const App = () => {
  // todos 배열 안에 있는 객체에 각 항목의 고유 id, 내용, 완료 여부를 알려주는 값이 포함되어 있다.
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '첫번째 글 작성했다.',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어보기',
      checked: false,
    },
  ]);
  return (
    <TodoTemplate>
      <TodoInsert />
      {/* TodoList에서 todos 배열 값들을 받아 온 후 Todoitem으로 변환해서 렌더링하도록 설정해준다. */}
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};



export default App;
