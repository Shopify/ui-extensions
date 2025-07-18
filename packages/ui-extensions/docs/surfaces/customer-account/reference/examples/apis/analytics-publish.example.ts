import {extension} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, {analytics}) => {
    analytics
      .publish(
        'customer-account-extension-loaded',
        {
          extensionName: 'My Extension',
        },
      )
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
        console.error('failed to publish event');
        console.error('error', error);
      });
  },
);
