const express = require('express');
const cors = require('cors'); // cors 모듈 추가

const app = express();
const PORT = 3001;

const data = [
  { id: 'heeeun', text: '첫번째 작성한 글입니다.' },
  { id: 'heeeun2', text: '두번째 작성한 글입니다.' },
  { id: 'jungheeeun3', text: '세번째 작성한 글입니다. ' },
];

app.use(cors()); // CORS 정책을 허용

app.get('/api/items', (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
