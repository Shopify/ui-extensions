import {render} from 'preact';
import {useSubscription} from '@shopify/ui-extensions/checkout/preact';

export default async () => {
  render(<Extension />, document.body);
}

function Extension() {
  const {id} = useSubscription(
    shopify.orderConfirmation,
  );

  if (id) {
    return (
      <s-banner>
        Please include your order confirmation ID
        ({id}) in support requests
      </s-banner>
    );
  }

  return null;
}
