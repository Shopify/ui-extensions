import {extension, Checkbox, Button, BlockStack, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {close} = api;
    let agreed = false;

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'Terms of service',
    );

    const checkbox = root.createComponent(Checkbox, {
      label: 'I agree to the fulfillment provider terms of service',
      checked: agreed,
      onChange: (value) => {
        agreed = value;
        checkbox.updateProps({error: undefined});
      },
    });

    const connectButton = root.createComponent(
      Button,
      {
        variant: 'primary',
        onPress: async () => {
          if (!agreed) {
            checkbox.updateProps({error: 'You must agree to the terms before connecting'});
            return;
          }
          await fetch('/api/fulfillment/connect', {method: 'POST'});
          close();
        },
      },
      'Connect provider',
    );

    stack.appendChild(heading);
    stack.appendChild(checkbox);
    stack.appendChild(connectButton);
    root.appendChild(stack);
  },
);
