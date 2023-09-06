import React from 'react';
import TodoListitem from './TodoListitem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListitem todo={todo} key={todo.id} onRemove={onRemove}
          onToggle={onToggle} />

      ))}
    </div>
  );
};

export default React.memo(TodoList);
//지금 TodoList 컴포넌트가 불필요한 리렌더링이 발생하지 않는다.
//하지만 App컴포넌트에 다른 state 가 추가되어 해당 값들이 업데이트 될 경우를 대비해서 TodoList 컴포넌트가 불필요한 리렌더링을 할 수 있는 상황이 올 수 있다. 
//그렇기 때문에 지금 React.memo를 사용해서 미리 최적화한다. 

//* 리스트 관련 컴포넌트 작성할 때 리스트 아이템과 리스트, 이 두 가지 컴포넌트를 최적화해 주는 것을 잊지 말자 
