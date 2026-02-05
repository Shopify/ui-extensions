import {extension, Button, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.order-details.action.render',
  (root, api) => {
    const {data, close} = api;

    let errorBanner;

    const button = root.createComponent(Button, {
      title: 'Fulfill Order',
      onPress: async () => {
        // Remove any existing error banner
        if (errorBanner) {
          root.removeChild(errorBanner);
          errorBanner = null;
        }

        try {
          const orderId = data.selected[0]?.id;

          const response = await fetch(`/api/orders/${orderId}/fulfill`, {
            method: 'POST',
          });

          const result = await response.json();

          if (!response.ok) {
            throw new Error(result.error || 'Fulfillment failed');
          }

          console.log('Order fulfilled:', result);
          close();
        } catch (err) {
          errorBanner = root.createComponent(
            Text,
            {},
            `Error: ${err.message}`,
          );
          root.insertChildBefore(errorBanner, button);
        }
      },
    });

    root.appendChild(button);
  },
);
