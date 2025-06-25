import {render} from 'preact';
import {
  useDeliveryGroups,
  useDeliveryGroup,
} from '@shopify/ui-extensions/checkout/preact';

export default async () => {
  render(<Extension />, document.body);
}

function Extension() {
  const deliveryGroups = useDeliveryGroups();
  const firstDeliveryGroup = useDeliveryGroup(
    deliveryGroups[0],
  );

  if (!firstDeliveryGroup) {
    return null;
  }

  const selectedDeliveryOption =
    firstDeliveryGroup?.selectedDeliveryOption;

  return (
    <s-banner>
      Selected delivery option:{' '}
      {selectedDeliveryOption?.title}
    </s-banner>
  );
}
