export default function extension() {
  const accountAction = document.createElement('s-customer-account-action');

  const closeButton = document.createElement('s-button');
  closeButton.innerHTML = 'Click to close';
  closeButton.slot = 'primaryAction';
  closeButton.addEventListener('click', () => shopify.close());

  accountAction.append('Extension content');
  accountAction.append(closeButton);

  accountAction.heading = 'Extension title';

  document.body.append(accountAction);
}
