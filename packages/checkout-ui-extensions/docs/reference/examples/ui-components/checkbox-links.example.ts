import {
  extend,
  BlockStack,
  Checkbox,
  Button,
  Link,
} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const blockStack = root.createComponent(
    BlockStack,
    {
      border: 'base',
      maxInlineSize: 500,
      padding: 'base',
      cornerRadius: 'large',
    },
    [
      root.createComponent(
        Checkbox,
        {
          id: 'checkbox1',
          name: 'checkboxchoices',
        },
        [
          ' I agree to the ',
          root.createComponent(
            Link,
            {to: 'https://www.shopify.com'},
            'terms and conditions',
          ),
          ' and ',
          root.createComponent(
            Link,
            {to: 'https://www.shopify.com'},
            'privacy policy',
          ),
          ' of the store related to pricing, payment, shipping, returns, and liability set forth by Ride Sports.',
        ],
      ),
      root.createComponent(Button, {}, 'Pay now'),
    ],
  );

  root.appendChild(blockStack);
});
