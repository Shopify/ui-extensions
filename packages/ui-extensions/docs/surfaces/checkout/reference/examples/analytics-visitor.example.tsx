import {useState, useEffect} from 'react';
import {
  Banner,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/checkout';

export const purchaseCheckoutBlockRender =
  reactExtension(
    'purchase.checkout.block.render',
    () => <Extension />,
  );

function Extension() {
  const {analytics} = useApi();

  analytics
    .visitor({
      email: 'someEmail@example.com',
      phone: '+1 555 555 5555',
    })
    .then((result) => {
      if (result.type === 'success') {
        console.log('Success', result);
      } else {
        console.error('Error', result);
      }
    });

  return <Banner>See console for result</Banner>;
}
