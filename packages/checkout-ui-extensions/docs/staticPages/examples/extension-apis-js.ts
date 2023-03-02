import {
  extend,
  Banner,
} from '@shopify/checkout-ui-extensions';

extend(
  'Checkout::DeliveryAddress::RenderBefore',
  (root, api) => {
    renderApp(root, api);

    api.shippingAddress.subscribe(() =>
      renderApp(root, api),
    );
  },
);

function renderApp(root, api) {
  const {countryCode} =
    api.shippingAddress.current;

  // In case of a re-render, remove previous children.
  for (const child of root.children) {
    root.removeChild(child);
  }

  if (countryCode !== 'CA') {
    const banner = root.createComponent(
      Banner,
      {},
      'Sorry, we can only ship to Canada at this time',
    );
    root.appendChild(banner);
  }
}
