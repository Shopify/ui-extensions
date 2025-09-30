import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  if (
    shopify.shippingAddress.value?.countryCode !==
    'CA'
  ) {
    return (
      <s-banner>
        Sorry, we can only ship to Canada at this
        time
      </s-banner>
    );
  }
}
