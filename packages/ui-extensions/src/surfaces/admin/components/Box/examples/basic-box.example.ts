import {extension} from '@shopify/ui-extensions/admin';

extension('Playground', (root) => {
  const box = document.createElement('shopify-box');

  box.padding = 'base';

  root.appendChild(box);
});
