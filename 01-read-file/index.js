
const fs = require('fs');
const path = require('path');
const { stdout, stderr } = process;

const directory = path.join(__dirname, 'text.txt');
const stream = fs.createReadStream(directory, 'utf-8');
let data = '';
stream.on('data', (chunk) => (data += chunk));
stream.on('end', () => stdout.write(data));
stream.on('error', () => stderr.write('Error'));





