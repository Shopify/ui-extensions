import {
  reactExtension,
  useApi,
  useSubscription,
  Text,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.pickup-location-list.render-before',
  () => <Extension />,
);

function Extension() {
  const {isLocationFormVisible} =
    useApi<'purchase.checkout.pickup-location-list.render-before'>();
  const locationFormShown = useSubscription(
    isLocationFormVisible,
  );

  if (locationFormShown) {
    return (
      <Text>
        The customer is being asked to provide
        their location.
      </Text>
    );
  } else {
    return (
      <Text>
        Pickup locations are being shown.
      </Text>
    );
  }
}
