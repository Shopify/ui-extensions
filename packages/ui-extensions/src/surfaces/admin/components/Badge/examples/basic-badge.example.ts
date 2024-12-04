import {extension} from '@shopify/ui-extensions/admin';

extension('Playground', (root) => {
  const badge = document.createElement('shopify-badge');

  badge.tone = 'info';
  badge.textContent = 'Fulfilled';

  root.appendChild(badge);
});
