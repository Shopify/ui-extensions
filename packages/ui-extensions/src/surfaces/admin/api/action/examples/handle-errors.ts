import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.order-details.action.render',
  (root, api) => {
    const {data, close} = api;

    const orderId = data.selected[0]?.id;

    fetch(`/api/orders/${orderId}/fulfill`, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          console.log('Order fulfilled:', result);
          close();
        } else {
          console.error('Fulfillment failed:', result.error);
        }
      })
      .catch((error) => {
        console.error('Error:', error.message);
      });
  },
);
