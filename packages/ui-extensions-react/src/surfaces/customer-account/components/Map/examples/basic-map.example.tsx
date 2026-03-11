import {
  reactExtension,
  Map,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <Extension />,
);

function Extension() {
  return (
    <Map
      apiKey="YOUR_GOOGLE_MAPS_API_KEY"
      latitude={-28.024}
      longitude={140.887}
      zoom={4}
      accessibilityLabel="Map showing pickup locations"
    />
  );
}
