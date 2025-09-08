import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  // As of version 2025-10, you no longer need the `useApi` hook.
  // The full API object is accessible via the global `shopify` object.
  return (
    <s-text>
      Shop name: {shopify.shop.name}
    </s-text>
  );
}
