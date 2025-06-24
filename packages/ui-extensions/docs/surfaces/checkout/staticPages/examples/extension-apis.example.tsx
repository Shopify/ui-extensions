import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useShippingAddress} from '@shopify/ui-extensions/checkout/preact';

export default async () => {
  render(<Extension />, document.body);
}

function Extension() {
  const {countryCode} = useShippingAddress();

  if (countryCode !== 'CA') {
    return (
      <s-banner>
        Sorry, we can only ship to Canada at this
        time
      </s-banner>
    );
  }
}
