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

export default TodoList;
//map 을 사용해서 key props 전달해줬다.
//여기서 사용되는 key 값은 각 항목마다 가지고 있는 고유값인 id 를 넣었다.
//* 여러 종류의 값을 전달해야 하는 경우 객체로 통째로 전달하는 편이 나중에 성능 최적화를 할 때 편리하다.
