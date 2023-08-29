import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
          <li key={item.id}>{item.text}</li>
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
