import {extension} from '@shopify/ui-extensions-react/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root, {analytics}) => {
    analytics
      .visitor({
        email: 'someEmail@example.com',
        phone: '+1 555 555 5555',
      })
      .then((result) => {
        if (result.type === 'success') {
          console.log(
            `Success`,
            JSON.stringify(result),
          );
        } else {
          console.log(
            `Error`,
            JSON.stringify(result),
          );
        }
      });
  },
);
