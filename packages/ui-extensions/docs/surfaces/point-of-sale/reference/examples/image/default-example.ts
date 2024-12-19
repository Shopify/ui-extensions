import {
  Navigator,
  Screen,
  ScrollView,
  Image,
  extension,
  Box,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.modal.render', (root, api) => {
  const image = root.createComponent(Image, {
    src: 'example.png',
    size: 's',
  });

  const filledImage = root.createComponent(Image, {
    src: 'example.png',
    size: 'cover',
  });

  const scrollView = root.createComponent(ScrollView);
  scrollView.append(image);

  const box = scrollView.createComponent(Box, {
    blockSize: '600px',
    inlineSize: '600px',
    padding: '400',
  });

  box.append(filledImage);
  scrollView.append(box);

  const screen = root.createComponent(Screen, {
    name: 'Image',
    title: 'Image Example',
  });
  screen.append(scrollView);

  const navigator = root.createComponent(Navigator);
  navigator.append(screen);

  root.append(navigator);
});
