import React, {useEffect} from 'react';
import {
  Navigator,
  Screen,
  Stack,
  Text,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.modal.render', (root, api) => {
  api.scanner.scannerDataSubscribable.subscribe((data) => {
    if (data) {
      api.cart.addLineItem(12345678, 1);
    }
    text.updateProps({
      text: `Scanned data: ${data || ''}`,
    });
  });

  const text = root.createComponent('Text', {
    text: 'Scanned data: ',
  });

  const stack = root.createComponent(Stack, {
    direction: 'horizontal',
    flexChildren: true,
    flex: 1,
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
});
