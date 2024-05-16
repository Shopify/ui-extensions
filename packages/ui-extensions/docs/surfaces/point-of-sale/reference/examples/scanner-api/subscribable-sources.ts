import {
  Navigator,
  Screen,
  Stack,
  Text,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.modal.render', (root, api) => {
  const scannerSourcesText = root.createComponent('Text', {
    text: 'Available scanner sources: ',
  });

  const stack1 = root.createComponent(Stack, {
    direction: 'horizontal',
  });

  const screen = root.createComponent(Screen, {
    title: 'Home',
    name: 'Home',
  });

  const navigator = root.createComponent(Navigator);

  stack1.append(scannerSourcesText);
  screen.append(stack1);
  navigator.append(screen);
  root.append(navigator);

  api.scanner.scannerSourcesSubscribable.subscribe((sources) => {
    scannerSourcesText.updateProps({
      text: `Available scanner sources: ${sources}`,
    });
  });
});
