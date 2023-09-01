const express = require('express');
const app = express();
const expressHandlebars = require('express-handlebars');

const port = process.env.PORT || 3000; //포트 정의

// 핸들바 뷰 엔진 설정
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) =>
  res.render('home'));

app.get('/about', (req, res) =>
  res.render('about'));

// 커스텀 404 페이지
app.use((req, res) => {
  res.status(404);
  res.render('404');
});

// 커스텀 500 페이지
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500);
  res.render('500');
});

app.listen(3000, () => {
  console.log('서버가 http://localhost:3000에서 실행 중입니다.');
});
