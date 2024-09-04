import {Button, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.customer-details.action.menu-item.render',
  (root, api) => {
    const button = root.createComponent(Button, {
      onPress: () => {
        api.action.presentModal();
      },
    });

    root.append(button);
  },
);
