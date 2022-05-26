const fs = require('fs');
const path = require('path');
const {stdout} = process;

const newFolder = path.join(__dirname, 'files-copy');
const folder = path.join(__dirname, 'files');

function createFolder() {
  fs.mkdir(newFolder, { recursive: true }, (err) => {
    if (err) throw err;
    console.log('Create Folder');
  });
}

function copyFolder() {
  fs.readdir(newFolder, {withFileTypes: true}, (err, data) => {
    if(err) throw err;
    data.forEach((file) => {
      fs.unlink(path.resolve(newFolder, file.name), (err) => {
        if(err) throw err;
      });
    });
  });
  fs.readdir(folder, { withFileTypes: true }, (_err, data) => {
    if (_err) throw _err;
    data.forEach((file) => {
      if (file.isFile()) {
        fs.copyFile(
          path.resolve(folder, file.name),
          path.resolve(newFolder, file.name),
          (err) => {
            if (err) throw err;
            stdout.write(`${file.name}\n`);
          }
        );
      }
    });
  });
}

createFolder();
copyFolder();



