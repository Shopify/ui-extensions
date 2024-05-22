import React from 'react';
import {
  Navigator,
  Screen,
  Stack,
  Text,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.modal.render', (root, api) => {
  const text = root.createComponent('Text', null, 'Scanned data: ');

  const stack = root.createComponent(Stack, {
    direction: 'horizontal',
  });

  const screen = root.createComponent(Screen, {
    title: 'Home',
    name: 'Home',
  });

  const navigator = root.createComponent(Navigator);

  stack.append(text);
  screen.append(stack);
  navigator.append(screen);
  root.append(navigator);

  api.scanner.scannerDataSubscribable.subscribe((data) => {
    text.replaceChildren(`Scanned data: ${data || ''}`);
  });
});
