import {extension} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const adminPrintAction = document.createElement('shopify-admin-print-action');
  adminPrintAction.src = 'https://example.com';
  root.appendChild(adminPrintAction);
});
