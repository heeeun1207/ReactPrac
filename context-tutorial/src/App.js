import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color";
// Provider 사용해서 Context의 value를 변경할 수 있다. 
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
