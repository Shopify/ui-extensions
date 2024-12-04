import {extension} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const adminAction = document.createElement('shopify-admin-action');
  adminAction.title = 'My App Action';
  adminAction.textContent = 'Modal content';
  root.appendChild(adminAction);

  const primaryAction = document.createElement('shopify-button');

  primaryAction.slot = 'primaryAction';
  primaryAction.onpress = () => console.log('pressed primary action');
  primaryAction.textContent = 'Primary';
  adminAction.appendChild(primaryAction);

  const secondaryAction = document.createElement('shopify-button');
  secondaryAction.slot = 'secondaryAction';
  secondaryAction.onpress = () => console.log('pressed secondary action');
  secondaryAction.textContent = 'Secondary';
  adminAction.appendChild(secondaryAction);
});
