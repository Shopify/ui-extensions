import {extension, Button} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const button = root.createComponent(
    Button,
    {onPress: () => console.log('onPress event')},
    'Pay now',
  );

  root.appendChild(button);
});
