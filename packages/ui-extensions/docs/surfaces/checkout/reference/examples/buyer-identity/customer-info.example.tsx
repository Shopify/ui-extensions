import '@shopify/ui-extensions/preact';
import {render} from 'preact';

import {useCustomer} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const customer = useCustomer();

  if (!customer) {
    return null;
  }

  const name =
    customer.fullName ?? 'Customer';

  return (
    <s-banner heading="Welcome back">
      {name}, you have {customer.ordersCount}{' '}
      previous{' '}
      {customer.ordersCount === 1
        ? 'order'
        : 'orders'}{' '}
      with us.
    </s-banner>
  );
}
