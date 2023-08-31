const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000


function serveStaticFile(res, filePath, contentType, responseCode = 200) {
  // 경로 합치기
  filePath = path.join(__dirname, filePath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      return res.end('500 - Internal Error');
    }

    // 파일 타입에 따라 콘텐츠 타입 설정
    let mimeType = 'text/plain';
    if (contentType === 'image/png') {
      mimeType = 'image/png';
    } else if (contentType === 'text/html') {
      mimeType = 'text/html';
    }
    res.writeHead(responseCode, { 'Content-Type': mimeType });
    res.end(data);
  });
}



const server = http.createServer((req, res) => {
  //쿼리스트링, 옵션인 마지막 슬래시를 없애고 소문자로 바꿔서 url 정규화 
  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
  switch (path) {
    case '':
      serveStaticFile(res, 'public/home.html', 'text/html')
      break
    case '/about':
      serveStaticFile(res, 'public/about.html', 'text/html')
      break
    case '/img/logo.png':
      serveStaticFile(res, '/img/logo.png', 'image/png')
      break
    default:
      serveStaticFile(res, 'public/404.html', 'text/html')
      break
  }
})

server.listen(port, () => console.log(`server started on port ${port}; ` + 'press Ctrl-C to teminate...'))