import '@shopify/ui-extensions/preact';
import {render} from 'preact';

import {usePurchasingCompany} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const purchasingCompany = usePurchasingCompany();

  if (!purchasingCompany) {
    return null;
  }

  return (
    <s-banner heading="B2B order">
      Purchasing on behalf of{' '}
      {purchasingCompany.company.name},{' '}
      location:{' '}
      {purchasingCompany.location.name}
    </s-banner>
  );
}
