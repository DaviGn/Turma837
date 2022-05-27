// CommonJS
// const readline = require('readline');
import readline from 'readline';

const terminal = readline.createInterface({
  // eslint-disable-next-line no-undef
  input: process.stdin,
  // eslint-disable-next-line no-undef
  output: process.stdout,
});

let a = 10;
let c = a + 10;

terminal.question('Qual o seu nome?', (name) => {
  console.log('Nome digitado: ' + name);
  terminal.question('Qual o seu sobrenome?', (name) => {
    console.log('Sobrenome digitado: ' + name);
    terminal.question('Qual a sua idade?', (name) => {
      console.log('Idade digitada: ' + name);
      terminal.question('Qual o seu endereço?', (name) => {
        console.log('Endereço digitado: ' + name);
        terminal.close();
      });
    });
  });
});
