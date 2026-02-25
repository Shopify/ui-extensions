import {extension, Banner, Button, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {close} = api;

    const stack = root.createComponent(BlockStack);

    const dismissButton = root.createComponent(
      Button,
      {onPress: () => close()},
      'Dismiss',
    );

    const banner = root.createComponent(
      Banner,
      {
        title: 'Missing required fields',
        tone: 'warning',
        secondaryAction: dismissButton,
      },
      'The product is missing a weight and shipping dimensions. These fields are required by your fulfillment provider before orders can be processed.',
    );

    stack.appendChild(banner);
    root.appendChild(stack);
  },
);
