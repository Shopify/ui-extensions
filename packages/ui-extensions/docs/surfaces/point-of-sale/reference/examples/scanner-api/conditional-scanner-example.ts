import {
  CameraScanner,
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

  const cameraScanner = root.createComponent(CameraScanner);
  const stack1 = root.createComponent(Stack, {
    direction: 'horizontal',
  });
  const stack2 = root.createComponent(Stack, {
    direction: 'vertical',
    alignment: 'space-evenly',
  });

  const screen = root.createComponent(Screen, {
    title: 'Home',
    name: 'Home',
  });

  const navigator = root.createComponent(Navigator);

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

  api.scanner.scannerSourcesSubscribable.subscribe((sources) => {
    // Clear previous children to avoid duplicate appending
    stack1.children = [];
    stack2.children = [];

    if (sources.include('camera')) {
      stack1.append(cameraScanner);
    } else {
      stack2.append(dataText);
      stack2.append(sourceText);
      stack1.append(stack2);
    }
  });
});
