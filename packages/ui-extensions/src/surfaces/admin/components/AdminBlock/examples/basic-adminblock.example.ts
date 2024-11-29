import {extension} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const adminBlock = document.createElement('shopify-admin-block');
  adminBlock.title = 'My App Block';
  adminBlock.textContent = '5 items active';
  root.appendChild(adminBlock);
});
