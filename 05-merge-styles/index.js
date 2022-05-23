const fs = require('fs');
const path = require('path');

const stylesFolder = path.join(__dirname, 'styles');
const htmlFolder = path.join(__dirname, 'project-dist', 'bundle.css');

const writeStyles = fs.createWriteStream(htmlFolder);

fs.readdir(stylesFolder, { withFileTypes: true }, (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    const ext = path.extname(file.name);
    if (ext === '.css') {

      let data = '';

      fs.createReadStream(path.join(stylesFolder, file.name))
        .on('data', (chunk) => (data += chunk))
        .on('end', () => writeStyles.write(data));
    }
  });
});
