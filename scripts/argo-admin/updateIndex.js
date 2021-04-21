const fs = require('fs');

module.exports = function updateIndex(path, addition) {
  const currentFile = fs.readFileSync(path);
  const currentFileContent = currentFile.toString();

  const newContent = `
${currentFileContent.trimRight()}
${addition}
`.trimLeft();

  fs.writeFileSync(path, newContent);
}
