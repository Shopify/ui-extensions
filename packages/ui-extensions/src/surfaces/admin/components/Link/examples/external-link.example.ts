import {extension} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const link = document.createElement('shopify-link');
  link.href = 'https://www.shopify.ca/climate/sustainability-fund';
  link.textContent = 'Sustainability fund';

  root.appendChild(link);
});
