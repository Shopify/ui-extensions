import {
  extension,
  Checkbox,
  Link,
} from '@shopify/checkout-ui-extensions';

extension('Checkout::Dynamic::Render', (root) => {
  const checkbox = root.createComponent(
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
  );

  root.appendChild(checkbox);
});
