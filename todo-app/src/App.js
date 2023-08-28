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

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,),
      );
    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
      // filter 함수를 사용하여 특정 id를 가진 항목을 제외한 새로운 배열을 생성한다.
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  const nextId = useRef(4);


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
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};



export default App;
