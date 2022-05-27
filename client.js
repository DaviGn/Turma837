import dgram from 'dgram';
const client = dgram.createSocket('udp4');

client.on('message', (msg) => console.log(msg.toString()));
client.send('Olá servidor', 5000, 'localhost');
