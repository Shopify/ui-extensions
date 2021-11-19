import fs from 'fs';
import {updateIndex, log} from '../../utils';
import {
  createReactClientExample,
  createReactClientComponentIndex,
  createReactClientFromTemplate,
} from '../templates';

const FOLDER_PATH = 'packages/admin-ui-extensions-react/src/components';

export function createReactClient(componentName: string) {
  const componentDir = `${process.cwd()}/${FOLDER_PATH}/${componentName}`;

  // Create component code
  try {
    fs.mkdirSync(componentDir, {recursive: true});
    fs.writeFileSync(
      `${componentDir}/${componentName}.ts`,
      createReactClientFromTemplate(componentName),
    );
    fs.writeFileSync(
      `${componentDir}/index.ts`,
      createReactClientComponentIndex(componentName),
    );
    updateIndex(
      `${FOLDER_PATH}/index.ts`,
      `export * from './${componentName}';`,
    );

    log(`✅ Create ${componentName} react succeeded!`);
  } catch (error) {
    log(`❌ Create ${componentName} react failed!`, error);
  }

  // Create examples for docs
  try {
    fs.mkdirSync(`${componentDir}/examples`, {recursive: true});
    fs.writeFileSync(
      `${componentDir}/examples/${componentName}.example.ts`,
      createReactClientExample(componentName),
    );
    log(
      `✅ Create React ${componentName}/examples/${componentName}.example.ts succeeded!`,
    );
  } catch (error) {
    log(
      `❌ Create React ${componentName}/examples/${componentName}.example.ts failed!`,
      error,
    );
  }
}
