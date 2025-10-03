import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-banner>
      Contact the merchant to complete your
      payment.
    </s-banner>
  );
}
