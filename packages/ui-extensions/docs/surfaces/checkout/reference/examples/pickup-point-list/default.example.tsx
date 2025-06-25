import {render} from 'preact';
import {useSubscription} from '@shopify/ui-extensions/checkout/preact';

export default async () => {
  render(<Extension />, document.body);
}

function Extension() {
  const locationFormShown = useSubscription(
    shopify.isLocationFormVisible,
  );

  if (locationFormShown) {
    return (
      <s-text>
        The customer is being asked to provide
        their location.
      </s-text>
    );
  } else {
    return (
      <s-text>
        Pickup points are being shown.
      </s-text>
    );
  }
}
