import {extension} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const link = document.createElement('shopify-link');
  link.href = 'shopify://admin/orders';
  link.textContent = "Shop's orders";

  root.appendChild(link);
});
