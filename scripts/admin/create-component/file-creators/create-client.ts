import fs from 'fs';
import {updateIndex, log} from '../../utils';
import {
  createClientExample,
  createClientComponentIndex,
  createClientFromTemplate,
} from '../templates';

const FOLDER_PATH = 'packages/admin-ui-extensions/src/components';

export function createClient(componentName) {
  const componentDir = `${process.cwd()}/${FOLDER_PATH}/${componentName}`;

  // Create component code
  try {
    fs.mkdirSync(componentDir, {recursive: true});
    fs.writeFileSync(
      `${componentDir}/${componentName}.ts`,
      createClientFromTemplate(componentName),
    );
    fs.writeFileSync(
      `${componentDir}/index.ts`,
      createClientComponentIndex(componentName),
    );
    updateIndex(
      `${FOLDER_PATH}/index.ts`,
      `export * from './${componentName}';`,
    );

    log(`✅ Create ${componentName} core succeeded!`);
  } catch (error) {
    log(`❌ Create ${componentName} core failed!`, error);
  }

  // Create examples for docs
  try {
    fs.mkdirSync(`${componentDir}/examples`, {recursive: true});
    fs.writeFileSync(
      `${componentDir}/examples/${componentName}.example.ts`,
      createClientExample(componentName),
    );
    log(
      `✅ Create ${componentName}/examples/${componentName}.example.ts succeeded!`,
    );
  } catch (error) {
    log(
      `❌ Create ${componentName}/examples/${componentName}.example.ts failed!`,
      error,
    );
  }
}
