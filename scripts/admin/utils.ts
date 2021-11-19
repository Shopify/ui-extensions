import fs from 'fs';

export function updateIndex(path, addition) {
  const currentFile = fs.readFileSync(path);
  const currentFileContent = currentFile.toString();

  const newContent = `
${currentFileContent.trimRight()}
${addition}
`.trimLeft();

  fs.writeFileSync(path, newContent);
}

/**
 * Error message and kill process
 */
export function killProcess(errorMessage: string, error?: any) {
  // eslint-disable-next-line no-console
  console.error(errorMessage, error);
  process.exit(1);
}

export function log(...args) {
  // eslint-disable-next-line no-console
  console.log(...args);
}
