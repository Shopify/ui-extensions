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
    .publish('checkout-extension-loaded', {
      extensionName: 'My Extension',
    })
    .then((result) => {
      if (result) {
        console.log(
          'succesfully published event, web pixels can now recieve this event',
        );
      } else {
        console.log('failed to publish event');
      }
    })
    .catch((error) => {
      console.log('failed to publish event');
      console.log('error', error);
    });

  return <Banner>See console for result</Banner>;
}
