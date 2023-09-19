import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color";
// Provider 사용해서 Context의 value를 변경할 수 있다. 
// Provider를 사용할 때 value 값을 반드시 명시해야 오류가 나지 않음
//    <ColorContext.Provider> 오류 발생 
const  App = () => {
  return (
    <ColorContext.Provider value={{color: 'pink'}}>
      <div>
        <ColorBox /> 
      </div>
    </ColorContext.Provider>
  );
};

export default App;
