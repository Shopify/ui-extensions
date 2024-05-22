import {
  Navigator,
  Screen,
  Stack,
  Text,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.modal.render', (root, api) => {
  const dataText = root.createComponent('Text', {
    text: 'Scanned data: ',
  });

  const sourceText = root.createComponent('Text', {
    text: 'Scanned data source: ',
  });

  const stack1 = root.createComponent(Stack, {
    direction: 'horizontal',
  });

  const screen = root.createComponent(Screen, {
    title: 'Home',
    name: 'Home',
  });

  const navigator = root.createComponent(Navigator);

  stack1.append(dataText);
  stack1.append(sourceText);
  screen.append(stack1);
  navigator.append(screen);
  root.append(navigator);

  api.scanner.scannerDataSubscribable.subscribe((data, source) => {
    dataText.updateProps({
      text: `Scanned data: ${data || ''}`,
    });
    sourceText.updateProps({
      text: `Scanned data source: ${source || ''}`,
    });
  });
});
