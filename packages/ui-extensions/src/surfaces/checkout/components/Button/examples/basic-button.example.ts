import {extend, Button} from '@shopify/ui-extensions/checkout';

extend('Checkout::Dynamic::Render', (root) => {
  const button = root.createComponent(
    Button,
    {onPress: () => console.log('onPress event')},
    'Pay now',
  );

  root.appendChild(button);
});