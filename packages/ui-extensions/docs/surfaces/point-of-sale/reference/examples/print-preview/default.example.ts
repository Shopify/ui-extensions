import {
  Button,
  PrintPreview,
  Screen,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.home.modal.render',
  (root, api) => {
    const homeScreen = root.createComponent(
      Screen,
      {
        name: 'Home',
        title: 'Home',
      },
    );

    const printButton = root.createComponent(
      Button,
      {
        title: 'Print',
        onPress: api.print.print,
      },
    );

    const printPreview = root.createComponent(
      PrintPreview,
      {
        src: '/documents/test-print',
      },
    );

    homeScreen.append(printPreview);

    root.append(homeScreen);
  },
);
