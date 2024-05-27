import {
  CameraScanner,
  Screen,
  Text,
  Stack,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.home.modal.render',
  (root, api) => {
    const mainScreen = root.createComponent(
      Screen,
      {
        title: 'CameraScanner',
        name: 'Camera Scanner Title',
      },
    );

    const cameraScanner = root.createComponent(
      CameraScanner,
    );

    const text = root.createComponent(
      Text,
      null,
      'Scanned data: ',
    );

    mainScreen.append(cameraScanner);
    mainScreen.append(text);
    root.append(mainScreen);

    api.scanner.scannerDataSubscribable.subscribe(
      (data) => {
        text.replaceChildren(
          `Scanned data: ${data || ''}`,
        );
      },
    );
  },
);
