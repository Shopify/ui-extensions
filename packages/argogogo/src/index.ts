import {resolve, join} from 'path';
import {mkdirSync, existsSync, writeFileSync} from 'fs';
import {execSync} from 'child_process';
import {sync as spawnSync} from 'cross-spawn';

const OWN_ARGS = new Set(['--react', '--typescript', '--npm']);

try {
  run();
} catch (error) {
  process.exit(1);
}

function run() {
  const [, , name, ...rest] = process.argv;

  if (!name) {
    log('You must run this command with a directory name', {error: true});
    log('Example: npx argogogo my-extension', {error: true});
    process.exit(1);
  }

  const directory = resolve(name);
  const useReact = rest.includes('--react');
  const useTypeScript = rest.includes('--typescript');
  const useYarn = shouldUseYarn() && !rest.includes('--npm');
  const runArgs = rest.filter((arg) => !OWN_ARGS.has(arg));

  if (existsSync(directory)) {
    if (looksLikeExistingProject(directory)) {
      log(`Using existing project in ${directory}`);

      if (useYarn) {
        log('Running yarn start');
        spawn('yarnpkg', ['start', ...runArgs], {
          cwd: directory,
          stdio: 'inherit',
        });
      } else {
        log('Running npm start');
        spawn('npm', ['start', ...runArgs], {cwd: directory, stdio: 'inherit'});
      }

      return;
    }

    log(`The directory ${directory} already exists`, {error: true});
    process.exit(1);
  }

  log(`Creating a project in ${directory}`);
  mkdirSync(directory);

  const extraDependencies = useReact ? {react: '>=16.8.0 <17.0.0'} : {};
  const extraDevDependencies = useTypeScript ? {typescript: '^3.9.0'} : {};

  writeFileWithNewline(
    join(directory, 'package.json'),
    JSON.stringify(
      {
        name,
        private: true,
        scripts: {
          start: 'argogogo-run',
        },
        dependencies: {
          '@shopify/argo-checkout-testing': '^0.0.4',
          ...extraDependencies,
        },
        devDependencies: {
          'argogogo-run': '^0.0.8',
          ...extraDevDependencies,
        },
      },
      null,
      2,
    ),
  );

  if (useReact) {
    const content = `
import React from 'react';
import {
  renderReact,
  Button,
  FormLayout,
  TextField,
} from '@shopify/argo-checkout-testing';

renderReact('Checkout::KitchenSink', () => <App />);

function App() {
  return (
    <FormLayout>
      <TextField
        label="Email"
        onChange={(value) => console.log('email', value)}
      />
      <Button onPress={() => console.log('Paid!')}>Pay</Button>
    </FormLayout>
  );
}
`;

    writeFileWithNewline(
      join(directory, `index.${useTypeScript ? 'tsx' : 'js'}`),
      content,
    );
  } else {
    const content = `
import {
  extend,
  Button,
  FormLayout,
  TextField,
} from '@shopify/argo-checkout-testing';

extend('Checkout::KitchenSink', (root) => {
  const formLayout = root.createComponent(FormLayout);
  const textField = root.createComponent(TextField, {
    label: 'Email',
    onChange(value) {
      console.log('email', value);
    },
  });

  const button = root.createComponent(Button, {
    onPress() {
      console.log('Paid!');
    },
  });
  button.appendChild(root.createText('Pay'));

  formLayout.appendChild(textField);
  formLayout.appendChild(button);
  root.appendChild(formLayout);
  root.mount();

  return {};
});
`;

    writeFileWithNewline(
      join(directory, `index.${useTypeScript ? 'ts' : 'js'}`),
      content,
    );
  }

  if (useYarn) {
    log('Running yarn install');
    spawn('yarnpkg', ['install'], {cwd: directory, stdio: 'inherit'});

    log('Running yarn start');
    spawn('yarnpkg', ['start', ...runArgs], {cwd: directory, stdio: 'inherit'});
  } else {
    log('Running npm install');
    spawn('npm', ['install'], {cwd: directory, stdio: 'inherit'});

    log('Running npm start');
    spawn('npm', ['start', ...runArgs], {cwd: directory, stdio: 'inherit'});
  }
}

function writeFileWithNewline(path: string, content: string) {
  return writeFileSync(path, `${content.trim()}\n`);
}

function spawn(...args: Parameters<typeof spawnSync>) {
  const {status, stderr, stdout} = spawnSync(...args);

  if (status != null && status !== 0) {
    throw new Error(stderr.toString('utf8') ?? stdout.toString('utf8'));
  }
}

function log(message: string, {error = false} = {}) {
  const separator = error ? '\u001b[31m>\u001b[39m' : '\u001b[2m>\u001b[22m';
  // eslint-disable-next-line no-console
  console.log(`🔭 ${separator} ${message}`);
}

function shouldUseYarn() {
  try {
    execSync('yarnpkg --version', {stdio: 'ignore'});
    return true;
  } catch {
    return false;
  }
}

function looksLikeExistingProject(directory: string) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const packageJson = require(join(directory, 'package.json'));
    return packageJson?.scripts?.start === 'argogogo-run';
  } catch {
    return false;
  }
}
