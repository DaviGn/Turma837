import dgram from 'dgram';
const server = dgram.createSocket('udp4');

server.on('error', (err) => {
  console.log(`server error: ${err}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`[${rinfo.address}:${rinfo.port}]: ${msg.toString().trim()}`);

  server.send('Olá cliente', rinfo.port, rinfo.address);
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(5000);
