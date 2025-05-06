import {render} from 'preact';
import {useSubscription} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  // Equivalent to the useTotalAmount() hook to subscribe and re-render your extension on changes
  const totalAmount = useSubscription(
    shopify.cost.totalAmount,
  );

  return (
    <s-banner>{totalAmount.amount}</s-banner>
  );
}
