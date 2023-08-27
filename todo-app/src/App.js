import { useState, useCallback, useRef } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';


const App = () => {
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

  // 고윳값으로 사용될 id
  //* useState 대신 useRef를 사용해서 변수를 만드는 이유?
  // id값은 리렌더링될 필요가 없이 단순히 새로운 항목을 만들때 참조되는 값이기 때문이다. 
  const nextId = useRef(4);

  //* props로 전달해야 할 함수를 만들 때 useCallback을 사용해서 함수를 감싸는것을 습관화하자
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; //nextId 1씩 더하기
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};



export default App;
