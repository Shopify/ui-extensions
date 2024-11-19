import {extension} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  root.innerHTML =
    '<shopify-link href="https://www.shopify.ca/climate/sustainability-fund">Sustainability fund</shopify-link>';
});
