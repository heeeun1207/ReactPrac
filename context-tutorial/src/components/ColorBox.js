import ColorContext from "../contexts/color";

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {value => (
        <div
          style={{
            width: '64px',
            height: '64px',
            background: value.color
          }}
          />
      )}
    </ColorContext.Consumer>
  );
};
// Cunsumer 사이에 중괄호를 열어서 그안에 함수를 넣는다. 
// 이러한 패턴을 Function as a child, 혹은 Render Props라고 한다.
// children이 있어야 할 자리에 일반 JSX혹 문자열이 아닌 함수를 전달하는 것
export default ColorBox;

//* 예제 
// const RenderPropsSample = ({children}) => {
// 	return <div> 결과 : {children(5)}</div>
// };

// export default RenderPropsSample;

// 만약 위와 같은 컴포넌트가 있다면 추후 사용할 때 다음과 같이 사용할 수 있다.
// <RenderPropsSample>{value => 2 * value}</RenderPropsSample>; 

// RenderPropsSample에서 children props로 파라미터에 *2 곱해서 반환하는 함수를 전달하면 
// 해당 컴포넌트에서는 이 함수에 5을 인자로 넣어서 "결과 : 10" 을 렌더링한다. 