const http = require('http');
const port = process.env.PORT || 3000
const server = http.createServer((req, res) => {
  // url 정규화(
  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
  switch (path) {
    case '':
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Homepage!!')
      break
    case '/about':
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Aboutpage')
      break
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.end('Not Found')
      break
  }
})

server.listen(port, () => console.log(`server started on port ${port}; ` + 'press Ctrl-C to teminate...'))