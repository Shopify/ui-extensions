import {extension} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const box = document.createElement('shopify-box');

  box.padding = 'base';
  box.textContent = 'Box';
  root.appendChild(box);
});
