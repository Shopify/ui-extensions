import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  // As of version 2025-10, you no longer need the `useSubscription` hook.
  // When you access `.value` on subscribable properties,
  // Preact will automatically re-render as `.value` changes.
  return (
    <s-banner>
      {shopify.cost.totalAmount.value.amount}
    </s-banner>
  );
}
