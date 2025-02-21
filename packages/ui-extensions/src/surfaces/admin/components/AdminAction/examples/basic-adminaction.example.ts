export default function extension() {
  const adminAction = document.createElement('shopify-admin-action');
  adminAction.title = 'My App Action';
  adminAction.textContent = 'Modal content';
  document.body.appendChild(adminAction);

  const primaryAction = document.createElement('shopify-button');

  primaryAction.slot = 'primaryAction';
  primaryAction.onclick = () => console.log('pressed primary action');
  primaryAction.textContent = 'Primary';
  adminAction.appendChild(primaryAction);

  const secondaryAction = document.createElement('shopify-button');
  secondaryAction.slot = 'secondaryAction';
  secondaryAction.onclick = () => console.log('pressed secondary action');
  secondaryAction.textContent = 'Secondary';
  adminAction.appendChild(secondaryAction);
}
