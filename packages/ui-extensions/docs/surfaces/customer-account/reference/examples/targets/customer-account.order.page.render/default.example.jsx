import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-page heading="Order Page Extension">
      <s-text>This is an order-specific full page extension.</s-text>
    </s-page>
  );
}
