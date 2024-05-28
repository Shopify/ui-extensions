import {
  Navigator,
  Screen,
  ScrollView,
  Image,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.home.modal.render',
  (root, api) => {
    const image = root.createComponent(Image, {
      src: 'example.png',
    });

    const scrollView =
      root.createComponent(ScrollView);
    scrollView.append(image);

    const screen = root.createComponent(Screen, {
      name: 'Image',
      title: 'Image Example',
    });
    screen.append(scrollView);

    const navigator =
      root.createComponent(Navigator);
    navigator.append(screen);

    root.append(navigator);
  },
);
