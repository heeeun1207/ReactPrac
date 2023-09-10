import React, { useState } from 'react';
import Information from './Information';

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >

        {visible ? '숨기기' : '보이기'}
      </button >
      <hr />
      {visible && <Information />}
    </div>
  );
};

export default App;