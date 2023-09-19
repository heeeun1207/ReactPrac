import {createContext, useState} from 'react';

const ColorContext = createContext({
  state: {color : 'yellow', subcolor: 'pink'},
  action : {
    setColor: () => {},
    setSubcolor: () => {}
  }
});

const ColorProvider = ({children}) => {
  const [color, setColor] = useState ('yellow');
  const [subcolor, setSubcolor] = useState ('pink');

  const value = {
    state: { color, subcolor},
    action: {setColor , setSubcolor}
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

//const ColorConsumer = ColorContext.Consumer와 같은 의미
const {Consumer: ColorConsumer} =ColorContext;

//ColorProvider 와 ColorConsumer 내보내기
export {ColorProvider, ColorConsumer};

export default ColorContext;

