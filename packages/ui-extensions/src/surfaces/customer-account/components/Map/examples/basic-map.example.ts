import {extension, Map} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const map = root.createComponent(Map, {
    apiKey: 'YOUR_API_KEY',
    accessibilityLabel: 'Map showing pickup locations',
    latitude: -28.024,
    longitude: 140.887,
    zoom: 4,
  });

  root.appendChild(map);
});
