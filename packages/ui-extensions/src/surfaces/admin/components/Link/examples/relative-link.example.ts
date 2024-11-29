import {extension} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const link = document.createElement('shopify-link');
  link.href = '/baz';
  link.textContent = 'Link relative to current path';

  root.appendChild(link);
});
