import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-banner>
      Note that tracking info update is subject to
      the courier who delivers your order
    </s-banner>
  );
}
