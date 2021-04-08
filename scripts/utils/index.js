const fs = require('fs');

function getFileContent(path) {
  return fs.readFileSync(path).toString();
}

function killProcess(errorMessage, error) {
  console.error(errorMessage, error);
  process.exit(1);
}

function pascalCaseValidator(str) {
  return str === toPascalCase(str);
}

function toSpinalCase(str) {
  return str
    .replace(/([A-Z])/g, '-$1')
    .slice(1)
    .toLowerCase();
}

function toPascalCase(str) {
  return str
    .replace(str[0], str[0].toUpperCase())
    .replace(/(_|-)./g, (x) => x.toUpperCase()[1])
    .replace(/\s/g, (x) => x.toUpperCase()[1]);
}

module.exports = {
  getFileContent,
  killProcess,
  pascalCaseValidator,
  toSpinalCase,
  toPascalCase,
};
