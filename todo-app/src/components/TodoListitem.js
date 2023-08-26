import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  //MdCheckBox 나중에 할 일이 완료되었을 때 체크된 상태를 보여주기 위해 사용할 아이콘 
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListitem.scss'

const TodoListitem = () => {
  return (
    <div className="TodoListitem">
      <div className="checkbox">
        <MdCheckBoxOutlineBlank />
        <div className="text">할 일</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListitem;
