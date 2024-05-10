import {
  Button,
  Screen,
  Navigator,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.purchase.post.action.render', (root, api) => {
  const button = root.createComponent(Button, {
    onPress: () => {
      api.action.presentModal();
    },
    title: 'Button test',
  });

  const screen = root.createComponent(Screen, {
    title: 'Post-Purchase Title',
    name: 'Post-Purchase Name',
  });

  screen.append(button);

  const navigator = root.createComponent(Navigator);
  navigator.append(screen);

  root.append(navigator);
});
