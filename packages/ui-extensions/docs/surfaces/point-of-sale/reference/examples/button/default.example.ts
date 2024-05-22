import {
  Button,
  Navigator,
  Screen,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.home.modal.render',
  (root, api) => {
    const button = root.createComponent(Button, {
      title: 'Press me!',
      onPress: () => {
        api.toast.show('Button tapped!');
      },
    });

    const screen = root.createComponent(Screen, {
      name: 'Home',
      title: 'Home',
    });
    screen.append(button);

    const navigator =
      root.createComponent(Navigator);

    navigator.append(screen);

    root.append(navigator);
  },
);
