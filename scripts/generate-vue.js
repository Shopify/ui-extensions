const {resolve, join, basename} = require('path');
const {sync: glob} = require('glob');
const {writeFileSync, readFileSync, existsSync} = require('fs');

const root = resolve(__dirname, '..');

const components = glob('packages/argo-checkout/src/components/*/', {
  cwd: root,
}).sort();

const vueComponentsDirectory = join(
  root,
  'packages/argo-checkout-vue/src/components',
);
const componentIndexLines = [];

for (const componentDirectory of components) {
  const name = basename(componentDirectory);
  const configFile = join(componentDirectory, 'component.json');
  const config = existsSync(configFile)
    ? JSON.parse(readFileSync(configFile, 'utf-8'))
    : {};

  const {eventHandlerProps = []} = config;

  const content = eventHandlerProps.length
    ? `
import {${name}} from '@shopify/argo-checkout';
import {createRemoteVueComponent} from '@remote-ui/vue';

export const Argo${name} = createRemoteVueComponent(${name}, {
  emits: {
${eventHandlerProps
  .map(
    (propName) =>
      `    ${propName.replace(/^on(.)/, (_, firstLetter) =>
        firstLetter.toLowerCase(),
      )}: '${propName}',`,
  )
  .join('\n')}
  },
});
`
    : `
import {${name}} from '@shopify/argo-checkout';
import {createRemoteVueComponent} from '@remote-ui/vue';

export const Argo${name} = createRemoteVueComponent(${name});
`;

  writeFileSync(
    join(vueComponentsDirectory, `${name}.ts`),
    `${content.trim()}\n`,
  );
  componentIndexLines.push(`export {Argo${name}} from './${name}';`);
}

writeFileSync(
  join(vueComponentsDirectory, 'index.ts'),
  `${componentIndexLines.join('\n')}\n`,
);
