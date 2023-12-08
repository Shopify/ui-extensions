import {
  extension,
  Banner,
} from '@shopify/ui-extensions/customer-account';

extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    renderApp(root, api);
  },
);

function renderApp(root, api) {
  // In case of a re-render, remove previous children.
  for (const child of root.children) {
    root.removeChild(child);
  }

  const banner = root.createComponent(
    Banner,
    {},
    api.i18n.translate('welcomeMessage'),
  );
  root.appendChild(banner);
}
