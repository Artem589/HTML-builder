const fs = require('fs');
const path = require('path');
const { stdout } = process;
const inputFolder = path.join(__dirname, 'secret-folder');


function filesInFolder(file) {
  const pos = file.name.indexOf('.');
  fs.stat(`${inputFolder}\\${file.name}`, (err, stat) => {
    if (err) throw err;
    stdout.write(
      `${file.name.slice(0, pos)} - ${path.extname(file.name).slice(1)} - ${(stat.size / 1024).toFixed(3)}kb\n`
    );
  });
}

fs.readdir(inputFolder, { withFileTypes: true }, (_err, data) => {
  if (_err) throw _err;
  data.forEach((file) => {
    if (file.isFile()) {
      filesInFolder(file);
    }
  }
  );
});





