import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  return (
    <s-text>
      Shop name: {shopify.shop.name}
    </s-text>
  );
}
