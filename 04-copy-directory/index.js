const fs = require('fs');
const path = require('path');
const {stdout} = process;

const newFolder = path.join(__dirname, 'files-copy');
const folder = path.join(__dirname, 'files');
console.log(folder);


function createFolder() {
  fs.mkdir(newFolder, { recursive: true }, (err) => {
    if (err) {
      console.err(err);
      return;
    }
    console.log('Create Folder');
  });
}
function copyFolder() {
  fs.readdir(folder, { withFileTypes: true }, (_err, data) => {
    if (_err) throw _err;
    data.forEach((file) => {
      if (file.isFile()) {
        fs.copyFile(
          `${folder}\\${file.name}`,
          `${newFolder}\\${file.name}`,
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


