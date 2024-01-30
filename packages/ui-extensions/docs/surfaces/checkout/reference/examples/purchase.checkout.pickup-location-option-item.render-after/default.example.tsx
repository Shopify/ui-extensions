import {
  reactExtension,
  Text,
  usePickupLocationOptionTarget,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.pickup-location-option-item.render-after',
  () => <Extension />,
);

function Extension() {
  const {
    isTargetSelected,
    pickupLocationOptionTarget,
  } = usePickupLocationOptionTarget();

  const title = pickupLocationOptionTarget?.title;

  if (isTargetSelected) {
    return <Text>{title}</Text>;
  }

  return null;
}
