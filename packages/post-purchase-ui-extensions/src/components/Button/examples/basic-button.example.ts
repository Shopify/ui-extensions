import {extend, Button} from '@shopify/post-purchase-ui-extensions';

extend('Checkout::PostPurchase::Render', (root) => {
  const button = root.createComponent(
    Button,
    {
      // eslint-disable-next-line no-console
      onPress: () => console.log('Pressed!'),
    },
    'Press me',
  );

  root.appendChild(button);
});
