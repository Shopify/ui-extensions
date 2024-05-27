import {
  Badge,
  Screen,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.home.modal.render',
  (root) => {
    const mainScreen = root.createComponent(
      Screen,
      {
        name: 'Home',
        title: 'Home',
      },
    );

    const badge = root.createComponent(Badge, {
      text: 'Badge',
      variant: 'success',
      status: 'complete',
    });

    mainScreen.append(badge);
    root.append(mainScreen);
  },
);
