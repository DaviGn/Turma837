import http from 'http';

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (url === '/products' && method === 'GET') {
    return res.end('[]');
  }

  // if (url === '/products' && method === 'POST') {
  //   return res.end('Criado');
  // }

  return res.end('Ok');
});

server.listen(8080);
