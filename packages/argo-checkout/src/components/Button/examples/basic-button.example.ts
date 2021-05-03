import {extend, Button} from '@shopify/argo-checkout';

extend('Checkout::Feature::Render', (root) => {
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
