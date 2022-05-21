import fs from 'fs';
import { once } from 'events';
import readline from 'readline';
import Path from 'path';

const dirPath = 'E:/Arquivos Wallit/Cotacoes';

// Leitura de diretório
// Promise
// fs.promises.readdir(path).then((files) => {
//   console.log(files);
// });

// Async/await
// async function readDirAsync() {
//   const files = await fs.promises.readdir(dirPath);
//   const filesToRead = [];

//   for (let i = 0; i < files.length; i++) {
//     const file = files[i];
//     const filePath = Path.join(dirPath, file);
//     filesToRead.push(filePath);
//   }
// }
// readDirAsync();

//Leitura de arquivo
// Promise
// fs.promises
//   .readFile('E:/Arquivos Wallit/Cotacoes/test.txt', 'utf8')
//   .then(console.log);

// // Async/await
// async function readFile() {
//   const content = await fs.promises.readFile(
//     'E:/Arquivos Wallit/Cotacoes/test.txt',
//     'utf8'
//   );
//   console.log(content);
// }
// readFile();

// Lendo arquivos grandes com stream
// const readStream = fs.createReadStream(
//   'E:/Arquivos Wallit/Cotacoes/COTAHIST_A2015.txt',
//   'utf8'
// );
// const reader = readline.createInterface({
//   input: readStream,
//   crlfDelay: Infinity,
// });

// // let lines = [];
// reader.on('line', (line) => {
//   // lines.push(line);
//   console.log(line);
// });
// once(reader, 'close');

const content = 'Hello World!';
const pathToWrite = 'E:/hello.txt';
fs.promises
  .writeFile(pathToWrite, content, 'utf8')
  .then(() => console.log('arquivo criado'))
  .catch(console.log);

fs.promises.appendFile(pathToWrite, '\nAppending something', 'utf8');
fs.promises.rm(pathToWrite);
