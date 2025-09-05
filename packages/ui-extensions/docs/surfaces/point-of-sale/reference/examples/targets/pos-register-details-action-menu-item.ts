import {Button, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.register-details.action.menu-item.render',
  (root, api) => {
    const button = root.createComponent(Button, {
      title: 'Open Cash Drawer',
      onPress: () => {
        api.cashDrawer.open();
      },
    });

    root.append(button);
  },
);
