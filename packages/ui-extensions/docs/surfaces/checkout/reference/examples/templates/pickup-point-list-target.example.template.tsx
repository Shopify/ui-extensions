import {
  reactExtension,
  useApi,
  useSubscription,
  Text,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  '##TARGET##',
  () => <Extension />,
);

function Extension() {
  const {isLocationFormVisible} =
    useApi<'##TARGET##'>();

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
      <Text>Pickup points are being shown.</Text>
    );
  }
}
