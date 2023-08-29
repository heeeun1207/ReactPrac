### 용도별로 컴포넌트 나누기

`TodoTemplate`<br>
화면의 가운데에 정멸시켜 주며, 앱 타이틀(일정관리)을 보여준다. <br>
children으로 내부 JSX를 props로 받아 와서 렌더링한다.

---

`TodoInsert`<br>
새로운 항목을 입력하고 추가할 수 있는 컴포넌트이다.<br>
state를 통해 인풋의 상태를 관리한다.

---

`TodoListitem`<br>
각 할 일 항목에 대한 정보를 보여 주는 컴포넌트이다.<br>
todo 객체를 props로 받아 와서 상태에 따라 다른 스타일의 UI를 보여준다.

---

`TodoList`<br>
todo 배열을 porps로 받아 온 후, 이를 배열 내장 함수 map을 사용해서 여러개의<br>
TodoListitem 컴포넌트로 변환하여 보여 준다.

---

### react-icons 아이콘 사용하기

[React Icons](https://react-icons.github.io/react-icons/icons?name=md)

```
import { IconName } from "react-icons/md";
```
