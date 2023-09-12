import { createStore } from "redux";

// DOM 요소들을 변수에 할당
const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 액션 타입 정의
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 생성 함수 정의
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 초기 상태 정의
const initialSate = {
  toggle: false,
  counter: 0
};

// 리듀서 정의
function reducer(state = initialSate, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:// 토글 액션 타입
      return {
        ...state,
        toggle: !state.toggle
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
}

divToggle.addEventListener('click', () => {
  store.dispatch(toggleSwitch()); // Redux 상태 변경
});

const store = createStore(reducer); // 스토어 생성


const render = () => {
  const state = store.getState();
  // 토글 상태에 따라 토글(div)에 'active' 클래스 추가/제거
  if (state.toggle) {
    divToggle.classList.add('active'); // .toggle이 활성화되면 .active 클래스 추가
  } else {
    divToggle.classList.remove('active'); // .toggle이 비활성화되면 .active 클래스 제거
  }
  counter.innerText = state.counter;
};

render();

// 스토어 상태 변경 감지 후 렌더링 수행
store.subscribe(render);

// 이벤트 핸들러 등록
divToggle.addEventListener('click', () => {
  // 토글 버튼 클릭 시, 토글 액션을 스토어에 디스패치하여 상태 변경
  store.dispatch(toggleSwitch());
});

btnIncrease.addEventListener('click', () => {
  store.dispatch(increase(1));
});

btnDecrease.addEventListener('click', () => {
  store.dispatch(decrease());
});
