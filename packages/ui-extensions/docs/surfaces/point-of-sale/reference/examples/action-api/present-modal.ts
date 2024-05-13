import {
  ActionItem,
  Screen,
  Navigator,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.purchase.post.action.render', (root, api) => {
  const actionItem = root.createComponent(ActionItem, {
    title: 'My App',
    onPress: () => api.action.presentModal(),
    enabled: true,
  });

  root.append(actionItem);
});
