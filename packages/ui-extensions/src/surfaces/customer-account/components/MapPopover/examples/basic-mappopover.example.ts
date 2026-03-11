import {
  extension,
  Map,
  MapMarker,
  MapPopover,
} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const popoverFragment = root.createFragment();
  const popover = root.createComponent(
    MapPopover,
    {},
    'Blue Mountains National Park store',
  );
  popoverFragment.appendChild(popover);
  const map = root.createComponent(
    Map,
    {
      apiKey: 'YOUR_API_KEY',
      accessibilityLabel: 'Map',
      latitude: -28.024,
      longitude: 140.887,
      zoom: 4,
    },
    [
      root.createComponent(MapMarker, {
        latitude: -28.024,
        longitude: 140.887,
        accessibilityLabel: 'Map marker for Innamincka, Australia',
        overlay: popoverFragment,
      }),
    ],
  );

  root.appendChild(map);
});
