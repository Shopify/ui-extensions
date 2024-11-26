import {extension} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  root.innerHTML =
    '<shopify-link href="shopify://admin/orders">Shop\'s orders</shopify-link>';
});
