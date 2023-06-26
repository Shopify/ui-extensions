import {extension, Button} from '@shopify/ui-extensions/checkout';

extension('Checkout::Dynamic::Render', (root) => {
  const button = root.createComponent(
    Button,
    {onPress: () => console.log('onPress event')},
    'Pay now',
  );

  root.appendChild(button);
});
