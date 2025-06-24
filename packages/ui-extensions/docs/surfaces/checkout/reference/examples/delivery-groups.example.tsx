import {render} from 'preact';
import {useDeliveryGroups} from '@shopify/ui-extensions/checkout/preact';

export default async () => {
  render(<Extension />, document.body);
}

function Extension() {
  const deliveryGroups = useDeliveryGroups();
  const deliveryOptions =
    deliveryGroups[0].deliveryOptions;

  return (
    <s-banner>
      First delivery option:{' '}
      {deliveryOptions[0].title}
    </s-banner>
  );
}
