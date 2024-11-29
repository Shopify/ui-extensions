import {extension} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const link = document.createElement('shopify-link');
  link.href = 'app://baz';
  link.textContent = 'Link to app path';

  root.appendChild(link);
});
