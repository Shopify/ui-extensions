import {
  extension,
  Button,
  View,
  Disclosure,
} from '@shopify/ui-extensions/checkout';

export default extension('Checkout::Dynamic::Render', (root) => {
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
