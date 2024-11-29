import {extension} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const divider = document.createElement('shopify-divider');

  root.append('First Text', divider, 'Second Text');
});
