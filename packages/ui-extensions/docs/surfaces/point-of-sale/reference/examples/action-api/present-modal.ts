import {Button, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.purchase.post.action.menu-item.render',
  (root, api) => {
    const actionItem = root.createComponent(Button, {
      onPress: () => api.action.presentModal(),
    });

    root.append(actionItem);
  },
);
