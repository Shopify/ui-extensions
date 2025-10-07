import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const order = shopify.order.value;

  if (order) {
    return (
      <s-banner>
        Please include your order ID ({order.id})
        in support requests
      </s-banner>
    );
  }

  return null;
}
