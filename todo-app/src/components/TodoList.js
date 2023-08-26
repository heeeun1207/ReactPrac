import TodoListitem from './TodoList';
import './TodoList.scss';

const TodoList = () => {
  return (
    <div className="TodoList">
      {/* 별도의 props전달 없이 그대로 여러 번 보여주고 있다.
      나중에 기능을 추가하고 다양한 데이터를 전달할 예정이다. */}
      <TodoListitem />
      <TodoListitem />
      <TodoListitem />
    </div>
  );
};

export default TodoList;
