import { createStore } from "redux";

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

const initialSate = {
  toggle: false,
  counter: 0
};

function reducer(state = initialSate, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
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

// render 함수 수정
const render = () => {
  const state = store.getState();
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
