import http from 'http';

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (method === 'GET') {
    return res.end('[listadeProdutos]');
  }

  if (method === 'POST') {
    return res.end('Criado');
  }

  return res.end('Ok');
});

server.listen(8080);
