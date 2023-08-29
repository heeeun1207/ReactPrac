import React, { useState, useEffect } from 'react';
import axios from 'axios';
// axios 자바스크립트 라이브러리
// Promise 기반의 API를 제공한다.
// 여러가지 메서드를 통해 서버로부터 데이터를 가져오거나 보낸다. 
const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/items')

      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const filteredItems = items.filter(item => item.id === 'heeeun'); return (
    <div>
      <h1>Items</h1>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>
            {item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
// import React, { useState, useEffect } from 'react';
// import jsonData from './data.json';

// const App = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const filteredItems = jsonData.filter(item => item.id === 3);
//     setItems(filteredItems);
//   }, []);

//   return (
//     <div>
//       <h1>Items</h1>
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
