export const createClientFromTemplate = (componentName: string) =>
  `
import {createRemoteComponent} from '@remote-ui/core';

export interface CardProps {
  /** Description of what this prop does. This gets added to the docs. */
  firstProp?: string;
}

/**
 * {{name}} is a component that...
 *
 * 
 */
export const {{name}} = createRemoteComponent<'{{name}}', {{name}}Props>('{{name}}');

`
    .replace(/{{name}}/g, componentName)
    .trimLeft();

export const createClientComponentIndex = (componentName) =>
  `
export {{{name}}} from './{{name}}';
export type {{{name}}Props} from './{{name}}';
`
    .replace(/{{name}}/g, componentName)
    .trimLeft();

export const createClientExample = (componentName: string) =>
  `
import {extend, {{name}}} from '@shopify/admin-ui-extensions';

extend('Playground', (root) => {
  const {{varname}} = root.createComponent({{name}}, {
    // Props go here
  });

  root.appendChild({{varname}});

  root.mount();
});
`
    .replace(/{{name}}/g, componentName)
    .replace(
      /{{varname}}/g,
      `${componentName.charAt(0).toLowerCase()}${componentName.slice(1)}`,
    )
    .trimLeft();
