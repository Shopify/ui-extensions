import {extension} from '@shopify/ui-extensions/admin';

extension('Playground', (root) => {
  const icon = document.createElement('shopify-icon');

  icon.type = 'apps';

  root.appendChild(icon);
});
