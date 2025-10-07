import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-banner>
      Fulfillment details not yet available.
    </s-banner>
  );
}
