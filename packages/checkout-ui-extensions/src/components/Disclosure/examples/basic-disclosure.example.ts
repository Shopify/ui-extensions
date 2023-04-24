import {
  extend,
  Button,
  View,
  Disclosure,
} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const disclosure = root.createComponent(Disclosure, {}, [
    root.createComponent(Button, {toggles: 'one'}, 'Toggle'),
    root.createComponent(
      View,
      {border: 'base', padding: 'base', id: 'one'},
      'Content',
    ),
  ]);

  root.appendChild(disclosure);
});
