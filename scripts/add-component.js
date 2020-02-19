const fs = require('fs');

if(process.argv.length === 2) {
  killProcess('Expected one argument `ComponenetName` in Pascal Case');
}

if(process.argv.length > 3) {
  killProcess('Cannot have more than one argument or have spaces in the Componenet Name. Please use PascalCase for the component name.');
}

const componentName = process.argv[2].trim();
const hostPath = 'packages/app-extensions-polaris-components/src/host/components'
const componenetDir = `${process.cwd()}/${hostPath}/${componentName}`;

console.log(componentName)
console.log(hostPath)
console.log(componenetDir)

fs.mkdirSync(componenetDir, {recursive: true}, (error) => {
  if(error) killProcess('Couldn\'t write directory.', error);
  else writeFiles();
})

function writeFiles() {
  fs.writeFile(`${componenetDir}/${componentName}.tsx`, generateComponentTemplate(), function(err) {
    if(error) killProcess('Cannot write component file', error);
  });

  fs.writeFile(`${componenetDir}/index.tsx`, `export {default} from './${componentName}';`, function(err) {
    if(error) killProcess('Cannot write component file', error);
  });
}

function killProcess(errorMessage, error) {
  console.error(errorMessage, error);
  process.exit(1);
}

function generateComponentTemplate(name) {
  const template = `import React from 'react';

export default function {{name}}() {
  return <>Componenet Code</>;
}
`;

  return template.replace('{{name}}', name)

}
