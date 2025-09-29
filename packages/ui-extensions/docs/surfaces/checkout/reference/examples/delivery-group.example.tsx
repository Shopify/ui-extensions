import '@shopify/ui-extensions/preact';
import {render} from 'preact';

import {useDeliveryGroup} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const firstDeliveryGroup = useDeliveryGroup(
    shopify.deliveryGroups.value[0],
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
