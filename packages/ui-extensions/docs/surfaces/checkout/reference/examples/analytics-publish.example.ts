import {extension} from '@shopify/ui-extensions-react/checkout';
import {useEffect} from 'react';

export default extension(
  'purchase.checkout.block.render',
  (root, {analytics}) => {
    useEffect(() => {
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
            console.log(
              'failed to publish event',
            );
          }
        })
        .catch((error) => {
          console.error(
            'failed to publish event',
          );
          console.error('error', error);
        });
    });
  },
);
