const fs = require('fs');
const path = require('path');
const { stdin, stdout} = process;

const output = fs.createWriteStream(path.join(__dirname, 'test.txt'));
// const input = fs.createReadStream(path.join(__dirname, 'test.txt'), 'utf-8');

stdout.write('Введите текст\n');

stdin.on('data', (data) => {
  if(data.toString().trim() == 'exit') {
    stdout.write('Обязательно возвращайся!');
    process.exit();
  }
  output.write(`${data}`);
});


process.on('SIGINT', () => {
  stdout.write('Обязательно возвращайся!');
  process.exit();
});




