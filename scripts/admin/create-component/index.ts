import {killProcess, log} from '../utils';
import {createClient} from './file-creators/create-client';
import {createReactClient} from './file-creators/create-react-client';

const helpText = `
🔎 Usage: yarn admin-create-component {componentName}

Arguments:
- componentName(required): The name of the Component you'd like to generate. This argument must be in PascalCase.

📄 Use the -h or --help flag to see this text again.
`;

/**
 * Validate args
 */
if (process.argv.length === 2) {
  log(helpText);
  killProcess('Expected one argument: `ComponentName` in Pascal Case');
}

if (process.argv.length > 3) {
  log(helpText);
  killProcess(
    'Cannot have more than one argument or have spaces in the Component Name. Please use PascalCase for the component name.',
  );
}

const arg = process.argv[2].trim();
if(arg === '--help' || arg === '-h') {
  log(helpText);
  process.exit(0);
}

/**
 * Main block
 */

const componentName = arg;

try {
  createClient(componentName);
} catch (error) {
  killProcess("Couldn't create core client component.", error);
}

try {
  createReactClient(componentName);
} catch (error) {
  killProcess("Couldn't create React client component.", error);
}

log('------------------------------------------');
log('💡💡💡 Remember to update these files:');
log('- the example files for the automated dev docs');
log('- packages/argo-admin/src/component-sets/index.ts');
log('- one of the component sets in packages/argo-host/src/component-sets');
log('------------------------------------------');
