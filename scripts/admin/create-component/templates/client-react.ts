export const createReactClientFromTemplate = (componentName: string) =>
  `
import {{{name}} as Base{{name}}} from '@shopify/admin-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';

export const {{name}} = createRemoteReactComponent(Base{{name}});
`
    .replace(/{{name}}/g, componentName)
    .trimLeft();

export const createReactClientComponentIndex = (componentName) =>
  `
import type {PropsWithChildren} from 'react';
import type {{{name}}Props as Base{{name}}Props} from '@shopify/admin-ui-extensions';

export type {{name}}Props = PropsWithChildren<Base{{name}}Props>;
export {{{name}}} from './{{name}}';
`
    .replace(/{{name}}/g, componentName)
    .trimLeft();

export const createReactClientExample = (componentName: string) =>
  `
import React from 'react';
import {extend, render, {{name}}} from '@shopify/admin-ui-extensions-react';

function App() {
  return <{{name}}>This is the best extension.</{{name}}>;
}

extend(
  'Playground',
  render(() => <App />),
);
`
    .replace(/{{name}}/g, componentName)
    .trimLeft();
